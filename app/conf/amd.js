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
        'at-table': '../bower_components/at-table/dist/angular-table'
    },
    shim: {
        'codemirror': {
            deps: ['css!../bower_components/codemirror/lib/codemirror'],
            exports: 'CodeMirror'
        },
        'vendor/core/pretty': ['css!styles/vendor/prettify'],
        'plugins/core/ebp-prettify': ['vendor/core/pretty'],
        'vendor/core/jsmind': ['css!styles/vendor/jsmind'],
        'ui-codemirror': ['codemirror','angular'],
        'flot': ['jquery'],
        'plot': ['flot'],
        'fuelux': ['bootstrap','jquery','moment','css!styles/ebp/tree']
    },
    map: {
        '*': {
            'css': '/bower_components/require-css/css.min.js'
        }
    }
});
