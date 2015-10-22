"bundle";
define("app/amd/nodeps.js", [], function() {
  console.log('inside amd/nodeps');
  return 'AMD/nodeps';
});
;
define('app/es6/deps.js', ['exports', 'app/amd/nodeps.js', 'babel-runtime/helpers/interop-require-default'], function (exports, _appAmdNodepsJs, _babelRuntimeHelpersInteropRequireDefault) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _amd = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_appAmdNodepsJs);

  console.log('inside es6/deps', _amd['default']);

  // new Promise(function(resolve, reject) {}).then(function(val) {}).catch(function(reason) {});

  var x = 'ES6/deps';
  exports.x = x;
  var y = 'ES6/deps+y';
  exports.y = y;
});

define("app/lib.js", ["require", "exports", "module"], function(req, exports, module) {
  console.log('inside generic lib file');
  module.exports = 'lib';
});

define("app/cjs/deps.js", ["require", "exports", "module", "app/lib.js"], function(req, exports, module) {
  var lib = req('app/lib.js');
  console.log('inside cjs/deps', lib);
  module.exports = 'cjs/deps';
});

define("app/cjs/nodeps.js", ["require", "exports", "module"], function(req, exports, module) {
  console.log('inside common/nodeps');
  module.exports = 'common/nodeps';
});

define("app/amd/deps.js", ["require", "exports", "module", "app/cjs/nodeps.js"], function(require, exports, module) {
  var common = require('app/cjs/nodeps.js');
  console.log('inside amd/deps');
  return 'AMD/deps';
});
;
define('app/core.js', ['exports', 'app/es6/deps.js', 'app/cjs/deps.js', 'babel-runtime/helpers/interop-require-default', 'app/amd/deps.js'], function (exports, _appEs6DepsJs, _appCjsDepsJs, _babelRuntimeHelpersInteropRequireDefault, _appAmdDepsJs) {
  // import 'babel-runtime/helpers/interop-require-default';
  'use strict';

  var _common = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_appCjsDepsJs);

  var _amd = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_appAmdDepsJs);

  // console.log('es6: ', es6);
  // console.log('amd: ', amd);
  // console.log('common: ', common);
});
