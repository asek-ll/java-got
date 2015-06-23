(function(module) {
try {
  module = angular.module('app-templates');
} catch (e) {
  module = angular.module('app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/login/loginView.tpl.html',
    '<h1>Login</h1>\n' +
    '\n' +
    '<form role="form" name="form" ng-class="{\'has-error\': error}">\n' +
    '  <div class="form-group">\n' +
    '    <label for="username">Username</label>\n' +
    '    <input type="input" class="form-control" id="username" ng-model="user.username" required="true" placeholder="Enter name">\n' +
    '  </div>\n' +
    '  <div class="form-group" ng-class="{\'has-error\': error}">\n' +
    '    <label for="password">Password</label>\n' +
    '    <input type="password" class="form-control" id="password" ng-model="user.password" required="true" placeholder="Password">\n' +
    '  </div>\n' +
    '  <button ng-disabled="form.$invalid" type="submit" class="btn btn-default" ng-click="login(user)">Submit</button>\n' +
    '</form>\n' +
    '');
}]);
})();
