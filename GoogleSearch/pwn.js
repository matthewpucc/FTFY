// ==UserScript==
// @name          Fix google search links
// @namespace     https://github.com/matthewpucc
// @version       0.1
// @description   Prevents google from hijacking clicks and converting it to google tracking. 
//                This will disable the block this site ability.
// @include       https://encrypted.google.com/search*
// @copyright     2012+, Matthewpucc
// ==/UserScript==

(function() {
  var lameness = document.querySelectorAll('h3.r');
  for (var i = 0; i < lameness.length; i++) {
    var a = lameness[i].childNodes[0];

    if (a && a.attributes && a.attributes.onmousedown) {
      delete a.attributes.onmousedown;
    }

    a.onmousedown = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };
  }
})();