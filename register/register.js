'use strict';

angular.module('myApp.registration', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
	  templateUrl: 'register/register.html',
    controller: 'registerController'
  });
}])

.controller('registerController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {


	$scope.registration = $firebaseArray(rootRef);

	$scope.regUser = function(){
		console.log('Adding User...');

		$scope.register.$add({
			firstname: $scope.firstname,
			lastname: $scope.lastname,
			email: $scope.email,
			password: $scope.password
		}).then(function(rootRef){
			var id = rootRef.key();
			console.log('Register User' + id);

			$scope.firstname = '';
			$scope.lastname = '';
			$scope.email = '';
			$scope.password = '';
		});
	}

}]);