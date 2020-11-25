
var cuo = $1('.cuole');
var ipt1 = $1('.form .item-fore1');
var ipt2 = $1('.form .item-fore2');
var loginname = $1('#loginname');
var nloginowd = $1('#nloginowd');
var loginsubmit = $1('#loginsubmit');

loginsubmit.onclick = function () {
  var us = loginname.value;
  var ps = nloginowd.value;

  if (!us || !ps) {
    cuo.innerHTML = '账号或密码不能为空';
    cuo.style.display = 'block';
    // return;
  }
  if( us && ps){
    cuo.style.display = 'none';
  }
  ajax({
    url: './data/user.php',
    type: 'post',
    data: {
      user: us,
      //user是input获取的
      pass: ps,
      //pass是input获取的
      type: 'login'
    },
    dataType: 'json',
    success: function success(json) {
      // console.log(json.msg);
      // console.log(json.err);
      if(json.err=' 0'){
        location.href='./index.html'
      }else{
        cuo.innerHTML='输入错误，请重新输入'
        cuo.style.display='block'
      }
    },
    error: function error(code) {
      alert(json.msg);
    }
  });
  
};