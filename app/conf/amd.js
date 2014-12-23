/**
 * Created by 世宁 on 2014/12/21 0021.
 */
requirejs.config({
    baseUrl: './src',
    paths: {
        'styles': '../styles',
        'conf': '../conf',
        'plugins': '../plugins',
        'flot': 'vendor/flot/flot',
        'plot': 'vendor/flot/pie'
    },
    shim: {
        'flot': ['jquery'],
        'plot': ['flot']
    },
    map: {
        '*': {
            'css': '../bower_components/require-css/css.min'
        }
    }
});
