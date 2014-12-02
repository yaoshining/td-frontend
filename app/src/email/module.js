define([
	'angular',
	'angular-resource',
	'angular-ui-router',
    'angular-ui-tinymce',
    'angular-sanitize',
    'angular-translate',
    'angular-translate-static',
    'ng-file-upload',
	'ui-autocomplete',
	'oclazyload',
    'files/module',
    'angular-animate'
],function(angular){
	'use strict';
	 /**
	*  Module
	*
	* Description
	*/
	var emailModule = angular.module('emailModule', [
         'ui.router',
         'ngResource',
         'oc.lazyLoad',
         'ui.autocomplete',
         'ui.tinymce',
         'ngSanitize',
         'pascalprecht.translate',
         'angularFileUpload',
         'filesModule',
         'ngAnimate'
     ]).config([
            '$stateProvider',
            '$ocLazyLoadProvider',
            '$provide',
             '$translateProvider',
    function($stateProvider,$ocLazyLoadProvider,$provide,$translateProvider) {
		$ocLazyLoadProvider.config({
			loadedModules: ['emailModule'],
			jsLoader: require,
			debug: true
		});
        $translateProvider.useStaticFilesLoader({
            prefix: 'src/email/i18n/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
		$stateProvider.state('emails',{
			url: '/emails/:emailView/:emailId',
			views: {
				'': {
					controller: 'EmailController',
					templateUrl: 'src/email/views/email.tpl.html'
				}
			},
			resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
				loadEmailCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					// you can lazy load files for an existing module
					 return $ocLazyLoad.load({
					    name: 'emailModule',
					    files: ['email/controllers/emailController','email/services/emailService','email/repositories/Email']
					 });
			   	 }]
			}
		});
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
	}]).run(['$http','$ocLazyLoad', function($http,$ocLazyLoad){
		$ocLazyLoad.load({
			name: 'usersModule',
			files: ['users/module']
		});
		$http.defaults.headers.common.Authorization = 'Basic eWFvOnlzMTk4NzU2';
	}]);
	return emailModule;
});