
/**
 * Run function contains routing logic of the application.
 */

let run = ($rootScope, $state) => {

    let routeChangeEvent = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        if (toState.name !== 'index.dashboard') {
            console.log('DENY : Redirecting to Dashboard');
            event.preventDefault();
            $state.go('index.dashboard');
        } else {
            console.log('ALLOW');
        }
    });
};

run.$inject = [ '$rootScope', '$state' ];

export default run;
