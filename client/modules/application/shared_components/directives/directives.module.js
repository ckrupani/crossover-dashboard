/*global angular*/

/**
 * Module dependencies
 */
import loader from './loader/loader.directive';
import progressBar from './progressBar/progressBar.directive';
import utfIcon from './utfIcon/utfIcon.directive';
import arrow from './arrow/arrow.directive';
import progressBarWithText from './progressBarWithText/progressBarWithText.directive';
import pieChart from './pieChart/pieChart.directive';

/**
 * This modules contains all directives.
 */
export default angular.module('Directives', [])
    
    .directive('loader', loader)
    .directive('progressBar', progressBar)
    .directive('utfIcon', utfIcon)
    .directive('arrow', arrow)
    .directive('progressBarWithText', progressBarWithText)
    .directive('pieChart', pieChart);
