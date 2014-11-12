'use strict'
define(['angular-mocks', 'email/module',''], function() {
    describe('controller title', function() {
        var $scope;
        var $location;
        var $controller;
        var emailController;
        beforeEach(module('emailModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            jasmine.clock().install();
            $controller = _$injector_.get('$controller');
            var $ocLazyLoad = _$injector_.get('$ocLazyLoad');
            $ocLazyLoad.load({
                name: 'emailModule',
                files: ['email/controllers/emailController','email/services/emailService','email/repositories/Email']
             });
        }));
        afterEach(function() {
            jasmine.clock().uninstall();
        });
        it('should be equal emailModule', function() {
            setTimeout(function(){
                    emailController = $controller('EmailController', {
                        '$scope': $scope,
                        '$location': $location
                    });
            },5000);
            jasmine.clock().tick(6001);
            expect($scope.moduleName).toEqual('emailModule');
        });
    });
});
