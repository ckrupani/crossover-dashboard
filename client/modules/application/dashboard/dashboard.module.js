/*global angular*/

/**
 * Module dependencies.
 */
import routeConfig from './dashboard.route.config';
import Controller from './dashboard.controller';

/**
 * This module contains all logic related to dashboard functionality.
 */
export default angular.module('Dashboard', [])
.config(routeConfig)
.controller('DashboardCtrl', Controller);
