/**
 * @file : 베이스
 * @author :
 * @date : 
 */
 
// 페이지 단위모듈
(function ($, M, window){
  var page = {
    els: {
      $percent : null,
      $progressBar : null,
      
    },
    data: {},
    init :function init(){
      this.els.$percent = $('#percent');
      this.els.$progressBar = $('#progressBar');
    },
    
    /*
    진행도 표시
    @param {function} succCallback 완료 후 호출될 함수
    */
    startProgress : function startProgress(succCallback){
      var $percent =  this.els.$percent;
      var $progressBar = this.els.$progressBar;
      var count = 0;
      
      var interval = setInterval(function(){
        $percent.html(++count);
        $progressBar.css ('width',count+'%')
        if (count == 100 ){
          clearInterval(interval);
          succCallback();
          }
      }, 50); // 반복적으로 함수를 실행 1ms
    
    },
    moveLoginPage: function moveLoginPage(){
      M.page.html({
        url: "./login.html",
        actionType: "CLEAR_TOP"
      });
    },
    initView : function initView(){
      //화면에서 세팅할 동적데이터
      this.startProgress(this.moveLoginPage);
    },
    initEvent : function initEvent(){
      // Dom Event 바인딩
    }
  };
  window.__page__ = page;
})(jQuery,M,window);

// 화면에 리소스가 로딩을 끝내고 정상적으로 동작할 수 있는 머?
// window.onload이랑 비슷
// 해당 페이지에서 실제 호출
(function($, M, pageFunc, window){
  M.onReady(function(){
  pageFunc.init(); //최초 화면 초기화
  pageFunc.initView();
  });
  
})(jQuery,M,__page__,window);