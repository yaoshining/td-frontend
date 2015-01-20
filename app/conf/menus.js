/**
 * Created by 世宁 on 2014/12/19 0019.
 */
define(function(){
    return {
        '$root': [
            {name: 'Dashboard',sref: 'dashboard',iconClass: 'fa-tachometer'},
            {name: 'Documents',sref: 'doc',iconClass: 'fa-briefcase'},
            {name: 'Email',sref: 'emails',iconClass: 'fa-envelope'},
            {name: 'UI & Elements',sref: 'UIAndElements',iconClass: 'fa-desktop'},
            {name: 'Widgets',sref: 'widgetsDemo',iconClass: 'fa-list-alt'},
            {name: 'Tasks',sref: 'worktile',iconClass: 'fa-tasks'}
        ],
        'UI & Elements': [
            {name: 'Bootstrap',sref: 'UIAndElements.bootstrap'},
            {name: 'TreeView',sref: 'UIAndElements.treeView'},
            {name: 'Tables',sref: 'UIAndElements.tables'},
            {name: 'Nestable List',sref: 'UIAndElements.nestable'},
            {name: 'Calendar',sref: 'UIAndElements.calendar'},
            {name: 'MindMap',sref: 'UIAndElements.mindMap'}
        ]
    };
});
