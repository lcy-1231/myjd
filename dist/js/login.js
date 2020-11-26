"use strict";

var cuo = $1('.cuole');
var ipt1 = $1('.form .item-fore1');
var ipt2 = $1('.form .item-fore2');
var loginname = $1('#loginname');
var nloginowd = $1('#nloginowd');
var loginsubmit = $1('#loginsubmit');
var zh = $('.login-form .login-tab-r');
var qr = $('.login-form .login-tab-l');

zh.onclick = function () {
  this.children[0].className = 'lactive';
  console.log(1111111);
  console.log(this.children[0]);
};

loginsubmit.onclick = function () {
  var us = loginname.value;
  var ps = nloginowd.value;

  if (!us || !ps) {
    cuo.innerHTML = '账号或密码不能为空';
    cuo.style.display = 'block';
    return;
  }

  if (us && ps) {
    cuo.style.display = 'none';
  }

  ajax({
    url: './data/user.php',
    type: 'post',
    dataType: 'json',
    success: function success(json) {
      json.forEach(function (item) {
        if (item.username === us && item.password === ps) {
          window.location = './index.html';
          localStorage.setItem('user', item.username);
          localStorage.setItem('pass', item.password);
        } else {
          cuo.innerHTML = '输入错误，请重新输入';
          cuo.style.display = 'block';
        }
      });
    }
  });
};