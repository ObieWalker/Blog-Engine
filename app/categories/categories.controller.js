angular.module('angularfireSlackApp')
  .controller('CategoriesCtrl', function($state, Auth, Users, profile, categories){
    var categoriesCtrl = this;
	
	categoriesCtrl.profile = profile;
	categoriesCtrl.categories = categories;
	categoriesCtrl.getDisplayName = Users.getDisplayName;
	
	categoriesCtrl.newCategory = {
	  name: ''
	};
	categoriesCtrl.createCategories = function(){
	  categoriesCtrl.categories.$add(categoriesCtrl.newCategory).then(function(ref){
		$state.go('categories.posts', {categoryId: ref.key});
	  });
	};
	
  });