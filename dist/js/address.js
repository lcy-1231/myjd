"use strict";

/* 这是顶部定位的js */
var dingwei = $1('.dingwei');
var lihover = $1('.lihover');
var dd = $1('.dd');
var dda = $2('.dd div a');

lihover.onmouseover = function () {
  dd.style.display = 'block';
  lihover.className = ' lihover-hover';
};

lihover.onmouseout = function () {
  dd.style.display = 'none';
  lihover.className = 'lihover';
};

dd.onmouseover = function () {
  dd.style.display = 'block';
  lihover.className = ' lihover-hover'; //当dd显示的时候，遍历dd里面的a标签

  for (var i = 0; i < dda.length; i++) {
    if (dda[i].innerText === dingwei.innerText) {
      dda[i].style.background = 'red';
      dda[i].style.color = 'white';
    }
  }
};

dd.onmouseout = function () {
  dd.style.display = 'none';
  lihover.className = 'lihover';
}; // 在dd上over的时候，如果点击哪一个城市，就获取里面的文字，并填写进dingwei中


$(dd).on('click', '.city div a', function () {
  //该函数可执行，那么先改变元素样式
  // console.log(this);
  //先清除其他所有的点击样式，遍历循环清除
  for (var i = 0; i < dda.length; i++) {
    dda[i].style.background = 'white';
    dda[i].style.color = '#999';
  }

  this.style.background = 'red';
  this.style.color = 'white';
  dingwei.innerText = this.innerText;

  var _this = this;

  $(dd).on('mouseover', '.city div a', function () {
    //进来的时候，dingwei的城市的样式已经是红色的了
    for (var i = 0; i < dda.length; i++) {
      dda[i].style.background = 'white';
      dda[i].style.color = '#999';
    }

    _this.style.background = 'red';
    _this.style.color = 'white';
    this.style.backgroundColor = '#eee';
    this.style.color = 'red';
    this.style.cursor = 'pointer';
  });
  $(dd).on('mouseout', '.city div a', function () {
    this.style.backgroundColor = 'white';
    this.style.color = '#999';
  });
});
/* 这是顶部右部导航的js */