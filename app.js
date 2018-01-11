

var app = angular.module('ReminderApp', []);
app.controller('SummaryController', function($scope, $http) {

	//Get Data From JSON
    $http.get('testData.json').then(successCallback, errorCallback);

	function successCallback(response){
    	//success code
    	console.log("Load Data from json success")
    	$scope.babyDataSummary = response.data;
	}
	function errorCallback(error){
    	//error code
    	console.log("Some error")
	}

});

