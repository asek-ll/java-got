angular.module('tg').factory('AuthService', function($http, $q) {
  var currentUser, requestCurrentUser;
  currentUser = void 0;
  requestCurrentUser = function() {
    var responsePromise;
    responsePromise = $http.get('/user');
    return responsePromise.success(function(data, status, headers, config) {
      return currentUser = data;
    });
  };
  requestCurrentUser();
  return {
    login: function(user) {
      var deferred;
      deferred = $q.defer();
      $http.post('/auth/local', user).success(function(data, status, headers, config) {
        if (status === 200) {
          currentUser = data;
          return deferred.resolve();
        } else {
          return deferred.reject();
        }
      }).error(function() {
        return deferred.reject();
      });
      return deferred.promise;
    },
    logout: function() {},
    isLoggedIn: function() {
      return !!currentUser;
    },
    currentUser: function() {
      return currentUser;
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2F1dGguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsSUFBZixDQUFvQixDQUFDLE9BQXJCLENBQTZCLGFBQTdCLEVBQTRDLFNBQUMsS0FBRCxFQUFRLEVBQVI7QUFDMUMsTUFBQTtFQUFBLFdBQUEsR0FBYztFQUVkLGtCQUFBLEdBQXFCLFNBQUE7QUFDbkIsUUFBQTtJQUFBLGVBQUEsR0FBa0IsS0FBSyxDQUFDLEdBQU4sQ0FBVSxPQUFWO1dBQ2xCLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixTQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsT0FBZixFQUF3QixNQUF4QjthQUN0QixXQUFBLEdBQWM7SUFEUSxDQUF4QjtFQUZtQjtFQUtyQixrQkFBQSxDQUFBO1NBRUE7SUFDRSxLQUFBLEVBQU8sU0FBQyxJQUFEO0FBQ0wsVUFBQTtNQUFBLFFBQUEsR0FBVyxFQUFFLENBQUMsS0FBSCxDQUFBO01BQ1gsS0FBSyxDQUFDLElBQU4sQ0FBVyxhQUFYLEVBQTBCLElBQTFCLENBQ0UsQ0FBQyxPQURILENBQ1csU0FBQyxJQUFELEVBQU8sTUFBUCxFQUFlLE9BQWYsRUFBd0IsTUFBeEI7UUFDUCxJQUFHLE1BQUEsS0FBVSxHQUFiO1VBQ0UsV0FBQSxHQUFjO2lCQUNkLFFBQVEsQ0FBQyxPQUFULENBQUEsRUFGRjtTQUFBLE1BQUE7aUJBSUUsUUFBUSxDQUFDLE1BQVQsQ0FBQSxFQUpGOztNQURPLENBRFgsQ0FPRSxDQUFDLEtBUEgsQ0FPUyxTQUFBO2VBQ0wsUUFBUSxDQUFDLE1BQVQsQ0FBQTtNQURLLENBUFQ7YUFVQSxRQUFRLENBQUM7SUFaSixDQURUO0lBZUUsTUFBQSxFQUFRLFNBQUEsR0FBQSxDQWZWO0lBZ0JFLFVBQUEsRUFBWSxTQUFBO2FBQ1YsQ0FBQyxDQUFDO0lBRFEsQ0FoQmQ7SUFrQkUsV0FBQSxFQUFhLFNBQUE7YUFDWDtJQURXLENBbEJmOztBQVYwQyxDQUE1QyIsImZpbGUiOiJzZXJ2aWNlcy9hdXRoLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3RnJykuZmFjdG9yeSAnQXV0aFNlcnZpY2UnLCAoJGh0dHAsICRxKSAtPlxyXG4gIGN1cnJlbnRVc2VyID0gdW5kZWZpbmVkXHJcblxyXG4gIHJlcXVlc3RDdXJyZW50VXNlciA9IC0+XHJcbiAgICByZXNwb25zZVByb21pc2UgPSAkaHR0cC5nZXQoJy91c2VyJylcclxuICAgIHJlc3BvbnNlUHJvbWlzZS5zdWNjZXNzIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykgLT5cclxuICAgICAgY3VycmVudFVzZXIgPSBkYXRhXHJcblxyXG4gIHJlcXVlc3RDdXJyZW50VXNlcigpXHJcblxyXG4gIHtcclxuICAgIGxvZ2luOiAodXNlcikgLT5cclxuICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpXHJcbiAgICAgICRodHRwLnBvc3QgJy9hdXRoL2xvY2FsJywgdXNlclxyXG4gICAgICAgIC5zdWNjZXNzIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykgLT5cclxuICAgICAgICAgIGlmIHN0YXR1cyA9PSAyMDBcclxuICAgICAgICAgICAgY3VycmVudFVzZXIgPSBkYXRhXHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKVxyXG4gICAgICAgIC5lcnJvciAtPlxyXG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KClcclxuXHJcbiAgICAgIGRlZmVycmVkLnByb21pc2VcclxuXHJcbiAgICBsb2dvdXQ6IC0+XHJcbiAgICBpc0xvZ2dlZEluOiAtPlxyXG4gICAgICAhIWN1cnJlbnRVc2VyXHJcbiAgICBjdXJyZW50VXNlcjogLT5cclxuICAgICAgY3VycmVudFVzZXJcclxuICB9XHJcbiJdfQ==