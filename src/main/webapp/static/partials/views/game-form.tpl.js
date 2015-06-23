(function(module) {
try {
  module = angular.module('app-templates');
} catch (e) {
  module = angular.module('app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/game-form.tpl.html',
    '<h1>Game creation</h1>\n' +
    '\n' +
    '<form role="form" name="form">\n' +
    '  <div class="form-group">\n' +
    '    <label for="gameName">Game name</label>\n' +
    '    <input type="input" class="form-control" id="gameName" ng-model="game.name" required placeholder="Enter name">\n' +
    '  </div>\n' +
    '  <!--\n' +
    '  <div class="form-group">\n' +
    '    <label for="exampleInputPassword1">Password</label>\n' +
    '    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label for="exampleInputFile">File input</label>\n' +
    '    <input type="file" id="exampleInputFile">\n' +
    '    <p class="help-block">Example block-level help text here.</p>\n' +
    '  </div>\n' +
    '  <div class="checkbox">\n' +
    '    <label>\n' +
    '      <input type="checkbox"> Check me out\n' +
    '    </label>\n' +
    '  </div>\n' +
    ' --> \n' +
    '  <button ng-disabled="form.$invalid" ng-click="createGame(game)" type="submit" class="btn btn-default">Submit</button>\n' +
    '</form>\n' +
    '');
}]);
})();
