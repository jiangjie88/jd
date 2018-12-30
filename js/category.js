window.addEventListener('load', function () {
    //   初始化分类左侧的滑动 限制了是初始化分类左侧的滑动效果  传人category-right里面的轮播图大容器选择器
    new Swiper('.category-left .swiper-container', {
        direction: 'vertical', // 垂直滚动
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
        slidesPerView: 'auto',
        freeMode: true, // 是否添加滑动的惯性

        // mousewheel: true,//支持鼠标滚轮
    });
    //   初始化分类左侧的滑动 限制了是初始化分类右侧的滑动效果  传人category-right里面的轮播图大容器选择器
    new Swiper('.category-right .swiper-container', {
        direction: 'vertical', // 垂直滚动
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
        slidesPerView: 'auto',
        freeMode: true, // 是否添加滑动的惯性
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // mousewheel: true,//支持鼠标滚轮
    });
});