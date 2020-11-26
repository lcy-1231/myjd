(function(){

  var feedtab=$2('.J-feeds .more2 .feed-tab-item')
  // for(var i=0;i<feedtab.length;i++){
  //   feedtab[i].index=i
  //   feedtab[i].onclick=function(){
  //     var _this=this
  //     feedtab[this.index].className='feed-tab-item'
  //     console.log(this);
  //     _this.className='feed-tab-item feed-tab-item-active'
  //   }
  // }
  

  $(feedtab).on('mouseenter','.J-feeds .more2 .feed-tab-item',function(){
    console.log(1111111);
    this.className='feed-tab-item feed-tab-item-active'
  })

  // 渲染到哪里
  var more2list=$1('.J-feeds .more2 .more2-list')
  $.ajax({
    url: './data/Jfeeds.json',
    type: 'get',
    dataType: 'json',
    success: function (json){
      // console.log(json)
      var goodsStr = ''
      $.each(json,function (index,item){
        goodsStr += `
        <li class="more2-item more2-item-good">
            <span class="more2-item-gdot"></span>
            <a class="more2-lk">
              <div class="lazyimg lazyimg-loaded more2-img">
                <img src="${item.img}" alt="">
              </div>
              <div class="more2-info">
                <p class="more2-info-name">${item.name}</p>
                <div class="more2-info-price more2-info-price-plus more2-info-price-newcomer">
                  <div class="mod-price">
                    <i>￥</i><span class="more2-info-price-txt">${item.price}<span class="more2-info-price-txt-decimal">00</span>
                    </span>
                  </div>
                  <div class="more2-price-plus">
                    <div class="more2-discount">券</div>
                  </div>
                </div>
              </div>
              <div class="more2-item-hover">
                <div class="more2-item-delete"></div>
                <div class="more2-item-hd">
                  <div class="more2-item-btn more2-btn-find enable">
                    <i class="more2-btn-icon"></i>
                    <span>找相似</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        `
      })
      more2list.innerHTML = goodsStr
    }
  })
})()