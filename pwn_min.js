(function(){for(var c=document.querySelectorAll("h3.r"),b=0;b<c.length;b++){var a=c[b].childNodes[0];a&&(a.attributes&&a.attributes.onmousedown)&&delete a.attributes.onmousedown;a.onmousedown=function(a){a.preventDefault();a.stopPropagation()}}})();