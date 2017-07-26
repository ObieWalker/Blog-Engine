angular.module('angularfireSlackApp')
  .factory('Posts', function($firebaseArray){
    var categoryPostsRef = firebase.database().ref('categoryPosts');

    return {
      forCategory: function(categoryId){
        return $firebaseArray(categoryPostsRef.child(categoryId));
      }
    };
  });