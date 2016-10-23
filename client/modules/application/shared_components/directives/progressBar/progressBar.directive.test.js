
import 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('progressBar Directive', () => {

    var $compile,
        $rootScope,
        element;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    beforeEach(function () {
        element = $compile('<progress-bar value="50" color="red"></progress-bar>')($rootScope);
        $rootScope.$digest();
    });

    it('should output correct html elements', () => {
        expect(element.find('.progressBar')).toBeDefined();
        expect(element.find('.outerDiv')).toBeDefined();
        expect(element.find('.innerDiv')).toBeDefined();
    });
    it('should set color on progress bar', () => {
        expect(element.find('.innerDiv').css('background-color')).toBe('red');
    });
});