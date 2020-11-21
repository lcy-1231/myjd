"use strict";

var mytimer1;

(function formBgLunbo() {
  var form_bg = $1('.search .form .bg');
  var form_bg_arr = ['小天鹅洗衣机', '榨汁机家用', '卸妆水', '奶瓶消毒器', '海飞丝洗发水', '签字笔', '油烟机套装', '微星笔记本', '黑五购物季，大牌5折起'];
  var i = 0;
  mytimer1 = setInterval(function () {
    form_bg.innerText = form_bg_arr[i];
    i++;

    if (i === form_bg_arr.length) {
      i = 0;
    }
  }, 2000);
})();

var mytimer2;

(function hotLunbo() {
  var hot = $1('.hotwords .hot');
  var hot_arr = ['黑五购物季', '榨汁机家用', '冰箱洗衣机'];
  var i = 0;
  mytimer2 = setInterval(function () {
    hot.innerText = hot_arr[i];
    i++;

    if (i === hot_arr.length) {
      i = 0;
    }
  }, 3000);
})();