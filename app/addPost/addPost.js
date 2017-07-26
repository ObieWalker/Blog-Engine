'use strict';

angular.module('angularfireSlackApp.addPost', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPost', {
    templateUrl: 'addPost/addPost.html',
    controller: 'addPostController'
  });
}])

.controller('addPostController', ['$scope','$firebase', 'CommonProp', '$location', function($scope, $firebase, CommonProp, $location) {
	$scope.today = new Date();
    $scope.addPost = function(){
		var title = $scope.article.title;
  		var post = $scope.article.post;
		
		var user = CommonProp.getUser();
	
			var firebaseObj = new Firebase("https://blog-engine-d1336.firebaseio.com");
			var fb = $firebase(firebaseObj);

			fb.$push({
				title: title,
				post: post,
				date: date,
				emailId: user,
				'.priority': user
			}).then(function(ref) {
				$location.path('/landingPage');
		  		console.log(ref); 
			}, function(error) {
		  		console.log("Error:", error);
			});

		}
		
		$scope.logout = function(){
	    CommonProp.logoutUser();
	}
}]);