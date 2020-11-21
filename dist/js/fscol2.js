"use strict";

(function () {
  var imgs = $2('.sliderBannerWrapper .imgmain img');
  var prev = $1('.sliderBannerWrapper .prev');
  var next = $1('.sliderBannerWrapper .next');
  var lis = $2('.sliderBannerWrapper .nums li');
  var showIndex = 0;
  var timer;
  var divs = $2('.sliderRecommendWrapper .threelunbo div');
  var prev2 = $1('.sliderRecommendWrapper .prev');
  var next2 = $1('.sliderRecommendWrapper .next');
  var show = 0;
  var timer2; // 自动播放

  animate(imgs[showIndex], {
    'opacity': 1
  }, function () {
    timer = setInterval(function () {
      moveNext();
    }, 3000);
  }); //three自动播放

  animate(divs[show], {
    'opacity': 1
  }, function () {
    timer2 = setInterval(function () {
      moveNext2();
    }, 5000);
  });

  function moveNext() {
    imgs[showIndex].className = '';
    lis[showIndex].className = '';
    imgs[showIndex].style.opacity = 0;
    showIndex++;

    if (showIndex >= imgs.length) {
      showIndex = 0;
    }

    imgs[showIndex].className = 'show';
    lis[showIndex].className = 'active';
    animate(imgs[showIndex], {
      'opacity': 1
    });
  } // three


  function moveNext2() {
    divs[show].className = '';
    divs[show].style.opacity = 0;
    show++;

    if (show >= divs.length) {
      show = 0;
    }

    divs[show].className = 'show';
    animate(divs[show], {
      'opacity': 1
    });
  }

  function movePrev() {
    imgs[showIndex].className = '';
    lis[showIndex].className = '';
    imgs[showIndex].style.opacity = 0;
    showIndex--;

    if (showIndex < 0) {
      showIndex = imgs.length - 1;
    }

    imgs[showIndex].className = 'show';
    lis[showIndex].className = 'active';
    animate(imgs[showIndex], {
      'opacity': 1
    });
  } // three


  function movePrev2() {
    divs[show].className = '';
    divs[show].style.opacity = 0;
    show--;

    if (show < 0) {
      show = div.length - 1;
    }

    divs[show].className = 'show';
    animate(divs[show], {
      'opacity': 1
    });
  }

  prev.onclick = function () {
    clearInterval(timer);
    clearInterval(imgs[showIndex].timer);
    movePrev();
    timer = setInterval(function () {
      moveNext();
    }, 3000);
  }; // three


  prev2.onclick = function () {
    clearInterval(timer2);
    clearInterval(divs[show].timer);
    movePrev2();
    timer2 = setInterval(function () {
      moveNext2();
    }, 5000);
  };

  next.onclick = function () {
    clearInterval(timer);
    clearInterval(imgs[showIndex].timer);
    moveNext();
    timer = setInterval(function () {
      moveNext();
    }, 3000);
  }; // three


  next2.onclick = function () {
    clearInterval(timer2);
    clearInterval(divs[show].timer);
    moveNext2();
    timer2 = setInterval(function () {
      moveNext2();
    }, 5000);
  };

  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;

    lis[i].onmouseover = function () {
      clearInterval(timer);
      clearInterval(imgs[showIndex].timer);
      imgs[showIndex].className = '';
      lis[showIndex].className = '';
      imgs[showIndex].style.opacity = 0;
      showIndex = this.index;
      imgs[showIndex].className = 'show';
      lis[showIndex].className = 'active';
      animate(imgs[showIndex], {
        'opacity': 1
      });
      timer = setInterval(function () {
        moveNext();
      }, 3000);
    };
  }
})();