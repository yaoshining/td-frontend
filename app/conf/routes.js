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
