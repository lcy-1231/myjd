(function(){
  var form_bg=$1('.search .form .bg')
  //点击输入框的时候，里面的字体变灰
  var ipt=$1('.search .form .text')
  var list=$1('.list')
  ipt.onfocus=function(){
    form_bg.style.color='#ddd'
    ipt.onkeyup=function(){
      form_bg.innerText=''
      clearInterval(mytimer1)
      list.style.display='block'
      
      jsonp({
        url:'http://suggestion.baidu.com/su',
        data:'wd='+ipt.value,
        jsonp:'cb',
        jsonpCallback:'hehe',
        success:function (json){
          var domStr=''
          json.s.forEach(function(item){
            domStr+='<li>'+item+'</li>'
          })
          list.innerHTML=domStr
        }
      })
    }
  }

  //失去焦点的时候，文字回归原来的颜色
  ipt.onblur=function(){
    form_bg.style.color='#989898'
    //list隐藏
    list.style.display='none'
  }
})()