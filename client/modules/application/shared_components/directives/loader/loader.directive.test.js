
import { module, inject } from 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('Loader Directive', function () {

    var $compile,
        $rootScope;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    it('should output loading symbol with expected message', function () {
        var element = $compile('<loader msg="Loading..."></loader>')($rootScope);
        $rootScope.$digest();
        expect(element.find('span').html()).toBe('Loading...');
    });
});