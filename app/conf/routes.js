/**
 * Created by 世宁 on 14-12-12.
 */
'use strict'
define(['angular','conf/modules'],function(angular,modules){
    return {
        home: {
            url: '/',
            views: {
                '': {
                    templateUrl: 'src/home/home.tpl.html',
                    controller: 'HomeController'
                }
            },
            modules: {
                'homeModule': modules.homeModule
            }
        },
        emails: {
            url: '/emails/:emailView/:emailId',
            views: {
                '': {
                    controller: 'EmailController',
                    templateUrl: 'src/email/views/email.tpl.html'
                }
            },
            modules: {
                'emailModule': modules.emailModule,
                'usersModule': modules.usersModule,
                'filesModule': modules.filesModule
            }
        },
        UIAndElements: {
            url: '/ui',
            views: {
                '': {
                    template: "<div ui-view style='position: relative'></div>"
                }
            },
            modules: {
                'UIAndElementsModule': modules.UIAndElementsModule
            }
        },
        'UIAndElements.bootstrap': {
            url: '/bootstrap',
            views: {
                '': {
                    controller: 'BootstrapController',
                    templateUrl: 'src/UIAndElements/views/bootstrap.tpl.html'
                }
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.bootstrap'],
                'ebp.youziku': modules.ebpYzkFontPlugin
            }
        },
        'UIAndElements.treeView': {
            url: '/treeview',
            views: {
                '': {
                    controller: 'TreeViewController',
                    templateUrl: 'src/UIAndElements/views/treeView.tpl.html'
                }
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.treeView'],
                'ebp.tree': modules.ebpTreePlugin
            }
        },
        music: {
            url: '/music',
            views: {
                '': {
                    templateUrl: 'src/roses/roses.html'
                }
            }
        },
        'music.test': {
            url: '/test',
            views: {
                '': {
                    template: 'rettre'
                }
            }
        }
    }
});
