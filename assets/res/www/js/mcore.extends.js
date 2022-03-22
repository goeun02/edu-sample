
(function(window, undefined) {

var 
thisFileName = "mcore.extends.js",

importFiles = [
	"jquery-3.6.0.min.js",
	"muikit-1.0.0.min.js",
	"wnInterface.extends.js",
  "common/ui.js",
  "common/definition.js",
  "common/setup.js",
];

M.ScriptLoader.writeScript( importFiles, M.ScriptLoader.scriptPath(thisFileName) );

})(window);