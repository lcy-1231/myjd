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
  if (options.type.toLowerCase() === 'get') {
    var time = ''
    time = options.cache ? '' : Date.now()
    // 2.打开连接
    xhr.open(options.type,options.url+'?'+data+'&_='+time,true) // 默认true，异步
    // 3.发送请求
    xhr.send(null) // get请求传null
  }
  if (options.type.toLowerCase() === 'post') {
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










