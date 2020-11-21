"use strict";

(function () {
  var menuli = $2('.menu .item');
  var catePop = $1('.cate_pop');

  menuli.onmouseover = function () {
    catePop.style.display = 'block';
    console.log(1111);
  };

  console.log(111);
})();