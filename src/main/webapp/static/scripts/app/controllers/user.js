angular.module('tg').controller('UserCtrl', function($scope, AuthService) {
  return $scope.$watch(AuthService.isLoggedIn, function(isLoggedIn) {
    return $scope.currentUser = AuthService.currentUser();
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsSUFBZixDQUFvQixDQUFDLFVBQXJCLENBQWdDLFVBQWhDLEVBQTRDLFNBQUMsTUFBRCxFQUFTLFdBQVQ7U0FDMUMsTUFBTSxDQUFDLE1BQVAsQ0FBYyxXQUFXLENBQUMsVUFBMUIsRUFBc0MsU0FBQyxVQUFEO1dBQ3BDLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFdBQVcsQ0FBQyxXQUFaLENBQUE7RUFEZSxDQUF0QztBQUQwQyxDQUE1QyIsImZpbGUiOiJjb250cm9sbGVycy91c2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3RnJykuY29udHJvbGxlciAnVXNlckN0cmwnLCAoJHNjb3BlLCBBdXRoU2VydmljZSkgLT5cclxuICAkc2NvcGUuJHdhdGNoIEF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4sIChpc0xvZ2dlZEluKSAtPlxyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuY3VycmVudFVzZXIoKVxyXG4iXX0=