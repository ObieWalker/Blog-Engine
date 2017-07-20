(function () {

	firebase.initializeApp(config);

	
	angular.module('app', ['firebase']);
	angular.controller('MyCtrl', function($firebaseObject) {
		const rootRef = firebase.database().ref().child('angular'); 
		
		const ref = rootRef.child('object');
		this.object = $firebaseObject(ref);
	
	});
	
}());