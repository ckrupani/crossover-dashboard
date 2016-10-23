/**
 * Module dependencies
 */
 import template from './pieChart.template.html!text';
import './pieChart.css!';

/**
 * This directive shows pie chart
 */
export default [() => {
    return {
        restrict: 'E',
        template: template,
        scope: {
            data: '=',
            name: '@'
        },
        link(scope, element, attr) {
            
            let chartOptions = {
                credits: {
                    enabled: false
                },
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    renderTo: $(element).find('.pieChart .chartContainer')[0],
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            verticalAlign: 'top',
                            enabled: true,
                            color: '#000000',
                            connectorWidth: 1,
                            distance: -20,
                            connectorColor: '#000000',
                            formatter: function () {
                                if (this.point.y === '0' || this.point.y === 0) {
                                    return '';
                                } else {
                                    return this.point.y ;
                                }
                            }
                        },
                        showInLegend: false
                    }
                },
                series: [{
                    name: scope.name,
                    colorByPoint: true,
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    point: {
                        events: {
                            legendItemClick: function () {
                                return false;
                            },
                            click: function () {
                                return false;
                            }
                        }
                    },
                    data: scope.data
                }]
            };

            let total, passed;

            if (scope.data.length > 0) {
                total = scope.data.map(dt => dt.y).reduce((prev, curr) => {
                    return prev + curr;
                }, 0);
                passed = scope.data.filter(data => data.name === 'Passed')[0].y;

                scope.passPercentage = Math.floor((passed/total)*100);

                Highcharts.chart(chartOptions);

                if (scope.passPercentage > 70) {
                    $(element).find('.pieChart .barLabel .value').css('color', '#449D44');
                } else {
                    $(element).find('.pieChart .barLabel .value').css('color', 'orange');
                }

                scope.$watch('data', (newValue, oldValue) => {
                    if (newValue) {
                        var newChartOptions = Object.assign({}, chartOptions);
                        newChartOptions.series[0].data = newValue;
                        Highcharts.chart(newChartOptions);
                    }
                }, true);

                scope.$watch('name', (newValue, oldValue) => {
                    if (newValue) {
                        var newChartOptions = Object.assign({}, chartOptions);
                        newChartOptions.series[0].name = newValue;
                        Highcharts.chart(newChartOptions);
                    }
                }, true);
            }
       }
   };
}];
