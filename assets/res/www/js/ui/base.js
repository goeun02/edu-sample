/**
 * @file : 로그인 페이지
 * @author : 김소담
 * @date : 2022-03-22
 */
 
// 페이지 단위모듈
(function ($, M, window){
  var page = {
    els: {},
    data: {},
    init :function init(){},
    
    initView : function initView(){},
    
    initEvent : function initEvent(){}
  };
  
  window.__page__ = page;
})(jQuery,M,window);

// 해당 페이지에서 실제 호출
(function($, M, pageFunc, window){

  // 화면에 리소스가 로딩을 끝내고 정상적으로 동작할 수 있는 
  // window.onload와 비슷
  M.onReady(function(){
  pageFunc.init(); //최초 화면 초기화
  pageFunc.initView();
  pageFunc.initEvent();
  });
  
})(jQuery,M,__page__,window);