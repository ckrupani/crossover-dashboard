/**
 * Module dependencies
 */
import template from './progressBarWithText.template.html!text';
import './progressBarWithText.css!';

/**
 * This directive shows progress-bar with text inside.
 */
export default function() {
    return {
        restrict: 'E',
        scope : {
            value: '@',
            label: '@'
        },
        template: template,
        link(scope, element, attrs) {
            let progressBarValue = scope.value;

            if (progressBarValue < 0) {
                progressBarValue = 0;
            } else if (progressBarValue > 100) {
                progressBarValue = 100;
            }

            $(element).find('.greenDiv').css('width', Math.floor((progressBarValue / 100) * $(element).find('.outerDiv').width()));
            $(element).find('.redDiv').css('width', $(element).find('.outerDiv').width() - $(element).find('.greenDiv').width());
            $(element).find('.redDiv').css('left', $(element).find('.greenDiv').width());

            if (progressBarValue > 50) {
                $(element).find('.progressBarWithText .outerDiv .barLabel').css('color', 'green');
            } else {
                $(element).find('.progressBarWithText .outerDiv .barLabel').css('color', 'red');
            }
        }
    };
};