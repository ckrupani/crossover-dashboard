
import 'angular-mocks';
import 'jquery';
import ServiceModule from '../shared_components/services/services.module';
import DashboardController from './dashboard.controller';

describe('Dashboard Controller', () => {

    let dashboardCtrl, $scope, fakeData = [{
        type: 'build',
        name: 'Tenrox-R1_1235',
        owner: '',
        time: '4/18/2014 10:00am',
        state: 'Pending',
        metrics: {
            percentComplete: 10,
            state: 'Running'
        },
        build: {
            percentComplete: 0,
            state: 'Pending'
        },
        unitTest: {
            percentComplete: 0,
            state: 'Pending',
            passed: 142,
            failed: 46,
            codeCoverage: 76
        },
        functionalTest: {
            percentComplete: 0,
            state: 'Pending'
        }
    }];

    beforeEach(module(ServiceModule.name));

    beforeEach(inject(function ($rootScope, Build) {
        spyOn(Build, 'getList').and.callFake(function() {
            return {
                then: function(callback) { return callback(fakeData); }
            };
        });
        $scope = $rootScope.$new();
        dashboardCtrl = new DashboardController($scope, Build);
    }));

    describe('Constuctor', () => {
        it('should populate list of all builds', () => {
            expect(dashboardCtrl.buildList.length).toBe(1);
        });

        it('should set collapse to false on every build item', () => {
            expect(dashboardCtrl.buildList[0].collapse).toBe(false);
        });

        it('should set appropriate color for each task', () => {
            expect(dashboardCtrl.buildList[0].metrics.color).toBe('blue');
            expect(dashboardCtrl.buildList[0].build.color).toBe('white');
            expect(dashboardCtrl.buildList[0].unitTest.color).toBe('white');
            expect(dashboardCtrl.buildList[0].functionalTest.color).toBe('white');
        });

        it('should set appropriate run status for each task', () => {
            expect(dashboardCtrl.buildList[0].metrics.willRun).toBeUndefined();
            expect(dashboardCtrl.buildList[0].build.willRun).toBe(true);
            expect(dashboardCtrl.buildList[0].unitTest.willRun).toBe(true);
            expect(dashboardCtrl.buildList[0].functionalTest.willRun).toBe(true);
        });

        it('should set appropriate data for pie chart', () => {
            expect(dashboardCtrl.buildList[0].unitTest.chartData.length).toBe(2);
            expect(dashboardCtrl.buildList[0].functionalTest.chartData.length).toBe(0);
        });
    });

    describe('setStatusColor', () => {
        it('should return appropriate color for each task based on their state', () => {
            expect(dashboardCtrl.setStatusColor(fakeData[0])).toEqual({
                metrics: 'blue',
                build: 'white',
                unitTest: 'white',
                functionalTest: 'white'
            });
        });
    });

    describe('chooseColor', () => {
        it('should return blue for "Running" state', () => {
            expect(dashboardCtrl.chooseColor('Running')).toBe('blue');
        });
        it('should return green for "Accepted" state', () => {
            expect(dashboardCtrl.chooseColor('Accepted')).toBe('green');
        });
        it('should return red for "Rejected" state', () => {
            expect(dashboardCtrl.chooseColor('Rejected')).toBe('red');
        });
        it('should return white for any other state', () => {
            expect(dashboardCtrl.chooseColor('XYZ')).toBe('white');
        });
    });

    describe('checkWhetherWillRun', () => {
        it('should return true for build when metrics are not rejected', () => {
            expect(dashboardCtrl.checkWhetherWillRun(fakeData[0]).build).toBe(true);
        });
        it('should return false for build, unitTest and functionalTest when metrics are rejected', () => {
            let results = dashboardCtrl.checkWhetherWillRun(Object.assign({}, fakeData[0], { metrics: {
                percentComplete: 10,
                state: 'Rejected'
            }}));
            expect(results.build).toBe(false);
            expect(results.unitTest).toBe(false);
            expect(results.functionalTest).toBe(false);
        });
        it('should return true for unitTest when metrics and build are not rejected', () => {
            expect(dashboardCtrl.checkWhetherWillRun(fakeData[0]).unitTest).toBe(true);
        });
        it('should return false for unitTest and functionalTest when build is rejected', () => {
            let results = dashboardCtrl.checkWhetherWillRun(Object.assign({}, fakeData[0], { build: {
                percentComplete: 10,
                state: 'Rejected'
            }}));
            expect(results.unitTest).toBe(false);
            expect(results.functionalTest).toBe(false);
        });
        it('should return true for functionalTest when metrics, build and unitTest are not rejected', () => {
            expect(dashboardCtrl.checkWhetherWillRun(fakeData[0]).functionalTest).toBe(true);
        });
        it('should return false for functionalTest when unitTest is rejected', () => {
            let results = dashboardCtrl.checkWhetherWillRun(Object.assign({}, fakeData[0], { unitTest: {
                percentComplete: 10,
                state: 'Rejected'
            }}));
            expect(results.functionalTest).toBe(false);
        });
    });

    describe('setPieData', () => {
        it('should return chartData when tests\' information is available', () => {
            expect(dashboardCtrl.setPieData(fakeData[0]).unitTest).toEqual([{
                name: 'Failed',
                y: 46,
                color: 'red'
            }, {
                name: 'Passed',
                y: 142,
                color: 'green'
            }]);
        });
        it('should return empty data when tests\' information is not available', () => {
            expect(dashboardCtrl.setPieData(fakeData[0]).functionalTest).toEqual([]);
        });
    });
});
