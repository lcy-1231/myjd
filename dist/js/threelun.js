(function(){
  var newArrivalItem=$2('.newArrival-slider .newArrival-item')

  var slider=$1('.newArrival-slider .slider-wrapper')

  var sliderlist=$1('.newArrival-slider .slider-list')
  var newmsg=$2('.newArrival-item-msg')
  // console.log(newmsg);
  var timer

  var aIndex=0

  var firstA=slider.children[0].cloneNode(true)
  slider.appendChild(firstA)
  var aLen=slider.children.length
  var aWidth=slider.children[0].clientWidth
  // console.log(aWidth);

  autoMove()
  function autoMove(){
    timer=setInterval(() => {
      moveNext()
    }, 3000);
  }

  function moveNext(){
    aIndex++
    if(aIndex>=aLen){
      aIndex=1
      sliderlist.scrollLeft=0
    }
    animate(sliderlist,{'scrollLeft':aIndex*aWidth})
    // console.log(aIndex);
    //去掉上次显示数字的类名
    newmsg[aIndex].className='newArrival-item-msg'
    newArrivalItem[aIndex].className =' slider-item newArrival-item'
    // aIndex++
    if(aIndex>=aLen-2){
      aIndex=0
    }
    newmsg[aIndex+1].className=' newArrival-item-msg opacity1'

    newArrivalItem[aIndex+1].className =' slider-item newArrival-item active1'
  }

})()