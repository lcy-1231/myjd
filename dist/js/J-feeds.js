"use strict";

(function () {
  // 渲染到哪里
  var more2list = $1('.J-feeds .more2 .more2-list'); // 1.创建数据交互对象

  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest(); // 非IE5 6
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP'); // IE5 6
  } // 2.打开连接


  xhr.open('get', './data/jfeeds.json?_=' + Date.now(), true);
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        var dom = '';

        for (var i = 0, len = json.length; i < len; i++) {
          dom += "\n          <li class=\"more2-item more2-item-good\">\n            <span class=\"more2-item-gdot\"></span>\n            <a class=\"more2-lk\">\n              <div class=\"lazyimg lazyimg-loaded more2-img\">\n                <img src=\"".concat(json[i].img, "\" alt=\"\">\n              </div>\n              <div class=\"more2-info\">\n                <p class=\"more2-info-name\">").concat(json[i].name, "</p>\n                <div class=\"more2-info-price more2-info-price-plus more2-info-price-newcomer\">\n                  <div class=\"mod-price\">\n                    <i>\uFFE5</i><span class=\"more2-info-price-txt\">").concat(json[i].price, "<span class=\"more2-info-price-txt-decimal\">00</span>\n                    </span>\n                  </div>\n                  <div class=\"more2-price-plus\">\n                    <div class=\"more2-discount\">\u5238</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"more2-item-hover\">\n                <div class=\"more2-item-delete\"></div>\n                <div class=\"more2-item-hd\">\n                  <div class=\"more2-item-btn more2-btn-find enable\">\n                    <i class=\"more2-btn-icon\"></i>\n                    <span>\u627E\u76F8\u4F3C</span>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </li>\n          ");
        }

        more2list.innerHTML = dom;
      } else {
        console.log(xhr.status);
      }
    }
  };
})();