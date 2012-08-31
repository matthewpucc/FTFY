(function () {
  var domain = window.location.host,
      searchTerms = '-site:' + domain + ' ["' + domain + '" OR "' + domain.replace(/(.*)\.[^\.]+$/, '$1').replace(/^www\.([^\.]+)/, '$1') + '"] ["~scam"]';
 
  window.open('http://www.google.com/search?q=' + encodeURIComponent(searchTerms));
}());
  