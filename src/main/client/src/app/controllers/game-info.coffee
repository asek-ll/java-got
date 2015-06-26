angular.module('tg').controller 'GameInfoCtrl', ($scope, $routeParams, GameService) ->

  $scope.gameId = $routeParams.gameId
