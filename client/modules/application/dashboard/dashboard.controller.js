
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
                this.setStatusColor(item);
                this.checkWhetherWillRun(item);
                this.setPieData(item);
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
        data.metrics.color = this.chooseColor(data.metrics.state);
        data.build.color = this.chooseColor(data.build.state);
        data.unitTest.color = this.chooseColor(data.unitTest.state);
        data.functionalTest.color = this.chooseColor(data.functionalTest.state);
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
        if (data.metrics.state !== 'Rejected' && data.build.state === 'Pending') {
            data.build.willRun = true;
        } else if (data.metrics.state === 'Rejected' && data.build.state === 'Pending') {
            data.build.willRun = false;
        }

        if (data.metrics.state !== 'Rejected' && data.unitTest.state === 'Pending') {
            if (data.build.state !== 'Rejected' && data.unitTest.state === 'Pending') {
                data.unitTest.willRun = true;
            } else if (data.build.state === 'Rejected' && data.unitTest.state === 'Pending') {
                data.unitTest.willRun = false;
            }
        } else if (data.metrics.state === 'Rejected' && data.unitTest.state === 'Pending') {
            data.unitTest.willRun = false;
        }

        if (data.metrics.state !== 'Rejected' && data.functionalTest.state === 'Pending') {
            if (data.build.state !== 'Rejected' && data.functionalTest.state === 'Pending') {
                if (data.unitTest.state !== 'Rejected' && data.functionalTest.state === 'Pending') {
                    data.functionalTest.willRun = true;
                } else if (data.unitTest.state === 'Rejected' && data.functionalTest.state === 'Pending') {
                    data.functionalTest.willRun = false;
                }
            } else if (data.build.state === 'Rejected' && data.functionalTest.state === 'Pending') {
                data.functionalTest.willRun = false;
            }
        } else if (data.metrics.state === 'Rejected' && data.functionalTest.state === 'Pending') {
            data.functionalTest.willRun = false;
        }
    }

    setPieData(data) {
        if (data.unitTest.passed && data.unitTest.failed) {
            data.unitTest.chartData = [{
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
            data.functionalTest.chartData = [{
                name: 'Failed',
                y: data.functionalTest.failed,
                color: 'red'
            }, {
                name: 'Passed',
                y: data.functionalTest.passed,
                color: 'green'
            }];
        }
    }
}
