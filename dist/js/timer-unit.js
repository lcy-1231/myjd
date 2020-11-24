"use strict";

//京东倒计时
// 获取时分秒
// 当前时间
// 每一秒--
(function () {
  var endDate = new Date('2020/12/23 12:12:12');
  var nowDate = new Date();
  var s = getDifTime(nowDate, endDate); // 获取元素

  var hour = $1('.timer-hour');
  var minute = $1('.timer-minute');
  var second = $1('.timer-second'); //初始化页面内容

  function init(s) {
    if (s <= 0) {
      hour.innerText = '00';
      minute.innerText = '00';
      second.innerText = '00';
      return;
    } //根据时间差的秒数来计算时分秒


    var hours = s / 60 / 60;
    var d = parseInt(hours / 24); // console.log(d)

    var h = parseInt((hours / 24 - d) * 24); // console.log(h)

    var f = parseInt(((hours / 24 - d) * 24 - h) * 60); // console.log(f)

    var m = parseInt((((hours / 24 - d) * 24 - h) * 60 - f) * 60);
    hour.innerText = toDB(h);
    minute.innerText = toDB(f);
    second.innerText = toDB(m);
  }

  init(s); // 定时器控制秒

  var timer = setInterval(function () {
    s--;

    if (s <= 0) {
      hour.innerText = '00';
      minute.innerText = '00';
      second.innerText = '00';
      clearInterval(timer);
      return;
    }

    init(s);
  }, 1000);
})();