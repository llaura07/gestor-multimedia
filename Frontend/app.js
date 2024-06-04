'use strict';
var app = angular.module('myApp', []);
app.controller('appCtrl', function($scope){
    $scope.login = function(){
        console.log($scope.user);
        console.log($scope.password);
    }
});