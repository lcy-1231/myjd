"use strict";

(function () {
  //获取a，和自动轮播的i
  var slider = $1('.seckill-brand .brand-slider .slider-list .slider-wrapper');
  var sliderlist = $1('.seckill-brand .brand-slider .slider-list'); // console.log(slider)

  var lis = $2('.slider-indicators i'); // 当前显示a的下标

  var aIndex = 0; //当前显示i的下标

  var iIndex = 0;
  var timer; // 向slider-wrapper中补一整个a

  var firstA = slider.children[0].cloneNode(true);
  slider.appendChild(firstA); // console.log(firstA)

  var aLen = slider.children.length;
  var aWidth = slider.children[0].clientWidth; // console.log(aWidth);

  autoMove();

  function autoMove() {
    timer = setInterval(function () {
      moveNext();
    }, 3000);
  }

  function moveNext() {
    aIndex++;

    if (aIndex >= aLen) {
      aIndex = 1;
      sliderlist.scrollLeft = 0;
    }

    animate(sliderlist, {
      'scrollLeft': aIndex * aWidth
    }); //去掉上次显示数字的类名

    lis[iIndex].className = '';
    iIndex++;

    if (iIndex >= lis.length) {
      iIndex = 0;
    }

    lis[iIndex].className = 'active';
  }
})();