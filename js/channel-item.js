(function(){
  // 渲染到哪里
  var channelslist=$1('.J-channels .channelsB .channels-block-wrapper')
  // 1.创建数据交互对象
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest() // 非IE5 6
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
  }
  // 2.打开连接
  xhr.open('get','./data/channelitem.json?_='+Date.now(),true) 
  xhr.send(null) 
  xhr.onreadystatechange = function (){
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var json = JSON.parse(xhr.responseText)
        var dom = ''
        for (var i = 0, len = json.length; i < len; i++){
          dom += `
          <div class="channels-item channels-item-${json[i].num}">
            <a class="channels-item-title">
              <span class="channels-item-title-main">${json[i].title}</span>
              <span class="channels-item-title-aside">${json[i].aside}</span>
            </a>
            <div class="channels-item-imgs">
              <a class="channels-item-link">
                <div class="lazyimg lazyimg-loaded channels-item-img">
                  <img src="${json[i].img1}" alt="" class="lazyimg">
                </div>
              </a>
              <a class="channels-item-link">
                <div class="lazyimg lazyimg-loaded channels-item-img">
                  <img src="${json[i].img2}" alt="" class="lazyimg">
                </div>
              </a>
            </div>
          </div>
          `
        }
        channelslist.innerHTML += dom
      } else {
        console.log(xhr.status);
      }
    }
  }
})()