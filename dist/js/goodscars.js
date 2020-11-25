"use strict";

$(function () {
  // 拿到本地存储中的数据来渲染页面
  // 1-先判断本地存储是否有购物车数据
  if (localStorage.getItem('goods')) {
    // 2-有数据-->获取-->得到的是字符串，要转换成对象，才能使用里面的数据
    var goodsArr = JSON.parse(localStorage.getItem('goods')); // 2-1 获取后端传来的json数据

    $.ajax({
      url: './data/goodslist.php',
      type: 'get',
      dataType: 'json',
      success: function success(json) {
        // 2-2渲染页面
        var domStr = ''; //遍历本地存储里面的数据，再通过遍历json数据，拿到本地存储数据的整条数据

        $.each(goodsArr, function (index, item) {
          $.each(json, function (ind, obj) {
            if (item.code === obj.code) {
              domStr += "\n              <li>\n                <input type=\"checkbox\" class=\"one\">\n                <img src=\"".concat(obj.imgurl, "\" alt=\"\">\n                <h3>").concat(obj.title, "</h3>\n                <p>").concat(obj.price, "</p>\n                <span><button class=\"sub\" code=\"").concat(obj.code, "\">-</button> <i code=\"").concat(obj.code, "\">").concat(item.num, "</i>  <button class=\"plus\" code=\"").concat(obj.code, "\">+</button></span>\n                <em code=\"").concat(obj.code, "\">\u5220\u9664</em> \n              </li>\n              "); //删除 保存code是为了删除的时候获取相对应的数据
            }
          });
        });
        $('.list').html(domStr);
      }
    }); // 2-3 删除 ->商品移出购物车(不仅要dom删除，本地存储也要删除)

    $('.list').on('click', 'li em', function () {
      // 删除对应商品的li
      $(this).parent().remove(); //更新本地存储里面的数据
      // 删除哪条数据?先获取它的code

      var code = $(this).attr('code'); // 遍历本地存储的数组，删除这条数据

      $.each(goodsArr, function (index, item) {
        if (item.code === code) {
          // 通过这条数据对应的下标值，删除
          goodsArr.splice(index, 1);
          return false;
        }
      }); // 删除之后，得判断购物车是否还有数据，是否都删除完了
      // 没删除完，要更新本地存储，删除完也要提示用户购物车暂无数据

      if (goodsArr.length > 0) {
        // 更新要注意将字符串转换为 对象
        localStorage.setItem('goods', JSON.stringify(goodsArr));
      } else {
        //清除本地数据
        localStorage.removeItem('goods');
        var nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据！</li>';
        $('.list').html(nodata);
      }

      alert('确定要删除该商品吗');
    }); // 2-4 减

    $('.list').on('click', '.sub', function () {
      // 要操作的商品编号
      var code = $(this).attr('code'); // 得到了该条数据

      $.each(goodsArr, function (index, item) {
        if (item.code === code) {
          // 要有终止条件
          if (item.num === 1) {
            alert('你删除了该商品');
            $(this).parent().parent().remove();
            goodsArr.splice(index, 1);
          }

          item.num--; //更新本地存储中的数据

          if (goodsArr.length > 0) {
            // 更新要注意将字符串转换为 对象
            localStorage.setItem('goods', JSON.stringify(goodsArr));
          } else {
            //清除本地数据
            localStorage.removeItem('goods');
          } //更新页面中的数据


          $.ajax({
            url: './data/goods.json',
            type: 'get',
            dataType: 'json',
            success: function success(json) {
              // 2-2渲染页面
              var domStr = ''; //遍历本地存储里面的数据，再通过遍历json数据，拿到本地存储数据的整条数据

              $.each(goodsArr, function (index, item) {
                $.each(json, function (ind, obj) {
                  if (item.code === obj.code) {
                    domStr += "\n                    <li>\n                      <input type=\"checkbox\" class=\"one\">\n                      <img src=\"".concat(obj.imgurl, "\" alt=\"\">\n                      <h3>").concat(obj.title, "</h3>\n                      <p>").concat(obj.price, "</p>\n                      <span><button class=\"sub\" code=\"").concat(obj.code, "\">-</button> <i code=\"").concat(obj.code, "\">").concat(item.num, "</i>  <button class=\"plus\" code=\"").concat(obj.code, "\">+</button></span>\n                      <em code=\"").concat(obj.code, "\">\u5220\u9664</em> \n                    </li>\n                    "); //删除 保存code是为了删除的时候获取相对应的数据
                  }
                });
              });
              $('.list').html(domStr);
            }
          }); // return false
        }
      });
    }); // 2-5 加

    $('.list').on('click', '.plus', function () {
      // 要操作的商品编号
      var code = $(this).attr('code'); //得到了该条数据

      $.each(goodsArr, function (index, item) {
        if (item.code === code) {
          item.num++; //更新本地存储中的数据

          localStorage.setItem('goods', JSON.stringify(goodsArr)); //更新页面中的数据

          $.ajax({
            url: './data/goods.json',
            type: 'get',
            dataType: 'json',
            success: function success(json) {
              // 2-2渲染页面
              var domStr = ''; //遍历本地存储里面的数据，再通过遍历json数据，拿到本地存储数据的整条数据

              $.each(goodsArr, function (index, item) {
                $.each(json, function (ind, obj) {
                  if (item.code === obj.code) {
                    domStr += "\n                    <li>\n                      <input type=\"checkbox\" class=\"one\">\n                      <img src=\"".concat(obj.imgurl, "\" alt=\"\">\n                      <h3>").concat(obj.title, "</h3>\n                      <p>").concat(obj.price, "</p>\n                      <span><button class=\"sub\" code=\"").concat(obj.code, "\">-</button> <i code=\"").concat(obj.code, "\">").concat(item.num, "</i>  <button class=\"plus\" code=\"").concat(obj.code, "\">+</button></span>\n                      <em code=\"").concat(obj.code, "\">\u5220\u9664</em> \n                    </li>\n                    "); //删除 保存code是为了删除的时候获取相对应的数据
                  }
                });
              });
              $('.list').html(domStr);
            }
          });
        }
      });
    }); // 2-6 全选
    // 保存勾选状态到本地存储
    // 勾选的是哪个商品
    // 添加code属性
    //怎么复用$.ajax?????
  } else {
    // 3-没数据-->告诉用户购物车暂无数据
    var nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据！</li>';
    $('.list').html(nodata);
  }
});