$(document).ready(function(){//시작
  alert
  //Fullpage
  $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    scrollOverflow: true,
	});

  //.btn-open 클릭시 .m-wrap 이 내려옴
  $(".btn-open").click(function(){
    $(".m-wrap").animate({
      "top" : "0"
    }, 500);
  });

  //.btn-close 클릭시 .m-wrap 이 올라감
  $(".btn-close").click(function(){
    $(".m-wrap").animate({
      "top" : "-100%"
    }, 500);
  });

  //depth2 슬라이더
  $(".depth2").slideUp();

  $(".depth1").click(function(){    
    
    if($("+.depth2", this).css("display")=="none"){
     $(".depth1").removeClass("mn-on")
     $(this).addClass("mn-on")
     $(".depth1").removeClass("pcn-on")
     $(this).addClass("pcn-on")
     $(".depth2").stop().slideUp();
     $("+.depth2", this).stop().slideDown();

    }else{
     $(".depth2").slideUp();
     $(".depth1").removeClass("mn-on")
     $(".depth1").removeClass("pcn-on")
    }
  });


  //이미지 탭기능(Mobile)
  var swiper = new Swiper(".txt-Swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var mimgbox = new Swiper(".m-img-box", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
     },
    thumbs: {
      swiper: swiper,
    },
  });



  //animal-index tab 기능 (PC)
  var onTab = $(".tab-menu.pc-slide li.on").index();
      
      $(".tab-cont").eq(onTab).addClass("on");

      $(".tab-menu li").click(function(){
        var idx = $(this).index();

        //탭메뉴
        $(".tab-menu li").removeClass("on");
        $(this).addClass("on")

        //탭 콘텐츠
        $(".tab-cont").removeClass("on")
        $(".tab-cont").eq(idx).addClass("on");
      });

 //map 탭 기능
 var onTab = $(".tab-menu2 li.on").index();      
      $(".tab-cont2").eq(onTab).addClass("on");//eq()는 해당요소와 같은

      $(".tab-menu2 li").click(function(){
        var idx = $(this).index();

        //탭메뉴
        $(".tab-menu2 li").removeClass("on");
        $(this).addClass("on")

        //탭 콘텐츠
        $(".tab-cont2").removeClass("on")
        $(".tab-cont2").eq(idx).addClass("on");
      });

      
 //story 탭 기능
 var onTab = $(".tab-menu3 li.on").index();      
 $(".tab-cont3").eq(onTab).addClass("on");//eq()는 해당요소와 같은

 $(".tab-menu3 li").click(function(){
   var idx = $(this).index();

   //탭메뉴
   $(".tab-menu3 li").removeClass("on");
   $(this).addClass("on")

   //탭 콘텐츠
   $(".tab-cont3").removeClass("on")
   $(".tab-cont3").eq(idx).addClass("on");
 });


 //sns swiper
 var swiper = new Swiper(".snsSwiper", {
   slidesPerView: 2.5,
   spaceBetween: 0,
   loop: true,
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
    },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
    },
   breakpoints : {
     1024 : {
       slidesPerView :4,
       spaceBetween : 0
     },
     1520 : {
       slidesPerView :5,
       spaceBetween : 0
      }
    },
    
  });


  $(".snb-icon").hide();

  $(".snb-btn").click(function(){
    if($(".snb-icon").css("display")=="none"){
      $(this).addClass("rotate");
      $(".snb-icon1").stop().delay().slideDown(100);
      $(".snb-icon2").stop().delay(50).slideDown(100);
      $(".snb-icon3").stop().delay(100).slideDown(100);
      $(".snb-icon4").stop().delay(150).slideDown(100);
    }else{
      $(this).removeClass("rotate");
      $(".snb-icon1").stop().delay(150).slideUp(100);
      $(".snb-icon2").stop().delay(100).slideUp(100);
      $(".snb-icon3").stop().delay(50).slideUp(100);
      $(".snb-icon4").stop().delay().slideUp(100);
    }
  });


});

