requirejs.config({
    baseUrl: './src',
    paths: {
        'angular': '../bower_components/angular/angular',
        /*require angular mocks for testing*/
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        /*require angular resource for easily handling sending and receiving request*/
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        /*require angular animate for easily handling animation. I recommend to use this with tweenmax (bower install --save greensock)*/
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        /*require angular for better handling and binding controller*/
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        /*require ui-bootstrap with the embeded template [http://angular-ui.github.io/bootstrap/]*/
        'ui-bootstrap-tpls': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        /*require jquery*/
        'jquery': '../bower_components/jquery/dist/jquery',
        'jquery-ui': '../bower_components/jquery-ui/jquery-ui',
        'ui-autocomplete': '../bower_components/ui-autocomplete/autocomplete',
        /*require bootstrap.js to make bootstrap components work*/
        'bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'bootstrap-typeahead': '../bower_components/bootstrap3-typeahead/bootstrap3-typeahead',
        /*--insert code tag--do not remove*/
        'underscore': '../bower_components/underscore/underscore',
        'oclazyload': '../bower_components/oclazyload/dist/ocLazyLoad'
    },
    shim: {
        'angular': { exports: 'angular', deps: ['jquery','underscore'] },
        'angular-mocks': ['angular'],
        'angular-resource': ['angular'],
        'angular-animate': ['angular'],
        'angular-ui-router': ['angular'],
        'oclazyload': ['angular'],
        'ui-bootstrap-tpls': ['angular'],
        'bootstrap': ['jquery'],
        'bootstrap-typeahead': ['bootstrap'],
        'jquery-ui': ['jquery'],
        'ui-autocomplete': ['jquery-ui','angular']
    }/*--requirejs config copy tag--do not remove*/
});
