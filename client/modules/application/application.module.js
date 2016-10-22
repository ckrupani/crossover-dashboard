/*global angular*/

/**
 * Module dependencies.
 */
import routeConfig from './application.route.config';
import runBlock from './application.run';

import ServiceModule from './shared_components/services/services.module';
import DirectiveModule from './shared_components/directives/directives.module';

import DashboardModule from './dashboard/dashboard.module';

/**
 * Application Module
 */
let application;

application = angular.module('App', [ 
        'ui.router', 
        ServiceModule.name, 
        DirectiveModule.name,
        DashboardModule.name
    ])
    .config(routeConfig)
    .run(runBlock);

export default application;
