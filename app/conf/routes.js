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
                homeModule: modules.homeModule,
                'ui.sortable': ['ui-sortable'],
                'angular-table': ['at-table'],
                'ebp.scroll': ['plugins/core/ebp-scroll']
            }
        },
        doc: {
            url: '/doc',
            views: {
                'sidebar': {
                    templateUrl: 'src/doc/views/sidebar.tpl.html'
                }
            },
            modules: {
                homeModule: modules.docModule
            }
        },
        dashboard: {
            url: '/dashboard',
            views: {
                '': {
                    templateUrl: 'src/dashboard/views/dashboard.tpl.html',
                    controller: 'DashboardController'
                }
            },
            modules: {
                'dashboardModule': modules.dashboardModule
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
                    template: "<div ui-view class='fade-in-up' style='position: relative'></div>"
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
        'UIAndElements.tables': {
            url: '/tables',
            views: {
                '': {
                    controller: 'TablesController',
                    templateUrl: 'src/UIAndElements/views/tables/tables.tpl.html'
                }
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.tables'],
                'angular-table': ['at-table']
            }
        },
        'UIAndElements.nestable': {
            url: '/nestable',
            views: {
                '': {
                    controller: 'NestableController',
                    templateUrl: 'src/UIAndElements/views/list/nestable.html'
                }
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.nestable'],
                'ng-nestable': modules.ngNestable
            }
        },
        'UIAndElements.calendar': {
            url: '/calendar',
            views: {
                '': {
                    controller: 'CalendarDemoController',
                    templateUrl: 'src/UIAndElements/views/calendar/calendar.tpl.html'
                }
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.calendar'],
                'ui.calendar': ['ui-calendar']
            }
        },
        'UIAndElements.mindMap': {
            url: '/mindmap',
            views: {
                '': {
                    templateUrl: 'src/UIAndElements/views/mindMap.tpl.html'
                }
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.mindMap'],
                'ebp.mindmap': modules['ebpJsMindPlugin']
            }
        },
        widgetsDemo: {
            url: '/widgets',
            views: {
                '': {
                    controller: 'WidgetsDemoController',
                    templateUrl: 'src/widgets/views/widgets.tpl.html'
                }
            },
            modules: {
                'widgetsDemoModule': modules.widgetsDemoModule,
                'ui.sortable': ['ui-sortable'],
                'angular-table': ['at-table']
            }
        },
        'worktile': {
            url: '/worktile',
            views: {
                'main.content': {
                    templateUrl: 'src/worktile/views/worktile.main.tpl.html'
                },
                'sidebar': {
                    controller: 'WorktileSidebarController',
                    templateUrl: 'src/home/sidebar.tpl.html'
                }
            },
            modules: {
                'worktileModule': modules.worktile,
                'ui.sortable': ['ui-sortable'],
                'ebp.jq': ['plugins/core/ebp-jq']
            }
        },
        'myState': {
            url: '/myState',
            views: {
                '': {
                    template: ''
                }
            },
            modules: {
                'myModule': modules['myModule']
            }
        }
    }
});
