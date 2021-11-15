
  /*헤더 영역*/
$(function(){
    var $firstMenu = $('.menu-left'),
        $header = $('header');
    
    $('.menu-left > li > ul li').css({"display" : "none"});
   

    $firstMenu.mouseenter(function(){
        $header.animate({height:'300px'},600);
        $('.menu-left > li li').css({"display" : "block"});

    });    
       
    $firstMenu.mouseleave(function(){
        $header.stop().animate({height:'100px'},600);
    });   

});



/*푸터 영역*/
$(function(){
$(".flex1 > a").click(function(){
$(".popup_bg1").css({"display" : "block"})
})
$(".popup_bg1").click(function(){
$(".popup_bg1").css({"display" : "none"})
})
$(".flex2 > a").click(function(){
$(".popup_bg2").css({"display" : "block"})
})
$(".popup_bg2").click(function(){
$(".popup_bg2").css({"display" : "none"})
})
$(".flex3 > a").click(function(){
$(".popup_bg3").css({"display" : "block"})
})
$(".popup_bg3").click(function(){
$(".popup_bg3").css({"display" : "none"})
})
$(".flex4 > a").click(function(){
$(".popup_bg4").css({"display" : "block"})
})
$(".popup_bg4").click(function(){
$(".popup_bg4").css({"display" : "none"})
})
});    
