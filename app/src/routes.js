/**
 * Created by 世宁 on 14-12-12.
 */
'use strict'
define(['angular','modules'],function(angular,modules){
    return {
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
        }
    }
});