$(function(){
	var Methods = {
		sideNav : function(obj,classname){ //用于侧栏导航，菜单等 Methods.sideNav('.menu','show');
			var _this = $(obj);
			var _list = _this.next('ul');
			_this.click(function(){
				if(!_list.hasClass(classname)){
					_list.addClass(classname);
				}else{
					_list.removeClass(classname);
				}
			})
		},
		simpleTab : function(obj,bd,classname){ //简单选项卡切换 Methods.simpleTab('.hd ul li','.bd ul li','on');
			var _this = $(obj);
			var _bd = $(bd);
			_this.click(function(){
				_this.siblings().removeClass(classname);
				$(this).addClass(classname);
				_bd.hide().eq($(this).index()).show();
			})
		},
		timeliner : function(){ //时间轴
			var window_width = $(window).width();
			$('#issues li').css('width',window_width * 0.94);
			$().timelinr({
				autoPlay: 'true',
				autoPlayDirection: 'forward',
				startAt: 1
			})
			$(window).resize(function(){
				window_width = $(window).width();
				$('#issues li').css('width',window_width * 0.94);
			})	
		}
	}

	Methods.sideNav('.menu','show');
	Methods.simpleTab('.p_l_l_hd ul li','.p_l_l_bd ul li','on');
	if($('#timeline').length > 0){
		Methods.timeliner();
	}
	
	
})