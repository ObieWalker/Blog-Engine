angular.module('angularfireSlackApp')
  .controller('PostsCtrl', function(profile, categoryName, posts, title){
    var postsCtrl = this;
	
	postsCtrl.title = title;
	postsCtrl.posts = posts;
	postsCtrl.categoryName = categoryName;
	postsCtrl.title = '';
	postsCtrl.post = '';
	
	postsCtrl.sendPost = function (){
  if(postsCtrl.post.length > 0){
    postsCtrl.posts.$add({
      uid: profile.$id,
	  head: postsCtrl.title
      body: postsCtrl.posts,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(function (){
	  postsCtrl.title = '';
      postsCtrl.post = '';
    });
  }
};
  });