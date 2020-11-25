(function(){
  // 渲染到哪里
  console.log(111111);
  var goodslist=$1('.mod_container .seckill_container .skwrap .spsk .seckill_mod_goodslist')
  ajax({
    url: './data/goodslist.php',
    type: 'get',
    dataType: 'json',
    success: function (json){
      // console.log(json)
      console.log(json);
      var goodsStr = ''
      json.forEach(item=>{
        goodsStr += `
        <li class="seckill_mod_goods">
        <a href="" class="seckill_mod_goods_link">
          <img src="${item.img}" alt="" class="seckill_mod_goods_link_img">
          <h4 class="seckill_mod_goods_title">${item.name}</h4>
          <p class="seckill_mod_goods_desc">前100加送泡腾片</p>
        </a>
        <div class="seckill_mod_goods_info">
          <span class="seckill_mod_goods_info_txt">
            <span class="seckill_mod_goods_price">
              <i class="seckill_mod_goods_price_now">
                <em>￥</em>838
              </i>
              <span class="seckill_mod_goods_plus_lowest">
                91天历史最低
              </span>
              <span class="seckill_mod_goods_price_pre">
                ￥
                <del>2274</del>
              </span>
            </span>
          </span>
          <a href="" class="seckill_mod_goods_info_i">立即抢购</a>
        </div>
      </li>
        `
      })
      goodslist.innerHTML = goodsStr
    }
  })
})()