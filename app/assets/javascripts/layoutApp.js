var LayoutApp = angular.module('LayoutApp', [])

LayoutApp.controller('MenuController', ['$scope', function($scope){
  $scope.currentItem = 'main'

  $scope.isCurrent = function(str){
    return str == $scope.currentItem;
  };
}]);
