"use strict";

app.controller("LogoutCtrl", function($scope, $location, AuthFactory) {

	$scope.logout = function() {

		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		  AuthFactory.currentUserID = null;
		  console.log(AuthFactory.getUser(), "Logged out");
		}, function(error) {
		  // An error happened.
		  console.log(error);
		});
	};
});
