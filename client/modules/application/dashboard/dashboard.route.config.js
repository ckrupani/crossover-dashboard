/**
 * Module dependencies.
 */
import template from './dashboard.template.html!text';
import './dashboard.css!';

/**
 * RouteConfig: It defines route for dashboard view.
 */
let routeConfig = ($stateProvider) => {
    $stateProvider.state('index.dashboard', {
        url: 'dashboard',
        template: template,
        controller: 'DashboardCtrl',
        controllerAs: 'ctrl'
    });
};

routeConfig.$inject = [ '$stateProvider'];

export default routeConfig;
