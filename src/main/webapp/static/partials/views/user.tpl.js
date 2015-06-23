(function(module) {
try {
  module = angular.module('app-templates');
} catch (e) {
  module = angular.module('app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/user.tpl.html',
    '<h1>User</h1>\n' +
    '\n' +
    '{{ currentUser.name }}\n' +
    '');
}]);
})();
