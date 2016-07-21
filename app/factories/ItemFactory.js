"use strict";

app.factory("ItemStorage", function(FirebaseURL, $q, $http){

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

	return {getItemList, postNewItem};
});	










