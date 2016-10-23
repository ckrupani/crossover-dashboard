
import 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('progressBarWithText Directive', () => {

    var $compile,
        $rootScope,
        element;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    beforeEach(function () {
        element = $compile('<progress-bar-with-text value="76" label="code covered"></progress-bar-with-text>')($rootScope);
        $rootScope.$digest();
    });

    it('should output correct html elements', () => {
        expect(element.find('.progressBarWithText')).toBeDefined();
        expect(element.find('.outerDiv')).toBeDefined();
        expect(element.find('.greenDiv')).toBeDefined();
        expect(element.find('.redDiv')).toBeDefined();
        expect(element.find('.barLabel')).toBeDefined();
        expect(element.find('.value')).toBeDefined();
        expect(element.find('.text')).toBeDefined();
    });
    it('should set color on text', () => {
        expect(element.find('.progressBarWithText .outerDiv .barLabel').css('color')).toBe('green');
    });
});