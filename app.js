

var app = angular.module('ReminderApp', []);

app.controller('SummaryController', function($scope, $http, $rootScope) {

    //Get Data From JSON
    $http.get('testData.json').then(successCallback, errorCallback);

    function successCallback(response) {
        //success code
        console.log("Load Data from json success")
        $scope.babyDataSummary = response.data;
    }
    function errorCallback(error) {
        //error code
        console.log("Some error in loading JSON Data")
    }

    //Get data from patientdataformcontroller
    //console.log("Data from Patient Data controller is : ", $rootScope.newData);
});

app.controller("PatientDataFormController", function($scope, $rootScope) {
    // export page definition to json file
    $scope.exportToFile = function() {
        var fileText = "I am the first part of the info being emailed.\r\nI am the second part.\r\nI am the third part.";
        var fileName = "testDataExported.json"
        saveTextAsFile(fileText, fileName);

        //Try to send data to summarycontroller
        //$rootScope.newData = fileText;
    }

    function saveTextAsFile(data, filename) {
        if (!data) {
            console.error('Console.save: No data')
            return;
        }

        if (!filename) filename = 'console.json'

        var blob = new Blob([data], { type: 'text/plain' }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')
        // FOR IE:

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            var e = document.createEvent('MouseEvents'),
          a = document.createElement('a');

            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
            e.initEvent('click', true, false, window,
          0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        }
    }
});
