requirejs.config({
    baseUrl: './src'
});
require([
    'angular',
    'jquery',
    'angular-resource',
    'angular-animate',
    'angular-ui-router',
    'angular-cookies',
    'oclazyload',
    'ui-bootstrap-tpls',
    'bootstrap',
    'home/home',
    'auth/module'
], function(angular) {
    'use strict';

    /*App Module*/
    angular.element(document).ready(function () {
        /*smart works go here*/
        var $html = angular.element('html');
        angular.module('webApp', [
            'ui.router',
            'ngResource',
            'oc.lazyLoad',
            'ui.bootstrap',
            'ngAnimate',
            'homeModule',
            'authModule',
            'ngCookies'
        ]).config([
            '$urlRouterProvider',
            '$provide',
            '$ocLazyLoadProvider',
            '$httpProvider',
            'authServiceProvider',
        function(
            $urlRouterProvider,
            $provide,
            $ocLazyLoadProvider,
            $httpProvider
        ) {
            $urlRouterProvider.otherwise('/');
            /* change configure to use [[ to be the interpolation ([[2 + 2]]) */
            //$interpolateProvider.startSymbol('[[');
            //$interpolateProvider.endSymbol(']]');
            /* add safeApply function for $rootScope - called by $scope.$root.safeApply(fn) */
            $provide.decorator('$rootScope', [
                '$delegate',
                function($delegate) {
                    $delegate.safeApply = function(fn) {
                        var phase = $delegate.$$phase;
                        if (phase === '$apply' || phase === '$digest') {
                            if (fn && typeof fn === 'function') {
                                fn();
                            }
                        } else {
                            $delegate.$apply(fn);
                        }
                    };
                    return $delegate;
                }
            ]);
            $ocLazyLoadProvider.config({
                loadedModules: ['webApp'],
                jsLoader: require,
                debug: true
            });
            // alternatively, register the interceptor via an anonymous factory
            $httpProvider.interceptors.push(['authService','$location','$cookieStore',function(authService,$location,$cookieStore) {
                return {
                    'request': function(config) {
                        var savedCurrentUser = $cookieStore.get('currentUser');
                        if(angular.isUndefined(authService.currentUser)){
                            if(angular.isUndefined(savedCurrentUser)){
                                var loginPath = authService.loginPath;
                                $location.path(loginPath);
                            } else {
                                authService.currentUser = savedCurrentUser;
                            }
                        }
                        return config;
                    },

                    'response': function(response) {
                        return response;
                    }
                };
            }]);
        }]).run(['$ocLazyLoad', function($ocLazyLoad){
            $ocLazyLoad.load({
                name: 'emailModule',
                files: ['email/module']
            });
        }]);

        /*bootstrap model*/
        angular.bootstrap($html, ['webApp']);
    });
});
