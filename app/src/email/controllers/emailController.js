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
            $log
        ){
			$scope.emails = emailService.getEmails('shining');
			$scope.viewName = $state.params.emailView;
            if($state.params.emailId){
                var emailId = $state.params.emailId;
                $scope.email = emailService.getEmail(emailId);
            }
			$scope.composeTabActive = "mail";
			$scope.composeForm = {
                attachments: []
            };
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
                $scope.selectedFiles = $files;
                //$files: an array of files selected, each file has name, size, and type.
                for (var i = 0; i < $files.length; i++) {
                    var file = $files[i];
                    $scope.upload = $upload.upload({
                        url: '/oa/services/files/upload', //upload.php script, node.js route, or servlet url
                        method: 'POST',
                        //headers: {'header-key': 'header-value'},
                        //withCredentials: true,
                        data: {myObj: $scope.myModelObj},
                        file: file // or list of files ($files) for html5 only
                        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
                        // customize file formData name ('Content-Disposition'), server side file variable name.
                        //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
                        // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
                        //formDataAppender: function(formData, key, val){}
                    }).progress(function(evt,config) {
                        $log.debug('File '+config.file.name+' '+parseInt(100.0 * evt.loaded / evt.total)+'% uploaded.');
                        config.file.percent = parseInt(100.0 * evt.loaded / evt.total);
                    }).success(function(data, status, headers, config) {
                        // file is uploaded successfully
                        $log.debug(data);
                        $timeout(function(){
                            config.file.reponseData = data;
                            config.file.finished = true;
                            $scope.composeForm.attachments.push(data.id);
                        },2000);
                });
                //.error(...)
                    //.then(success, error, progress);
                    // access or attach event listeners to the underlying XMLHttpRequest.
                    //.xhr(function(xhr){xhr.upload.addEventListener(...)})
                }
                /* alternative way of uploading, send the file binary with the file's content-type.
                 Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
                 It could also be used to monitor the progress of a normal http post/put request with large data*/
                // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
            };
		}
	]);
});