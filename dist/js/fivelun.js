var swiper = new Swiper('#case4', {
  loop: true, //允许从第一张到最后一张，或者从最后一张到第一张  循环属性
  slidesPerView: 4, // 设置显示三张
  //centeredSlides : true,     //使当前图片居中显示
  freeMode: true, // 使幻灯片滑动时不止滑动一格，且不会自动贴合 
  slidesPerGroup: 1, //定义1张图片为一组
  autoplay: true, //可选选项，自动滑动
  speed: 5000, //设置过度时间
  grabCursor: true, //鼠标样式根据浏览器不同而定 
  autoplay: {
      delay: 1,
      disableOnInteraction: false,
  },
   /*  设置每隔3000毫秒切换 */
  // <!-- 分页器 -->
  // pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  // },
  scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
  }, 
});
/* 鼠标悬停 停止动画 */
$('.swiper-slide').mouseenter(function () {
  swiper.autoplay.stop();
})
$('.swiper-slide').mouseleave(function () {
  swiper.autoplay.start();
})
