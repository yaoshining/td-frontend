requirejs.config({
    baseUrl: './src',
    paths: {
      'styles': '../styles'
    },
    map: {
        '*': {
            'css': '../bower_components/require-css/css.min'
        }
    }
});
require([
    'angular',
    'routes',
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
], function(angular,routes) {
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
            '$stateProvider',
        function(
            $urlRouterProvider,
            $provide,
            $ocLazyLoadProvider,
            $httpProvider,
            $stateProvider
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
                jsLoader: function(jsFiles,callback,params){
                    var tempArray = [];
                    if(require.toUrl('').indexOf('./src')<0){
                        angular.forEach(jsFiles,function(file){
                            tempArray.push('src/'+file);
                        });
                        jsFiles = tempArray;
                    }
                    require(jsFiles,callback,params);
                },
                debug: true
            });
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
            angular.forEach(routes,function(config,state){
                var stateConfig = {
                    url: config.url,
                    views: config.views,
                    resolve: { // Any property in resolve should return a promise and is executed before the view is loaded

                    }
                }
                if(config.modules){
                    angular.forEach(config.modules,function(files,name){
                        stateConfig.resolve[name+'Loader'] = ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: name,
                                    files: files
                                });
                        }]
                    });
                }
                $stateProvider.state(state,stateConfig);
            });
        }]).run(['$ocLazyLoad',function($ocLazyLoad){
//            $ocLazyLoad.load({
//                name: 'emailModule',
//                files: ['email/module']
//            });
        }]);

        /*bootstrap model*/
        angular.bootstrap($html, ['webApp']);
    });
});
