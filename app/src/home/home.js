'use strict';
define(['angular'], function(angular) {
    angular.module('homeModule', []).config([function() {
        /*config path for home page*/
    }]).controller('HomeController', [
        '$scope',
        function($scope) {
            $scope.items = ['One','Two','Three'];
            $scope.sortableOptions = {
                connectWith: ".widget-container-col",
                handle: ".widget-header",
                placeholder: "widget-placeholder",
                forcePlaceholderSize: true,
                revert: true,
                opacity: 0.8,
                cursor: "move"
            };
            $scope.tableData = [
                {user: 'Yao',email: 'yao@email.com',status: 'Pending'},
                {user: 'Shining',email: 'shining@email.com',status: 'Approved'},
                {user: 'JiangSong',email: 'jiangsong@email.com',status: 'Pending'},
                {user: 'WangJie',email: 'wangxiaojie@email.com',status: 'Blocked'},
                {user: 'James',email: 'james@email.com',status: 'Online'}
            ];
            $scope.fullscreen = function($event,widget){
                $event.preventDefault();
                $event.stopPropagation();
                widget.isFullscreen = !widget.isFullscreen
            };
            $scope.myInterval = 5000;
            var slides = $scope.slides = [];
            $scope.addSlide = function(){
                var newWidth = 600+slides.length+1;
                slides.push({
                    image: 'images/demos/'+newWidth+'/300.jpg',
                    text: ['更多的','额外的','许多','剩余的'][slides.length % 4]+' '+['猫','小猫','猫科动物','小可爱'][slides.length % 4]
                });
            };
            for(var i=0;i<4;i++){
                $scope.addSlide();
            }
        }
    ]);
});

