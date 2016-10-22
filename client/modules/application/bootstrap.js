/*global angular*/

/**
 * Module dependencies.
 */

import 'angular-ui-router';
import 'toastr/build/toastr.min.css!';
import application from './application.module';

/**
 * Following code will bootstrap the application.
 */

angular.element(document).ready(() => {
    angular.bootstrap(document, [ application.name ]);
    String.prototype.toCapitalCase = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
});
