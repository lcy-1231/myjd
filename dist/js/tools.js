function $1(selector){
  return document.querySelector(selector)
}
function $2(selector){
  return document.querySelectorAll(selector)
}
// 关键词搜索
function jsonp(options){
  //将options.success变成全局函数
  //options.jsonCallback=mycallback
  window[options.jsonpCallback]=options.success

  //判断options.data的数据类型
  //如果是字符串，直接赋值data变量
  //如果是对象，转成参数序列的字符串
  var data=''
  if(typeof options.data==='string'){
    data=options.data
  }
  if(isObject(options.data)){
    for(var key in options.data){
      data+=key+'='+options.data[key]+'&'
    }
    data=data.substring(0,data.length-1)
  }

  //创建script标签
  var oScript=document.createElement('script')
  //给 src属性赋值(url+接口参数)
  oScript.src=options.url+'?'+options.jsonp+'='+options.jsonpCallback+'&'+data
  //把script插入到文档中
  document.body.appendChild(oScript)

  //script标签加载完成时，删除此标签
  oScript.onload=function(){
    document.body.removeChild(oScript)
  }
}
function isObject(obj){
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}

function ajax(options){
  // data -> 'key=value&key=value'
  // 1.创建数据交互对象
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest() // 非IE5 6
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
  }

  // 判断并格式化参数data
  var data = ''
  // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
  if (isObject(options.data)) {
    // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
    for (var key in options.data) {
      data += key+'='+options.data[key]+'&'
    }
    // data = 'k1=v1&k2=v2&k3=v3&'
    data = data.substring(0,data.length-1)
  }

  if (typeof options.data === 'string') {
    data = options.data
  }

  // 判断请求方式
  if (options.type === 'get') {
    var time = ''
    time = options.cache ? '' : Date.now()
    // 2.打开连接
    xhr.open(options.type,options.url+'?'+data+'&_='+time,true) // 默认true，异步
    // 3.发送请求
    xhr.send(null) // get请求传null
  }
  if (options.type === 'post') {
    // 2.打开连接
    xhr.open(options.type,options.url,true) // 默认true，异步
    // post 请不会有缓存问题

    // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")

    // 3.发送请求
    xhr.send(data) // post请求 要传递的参数在此传
  }
  
  // 4.等待请求/响应状态
  // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
  xhr.onreadystatechange = function (){
    // console.log( xhr.readyState );// 2 3 4
    if (xhr.readyState === 4) {// 请求完成
    // xhr.status 响应状态
      if (xhr.status === 200) {// OK 响应就绪
        // xhr.responseText 响应的数据
        // options.success(xhr.responseText)
        // 支持dataType配置
        if (options.dataType === 'json') {
          var json = JSON.parse(xhr.responseText)
          options.success(json)
        } else if (options.dataType === 'xml') {
          options.success(xhr.responseXML)
        } else {
          options.success(xhr.responseText)
        }
      } else {
        // console.log(xhr.status)
        options.error(xhr.status)
      }
    }
  }
}


function animate(dom,options,callback){
  // 遍历对象属性
  for (var attr in options){
    // 获取元素当前的attr值
    if (attr === 'opacity') {
      // 获取当前元素的透明度*100
      var current = parseInt( getComputedStyle(dom)[attr]*100 )
      var target = options[attr]*100
    } else if (attr.indexOf('scroll') !== -1){
      var current = dom[attr]
      var target = options[attr]
    } else {
      var current = parseInt( getComputedStyle(dom)[attr] )
      var target = options[attr]
    }
    options[attr] = {
      'current': current,
      'target': target
    }
    // 目标数据结构:
    // options = {
    //   'width': {
    //     'current': 100,
    //     'target': 300
    //   },
    //   'height': {
    //     'current': 100,
    //     'target': 300
    //   },
    //   ...
    // }
  }

  clearInterval(dom.timer)
  dom.timer = setInterval(function (){
    // 遍历对象，取出数据
    for (var attr in options){
      var current = options[attr].current
      var target = options[attr].target
      // 持续变化的速度
      var speed = (target - current)/10
      // 浮点数计算会造成结果有偏差，可能造成数据丢失：取整
      // 判断运动方向取整
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

      // 临界值判断：剩余运动量<=每次的运动量
      if ( Math.abs( target - current ) <= Math.abs(speed) ) {
        // 到达终点
        if (attr === 'opacity') {
          dom.style[attr] = target/100 // 立即到达终点
        } else if (attr.indexOf('scroll') !== -1) {
          dom[attr] = target
        } else {
          dom.style[attr] = target + 'px'
        }

        // 删除已运动完成的属性
        delete options[attr]

        for (var attr in options){
          // 还有其他属性没运动完成，提前结束当前程序，不清除计时器
          return false;
        }
        //如果有回调函数，则执行回调函数
        typeof callback === 'function'? callback() : ''
        clearInterval(dom.timer) // 清除计时器
      } else {
        // 未到达终点
        options[attr].current += speed
        if (attr === 'opacity') {
          dom.style[attr] = options[attr].current/100
        } else if (attr.indexOf('scroll') !== -1) {
          dom[attr] = options[attr].current
        } else {
          dom.style[attr] = options[attr].current + 'px'
        }
      }
    }
  },20)
}
//封装时间差函数，获取时间差秒数
function getDifTime(startDate,endDate){
  return (endDate.getTime()-startDate.getTime())/1000
}
//给1-9的数字前面加0处理
function toDB(num){
  //0-9前要加0 
  return num<10? '0'+num :num
}


//获取元素到最外层定位父级的距离
function offset(dom,bool){
  var t=0,l=0
  var borderLeft=dom.clientLeft
  var borderTop=dom.clientTop
  while(dom){
    l+=dom.offsetLeft+dom.clientLeft
    t+=dom.offsetTop+dom.clientTop
    // 每次循环完，让dom元素等于他的定位父级
    dom=dom.offsetParent
  }
  if(bool){
    return {left:l,top:t} //包含自身边框
  }else{
    return {left:l-borderLeft,top:t-borderTop} // 不包含自身边框
  }
}
// 判断数组中是否包含某个值
function has(arr,item){
  for (var i = 0, len = arr.length; i < len; i++){
      if (arr[i] === item) {
          return true;
      }
  }
  return false;
}





