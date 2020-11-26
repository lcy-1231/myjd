// 点击我的购物车跳转页面
$('#zhuancar').on('click',function(){
  window.location='./goodscars.html'
})
// console.log($('#settleup-2014'));

var shoppingamount=$1('#shopping-amount')
if(localStorage.getItem('goods')){
  // 总要更新数据，怎么即使更新??????????????????
  var goodsArr=JSON.parse(localStorage.getItem('goods'))
  shoppingamount.innerHTML=goodsArr.length
  // ajax局部刷新

}else{
  shoppingamount.innerHTML=0
}



