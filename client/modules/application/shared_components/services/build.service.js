
/**
 * This service communicates with stubbed backend and exposes list of builds. 
 */

import BuildList from './data/builds';
 
export default class Build {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getList() {
        var deffered = this.$q.defer();

        /*this.$http.get(url).then((response) => {
            if (response.data.status === 'success') {
                deffered.resolve(response.data.data);
            } else {
                deffered.reject('Error');
            }
        }, (response) => {
            if (response.data.status === 'error') {
                deffered.reject(response.data.error);
            }
        });*/

        deffered.resolve(BuildList);

        return deffered.promise;
    }
}
