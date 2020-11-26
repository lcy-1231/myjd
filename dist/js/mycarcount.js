// 如果能获取数据，把购物车里的小红标里的数字改变
var shoppingamount=$1('#shopping-amount')
if(localStorage.getItem('goods')){
  var goodsArr=JSON.parse(localStorage.getItem('goods'))
  shoppingamount.innerHTML=goodsArr.length

}else{
  shoppingamount.innerHTML=0
}



