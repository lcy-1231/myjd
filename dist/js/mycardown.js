// 点击我的购物车跳转页面
// 如果登录了，就能到购物车页面，没登录会提示登录，跳转到登录界面
$('#settleup-2014').on('click',function(){
  if(localStorage.getItem('user')){
    window.location='./goodscars.html'
  }else{
    alert('请登录京东！2s后跳转到登录界面')
    setInterval(() => {
      window.location='./login.html'
    }, 2000);
  }
})


