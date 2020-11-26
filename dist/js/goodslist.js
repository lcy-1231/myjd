"use strict";

var goodslist = $1('.mod_container .seckill_container .skwrap .spsk .seckill_mod_goodslist');
ajax({
  url: './data/goodslist.php',
  type: 'get',
  dataType: 'json',
  success: function success(json) {
    var goodsStr = '';
    json.forEach(function (item) {
      goodsStr += "\n        <li class=\"seckill_mod_goods\">\n        <a href=\"./detail.html?id=".concat(item.id, "\" class=\"seckill_mod_goods_link\">\n          <img src=\"").concat(item.img, "\" alt=\"\" class=\"seckill_mod_goods_link_img\">\n          <h4 class=\"seckill_mod_goods_title\">").concat(item.name, "</h4>\n          <p class=\"seckill_mod_goods_desc\">").concat(item.desc, "</p>\n        </a>\n        <div class=\"seckill_mod_goods_info\">\n          <span class=\"seckill_mod_goods_info_txt\">\n            <span class=\"seckill_mod_goods_price\">\n              <i class=\"seckill_mod_goods_price_now\">\n                <em>\uFFE5</em>").concat(item.price, "</i>\n              <span class=\"seckill_mod_goods_plus_lowest\">").concat(item.low, "</span>\n              <span class=\"seckill_mod_goods_price_pre\">\n                \uFFE5\n                <del>").concat(item.high, "</del>\n              </span>\n            </span>\n          </span>\n          <a class=\"seckill_mod_goods_info_i\" id=\"").concat(item.id, "\">\u7ACB\u5373\u62A2\u8D2D</a>\n        </div>\n      </li>\n        ");
    });
    goodslist.innerHTML = goodsStr;
  }
});
var abc = $('.seckill_mod_goodslist'); // abc.on('mouseenter','.seckill_mod_goods .seckill_mod_goods_link_img',function(){
//   animate(this,{'margin-top':-5})
//   console.log(11111111111);
// }

abc.on('click', '.seckill_mod_goods .seckill_mod_goods_info_i', function () {
  var id = $(this).attr('id');

  if (localStorage.getItem('goods')) {
    var goodsArr = JSON.parse(localStorage.getItem('goods'));
  } else {
    var goodsArr = [];
  }

  var hasGoods = false;

  if (goodsArr.length > 0) {
    $.each(goodsArr, function (index, item) {
      if (item.id === id) {
        hasGoods = true;
        item.num++;
        return false;
      }
    });
  }

  if (!hasGoods) {
    console.log(id);
    goodsArr.push({
      id: id,
      num: 1
    });
  }

  localStorage.setItem('goods', JSON.stringify(goodsArr));
  alert('添加购物车成功');
});