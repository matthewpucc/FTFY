(function () {
  var aTags     = document.getElementsByTagName('a'),
  regex         = /^http\:\/\/movies\.netflix\.com\/WiPlayer\?movieid=([\d]+)/,
  stopIt        = function (e) { e.preventDefault(); e.stopPropagation(); },
  i;

  for (i = 0; i < aTags.length; i++) {
    if (regex.test(aTags[i].href)) {
      aTags[i].href         = "http://movies.netflix.com/WiMovie/" + aTags[i].href.match(regex)[1];
      aTags[i].onmousedown  = stopIt;
      aTags[i].onclick      = function (e) { stopIt(e); window.location.href = this.href; };
    }
  }
})();
