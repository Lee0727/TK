$(".login_denglu li").on("click",function(){
			$(this).addClass("active")
			.siblings().removeClass("active");
			var index = $(this).index()
			$($(".content")[index]).css("display","block")
			.siblings().css("display","none")
		})