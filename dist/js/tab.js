"use strict";

(function () {
  function Tab(options) {
    // 初始化
    // console.log(this);
    this.init(options);
  } // 初始化方法


  Tab.prototype.init = function (options) {
    // console.log(this);
    this.tits = this.getElement(options.titles);
    this.cons = this.getElement(options.contents);
    this.showIndex = options.showIndex || 0; // 设置默认显示的选项

    this.setClass(this.tits[this.showIndex], ' active');
    this.setClass(this.cons[this.showIndex], 'tab-head-item show'); // 绑定事件

    this.bindEvent();
  }; // 绑定事件方法


  Tab.prototype.bindEvent = function () {
    var init1 = $1('.new-top .tab .tab-head .tab-head-item:nth-child(1) a'); // console.log(init1);

    init1.style.className = 'top-tab-lk active2'; //  缓存this指向

    var _this = this;

    for (var i = 0, len = this.tits.length; i < len; i++) {
      this.tits[i].index = i; // 保存每个元素的下标

      this.tits[i].onmouseover = function () {
        // 去掉上次选中的元素样式
        _this.setClass(_this.tits[_this.showIndex], 'top-tab-lk');

        _this.setClass(_this.cons[_this.showIndex], 'tab-body-item'); // 当前选中元素添加类名


        _this.setClass(_this.tits[this.index], 'top-tab-lk active2');

        _this.setClass(_this.cons[this.index], 'tab-body-item show2'); // 更新当前显示的下标


        _this.showIndex = this.index;
      };
    }
  }; // 操作类名的方法


  Tab.prototype.setClass = function (ele, oClass) {
    ele.className = oClass;
  }; // 获取元素方法


  Tab.prototype.getElement = function (selector) {
    return document.querySelectorAll(selector);
  };

  function tab(options) {
    return new Tab(options);
  } // 作为用户，更希望如下使用方式

  /* var obj = */


  tab({
    titles: '.new-top .tab .tab-head .tab-head-item a',
    contents: '.new-top .tab .tab-body .tab-body-item',
    showIndex: 0
  });
})();