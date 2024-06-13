const app = angular.module('myApp_index_admin_videos', []);

app.controller('index_videos_controller', function($scope, $http, $sce, $window) {

    const token = localStorage.getItem('token');
   
    console.log("token: "+token);
    const myHeaders = {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
    };
   
  
        $scope.fetchCategorias = function() {
            const url = 'http://localhost:8080/user_functions/categorias';
            $http({
                method: "GET",
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(function(response) {
                $scope.categorias = response.data.map((categoria) => {
                    console.log(categoria.nombre, categoria.Id);
                    return {nombre: categoria.nombre, id: categoria.Id};
                });
            }, function(error) {
                console.error(error);
            });
        };

        $scope.fetchCategorias();

        $scope.getVideos = function(){
            const url = 'http://localhost:8080/user_functions/videos';
            $http({
                method: "GET",
                url: url,
                headers: myHeaders
            })
            .then(function(response) {
                $scope.videos = response.data;
               

                $scope.videos.forEach((video) => {
                    console.log("videos:"+video);
                });
                $scope.videosByCategory = {};
    
                $scope.videos.forEach((video) => {
                    if (!$scope.videosByCategory[video.categoria]) {
                        $scope.videosByCategory[video.categoria] = [];
                    }
                    $scope.videosByCategory[video.categoria].push(video);
                });
                
    
                console.log($scope.videosByCategory);
    
                $scope.categories = Object.keys($scope.videosByCategory);
              
    
                $scope.maxVideos = Math.max(...$scope.categories.map(category => $scope.videosByCategory[category].length));
                $scope.range = Array.from({length: $scope.maxVideos}, (v, k) => k);
                


                $scope.getEmbedUrl = function(videoUrl) {
                    if (!videoUrl) {
                        return '';
                    }
                    const videoId = videoUrl.split('v=')[1];
                    const embedUrl = 'https://www.youtube.com/embed/' + videoId;
                    return $sce.trustAsResourceUrl(embedUrl);
                };
            }, function(error) {
                console.error(error);
            });
        };

        $scope.getVideos();

    
        $scope.saveVideo = function() {
            
            const url = 'http://localhost:8080/user_functions/create_video';
            const data = {
                nombre: $scope.newVideo.nombre,
                autor: $scope.newVideo.autor,
                url: $scope.newVideo.url,
                categoria: $scope.newVideo.categoria
            };
            $http({
                method: "POST",
                url: url,
                data: data,
                headers: myHeaders
            })
            .then(function(response) {
                $scope.message = 'Video creado con éxito';
                $scope.newVideo = {};
                $scope.getVideos();
                console.log(response.data);
            }, function(error) {
                console.error(error);
            });
    }; 

    $scope.setVideoForEdit = function(video) {
        
        console.log(video);
        $scope.newVideo = angular.copy(video);
        
        $scope.newVideo.categoria = video.categoria_id;
        //console.log($scope.newVideo.categoria);
        
        $('#editar_video').modal('show');
         
    };
    
    $scope.editarVideo = function(video) {
        console.log($scope.newVideo);
        $scope.newVideo.nombre = video.nombre;
        $scope.newVideo.autor = video.autor;
        $scope.newVideo.url = video.url;        
    
        const url = `http://localhost:8080/user_functions/update_video/${video.id}`;
        
        const data = {
            nombre: $scope.newVideo.nombre,
            autor: $scope.newVideo.autor,
            url: $scope.newVideo.url,
            categoria_id: $scope.newVideo.categoria
        };
        $http({
            method: "PUT",
            url: url,
            headers: myHeaders,
            data: data
        })
        .then(function(response) {
            $scope.message = 'Video actualizado con éxito';
            $scope.getVideos();
            $scope.newVideo = {};
            console.log(response.data);
        }, function(error) {
            $scope.message = 'Error al actualizar el video';
            console.log(data);
            console.error(error);
        });
    };

    $scope.deleteVideo = function(video) {
        const url = `http://localhost:8080/user_functions/delete_video/${video.id}`;
        $http({
            method: "DELETE",
            url: url,
            headers: myHeaders
        })
        .then(function(response) {
            $scope.message = 'Video eliminado con éxito';
            $scope.getVideos();
            console.log(response.data);
        }, function(error) {
            $scope.message = 'Error al eliminar el video';
            console.error(error);
        });
    };

    $scope.createCategoria = async function(url, data) {
        try {
            const response = await $http({
                method: "POST",
                url: url,
                data: data,
                headers: myHeaders
            });
    
            $scope.message = 'Categoria creada con éxito';
            $scope.fetchCategorias();
            // Ahora getVideos se llama después de que la solicitud HTTP se ha completado
            $scope.getVideos();
            console.log(response.data);
        } catch (error) {
            $scope.message = 'Error al crear la categoría';
            console.error(error);
        }
    };

    $scope.submitCategoria = function() {
        const url = 'http://localhost:8080/user_functions/create_categoria';
        const data = {
            nombre: $scope.nuevaCategoria.nombre
        };
        $scope.createCategoria(url, data);
        
    };

    $scope.editarCategoria = function(categoria) {
        $scope.editarCategoria = angular.copy(categoria);
        console.log($scope.editarCategoria);
        const url = `http://localhost:8080/user_functions/update_categoria/${categoria.id}`;
        const data = {
            nombre: $scope.editarCategoria.nombre,
            id: $scope.editarCategoria.id
        };
        $http({
            method: "PUT",
            url: url,
            headers: myHeaders,
            data: data
        })
        .then(function(response) {
            $scope.message = 'Categoria actualizada con éxito';
            $scope.fetchCategorias();
            $scope.getVideos();
            $('#categorias').modal('hide');
            console.log(response.data);
        }, function(error) {
            $scope.message = 'Error al actualizar la categoría';
            $('#categorias').modal('hide');
            console.error(error);
        });
    };

    $scope.eliminarCategoria = function(categoria) {
        const url = `http://localhost:8080/user_functions/delete_categoria/${categoria.id}`;
        
        $http({
            method: "DELETE",
            url: url,
            headers: myHeaders
        })
        .then(function(response) {
            $scope.message = 'Categoria eliminada con éxito';
            $scope.fetchCategorias();
            $scope.getVideos();
            $('#categorias').modal('hide');
            console.log(response.data);
        }, function(error) {
            $scope.message = 'Error al eliminar la categoría';
            $('#categorias').modal('hide');
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
    }


});