$(function(){
  // 点击搜索返回列表页
  $1('#search').onclick=function(){
    window.location='./goodslist.html'
  }

  // 拿到本地存储中的数据来渲染页面
  var all = document.querySelector('#all');
  var list = document.querySelector('.list');
  var carhave=$1('.car-have')
  
  // 1-先判断本地存储是否有购物车数据
  if(localStorage.getItem('goods')){

    // 显示展示列表的区域
    carhave.style.display='block'
    $1('#bangnixuan').style.display='block'
    $1('#xihuan').style.display='block'

    // 2-有数据-->获取-->得到的是字符串，要转换成对象，才能使用里面的数据
    var goodsArr=JSON.parse(localStorage.getItem('goods'))

    // 2-1 获取后端传来的json数据
    $.ajax({
      url:'./data/goodslist.php',
      type:'get',
      dataType:'json',
      success:function(json){
        // 2-2渲染页面
        var domStr=''
        //遍历本地存储里面的数据，再通过遍历json数据，拿到本地存储数据的整条数据
        $.each(goodsArr,function(index,item){
          $.each(json,function(ind,obj){
            if(item.id===obj.id){
              domStr+=`
              <li>
                <input type="checkbox" class="one">
                <img src="${obj.img}" alt="">
                <h3>${obj.name}</h3>
                <p>${obj.price}</p>
                <span><button class="sub" id="${obj.id}">-</button> <i id="${obj.id}">${item.num}</i>  <button class="plus" id="${obj.id}">+</button></span>
                <em id="${obj.id}">删除</em> 
              </li>
              `
              //删除 保存code是为了删除的时候获取相对应的数据
            }
          })
        })
        $('.car-have .list').html(domStr)

        /* 判断是否勾选全选 */
        if(all.checked){
          var checks=$2('.list input')
          console.log(111111111);
          for(var i=0;i<checks.length;i++){
            checks[i].checked=true
          }
        }

      }
    })

    // 2-3 删除 ->商品移出购物车(不仅要dom删除，本地存储也要删除)
    $('.list').on('click','li em',function(){
      // 删除对应商品的li
      $(this).parent().remove()

      //更新本地存储里面的数据
      // 删除哪条数据?先获取它的code
      var id=$(this).attr('id')
      // 遍历本地存储的数组，删除这条数据
      $.each(goodsArr,function(index,item){
        if(item.id===id){
          // 通过这条数据对应的下标值，删除
          goodsArr.splice(index,1)
          return false
        }
      })
      // 删除之后，得判断购物车是否还有数据，是否都删除完了
      // 没删除完，要更新本地存储，删除完也要提示用户购物车暂无数据
      if(goodsArr.length>0){
        // 更新要注意将字符串转换为 对象
        localStorage.setItem('goods',JSON.stringify(goodsArr))
      }else{
        //清除本地数据
        carhave.style.display='none'

        localStorage.removeItem('goods')
        var nodata=`
        <div class="car-empty">
          <div class="message">
            <ul>
              <li class="txt">购物车空空的哦~，去看看心仪的商品吧~</li>
              <li><a href='./index.html'>去购物</a></li>
            </ul>
          </div>
        </div>
        `
        $('.car-body .w').html(nodata)
      }
      alert('确定要删除该商品吗')
    })
  
    // 2-4 减
    $('.list').on('click','.sub',function(){
      // 要操作的商品编号
      var id=$(this).attr('id')
      // 得到了该条数据
      $.each(goodsArr,function(index,item){
        if(item.id===id){
          // 要有终止条件
          if(item.num===1){
            alert('你删除了该商品')
            $(this).parent().parent().remove()
            goodsArr.splice(index,1)
          }
          item.num--
          //更新本地存储中的数据
          if(goodsArr.length>0){
            // 更新要注意将字符串转换为 对象
            localStorage.setItem('goods',JSON.stringify(goodsArr))
          }else{
            //清除本地数据
            localStorage.removeItem('goods')
          }

          //更新页面中的数据
          $.ajax({
            url:'./data/goodslist.php',
            type:'get',
            dataType:'json',
            success:function(json){
              // 2-2渲染页面
              var domStr=''
              //遍历本地存储里面的数据，再通过遍历json数据，拿到本地存储数据的整条数据
              $.each(goodsArr,function(index,item){
                $.each(json,function(ind,obj){
                  if(item.id===obj.id){
                    domStr+=`
                    <li>
                      <input type="checkbox" class="one">
                      <img src="${obj.img}" alt="">
                      <h3>${obj.name}</h3>
                      <p>${obj.price}</p>
                      <span><button class="sub" id="${obj.id}">-</button> <i id="${obj.id}">${item.num}</i>  <button class="plus" id="${obj.id}">+</button></span>
                      <em id="${obj.id}">删除</em> 
                    </li>
                    `
                    //删除 保存code是为了删除的时候获取相对应的数据
                  }
                })
              })
              $('.list').html(domStr)
            }
          })
               // return false
        }
      })

    })

    // 2-5 加
    $('.list').on('click','.plus',function(){
      // 要操作的商品编号
      var id=$(this).attr('id')
      //得到了该条数据
      $.each(goodsArr,function(index,item){
        if(item.id===id){
          item.num++
          //更新本地存储中的数据
          localStorage.setItem('goods',JSON.stringify(goodsArr))
          //更新页面中的数据
          $.ajax({
            url:'./data/goodslist.php',
            type:'get',
            dataType:'json',
            success:function(json){
              // 2-2渲染页面
              var domStr=''
              //遍历本地存储里面的数据，再通过遍历json数据，拿到本地存储数据的整条数据
              $.each(goodsArr,function(index,item){
                $.each(json,function(ind,obj){
                  if(item.id===obj.id){
                    domStr+=`
                    <li>
                      <input type="checkbox" class="one">
                      <img src="${obj.img}" alt="">
                      <h3>${obj.name}</h3>
                      <p>${obj.price}</p>
                      <span><button class="sub" id="${obj.id}">-</button> <i id="${obj.id}">${item.num}</i>  <button class="plus" id="${obj.id}">+</button></span>
                      <em id="${obj.id}">删除</em> 
                    </li>
                    `
                  }
                })
              })
              $('.list').html(domStr)
            }
          })
        }
      })

    })

    // 2-6 全选
    // 全选全不选
    $(all).on('click',function(){
      var checks = document.querySelectorAll('.list input');
      for (var i = 0, len = checks.length; i < len; i++){
          if ( this.checked ) {
              checks[i].checked = true;
              /* 此时打印勾选状态的商品li */
              var aprice
              var anum
              var sum=0
              for (var j = 0,len = checks.length;j < len; j++){
                if ( checks[j].checked ) {
                  aprice=checks[j].parentNode.children[3].innerHTML
                  anum=checks[j].parentNode.children[4].children[1].innerHTML
                  sum+=aprice*anum
                  // checks[j].parentNode.style.backgroundColor='pink'
                  // console.log(checks[j].parentNode);
                  checks[j].parentNode.style.background='pink'
                }
              }
              $1('#heji').innerText=sum.toFixed(3)
          } else {
              checks[i].checked = false;
              $1('#heji').innerText='0'
              checks[i].parentNode.style.background='#fff'
          }
      }
    })
    //选择任务（事件委托）
    $(list).on('click','input',function (){
      var selectArr = [];//存储勾选状态
      var checks = document.querySelectorAll('.list input');
      // 遍历所有任务的勾选状态
      for (var i = 0, len = checks.length; i < len; i++){
          if ( checks[i].checked ) {
              selectArr.push('a');
          } else {
              selectArr.push('b');
          }
      }
      // 判断全选是否需要选中
      if ( has(selectArr,'b') ) {
          all.checked = false;
      } else {
          all.checked = true;
      }

      /* 此时打印勾选状态的商品li */
      var aprice
      var anum
      var sum=0
      for (var i = 0, len = checks.length; i < len; i++){
        if ( checks[i].checked ) {
          aprice=checks[i].parentNode.children[3].innerHTML
          anum=checks[i].parentNode.children[4].children[1].innerHTML
          sum+=aprice*anum
          checks[i].parentNode.style.background='pink'
        }else{
          checks[i].parentNode.style.background='#fff'
        }
      }
      $1('#heji').innerText=sum.toFixed(3)
    });

    //怎么复用$.ajax?????

    //合计部分 显示的金额是选中了的商品的
    // 遍历列表中的数据，获得选中的li


  }else{
    carhave.style.display='none'
    $1('#bangnixuan').style.display='none'
    $1('#xihuan').style.display='none'

    // 3-没数据-->告诉用户购物车暂无数据
    var nodata= `
    <div class="car-empty">
      <div class="message">
        <ul>
          <li class="txt">购物车空空的哦~，去看看心仪的商品吧~</li>
          <li><a href='./index.html'>去购物</a></li>
        </ul>
      </div>
    </div>`
    $('.car-body .w').html(nodata)
  }


})