define("#widget/0.8.3/daparser",["$"],function(a,b){function e(a){var b=[];for(var c=0,d=a.length;c<d;c++)b[c]=a[c];return b}function h(a){return a.dataset?a.dataset:d(a).data()}function i(a){var b=a.outerHTML;if(b)return b.indexOf(" data-")!==-1;var c=a.innerHTML;if(c&&c.indexOf(" data-")!==-1)return!0;var d=h(a);for(var e in d)return!0;return!1}function l(){return"daparser-"+k++}var c=b,d=a("$");c.parse=function(a){var b={};if(!i(a))return b;var d=e(a.getElementsByTagName("*"));d.unshift(a);for(var f=0,g=d.length;f<g;f++){var k=d[f],l=h(k),m=k.getAttribute(j);for(var n in l){m||(m=c.stamp(k));var o=l[n],p=b[n]||(b[n]={});p[o]||(p[o]=""),p[o]+=(p[o]?",":"")+"."+m}}return b},c.stamp=function(a){var b=a.getAttribute(j);return b||(b=l(),a.setAttribute(j,b),a.className+=" "+b),b};var f=/^data-/i,g=/-[\w\d_]/,j="data-daparser-cid",k=0});