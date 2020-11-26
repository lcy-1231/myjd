var goodslist=$1('.mod_container .seckill_container .skwrap .spsk .seckill_mod_goodslist')
  ajax({
    url: './data/goodslist.php',
    type: 'get',
    dataType: 'json',
    success: function (json){
      var goodsStr = ''
      json.forEach(item=>{
        goodsStr += `
        <li class="seckill_mod_goods">
        <a href="./detail.html?id=${item.id}" class="seckill_mod_goods_link">
          <img src="${item.img}" alt="" class="seckill_mod_goods_link_img">
          <h4 class="seckill_mod_goods_title">${item.name}</h4>
          <p class="seckill_mod_goods_desc">${item.desc}</p>
        </a>
        <div class="seckill_mod_goods_info">
          <span class="seckill_mod_goods_info_txt">
            <span class="seckill_mod_goods_price">
              <i class="seckill_mod_goods_price_now">
                <em>￥</em>${item.price}</i>
              <span class="seckill_mod_goods_plus_lowest">${item.low}</span>
              <span class="seckill_mod_goods_price_pre">
                ￥
                <del>${item.high}</del>
              </span>
            </span>
          </span>
          <a class="seckill_mod_goods_info_i" id="${item.id}">立即抢购</a>
        </div>
      </li>
        `
      })
      goodslist.innerHTML = goodsStr
    }
  })

  var abc=$('.seckill_mod_goodslist')
  
  // abc.on('mouseenter','.seckill_mod_goods .seckill_mod_goods_link_img',function(){
  //   animate(this,{'margin-top':-5})
  //   console.log(11111111111);
  // }

  abc.on('click','.seckill_mod_goods .seckill_mod_goods_info_i',function(){
    var id=$(this).attr('id')
    if(localStorage.getItem('goods')){
      var goodsArr=JSON.parse(localStorage.getItem('goods'))
    }else{
      var goodsArr=[]  
    }
    var hasGoods=false 

    if(goodsArr.length>0){
      $.each(goodsArr,function(index,item){
        if(item.id===id){
          hasGoods=true
          item.num++
          return false
        }
      })
    }
    if(!hasGoods){
      console.log(id);
      goodsArr.push({id:id,num:1})
    }
    localStorage.setItem('goods',JSON.stringify(goodsArr))

    alert('添加购物车成功')
  })


