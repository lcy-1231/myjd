"use strict";

(function () {
  var tabHead = $1('.tab-head');
  console.log(tabHead);
  var tabItem = $2('.tab-head .item');
  console.log(tabItem);

  for (var i = 0; i < tabItem.length; i++) {
    tabItem[i].className += '';
  }
})();