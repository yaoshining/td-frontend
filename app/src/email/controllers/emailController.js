define(['angular','email/module'],function(angular,emailModule){
	emailModule.controller('EmailController', [
		'$scope',
		'$location', 
		'$compile',
		'EmailService',
		'UserService',
		'$state',
		'$window',
		function($scope,$location,$compile,emailService,userService,$state,$window){
			$scope.emails = emailService.getEmails('shining');
			$scope.viewName = $state.params.emailView;
            if($state.params.emailId){
                var emailId = $state.params.emailId;
                $scope.email = emailService.getEmail(emailId);
            }
			$scope.composeTabActive = "mail";
			$scope.composeForm = {};
			$scope.sendTo = "";
			$scope.swithComposeTab = function(tabName){
				$scope.composeTabActive = tabName;
			}
			$scope.sendComposeForm = function(){
				var usernames = _.filter($scope.sendTo.split(";"),function(item){
					if(item!==""){
						return item;
					}
				});
				$scope.composeForm.receiverUserNames = usernames;
				emailService.save($scope.composeForm);
			}
			$scope.back = function(){
				$window.history.back();
			}
			$scope.disableBlur = function($event){
				$($event.target).bind( "keydown", function( event ) {
					if ( event.keyCode === $.ui.keyCode.DOWN &&
						$( this ).autocomplete( "instance" ).menu.active ) {
						event.preventDefault();
					}
				})
			}
			$scope.showEmailDetails = function(email){
                $location.path("emails/details/"+email.id);
			}
			// var availableTags = [
			// 	"ActionScript",
			// 	"AppleScript",
			// 	"Asp",
			// 	"BASIC",
			// 	"C",
			// 	"C++",
			// 	"Clojure",
			// 	"COBOL",
			// 	"ColdFusion",
			// 	"Erlang",
			// 	"Fortran",
			// 	"Groovy",
			// 	"Haskell",
			// 	"Java",
			// 	"JavaScript",
			// 	"Lisp",
			// 	"Perl",
			// 	"PHP",
			// 	"Python",
			// 	"Ruby",
			// 	"Scala",
			// 	"Scheme"
			// ];
			var availableTags = userService.getUsers();
			function extractLast( term ) {
				return split( term ).pop();
			}
			// function split( val ) {
			// 	return val?val.split( /;\s*/ ):[];
			// }
			function split( val ) {
				return val?val.split( /;\s*/ ):[];
			}
			$scope.recieversAutocompleteConfig = {
				options: {
					minLength: 0,
					onlySelect: true,
					source: function( request, response ) {
					  // delegate back to autocomplete, but extract the last term
					  response( $.ui.autocomplete.filter(
					    _.pluck(availableTags,'username'), extractLast( request.term ) ) );
					},
					select: function( event, ui ) {
					  var terms = split($scope.sendTo );
					  // add the selected item
					  terms.pop();
					  // add the selected item
					  terms.push( ui.item.value );
					  // add placeholder to get the comma-and-space at the end
					  terms.push( "" );
					  ui.item.value = terms.join( "; " );
					  $scope.sendTo = terms.join(";");
					  return false;
					}
				},
				methods: {},
				events: {
					focus: function() {
					  // prevent value inserted on focus
					  return false;
					}
				}
			};
		}
	]);
});