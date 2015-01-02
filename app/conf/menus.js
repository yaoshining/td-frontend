/**
 * Created by 世宁 on 2014/12/19 0019.
 */
define(function(){
    return {
        '$root': [
            {name: 'Dashboard',sref: 'home',iconClass: 'fa-tachometer'},
            {name: 'Email',sref: 'emails',iconClass: 'fa-envelope'},
            {name: 'MusicYao',sref: 'music.home',iconClass: 'fa-music'},
            {name: 'UI & Elements',sref: 'UIAndElements',iconClass: 'fa-desktop'},
            {name: 'Widgets',sref: 'widgetsDemo',iconClass: 'fa-list-alt'}
        ],
        'UI & Elements': [
            {name: 'Bootstrap',sref: 'UIAndElements.bootstrap'},
            {name: 'TreeView',sref: 'UIAndElements.treeView'},
            {name: 'Tables',sref: 'UIAndElements.tables'},
            {name: 'Nestable List',sref: 'UIAndElements.nestable'},
            {name: 'MindMap',sref: 'UIAndElements.mindMap'}
        ]
    };
});
