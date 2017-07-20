
'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) { 
    $routeProvider
		
        .when('/', {
         templateUrl: 'home/home.html',
         controller: 'homeController'
        })

       .when('/register', {
        templateUrl: 'register/register.html',
        controller: 'registerController'
        })
       .when('/landingPage', {
        templateUrl: 'landingPage/landingPage.html',
        controller: 'landingPageController'
        })  
       .when('/addPost', {
        templateUrl: 'addPost/addPost.html',
        controller: 'addPostController'
        })		
        .otherwise({
             redirectTo: '/'
         });
		
});


myApp.controller('homeController', function($scope){
   
    $scope.singIn = function(){
        var username = $scope.user.email;
        var password = $scope.user.password;
        var auth = $firebaseAuth();

        auth.$signInWithEmailAndPassword(username, password).then(function(){
            console.log("User login Successful");
            $scope.errMsg = false;

        }).catch(function(error){
            $scope.errMsg = true;
            $scope.errMessage = error.message;
        });
    }
});