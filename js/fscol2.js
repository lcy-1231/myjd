(function(){
  var menuli=$1('.menu')
  var cate_pop=$1('.cate_pop')
  var cate_part=$2('.cate_part')

  // 应该是移到哪个上，哪个就显示出来，其余的隐藏
  $(menuli).on('mouseover','li',function(){
    for(var i=0;i<cate_part.length;i++){
      cate_part[i].style.display='none'
      if($(cate_part[i]).attr('code')===$(this).attr('code')){
        cate_pop.style.display='block'
        cate_part[i].style.display='block'
      }
    }
  })
  $(menuli).on('mouseout','li',function(){
    cate_pop.style.display='none'
  })
})()