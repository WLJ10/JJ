$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-7*w},500);
			$('#b22').animate({top:240, left: vw-5*w},500);
			$('#b33').animate({top:240, left: vw-3*w},500);
			$('#b44').animate({top:240, left: vw-w},500);
			$('#b55').animate({top:240, left: vw+w},500);
			$('#b66').animate({top:240, left: vw+3*w},500);
			$('#b77').animate({top:240, left: vw+5*w},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(300).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	//播放音乐
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(300).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});
	//皇冠
	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(300).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = window.innerWidth*Math.random();
		var randtop = window.innerHeight*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = window.innerWidth*Math.random();
		var randtop = window.innerHeight*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = window.innerWidth*Math.random();
		var randtop = window.innerHeight*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = window.innerWidth*Math.random();
		var randtop = window.innerHeight*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = window.innerWidth*Math.random();
		var randtop = window.innerHeight*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = window.innerWidth*Math.random();
		var randtop = window.innerHeight*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = window.innerWidth*Math.random();
		var randtop = window.innerHeight*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	// 随机气球
	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);//上升气球群
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(500).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	
	
	//蛋糕出现
	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(300).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});
	
	//点燃蜡烛
	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	//气球移动,显字
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;
		var w = $('.balloons').width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-7*w},500);
		$('#b22').animate({top:240, left: vw-5*w},500);
		$('#b33').animate({top:240, left: vw-3*w},500);
		$('#b44').animate({top:240, left: vw-w},500);
		$('#b55').animate({top:240, left: vw+w},500);
		$('#b66').animate({top:240, left: vw+3*w},500);
		$('#b77').animate({top:240, left: vw+5*w},500);
		$('.balloons').css('height', w*3.66+'px');//为什么这里要再次确定height
		$('.balloons').css('opacity','0.9');
		$('.balloons').css('position','absolute');
		$('.balloons h2').fadeIn(300);
		$(this).fadeOut('slow').delay(300).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	//显示message, 并淡出蛋糕
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.message').fadeIn('slow');
		$('.article').fadeIn('slow');
		
		var i;

		function msgLoop (parentSelector, i, callback) {
			$(`${parentSelector} p:nth-of-type(${i})`).fadeOut('slow').delay(300).promise().done(function() {
			i = i + 1;
			// 再次使用反引号插入新的 i
			$(`${parentSelector} p:nth-of-type(${i})`).fadeIn('slow').delay(800);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					// $('.cake').fadeIn('fast');
					$('#ToJJ').fadeIn('slow');
					// 当整个 msgLoop 执行完时调用回调
					if (typeof callback === 'function') {
						callback(); // 调用回调函数
					}
				});
				
			}
			else{
				msgLoop(parentSelector, i, callback);
			}			

		});
	}
		msgLoop("#texts-container",0, function(){
		});
	});
	$('#ToJJ').click(function(){//需要实现气球上移到顶部,其他元素全部淡出
		$('#ToJJ').fadeOut('slow');
		var w = $('.balloons').height();
		function articleShow (parentSelector, i) {
			// 再次使用反引号插入新的 i
			$(`${parentSelector} p:nth-of-type(${i})`).fadeIn('slow').delay(800).promise().done(function(){
			i = i + 1;
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					// 当整个 msgLoop 执行完时调用回调
				});
				
			}
			else{
				articleShow(parentSelector, i);
			}		
		});	
		};
		var w = $('.balloons').width() / 2;
		// 使用 $.when 来管理多个动画的完成
		$.when(
			// 隐藏 `.bulb`
			$('.bulb').fadeOut(200).delay(10).promise(),		
			// 隐藏 `.bannar`
			$('.bannar').fadeOut(200).delay(10).promise(),	
			// 隐藏 `.cake`
			$('.cake').fadeOut(200).delay(10).promise(),	
			// 动画 `#b11` 到 `#b77`
			$('#b11').animate({top: 10, left: vw - 7 * w}, 400),
			$('#b22').animate({top: 10, left: vw - 5 * w}, 500),
			$('#b33').animate({top: 10, left: vw - 3 * w}, 600),
			$('#b44').animate({top: 10, left: vw - w}, 700),
			$('#b55').animate({top: 10, left: vw + w}, 800),
			$('#b66').animate({top: 10, left: vw + 3 * w}, 900),
			$('#b77').animate({top: 10, left: vw + 5 * w}, 1000)
		).then(function () {
			setTimeout(function () {
				articleShow("#article-container", 0); // 调用 articleShow 并传入参数
			}, 500); // 等待200毫秒后调用 articleShow
		});
		
	});
});




//alert('hello');