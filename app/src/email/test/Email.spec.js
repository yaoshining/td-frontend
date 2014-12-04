'use strict'
define(['angular-mocks', 'email/module',''], function() {
    describe('controller title', function() {
        var $scope;
        var $location;
        var $controller;
        var emailController;
        var $ocLazyLoad;
        beforeEach(module('emailModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            jasmine.clock().install();
            $controller = _$injector_.get('$controller');
            $ocLazyLoad = _$injector_.get('$ocLazyLoad');
        }));
        afterEach(function() {
            jasmine.clock().uninstall();
        });
        it('should be equal mail', function() {
            $ocLazyLoad.load({
                name: 'emailModule',
                files: ['email/controllers/emailController','email/services/emailService','email/repositories/Email']
            }).then(function(){
                emailController = $controller('EmailController', {
                    '$scope': $scope,
                    '$location': $location
                });
                console.log($scope.composeTabActive);
            });
            jasmine.clock().tick(20001);
        });
    });
});
