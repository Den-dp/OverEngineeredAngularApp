// FIXME: we probably can move SIAF wrapping boilerplate to gulp as a build step but should we?
(function (angular) {

    'use strict';

    angular.module('OverEngineeredApp', [])
        .controller('HomeController', HomeController);

    function HomeController(){
        this.message = 'Simplicity';
    }

})(angular);