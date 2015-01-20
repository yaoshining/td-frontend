//requirejs.config({
//    baseUrl: './src',
//    paths: {
//        'conf': '../conf'
//    }
//});
//require(['../conf/amd'],function(){
//    require([
//        'angular',
//        'nprogress',
//        'conf/routes',
//        'conf/menus',
//        'jquery',
//        'kreate',
//        'angular-resource',
//        'angular-animate',
//        'angular-ui-router',
//        'angular-cookies',
//        'oclazyload',
//        'ui-bootstrap-tpls',
//        'bootstrap',
//        'auth/module'
//    ], function(angular,NProgress,routes,menus) {
//        'use strict';
//
//        /*App Module*/
//        angular.element(document).ready(function () {
//            /*smart works go here*/
//            var $html = angular.element('html');
//            angular.module('webApp', [
//                'ui.router',
//                'ngResource',
//                'oc.lazyLoad',
//                'ui.bootstrap',
//                'ngAnimate',
//                'authModule',
//                'ngCookies'
//            ]).config([
//                '$urlRouterProvider',
//                '$provide',
//                '$ocLazyLoadProvider',
//                '$httpProvider',
//                '$stateProvider',
//                function(
//                    $urlRouterProvider,
//                    $provide,
//                    $ocLazyLoadProvider,
//                    $httpProvider,
//                    $stateProvider
//                ) {
//                    $urlRouterProvider.otherwise('/');
//                    /* change configure to use [[ to be the interpolation ([[2 + 2]]) */
//                    //$interpolateProvider.startSymbol('[[');
//                    //$interpolateProvider.endSymbol(']]');
//                    /* add safeApply function for $rootScope - called by $scope.$root.safeApply(fn) */
//                    $provide.decorator('$rootScope', [
//                        '$delegate',
//                        function($delegate) {
//                            $delegate.safeApply = function(fn) {
//                                var phase = $delegate.$$phase;
//                                if (phase === '$apply' || phase === '$digest') {
//                                    if (fn && typeof fn === 'function') {
//                                        fn();
//                                    }
//                                } else {
//                                    $delegate.$apply(fn);
//                                }
//                            };
//                            return $delegate;
//                        }
//                    ]);
//                    $ocLazyLoadProvider.config({
//                        loadedModules: ['webApp'],
//                        jsLoader: function(jsFiles,callback,params){
//                            var tempArray = [];
//                            if(require.toUrl('').indexOf('./src')<0){
//                                angular.forEach(jsFiles,function(file){
//                                    tempArray.push('src/'+file);
//                                });
//                                jsFiles = tempArray;
//                            }
//                            require(jsFiles,callback,params);
//                        },
//                        debug: true
//                    });
//                    $httpProvider.interceptors.push(['authService','$location','$cookieStore',function(authService,$location,$cookieStore) {
//                        return {
//                            'request': function(config) {
//                                var savedCurrentUser = $cookieStore.get('currentUser');
//                                if(angular.isUndefined(authService.currentUser)){
//                                    if(angular.isUndefined(savedCurrentUser)){
//                                        var loginPath = authService.loginPath;
//                                        $location.path(loginPath);
//                                    } else {
//                                        authService.currentUser = savedCurrentUser;
//                                    }
//                                }
//                                return config;
//                            },
//                            'response': function(response) {
//                                return response;
//                            }
//                        };
//                    }]);
//                    angular.forEach(routes,function(config,state){
//                        var stateConfig = {
//                            url: config.url,
//                            views: config.views,
//                            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
//
//                            }
//                        }
//                        if(config.modules){
//                            angular.forEach(config.modules,function(files,name){
//                                stateConfig.resolve[name+'Loader'] = ['$ocLazyLoad', function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        name: name,
//                                        files: files
//                                    });
//                                }]
//                            });
//                        }
//                        $stateProvider.state(state,stateConfig);
//                    });
//                }]).controller('SidebarController',[
//                '$scope',
//                '$rootScope',
//                'NavigatorService',
//                '$state',
//                function($scope,$rootScope,navigatorService,$state){
//                    $scope.minified = false;
//                    $scope.toggleSize = function(){
//                        $scope.minified = !$scope.minified;
//                    };
//                    $scope.menus = menus;
//                    $scope.navigateTo = function(path){
//                        navigatorService.paths = path.split('/');
//                        $rootScope.$broadcast('navigation.change');
//                    };
//                    $scope.openMenu = function($event,menu){
//                        $event.preventDefault();
//                        menu.isOpen=!menu.isOpen;
//                    };
//                }
//            ]).controller('NavigatorController',[
//                '$scope',
//                'NavigatorService',
//                function($scope,navigatorService){
//                    $scope.$on('navigation.change',function(){
//                        $scope.paths = navigatorService.paths;
//                    });
//                }
//            ]).service('NavigatorService',[function(){
//                return {
//                    paths: []
//                }
//            }]).run(['$ocLazyLoad','$rootScope',function($ocLazyLoad,$rootScope){
//                NProgress.configure({
//                    showSpinner: false,
//                    trickleRate: 0.02, trickleSpeed: 50
//                });
//                $rootScope.$on('$stateChangeStart',function(){
//                    NProgress.start();
//                });
//                $rootScope.$on('$viewContentLoaded',function(){
//                    NProgress.done(true);
//                });
//            }]);
//
//            /*bootstrap model*/
//            angular.bootstrap($html, ['webApp']);
//        });
//    });
//});
require([
    'angular',
    'jquery',
    'kreate',
    'angular-resource',
    'angular-animate',
    'angular-ui-router',
    'angular-cookies',
    'angular-sanitize',
    'tinycon',
    'oclazyload',
    'ui-bootstrap-tpls',
    'bootstrap'
], function(angular) {
    'use strict';
    require([
        '../conf/amd'
    ],function(amd){
        require([
            'nprogress',
            'conf/routes',
            'conf/menus',
            'auth/module'
        ],function(NProgress,routes,menus){
            /*App Module*/
            document.getElementById('loader-wrapper').style.backgroundColor = '#222';
            angular.element(document).ready(function () {
                /*smart works go here*/
                var $html = angular.element('html');
                angular.module('webApp', [
                    'ui.router',
                    'ngResource',
                    'oc.lazyLoad',
                    'ui.bootstrap',
                    'ngAnimate',
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
                    }]).controller('SidebarController',[
                    '$scope',
                    '$rootScope',
                    'NavigatorService',
                    '$state',
                    function($scope,$rootScope,navigatorService,$state){
                        $scope.minified = false;
                        $scope.toggleSize = function(){
                            $scope.minified = !$scope.minified;
                        };
                        $scope.menus = menus;
                        $scope.navigateTo = function(path){
                            navigatorService.paths = path.split('/');
                            $rootScope.$broadcast('navigation.change');
                        };
                        $scope.openMenu = function($event,menu){
                            $event.preventDefault();
                            menu.isOpen=!menu.isOpen;
                        };
                    }
                ]).controller('NavigatorController',[
                    '$scope',
                    'NavigatorService',
                    function($scope,navigatorService){
                        $scope.$on('navigation.change',function(){
                            $scope.paths = navigatorService.paths;
                        });
                    }
                ]).service('NavigatorService',[function(){
                    return {
                        paths: []
                    }
                }]).run(['$ocLazyLoad','$rootScope',function($ocLazyLoad,$rootScope){
                    window.NProgress.inc();
                    setTimeout(function(){
                        window.NProgress.done(true);
                        $rootScope.isAppLoaded = true;
                        $rootScope.$apply();
                    },0);
                    $rootScope.$on('$stateChangeStart',function(){
                        $rootScope.isAppLoaded && NProgress.start();
                    });
                    $rootScope.$on('$viewContentLoaded',function(){
                        $rootScope.isAppLoaded && NProgress.done(true);
                    });
                    Tinycon.setOptions({
                        width: 7,
                        height: 9,
                        font: '10px \'Strict Thin\' lighter',
                        colour: '#ffff00',
                        background: '#2e8965',
                        fallback: true
                    });
                    var count = 0;
                    setInterval(function(){
                        ++count;
                        Tinycon.setBubble(count);

                    }, 1000);
                }]);
                /*bootstrap model*/
                angular.bootstrap($html, ['webApp']);
            });
        });
    });
});
