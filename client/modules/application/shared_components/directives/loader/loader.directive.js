/**
 * Module dependencies
 */
import template from './loader.template.html!text';
import './loader.css!';

/**
 * This directive provides shows loading text 
 */
export default [() => {
    return {
        scope: {
            msg: '@'
        },
        template: template
    };
}];
