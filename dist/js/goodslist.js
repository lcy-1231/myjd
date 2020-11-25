"use strict";

(function () {
  // 渲染到哪里
  console.log(111111);
  var goodslist = $1('.mod_container .seckill_container .skwrap .spsk .seckill_mod_goodslist');
  ajax({
    url: './data/goodslist.php',
    type: 'get',
    dataType: 'json',
    success: function success(json) {
      // console.log(json)
      console.log(json);
      var goodsStr = '';
      json.forEach(function (item) {
        goodsStr += "\n        <li class=\"seckill_mod_goods\">\n        <a href=\"\" class=\"seckill_mod_goods_link\">\n          <img src=\"".concat(item.img, "\" alt=\"\" class=\"seckill_mod_goods_link_img\">\n          <h4 class=\"seckill_mod_goods_title\">").concat(item.name, "</h4>\n          <p class=\"seckill_mod_goods_desc\">\u524D100\u52A0\u9001\u6CE1\u817E\u7247</p>\n        </a>\n        <div class=\"seckill_mod_goods_info\">\n          <span class=\"seckill_mod_goods_info_txt\">\n            <span class=\"seckill_mod_goods_price\">\n              <i class=\"seckill_mod_goods_price_now\">\n                <em>\uFFE5</em>838\n              </i>\n              <span class=\"seckill_mod_goods_plus_lowest\">\n                91\u5929\u5386\u53F2\u6700\u4F4E\n              </span>\n              <span class=\"seckill_mod_goods_price_pre\">\n                \uFFE5\n                <del>2274</del>\n              </span>\n            </span>\n          </span>\n          <a href=\"\" class=\"seckill_mod_goods_info_i\">\u7ACB\u5373\u62A2\u8D2D</a>\n        </div>\n      </li>\n        ");
      });
      goodslist.innerHTML = goodsStr;
    }
  });
})();