(function(module) {
try {
  module = angular.module('app-templates');
} catch (e) {
  module = angular.module('app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/home.tpl.html',
    ' <div class="starter-template">\n' +
    '        <h1>Bootstrap starter template</h1>\n' +
    '        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\n' +
    '        <div ng-repeat="thing in awesomeThings">\n' +
    '          {{thing}}\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      ');
}]);
})();
