// 轮播
new Swiper ('.jiantou',{
	autoplay: {
    	disableOnInteraction: false,
  	},
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })        
	
// 	var divs = container.getElementById("xuanZe");
// 	var divs2 = container.getElementById("xiugai");
// 	var nei = container.getElementById("switchDiv1");
// 	var nei2 = container.getElementById("switchDiv2");
// 	divs.onmousedown = function(){
// 		nei.style.display="block"
// 	}
	