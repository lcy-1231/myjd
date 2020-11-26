  //如果登录了就可以获取到用户名
  if(localStorage.getItem('user')){
    var username=localStorage.getItem('user')
    console.log(username);
    $1('#useralready').innerText=username+'你好！'
    $1('#nouseralready').innerText='欢迎逛京东'
  }

  // 点击我的购物车跳转页面
  $('#zhuancar').on('click',function(){
    window.location='./goodscars.html'
  })
  // console.log($('#settleup-2014'));

  var shoppingamount=$1('#shopping-amount')
  if(localStorage.getItem('goods')){
    // 总要更新数据，怎么即使更新??????????????????
    var goodsArr=JSON.parse(localStorage.getItem('goods'))
    shoppingamount.innerHTML=goodsArr.length
    // ajax局部刷新

  }else{
    shoppingamount.innerHTML=0
  }


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
        <a href="" class="seckill_mod_goods_link">
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
  
  $('.seckill_mod_goodslist').on('click','.seckill_mod_goods .seckill_mod_goods_info_i',function(){
    // 怎么确定点击的是要加入购物车的商品?每个商品都有一个唯一的id
    // 2-2 点击当前元素，可以获得当前商品的编号,是在上面的加入购物车按钮上添加了一个属性，保存了每个商品的id值
    var id=$(this).attr('id')
    // 加入购物车，是先在商品列表页面保存点击加入购物车的商品，和加入了几次，num
    // 添加到本地存储
    // localStorage key=value
    // goods=[{code:'abc1',num:1},{code:'abc3',num:2}]

    // 2-3 得先判断本地存储里是否有数据
    // (因为下一步是有数据，要获取数据，与点击的商品比较，判断有没有该条，有则num++,无则添加一条数据进去)
    if(localStorage.getItem('goods')){
      // key 的命名是自定义的,存储是用字符串的形式存的，拿出来要转对象
      // 如果有数据，获取数据到 goodsArr 这个数组中
      var goodsArr=JSON.parse(localStorage.getItem('goods'))
    }else{
      // 如果没有数据
      var goodsArr=[]  
      //=======================为什么要设为空,我知道上面是保存数据到一个变量中，数据是一个数组。
    }

    // 声明了一个标志变量，判断是否数据里是否有点击商品
    var hasGoods=false //默认没有，直接添加

    if(goodsArr.length>0){
      // 2-4 判断当前选中商品是否在购物车中
      $.each(goodsArr,function(index,item){
        //这是本地存储中的数据的遍历
        if(item.id===id){
          // 商品已经存在购物车中了
          hasGoods=true
          // 所以只是数量+1
          item.num++
          // 只会有一个匹配，匹配到了可以退出了
          return false
        }
      })
    }
    // 本地存储里没有当前点击的商品,将此条商品添加进本地存储中
    if(!hasGoods){
      console.log(id);
      goodsArr.push({id:id,num:1})
    }

    //更新本地存储数据
    localStorage.setItem('goods',JSON.stringify(goodsArr))

    alert('添加购物车成功')
  })


