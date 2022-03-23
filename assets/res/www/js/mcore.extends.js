/**
* 공통 라이브러리는 importFiles 배열에 선언한다.
* 선언된 라이브러리들은 html 파일에서 불러온다.
*/
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
  "common/util.js",
  "common/MAPI.js",
];

M.ScriptLoader.writeScript( importFiles, M.ScriptLoader.scriptPath(thisFileName) );

})(window);