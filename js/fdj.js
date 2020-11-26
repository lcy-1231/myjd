
// // 获取元素 需要小图 遮罩层 大图 大图中的图片
// var minBox=document.querySelector('.minBox')
// var mask=document.querySelector('.mask')
// var maxBox=document.querySelector('.maxBox')
// var maxImg=document.querySelector('.maxBox img')

// // 获取选项卡
// //获取小图里的图片
// var minImg=document.querySelector('.minBox img')
// // console.log(minImg);
// var boxsImg=document.querySelectorAll('#box img')
// // console.log(boxsImg);
// //循环   点击选项卡，小图 大图都换成对应的图
// for(var i=0;i<boxsImg.length;i++){
//   //获取当前选项卡的下标
//   boxsImg[i].index=i
//   boxsImg[i].onmouseover=function(){
//     //清空之前选项卡的样式
//     for(var j=0;j<boxsImg.length;j++){
//       boxsImg[j].className='box'
//     }
//     //给当前的选项卡添加样式
//     boxsImg[this.index].className+=' xuan'

//     //点击之后改变小图 将小图里的图片变成选项卡里的图片
//     minImg.src=boxsImg[this.index].src
//     //点击之后改变大图
//     maxImg.src=boxsImg[this.index].src
//   }
// }

// // 鼠标移动 mask跟随移动
// minBox.onmousemove=function(eve){
//   // 要有鼠标事件 获取鼠标的光标位置 进一步获得遮罩层的位置
//   var e=eve||window.event
//   // 计算mask的定位坐标
//   // e.clientX 鼠标的坐标位置
//   // offset(minBox).left 小图盒子离浏览器边框的距离

//   // 求的是遮罩层在小图里面的坐标位置
//   var maskLeft=e.clientX-offset(minBox).left-mask.clientWidth/2
//   var maskTop=e.pageY-offset(minBox).top-mask.clientHeight/2

//   // 求遮罩层在 小图中 的边界范围
//   if(maskLeft<0){
//     maskLeft=0
//   }
//   if(maskLeft>=minBox.clientWidth-mask.clientWidth){
//     maskLeft=minBox.clientWidth-mask.clientWidth
//   }
//   if(maskTop<0){
//     maskTop=0
//   }
//   if(maskTop>=minBox.clientWidth-mask.clientWidth){
//     maskTop=minBox.clientWidth-mask.clientWidth
//   }

//   // 计算出的mask的坐标赋值给mask
//   mask.style.left=maskLeft+'px'
//   mask.style.top=maskTop+'px'

//   // 计算小图中遮罩层和小图的比例
//   // 遮罩层离小图的左边有多远/遮罩层能在小图中移动的距离
//   var scaleX=maskLeft/(minBox.clientWidth-mask.clientWidth)
//   var scaleY=maskTop/(minBox.clientHeight-mask.clientHeight)

//   // 大图也随着比例运动
//   // 大图里面图片移动的距离=比例*图片在大图里能够移动的距离
//   maxImg.style.left=-scaleX*(maxImg.clientWidth-maxBox.clientWidth)+'px'
//   maxImg.style.top=-scaleY*(maxImg.clientHeight-maxBox.clientHeight)+'px'

// }


// minBox.onmouseenter=function(){
//   mask.style.display='block'
//   maxBox.style.display='block'
// }
// minBox.onmouseleave=function(){
//   mask.style.display='none'
//   maxBox.style.display='none'
// }