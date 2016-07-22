"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, $location, AuthFactory){

	$scope.userID = AuthFactory.getUser();

	if(AuthFactory.isAuthenticated()){
		ItemStorage.getItemList()
		.then((itemCollection) => {
			$scope.items = itemCollection;
		});
	} else {	}


$scope.flipCompleted = function(item) {
	console.log("item", item );
	if (item.isCompleted === true){
		item.isCompleted = false;
		ItemStorage.putIsCompleted(item);
	} else {
		item.isCompleted = true;
		ItemStorage.putIsCompleted(item);

	}
};

$scope.deleteItemCall = function(item) {
	ItemStorage.deleteItem(item)
	.then((itemCollection) => {
		$scope.items = itemCollection;
		$location.path("/items/list");
		ItemStorage.getItemList()
		.then((itemCollection) => {
			$scope.items = itemCollection;
		});
	});
};

});