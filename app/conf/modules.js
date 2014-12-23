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
        ]
    }
});
