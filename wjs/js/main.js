<<<<<<< HEAD

=======
/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-13 15:19:19
 */
>>>>>>> f492100fd7a47bcc3ed5d079ee80f56b6f0dd423

'use strict';

$(function() {
    // 当文档加载完成才会执行
    /**
     * 根据屏幕宽度的变化决定轮播图片应该展示什么
     * @return {[type]} [description]
     */
    function resize() {
        // 获取屏幕宽度
        var windowWidth = $(window).width();
        // 判断屏幕属于大还是小
        var isSmallScreen = windowWidth < 768;
        // 根据大小为界面上的每一张轮播图设置背景
<<<<<<< HEAD
        $('#main_ad > .carousel-inner > .item').each(function(i, item) {
            var $item = $(item);
=======
        // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
        $('#main_ad > .carousel-inner > .item').each(function(i, item) {
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
>>>>>>> f492100fd7a47bcc3ed5d079ee80f56b6f0dd423
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            // 设置背景图片
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
<<<<<<< HEAD
=======
            //
>>>>>>> f492100fd7a47bcc3ed5d079ee80f56b6f0dd423
            // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
<<<<<<< HEAD

        var $ulContainer =$(".ul-wapper > .nav-tabs");
        var width = 20;
        $ulContainer.children().each(function(index,element){
            var a =  element.clientWidth;
            width += element.clientWidth;
        });
        if(width > $(window).width()){
            $ulContainer.css('width',width)
                .parent()
                .css('overflow-x', 'scroll');
        }

        //添加轮播图触屏手动滑动操作
        var $carousels = $('.carousel')
        var startX, endX;
        var offset = 50;//控制滑动触发范围
        //注册滑动事件 touchstart(手指触摸开始) touchmove() touchend(触摸事件结束)
        $carousels.on('touchstart',function(e){
            startX = e.originalEvent.touches[0].clientX;
        })
        $carousels.on('touchmove',function(e){
            endX = e.originalEvent.touches[0].clientX;
        })
        $carousels.on('touchend',function(e){
            var distance = Math.abs(startX-endX);
            if(distance > offset) $(this).carousel(startX > endX ? 'next' : 'prev');
        })

    }
    $(window).on('resize', resize).trigger('resize');



=======
    }
    $(window).on('resize', resize).trigger('resize');
>>>>>>> f492100fd7a47bcc3ed5d079ee80f56b6f0dd423
});
