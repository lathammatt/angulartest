"use strict";

var app = angular.module("ToDoApp", ['ngRoute'])
	.constant('FirebaseURL', "https://todolistexercise.firebaseio.com/");
	

app.config(function($routeProvider){
	$routeProvider.
		when('/items/list', {
			templateUrl: 'partials/item-list.html',
			controller: 'ItemListCtrl'
		}).
		when('/items/new',{
			templateUrl: 'partials/item-new.html',
			controller: 'ItemNewCtrl'
		}).
		// specific item routing
		when('/items/details/:itemId',{
			templateUrl: 'partials/item-details.html',
			controller: 'ItemViewCtrl'
		}).
		otherwise('/items/list');
});







// app.controller("TodoCtrl", function($scope){
// 	$scope.showListView = true;
// 	$scope.newTask = {};
	

// 	$scope.allItem = function(){
// 		console.log("all");
// 		$scope.showListView = true;
// 	};

// 	$scope.newItem = function(){
// 		console.log("new");
// 		$scope.showListView = false;
// 	};



// });

