/**
 * Created by Orange on 2015/10/4.
 */
$(function(){
    var timer=null,
        imgW=$('.banner ul li:first').width(),
        index=0;
    // 克隆首尾banner为无缝滚动搭建基础框架
    $('.banner ul li:last').clone(true).prependTo($('.banner ul'));
    $('.banner ul li').eq(1).clone(true).appendTo($('.banner ul'));
    setTime();
    // 鼠标滑过轮播点切换banner
    $('.banner ol li').mouseover(function(){
        if(!$(this).hasClass('current')){
            index=$(this).index();
            startMove();
        }
    })

    // 鼠标滑入banner停止动画计时器-滑出banner继续动画计时器
    $('.main .banner').mouseover(function(){
        clearInterval(timer);
        $('.banner>span').stop().fadeTo(500,1);
    }).mouseout(function(){
        setTime();
        $('.banner>span').stop().fadeTo(500,0.2);
    })
    // 动画计时器
    function setTime(){
        clearInterval(timer);
        timer=setInterval(function(){
            index++;
            startMove();
        },6000)
    }
    // 动画事件
    function startMove(){
        if(index<=-1){
            $('.banner ul').stop().animate({'left':(index+1)*-imgW+'px'},1000,function(){
                $('.banner ul').css({'left':'-'+imgW*($('.banner ul li').length-2)+'px'});
                $('.banner ul li').eq($('.banner ul li').length-2).addClass('current').siblings().removeClass('current');
            });
            index=($('.banner ul li').length-3);
            $('.banner ol li').eq(index).addClass('current').siblings().removeClass('current');
        }else if(index<($('.banner ul li').length-2)){
            $('.banner ol li').eq(index).addClass('current').siblings().removeClass('current');
            $('.banner ul').stop().animate({'left':(index+1)*-imgW+'px'},1000,function(){

                $('.banner ul li').eq(index+1).addClass('current').siblings().removeClass('current');
            });
        }else{
            $('.banner ul').stop().animate({'left':(index+1)*-imgW+'px'},1000,function(){
                $('.banner ul').css({'left':'-'+imgW+'px'});

                $('.banner ul li').eq(1).addClass('current').siblings().removeClass('current');
            });
            index=0;
            $('.banner ol li').eq(index).addClass('current').siblings().removeClass('current');
        }

    }
    // 窗口大小改变事件-自适应banner
    $(window).bind("resize",function(){
        imgW=$(window).width();
        $('.banner ul').css({'left':(index+1)*-imgW+'px'});
        $('.banner ul li').css('width',imgW);
    });
    // 首页底部用户评价切换
    $('.main .our-Clients-in .Clients-words ol li').mouseover(function(){
        if(!$(this).hasClass('current')){
            $(this).addClass('current').siblings().removeClass('current');
            $('.main .our-Clients-in .Clients-words ul li').eq($(this).index()).fadeIn().siblings().fadeOut();
        }
    })
})