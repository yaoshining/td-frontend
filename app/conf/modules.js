define(function(){
    return {
        'homeModule': [
            'home/home',
            'css!styles/ebp/infobox',
            'css!styles/ebp/widgets',
            'vendor/jquery.sparkline',
            'vendor/angular.easypiechart',
            'plot'
        ],
        'emailModule': [
            'email/module',
            'email/controllers/emailController',
            'email/services/emailService',
            'email/repositories/Email',
            'css!styles/email/email',
            'css!styles/jquery-ui/jquery-ui'
        ],
        'usersModule': [
            'users/module',
            'users/services/userService',
            'users/repositories/Users'
        ],
        'filesModule': [
            'files/module',
            'files/services/attachService',
            'files/repositories/Attachment'
        ],
        'UIAndElementsModule' : [
            'UIAndElements/module'
        ],
        'UIAndElementsModule.bootstrap': [
            'UIAndElements/controllers/BootstrapController'
        ],
        'UIAndElementsModule.treeView': [
            'UIAndElements/controllers/TreeViewController'
        ],
        'UIAndElementsModule.tables': [
            'UIAndElements/controllers/tables/TablesController'
        ],
        'UIAndElementsModule.mindMap': [
            'UIAndElements/controllers/TreeViewController',
            'vendor/core/jsmind',
            'css!styles/vendor/jsmind'
        ],
        'ebpTreePlugin': [
            'plugins/core/ebp-tree'
        ],
        'ebpYzkFontPlugin': [
            'plugins/core/ebp-youziku'
        ],
        'ebpJsMindPlugin': [
            'plugins/charts/mindmap/ebp-jsmind'
        ]
    }
});
