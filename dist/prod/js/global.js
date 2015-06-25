window.Modernizr=function(e,t,n){function i(e){g.cssText=e}function o(e,t){return typeof e===t}function r(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var i in e){var o=e[i];if(!r(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,i){for(var r in e){var a=t[e[r]];if(a!==n)return i===!1?e[r]:o(a,"function")?a.bind(i||t):a}return!1}function c(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+C.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?a(r,t):(r=(e+" "+j.join(i+" ")+i).split(" "),s(r,t,n))}var l,u,d,f="2.8.3",p={},h=!0,m=t.documentElement,v="modernizr",y=t.createElement(v),g=y.style,w={}.toString,b=" -webkit- -moz- -o- -ms- ".split(" "),$="Webkit Moz O ms",C=$.split(" "),j=$.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},S={},x=[],A=x.slice,T=function(e,n,i,o){var r,a,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(i,10))for(;i--;)s=t.createElement("div"),s.id=o?o[i]:v+(i+1),l.appendChild(s);return r=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=r,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=c),!!a},N={}.hasOwnProperty;d=o(N,"undefined")||o(N.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=A.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=t.prototype;var r=new o,a=t.apply(r,n.concat(A.call(arguments)));return Object(a)===a?a:r}return t.apply(e,n.concat(A.call(arguments)))};return i}),S.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in m.style&&T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},S.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(E.svg,"clipPath")))};for(var O in S)d(S,O)&&(u=O.toLowerCase(),p[u]=S[O](),x.push((p[u]?"":"no-")+u));return p.addTest=function(e,t){if("object"==typeof e)for(var i in e)d(e,i)&&p.addTest(i,e[i]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(m.className+=" "+(t?"":"no-")+e),p[e]=t}return p},i(""),y=l=null,p._version=f,p._prefixes=b,p._domPrefixes=j,p._cssomPrefixes=C,p.testProp=function(e){return a([e])},p.testAllProps=c,p.testStyles=T,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+x.join(" "):""),p}(this,this.document),function(e,t,n){function i(e){return"[object Function]"==v.call(e)}function o(e){return"string"==typeof e}function r(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=y.shift();g=1,e?e.t?h(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):g=0}function c(e,n,i,o,r,c,l){function u(t){if(!p&&a(d.readyState)&&(w.r=p=1,!g&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){$.removeChild(d)},50);for(var i in x[n])x[n].hasOwnProperty(i)&&x[n][i].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,v=0,w={t:i,s:n,e:r,a:c,x:l};1===x[n]&&(v=1,x[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,v)},y.splice(o,0,w),"img"!=e&&(v||2===x[n]?($.insertBefore(d,b?null:m),h(u,l)):x[n].push(d))}function l(e,t,n,i,r){return g=0,t=t||"j",o(e)?c("c"==t?j:C,e,t,this.i++,n,i,r):(y.splice(this.i++,0,e),1==y.length&&s()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],v={}.toString,y=[],g=0,w="MozAppearance"in p.style,b=w&&!!t.createRange().compareNode,$=b?p:m.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,C=w?"object":p?"script":"img",j=p?"script":C,E=Array.isArray||function(e){return"[object Array]"==v.call(e)},S=[],x={},A={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,i,e=e.split("!"),o=S.length,r=e.pop(),a=e.length,r={url:r,origUrl:r,prefixes:e};for(n=0;a>n;n++)i=e[n].split("="),(t=A[i.shift()])&&(r=t(r,i));for(n=0;o>n;n++)r=S[n](r);return r}function a(e,o,r,a,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=i(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,r,a,s):(x[c.url]?c.noexec=!0:x[c.url]=1,r.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(o)||i(l))&&r.load(function(){u(),o&&o(c.origUrl,s,a),l&&l(c.origUrl,s,a),x[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(i(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[c])),a(e[c],d,t,c,l))}else!n&&p()}var s,c,l=!!e.test,u=e.load||e.both,d=e.callback||r,f=d,p=e.complete||r;n(l?e.yep:e.nope,!!u),u&&n(u)}var c,l,d=this.yepnope.loader;if(o(e))a(e,0,d,0);else if(E(e))for(c=0;c<e.length;c++)l=e[c],o(l)?a(l,0,d,0):E(l)?f(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},f.addPrefix=function(e,t){A[e]=t},f.addFilter=function(e){S.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,i,o,c,l){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in i)p.setAttribute(d,i[d]);n=l?s:n||r,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),c?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,i,o,a,c){var l,o=t.createElement("link"),n=c?s:n||r;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in i)o.setAttribute(l,i[l]);a||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(e){function t(){var t=window.innerHeight,n=document.compatMode;return(n||!e.support.boxModel)&&(t="CSS1Compat"==n?document.documentElement.clientHeight:document.body.clientHeight),t}e(window).scroll(function(){var n=t(),i=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,o=[];e.each(e.cache,function(){this.events&&this.events.inview&&o.push(this.handle.elem)}),o.length&&e(o).each(function(){var t=e(this),o=t.offset().top,r=t.height(),a=t.data("inview")||!1;i>o+r||o>i+n?a&&(t.data("inview",!1),t.trigger("inview",[!1])):o+r>i&&(a||(t.data("inview",!0),t.trigger("inview",[!0])))})}),e(function(){e(window).scroll()})}(jQuery),$(document).ready(function(){var e=$("label.field-label"),t=$(".form-field input");e.each(function(){var e=$(this).text(),t=$(this).siblings("input").val();""!==t?$(this).siblings("input").attr("value",t):$(this).siblings("input").attr("value",e)}),t.addClass("empty"),t.focus(function(){this.value===this.defaultValue&&(this.value="",$(this).addClass("empty")),this.value!==this.defaultValue&&(this.select(),$(this).removeClass("empty"))}),t.blur(function(){""===this.value&&(this.value=this.defaultValue,$(this).addClass("empty"))})}),$(document).ready(function(){$("#decideDiscountAnimation").addClass("in-view"),$("#decideDiscountAnimation, #guestsAnimation, #staffAnimation, #reportAnimation").bind("inview",function(e,t){t===!0?$(this).addClass("in-view"):$(this).removeClass("in-view")})}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()==$(document).height()&&setTimeout(function(){$(".faq").addClass("in-view")},750)});var winHeight=$(window).height();$(window).resize(function(){var e=$(window).height();$(".slide").not("#contactAndFAQ").css({height:e})}),$(document).ready(function(){$(".slide").not("#contactAndFAQ").css({height:winHeight})}),$(function(){$("a[href*=#]:not([href=#])").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})}),$(document).ready(function(){Modernizr.svg||$('img[src$=".svg"]').each(function(){$(this).attr("src",$(this).data("fallback"))})});