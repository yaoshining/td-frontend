define(['angular','email/module'],function(angular,emailModule){
	emailModule.controller('EmailController', [
		'$scope',
		'$location', 
		'$compile',
		'EmailService',
		'UserService',
		'$state',
		'$window',
        '$upload',
        '$timeout',
        '$log',
        'attachService',
		function(
            $scope,
            $location,
            $compile,
            emailService,
            userService,
            $state,
            $window,
            $upload,
            $timeout,
            $log,
            attachService
        ){
			$scope.emails = emailService.getEmails('shining');
			$scope.viewName = $state.params.emailView;
            if($state.params.emailId){
                var emailId = $state.params.emailId;
                $scope.email = emailService.getEmail(emailId);
                $scope.attachments = [];
                $scope.email.$promise.then(function(){
                    $.each($scope.email.attachments,function(i,e){
                        $scope.attachments.push(attachService.getAttachment(e));
                    });
                });
            }
			$scope.composeTabActive = "mail";
			$scope.composeForm = {
                attachments: []
            };
            $scope.dropSupported = false;
			$scope.sendTo = "";
            $scope.selectedFiles = [];
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
                console.log($scope.composeForm);
				emailService.save($scope.composeForm,function(){
                    $location.path("emails/inbox/");
                });
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
            $scope.downloadAttach = function(attachId){
                attachService.download(attachId);
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
            $scope.onFileSelect = function($files) {
                $log.debug($files.length+' files were selected.');
                $scope.selectedFiles = $scope.selectedFiles.concat($files);
                //$files: an array of files selected, each file has name, size, and type.
                for (var i = 0; i < $files.length; i++) {
                    var file = $files[i];
                    $scope.upload = attachService.upload(file,{
                        progress: function(evt,config){
                            config.file.percent = parseInt(100.0 * evt.loaded / evt.total);
                        },
                        success: function(data, status, headers, config){
                            $timeout(function(){
                                config.file.reponseData = data;
                                config.file.finished = true;
                                $scope.composeForm.attachments.push(data.id);
                            },2000);
                        }
                    });
                }
            };
		}
	]);
});