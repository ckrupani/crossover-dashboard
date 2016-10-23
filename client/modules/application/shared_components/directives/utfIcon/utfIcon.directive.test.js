
import 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('utfIcon Directive', () => {

    var $compile,
        $rootScope,
        element;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    beforeEach(function () {
        element = $compile('<utf-icon char-hex="ch" size="72" color="#7BAFD4"></utf-icon>')($rootScope);
        $rootScope.$digest();
    });

    it('should output correct utf character', () => {
        expect(element.find('span').html()).toBe('ch');
    });
    it('should set correct font size on utf character', () => {
        expect(element.find('span').css('font-size')).toBe('72px');
    });
    it('should set correct color on utf character', () => {
        expect(element.find('span').css('color')).toBe('rgb(123, 175, 212)');
    });
});