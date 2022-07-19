//header하단 책 분류 mouseenter/mouseleave event
$(function(){
  $(".sub_nav_button").mouseenter(function(){
    $(this).children(".sub_hide_menu").show()
    $(this).children("a").css({"color":"#3382d1","text-decoration":"underline"})
  }).mouseleave(function(){
    $(this).children(".sub_hide_menu").hide()
    $(this).children("a").css({"color":"#000","text-decoration":"none"})
  });

  $(".sub_nav_button").eq(1).mouseenter(function(){
    $(".politics").stop().css("display","flex")
  }).mouseleave(function(){
    $(".politics").stop().hide()
  });
})
//책 속으로
$(function(){
  $(".into_open_btn").click(function(){
    $(".intothe_book").show()
  })
})
