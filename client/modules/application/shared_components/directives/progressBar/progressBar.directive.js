/**
 * Module dependencies
 */
import template from './progressBar.template.html!text';
import './progressBar.css!';

/**
 * This directive shows simple progress bar.
 */
export default function() {
    return {
        restrict: 'E',
        scope : {
            value: '@',
            color: '@'
        },
        template: template,
        link(scope, element, attrs) {
            let progressBarValue = scope.value;

            if (progressBarValue < 0) {
                progressBarValue = 0;
            } else if (progressBarValue > 100) {
                progressBarValue = 100;
            }
            
            $(element).find('.innerDiv').css('width', Math.floor((progressBarValue / 100) * $(element).find('.outerDiv').width()));
            $(element).find('.innerDiv').css('background-color', scope.color);
        }
    };
};