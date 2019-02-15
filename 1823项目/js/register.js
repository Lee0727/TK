// var $alist = $(".tabs a"),
// 	$blist = $(".reg_main_content form");
// 	$alist.onclick(function(){
// 		$blist.css("display","none");
// 		var index = $(this).index();
// 		$blist.eq(index).css("display","block");
// 	})

var tabs = document.querySelector("#aa");
var as = tabs.getElementsByTagName("a");
var babs = document.querySelector("#bb");
var divs = babs.getElementsByClassName("register_frm");

for( var i = 0 ; i < as.length ; i++){
	as[i].index = i;
	as[i].onclick = function(){
		for( var j = 0 ; j < as.length ; j++){
			// as[j].className = "";
			dive[j].style.display = "none";
		}
		this.className = "click";
		var ind = this.index;
		divs[ind].style.display = "block";
	}
}

