'use strict';
define(['angular','plugins/charts/sparklines/ebp-sparklines','plugins/charts/flot/ebp-flot'], function(angular) {
    var module = angular.module('dashboardModule', ['ebp.sparklines','easypiechart','ebp.flot']).config([function() {
    }]);
    return module;
});

