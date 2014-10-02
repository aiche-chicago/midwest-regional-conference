angular.module('mdwConfApp')
  .controller('GeneralCtrl', function ($http, $scope) {

    $http.get('/data/general.json')
      .success(function(data) {
        $scope.info = data;
      });

  })
  .controller('GacCtrl', function ($http, $scope) {

    $http.get('/data/gac.json')
      .success(function(data) {
        $scope.info = data;
      });

  })
  .controller('MpcCtrl', function ($http, $scope) {

    $http.get('/data/mpc.json')
      .success(function(data) {
        $scope.info = data;
      });

  })
  .controller('TechCtrl', function ($http, $scope) {

    $http.get('/data/technical.json')
      .success(function(data) {
        $scope.info = data;
      });

  });