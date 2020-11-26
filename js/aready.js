//如果登录了就可以获取到用户名
if(localStorage.getItem('user')){
  var username=localStorage.getItem('user')
  console.log(username);
  $1('#useralready').innerText=username+'你好！'
  $1('#nouseralready').innerText='欢迎逛京东'
}else{
  return false
}