angular.module('tg').controller('GameFormCtrl', function($scope, GameService) {
  return $scope.createGame = function(game) {
    return GameService.save(game);
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2dhbWUtZm9ybS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxJQUFmLENBQW9CLENBQUMsVUFBckIsQ0FBZ0MsY0FBaEMsRUFBZ0QsU0FBQyxNQUFELEVBQVMsV0FBVDtTQUU1QyxNQUFNLENBQUMsVUFBUCxHQUFvQixTQUFDLElBQUQ7V0FDZCxXQUFXLENBQUMsSUFBWixDQUFpQixJQUFqQjtFQURjO0FBRndCLENBQWhEIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2dhbWUtZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCd0ZycpLmNvbnRyb2xsZXIgJ0dhbWVGb3JtQ3RybCcsICgkc2NvcGUsIEdhbWVTZXJ2aWNlKSAtPlxyXG5cclxuICAgICRzY29wZS5jcmVhdGVHYW1lID0gKGdhbWUpIC0+XHJcbiAgICAgICAgICBHYW1lU2VydmljZS5zYXZlIGdhbWVcclxuIl19