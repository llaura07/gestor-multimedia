'use strict';
var app = angular.module('myApp', []);

app.controller('appCtrl', ['$scope', '$http', function($scope, $http){


    $scope.login = function(){
        var data = {
            correo: $scope.user,
            password: $scope.password
        };

        const url = 'http://localhost:8080/auth/login';

        $http({
            method: "POST",
            url: url,
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            // Almacenar el token en el localStorage si la respuesta es exitosa
            localStorage.setItem('token', response.data.token);
            console.log(response.data);


            window.location.href = 'index_admin_videos.html';
            

        }, function(error) {
            console.error(error);
        });

        console.log($scope.user);
        console.log($scope.password);
    }
}]);