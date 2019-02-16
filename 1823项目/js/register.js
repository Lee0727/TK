$(".tabs a").on("click",function(){
			$(this).addClass("click")
			.siblings().removeClass("click");
			var index = $(this).index()
			$($(".content")[index]).css("display","block")
			.siblings().css("display","none")
		})