"use strict";

(function () {
  // 渲染到哪里
  var more2list = $1('.J-feeds .more2 .more2-list');
  $.ajax({
    url: './data/Jfeeds.json',
    type: 'get',
    dataType: 'json',
    success: function success(json) {
      // console.log(json)
      var goodsStr = '';
      $.each(json, function (index, item) {
        goodsStr += "\n        <li class=\"more2-item more2-item-good\">\n            <span class=\"more2-item-gdot\"></span>\n            <a class=\"more2-lk\">\n              <div class=\"lazyimg lazyimg-loaded more2-img\">\n                <img src=\"".concat(item.img, "\" alt=\"\">\n              </div>\n              <div class=\"more2-info\">\n                <p class=\"more2-info-name\">").concat(item.name, "</p>\n                <div class=\"more2-info-price more2-info-price-plus more2-info-price-newcomer\">\n                  <div class=\"mod-price\">\n                    <i>\uFFE5</i><span class=\"more2-info-price-txt\">").concat(item.price, "<span class=\"more2-info-price-txt-decimal\">00</span>\n                    </span>\n                  </div>\n                  <div class=\"more2-price-plus\">\n                    <div class=\"more2-discount\">\u5238</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"more2-item-hover\">\n                <div class=\"more2-item-delete\"></div>\n                <div class=\"more2-item-hd\">\n                  <div class=\"more2-item-btn more2-btn-find enable\">\n                    <i class=\"more2-btn-icon\"></i>\n                    <span>\u627E\u76F8\u4F3C</span>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </li>\n        ");
      });
      more2list.innerHTML = goodsStr;
    }
  });
})();