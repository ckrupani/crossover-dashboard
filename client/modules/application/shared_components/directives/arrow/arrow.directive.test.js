
import 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('arrow Directive', () => {

    var $compile,
        $rootScope,
        element;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    beforeEach(function () {
        element = $compile('<arrow direction="up" background-color="red" font-color="white" value="64" label="Tests"></arrow>')($rootScope);
        $rootScope.$digest();
    });

    it('should output correct html elements', () => {
        expect(element.find('.arrow')).toBeDefined();
        expect(element.find('.arrowIcon')).toBeDefined();
        expect(element.find('.glyphicon.glyphicon-arrow-up')).toBeDefined();
        expect(element.find('.glyphicon.glyphicon-arrow-down')).toBeDefined();
        expect(element.find('.glyphicon.glyphicon-arrow-right')).toBeDefined();
        expect(element.find('.value')).toBeDefined();
        expect(element.find('.arrowLabel')).toBeDefined();
        expect(element.find('.arrowLabel span')).toBeDefined();
    });
    it('should set background color of arrow', () => {
        expect(element.find('.arrow .arrowIcon .glyphicon').css('color')).toBe('red');
    });
    it('should set text color inside arrow', () => {
        expect(element.find('.arrow .arrowIcon .value').css('color')).toBe('white');
    });
    it('should set arrow text to correct value', () => {
        expect(element.find('.arrowIcon span:last-child').html()).toBe('64');
    });
    it('should set arrow label to correct value', () => {
        expect(element.find('.arrowLabel span:last-child').html()).toBe('Tests');
    });
    it('should set width of an arrow', () => {
        expect(element.find('.arrow').width()).toBe(55);
    });
    it('should place value correctly when direction is down', () => {
        element = $compile('<arrow direction="down" background-color="red" font-color="white" value="64" label="Tests"></arrow>')($rootScope);
        $rootScope.$digest();
        expect(element.find('.arrow .arrowIcon .value').css('top')).toBe('22px');
    });
    it('should place value correctly when direction is right', () => {
        element = $compile('<arrow direction="right" background-color="red" font-color="white" value="64" label="Tests"></arrow>')($rootScope);
        $rootScope.$digest();
        expect(element.find('.arrow .arrowIcon .value').css('top')).toBe('16px');
    });
});