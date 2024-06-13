const myApp =angular.module('myApp_index_admin', [])

myApp.controller('index_admin_controller', function($scope, $http, $window) {
 
    const token = localStorage.getItem('token');
   
    console.log("token: "+ token);
    const myHeaders = {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
    };
   
$scope.message = '';
    $scope.saveUser = function() {
        newUser = {};
        const url = 'http://localhost:8080/user_functions/create_user';
        console.log($scope.newUser.Password);
       
        const data = {
            nombre: $scope.newUser.nombre,
            correo: $scope.newUser.correo,
            Password: $scope.newUser.Password,
            Rol: $scope.newUser.Rol
        };
        console.log(data);

         $http({
            method: "POST",
            url: url,
            headers: myHeaders,
            data: data
        })
        .then(function(response) {
            $scope.message = 'Usuario creado con éxito';
            $scope.newUser = {};
            console.log(response.data);
        }, function(error) {
            console.error(error);
        });
    };
  
   

    $scope.getAllUsers = function() {
        const url = 'http://localhost:8080/user_functions/users';
        $http({
            method: "GET",
            url: url,
            headers: myHeaders
        })
        .then(function(response) {
            $scope.users = response.data;
            console.log(response.data);
        }, function(error) {
            console.error(error);
        });
    };

    $scope.getAllUsers();

    $scope.selectUser = function(user) {
      
        $scope.newUser = angular.copy(user);
        
    };

    $scope.updateUser = function(user) {
        console.log("user:"+user);
        $scope.newUser.nombre = user.nombre;
        $scope.newUser.correo = user.correo;
        $scope.newUser.Password = user.Password;
        $scope.newUser.Rol = user.Rol;
        $('#editar').modal('show');
    
        const url = `http://localhost:8080/user_functions/update_user/${user.Id}`;
    
        const data = {
            nombre: user.nombre,
            correo: user.correo,
            Password: user.Password,
            Rol: user.Rol
        };
        console.log(data);
        $http({
            method: "PUT",
            url: url,
            headers: myHeaders,
            data: data
        })
        .then(function(response) {
            $scope.message = 'Usuario actualizado con éxito';
            $scope.getAllUsers();
            console.log(response.data);
        }, function(error) {
            console.error(error);
        });
    };


    $scope.deleteUser = function(user) {
        const url = `http://localhost:8080/user_functions/delete_user/${user.Id}`;
        $http({
            method: "DELETE",
            url: url,
            headers: myHeaders
        })
        .then(function(response) {
            $scope.message = 'Usuario eliminado con éxito';
            $scope.getAllUsers();
            console.log(response.data);
        }, function(error) {
            console.error(error);
        });
    };

    $scope.logOut = function() {
        const url = 'http://localhost:8080/auth/logout';
        $http({
            method: "PUT",
            url: url,
            headers: myHeaders
            
        })
        .then(function(response) {
            // Si la respuesta del servidor es exitosa, elimina el token del almacenamiento local
            if (response.status === 200) {
                localStorage.removeItem('token');
                $window.location.href = './login.html';
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
    };



});
