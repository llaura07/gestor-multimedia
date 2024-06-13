const app =angular.module('myApp_index_usuario_videos', [])
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