define(['email/module'],function(emailModule){
	emailModule.service('EmailService', ['$resource','Email', function($resource,emailRepo){
		return {
			getEmails: function(username){
				return emailRepo.query({username: username});
			},
			getEmail: function(id){
				return emailRepo.get({emailId: id});
			},
			save: function(email,callback){
				emailRepo.save(email,function(){
                    if($.isFunction(callback)){
                        callback();
                    }
                });
			}
		}
	}]);
});