"use strict";

(function () {
  //获取a，和自动轮播的i
  var slider = $1('.seckill-brand .brand-slider .slider-list .slider-wrapper');
  console.log(slider);
  var lis = $2('.slider-indicators i'); // 当前显示a的下标

  var aIndex = 0; //当前显示i的下标

  var iIndex = 0;
  var timer; // 向slider-wrapper中补一整个a

  var firstA = slider.children[0].cloneNode(true);
  slider.appendChild(firstA);
  console.log(firstA);
})();