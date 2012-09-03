// ==UserScript==
// @name          Open Netflix Movies as more details
// @namespace     https://github.com/matthewpucc
// @version       0.1
// @description   This will rewrite the image links in the default netflix views to open the information page
//                instead of forcing the movie/show to start playing. The makes managing a queue much easier 
// @include       http://*netflix.com/search*
// @exclude       http://movies.netflix.com/WiPlayer*
// @copyright     2012+, Matthewpucc
// ==/UserScript==

(function () {
  var aTags     = document.getElementsByTagName('a'),
  regex         = /^http\:\/\/movies\.netflix\.com\/WiPlayer\?movieid=([\d]+)/,
  stopIt        = function (e) { e.preventDefault(); e.stopPropagation(); },
  i;

  for (i = 0; i < aTags.length; i++) {
    if (regex.test(aTags[i].href)) {
      aTags[i].href         = 'http://movies.netflix.com/WiMovie/' + aTags[i].href.match(regex)[1];
      aTags[i].onmousedown  = stopIt;
      aTags[i].onclick      = function (e) { stopIt(e); window.location.href = this.href; };
    }
  }
})();
