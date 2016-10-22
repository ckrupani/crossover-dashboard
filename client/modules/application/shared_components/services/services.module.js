/*global angular*/

/**
 * Module dependencies 
 */

import BuildService from './build.service';


/**
 * This module contains all services 
 */

export default angular.module('Services', [])

    .service('Build', BuildService);