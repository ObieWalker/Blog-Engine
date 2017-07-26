angular.module('angularfireSlackApp')
  .controller('PostsCtrl', function(profile, categoryName, posts, titles){
    var postsCtrl = this;
	
	postsCtrl.titles = titles;
	postsCtrl.posts = posts;
	postsCtrl.categoryName = categoryName;
	postsCtrl.title = '';
	postsCtrl.post = '';
	
	postsCtrl.sendPost = function (){
  if(postsCtrl.post.length > 0){
    postsCtrl.posts.$add({
      uid: profile.$id,
	  head: postsCtrl.titles,
      body: postsCtrl.posts,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(function (){
	  postsCtrl.title = '';
      postsCtrl.post = '';
    });
  }
};
  });