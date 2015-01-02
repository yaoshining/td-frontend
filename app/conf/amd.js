/**
 * Created by 世宁 on 2014/12/21 0021.
 */
requirejs.config({
    baseUrl: './src',
    paths: {
        'styles': '../styles',
        'conf': '../conf',
        'plugins': '../plugins',
        'codemirror': '../bower_components/codemirror/lib/codemirror',
        'ui-codemirror': '../bower_components/angular-ui-codemirror/ui-codemirror',
        'flot': 'vendor/flot/flot',
        'plot': 'vendor/flot/pie',
        'fuelux': '../bower_components/fuelux/dist/js/fuelux.min',
        'moment': '../bower_components/moment/moment',
        'at-table': '../bower_components/at-table/dist/angular-table',
        'jquery-ui': '../bower_components/jquery-ui/jquery-ui',
        'jquery-nestable': '../bower_components/ng-nestable/lib/jquery.nestable',
        'ng-nestable': '../bower_components/ng-nestable/src/angular-nestable',
        'ui-sortable': '../bower_components/angular-ui-sortable/sortable',
        'nprogress': '../bower_components/nprogress/nprogress',
        'stickUp': '../bower_components/stickUp/stickUp.min',
        'headroom': '../bower_components/headroom.js/dist/headroom.min',
        'angular-headroom': '../bower_components/headroom.js/dist/angular.headroom',
        'videogular': '../bower_components/videogular/videogular.min',
        'videogular-controls': '../bower_components/videogular-controls/controls.min',
        'videogular-poster': '../bower_components/videogular-poster/poster.min',
        'videogular-overlay-play': '../bower_components/videogular-overlay-play/overlay-play.min',
        'videogular-buffering': '../bower_components/videogular-buffering/buffering.min'
    },
    shim: {
        'codemirror': {
            deps: ['css!../bower_components/codemirror/lib/codemirror'],
            exports: 'CodeMirror'
        },
        'vendor/core/pretty': ['css!styles/vendor/prettify'],
        'plugins/core/ebp-prettify': ['vendor/core/pretty'],
        'plugins/core/ebp-stickup': ['jquery','stickUp'],
        'vendor/core/jsmind': ['css!styles/vendor/jsmind'],
        'ui-codemirror': ['codemirror','angular'],
        'jquery-ui': ['jquery'],
        'jquery-nestable': ['jquery','css!styles/ebp/lists'],
        'ng-nestable': ['jquery-nestable'],
        'angular-headroom': ['headroom'],
        'videogular': ['angular','angular-sanitize'],
        'videogular-controls': ['videogular'],
        'videogular-poster': ['videogular'],
        'videogular-overlay-play': ['videogular'],
        'videogular-buffering': ['videogular'],
        'stickUp': ['jquery'],
        'flot': ['jquery'],
        'plot': ['flot'],
        'fuelux': ['bootstrap','jquery','moment','css!styles/ebp/tree'],
        'ui-sortable': ['jquery-ui'],
        'nprogress': ['']
    },
    map: {
        '*': {
            'css': '/bower_components/require-css/css.min.js'
        }
    }
});
