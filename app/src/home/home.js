'use strict';
define(['angular', 'angular-ui-router'], function(angular) {
    angular.module('homeModule', ['ui.router']).config(['$stateProvider', function($stateProvider) {
        /*config path for home page*/
        $stateProvider.state('home', {
            url: '/',
            views: {
//                'navbar': {
//                    templateUrl: 'src/home/navbar.tpl.html'
//                },
//                'sidebar': {
//                    controller: 'SidebarController',
//                    templateUrl: 'src/home/sidebar.tpl.html'
//                },
                '': {
                    templateUrl: 'src/home/home.tpl.html',
                    controller: 'HomeController'
                }
            }
        });
    }]).controller('HomeController', [
        '$scope',
        function($scope) {
            /* initialize */
            $scope.pageTitle = 'dummy';
        }
    ]).controller('SidebarController',['$scope',function($scope){
        $scope.minified = false;
        $scope.toggleSize = function(){
            $scope.minified = !$scope.minified;
        }
    }]);
});

