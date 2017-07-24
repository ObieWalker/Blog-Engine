'use strict';

angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        
      })
      .state('landingPage', {
        url: '/landingPage',
        templateUrl: 'home/landingPage.html'
      })
      .state('addPost', {
        url: '/addPost',
        templateUrl: 'addPost/addPost.html'
      })
    
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html',
      /*  resolve: {
            requireNoAuth: function($state, Auth){
                return Auth.$requireSignIn().then(function(auth){$state.go('landingPage');
                }, function(error){
                    return;
                })
            }
        }*/
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html',
                resolve: {
            requireNoAuth: function($state, Auth){
                return Auth.$requireSignIn().then(function(auth){$state.go('landingPage');
                     }, function(error){
                    return;
                })
            }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
 
 
   .config(function(){


 var config = {
    apiKey: "AIzaSyCQUMZ3E29jouRy5q-PLbGBqk313sdsq_I",
    authDomain: "blog-engine-d1336.firebaseapp.com",
    databaseURL: "https://blog-engine-d1336.firebaseio.com",
    projectId: "blog-engine-d1336",
    storageBucket: "blog-engine-d1336.appspot.com",
    messagingSenderId: "215931026842"
  };
  firebase.initializeApp(config);

});