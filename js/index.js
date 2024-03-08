$(document).ready(function(){

  /* 헤더 메뉴 */
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".mo-header").slideToggle();
  });
});