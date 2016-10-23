
import 'angular-mocks';
import ServiceModule from './services.module';

describe('Service Module', () => {

    let buildService;

    beforeEach(module(ServiceModule.name));

    beforeEach(inject(function (_Build_) {
        buildService = _Build_;
    }));

    it('should instantiate a module with all services', () => {
        expect(buildService.getList).toBeDefined();
    });
});