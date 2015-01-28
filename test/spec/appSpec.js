'use strict';

describe('Unit: HomeController', function () {
    beforeEach(module('OverEngineeredApp'));

    var scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        $controller('HomeController as home', {$scope: scope})
    }));

    it('should have text = "Simplicity"', function () {
        assert.property(scope, 'home');
        assert.property(scope.home, 'message');
        assert.equal(scope.home.message, 'Simplicity')
    });

});