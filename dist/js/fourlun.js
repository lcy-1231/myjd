"use strict";

(function () {
  // 获取slider-wrapper,左右按钮
  // 每隔3秒自动播放
  // 点击按钮有用
  var prev = $1('.slider-control-prev');
  var next = $1('.slider-control-next');
  var slider = $1('.slider-wrapper'); // console.log(slider);
  // slider.style.left='-800px'

  var i = 0;
  var timer = setInterval(function () {
    slider.style.left = i * -800 + 'px';
    i++;

    if (i === 3) {
      i = 0;
    }

    next.onclick = function () {
      //获取当前的slider的left值，再次基础上减
      var sliderleft = slider.style.left;

      if (parseInt(sliderleft) <= -1600) {
        slider.style.left = 0;
      } else {
        slider.style.left = parseInt(sliderleft) - 800 + 'px';
      }
    };

    prev.onclick = function () {
      //获取当前的slider的left值，再次基础上减
      var sliderleft = slider.style.left;

      if (parseInt(sliderleft) === 0) {
        slider.style.left = '-1600px';
      } else {
        slider.style.left = parseInt(sliderleft) + 800 + 'px';
      }
    };
  }, 5000);
})();