/**
 * Created by 世宁 on 14-11-19.
 */
define(['angular','angular-ui-router'],function(angular){
    var authModule = angular.module('authModule',['ui.router']).config(['$provide','$stateProvider',function($provide,$stateProvider){
        $provide.provider({
            authService: function(){
                this.$get = [function(){
                    return {
                        currentUser: undefined,
                        loginPath: 'auth/login'
                    }
                }];
            }
        });
        $stateProvider.state('login',{
            url: '/auth/login',
            views: {
                '': {
                    controller: 'LoginController',
                    templateUrl: 'src/auth/views/login.tpl.html'
                }
            }
        });
    }]).controller({
        LoginController: ['$scope','authService','$location',function($scope,authService,$location){
            $scope.login = function(){
                var username = $scope.username;
                var password = $scope.password;
                $.ajax({
                    url: '/oa/auth/login',
                    data: {
                        username: username,
                        password: password
                    },
                    type: 'POST',
                    dataType: 'json',
                    success: function(data){
                        if(angular.isString(data)){
                            authService.currentUser = $.parseJSON(data).principal;
                        }
                        if(angular.isObject(data)){
                            authService.currentUser = data.principal;
                        }
                        $location.path('/');
                    }
                });
            }
        }]
    });
    return authModule;
});