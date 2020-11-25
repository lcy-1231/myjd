"use strict";

(function () {
  // 渲染到哪里
  var channelslist = $1('.J-channels .channelsB .channels-block-wrapper');
  $.ajax({
    url: './data/channelitem.json',
    type: 'get',
    dataType: 'json',
    success: function success(json) {
      // console.log(json)
      var goodsStr = '';
      $.each(json, function (index, item) {
        goodsStr += "\n        <div class=\"channels-item channels-item-".concat(item.num, "\">\n          <a class=\"channels-item-title\">\n            <span class=\"channels-item-title-main\">").concat(item.title, "</span>\n            <span class=\"channels-item-title-aside\">").concat(item.aside, "</span>\n          </a>\n          <div class=\"channels-item-imgs\">\n            <a class=\"channels-item-link\">\n              <div class=\"lazyimg lazyimg-loaded channels-item-img\">\n                <img src=\"").concat(item.img1, "\" alt=\"\" class=\"lazyimg\">\n              </div>\n            </a>\n            <a class=\"channels-item-link\">\n              <div class=\"lazyimg lazyimg-loaded channels-item-img\">\n                <img src=\"").concat(item.img2, "\" alt=\"\" class=\"lazyimg\">\n              </div>\n            </a>\n          </div>\n        </div>\n        ");
      });
      channelslist.innerHTML += goodsStr;
    }
  });
})();