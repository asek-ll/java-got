(function(module) {
try {
  module = angular.module('app-templates');
} catch (e) {
  module = angular.module('app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/game-list.tpl.html',
    '<h1>Game list</h1>\n' +
    '<div class="btn-toolbar" role="toolbar">\n' +
    '  <div class="btn-group" role="group">\n' +
    '    <a href="games/new" class="btn btn-default">Create game</a>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="table">\n' +
    '  <thead>\n' +
    '    <tr>\n' +
    '      <th>Name</th>\n' +
    '      <th>Created</th>\n' +
    '      <th>Status</th>\n' +
    '      <th>Owner</th>\n' +
    '    </tr>\n' +
    '  </thead>\n' +
    '  <tbody>\n' +
    '    <tr ng-repeat="game in games">\n' +
    '      <td>\n' +
    '        <a href="/game/{{ game._id }}" ng-bind="game.name"></a>\n' +
    '      </td>\n' +
    '      <td ng-bind="game.created | date:\'medium\'"></td>\n' +
    '      <td ng-bind="game.status"></td>\n' +
    '      <td ng-bind="game.owner.name"></td>\n' +
    '    </tr>\n' +
    '  </tbody>\n' +
    '</table>\n' +
    '');
}]);
})();
