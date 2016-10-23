
import 'angular-mocks';
import BuildService from './build.service';
import buildList from './data/builds';

describe('Build Service', () => {

    let buildService = {},
        fetchedList;

    beforeEach(inject(function ($http, $q) {
        buildService = new BuildService($http, $q);
    }));

    it('should fetch list of all builds and firewalls from mock data', () => {

        buildService.getList().then(data => {
            fetchedList = data;
            expect(fetchedList).toEqual(buildList);
        });
    });
});