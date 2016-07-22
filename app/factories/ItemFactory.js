"use strict";

app.factory("ItemStorage", function(FirebaseURL, $q, $http, AuthFactory){

    var putIsCompleted = function(item) {
        return $q((resolve, reject) => {
            $http.put(`${FirebaseURL}/items/${item.id}.json`, item)
            .success((data) => {
                // console.log("Data from delete", data );
                resolve(data);
            })
            .error((error) => {
                reject(error);
            });
        });
    };


	let getItemList = function(){
        let items = [];
        return $q(function(resolve, reject){
            $http.get(`${FirebaseURL}/items.json`)
            .success(function(itemObject){
                let itemCollection = itemObject;
                Object.keys(itemCollection).forEach(function(key){
                    // object.keys takes all keys and turns them into an array
                    itemCollection[key].id=key;
                    items.push(itemCollection[key]);
                });
                resolve(items); 
            })
            .error(function(error){
                reject(error);
            });
        });
	};

	let postNewItem = function(newItem){
        return $q(function(resolve, reject){
            $http.post(`${FirebaseURL}/items.json`,
            JSON.stringify(newItem))
            .success(function(ObjFromFirebase){
                resolve(ObjFromFirebase);
            })
            .error(function(error) {
                reject(error);
            });
        });
	};

    var deleteItem = function(listItemID) {
        console.log(listItemID, "this is delete item");
        return $q((resolve, reject) => {
            $http.delete(
                `${FirebaseURL}/items/${listItemID}.json`
            )
            .success((data) => {
                resolve(data);
            })
            .error((error) => {
                reject(error);
            });
        });
    };



	return {getItemList, postNewItem, deleteItem, putIsCompleted};
});	










