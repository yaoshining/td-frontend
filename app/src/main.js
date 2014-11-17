requirejs.config({
    baseUrl: './src'
});
require([
    'angular',
    'jquery',
    'angular-resource',
    'angular-animate',
    'angular-ui-router',
    'oclazyload',
    'ui-bootstrap-tpls',
    'bootstrap',
    'home/home',
    'users/module'
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
            'usersModule'
        ]).config([
            '$urlRouterProvider',
            '$provide',
            '$ocLazyLoadProvider',
            '$httpProvider',
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
        }]).run(['$ocLazyLoad',function($ocLazyLoad){
            $ocLazyLoad.load({
                name: 'emailModule',
                files: ['email/module']
            });
        }]);

        /*bootstrap model*/
        angular.bootstrap($html, ['webApp']);
    });
});
