"use strict";

(function () {
  // 渲染到哪里
  var channelslist = $1('.J-channels .channelsB .channels-block-wrapper'); // 1.创建数据交互对象

  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest(); // 非IE5 6
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP'); // IE5 6
  } // 2.打开连接


  xhr.open('get', './data/channelitem.json?_=' + Date.now(), true);
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        var dom = '';

        for (var i = 0, len = json.length; i < len; i++) {
          dom += "\n          <div class=\"channels-item channels-item-".concat(json[i].num, "\">\n            <a class=\"channels-item-title\">\n              <span class=\"channels-item-title-main\">").concat(json[i].title, "</span>\n              <span class=\"channels-item-title-aside\">").concat(json[i].aside, "</span>\n            </a>\n            <div class=\"channels-item-imgs\">\n              <a class=\"channels-item-link\">\n                <div class=\"lazyimg lazyimg-loaded channels-item-img\">\n                  <img src=\"").concat(json[i].img1, "\" alt=\"\" class=\"lazyimg\">\n                </div>\n              </a>\n              <a class=\"channels-item-link\">\n                <div class=\"lazyimg lazyimg-loaded channels-item-img\">\n                  <img src=\"").concat(json[i].img2, "\" alt=\"\" class=\"lazyimg\">\n                </div>\n              </a>\n            </div>\n          </div>\n          ");
        }

        channelslist.innerHTML += dom;
      } else {
        console.log(xhr.status);
      }
    }
  };
})();