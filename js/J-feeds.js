(function(){
  // 渲染到哪里
  var more2list=$1('.J-feeds .more2 .more2-list')
  // 1.创建数据交互对象
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest() // 非IE5 6
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
  }
  // 2.打开连接
  xhr.open('get','./data/jfeeds.json?_='+Date.now(),true) 
  xhr.send(null) 
  xhr.onreadystatechange = function (){
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var json = JSON.parse(xhr.responseText)
        var dom = ''
        for (var i = 0, len = json.length; i < len; i++){
          dom += `
          <li class="more2-item more2-item-good">
            <span class="more2-item-gdot"></span>
            <a class="more2-lk">
              <div class="lazyimg lazyimg-loaded more2-img">
                <img src="${json[i].img}" alt="">
              </div>
              <div class="more2-info">
                <p class="more2-info-name">${json[i].name}</p>
                <div class="more2-info-price more2-info-price-plus more2-info-price-newcomer">
                  <div class="mod-price">
                    <i>￥</i><span class="more2-info-price-txt">${json[i].price}<span class="more2-info-price-txt-decimal">00</span>
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
        }
        more2list.innerHTML = dom
      } else {
        console.log(xhr.status);
      }
    }
  }
})()