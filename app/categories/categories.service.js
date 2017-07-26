angular.module('angularfireSlackApp')
  .factory('Categories', function($firebaseArray){
    var ref = firebase.database().ref('categories');
    var categories = $firebaseArray(ref);

    return categories;
  });