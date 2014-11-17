define(['users/module'],function(usersModule){
	usersModule.service('UserService', ['Users','$http',function(usersRepo,$http){
		return {
			getUsers: function(){
				return usersRepo.query();
			},
			getUser: function(username){
				return usersRepo.get({username: username});
			},
			save: function(email){
				usersRepo.save(email);
			},
            getCurrentUser: function(){
                return $http.get('/oa/users/current');
            }
		}
	}]);
});