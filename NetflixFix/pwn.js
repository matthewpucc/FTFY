// ==UserScript==
// @name          Open Netflix Movies as Detail View
// @namespace     https://github.com/matthewpucc
// @version       0.5
// @updateURL     https://raw.github.com/matthewpucc/FTFY/master/NetflixFix/pwn.js
// @description   This will rewrite the image links in the default netflix views to open the information page
//                instead of forcing the movie/show to start playing. The makes managing a queue much easier 
// @include       http://*netflix.com/search*
// @include       http://*netflix.com/*
// @exclude       http://movies.netflix.com/WiPlayer*
// @copyright     2012+, matthewpucc, Beerware
// ==/UserScript==

/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * matthewpucc wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return
 * ----------------------------------------------------------------------------
 */

(function () {
  var aTags     = document.getElementsByTagName('a'),
  regex         = /^http\:\/\/movies\.netflix\.com\/WiPlayer\?movieid=([\d]+)/,
  playClass     = /(\s|^)playLink(\s|$)/,
  stopIt        = function (e) { e.preventDefault(); e.stopPropagation(); },
  i;

  for (i = 0; i < aTags.length; i++) {
    if (regex.test(aTags[i].href)) {
      aTags[i].href         = 'http://movies.netflix.com/WiMovie/' + aTags[i].href.match(regex)[1];
      aTags[i].className    = aTags[i].className.replace(playClass,' ');
      aTags[i].onmousedown  = stopIt;
      aTags[i].onclick      = function (e) { stopIt(e); window.location.href = this.href; };
    }
  }
})();
