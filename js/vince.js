// banner   渐入渐出效果 带有前进后退 以及数字控制
$(document).ready(function(){
	pingHeight=document.documentElement.clientHeight;
// $(".v_fuqu").niceScroll({
// touchbehavior:false,
// cursorcolor:"#878787",
// cursoropacitymax:1,
// cursorwidth:7,
// horizrailenabled:true,
// cursorborderradius:0,
// autohidemode:false,
// background:'none',
// cursorborder:'solid 0px #333'});	
	
$(".v_fuceng .close").click(function(){
	$(".v_fuceng").css({"display":"none"})
	//$("body").css({"overflowY":"scroll"})
})	
$(".v_fuceng").css({"display":"none"})  
$(".company .item").click(function(){
	$(".v_fuceng").css({"display":"block"})
	//$("body").css({"overflowY":"hidden"})

// 	$(".v_fuqu").niceScroll({
// touchbehavior:false,
// cursorcolor:"#878787",
// cursoropacitymax:1,
// cursorwidth:7,
// horizrailenabled:true,
// cursorborderradius:0,
// autohidemode:false,
// background:'none',
// cursorborder:'solid 0px #333'});
})	

$(".hidden_cont .close").click(function(event){
	$(this).parent().parent().removeClass("active");
	 event.stopPropagation();
})

$(".zhiwei_zone li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})


var a1 = $(".event_right").eq(0).offset().top;
var a2 = $(".event_right").eq(1).offset().top;
var a3 = $(".event_right").eq(2).offset().top;
var b1 = $(".event_left").eq(0).offset().top;
var b2 = $(".event_left").eq(1).offset().top;

if(!$("body,html").is(":animated")){
window.onscroll=function(){	
if($(document).scrollTop()>500){
$(".fanhui").css({"display":"block"});};
if($(document).scrollTop()<500){	
$(".fanhui").css({"display":"none"});};

if((a1-$(window).scrollTop())<(pingHeight)){
$(".event_right").eq(0).animate({"left":0,"opacity":1},1500)}

if((a2-$(window).scrollTop())<(pingHeight)){
$(".event_right").eq(1).animate({"left":0,"opacity":1},1500)}

if((a3-$(window).scrollTop())<(pingHeight)){
$(".event_right").eq(2).animate({"left":0,"opacity":1},1500)}


if((b1-$(window).scrollTop())<(pingHeight)){
$(".event_left").eq(0).animate({"right":0,"opacity":1},1500)}

if((b2-$(window).scrollTop())<(pingHeight)){
$(".event_left").eq(1).animate({"right":0,"opacity":1},1500)}
   if($(window).scrollTop()<60){
		 	console.log($(window).scrollTop());
		 	$(".header").removeClass('fixed-dom');
		 	$('.active1').removeClass('currentIndex');
			
		}else{
			$(".header").addClass('fixed-dom');
			$('.active1').addClass('currentIndex');
			
		}

} };
$(".fanhui").click(function(){
$('body,html').animate({ scrollTop: 0 }, 200);})	
	
function resize(){
pingHeight=document.documentElement.clientHeight;
pingWidth=document.documentElement.clientWidth;
 $(".v_fuqu").css({"height":pingHeight*0.8,"marginTop":pingHeight*0.1})
 $(".fanhui").css({"right":(pingWidth-1260)/2})

 }

 resize();
window.onresize=function(){ resize();}
 
    })
 
 
 
 
 
 

 
 
 

 
 
 
 
 
 
 
 
	

