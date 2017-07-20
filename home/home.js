'use strict'

angular.module('myApp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl:'home/home.html',
			controller:'homeController'
		})
}])

.controller('homeController', ['$scope', '$location', 'CommonProp', '$firebaseAuth', function($scope, $location, CommonProp, $firebaseAuth) {
	var firebaseObj = new Firebase("https://blogz-on-fire.firebaseio.com/");
	var loginObj = $firebaseAuth(firebaseObj);

	$scope.SignIn = function(e) {
		e.preventDefault();
		var username = $scope.user.email;
		var password = $scope.user.password;

		loginObj.$authWithPassword({
			email: username,
			password: password
		})
		.then(function(user) {
			console.log('Authentication successful');
			CommonProp.setUser(user.password.email);
			$location.path('/landingPage');
		}, function(error) {
			console.log('Authentication failure');
		});
	}
}])
.service('CommonProp', function() {
  var user = '';
  return {
    getUser: function() {
      return user;
    },
    setUser: function(value) {
      user = value;
    }
  };
});