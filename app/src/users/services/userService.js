define(['users/module'],function(usersModule){
	usersModule.service('UserService', ['Users',function(usersRepo){
		return {
			getUsers: function(){
				return usersRepo.query();
			},
			getUser: function(username){
				return usersRepo.get({username: username});
			},
			save: function(email){
				usersRepo.save(email);
			}
		}
	}]);
});