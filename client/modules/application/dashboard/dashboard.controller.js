
/**
 * Module dependencies.
 */
// import MD5 from 'crypto-js/md5';

/**
 * DashboardController contains logic to handle dashboard functionality. It uses apis from Build service. 
 */
export default class Controller {
    constructor($scope, Build) {
        let thisController = this;
        this.buildService = Build;
        this.buildList = [];

        Build.getList().then(data => {
            data.forEach(item => {

                item.collapse = false;

                ({
                    metrics: item.metrics.color,
                    build: item.build.color,
                    unitTest: item.unitTest.color,
                    functionalTest: item.functionalTest.color
                } = this.setStatusColor(item));

                ({
                    build: item.build.willRun,
                    unitTest: item.unitTest.willRun,
                    functionalTest: item.functionalTest.willRun
                } = this.checkWhetherWillRun(item));

                ({
                    unitTest: item.unitTest.chartData,
                    functionalTest: item.functionalTest.chartData
                } = this.setPieData(item));
            });
            this.buildList = data;
        });

        $('#accordion').on('hidden.bs.collapse', (e) => {
            thisController.buildList[+e.target.id].collapse = false;
            $scope.$apply();

        });

        $('#accordion').on('shown.bs.collapse', (e) => {
            thisController.buildList[+e.target.id].collapse = true;
            $scope.$apply();
        });
    }

    setStatusColor(data) {
        return {
            metrics: this.chooseColor(data.metrics.state),
            build: this.chooseColor(data.build.state),
            unitTest: this.chooseColor(data.unitTest.state),
            functionalTest: this.chooseColor(data.functionalTest.state)
        };
    }

    chooseColor(status) {
        if (status === 'Running') {
            return 'blue';
        } else if (status === 'Accepted') {
            return 'green';
        } else if (status === 'Rejected') {
            return 'red';
        } else {
            return 'white';
        }
    }

    checkWhetherWillRun(data) {
        let runStatus = {};

        if (data.metrics.state !== 'Rejected' && data.build.state === 'Pending') {
            runStatus.build = true;
        } else if (data.metrics.state === 'Rejected' && data.build.state === 'Pending') {
            runStatus.build = false;
        }

        if (data.metrics.state !== 'Rejected' && data.unitTest.state === 'Pending') {
            if (data.build.state !== 'Rejected' && data.unitTest.state === 'Pending') {
                runStatus.unitTest = true;
            } else if (data.build.state === 'Rejected' && data.unitTest.state === 'Pending') {
                runStatus.unitTest = false;
            }
        } else if (data.metrics.state === 'Rejected' && data.unitTest.state === 'Pending') {
            runStatus.unitTest = false;
        }

        if (data.metrics.state !== 'Rejected' && data.functionalTest.state === 'Pending') {
            if (data.build.state !== 'Rejected' && data.functionalTest.state === 'Pending') {
                if (data.unitTest.state !== 'Rejected' && data.functionalTest.state === 'Pending') {
                    runStatus.functionalTest = true;
                } else if (data.unitTest.state === 'Rejected' && data.functionalTest.state === 'Pending') {
                    runStatus.functionalTest = false;
                }
            } else if (data.build.state === 'Rejected' && data.functionalTest.state === 'Pending') {
                runStatus.functionalTest = false;
            }
        } else if (data.metrics.state === 'Rejected' && data.functionalTest.state === 'Pending') {
            runStatus.functionalTest = false;
        }

        return runStatus;
    }

    setPieData(data) {
        let chartData = {
            unitTest: [],
            functionalTest: []
        };

        if (data.unitTest.passed && data.unitTest.failed) {
            chartData.unitTest = [{
                name: 'Failed',
                y: data.unitTest.failed,
                color: 'red'
            }, {
                name: 'Passed',
                y: data.unitTest.passed,
                color: 'green'
            }];
        }

        if (data.functionalTest.passed && data.functionalTest.failed) {
            chartData.functionalTest = [{
                name: 'Failed',
                y: data.functionalTest.failed,
                color: 'red'
            }, {
                name: 'Passed',
                y: data.functionalTest.passed,
                color: 'green'
            }];
        }

        return chartData;
    }
}
