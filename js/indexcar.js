//如果登录了就可以获取到用户名
if(localStorage.getItem('user')){
  var username=localStorage.getItem('user')
  console.log(username);
  $1('#useralready').innerText=username+'你好！'
  $1('#nouseralready').innerText='欢迎逛京东'
}



// 如果登录了，那么就跳转到我的购物车界面，
var imycar=$1('#imycar')
$(imycar).on('click',function(){
  if(localStorage.getItem('user')){
    window.location='./goodscars.html'
  }else{
    // 如果没登录，就跳入到登录界面
    window.location='./login.html'
  }
})
