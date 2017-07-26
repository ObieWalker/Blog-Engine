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
		/*resolve: {
		requireNoAuth: function($state, Auth){
			return Auth.$requireSignIn().then(function(auth){
			  $state.go('categories');
			}, function(error){
			  return;
			});
		  }
		}*/

        
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html',
		resolve: {
            requireNoAuth: function($state, Auth){
                return Auth.$requireSignIn().then(function(auth){$state.go('categories');
                }, function(error){
                    return;
                });
            }
        }
      })	  

      /*.state('posts', {
        url: '/posts',
		controller: 'PostsCtrl as postCtrl',
        templateUrl: 'categories/posts.html'
      })*/
    .state('profile', {
		  url: '/profile',
		  controller: 'ProfileCtrl as profileCtrl',
	      templateUrl: 'users/profile.html',
		  resolve: {
			auth: function($state, Users, Auth){
			  return Auth.$requireSignIn().catch(function(){
				$state.go('home');
			  });
			},
			profile: function(Users, Auth){
			  return Auth.$requireSignIn().then(function(auth){
				return Users.getProfile(auth.uid).$loaded();
			  });
			}
		  }
		})
		.state('categories', {
		  url: '/categories',
		  controller: 'CategoriesCtrl as categoriesCtrl',
	   	  templateUrl: 'categories/index.html',
		  resolve: {
			categories: function (Categories){
			  return Categories.$loaded();
			},
			profile: function ($state, Auth, Users){
			  return Auth.$requireSignIn().then(function(auth){
				return Users.getProfile(auth.uid).$loaded().then(function (profile){
				  if(profile.displayName){
					return profile;
				  } else {
					$state.go('profile');
				  }
				});
			  }, function(error){
				$state.go('home');
			  });
			}
		  }
		})
		.state('categories.create', {
		  url: '/create',
		  templateUrl: 'categories/create.html',
		  controller: 'CategoriesCtrl as categoriesCtrl'
		})
		
		.state('categories.posts', {
		  url: '/{categoryId}/posts',
		  templateUrl: 'categories/posts.html',
		  controller: 'PostsCtrl as postsCtrl',
		  resolve: {
			posts: function($stateParams, Posts){
			  return Posts.forCategory($stateParams.categoryId).$loaded();
			},
			categoryName: function($stateParams, categories){
			  return '#'+categories.$getRecord($stateParams.categoryId).name;
			}
		  }
		})
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html',
            resolve: {
            requireNoAuth: function($state, Auth){
                return Auth.$requireSignIn().then(function(auth){$state.go('categories');
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