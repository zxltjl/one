		$(function(){	
				$('#movies').click(function(){
					$('#movies').removeAttr('poster')
					$('#movies').trigger('play');
				})
				$('#movies').dblclick(function(){
					$('#movies').trigger('pause');
				})
				// 图片hover显示
				$('div.pic').click(function(){
					var c=$(this).index();
					$('div.bla').show()
					$('div.p').eq(c-1).show().siblings().hide()
					var width=$('div.p').children('img').eq(c-1).width();
					var  w=innerWidth;
					var l=+w/2-width/2+'px';
					$('div.bla').css('left',l)
						$('button.right').click(function(){					
								if(c<5){
									c+=1;
									var x=$('div.p').eq(c-1).width();
									var y=w/2-x/2+'px';
									$('div.bla').css('left',y)
									$('div.p').eq(c-1).show().siblings().hide();
								}	else{c=1;
									var x=$('div.p').eq(c-1).width();
									var y=w/2-x/2+'px';
									$('div.bla').css('left',y)
									$('div.p').eq(c-1).show().siblings().hide();}				
						})
						console.log(c)
						$('button.left').click(function(){
							if(c>1){
								c-=1;
								var a=$('div.p').eq(c-1).width();
								var b=w/2-a/2+'px';
								$('div.bla').css('left',b)
								$('div.p').eq(c-1).show().siblings().hide();

							}	else{c=5;
								var a=$('div.p').eq(c-1).width();
								var b=w/2-a/2+'px';
								$('div.bla').css('left',b)
								$('div.p').eq(c-1).show().siblings().hide();}			
						})
				})
			
							$('span.sp').click(function(){
							$('div.bla').hide()
						})

				
				var pic=0;
					//图片自动
					$('div.silde').children('div').eq(0).animate({opacity:1,zoom:1.2},1500)
					$('div.text div.t').eq(0).animate({opacity:1},0)
				    var timer=setInterval(function(){	
					$('div.silde').children('div').eq(pic).animate({opacity:1,zoom:1.2},1500)
					$('div.silde').children('div').eq(pic).siblings().animate({opacity:0,zoom:1},1500)
					if($('div.silde').children('div').eq(pic).next().length == 0){
						pic=0;
					}else{
						pic++
					}
				},3000)	
				    $('div.text').animate({left:'650px',opacity:1},2500).animate({left:'600px'},500)
				    $('div.header span').animate({width:'100%'},500).animate({width:'0px'},500).animate({width:'100%'},500)
				    //左下角图片hover
				    $('div.menu div.bottom ul li').on({
				    	mouseenter:function(){$(this).children('img').eq(0).hide().siblings().show()},
				    	mouseleave:function(){$(this).children('img').eq(1).hide().siblings().show()}
				    })
				    //轮播点击图
				    var index=0;
				    var r;
				    //右击
				    $('div.top span').eq(1).on({
				    	mouseenter:function(){$(this).css('background','#45489a');$(this).children('p').css('color','white')},
				    	mouseleave:function(){$(this).css('background','#eee');$(this).children('p').css('color','#232323')},
				    	click:function(){
				    		if(index<6){
				    		index++;
				    		}else{index=0;}
				    		 r=-318.3*index+'px';
				    		
				    		$('div.bbb').animate({left:r},400)
				    		console.log(index)
				    		if(index==3){
				    			$('div.circel ul').children('li').css('background','#ccc')
				    			$('div.circel ul').children('li').eq(1).css('background','#45489a')
				    		}
				    		if(index==6){
				    			$('div.circel ul').children('li').css('background','#ccc')
				    			$('div.circel ul').children('li').eq(2).css('background','#45489a')}
				    		if(index>=3&&index<6){fun(1)}
				    	    if(index==6){fun(2)}
				    	    if(index>=0&&index<3){fun(0)}
				    	}
				    })
				    function fun(num){$('div.circel ul').children('li').eq(num).css('background','#45489a');
				    $('div.circel ul').children('li').eq(num).siblings().css('background','#ccc')}
				    //左击
				   $('div.top span').eq(0).on({
				    	mouseleave:function(){$(this).css('background','#eee');$(this).children('p').css('color','#232323')},
				   		mouseenter:function(){$(this).css('background','#45489a');$(this).children('p').css('color','white')},
				   		click:function(){
				   			if(index>0){
					   		index--;
					   		r=-318.3*index+'px';
					    	$('div.bbb').animate({left:r},400)
					    	}else{index=6;r=-318.3*index+'px';$('div.bbb').animate({left:r},400)}
					    	console.log(index)
					    	if(index>=3&&index<6){fun(1)}
					    	if(index==6){fun(2)}
					    	if(index>=0&&index<=2){fun(0)}
				   		}
				   })
				    //圆点点击
				    $('div.circel ul').children('li').mouseenter(function(){
				    	$('div.circel ul').children('li').css('background','#ccc')
				    	$(this).css('background','#45489a')
				    	index=$('div.circel ul').children('li').index($(this));
				    	var L=-318.3*3*index+'px'
				    	$('div.bbb').animate({left:L},400)
				    })
				    //遮罩
				    $('div.bbb div').on({
				    	mouseenter:function(){$(this).children('div').eq(0).children('div').animate({top:'300px'},500)},
				    	mouseleave:function(){$(this).children('div').eq(0).children('div').animate({top:'339px'},500)}
				})

				    //图片hover
				    $('div.mainpic div').mouseenter(function(){
				    	$(this).children('div').animate({opacity:1},1000)
				    })
					  $('div.mainpic div').mouseleave(function(){
				    	$(this).children('div').animate({opacity:0},1000)
				    })
					  //月份点击事件
					 	$('div.cctop ul li').click(function(){
						$(this).addClass('month').siblings().removeClass('month')
						var h=$(this).index()
						$('div.choose-one').eq(h).show().siblings().not('div.cctop').hide()
					})
					 	//锚点技术
					$('div.content ul li a').click(function(){
						console.log($('div.content ul li a'))
						$(this).children('span').eq(0).animate({width:'30px'},200).parents('li').siblings().children().children('span.rect').animate({width:'0px'},200);
					})
					$(window).scroll(function(){
						function funt(nu){$('div.content ul li a').eq(nu).children('span').eq(0).animate({width:'30px'},300).parents('li').siblings().children().children('span.rect').animate({width:'0px'},300);$('div.content ul li a').eq(nu).children('span.circel').css('background','white').parents('li').siblings().children().children('span.circel').css('background','transparent')
					}
						var t =document.documentElement.scrollTop||document.body.scrollTop;
						if(t>=0&&t<=400){funt(0)}else{$('div.content ul li a').eq(1).children('span').eq(0).stop(true).parents('li').siblings().children().children('span.rect').stop(true)}
						if(t>400&&t<=1200){funt(1)}
						if(t>1200&&t<=2200){funt(2)}
						if(t>2200&&t<=3000){funt(3)}
						if(t>3000&&t<=4100){funt(4)}
						if(t>4100&&t<=4458){funt(5)}
					})
					$('div.but button').on({
						click:function(){
							var a=$('div.input input').eq(0).val()
							var b=$('div.input input').eq(1).val()
							var c=$('div.input input').eq(2).val()
							if(a==''||b==''||c==''){alert('您的输入有误，请重新输入')}
						}
					})
				})