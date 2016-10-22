/**
 * Module dependencies
 */
import template from './utfIcon.template.html!text';

/**
 * This directive shows UNICODE characters 
 */
export default function() {
    return {
        restrict: 'E',
        scope : {
            charHex: '@',
            size: '@',
            color: '@'
        },
        template: template,
        link(scope, element, attrs) {
            let size = scope.size || 24,
                color = scope.color || 'black';

            $(element).find('span').css('font-size', +size);
            $(element).find('span').css('color', color);
        }
    };
};