"use strict";

var app = angular.module("ToDoApp", ['ngRoute']);

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
		when('/items/details',{
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

