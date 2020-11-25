(function(){
  // 渲染到哪里
  var channelslist=$1('.J-channels .channelsB .channels-block-wrapper')
  $.ajax({
    url: './data/channelitem.json',
    type: 'get',
    dataType: 'json',
    success: function (json){
      // console.log(json)
      var goodsStr = ''
      $.each(json,function (index,item){
        goodsStr += `
        <div class="channels-item channels-item-${item.num}">
          <a class="channels-item-title">
            <span class="channels-item-title-main">${item.title}</span>
            <span class="channels-item-title-aside">${item.aside}</span>
          </a>
          <div class="channels-item-imgs">
            <a class="channels-item-link">
              <div class="lazyimg lazyimg-loaded channels-item-img">
                <img src="${item.img1}" alt="" class="lazyimg">
              </div>
            </a>
            <a class="channels-item-link">
              <div class="lazyimg lazyimg-loaded channels-item-img">
                <img src="${item.img2}" alt="" class="lazyimg">
              </div>
            </a>
          </div>
        </div>
        `
      })
      channelslist.innerHTML += goodsStr
    }
  })
})()