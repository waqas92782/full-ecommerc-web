// categories item js start 
var clickeme = document.getElementById("categories-main");
var Showitems = document.getElementById("Categoires-items");
Showitems.style.height="0px";
clickeme.onclick=function(){
if(Showitems.style.height=="0px"){
        Showitems.style.height="400px";
 }
 else{
        Showitems.style.height="0px";
}   
}
// categories item js start end

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



// qty code 

