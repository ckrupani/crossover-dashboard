/**
 * Module dependencies
 */
import template from './arrow.template.html!text';
import './arrow.css!';

/**
 * This directive shows arrow with text inside.
 */
export default function() {
    return {
        restrict: 'E',
        scope : {
            direction: '@',
            backgroundColor: '@',
            fontColor: '@',
            value: '@',
            label: '@'
        },
        template: template,
        link(scope, element, attrs) {
            let width = scope.label.length * 7;

            if (width < 55) {
                width = 55;
            }

            $(element).find('.arrow').css('width', width);
            if (scope.direction === 'up') {
                $(element).find('.arrow .arrowIcon .value').css('left', Math.floor(width/2)-6);
            } else if (scope.direction === 'down') {
                $(element).find('.arrow .arrowIcon .value').css('left', Math.floor(width/2)-6);
                $(element).find('.arrow .arrowIcon .value').css('top', 22);
            } else if (scope.direction === 'right') {
                $(element).find('.arrow .arrowIcon .value').css('left', Math.floor(width/2));
                $(element).find('.arrow .arrowIcon .value').css('top', 16);
            }

            $(element).find('.arrow .arrowIcon .glyphicon').css('color', scope.backgroundColor);
            $(element).find('.arrow .arrowIcon .value').css('color', scope.fontColor);
        }
    };
};