
import 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('pieChart Directive', () => {

    var $compile,
        $rootScope,
        $window,
        element;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
        $window = $injector.get('$window');
        $window.Highcharts = {
            chart: function (options) {
                return options;
            }
        };
    }));

    it('should output correct html elements', () => {
        $rootScope.chartData = [{
            name: 'Failed',
            y: 48,
            color: 'red'
        }, {
            name: 'Passed',
            y: 148,
            color: 'green'
        }];
        spyOn($window.Highcharts, 'chart');
        element = $compile('<pie-chart name="Unit" data="chartData"></pie-chart>')($rootScope);
        $rootScope.$digest();

        expect(element.find('.pieChart')).toBeDefined();
        expect(element.find('.pieChart .chartContainer')).toBeDefined();
        expect(element.find('.pieChart .barLabel')).toBeDefined();
        expect(element.find('.pieChart .barLabel .value')).toBeDefined();
        expect(element.find('.pieChart .barLabel .text')).toBeDefined();
    });

    it('should call chart method of Highcharts', () => {
        $rootScope.chartData = [{
            name: 'Failed',
            y: 48,
            color: 'red'
        }, {
            name: 'Passed',
            y: 148,
            color: 'green'
        }];
        spyOn($window.Highcharts, 'chart');
        element = $compile('<pie-chart name="Unit" data="chartData"></pie-chart>')($rootScope);
        $rootScope.$digest();

        expect($window.Highcharts.chart).toHaveBeenCalled();
    });

    it('should not call chart method of Highcharts when chartData is empty', () => {
        $rootScope.chartData = [];
        spyOn($window.Highcharts, 'chart');
        element = $compile('<pie-chart name="Unit" data="chartData"></pie-chart>')($rootScope);
        $rootScope.$digest();

        expect($window.Highcharts.chart).not.toHaveBeenCalled();
    });

    it('should set green color correctly on test pass percentage', () => {
        $rootScope.chartData = [{
            name: 'Failed',
            y: 48,
            color: 'red'
        }, {
            name: 'Passed',
            y: 148,
            color: 'green'
        }];
        spyOn($window.Highcharts, 'chart');
        element = $compile('<pie-chart name="Unit" data="chartData"></pie-chart>')($rootScope);
        $rootScope.$digest();

        expect(element.find('.pieChart .barLabel .value').css('color')).toBe('rgb(68, 157, 68)');
    });

    it('should set orange color correctly on test pass percentage', () => {
        $rootScope.chartData = [{
            name: 'Failed',
            y: 148,
            color: 'red'
        }, {
            name: 'Passed',
            y: 40,
            color: 'green'
        }];
        spyOn($window.Highcharts, 'chart');
        element = $compile('<pie-chart name="Unit" data="chartData"></pie-chart>')($rootScope);
        $rootScope.$digest();

        expect(element.find('.pieChart .barLabel .value').css('color')).toBe('orange');
    });  
});