(self.webpackChunk=self.webpackChunk||[]).push([[736],{4080:function(t,n,e){"use strict";var r=e(3992),a=e(1971),s=e.n(a),i=e(6109),o=e.n(i),l=e(90),k=e.n(l),c=e(9363),u=e(866),d=e.n(u),f=e(4377),O=e.n(f),h=e(7557),I=e.n(h),A=e(4008),R=e(2485),L=e(4105),D=e(6342),M=e(6529),j=e(138),z=e(7989),F=e(8553),B=e(2204),N=e(8),H=e(7101),U=e(2142),p=e(7218),W=e.n(p),g=e(9203),q=e.n(g),m=e(6082),V=e.n(m),v=e(9493),X=e.n(v),b=e(8628),Y=e.n(b),y=e(7410),$=e.n(y),G=e(4826),_=e(1256),K=e.n(_),w=e(9118),Q=e.n(w),x=e(8698),Z=e.n(x),T=e(6543),J=e.n(T),S=e(7510),ee=e.n(S),C=e(9113),te=e.n(C),E=e(341),ne=e.n(E),P=e(1095),ie=e.n(P);window.Popper=r.default,window._=s(),window.moment=o(),window.echarts=c,window.postscribe=d(),gsap.registerPlugin(ScrollTrigger)},4125:function(t,n,e){var r={"./af":8328,"./af.js":8328,"./ar":275,"./ar-dz":2253,"./ar-dz.js":2253,"./ar-kw":20,"./ar-kw.js":20,"./ar-ly":9312,"./ar-ly.js":9312,"./ar-ma":8384,"./ar-ma.js":8384,"./ar-ps":6836,"./ar-ps.js":6836,"./ar-sa":9753,"./ar-sa.js":9753,"./ar-tn":8991,"./ar-tn.js":8991,"./ar.js":275,"./az":724,"./az.js":724,"./be":962,"./be.js":962,"./bg":4980,"./bg.js":4980,"./bm":3927,"./bm.js":3927,"./bn":9829,"./bn-bd":676,"./bn-bd.js":676,"./bn.js":9829,"./bo":9244,"./bo.js":9244,"./br":4024,"./br.js":4024,"./bs":977,"./bs.js":977,"./ca":2103,"./ca.js":2103,"./cs":3920,"./cs.js":3920,"./cv":6636,"./cv.js":6636,"./cy":6003,"./cy.js":6003,"./da":1382,"./da.js":1382,"./de":5810,"./de-at":1026,"./de-at.js":1026,"./de-ch":9961,"./de-ch.js":9961,"./de.js":5810,"./dv":5050,"./dv.js":5050,"./el":7565,"./el.js":7565,"./en-au":4057,"./en-au.js":4057,"./en-ca":6871,"./en-ca.js":6871,"./en-gb":2844,"./en-gb.js":2844,"./en-ie":1477,"./en-ie.js":1477,"./en-il":4386,"./en-il.js":4386,"./en-in":8199,"./en-in.js":8199,"./en-nz":3397,"./en-nz.js":3397,"./en-sg":81,"./en-sg.js":81,"./eo":6749,"./eo.js":6749,"./es":908,"./es-do":9735,"./es-do.js":9735,"./es-mx":8857,"./es-mx.js":8857,"./es-us":2767,"./es-us.js":2767,"./es.js":908,"./et":120,"./et.js":120,"./eu":9679,"./eu.js":9679,"./fa":9066,"./fa.js":9066,"./fi":9694,"./fi.js":9694,"./fil":7606,"./fil.js":7606,"./fo":1805,"./fo.js":1805,"./fr":4655,"./fr-ca":7490,"./fr-ca.js":7490,"./fr-ch":4596,"./fr-ch.js":4596,"./fr.js":4655,"./fy":8946,"./fy.js":8946,"./ga":5786,"./ga.js":5786,"./gd":4954,"./gd.js":4954,"./gl":505,"./gl.js":505,"./gom-deva":5339,"./gom-deva.js":5339,"./gom-latn":9526,"./gom-latn.js":9526,"./gu":8663,"./gu.js":8663,"./he":1490,"./he.js":1490,"./hi":6755,"./hi.js":6755,"./hr":5929,"./hr.js":5929,"./hu":3241,"./hu.js":3241,"./hy-am":1323,"./hy-am.js":1323,"./id":5482,"./id.js":5482,"./is":8390,"./is.js":8390,"./it":4627,"./it-ch":5766,"./it-ch.js":5766,"./it.js":4627,"./ja":6121,"./ja.js":6121,"./jv":8045,"./jv.js":8045,"./ka":5837,"./ka.js":5837,"./kk":7936,"./kk.js":7936,"./km":9026,"./km.js":9026,"./kn":9012,"./kn.js":9012,"./ko":4149,"./ko.js":4149,"./ku":2463,"./ku-kmr":5037,"./ku-kmr.js":5037,"./ku.js":2463,"./ky":8964,"./ky.js":8964,"./lb":4990,"./lb.js":4990,"./lo":4848,"./lo.js":4848,"./lt":2024,"./lt.js":2024,"./lv":9128,"./lv.js":9128,"./me":2407,"./me.js":2407,"./mi":3746,"./mi.js":3746,"./mk":6155,"./mk.js":6155,"./ml":1231,"./ml.js":1231,"./mn":4645,"./mn.js":4645,"./mr":1586,"./mr.js":1586,"./ms":3644,"./ms-my":8835,"./ms-my.js":8835,"./ms.js":3644,"./mt":8915,"./mt.js":8915,"./my":2666,"./my.js":2666,"./nb":7738,"./nb.js":7738,"./ne":841,"./ne.js":841,"./nl":8893,"./nl-be":8002,"./nl-be.js":8002,"./nl.js":8893,"./nn":7801,"./nn.js":7801,"./oc-lnc":1630,"./oc-lnc.js":1630,"./pa-in":8404,"./pa-in.js":8404,"./pl":4265,"./pl.js":4265,"./pt":8908,"./pt-br":4243,"./pt-br.js":4243,"./pt.js":8908,"./ro":8726,"./ro.js":8726,"./ru":6021,"./ru.js":6021,"./sd":2597,"./sd.js":2597,"./se":8344,"./se.js":8344,"./si":6907,"./si.js":6907,"./sk":9457,"./sk.js":9457,"./sl":5730,"./sl.js":5730,"./sq":1574,"./sq.js":1574,"./sr":8990,"./sr-cyrl":4389,"./sr-cyrl.js":4389,"./sr.js":8990,"./ss":9971,"./ss.js":9971,"./sv":5042,"./sv.js":5042,"./sw":4383,"./sw.js":4383,"./ta":4577,"./ta.js":4577,"./te":6178,"./te.js":6178,"./tet":3772,"./tet.js":3772,"./tg":1051,"./tg.js":1051,"./th":5366,"./th.js":5366,"./tk":5025,"./tk.js":5025,"./tl-ph":162,"./tl-ph.js":162,"./tlh":1838,"./tlh.js":1838,"./tr":486,"./tr.js":486,"./tzl":3405,"./tzl.js":3405,"./tzm":1942,"./tzm-latn":5785,"./tzm-latn.js":5785,"./tzm.js":1942,"./ug-cn":7277,"./ug-cn.js":7277,"./uk":329,"./uk.js":329,"./ur":1700,"./ur.js":1700,"./uz":6104,"./uz-latn":5429,"./uz-latn.js":5429,"./uz.js":6104,"./vi":791,"./vi.js":791,"./x-pseudo":7929,"./x-pseudo.js":7929,"./yo":7574,"./yo.js":7574,"./zh-cn":189,"./zh-cn.js":189,"./zh-hk":8954,"./zh-hk.js":8954,"./zh-mo":4285,"./zh-mo.js":4285,"./zh-tw":8274,"./zh-tw.js":8274};function a(i){var o=s(i);return e(o)}function s(i){if(!e.o(r,i)){var o=new Error("Cannot find module '"+i+"'");throw o.code="MODULE_NOT_FOUND",o}return r[i]}a.keys=function(){return Object.keys(r)},a.resolve=s,t.exports=a,a.id=4125},2906:function(t){t.exports='!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||(0,d.default)("[data-aos]",O),w)};e.exports={init:z,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\\s+|\\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\\s+|\\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=new r(o);i=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i,u=/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});'},6563:function(t){t.exports=`/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT \xA9 Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});`},1282:function(t){t.exports=`/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return Ce||"undefined"!=typeof window&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce}function z(e,t){return~Le.indexOf(e)&&Le[Le.indexOf(e)+1][t]}function A(e){return!!~t.indexOf(e)}function B(e,t,r,n,o){return e.addEventListener(t,r,{passive:!1!==n,capture:!!o})}function C(e,t,r,n){return e.removeEventListener(t,r,!!n)}function F(){return De&&De.isPressed||Ie.cache++}function G(r,n){function dd(e){if(e||0===e){o&&(Se.history.scrollRestoration="manual");var t=De&&De.isPressed;e=dd.v=Math.round(e)||(De&&De.iOS?1:0),r(e),dd.cacheID=Ie.cache,t&&i("ss",e)}else(n||Ie.cache!==dd.cacheID||i("ref"))&&(dd.cacheID=Ie.cache,dd.v=r());return dd.v+dd.offset}return dd.offset=0,r&&dd}function J(e,t){return(t&&t._ctx&&t._ctx.selector||Ce.utils.toArray)(e)[0]||("string"==typeof e&&!1!==Ce.config().nullTargetWarn?console.warn("Element not found:",e):null)}function K(t,e){var r=e.s,n=e.sc;A(t)&&(t=ke.scrollingElement||Pe);var o=Ie.indexOf(t),i=n===Fe.sc?1:2;~o||(o=Ie.push(t)-1),Ie[o+i]||B(t,"scroll",F);var a=Ie[o+i],s=a||(Ie[o+i]=G(z(t,r),!0)||(A(t)?n:G(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===Ce.getProperty(t,"scrollBehavior")),s}function L(e,t,o){function Cd(e,t){var r=ze();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=ze(),l=s,n=t||50,c=Math.max(500,3*n);return{update:Cd,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=ze();return!e&&0!==e||e===i||Cd(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function M(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function N(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function O(){(Ae=Ce.core.globals().ScrollTrigger)&&Ae.core&&function _integrate(){var e=Ae.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,Ie),n.push.apply(n,Le),Ie=t,Le=n,i=function _bridge(e,t){return r[e](t)}}()}function P(e){return Ce=e||r(),!Te&&Ce&&"undefined"!=typeof document&&document.body&&(Se=window,Pe=(ke=document).documentElement,Me=ke.body,t=[Se,ke,Pe,Me],Ce.utils.clamp,Be=Ce.core.context||function(){},Oe="onpointerenter"in Me?"pointer":"mouse",Ee=k.isTouch=Se.matchMedia&&Se.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Se||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,Re=k.eventTypes=("ontouchstart"in Pe?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pe?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),O(),Te=1),Te}var Ce,Te,Se,ke,Pe,Me,Ee,Oe,Ae,t,De,Re,Be,o=1,qe=[],Ie=[],Le=[],ze=Date.now,i=function _bridge(e,t){return t},n="scrollLeft",a="scrollTop",Ye={s:n,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G(function(e){return arguments.length?Se.scrollTo(e,Fe.sc()):Se.pageXOffset||ke[n]||Pe[n]||Me[n]||0})},Fe={s:a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ye,sc:G(function(e){return arguments.length?Se.scrollTo(Ye.sc(),e):Se.pageYOffset||ke[a]||Pe[a]||Me[a]||0})};Ye.op=Fe,Ie.cache=0;var k=(Observer.prototype.init=function init(e){Te||P(Ce)||console.warn("Please gsap.registerPlugin(Observer)"),Ae||O();var o=e.tolerance,a=e.dragMinimum,t=e.type,i=e.target,r=e.lineHeight,n=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,d=e.event,p=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,_=e.onChangeX,T=e.onChangeY,S=e.onChange,k=e.onToggleX,E=e.onToggleY,D=e.onHover,R=e.onHoverEnd,q=e.onMove,I=e.ignoreCheck,z=e.isNormalizer,Y=e.onGestureStart,H=e.onGestureEnd,X=e.onWheel,W=e.onEnable,V=e.onDisable,U=e.onClick,j=e.scrollSpeed,G=e.capture,Q=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function cf(){return xe=ze()}function df(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&he&&"touch"!==e.pointerType||I&&I(e,t)}function ff(){var e=se.deltaX=N(me),t=se.deltaY=N(ye),r=Math.abs(e)>=o,n=Math.abs(t)>=o;S&&(r||n)&&S(se,e,t,me,ye),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),_&&_(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,me[0]=me[1]=me[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),T&&T(se),E&&se.deltaY<0!=ce<0&&E(se),ce=se.deltaY,ye[0]=ye[1]=ye[2]=0),(ne||re)&&(q&&q(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&$&&$(se),oe&&(X(se),oe=!1),ee=0}function gf(e,t,r){me[r]+=e,ye[r]+=t,se._vx.update(e),se._vy.update(t),n?ee=ee||requestAnimationFrame(ff):ff()}function hf(e,t){Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(me[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(ye[2]+=t,se._vy.update(t,!0)),n?ee=ee||requestAnimationFrame(ff):ff()}function jf(e){if(!df(e,1)){var t=(e=M(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),hf(n,o),i||p&&p(se))}}function mf(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&Y(e,se.isDragging)}function nf(){return(se.isGesturing=!1)||H(se)}function of(e){if(!df(e)){var t=fe(),r=de();gf((t-pe)*j,(r-ge)*j,1),pe=t,ge=r,l&&te.restart(!0)}}function pf(e){if(!df(e)){e=M(e,s),X&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Se.innerHeight:1)*f;gf(e.deltaX*t,e.deltaY*t,0),l&&!z&&te.restart(!0)}}function qf(e){if(!df(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,l&&te.restart(!0),(n||o)&&hf(n,o)}}function rf(e){se.event=e,D(se)}function sf(e){se.event=e,R(se)}function tf(e){return df(e)||M(e,s)&&U(se)}this.target=i=J(i)||Pe,this.vars=e,u=u&&Ce.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,j=j||1,t=t||"wheel,touch,pointer",n=!1!==n,r=r||parseFloat(Se.getComputedStyle(Me).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=e.passive||!s,fe=K(i,Ye),de=K(i,Fe),pe=fe(),ge=de(),he=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===Re[0],ve=A(i),be=i.ownerDocument||ke,me=[0,0,0],ye=[0,0,0],xe=0,we=se.onPress=function(e){df(e,1)||e&&e.button||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=M(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),B(z?i:be,Re[1],jf,ue,!0),se.deltaX=se.deltaY=0,v&&v(se))},_e=se.onRelease=function(t){if(!df(t,1)){C(z?i:be,Re[1],jf,!0);var e=!isNaN(se.y-se.startY),r=se.isDragging,n=r&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),o=M(t);!n&&e&&(se._vx.reset(),se._vy.reset(),s&&Q&&Ce.delayedCall(.08,function(){if(300<ze()-xe&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(be.createEvent){var e=be.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Se,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&r&&!z&&te.restart(!0),g&&r&&g(se),b&&b(se,n)}};te=se._dc=Ce.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=L(0,50,!0),se._vy=L(0,50,!0),se.scrollX=fe,se.scrollY=de,se.isDragging=se.isGesturing=se.isPressed=!1,Be(this),se.enable=function(e){return se.isEnabled||(B(ve?be:i,"scroll",F),0<=t.indexOf("scroll")&&B(ve?be:i,"scroll",of,ue,G),0<=t.indexOf("wheel")&&B(i,"wheel",pf,ue,G),(0<=t.indexOf("touch")&&Ee||0<=t.indexOf("pointer"))&&(B(i,Re[0],we,ue,G),B(be,Re[2],_e),B(be,Re[3],_e),Q&&B(i,"click",cf,!0,!0),U&&B(i,"click",tf),Y&&B(be,"gesturestart",mf),H&&B(be,"gestureend",nf),D&&B(i,Oe+"enter",rf),R&&B(i,Oe+"leave",sf),q&&B(i,Oe+"move",qf)),se.isEnabled=!0,e&&e.type&&we(e),W&&W(se)),se},se.disable=function(){se.isEnabled&&(qe.filter(function(e){return e!==se&&A(e.target)}).length||C(ve?be:i,"scroll",F),se.isPressed&&(se._vx.reset(),se._vy.reset(),C(z?i:be,Re[1],jf,!0)),C(ve?be:i,"scroll",of,G),C(i,"wheel",pf,G),C(i,Re[0],we,G),C(be,Re[2],_e),C(be,Re[3],_e),C(i,"click",cf,!0),C(i,"click",tf),C(be,"gesturestart",mf),C(be,"gestureend",nf),C(i,Oe+"enter",rf),C(i,Oe+"leave",sf),C(i,Oe+"move",qf),se.isEnabled=se.isPressed=se.isDragging=!1,V&&V(se))},se.kill=se.revert=function(){se.disable();var e=qe.indexOf(se);0<=e&&qe.splice(e,1),De===se&&(De=0)},qe.push(se),z&&A(i)&&(De=se),se.enable(d)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}k.version="3.12.5",k.create=function(e){return new k(e)},k.register=P,k.getAll=function(){return qe.slice()},k.getById=function(t){return qe.filter(function(e){return e.vars.id===t})[0]},r()&&Ce.registerPlugin(k);function Ca(e,t,r){var n=ct(e)&&("clamp("===e.substr(0,6)||-1<e.indexOf("max"));return(r["_"+t+"Clamp"]=n)?e.substr(6,e.length-7):e}function Da(e,t){return!t||ct(e)&&"clamp("===e.substr(0,6)?e:"clamp("+e+")"}function Fa(){return Ge=1}function Ga(){return Ge=0}function Ha(e){return e}function Ia(e){return Math.round(1e5*e)/1e5||0}function Ja(){return"undefined"!=typeof window}function Ka(){return He||Ja()&&(He=window.gsap)&&He.registerPlugin&&He}function La(e){return!!~l.indexOf(e)}function Ma(e){return("Height"===e?T:Ne["inner"+e])||Je["client"+e]||We["client"+e]}function Na(e){return z(e,"getBoundingClientRect")||(La(e)?function(){return Ot.width=Ne.innerWidth,Ot.height=T,Ot}:function(){return wt(e)})}function Qa(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return Math.max(0,(r="scroll"+n)&&(i=z(e,r))?i()-Na(e)()[o]:La(e)?(Je[r]||We[r])-Ma(n):e[r]-e["offset"+n])}function Ra(e,t){for(var r=0;r<g.length;r+=3)t&&!~t.indexOf(g[r+1])||e(g[r],g[r+1],g[r+2])}function Ta(e){return"function"==typeof e}function Ua(e){return"number"==typeof e}function Va(e){return"object"==typeof e}function Wa(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Xa(e,t){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e)}):t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function mb(e){return Ne.getComputedStyle(e)}function ob(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function qb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function rb(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function tb(o){var i=He.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function vb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function wb(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function xb(e,t,r,n){return e.removeEventListener(t,r,!!n)}function yb(e,t,r){(r=r&&r.wheelHandler)&&(e(t,"wheel",r),e(t,"touchmove",r))}function Cb(e,t){if(ct(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in H?H[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Db(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,d=o.fontWeight,p=Xe.createElement("div"),g=La(r)||"fixed"===z(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?We:r,b=-1!==e.indexOf("start"),m=b?l:c,y="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(y+=(n===Fe?q:I)+":"+(i+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],X(p,0,n,b),p}function Ib(){return 34<at()-st&&(D=D||requestAnimationFrame(Z))}function Jb(){v&&v.isPressed&&!(v.startX>We.clientWidth)||(Ie.cache++,v?D=D||requestAnimationFrame(Z):Z(),st||U("scrollStart"),st=at())}function Kb(){y=Ne.innerWidth,m=Ne.innerHeight}function Lb(){Ie.cache++,je||h||Xe.fullscreenElement||Xe.webkitFullscreenElement||b&&y===Ne.innerWidth&&!(Math.abs(Ne.innerHeight-m)>.25*Ne.innerHeight)||c.restart(!0)}function Ob(){return xb(ne,"scrollEnd",Ob)||Pt(!0)}function Rb(e){for(var t=0;t<j.length;t+=5)(!e||j[t+4]&&j[t+4].query===e)&&(j[t].style.cssText=j[t+1],j[t].getBBox&&j[t].setAttribute("transform",j[t+2]||""),j[t+3].uncache=1)}function Sb(e,t){var r;for(Qe=0;Qe<Tt.length;Qe++)!(r=Tt[Qe])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));S=!0,t&&Rb(t),t||U("revert")}function Tb(e,t){Ie.cache++,!t&&rt||Ie.forEach(function(e){return Ta(e)&&e.cacheID++&&(e.rec=0)}),ct(e)&&(Ne.history.scrollRestoration=w=e)}function Yb(){We.appendChild(_),T=!v&&_.offsetHeight||Ne.innerHeight,We.removeChild(_)}function Zb(t){return Ve(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})}function gc(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=$.length,a=t.style,s=e.style;i--;)a[o=$[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[I]=s[q]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ft]=qb(e,Ye)+xt,a[dt]=qb(e,Fe)+xt,a[bt]=s[mt]=s.top=s.left="0",Et(n),s[ft]=s.maxWidth=r[ft],s[dt]=s.maxHeight=r[dt],s[bt]=r[bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function jc(e){for(var t=ee.length,r=e.style,n=[],o=0;o<t;o++)n.push(ee[o],r[ee[o]]);return n.t=e,n}function mc(e,t,r,n,o,i,a,s,l,c,u,f,d,p){Ta(e)&&(e=e(s)),ct(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Cb("0"+e.substr(3),r):0));var g,h,v,b=d?d.time():0;if(d&&d.seek(0),isNaN(e)||(e=+e),Ua(e))d&&(e=He.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&X(a,r,n,!0);else{Ta(t)&&(t=t(s));var m,y,x,w,_=(e||"0").split(" ");v=J(t,s)||We,(m=wt(v)||{})&&(m.left||m.top)||"none"!==mb(v).display||(w=v.style.display,v.style.display="block",m=wt(v),w?v.style.display=w:v.style.removeProperty("display")),y=Cb(_[0],m[n.d]),x=Cb(_[1]||"0",r),e=m[n.p]-l[n.p]-c+y+o-x,a&&X(a,x,n,r-x<20||a._isStart&&20<x),r-=r-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),i){var C=e+r,T=i._isStart;g="scroll"+n.d2,X(i,C,n,T&&20<C||!T&&(u?Math.max(We[g],Je[g]):i.parentNode[g])<=C+1),u&&(l=wt(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+xt))}return d&&v&&(g=wt(v),d.seek(f),h=wt(v),d._caScrollDist=g[n.p]-h[n.p],e=e/d._caScrollDist*f),d&&d.seek(b),d?e:Math.round(e)}function oc(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===We){for(o in e._stOrig=a.cssText,i=mb(e))+o||re.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}}function pc(r,e,n){var o=e,i=o;return function(e){var t=Math.round(r());return t!==o&&t!==i&&3<Math.abs(t-o)&&3<Math.abs(t-i)&&(e=t,n&&n()),i=o,o=e}}function qc(e,t,r){var n={};n[t.p]="+="+r,He.set(e,n)}function rc(c,e){function Ck(e,t,r,n,o){var i=Ck.tween,a=t.onComplete,s={};r=r||u();var l=pc(u,r,function(){i.kill(),Ck.tween=0});return o=n&&o||0,n=n||e-r,i&&i.kill(),t[f]=e,t.inherit=!1,(t.modifiers=s)[f]=function(){return l(r+n*i.ratio+o*i.ratio*i.ratio)},t.onUpdate=function(){Ie.cache++,Ck.tween&&Z()},t.onComplete=function(){Ck.tween=0,a&&a.call(i)},i=Ck.tween=He.to(c,t)}var u=K(c,e),f="_scroll"+e.p2;return(c[f]=u).wheelHandler=function(){return Ck.tween&&Ck.tween.kill()&&(Ck.tween=0)},wb(c,"wheel",u.wheelHandler),ne.isTouch&&wb(c,"touchmove",u.wheelHandler),Ck}var He,s,Ne,Xe,Je,We,l,c,Ve,Ue,Ke,u,je,Ge,f,Qe,d,p,g,Ze,$e,h,v,b,m,y,E,x,w,_,T,S,et,tt,D,rt,nt,ot,it=1,at=Date.now,R=at(),st=0,lt=0,ct=function _isString(e){return"string"==typeof e},ut=Math.abs,q="right",I="bottom",ft="width",dt="height",pt="Right",gt="Left",ht="Top",vt="Bottom",bt="padding",mt="margin",yt="Width",Y="Height",xt="px",wt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==mb(e)[f]&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},_t={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ct={toggleActions:"play",anticipatePin:0},H={top:0,left:0,center:.5,bottom:1,right:1},X=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+yt]=1,o["border"+a+yt]=0,o[r.p]=t+"px",He.set(e,o)},Tt=[],St={},W={},V=[],U=function _dispatch(e){return W[e]&&W[e].map(function(e){return e()})||V},j=[],kt=0,Pt=function _refreshAll(e,t){if(!st||e||S){Yb(),rt=ne.isRefreshing=!0,Ie.forEach(function(e){return Ta(e)&&++e.cacheID&&(e.rec=e())});var r=U("refreshInit");Ze&&ne.sort(),t||Sb(),Ie.forEach(function(e){Ta(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),Tt.slice(0).forEach(function(e){return e.refresh()}),S=!1,Tt.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?"offsetWidth":"offsetHeight",r=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-r),e.refresh()}}),et=1,Zb(!0),Tt.forEach(function(e){var t=Qa(e.scroller,e._dir),r="max"===e.vars.end||e._endClamp&&e.end>t,n=e._startClamp&&e.start>=t;(r||n)&&e.setPositions(n?t-1:e.start,r?Math.max(n?t:e.start+1,t):e.end,!0)}),Zb(!1),et=0,r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ie.forEach(function(e){Ta(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Tb(w,1),c.pause(),kt++,Z(rt=2),Tt.forEach(function(e){return Ta(e.vars.onRefresh)&&e.vars.onRefresh(e)}),rt=ne.isRefreshing=!1,U("refresh")}else wb(ne,"scrollEnd",Ob)},Q=0,Mt=1,Z=function _updateAll(e){if(2===e||!rt&&!S){ne.isUpdating=!0,ot&&ot.update(0);var t=Tt.length,r=at(),n=50<=r-R,o=t&&Tt[0].scroll();if(Mt=o<Q?-1:1,rt||(Q=o),n&&(st&&!Ge&&200<r-st&&(st=0,U("scrollEnd")),Ke=R,R=r),Mt<0){for(Qe=t;0<Qe--;)Tt[Qe]&&Tt[Qe].update(0,n);Mt=1}else for(Qe=0;Qe<t;Qe++)Tt[Qe]&&Tt[Qe].update(0,n);ne.isUpdating=!1}D=0},$=["left","top",I,q,mt+vt,mt+pt,mt+ht,mt+gt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ee=$.concat([ft,dt,"boxSizing","max"+yt,"max"+Y,"position",mt,bt,bt+ht,bt+pt,bt+vt,bt+gt]),te=/([A-Z])/g,Et=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(te,"-$1").toLowerCase())}},Ot={left:0,top:0},re=/(webkit|moz|length|cssText|inset)/i,ne=(ScrollTrigger.prototype.init=function init(E,O){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),lt){var A,n,p,D,R,B,q,I,L,Y,F,e,H,N,X,W,V,U,t,j,b,G,Q,m,Z,y,$,x,r,w,_,ee,o,g,te,re,ne,C,i,T=(E=ob(ct(E)||Ua(E)||E.nodeType?{trigger:E}:E,Ct)).onUpdate,S=E.toggleClass,a=E.id,k=E.onToggle,oe=E.onRefresh,P=E.scrub,ie=E.trigger,ae=E.pin,se=E.pinSpacing,le=E.invalidateOnRefresh,M=E.anticipatePin,s=E.onScrubComplete,h=E.onSnapComplete,ce=E.once,ue=E.snap,fe=E.pinReparent,l=E.pinSpacer,de=E.containerAnimation,pe=E.fastScrollEnd,ge=E.preventOverlaps,he=E.horizontal||E.containerAnimation&&!1!==E.horizontal?Ye:Fe,ve=!P&&0!==P,be=J(E.scroller||Ne),c=He.core.getCache(be),me=La(be),ye="fixed"===("pinType"in E?E.pinType:z(be,"pinType")||me&&"fixed"),xe=[E.onEnter,E.onLeave,E.onEnterBack,E.onLeaveBack],we=ve&&E.toggleActions.split(" "),_e="markers"in E?E.markers:Ct.markers,Ce=me?0:parseFloat(mb(be)["border"+he.p2+yt])||0,Te=this,Se=E.onRefreshInit&&function(){return E.onRefreshInit(Te)},ke=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=z(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Ma(o):e["client"+o])||0}}(be,me,he),Pe=function _getOffsetsFunc(e,t){return!t||~Le.indexOf(e)?Na(e):function(){return Ot}}(be,me),Me=0,Ee=0,Oe=0,Ae=K(be,he);if(Te._startClamp=Te._endClamp=!1,Te._dir=he,M*=45,Te.scroller=be,Te.scroll=de?de.time.bind(de):Ae,D=Ae(),Te.vars=E,O=O||E.animation,"refreshPriority"in E&&(Ze=1,-9999===E.refreshPriority&&(ot=Te)),c.tweenScroll=c.tweenScroll||{top:rc(be,Fe),left:rc(be,Ye)},Te.tweenTo=A=c.tweenScroll[he.p],Te.scrubDuration=function(e){(o=Ua(e)&&e)?ee?ee.duration(e):ee=He.to(O,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:o,paused:!0,onComplete:function onComplete(){return s&&s(Te)}}):(ee&&ee.progress(1).kill(),ee=0)},O&&(O.vars.lazy=!1,O._initted&&!Te.isReverted||!1!==O.vars.immediateRender&&!1!==E.immediateRender&&O.duration()&&O.render(0,!0,!0),Te.animation=O.pause(),(O.scrollTrigger=Te).scrubDuration(P),w=0,a=a||O.vars.id),ue&&(Va(ue)&&!ue.push||(ue={snapTo:ue}),"scrollBehavior"in We.style&&He.set(me?[We,Je]:be,{scrollBehavior:"auto"}),Ie.forEach(function(e){return Ta(e)&&e.target===(me?Xe.scrollingElement||Je:be)&&(e.smooth=!1)}),p=Ta(ue.snapTo)?ue.snapTo:"labels"===ue.snapTo?function _getClosestLabel(t){return function(e){return He.utils.snap(rb(t),e)}}(O):"labelsDirectional"===ue.snapTo?function _getLabelAtDirection(r){return function(e,t){return tb(rb(r))(e,t.direction)}}(O):!1!==ue.directional?function(e,t){return tb(ue.snapTo)(e,at()-Ee<500?0:t.direction)}:He.utils.snap(ue.snapTo),g=ue.duration||{min:.1,max:2},g=Va(g)?Ue(g.min,g.max):Ue(g,g),te=He.delayedCall(ue.delay||o/2||.1,function(){var e=Ae(),t=at()-Ee<500,r=A.tween;if(!(t||Math.abs(Te.getVelocity())<10)||r||Ge||Me===e)Te.isActive&&Me!==e&&te.restart(!0);else{var n,o,i=(e-B)/N,a=O&&!ve?O.totalProgress():i,s=t?0:(a-_)/(at()-Ke)*1e3||0,l=He.utils.clamp(-i,1-i,ut(s/2)*s/.185),c=i+(!1===ue.inertia?0:l),u=ue.onStart,f=ue.onInterrupt,d=ue.onComplete;if(n=p(c,Te),Ua(n)||(n=c),o=Math.round(B+n*N),e<=q&&B<=e&&o!==e){if(r&&!r._initted&&r.data<=ut(o-e))return;!1===ue.inertia&&(l=n-i),A(o,{duration:g(ut(.185*Math.max(ut(c-a),ut(n-a))/s/.05||0)),ease:ue.ease||"power3",data:ut(o-e),onInterrupt:function onInterrupt(){return te.restart(!0)&&f&&f(Te)},onComplete:function onComplete(){Te.update(),Me=Ae(),O&&(ee?ee.resetTo("totalProgress",n,O._tTime/O._tDur):O.progress(n)),w=_=O&&!ve?O.totalProgress():Te.progress,h&&h(Te),d&&d(Te)}},e,l*N,o-e-l*N),u&&u(Te,A.tween)}}}).pause()),a&&(St[a]=Te),i=(i=(ie=Te.trigger=J(ie||!0!==ae&&ae))&&ie._gsap&&ie._gsap.stRevert)&&i(Te),ae=!0===ae?ie:J(ae),ct(S)&&(S={targets:ie,className:S}),ae&&(!1===se||se===mt||(se=!(!se&&ae.parentNode&&ae.parentNode.style&&"flex"===mb(ae.parentNode).display)&&bt),Te.pin=ae,(n=He.core.getCache(ae)).spacer?X=n.pinState:(l&&((l=J(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=jc(l))),n.spacer=U=l||Xe.createElement("div"),U.classList.add("pin-spacer"),a&&U.classList.add("pin-spacer-"+a),n.pinState=X=jc(ae)),!1!==E.force3D&&He.set(ae,{force3D:!0}),Te.spacer=U=n.spacer,r=mb(ae),m=r[se+he.os2],j=He.getProperty(ae),b=He.quickSetter(ae,he.a,xt),gc(ae,U,r),V=jc(ae)),_e){e=Va(_e)?ob(_e,_t):_t,Y=Db("scroller-start",a,be,he,e,0),F=Db("scroller-end",a,be,he,e,0,Y),t=Y["offset"+he.op.d2];var u=J(z(be,"content")||be);I=this.markerStart=Db("start",a,u,he,e,t,0,de),L=this.markerEnd=Db("end",a,u,he,e,t,0,de),de&&(C=He.quickSetter([I,L],he.a,xt)),ye||Le.length&&!0===z(be,"fixedMarkers")||(function _makePositionable(e){var t=mb(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(me?We:be),He.set([Y,F],{force3D:!0}),y=He.quickSetter(Y,he.a,xt),x=He.quickSetter(F,he.a,xt))}if(de){var f=de.vars.onUpdate,d=de.vars.onUpdateParams;de.eventCallback("onUpdate",function(){Te.update(0,0,1),f&&f.apply(de,d||[])})}if(Te.previous=function(){return Tt[Tt.indexOf(Te)-1]},Te.next=function(){return Tt[Tt.indexOf(Te)+1]},Te.revert=function(e,t){if(!t)return Te.kill(!0);var r=!1!==e||!Te.enabled,n=je;r!==Te.isReverted&&(r&&(re=Math.max(Ae(),Te.scroll.rec||0),Oe=Te.progress,ne=O&&O.progress()),I&&[I,L,Y,F].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(je=Te).update(r),!ae||fe&&Te.isActive||(r?function _swapPinOut(e,t,r){Et(r);var n=e._gsap;if(n.spacerIsNative)Et(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(ae,U,X):gc(ae,U,mb(ae),Z)),r||Te.update(r),je=n,Te.isReverted=r)},Te.refresh=function(e,t,r,n){if(!je&&Te.enabled||t)if(ae&&e&&st)wb(ScrollTrigger,"scrollEnd",Ob);else{!rt&&Se&&Se(Te),je=Te,A.tween&&!r&&(A.tween.kill(),A.tween=0),ee&&ee.pause(),le&&O&&O.revert({kill:!1}).invalidate(),Te.isReverted||Te.revert(!0,!0),Te._subPinOffset=!1;var o,i,a,s,l,c,u,f,d,p,g,h,v,b=ke(),m=Pe(),y=de?de.duration():Qa(be,he),x=N<=.01,w=0,_=n||0,C=Va(r)?r.end:E.end,T=E.endTrigger||ie,S=Va(r)?r.start:E.start||(0!==E.start&&ie?ae?"0 0":"0 100%":0),k=Te.pinnedContainer=E.pinnedContainer&&J(E.pinnedContainer,Te),P=ie&&Math.max(0,Tt.indexOf(Te))||0,M=P;for(_e&&Va(r)&&(h=He.getProperty(Y,he.p),v=He.getProperty(F,he.p));M--;)(c=Tt[M]).end||c.refresh(0,1)||(je=Te),!(u=c.pin)||u!==ie&&u!==ae&&u!==k||c.isReverted||((p=p||[]).unshift(c),c.revert(!0,!0)),c!==Tt[M]&&(P--,M--);for(Ta(S)&&(S=S(Te)),S=Ca(S,"start",Te),B=mc(S,ie,b,he,Ae(),I,Y,Te,m,Ce,ye,y,de,Te._startClamp&&"_startClamp")||(ae?-.001:0),Ta(C)&&(C=C(Te)),ct(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(ct(S)?S.split(" ")[0]:"")+C:(w=Cb(C.substr(2),b),C=ct(S)?S:(de?He.utils.mapRange(0,de.duration(),de.scrollTrigger.start,de.scrollTrigger.end,B):B)+w,T=ie)),C=Ca(C,"end",Te),q=Math.max(B,mc(C||(T?"100% 0":y),T,b,he,Ae()+w,L,F,Te,m,Ce,ye,y,de,Te._endClamp&&"_endClamp"))||-.001,w=0,M=P;M--;)(u=(c=Tt[M]).pin)&&c.start-c._pinPush<=B&&!de&&0<c.end&&(o=c.end-(Te._startClamp?Math.max(0,c.start):c.start),(u===ie&&c.start-c._pinPush<B||u===k)&&isNaN(S)&&(w+=o*(1-c.progress)),u===ae&&(_+=o));if(B+=w,q+=w,Te._startClamp&&(Te._startClamp+=w),Te._endClamp&&!rt&&(Te._endClamp=q||-.001,q=Math.min(q,Qa(be,he))),N=q-B||(B-=.01)&&.001,x&&(Oe=He.utils.clamp(0,1,He.utils.normalize(B,q,re))),Te._pinPush=_,I&&w&&((o={})[he.a]="+="+w,k&&(o[he.p]="-="+Ae()),He.set([I,L],o)),!ae||et&&Te.end>=Qa(be,he)){if(ie&&Ae()&&!de)for(i=ie.parentNode;i&&i!==We;)i._pinOffset&&(B-=i._pinOffset,q-=i._pinOffset),i=i.parentNode}else o=mb(ae),s=he===Fe,a=Ae(),G=parseFloat(j(he.a))+_,!y&&1<q&&(g={style:g=(me?Xe.scrollingElement||Je:be).style,value:g["overflow"+he.a.toUpperCase()]},me&&"scroll"!==mb(We)["overflow"+he.a.toUpperCase()]&&(g.style["overflow"+he.a.toUpperCase()]="scroll")),gc(ae,U,o),V=jc(ae),i=wt(ae,!0),f=ye&&K(be,s?Ye:Fe)(),se?((Z=[se+he.os2,N+_+xt]).t=U,(M=se===bt?qb(ae,he)+N+_:0)&&(Z.push(he.d,M+xt),"auto"!==U.style.flexBasis&&(U.style.flexBasis=M+xt)),Et(Z),k&&Tt.forEach(function(e){e.pin===k&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ye&&Ae(re)):(M=qb(ae,he))&&"auto"!==U.style.flexBasis&&(U.style.flexBasis=M+xt),ye&&((l={top:i.top+(s?a-B:f)+xt,left:i.left+(s?f:a-B)+xt,boxSizing:"border-box",position:"fixed"})[ft]=l.maxWidth=Math.ceil(i.width)+xt,l[dt]=l.maxHeight=Math.ceil(i.height)+xt,l[mt]=l[mt+ht]=l[mt+pt]=l[mt+vt]=l[mt+gt]="0",l[bt]=o[bt],l[bt+ht]=o[bt+ht],l[bt+pt]=o[bt+pt],l[bt+vt]=o[bt+vt],l[bt+gt]=o[bt+gt],W=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(X,l,fe),rt&&Ae(0)),O?(d=O._initted,$e(1),O.render(O.duration(),!0,!0),Q=j(he.a)-G+N+_,$=1<Math.abs(N-Q),ye&&$&&W.splice(W.length-2,2),O.render(0,!0,!0),d||O.invalidate(!0),O.parent||O.totalTime(O.totalTime()),$e(0)):Q=N,g&&(g.value?g.style["overflow"+he.a.toUpperCase()]=g.value:g.style.removeProperty("overflow-"+he.a));p&&p.forEach(function(e){return e.revert(!1,!0)}),Te.start=B,Te.end=q,D=R=rt?re:Ae(),de||rt||(D<re&&Ae(re),Te.scroll.rec=0),Te.revert(!1,!0),Ee=at(),te&&(Me=-1,te.restart(!0)),je=0,O&&ve&&(O._initted||ne)&&O.progress()!==ne&&O.progress(ne||0,!0).render(O.time(),!0,!0),(x||Oe!==Te.progress||de||le)&&(O&&!ve&&O.totalProgress(de&&B<-.001&&!Oe?He.utils.normalize(B,q,0):Oe,!0),Te.progress=x||(D-B)/N===Oe?0:Oe),ae&&se&&(U._pinOffset=Math.round(Te.progress*Q)),ee&&ee.invalidate(),isNaN(h)||(h-=He.getProperty(Y,he.p),v-=He.getProperty(F,he.p),qc(Y,he,h),qc(I,he,h-(n||0)),qc(F,he,v),qc(L,he,v-(n||0))),x&&!rt&&Te.update(),!oe||rt||H||(H=!0,oe(Te),H=!1)}},Te.getVelocity=function(){return(Ae()-R)/(at()-Ke)*1e3||0},Te.endAnimation=function(){Wa(Te.callbackAnimation),O&&(ee?ee.progress(1):O.paused()?ve||Wa(O,Te.direction<0,1):Wa(O,O.reversed()))},Te.labelToScroll=function(e){return O&&O.labels&&(B||Te.refresh()||B)+O.labels[e]/O.duration()*N||0},Te.getTrailing=function(t){var e=Tt.indexOf(Te),r=0<Te.direction?Tt.slice(0,e).reverse():Tt.slice(e+1);return(ct(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Te.direction?e.end<=B:e.start>=q})},Te.update=function(e,t,r){if(!de||r||e){var n,o,i,a,s,l,c,u=!0===rt?re:Te.scroll(),f=e?0:(u-B)/N,d=f<0?0:1<f?1:f||0,p=Te.progress;if(t&&(R=D,D=de?Ae():u,ue&&(_=w,w=O&&!ve?O.totalProgress():d)),M&&ae&&!je&&!it&&st&&(!d&&B<u+(u-R)/(at()-Ke)*M?d=1e-4:1===d&&q>u+(u-R)/(at()-Ke)*M&&(d=.9999)),d!==p&&Te.enabled){if(a=(s=(n=Te.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,Te.direction=p<d?1:-1,Te.progress=d,a&&!je&&(o=d&&!p?0:1===d?1:1===p?2:3,ve&&(i=!s&&"none"!==we[o+1]&&we[o+1]||we[o],c=O&&("complete"===i||"reset"===i||i in O))),ge&&(s||c)&&(c||P||!O)&&(Ta(ge)?ge(Te):Te.getTrailing(ge).forEach(function(e){return e.endAnimation()})),ve||(!ee||je||it?O&&O.totalProgress(d,!(!je||!Ee&&!e)):(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",d,O._tTime/O._tDur):(ee.vars.totalProgress=d,ee.invalidate().restart()))),ae)if(e&&se&&(U.style[se+he.os2]=m),ye){if(a){if(l=!e&&p<d&&u<q+1&&u+1>=Qa(be,he),fe)if(e||!n&&!l)oc(ae,U);else{var g=wt(ae,!0),h=u-B;oc(ae,We,g.top+(he===Fe?h:0)+xt,g.left+(he===Fe?0:h)+xt)}Et(n||l?W:V),$&&d<1&&n||b(G+(1!==d||l?0:Q))}}else b(Ia(G+Q*d));!ue||A.tween||je||it||te.restart(!0),S&&(s||ce&&d&&(d<1||!tt))&&Ve(S.targets).forEach(function(e){return e.classList[n||ce?"add":"remove"](S.className)}),!T||ve||e||T(Te),a&&!je?(ve&&(c&&("complete"===i?O.pause().totalProgress(1):"reset"===i?O.restart(!0).pause():"restart"===i?O.restart(!0):O[i]()),T&&T(Te)),!s&&tt||(k&&s&&Xa(Te,k),xe[o]&&Xa(Te,xe[o]),ce&&(1===d?Te.kill(!1,1):xe[o]=0),s||xe[o=1===d?1:3]&&Xa(Te,xe[o])),pe&&!n&&Math.abs(Te.getVelocity())>(Ua(pe)?pe:2500)&&(Wa(Te.callbackAnimation),ee?ee.progress(1):Wa(O,"reverse"===i?1:!d,1))):ve&&T&&!je&&T(Te)}if(x){var v=de?u/de.duration()*(de._caScrollDist||0):u;y(v+(Y._isFlipped?1:0)),x(v)}C&&C(-u/de.duration()*(de._caScrollDist||0))}},Te.enable=function(e,t){Te.enabled||(Te.enabled=!0,wb(be,"resize",Lb),me||wb(be,"scroll",Jb),Se&&wb(ScrollTrigger,"refreshInit",Se),!1!==e&&(Te.progress=Oe=0,D=R=Me=Ae()),!1!==t&&Te.refresh())},Te.getTween=function(e){return e&&A?A.tween:ee},Te.setPositions=function(e,t,r,n){if(de){var o=de.scrollTrigger,i=de.duration(),a=o.end-o.start;e=o.start+a*e/i,t=o.start+a*t/i}Te.refresh(!1,!1,{start:Da(e,r&&!!Te._startClamp),end:Da(t,r&&!!Te._endClamp)},n),Te.update()},Te.adjustPinSpacing=function(e){if(Z&&e){var t=Z.indexOf(he.d)+1;Z[t]=parseFloat(Z[t])+e+xt,Z[1]=parseFloat(Z[1])+e+xt,Et(Z)}},Te.disable=function(e,t){if(Te.enabled&&(!1!==e&&Te.revert(!0,!0),Te.enabled=Te.isActive=!1,t||ee&&ee.pause(),re=0,n&&(n.uncache=1),Se&&xb(ScrollTrigger,"refreshInit",Se),te&&(te.pause(),A.tween&&A.tween.kill()&&(A.tween=0)),!me)){for(var r=Tt.length;r--;)if(Tt[r].scroller===be&&Tt[r]!==Te)return;xb(be,"resize",Lb),me||xb(be,"scroll",Jb)}},Te.kill=function(e,t){Te.disable(e,t),ee&&!t&&ee.kill(),a&&delete St[a];var r=Tt.indexOf(Te);0<=r&&Tt.splice(r,1),r===Qe&&0<Mt&&Qe--,r=0,Tt.forEach(function(e){return e.scroller===Te.scroller&&(r=1)}),r||rt||(Te.scroll.rec=0),O&&(O.scrollTrigger=null,e&&O.revert({kill:!1}),t||O.kill()),I&&[I,L,Y,F].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ot===Te&&(ot=0),ae&&(n&&(n.uncache=1),r=0,Tt.forEach(function(e){return e.pin===ae&&r++}),r||(n.spacer=0)),E.onKill&&E.onKill(Te)},Tt.push(Te),Te.enable(!1,!1),i&&i(Te),O&&O.add&&!N){var v=Te.update;Te.update=function(){Te.update=v,B||q||Te.refresh()},He.delayedCall(.01,Te.update),N=.01,B=q=0}else Te.refresh();ae&&function _queueRefreshAll(){if(nt!==kt){var e=nt=kt;requestAnimationFrame(function(){return e===kt&&Pt(!0)})}}()}else this.update=this.refresh=this.kill=Ha},ScrollTrigger.register=function register(e){return s||(He=e||Ka(),Ja()&&window.document&&ScrollTrigger.enable(),s=lt),s},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Ct[t]=e[t];return Ct},ScrollTrigger.disable=function disable(t,r){lt=0,Tt.forEach(function(e){return e[r?"kill":"disable"](t)}),xb(Ne,"wheel",Jb),xb(Xe,"scroll",Jb),clearInterval(u),xb(Xe,"touchcancel",Ha),xb(We,"touchstart",Ha),vb(xb,Xe,"pointerdown,touchstart,mousedown",Fa),vb(xb,Xe,"pointerup,touchend,mouseup",Ga),c.kill(),Ra(xb);for(var e=0;e<Ie.length;e+=3)yb(xb,Ie[e],Ie[e+1]),yb(xb,Ie[e],Ie[e+2])},ScrollTrigger.enable=function enable(){if(Ne=window,Xe=document,Je=Xe.documentElement,We=Xe.body,He&&(Ve=He.utils.toArray,Ue=He.utils.clamp,x=He.core.context||Ha,$e=He.core.suppressOverwrites||Ha,w=Ne.history.scrollRestoration||"auto",Q=Ne.pageYOffset,He.core.globals("ScrollTrigger",ScrollTrigger),We)){lt=1,(_=document.createElement("div")).style.height="100vh",_.style.position="absolute",Yb(),function _rafBugFix(){return lt&&requestAnimationFrame(_rafBugFix)}(),k.register(He),ScrollTrigger.isTouch=k.isTouch,E=k.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),b=1===k.isTouch,wb(Ne,"wheel",Jb),l=[Ne,Xe,Je,We],He.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=He.matchMedia();for(t in e)r.add(t,e[t]);return r},He.addEventListener("matchMediaInit",function(){return Sb()}),He.addEventListener("matchMediaRevert",function(){return Rb()}),He.addEventListener("matchMedia",function(){Pt(0,1),U("matchMedia")}),He.matchMedia("(orientation: portrait)",function(){return Kb(),Kb})):console.warn("Requires GSAP 3.11.0 or later"),Kb(),wb(Xe,"scroll",Jb);var e,t,r=We.style,n=r.borderTopStyle,o=He.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=wt(We),Fe.m=Math.round(e.top+Fe.sc())||0,Ye.m=Math.round(e.left+Ye.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),u=setInterval(Ib,250),He.delayedCall(.5,function(){return it=0}),wb(Xe,"touchcancel",Ha),wb(We,"touchstart",Ha),vb(wb,Xe,"pointerdown,touchstart,mousedown",Fa),vb(wb,Xe,"pointerup,touchend,mouseup",Ga),f=He.utils.checkPrefix("transform"),ee.push(f),s=at(),c=He.delayedCall(.2,Pt).pause(),g=[Xe,"visibilitychange",function(){var e=Ne.innerWidth,t=Ne.innerHeight;Xe.hidden?(d=e,p=t):d===e&&p===t||Lb()},Xe,"DOMContentLoaded",Pt,Ne,"load",Pt,Ne,"resize",Lb],Ra(wb),Tt.forEach(function(e){return e.enable(0,1)}),t=0;t<Ie.length;t+=3)yb(xb,Ie[t],Ie[t+1]),yb(xb,Ie[t],Ie[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(tt=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(u)||(u=t)&&setInterval(Ib,t),"ignoreMobileResize"in e&&(b=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ra(xb)||Ra(wb,e.autoRefreshEvents||"none"),h=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=J(e),n=Ie.indexOf(r),o=La(r);~n&&Ie.splice(n,o?6:2),t&&(o?Le.unshift(Ne,t,We,t,Je,t):Le.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){Tt.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(ct(e)?J(e):e).getBoundingClientRect(),o=n[r?ft:dt]*t||0;return r?0<n.right-o&&n.left+o<Ne.innerWidth:0<n.bottom-o&&n.top+o<Ne.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){ct(e)&&(e=J(e));var n=e.getBoundingClientRect(),o=n[r?ft:dt],i=null==t?o/2:t in H?H[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/Ne.innerWidth:(n.top+i)/Ne.innerHeight},ScrollTrigger.killAll=function killAll(e){if(Tt.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=W.killAll||[];W={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){s||ScrollTrigger.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),x(this),this.init(e,t)}ne.version="3.12.5",ne.saveStyles=function(e){return e?Ve(e).forEach(function(e){if(e&&e.style){var t=j.indexOf(e);0<=t&&j.splice(t,5),j.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),x())}}):j},ne.revert=function(e,t){return Sb(!e,t)},ne.create=function(e,t){return new ne(e,t)},ne.refresh=function(e){return e?Lb():(s||ne.register())&&Pt(!0)},ne.update=function(e){return++Ie.cache&&Z(!0===e?2:0)},ne.clearScrollMemory=Tb,ne.maxScroll=function(e,t){return Qa(e,t?Ye:Fe)},ne.getScrollFunc=function(e,t){return K(J(e),t?Ye:Fe)},ne.getById=function(e){return St[e]},ne.getAll=function(){return Tt.filter(function(e){return"ScrollSmoother"!==e.vars.id})},ne.isScrolling=function(){return!!st},ne.snapDirectional=tb,ne.addEventListener=function(e,t){var r=W[e]||(W[e]=[]);~r.indexOf(t)||r.push(t)},ne.removeEventListener=function(e,t){var r=W[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},ne.batch=function(e,t){function Cp(e,t){var r=[],n=[],o=He.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&Ta(t[r])&&"onRefreshInit"!==r?Cp(0,t[r]):t[r];return Ta(a)&&(a=a(),wb(ne,"refresh",function(){return a=t.batchMax()})),Ve(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(ne.create(t))}),n};function tc(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function uc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(k.isTouch?" pinch-zoom":""):"none",e===Je&&uc(We,t)}function wc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||He.core.getCache(i),s=at();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i!==We&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!ie[(t=mb(i)).overflowY]&&!ie[t.overflowX]);)i=i.parentNode;a._isScroll=i&&i!==n&&!La(i)&&(ie[(t=mb(i)).overflowY]||ie[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function xc(e,t,r,n){return k.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&wc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&wb(Xe,k.eventTypes[0],se,!1,!0)},onDisable:function onDisable(){return xb(Xe,k.eventTypes[0],se,!0)}})}function Bc(e){function zq(){return o=!1}function Cq(){i=Qa(p,Fe),S=Ue(E?1:0,i),f&&(T=Ue(0,Qa(p,Ye))),l=kt}function Dq(){v._gsap.y=Ia(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0}function Jq(){Cq(),a.isActive()&&a.vars.scrollY>i&&(b()>i?a.progress(1)&&b(i):a.resetTo("scrollY",i))}Va(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,d=e.onRelease,p=J(e.target)||Je,g=He.core.globals().ScrollSmoother,h=g&&g.get(),v=E&&(e.content&&J(e.content)||h&&!1!==e.content&&!h.smooth()&&h.content()),b=K(p,Fe),m=K(p,Ye),y=1,x=(k.isTouch&&Ne.visualViewport?Ne.visualViewport.scale*Ne.visualViewport.width:Ne.outerWidth)/Ne.innerWidth,w=0,_=Ta(t)?function(){return t(n)}:function(){return t||2.8},C=xc(p,e.type,!0,r),T=Ha,S=Ha;return v&&He.set(v,{y:"+=0"}),e.ignoreCheck=function(e){return E&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(zq);var e=Ia(n.deltaY/2),t=S(b.v-e);if(v&&t!==b.v+b.offset){b.offset=t-b.v;var r=Ia((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",v._gsap.y=r+"px",b.cacheID=Ie.cache,Z()}return!0}b.offset&&Dq(),o=!0}()||1.05<y&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){o=!1;var e=y;y=Ia((Ne.visualViewport&&Ne.visualViewport.scale||1)/x),a.pause(),e!==y&&uc(p,1.01<y||!f&&"x"),c=m(),u=b(),Cq(),l=kt},e.onRelease=e.onGestureStart=function(e,t){if(b.offset&&Dq(),t){Ie.cache++;var r,n,o=_();f&&(n=(r=m())+.05*o*-e.velocityX/.227,o*=tc(m,r,n,Qa(p,Ye)),a.vars.scrollX=T(n)),n=(r=b())+.05*o*-e.velocityY/.227,o*=tc(b,r,n,Qa(p,Fe)),a.vars.scrollY=S(n),a.invalidate().duration(o).play(.01),(E&&a.vars.scrollY>=i||i-1<=r)&&He.to({},{onUpdate:Jq,duration:o})}else s.restart(!0);d&&d(e)},e.onWheel=function(){a._ts&&a.pause(),1e3<at()-w&&(l=0,w=at())},e.onChange=function(e,t,r,n,o){if(kt!==l&&Cq(),t&&f&&m(T(n[2]===t?c+(e.startX-e.x):m()+t-n[1])),r){b.offset&&Dq();var i=o[2]===r,a=i?u+e.startY-e.y:b()+r-o[1],s=S(a);i&&a!==s&&(u+=s-a),b(s)}(r||t)&&Z()},e.onEnable=function(){uc(p,!f&&"x"),ne.addEventListener("refresh",Jq),wb(Ne,"resize",Jq),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=m.smooth=!1),C.enable()},e.onDisable=function(){uc(p,!0),xb(Ne,"resize",Jq),ne.removeEventListener("refresh",Jq),C.kill()},e.lockAxis=!1!==e.lockAxis,((n=new k(e)).iOS=E)&&!b()&&b(1),E&&He.ticker.add(Ha),s=n._dc,a=He.to(n,{ease:"power4",paused:!0,inherit:!1,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:pc(b,b(),function(){return a.pause()})},onUpdate:Z,onComplete:s.vars.onComplete}),n}var oe,ie={auto:1,scroll:1},ae=/(input|label|select|textarea)/i,se=function _captureInputs(e){var t=ae.test(e.target.tagName);(t||oe)&&(e._gsapAllow=!0,oe=t)};ne.sort=function(e){return Tt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},ne.observe=function(e){return new k(e)},ne.normalizeScroll=function(e){if(void 0===e)return v;if(!0===e&&v)return v.enable();if(!1===e)return v&&v.kill(),void(v=e);var t=e instanceof k?e:Bc(e);return v&&v.target===t.target&&v.kill(),La(t.target)&&(v=t),t},ne.core={_getVelocityProp:L,_inputObserver:xc,_scrollers:Ie,_proxies:Le,bridge:{ss:function ss(){st||U("scrollStart"),st=at()},ref:function ref(){return je}}},Ka()&&He.registerPlugin(ne),e.ScrollTrigger=ne,e.default=ne;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

`},5134:function(t){t.exports=`/*!
 * GSAP 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&ze}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Mt(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=dt.length,i=dt.slice(0);for(ct={},t=dt.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){dt.length&&!L&&ma(),t.render(e,r,i||L&&e<0&&(t._initted||t._startAt)),dt.length&&!L&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(Z(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ga(t.rawTime(),e),(!e._dur||Ot(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Qt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(dt.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new $t(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Mt(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Mt(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=y[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f<d&&f--}for(c=y[d]=[],i=T?Math.min(f,d)*w-.5:m%f,n=f===U?0:T?d*x/f-.5:m/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ya(p.amount||p.each)||0,_=_&&d<0?Yt(_):_}return d=(c[t]-c.min)/c.max||0,ja(c.b+(_?_(d):d)*c.v)+c.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=Z(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Mt(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&Ct(t,"onInterrupt"),t}function wb(t){if(t)if(t=!t.name&&t.default||t,x()||t.headless){var e=t.name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:he,add:Wt,kill:ce,modifier:fe,rawVars:0},a={targetTest:0,get:0,getSetter:ne,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(ze,i,_e)}else At.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,d,c,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:zt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),zt[e])p=zt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=c=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||zt.transparent;p=p.map(Number)}return r&&!c&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(d=l-f,u=.5<h?d/(2-l-f):d/(l+f),o=l===n?(a-s)/d+(a<s?6:0):l===a?(s-n)/d+2:(n-a)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Et).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Et),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Et,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Et)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Et.lastIndex=0,Et.test(r))return e=Dt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=Lt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Lt._CE&&It.test(t)?Lt._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Lt[t]=ot[t]=a,Lt[n=t.toLowerCase()]=r,a)Lt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Lt[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Jm(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Jm:"in"===r?function(t){return 1-Jm(1-t)}:Tb(Jm);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Rm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Rm:"in"===e?function(t){return 1-Rm(1-t)}:Tb(Rm);return t.config=function(t){return Vb(e,t)},t}var F,L,l,I,h,n,a,i,o,f,d,c,p,_,m,g,b,O,k,M,C,A,z,E,D,B,Y,j,q={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},V={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,G=N/4,W=0,K=Math.sqrt,J=Math.cos,H=Math.sin,$="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\\.?\\d|\\.)+/gi,et=/[-+=.]*\\d+[.e\\-+]*\\d*[e\\-+]*\\d*/g,rt=/[-+=.]*\\d+[.e-]*\\d*[a-z%]*/g,it=/[-+=.]*\\d+\\.?\\d*(?:e-|e\\+)?\\d*/gi,nt=/[+-]=-?[.\\d]+/,at=/[^,'"\\[\\]\\s]+/gi,st=/^[+\\-=e\\s\\d]*\\d+[.\\d]*([a-z]*|%)\\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},dt=[],ct={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(Z(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Ot=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Mt=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?Z(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Mt(t)):i.push(t)})||i}(t,i):_a(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&dt.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=[],St=255,zt={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Et=function(){var t,e="(?:\\\\b(?:(?:rgb|rgba|hsl|hsla)\\\\(.+?\\\\))|\\\\B#(?:[0-9a-f]{3,4}){1,2}\\\\b";for(t in zt)e+="|"+t+"\\\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\\(/,Rt=(k=Date.now,M=500,C=33,A=k(),z=A,D=E=1e3/240,g={time:0,frame:0,tick:function tick(){yl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=ze,(h.gsapVersions||(h.gsapVersions=[])).push(ze.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),At.forEach(wb)),m="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,p&&g.sleep(),_=m||function(t){return setTimeout(t,D-1e3*g.time+1|0)},c=1,yl(2))},sleep:function sleep(){(m?cancelAnimationFrame:clearTimeout)(p),c=0,_=T},lagSmoothing:function lagSmoothing(t,e){M=t||1/0,C=Math.min(e||33,M)},fps:function fps(t){E=1e3/(t||240),D=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),B[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=B.indexOf(t))&&B.splice(e,1)&&e<=O&&O--},_listeners:B=[]}),Ft=function _wake(){return!c&&Rt.wake()},Lt={},It=/^[\\d.\\-M][\\d.\\-,\\s]/,Bt=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:Lt[t]||Ob(t))||e};function yl(t){var e,r,i,n,a=k()-z,s=!0===t;if((M<a||a<0)&&(A+=a-C),(0<(e=(i=(z+=a)-A)-D)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,D+=e+(E<=e?4:E-e),r=1),s||(p=_(yl)),r)for(O=0;O<B.length;O++)B[O](i,b,n,t)}function gn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-gn(1-t)},gn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(K(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-J(t*G)}),Sb("Back",Vb("in"),Vb("out"),Vb()),Lt.SteppedEase=Lt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Ot(0,.99999999,t)|0)+n)*r}}},V.ease=Lt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var qt,Vt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ne},Ut=((qt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},qt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},qt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},qt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},qt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},qt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):0<this.rawTime()?1:0},qt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):0<this.rawTime()?1:0},qt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},qt.timeScale=function timeScale(t,e){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,r),!1!==e),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},qt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},qt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},qt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},qt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},qt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},qt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},qt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},qt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},qt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},qt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},qt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},qt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},qt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},qt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},qt.resume=function resume(){return this.paused(!1)},qt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},qt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},qt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},qt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},qt.then=function then(t){var i=this;return new Promise(function(e){function Co(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Co():i._prom=Co})},qt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),c||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&Ka(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new $t(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,$t.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new $t(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=Tt(this._tTime,o),!_&&this._tTime&&d!==s&&this._tTime-d*o-this._dur<=0&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if(Z(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=$t.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof $t?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=$t.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Mt(e),s=this._first,o=t(r);s;)s instanceof $t?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=$t.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(na(I,Ga(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=q.autoSleep||120;var e=I._first;if((!e||!e._ts)&&q.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Kt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||Z(t)||$(t))return r(t)?Kt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Kt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new _e(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==d))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(Z(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Gt,Wt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var d,c=t[e],p="get"!==i?i:s(c)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,_=s(c)?l?re:te:Zt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(d=ka(p,n)+(Ya(p)||0))&&0!==d||(n=d))),!f||p!==n||Gt)return isNaN(p*n)||""===n?(c||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new _e(this._pt,t,e,0,1,ue,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?ka(d,l)-d:parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||q.stringFilter,l)):(d=new _e(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof c?se:ae,0,_),l&&(d.fp=l),u&&d.modifier(u,this,t),this._pt=d)},Qt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.runBackwards,O=m.yoyoEase,k=m.keyframes,M=m.autoRevert,P=t._dur,C=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.vars.targets:A,E="auto"===t._overwrite&&!F,D=t.timeline;if(!D||k&&g||(g="none"),t._ease=jt(g,V.ease),t._yEase=O?Yt(jt(!0===O?g:O,V.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!D&&!!m.runBackwards,!D||k&&!m.stagger){if(p=(l=A[0]?fa(A[0]).harness:0)&&m[l.prop],i=ua(m,ft),C&&(C._zTime<0&&C.progress(1),e<0&&x&&y&&!M?C.render(-1,!0):C.revert(x&&P?ht:ut),C._lazy=0),v){if(za(t._startAt=$t.set(A,qa({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!C&&w(T),startAt:null,delay:0,onUpdate:b&&function(){return Ct(t,"onUpdate")},stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!M)&&t._startAt.revert(ht),y&&P&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(x&&P&&!C)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!C&&w(T),immediateRender:y,stagger:0,parent:S},i),p&&(a[l.prop]=p),za(t._startAt=$t.set(A,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=P&&w(T)||T&&!P,n=0;n<A.length;n++){if(h=(o=A[n])._gsap||ea(A)[n]._gsap,t._ptLookup[n]=d={},ct[h.id]&&dt.length&&ma(),c=z===A?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,c,z)&&(t._pt=s=new _e(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,c,o,z))?f.priority&&(u=1):d[a]=s=Wt.call(t,o,a,"get",i[a],c,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),E&&t._pt&&(Nt=t,I.killTweensOf(o,d,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(ct[h.id]=1)}u&&pe(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,k&&e<=0&&D.render(U,!0,!0)},Kt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Jt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var $t=function(D){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,d,c,p=(a=D.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,O=p.defaults,k=p.scrollTrigger,M=p.yoyoEase,P=r.parent||I,C=(Z(e)||$(e)?t(e[0]):"length"in r)?[e]:Mt(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://gsap.com",!q.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:O||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,d=T&&eb(T),v(T))for(l in T)~Jt.indexOf(l)&&((c=c||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,M&&(u.yoyoEase=M),c&&yt(u,c),f=C[o],u.duration=+Kt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Kt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,d?d(o,f,C):0),s._ease=Lt.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var A,S,z,E=0;if(Z(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(z={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,z,E),E+=z.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||F||(Nt=_assertThisInitialized(a),I.killTweensOf(C),Nt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),k&&La(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,D);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=t<0,m=c-X<t&&!_?c:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===c?(a=this._repeat,i=p):((a=~~(m/s))&&a===ja(m/s)&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===d&&!r&&this._initted&&a===o)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),this.vars.repeatRefresh&&!u&&!this._lock&&this._time!==s&&this._initted&&(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(!(d===this._time||r&&this.vars.repeatRefresh&&a!==o))return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&!a&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!d||!(m||d||u)||(Ct(this,m===c?"onComplete":"onReverseComplete",!0),!this._prom||m<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Ot(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||L||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),D.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i,n){c||Rt.wake(),this._ts||this.play();var a,s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Qt(this,s),a=this._ease(s/this._dur),function _updatePropTweens(t,e,r,i,n,a,s,o){var u,h,l,f,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d)for(d=t._ptCache[e]=[],l=t._ptLookup,f=t._targets.length;f--;){if((u=l[f][e])&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gt=1,t.vars[e]="+=0",Qt(t,s),Gt=0,o?R(e+" not eligible for reset"):1;d.push(u)}for(f=d.length;f--;)(u=(h=d[f])._pt||h).s=!i&&0!==i||n?u.s+(i||0)+a*u.c:i,u.c=r-u.s,h.e&&(h.e=ia(r)+Ya(h.e)),h.b&&(h.b=u.s+Ya(h.b))}(this,t,e,r,i,a,s,n)?this.resetTo(t,e,r,i,1):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,d=t?Mt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=c[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Ut);qa($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var t=new Xt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Zt=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ne=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:Zt},ae=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ue=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},he=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},fe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ce=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},pe=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},_e=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ae,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=$t,ot.TimelineLite=ot.TimelineMax=Xt,I=new Xt({sortChildren:!1,defaults:V,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),q.stringFilter=Fb;function Ec(t){return(ye[t]||Te).map(function(t){return t()})}function Fc(){var t=Date.now(),o=[];2<t-Oe&&(Ec("matchMediaInit"),ge.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Ec("matchMediaRevert"),o.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Oe=t,Ec("matchMedia"))}var me,ge=[],ye={},Te=[],Oe=0,Me=0,Pe=((me=Context.prototype).add=function add(t,i,n){function Gw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Gw,t===s?Gw(a,function(t){return a.add(null,t)}):t?a[t]=Gw:Gw},me.ignore=function ignore(t){var e=l;l=null,t(this),l=e},me.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof $t&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},me.clear=function clear(){this._r.length=this.data.length=0},me.kill=function kill(i,t){var n=this;if(i?function(){for(var t,e=n.getTweens(),r=n.data.length;r--;)"isFlip"===(t=n.data[r]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return e.splice(e.indexOf(t),1)}));for(e.map(function(t){return{g:t._dur||t._delay||t._sat&&!t._sat.vars.immediateRender?t.globalTime(0):-1/0,t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(i)}),r=n.data.length;r--;)(t=n.data[r])instanceof Xt?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof $t||!t.revert||t.revert(i);n._r.forEach(function(t){return t(i,n)}),n.isReverted=!0}():this.data.forEach(function(t){return t.kill&&t.kill()}),this.clear(),t)for(var e=ge.length;e--;)ge[e].id===this.id&&ge.splice(e,1)},me.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Me++,t&&this.add(t)}var Ce,Ae=((Ce=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ge.indexOf(s)<0&&ge.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Fc):i.addEventListener("change",Fc));return a&&e(s,function(t){return s.add(null,t)}),this},Ce.revert=function revert(t){this.kill(t||{})},Ce.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t,l&&l.data.push(this)}var Se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Mt(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Mt(r)).length){var n=r.map(function(t){return ze.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&he(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function $x(t,e,r){return n.resetTo(i,t,e,r)}var r,n=ze.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return $x.tween=n,$x},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,V.ease)),ta(V,t||{})},config:function config(t){return ta(q,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Mt(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Lt[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):Lt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Ae(t)},matchMediaRefresh:function matchMediaRefresh(){return ge.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Fc()},addEventListener:function addEventListener(t,e){var r=ye[t]||(ye[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=ye[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return Ot(e,r,t)})},splitColor:Ab,toArray:Mt,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),d={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(Z(e)&&!Z(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt(Z(e)?[]:{},e));if(!u){for(s in i)Wt.call(d,e,s,"get",i[s]);a=function func(t){return he(t,d)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:_e,globals:S,Tween:$t,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return F=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Se[t]=$t[t]}),Rt.add(Xt.updateRoot),d=Se.to({},{duration:0});function Jc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Lc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Jc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var ze=Se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Lc("roundProps",fb),Lc("modifiers"),Lc("snap",gb))||Se;$t.version=Xt.version=ze.version="3.12.5",o=1,x()&&Ft();function vd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function yd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function zd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Bd(t,e,r){return t.style[e]=r}function Cd(t,e,r){return t.style.setProperty(e,r)}function Dd(t,e,r){return t._gsap[e]=r}function Ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Jd(t,e){var r=this,i=this.target,n=i.style,a=i._gsap;if(t in ar&&n){if(this.tfm=this.tfm||{},"transform"===t)return dr.transform.split(",").forEach(function(t){return Jd.call(r,t,e)});if(~(t=dr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=yr(i,t)}):this.tfm[t]=a.x?a[t]:yr(i,t),t===pr&&(this.tfm.zOrigin=a.zOrigin),0<=this.props.indexOf(cr))return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pr,e,"")),t=cr}(n||e)&&this.props.push(t,e,n[t])}function Kd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Ld(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(hr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Be())&&t.isStart||n[cr]||(Kd(n),a.zOrigin&&n[pr]&&(n[pr]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}}function Md(t,e){var r={target:t,props:[],revert:Ld,save:Jd};return t._gsap||ze.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Od(t,e){var r=De.createElementNS?De.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):De.createElement(t);return r&&r.style?r:De.createElement(t)}function Pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Pd(t,mr(e)||e,1)||""}function Sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ee=window,De=Ee.document,Re=De.documentElement,Le=Od("div")||{style:{}},Od("div"),cr=mr(cr),pr=cr+"Origin",Le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ye=!!mr("perspective"),Be=ze.core.reverting,Fe=1)}function Td(t){var e,r=Od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Vd(e){var r;try{r=e.getBBox()}catch(t){r=Td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Td||(r=Td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}}function Wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Vd(t))}function Xd(t,e){if(e){var r,i=t.style;e in ar&&e!==pr&&(e=cr),i.removeProperty?("ms"!==(r=e.substr(0,2))&&"webkit"!==e.substr(0,6)||(e="-"+e),i.removeProperty("--"===r?e:e.replace(hr,"-$1").toLowerCase())):i.removeAttribute(e)}}function Yd(t,e,r,i,n,a){var s=new _e(t._pt,e,r,0,1,a?Ad:zd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function _d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Le.style,f=lr.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;if(i===h||!u||gr[i]||gr[h])return u;if("px"===h||p||(u=_d(t,e,r,"px")),o=t.getCTM&&Wd(t),(_||"%"===h)&&(ar[e]||~e.indexOf("adius")))return n=o?t.getBBox()[f?"width":"height"]:t[c],ia(_?u/n*100:u/100*n);if(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==De&&a.appendChild||(a=De.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache)return ia(u/s.width*100);if(!_||"height"!==e&&"width"!==e)!_&&"%"!==h||vr[Pd(a,"display")]||(l.position=Pd(t,"position")),a===t&&(l.position="static"),a.appendChild(Le),n=Le[c],a.removeChild(Le),l.position="absolute";else{var m=t.style[e];t.style[e]=100+i,n=t[c],m?t.style[e]=m:Xd(t,e)}return f&&_&&((s=fa(a)).time=Rt.time,s.width=a[c]),ia(p?n*u/100:n&&u?100/n*u:0)}function be(t,e,r,i){if(!r||"none"===r){var n=mr(e,t,1),a=n&&Pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Pd(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g=new _e(this._pt,t.style,e,0,1,ue),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(f=t.style[e],t.style[e]=i,i=Pd(t,e)||i,f?t.style[e]=f:Xd(t,e)),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===d.charAt(1)&&(d=ka(h,d)+m),c=parseFloat(d),_=d.substr((c+"").length),v=rt.lastIndex-_.length,_||(_=_||q.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=_d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Ad:zd;return nt.test(i)&&(g.e=0),this._pt=g}function de(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Tr[r]||r,e[1]=Tr[i]||i,e.join(" ")}function ee(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ar[r]&&(i=1,r="transformOrigin"===r?pr:cr),Xd(a,r);i&&(Xd(a,cr),u&&(u.svg&&a.removeAttribute("transform"),Or(a,1),u.uncache=1,Kd(s)))}}function ie(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function je(t){var e=Pd(t,cr);return ie(e)?wr:e.substr(7).match(et).map(ia)}function ke(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=je(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?wr:u:(u!==wr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=je(t),n?o.display=n:Xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function le(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ke(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==wr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Vd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[pr]="0px 0px",a&&(Yd(a,h,"xOrigin",f,w),Yd(a,h,"yOrigin",d,x),Yd(a,h,"xOffset",c,h.xOffset),Yd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function oe(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(_d(t,"x",r+"px",i)))+i}function ve(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?sr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new _e(t._pt,e,i,n,l,wd),o.e=f,o.u="deg",t._props.push(i),o}function we(t,e){for(var r in e)t[r]=e[r];return t}function xe(t,e,r){var i,n,a,s,o,u,h,l=we({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[cr]=e,i=Or(r,1),Xd(r,cr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[cr],f[cr]=e,i=Or(r,1),f[cr]=a),ar)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?_d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new _e(t._pt,i,n,o,u-o,vd),t._pt.u=h||0,t._props.push(n));we(i,l)}var Ee,De,Re,Fe,Le,Ie,Be,Ye,qe=Lt.Power0,Ve=Lt.Power1,Ue=Lt.Power2,Xe=Lt.Power3,Ne=Lt.Power4,Ge=Lt.Linear,We=Lt.Quad,Qe=Lt.Cubic,Ke=Lt.Quart,Je=Lt.Quint,He=Lt.Strong,$e=Lt.Elastic,Ze=Lt.Back,tr=Lt.SteppedEase,er=Lt.Bounce,rr=Lt.Sine,ir=Lt.Expo,nr=Lt.Circ,ar={},sr=180/Math.PI,or=Math.PI/180,ur=Math.atan2,hr=/([A-Z])/g,lr=/(left|right|width|margin|padding|x)/i,fr=/[\\s,\\(]\\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cr="transform",pr=cr+"Origin",_r="O,Moz,ms,Ms,Webkit".split(","),mr=function _checkPropPrefix(t,e,r){var i=(e||Le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(_r[n]+t in i););return n<0?null:(3===n?"ms":0<=n?_r[n]:"")+t},gr={deg:1,rad:1,turn:1},vr={grid:1,flex:1},yr=function _get(t,e,r,i){var n;return Fe||Sd(),e in dr&&"transform"!==e&&~(e=dr[e]).indexOf(",")&&(e=e.split(",")[0]),ar[e]&&"transform"!==e?(n=Or(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:kr(Pd(t,pr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=br[e]&&br[e](t,e,r)||Pd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?_d(t,e,n,r)+r:n},Tr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},br={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new _e(t._pt,e,r,0,0,ee);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},wr=[1,0,0,1,0,0],xr={},Or=function _parseTransform(t,e){var r=t._gsap||new Vt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,O,k,M,P,C,A,S,z,E,D,R,F=t.style,L=r.scaleX<0,I="deg",B=getComputedStyle(t),Y=Pd(t,pr)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!Wd(t)),B.translate&&("none"===B.translate&&"none"===B.scale&&"none"===B.rotate||(F[cr]=("none"!==B.translate?"translate3d("+(B.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==B.rotate?"rotate("+B.rotate+") ":"")+("none"!==B.scale?"scale("+B.scale.split(" ").join(",")+") ":"")+("none"!==B[cr]?B[cr]:"")),F.scale=F.rotate=F.translate="none"),m=ke(t,r.svg),r.svg&&(M=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),le(t,M||Y,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==wr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=O=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ur(b,T)*sr:0,(f=w||x?ur(w,x)*sr+u:0)&&(o*=Math.abs(Math.cos(f*or))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],E=m[7],A=m[8],S=m[9],z=m[10],D=m[11],i=m[12],n=m[13],a=m[14],h=(g=ur(R,z))*sr,g&&(M=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=k*v+S*y,C=R*v+z*y,A=O*-y+A*v,S=k*-y+S*v,z=R*-y+z*v,D=E*-y+D*v,O=M,k=P,R=C),l=(g=ur(-w,z))*sr,g&&(v=Math.cos(-g),D=x*(y=Math.sin(-g))+D*v,T=M=T*v-A*y,b=P=b*v-S*y,w=C=w*v-z*y),u=(g=ur(b,T))*sr,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=O*v+k*y,b=b*v-T*y,k=k*v-O*y,T=M,O=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=ur(O,k),f=2e-4<Math.abs(g)?g*sr:0,c=D?1/(D<0?-D:D):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ie(Pd(t,cr)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+I,r.rotationX=ia(h)+I,r.rotationY=ia(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||!e&&r.zOrigin||0)&&(F[pr]=kr(Y)),r.xOffset=r.yOffset=0,r.force3D=q.force3D,r.renderTransform=r.svg?zr:Ye?Sr:Mr,r.uncache=0,r},kr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Mr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Sr(t,e)},Pr="0deg",Cr="0px",Ar=") ",Sr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*or,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*or,b=Math.cos(w),a=oe(g,a,x*b*-v),s=oe(g,s,-Math.sin(w)*-v),o=oe(g,o,O*b*-v+v)}_!==Cr&&(y+="perspective("+_+Ar),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Cr&&s===Cr&&o===Cr||(y+=o!==Cr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ar),u!==Pr&&(y+="rotate("+u+Ar),h!==Pr&&(y+="rotateY("+h+Ar),l!==Pr&&(y+="rotateX("+l+Ar),f===Pr&&d===Pr||(y+="skew("+f+", "+d+Ar),1===c&&1===p||(y+="scale("+c+", "+p+Ar),g.style[cr]=y||"translate(0, 0)"},zr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=or,c*=or,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=or,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=_d(g,"x",l,"px"),O=_d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),O=ia(O+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),O=ia(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[cr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});br[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Er,Dr,Rr,Fr={name:"css",register:Sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w=this._props,x=t.style,O=i.vars.startAt;for(d in Fe||Sd(),this.styles=this.styles||Md(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==d&&(o=e[d],!pt[d]||!ac(d,e,i,n,t,a)))if(l=typeof o,f=br[d],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,d,o,i)&&(T=1);else if("--"===d.substr(0,2))s=(getComputedStyle(t).getPropertyValue(d)+"").trim(),o+="",Et.lastIndex=0,Et.test(s)||(c=Ya(s),p=Ya(o)),p?c!==p&&(s=_d(t,d,s,p)+p):c&&(o+=c),this.add(x,"setProperty",s,o,n,a,0,0,d),w.push(d),b.push(d,0,x[d]);else if("undefined"!==l){if(O&&d in O?(s="function"==typeof O[d]?O[d].call(i,n,t,a):O[d],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||"auto"===s||(s+=q.units[d]||Ya(yr(t,d))||""),"="===(s+"").charAt(1)&&(s=yr(t,d))):s=yr(t,d),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),d in dr&&("autoAlpha"===d&&(1===h&&"hidden"===yr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Yd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=dr[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in ar)if(this.styles.save(d),g||((v=t._gsap).renderTransform&&!e.parseTransform||Or(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new _e(this._pt,x,cr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new _e(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,vd),this._pt.u=0,w.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push(pr,0,x[pr]),o=de(o),v.svg?le(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Yd(this,v,"zOrigin",v.zOrigin,p),Yd(this,x,d,kr(s),kr(o)));continue}if("svgOrigin"===d){le(t,o,1,y,0,this);continue}if(d in xr){ve(this,v,d,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===d){Yd(this,v,"smooth",v.smooth,o);continue}if("force3D"===d){v[d]=o;continue}if("transform"===d){xe(this,o,t);continue}}else d in x||(d=mr(d)||d);if(m||(u||0===u)&&(h||0===h)&&!fr.test(o)&&d in x)u=u||0,(c=(s+"").substr((h+"").length))!==(p=Ya(o)||(d in q.units?q.units[d]:c))&&(h=_d(t,d,s,p)),this._pt=new _e(this._pt,m?v:x,d,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==d||!1===e.autoRound?vd:yd),this._pt.u=p||0,c!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=xd);else if(d in x)be.call(this,t,d,s,_?_+o:o);else if(d in t)this.add(t,d,s||t[d],_?_+o:o,n,a);else if("parseTransform"!==d){Q(d,o);continue}m||(d in x?b.push(d,0,x[d]):b.push(d,1,s||t[d])),w.push(d)}T&&pe(this)},render:function render(t,e){if(e.tween._time||!Be())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:yr,aliases:dr,getSetter:function getSetter(t,e,r){var i=dr[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==pr&&(t._gsap.x||yr(t,"x"))?r&&Ie===r?"scale"===e?Ed:Dd:(Ie=r||{})&&("scale"===e?Fd:Gd):t.style&&!u(t.style[e])?Bd:~e.indexOf("-")?Cd:ne(t,e)},core:{_removeProperty:Xd,_getMatrix:ke}};ze.utils.checkPrefix=mr,ze.core.getStyleSaver=Md,Rr=ha((Er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Dr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ar[t]=1}),ha(Dr,function(t){q.units[t]="deg",xr[t]=1}),dr[Rr[13]]=Er+","+Dr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");dr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){q.units[t]="px"}),ze.registerPlugin(Fr);var Lr=ze.registerPlugin(Fr)||ze,Ir=Lr.core.Tween;e.Back=Ze,e.Bounce=er,e.CSSPlugin=Fr,e.Circ=nr,e.Cubic=Qe,e.Elastic=$e,e.Expo=ir,e.Linear=Ge,e.Power0=qe,e.Power1=Ve,e.Power2=Ue,e.Power3=Xe,e.Power4=Ne,e.Quad=We,e.Quart=Ke,e.Quint=Je,e.Sine=rr,e.SteppedEase=tr,e.Strong=He,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=$t,e.TweenMax=Ir,e.default=Lr,e.gsap=Lr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

`},5423:function(t){t.exports=`(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (root['Intercooler'] = factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    root['Intercooler'] = factory(root["jQuery"]);
  }
}(this, function ($) {

////////////////////////////////////

/**
 * Intercooler.js - there is no need to be upset.
 */
var Intercooler = Intercooler || (function() {
  'use strict'; // inside function for better merging

  // work around zepto build issue TODO - fix me
  if((typeof Zepto !== "undefined") && ($ == null)) {
    window["$"] = Zepto
  }

  //--------------------------------------------------
  // Vars
  //--------------------------------------------------
  var USE_DATA = $('meta[name="intercoolerjs:use-data-prefix"]').attr("content") == "true";
  var USE_ACTUAL_HTTP_METHOD = $('meta[name="intercoolerjs:use-actual-http-method"]').attr("content") == "true";

  var _MACROS = $.map(['ic-get-from', 'ic-post-to', 'ic-put-to', 'ic-patch-to', 'ic-delete-from',
                       'ic-style-src', 'ic-attr-src', 'ic-prepend-from', 'ic-append-from', 'ic-action'],
                      function(elt){ return fixICAttributeName(elt) });

  var _scrollHandler = null;
  var _UUID = 1;
  var _readyHandlers = [];

  var _isDependentFunction = function(src, dest) {
    if (!src || !dest) {
      return false;
    }

    // For two urls to be considered dependant, either one must contain all
    // of the path arguments the other has, like so:
    //  - chomp off everything after ? or #. This is a design decision, so this
    //    function will fail to determine dependencies for sites that store
    //    their model IDs in query/hash params. If your usecase is not covered
    //    by this you need to implement this function yourself by overriding
    //    Intercooler.setIsDependentFunction(function(src, dest) { return bool; });
    //  - split by / to get the individual path elements, clear out empty values,
    //    then simply compare them
    var asrc = src.split(/[\\?#]/, 1)[0].split("/").filter(function(e) {
      return e != "";
    });

    var adest = dest.split(/[\\?#]/, 1)[0].split("/").filter(function(e) {
      return e != "";
    });

    // ignore purely local tags (local transport)
    if (asrc == "" || adest == "") {
      return false;
    }
    return adest.slice(0, asrc.length).join("/") == asrc.join("/") ||
      asrc.slice(0, adest.length).join("/") == adest.join("/");
  };

  //============================================================
  // Base Swap Definitions
  //============================================================
  function remove(elt) {
    elt.remove();
  }

  function showIndicator(elt) {
    if (elt.closest('.ic-use-transition').length > 0) {
      elt.data('ic-use-transition', true);
      elt.removeClass('ic-use-transition');
    } else {
      elt.show();
    }
  }

  function hideIndicator(elt) {
    if (elt.data('ic-use-transition') || elt.data('ic-indicator-cleared')) {
      elt.data('ic-use-transition', null);
      elt.addClass('ic-use-transition');
      elt.data('ic-indicator-cleared', true);
    } else {
      elt.hide();
    }
  }

  function fixICAttributeName(s) {
    if (USE_DATA) {
      return 'data-' + s;
    } else {
      return s;
    }
  }

  function getICAttribute(element, attributeName) {
    return element.attr(fixICAttributeName(attributeName));
  }

  function setICAttribute(element, attributeName, attributeValue) {
    element.attr(fixICAttributeName(attributeName), attributeValue);
  }

  function prepend(parent, responseContent) {
    try {
      parent.prepend(responseContent);
    } catch (e) {
      log(parent, formatError(e), "ERROR");
    }
    if (getICAttribute(parent, 'ic-limit-children')) {
      var limit = parseInt(getICAttribute(parent, 'ic-limit-children'));
      if (parent.children().length > limit) {
        parent.children().slice(limit, parent.children().length).remove();
      }
    }
  }

  function append(parent, responseContent) {
    try {
      parent.append(responseContent);
    } catch (e) {
      log(parent, formatError(e), "ERROR");
    }
    if (getICAttribute(parent, 'ic-limit-children')) {
      var limit = parseInt(getICAttribute(parent, 'ic-limit-children'));
      if (parent.children().length > limit) {
        parent.children().slice(0, parent.children().length - limit).remove();
      }
    }
  }

  //============================================================
  // Utility Methods
  //============================================================
  function triggerEvent(elt, event, args){
    if($.zepto) {
      event = event.split(".").reverse().join(":");
    }
    elt.trigger(event, args);
  }

  function log(elt, msg, level) {
    if (elt == null) {
      elt = $('body');
    }
    triggerEvent(elt, "log.ic", [msg, level, elt]);
    if (level == "ERROR") {
      if (window.console) {
        window.console.log("Intercooler Error : " + msg);
      }
      var errorUrl = closestAttrValue($('body'), 'ic-post-errors-to');
      if (errorUrl) {
        $.post(errorUrl, {'error': msg});
      }
    }
  }

  function uuid() {
    return _UUID++;
  }

  function icSelectorFor(elt) {
    return getICAttributeSelector("ic-id='" + getIntercoolerId(elt) + "'");
  }

  function parseInterval(str) {
    log(null, "POLL: Parsing interval string " + str, 'DEBUG');
    if (str == "null" || str == "false" || str == "") {
      return null;
    } else if (str.lastIndexOf("ms") == str.length - 2) {
      return parseFloat(str.substr(0, str.length - 2));
    } else if (str.lastIndexOf("s") == str.length - 1) {
      return parseFloat(str.substr(0, str.length - 1)) * 1000;
    } else {
      return 1000;
    }
  }

  function getICAttributeSelector(attribute) {
    return "[" + fixICAttributeName(attribute) + "]";
  }

  function initScrollHandler() {
    if (_scrollHandler == null) {
      _scrollHandler = function() {
        $(getICAttributeSelector("ic-trigger-on='scrolled-into-view'")).each(function() {
          var _this = $(this);
          if (isScrolledIntoView(getTriggeredElement(_this)) && _this.data('ic-scrolled-into-view-loaded') != true) {
            _this.data('ic-scrolled-into-view-loaded', true);
            fireICRequest(_this);
          }
        });
      };
      $(window).scroll(_scrollHandler);
    }
  }

  function currentUrl() {
    return window.location.pathname + window.location.search + window.location.hash;
  }

  // taken from turbolinks.js
  function createDocument(html) {
    var doc = null;
    if (/<(html|body)/i.test(html)) {
      doc = document.documentElement.cloneNode();
      doc.innerHTML = html;
    } else {
      doc = document.documentElement.cloneNode(true);
      doc.querySelector('body').innerHTML = html;
    }
    return $(doc);
  }

  //============================================================
  // Request/Parameter/Include Processing
  //============================================================
  function getTarget(elt) {
    return getTargetImpl(elt, 'ic-target')
  }

  function getTargetImpl(elt, attibuteName) {
    var closest = $(elt).closest(getICAttributeSelector(attibuteName));
    var targetValue = getICAttribute(closest, attibuteName);
    if (targetValue == 'this') {
      return closest;
    } else if (targetValue && targetValue.indexOf('this.') != 0) {
      if (targetValue.indexOf('closest ') == 0) {
        return elt.closest(targetValue.substr(8));
      } else if (targetValue.indexOf('find ') == 0) {
        return elt.find(targetValue.substr(5));
      } else {
        return $(targetValue);
      }
    } else {
      return elt;
    }
  }

  function processHeaders(elt, xhr) {
    elt = $(elt);
    triggerEvent(elt, "beforeHeaders.ic", [elt, xhr]);
    log(elt, "response headers: " + xhr.getAllResponseHeaders(), "DEBUG");
    var target = null;

    // set page title by header
    if (xhr.getResponseHeader("X-IC-Title")) {
      document.title = xhr.getResponseHeader("X-IC-Title");
    }

    if (xhr.getResponseHeader("X-IC-Title-Encoded")) {
      var decodedTitle = decodeURIComponent((xhr.getResponseHeader("X-IC-Title-Encoded")).replace(/\\+/g, '%20'));
      document.title = decodedTitle;
    }

    if (xhr.getResponseHeader("X-IC-Refresh")) {
      var pathsToRefresh = xhr.getResponseHeader("X-IC-Refresh").split(",");
      log(elt, "X-IC-Refresh: refreshing " + pathsToRefresh, "DEBUG");
      $.each(pathsToRefresh, function(i, str) {
        refreshDependencies(str.replace(/ /g, ""), elt);
      });
    }

    if (xhr.getResponseHeader("X-IC-Script")) {
      log(elt, "X-IC-Script: evaling " + xhr.getResponseHeader("X-IC-Script"), "DEBUG");
      globalEval(xhr.getResponseHeader("X-IC-Script"), [["elt", elt]]);
    }

    if (xhr.getResponseHeader("X-IC-Redirect")) {
      log(elt, "X-IC-Redirect: redirecting to " + xhr.getResponseHeader("X-IC-Redirect"), "DEBUG");
      window.location = xhr.getResponseHeader("X-IC-Redirect");
    }

    if (xhr.getResponseHeader("X-IC-CancelPolling") == "true") {
      cancelPolling(elt.closest(getICAttributeSelector('ic-poll')));
    }

    if (xhr.getResponseHeader("X-IC-ResumePolling") == "true") {
      var pollingElt = elt.closest(getICAttributeSelector('ic-poll'));
      setICAttribute(pollingElt, 'ic-pause-polling', null);
      startPolling(pollingElt);
    }

    if (xhr.getResponseHeader("X-IC-SetPollInterval")) {
      var pollingElt = elt.closest(getICAttributeSelector('ic-poll'));
      cancelPolling(pollingElt);
      setICAttribute(pollingElt, 'ic-poll', xhr.getResponseHeader("X-IC-SetPollInterval"));
      startPolling(pollingElt);
    }

    if (xhr.getResponseHeader("X-IC-Open")) {
      log(elt, "X-IC-Open: opening " + xhr.getResponseHeader("X-IC-Open"), "DEBUG");
      window.open(xhr.getResponseHeader("X-IC-Open"));
    }

    var triggerValue = xhr.getResponseHeader("X-IC-Trigger");
    if (triggerValue) {
      log(elt, "X-IC-Trigger: found trigger " + triggerValue, "DEBUG");
      target = getTarget(elt);
      // Deprecated API
      if (xhr.getResponseHeader("X-IC-Trigger-Data")) {
        var triggerArgs = $.parseJSON(xhr.getResponseHeader("X-IC-Trigger-Data"));
        triggerEvent(target, triggerValue, triggerArgs);
      } else {
        if (triggerValue.indexOf("{") >= 0) {
          $.each($.parseJSON(triggerValue), function(event, args) {
            triggerEvent(target, event, args);
          });
        } else {
          triggerEvent(target, triggerValue, []);
        }
      }
    }

    var localVars = xhr.getResponseHeader("X-IC-Set-Local-Vars");
    if (localVars) {
      $.each($.parseJSON(localVars), function(key, val) {
        localStorage.setItem(key, val);
      });
    }

    if (xhr.getResponseHeader("X-IC-Remove")) {
      if (elt) {
        var removeVal = xhr.getResponseHeader("X-IC-Remove");
        removeVal += ''; // normalize as string for zapto
        var removeValAsInterval = parseInterval(removeVal);
        log(elt, "X-IC-Remove header found.", "DEBUG");
        target = getTarget(elt);
        if(removeVal == "true" || removeValAsInterval == null) {
          remove(target);
        } else {
          target.addClass('ic-removing');
          setTimeout(function () {
            remove(target);
          }, removeValAsInterval);
        }
      }
    }

    triggerEvent(elt, "afterHeaders.ic", [elt, xhr]);

    return true;
  }


  function beforeRequest(elt) {
    elt.addClass('disabled');
    elt.addClass('ic-request-in-flight');
    elt.data('ic-request-in-flight', true);
  }

  function requestCleanup(indicator, globalIndicator, elt) {
    if (indicator.length > 0) {
      hideIndicator(indicator);
    }
    if (globalIndicator.length > 0) {
      hideIndicator(globalIndicator);
    }
    elt.removeClass('disabled');
    elt.removeClass('ic-request-in-flight');
    elt.data('ic-request-in-flight', false);
    if (elt.data('ic-next-request')) {
      elt.data('ic-next-request')["req"]();
      elt.data('ic-next-request', null);
    }
  }

  function replaceOrAddMethod(data, actualMethod) {
    if ($.type(data) === "string") {
      var regex = /(&|^)_method=[^&]*/;
      var content = "&_method=" + actualMethod;
      if (regex.test(data)) {
        return data.replace(regex, content)
      } else {
        return data + content;
      }
    } else {
      data.append("_method", actualMethod);
      return data;
    }
  }

  /*
    Is the provided text a valid JavaScript identifier path?

    We should also probably check if an identifier is a JavaScript keyword here.
  */
  function isIdentifier(txt) {
    return /^[$A-Z_][0-9A-Z_$]*$/i.test(txt);
  }

  /*
    Evaluate a script snippet provided by the user.

    script: A string. If this is an identifier, it is assumed to be a callable, retrieved from the
    global namespace, and called. If it is a compound statement, it is evaluated using eval.
    args: A list of [name, value] tuples. These will be injected into the namespace of evaluated
    scripts, and be passed as arguments to safe evaluations.
  */
  // It would be nice to use the spread operator here globalEval(script, ...args) - but it breaks
  // uglify and isn't supported in some older browsers.
  function globalEval(script, args) {
    var names = [];
    var values = [];
    if (args) {
      for (var i = 0; i < args.length; i++) {
        names.push(args[i][0]);
        values.push(args[i][1]);
      }
    }
    if (isIdentifier(script)) {
      return window[script].apply(this, values);
    } else {
      var outerfunc  = window["eval"].call(
        window,
        '(function (' + names.join(", ") + ') {' + script + '})'
      );
      return outerfunc.apply(this, values);
    }
  }

  function closestAttrValue(elt, attr) {
    var closestElt = $(elt).closest(getICAttributeSelector(attr));
    if (closestElt.length > 0) {
      return getICAttribute(closestElt, attr);
    } else {
      return null;
    }
  }

  function formatError(e) {
    var msg = e.toString() + "\\n";
    try {
      msg += e.stack;
    } catch (e) {
      // ignore
    }
    return msg;
  }

  function getLocalURL(baseURL, paramsToPush, data) {
    if (paramsToPush) {
      baseURL = baseURL + "?";
      var vars = {};
      data.replace(/([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
      });
      $(paramsToPush.split(",")).each(function(index) {
        var param = $.trim(this);
        var value = vars[param] || "";
        baseURL += (index == 0) ? "" : "&";
        baseURL += param + "=" + value;
      });
    }
    return baseURL;
  }

  function handleRemoteRequest(elt, type, url, data, success) {

    beforeRequest(elt);

    data = replaceOrAddMethod(data, type);

    // Global spinner support
    var globalIndicator = findGlobalIndicator(elt);
    if (globalIndicator && globalIndicator.length > 0) {
      showIndicator(globalIndicator);
    }

    // Spinner support
    var indicator = findIndicator(elt);
    if (indicator.length > 0) {
      showIndicator(indicator);
    }

    var requestId = uuid();
    var requestStart = new Date();
    var actualRequestType;
    if(USE_ACTUAL_HTTP_METHOD) {
      actualRequestType = type;
    } else {
      actualRequestType = type == 'GET' ? 'GET' : 'POST';
    }

    var ajaxSetup = {
      type: actualRequestType,
      url: url,
      data: data,
      dataType: 'text',
      headers: {
        "Accept": "text/html-partial, */*; q=0.9",
        "X-IC-Request": true,
        "X-HTTP-Method-Override": type
      },
      beforeSend: function(xhr, settings) {
        triggerEvent(elt, "beforeSend.ic", [elt, data, settings, xhr, requestId]);
        log(elt, "before AJAX request " + requestId + ": " + type + " to " + url, "DEBUG");
        var onBeforeSend = closestAttrValue(elt, 'ic-on-beforeSend');
        if (onBeforeSend) {
          globalEval(onBeforeSend, [["elt", elt], ["data", data], ["settings", settings], ["xhr", xhr]]);
        }
        maybeInvokeLocalAction(elt, "-beforeSend");
      },
      success: function(responseData, textStatus, xhr) {
        triggerEvent(elt, "success.ic", [elt, responseData, textStatus, xhr, requestId]);
        log(elt, "AJAX request " + requestId + " was successful.", "DEBUG");
        var onSuccess = closestAttrValue(elt, 'ic-on-success');
        if (onSuccess) {
          if (globalEval(onSuccess, [["elt", elt], ["data", responseData], ["textStatus", textStatus], ["xhr", xhr]]) == false) {
            return;
          }
        }

        var beforeHeaders = new Date();
        var oldTitle = document.title;
        try {
          if (processHeaders(elt, xhr)) {
            log(elt, "Processed headers for request " + requestId + " in " + (new Date() - beforeHeaders) + "ms", "DEBUG");
            var beforeSuccess = new Date();

            if (xhr.getResponseHeader("X-IC-PushURL") || closestAttrValue(elt, 'ic-push-url') == "true") {
              try {
                requestCleanup(indicator, globalIndicator, elt); // clean up before snap-shotting HTML
                var baseURL = closestAttrValue(elt, 'ic-src');
                var paramsToPush = closestAttrValue(elt, 'ic-push-params');
                var newUrl = xhr.getResponseHeader("X-IC-PushURL") || getLocalURL(baseURL, paramsToPush, data);
                if(_history) {
                  _history.snapshotForHistory(newUrl, oldTitle);
                } else {
                  throw "History support not enabled";
                }
              } catch (e) {
                log(elt, "Error during history snapshot for " + requestId + ": " + formatError(e), "ERROR");
              }
            }

            success(responseData, textStatus, elt, xhr);

            log(elt, "Process content for request " + requestId + " in " + (new Date() - beforeSuccess) + "ms", "DEBUG");
          }
          triggerEvent(elt, "after.success.ic", [elt, responseData, textStatus, xhr, requestId]);
          maybeInvokeLocalAction(elt, "-success");
        } catch (e) {
          log(elt, "Error processing successful request " + requestId + " : " + formatError(e), "ERROR");
        }
      },
      error: function(xhr, status, str) {
        triggerEvent(elt, "error.ic", [elt, status, str, xhr]);
        var onError = closestAttrValue(elt, 'ic-on-error');
        if (onError) {
          globalEval(onError, [["elt", elt], ["status", status], ["str", str], ["xhr", xhr]]);
        }
        processHeaders(elt, xhr);
        maybeInvokeLocalAction(elt, "-error");
        log(elt, "AJAX request " + requestId + " to " + url + " experienced an error: " + str, "ERROR");
      },
      complete: function(xhr, status) {
        log(elt, "AJAX request " + requestId + " completed in " + (new Date() - requestStart) + "ms", "DEBUG");
        requestCleanup(indicator, globalIndicator, elt);
        try {
          if ($.contains(document, elt[0])) {
            triggerEvent(elt, "complete.ic", [elt, data, status, xhr, requestId]);
          } else {
            triggerEvent($('body'), "complete.ic", [elt, data, status, xhr, requestId]);
          }
        } catch (e) {
          log(elt, "Error during complete.ic event for " + requestId + " : " + formatError(e), "ERROR");
        }
        var onComplete = closestAttrValue(elt, 'ic-on-complete');
        if (onComplete) {
          globalEval(onComplete, [["elt", elt], ["xhr", xhr], ["status", status]]);
        }
        maybeInvokeLocalAction(elt, "-complete");
      }
    };
    if ($.type(data) != "string") {
      ajaxSetup.dataType = null;
      ajaxSetup.processData = false;
      ajaxSetup.contentType = false;
    }

    triggerEvent($(document), "beforeAjaxSend.ic", [ajaxSetup, elt]);

    if(ajaxSetup.cancel) {
      requestCleanup(indicator, globalIndicator, elt);
    } else {
      $.ajax(ajaxSetup)
    }
  }

  function findGlobalIndicator(elt) {
    var indicator = $([]);
    elt = $(elt);
    var attr = closestAttrValue(elt, 'ic-global-indicator');
    if (attr && attr !== "false") {
      indicator = $(attr).first();
    }
    return indicator;
  }

  function findIndicator(elt) {
    var indicator = $([]);
    elt = $(elt);
    if (getICAttribute(elt, 'ic-indicator')) {
      indicator = $(getICAttribute(elt, 'ic-indicator')).first();
    } else {
      indicator = elt.find(".ic-indicator").first();
      if (indicator.length == 0) {
        var parent = closestAttrValue(elt, 'ic-indicator');
        if (parent) {
          indicator = $(parent).first();
        } else {
          if (elt.next().is('.ic-indicator')) {
            indicator = elt.next();
          }
        }
      }
    }
    return indicator;
  }

  function processIncludes(data, str) {
    if ($.trim(str).indexOf("{") == 0) {
      var obj = $.parseJSON(str);
      $.each(obj, function(name, value) {
        data = appendData(data, name, value);
      });
    } else {
      $(str).each(function() {
        var obj = $(this).serializeArray();
        $.each(obj, function(i, input) {
          data = appendData(data, input.name, input.value);
        });
      });
    }
    return data;
  }

  function processLocalVars(data, str) {
    $(str.split(",")).each(function() {
      var key = $.trim(this);
      var item = localStorage.getItem(key);
      if(item) {
        data = appendData(data, key, item);
      }
    });
    return data;
  }

  function appendData(data, key, value) {
    if ($.type(data) === "string") {
      if($.type(value) !== "string") {
        value = JSON.stringify(value);
      }
      return data + "&" + key + "=" + encodeURIComponent(value);
    } else {
      data.append(key, value);
      return data;
    }
  }

  function getParametersForElement(verb, elt, triggerOrigin) {
    var target = getTarget(elt);
    var data = null;

    if (elt.is('form') && elt.attr('enctype') == 'multipart/form-data') {
      data = new FormData(elt[0]);
      data = appendData(data, 'ic-request', true);
    } else {
      data = "ic-request=true";
      // if the element is in a form, include the entire form
      var closestForm = elt.closest('form');
      if (elt.is('form') || (verb != "GET" && closestForm.length > 0)) {
        data += "&" + closestForm.serialize();
        // include data from a focused button (to capture clicked button value)
        var buttonData = elt.data('ic-last-clicked-button');
        if(buttonData) {
          data = appendData(data, buttonData.name, buttonData.value);
        }
      } else { // otherwise include the element
        data += "&" + elt.serialize();
      }
    }

    var promptText = closestAttrValue(elt, 'ic-prompt');
    if (promptText) {
      var promptVal = prompt(promptText);
      if (promptVal) {
        var promptParamName = closestAttrValue(elt, 'ic-prompt-name') || 'ic-prompt-value';
        data = appendData(data, promptParamName, promptVal);
      } else {
        return null;
      }
    }

    if (elt.attr('id')) {
      data = appendData(data, 'ic-element-id', elt.attr('id'));
    }
    if (elt.attr('name')) {
      data = appendData(data, 'ic-element-name', elt.attr('name'));
    }
    if (getICAttribute(target, 'ic-id')) {
      data = appendData(data, 'ic-id', getICAttribute(target, 'ic-id'));
    }
    if (target.attr('id')) {
      data = appendData(data, 'ic-target-id', target.attr('id'));
    }
    if (triggerOrigin && triggerOrigin.attr('id')) {
      data = appendData(data, 'ic-trigger-id', triggerOrigin.attr('id'));
    }
    if (triggerOrigin && triggerOrigin.attr('name')) {
      data = appendData(data, 'ic-trigger-name', triggerOrigin.attr('name'));
    }
    var includeAttr = closestAttrValue(elt, 'ic-include');
    if (includeAttr) {
      data = processIncludes(data, includeAttr);
    }
    var localVars = closestAttrValue(elt, 'ic-local-vars');
    if (localVars) {
      data = processLocalVars(data, localVars);
    }
    $(getICAttributeSelector('ic-global-include')).each(function() {
      data = processIncludes(data, getICAttribute($(this), 'ic-global-include'));
    });
    data = appendData(data, 'ic-current-url', currentUrl());

    var selectFromResp = closestAttrValue(elt, 'ic-select-from-response');
    if(selectFromResp) {
      data = appendData(data, 'ic-select-from-response', selectFromResp);
    }

    log(elt, "request parameters " + data, "DEBUG");

    return data;
  }

  function maybeSetIntercoolerInfo(elt) {
    var target = getTarget(elt);
    getIntercoolerId(target);
    if (elt.data('elementAdded.ic') != true) {
      elt.data('elementAdded.ic', true);
      triggerEvent(elt, "elementAdded.ic");
    }
  }

  function getIntercoolerId(elt) {
    if (!getICAttribute(elt, 'ic-id')) {
      setICAttribute(elt, 'ic-id', uuid());
    }
    return getICAttribute(elt, 'ic-id');
  }

  //============================================================
  // Tree Processing
  //============================================================

  function processNodes(elt) {
    elt = $(elt);
    if (elt.length > 1) {
      elt.each(function() {
        processNodes(this);
      });
    } else {
      processMacros(elt);
      processEnhancement(elt);
      processSources(elt);
      processPolling(elt);
      processEventSources(elt);
      processTriggerOn(elt);
      processRemoveAfter(elt);
      processAddClasses(elt);
      processRemoveClasses(elt);
    }
  }

  function fireReadyStuff(elt) {
    triggerEvent(elt, 'nodesProcessed.ic');
    $.each(_readyHandlers, function(i, handler) {
      try {
        handler(elt);
      } catch (e) {
        log(elt, formatError(e), "ERROR");
      }
    });
  }

  function autoFocus(elt) {
    elt.find('[autofocus]').last().focus();
  }

  function processMacros(elt) {
    $.each(_MACROS, function(i, macro) {
      if (elt.closest('.ic-ignore').length == 0) {
        if (elt.is('[' + macro + ']')) {
          processMacro(macro, elt);
        }
        elt.find('[' + macro + ']').each(function() {
          var _this = $(this);
          if (_this.closest('.ic-ignore').length == 0) {
            processMacro(macro, _this);
          }
        });
      }
    });
  }

  function processSources(elt) {
    if (elt.closest('.ic-ignore').length == 0) {
      if (elt.is(getICAttributeSelector("ic-src"))) {
        maybeSetIntercoolerInfo(elt);
      }
      elt.find(getICAttributeSelector("ic-src")).each(function() {
        var _this = $(this);
        if (_this.closest('.ic-ignore').length == 0) {
          maybeSetIntercoolerInfo(_this);
        }
      });
    }
  }

  function processPolling(elt) {
    if (elt.closest('.ic-ignore').length == 0) {
      if (elt.is(getICAttributeSelector("ic-poll"))) {
        maybeSetIntercoolerInfo(elt);
        startPolling(elt);
      }
      elt.find(getICAttributeSelector("ic-poll")).each(function() {
        var _this = $(this);
        if (_this.closest('.ic-ignore').length == 0) {
          maybeSetIntercoolerInfo(_this);
          startPolling(_this);
        }
      });
    }
  }

  function processTriggerOn(elt) {
    if (elt.closest('.ic-ignore').length == 0) {
      handleTriggerOn(elt);
      elt.find(getICAttributeSelector('ic-trigger-on')).each(function() {
        var _this = $(this);
        if (_this.closest('.ic-ignore').length == 0) {
          handleTriggerOn(_this);
        }
      });
    }
  }

  function processRemoveAfter(elt) {
    if (elt.closest('.ic-ignore').length == 0) {
      handleRemoveAfter(elt);
      elt.find(getICAttributeSelector('ic-remove-after')).each(function() {
        var _this = $(this);
        if (_this.closest('.ic-ignore').length == 0) {
          handleRemoveAfter(_this);
        }
      });
    }
  }

  function processAddClasses(elt) {
    if (elt.closest('.ic-ignore').length == 0) {
      handleAddClasses(elt);
      elt.find(getICAttributeSelector('ic-add-class')).each(function() {
        var _this = $(this);
        if (_this.closest('.ic-ignore').length == 0) {
          handleAddClasses(_this);
        }
      });
    }
  }

  function processRemoveClasses(elt) {
    if (elt.closest('.ic-ignore').length == 0) {
      handleRemoveClasses(elt);
      elt.find(getICAttributeSelector('ic-remove-class')).each(function() {
        var _this = $(this);
        if (_this.closest('.ic-ignore').length == 0) {
          handleRemoveClasses(_this);
        }
      });
    }
  }

  function processEnhancement(elt) {
    if (elt.closest('.ic-ignore').length == 0) {
      if(closestAttrValue(elt, 'ic-enhance') === 'true') {
        enhanceDomTree(elt);
      } else {
        elt.find(getICAttributeSelector('ic-enhance')).each(function(){
          enhanceDomTree($(this));
        });
      }
    }
  }

  function processEventSources(elt) {
    if (elt.closest('.ic-ignore').length == 0) {
      handleEventSource(elt);
      elt.find(getICAttributeSelector('ic-sse-src')).each(function() {
        var _this = $(this);
        if (_this.closest('.ic-ignore').length == 0) {
          handleEventSource(_this);
        }
      });
    }
  }

  //============================================================
  // Polling support
  //============================================================

  function startPolling(elt) {
    if (elt.data('ic-poll-interval-id') == null && getICAttribute(elt, 'ic-pause-polling') != 'true') {
      var interval = parseInterval(getICAttribute(elt, 'ic-poll'));
      if (interval != null) {
        var selector = icSelectorFor(elt);
        var repeats = parseInt(getICAttribute(elt, 'ic-poll-repeats')) || -1;
        var currentIteration = 0;
        log(elt, "POLL: Starting poll for element " + selector, "DEBUG");
        var timerId = setInterval(function() {
          var target = $(selector);
          triggerEvent(elt, "onPoll.ic", target);
          if ((target.length == 0) || (currentIteration == repeats) || elt.data('ic-poll-interval-id') != timerId) {
            log(elt, "POLL: Clearing poll for element " + selector, "DEBUG");
            clearTimeout(timerId);
          } else {
            fireICRequest(target);
          }
          currentIteration++;
        }, interval);
        elt.data('ic-poll-interval-id', timerId);
      }
    }
  }

  function cancelPolling(elt) {
    if (elt.data('ic-poll-interval-id') != null) {
      clearTimeout(elt.data('ic-poll-interval-id'));
      elt.data('ic-poll-interval-id', null);
    }
  }

  //============================================================----
  // Dependency support
  //============================================================----

  function refreshDependencies(dest, src) {
    log(src, "refreshing dependencies for path " + dest, "DEBUG");
    $(getICAttributeSelector('ic-src')).each(function() {
      var fired = false;
      var _this = $(this);
      if (verbFor(_this) == "GET" && getICAttribute(_this, 'ic-deps') != 'ignore' ) {
        if (isDependent(dest, getICAttribute(_this, 'ic-src'))) {
          if (src == null || $(src)[0] != _this[0]) {
            fireICRequest(_this);
            fired = true;
          }
        } else if (isICDepsDependent(dest, getICAttribute(_this, 'ic-deps')) || getICAttribute(_this, 'ic-deps') == "*") {
          if (src == null || $(src)[0] != _this[0]) {
            fireICRequest(_this);
            fired = true;
          }
        }
      }
      if (fired) {
        log(_this, "depends on path " + dest + ", refreshing...", "DEBUG")
      }
    });
  }

  function isICDepsDependent(src, dest) {
    if(dest) {
      var paths = dest.split(",");
      for (var i = 0; i < paths.length; i++) {
        var str = paths[i].trim();
        if(isDependent(src, str)) {
          return true;
        }
      }
    }
    return false;
  }

  function isDependent(src, dest) {
    return !!_isDependentFunction(src, dest);
  }

  //============================================================----
  // Trigger-On support
  //============================================================----

  function verbFor(elt) {
    elt = $(elt);
    if (getICAttribute(elt, 'ic-verb')) {
      return getICAttribute(elt, 'ic-verb').toUpperCase();
    }
    return "GET";
  }

  function eventFor(attr, elt) {
    if (attr == "default") {
      elt = $(elt);
      if (elt.is('button')) {
        return 'click';
      } else if (elt.is('form')) {
        return 'submit';
      } else if (elt.is('input, textarea, select, button')) {
        return 'change';
      } else {
        return 'click';
      }
    } else {
      return attr;
    }
  }

  function preventDefault(elt, evt) {
    return elt.is('form') ||
          (elt.is('input[type="submit"], button') && elt.closest('form').length == 1) ||
          (elt.is('a') && elt.is('[href]') && elt.attr('href').indexOf('#') != 0);
  }

  function handleRemoveAfter(elt) {
    elt = $(elt);
    if (getICAttribute(elt, 'ic-remove-after')) {
      var interval = parseInterval(getICAttribute(elt, 'ic-remove-after'));
      setTimeout(function() {
        remove(elt);
      }, interval);
    }
  }

  function parseAndApplyClass(classInfo, elt, operation) {
    var cssClass = "";
    var delay = 50;
    if (classInfo.indexOf(":") > 0) {
      var split = classInfo.split(':');
      cssClass = split[0];
      delay = parseInterval(split[1]);
    } else {
      cssClass = classInfo;
    }
    setTimeout(function() {
      elt[operation](cssClass)
    }, delay);
  }

  function handleAddClasses(elt) {
    elt = $(elt);
    if (getICAttribute(elt, 'ic-add-class')) {
      var values = getICAttribute(elt, 'ic-add-class').split(",");
      var arrayLength = values.length;
      for (var i = 0; i < arrayLength; i++) {
        parseAndApplyClass($.trim(values[i]), elt, 'addClass');
      }
    }
  }

  function handleRemoveClasses(elt) {
    elt = $(elt);
    if (getICAttribute(elt, 'ic-remove-class')) {
      var values = getICAttribute(elt, 'ic-remove-class').split(",");
      var arrayLength = values.length;
      for (var i = 0; i < arrayLength; i++) {
        parseAndApplyClass($.trim(values[i]), elt, 'removeClass');
      }
    }
  }

  function handleEventSource(elt) {
    elt = $(elt);
    if (getICAttribute(elt, 'ic-sse-src')) {
      var evtSrcUrl = getICAttribute(elt, 'ic-sse-src');
      var evtSrcWithCredentials = getICAttribute(elt, 'ic-sse-with-credentials') === 'true';
      var eventSource = initEventSource(elt, evtSrcUrl, evtSrcWithCredentials);
      elt.data('ic-event-sse-source', eventSource);
      elt.data('ic-event-sse-map', {});
    }
  }

  function initEventSource(elt, evtSrcUrl, evtSrcWithCredentials) {
    var eventSource = Intercooler._internal.initEventSource(evtSrcUrl, evtSrcWithCredentials);
    eventSource.onmessage = function(e) {
      processICResponse(e.data, elt, false);
    };
    return eventSource;
  }

  function registerSSE(sourceElement, event) {
    var source = sourceElement.data('ic-event-sse-source');
    var eventMap = sourceElement.data('ic-event-sse-map');
    if(source.addEventListener && eventMap[event] != true) {
      source.addEventListener(event, function(){
        sourceElement.find(getICAttributeSelector('ic-trigger-on')).each(function(){
          var _that = $(this);
          if(_that.attr('ic-trigger-on') == "sse:" + event) {
            fireICRequest(_that);
          }
        });
      })
    }
  }

  function getTriggeredElement(elt) {
    var triggerFrom = getICAttribute(elt, 'ic-trigger-from');
    if(triggerFrom) {
      if (triggerFrom == "document") {
        return $(document);
      } else if (triggerFrom == "window") {
        return $(window);
      } else {
        return $(triggerFrom);
      }
    } else {
      return elt;
    }
  }

  function handleTriggerOn(elt) {

    var triggerOnValue = getICAttribute(elt, 'ic-trigger-on');
    if (triggerOnValue) {
      // record button or submit input click info
      if(elt.is('form')) {
        elt.on('click focus', 'input, button, select, textarea', function(e){
          if($(this).is('input[type="submit"], button') && $(this).is("[name]")) {
            elt.data('ic-last-clicked-button', {name:$(this).attr("name"), value:$(this).val()})
          } else {
            elt.data('ic-last-clicked-button', null)
          }
        });
      }
      var triggerOnArray = triggerOnValue.split(",");
      for (var i = 0; i < triggerOnArray.length; i++) {
        var triggerOn = $.trim(triggerOnArray[i]);
        var splitTriggerOn = triggerOn.split(" ");
        var eventString = eventFor(splitTriggerOn[0], $(elt));
        var eventModifier = splitTriggerOn[1];

        if (triggerOn == 'load') {
          fireICRequest(elt);
        } else if (triggerOn == 'scrolled-into-view') {
          initScrollHandler();
          setTimeout(function() {
            triggerEvent($(window), 'scroll');
          }, 100); // Trigger a scroll in case element is already viewable
        } else {
          if(eventString.indexOf("sse:") == 0) {
            //Server-sent event, find closest event source and register for it
            var sourceElt = elt.closest(getICAttributeSelector('ic-sse-src'));
            if(sourceElt.length > 0) {
              registerSSE(sourceElt, splitTriggerOn[0].substr(4))
            }
          } else {
            $(getTriggeredElement(elt)).on(eventString, function(e) {
              var onBeforeTrigger = closestAttrValue(elt, 'ic-on-beforeTrigger');
              if (onBeforeTrigger) {
                if (globalEval(onBeforeTrigger, [["elt", elt], ["evt", e], ["elt", elt]]) == false) {
                  log(elt, "ic-trigger cancelled by ic-on-beforeTrigger", "DEBUG");
                  return false;
                }
              }

              if (eventModifier == 'changed') {
                var currentVal = elt.val();
                var previousVal = elt.data('ic-previous-val');
                elt.data('ic-previous-val', currentVal);
                if (currentVal != previousVal) {
                  fireICRequest(elt);
                }
              } else if (eventModifier == 'once') {
                var alreadyTriggered = elt.data('ic-already-triggered');
                elt.data('ic-already-triggered', true);
                if (alreadyTriggered !== true) {
                  fireICRequest(elt);
                }
              } else {
                fireICRequest(elt);
              }
              if (preventDefault(elt, e)) {
                e.preventDefault();
                return false;
              }
              return true;
            });
            if(eventString && (eventString.indexOf("timeout:") == 0)) {
              var timeout = parseInterval(eventString.split(":")[1]);
              setTimeout(function () {
                $(getTriggeredElement(elt)).trigger(eventString);
              }, timeout);
            }
          }
        }
      }
    }
  }

  //============================================================----
  // Macro support
  //============================================================----

  function macroIs(macro, constant) {
    return macro == fixICAttributeName(constant);
  }

  function processMacro(macro, elt) {
    // action attributes
    if (macroIs(macro, 'ic-post-to')) {
      setIfAbsent(elt, 'ic-src', getICAttribute(elt, 'ic-post-to'));
      setIfAbsent(elt, 'ic-verb', 'POST');
      setIfAbsent(elt, 'ic-trigger-on', 'default');
      setIfAbsent(elt, 'ic-deps', 'ignore');
    }
    if (macroIs(macro, 'ic-put-to')) {
      setIfAbsent(elt, 'ic-src', getICAttribute(elt, 'ic-put-to'));
      setIfAbsent(elt, 'ic-verb', 'PUT');
      setIfAbsent(elt, 'ic-trigger-on', 'default');
      setIfAbsent(elt, 'ic-deps', 'ignore');
    }
    if (macroIs(macro, 'ic-patch-to')) {
      setIfAbsent(elt, 'ic-src', getICAttribute(elt, 'ic-patch-to'));
      setIfAbsent(elt, 'ic-verb', 'PATCH');
      setIfAbsent(elt, 'ic-trigger-on', 'default');
      setIfAbsent(elt, 'ic-deps', 'ignore');
    }
    if (macroIs(macro, 'ic-get-from')) {
      setIfAbsent(elt, 'ic-src', getICAttribute(elt, 'ic-get-from'));
      setIfAbsent(elt, 'ic-trigger-on', 'default');
      setIfAbsent(elt, 'ic-deps', 'ignore');
    }
    if (macroIs(macro, 'ic-delete-from')) {
      setIfAbsent(elt, 'ic-src', getICAttribute(elt, 'ic-delete-from'));
      setIfAbsent(elt, 'ic-verb', 'DELETE');
      setIfAbsent(elt, 'ic-trigger-on', 'default');
      setIfAbsent(elt, 'ic-deps', 'ignore');
    }

    if (macroIs(macro, 'ic-action')) {
      setIfAbsent(elt, 'ic-trigger-on', 'default');
    }

    // non-action attributes
    var value = null;
    var url = null;
    if (macroIs(macro, 'ic-style-src')) {
      value = getICAttribute(elt, 'ic-style-src').split(":");
      var styleAttribute = value[0];
      url = value[1];
      setIfAbsent(elt, 'ic-src', url);
      setIfAbsent(elt, 'ic-target', 'this.style.' + styleAttribute);
    }
    if (macroIs(macro, 'ic-attr-src')) {
      value = getICAttribute(elt, 'ic-attr-src').split(":");
      var attribute = value[0];
      url = value[1];
      setIfAbsent(elt, 'ic-src', url);
      setIfAbsent(elt, 'ic-target', 'this.' + attribute);
    }
    if (macroIs(macro, 'ic-prepend-from')) {
      setIfAbsent(elt, 'ic-src', getICAttribute(elt, 'ic-prepend-from'));
      setIfAbsent(elt, 'ic-swap-style', 'prepend');
    }
    if (macroIs(macro, 'ic-append-from')) {
      setIfAbsent(elt, 'ic-src', getICAttribute(elt, 'ic-append-from'));
      setIfAbsent(elt, 'ic-swap-style', 'append');
    }
  }

  function isLocalLink(anchor) {
    return location.hostname === anchor[0].hostname &&
      anchor.attr('href') &&
      !anchor.attr('href').startsWith("#")
  }

  function enhanceAnchor(anchor) {
    if (closestAttrValue(anchor, 'ic-enhance') === "true") {
      if (isLocalLink(anchor)) {
        setIfAbsent(anchor, 'ic-src', anchor.attr('href'));
        setIfAbsent(anchor, 'ic-trigger-on', 'default');
        setIfAbsent(anchor, 'ic-deps', 'ignore');
        setIfAbsent(anchor, 'ic-push-url', 'true');
      }
    }
  }

  function determineFormVerb(form) {
    return form.find('input[name="_method"]').val() || form.attr('method') || form[0].method;
  }

  function enhanceForm(form) {
    if (closestAttrValue(form, 'ic-enhance') === "true") {
      setIfAbsent(form, 'ic-src', form.attr('action'));
      setIfAbsent(form, 'ic-trigger-on', 'default');
      setIfAbsent(form, 'ic-deps', 'ignore');
      setIfAbsent(form, 'ic-verb', determineFormVerb(form));
    }
  }

  function enhanceDomTree(elt) {
    if(elt.is('a')) {
      enhanceAnchor(elt);
    }
    elt.find('a').each(function(){
      enhanceAnchor($(this));
    });
    if(elt.is('form')){
      enhanceForm(elt);
    }
    elt.find('form').each(function(){
      enhanceForm($(this));
    });
  }

  function setIfAbsent(elt, attr, value) {
    if (getICAttribute(elt, attr) == null) {
      setICAttribute(elt, attr, value);
    }
  }

  //============================================================----
  // Utilities
  //============================================================----

  function isScrolledIntoView(elem) {
    elem = $(elem);
    if (elem.height() == 0 && elem.width() == 0) {
      return false;
    }
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function maybeScrollToTarget(elt, target) {
    if (closestAttrValue(elt, 'ic-scroll-to-target') != "false" &&
      (closestAttrValue(elt, 'ic-scroll-to-target') == 'true' ||
        closestAttrValue(target, 'ic-scroll-to-target') == 'true')) {
      var offset = -50; // -50 px default offset padding
      if (closestAttrValue(elt, 'ic-scroll-offset')) {
        offset = parseInt(closestAttrValue(elt, 'ic-scroll-offset'));
      } else if (closestAttrValue(target, 'ic-scroll-offset')) {
        offset = parseInt(closestAttrValue(target, 'ic-scroll-offset'));
      }
      var currentPosition = target.offset().top;
      var portalTop = $(window).scrollTop();
      var portalEnd = portalTop + window.innerHeight;
      //if the current top of this element is not visible, scroll it to the top position
      if (currentPosition < portalTop || currentPosition > portalEnd) {
        offset += currentPosition;
        $('html,body').animate({scrollTop: offset}, 400);
      }
    }
  }

  function getTransitionDuration(elt, target) {
    var transitionDuration = closestAttrValue(elt, 'ic-transition-duration');
    if (transitionDuration) {
      return parseInterval(transitionDuration);
    }
    transitionDuration = closestAttrValue(target, 'ic-transition-duration');
    if (transitionDuration) {
      return parseInterval(transitionDuration);
    }
    target = $(target);
    var duration = 0;
    var durationStr = target.css('transition-duration');
    if (durationStr) {
      duration += parseInterval(durationStr);
    }
    var delayStr = target.css('transition-delay');
    if (delayStr) {
      duration += parseInterval(delayStr);
    }
    return duration;
  }

  function closeSSESource(elt) {
    var src = elt.data('ic-event-sse-source');
    try {
      if(src) {
        src.close();
      }
    } catch (e) {
      log(elt, "Error closing ServerSentEvent source" + e, "ERROR");
    }
  }

  function beforeSwapCleanup(target) {
    target.find(getICAttributeSelector('ic-sse-src')).each(function() {
      closeSSESource($(this));
    });
    triggerEvent(target, 'beforeSwap.ic');
  }

  function processICResponse(responseContent, elt, forHistory, url) {
    if (responseContent && responseContent != "" && responseContent != " ") {

      log(elt, "response content: \\n" + responseContent, "DEBUG");
      var target = getTarget(elt);

      var transformer = closestAttrValue(elt, 'ic-transform-response');
      if(transformer) {
        responseContent = globalEval(transformer, [["content", responseContent], ["url", url], ["elt", elt]]);
      }

      var contentToSwap = maybeFilter(responseContent, closestAttrValue(elt, 'ic-select-from-response'));

      if (closestAttrValue(elt, 'ic-fix-ids') == "true") {
        fixIDs(contentToSwap);
      }

      var doSwap = function() {
        if (closestAttrValue(elt, 'ic-replace-target') == "true") {
          try {
            beforeSwapCleanup(target);
            closeSSESource(target);
            target.replaceWith(contentToSwap);
            target = contentToSwap;
          } catch (e) {
            log(elt, formatError(e), "ERROR");
          }
          processNodes(contentToSwap);
          fireReadyStuff(target);
          autoFocus(target);
        } else {
          if (getICAttribute(elt, 'ic-swap-style') == "prepend") {
            prepend(target, contentToSwap);
            processNodes(contentToSwap);
            fireReadyStuff(target);
            autoFocus(target);
          } else if (getICAttribute(elt, 'ic-swap-style') == "append") {
            append(target, contentToSwap);
            processNodes(contentToSwap);
            fireReadyStuff(target);
            autoFocus(target);
          } else {
            try {
              beforeSwapCleanup(target);
              target.empty().append(contentToSwap);
            } catch (e) {
              log(elt, formatError(e), "ERROR");
            }
            target.children().each(function() {
              processNodes(this);
            });
            fireReadyStuff(target);
            autoFocus(target);
          }
          if (forHistory != true) {
            maybeScrollToTarget(elt, target);
          }

          var switchClass = elt.closest(getICAttributeSelector('ic-switch-class'));
          var classToSwitch = switchClass.attr(fixICAttributeName('ic-switch-class'));
          if(classToSwitch) {
            switchClass.children().removeClass(classToSwitch);
            switchClass.children().each(function(){
              if($.contains($(this)[0], $(elt)[0]) || $(this)[0] == $(elt)[0]) {
                $(this).addClass(classToSwitch);
                $(this).addClass(classToSwitch);
              }
            })
          }

        }
      };

      if (target.length == 0) {
        //TODO cgross - refactor getTarget to return printable string here
        log(elt, "Invalid target for element: " + getICAttribute(elt.closest(getICAttributeSelector('ic-target')), 'ic-target'), "ERROR");
        return;
      }

      var delay = getTransitionDuration(elt, target);
      target.addClass('ic-transitioning');
      setTimeout(function() {
        try {
          doSwap();
        } catch (e) {
          log(elt, "Error during content swap : " + formatError(e), "ERROR");
        }
        setTimeout(function() {
          try {
            target.removeClass('ic-transitioning');
            if(_history) {
              _history.updateHistory();
            }
            triggerEvent(target, "complete_transition.ic", [target]);
          } catch (e) {
            log(elt, "Error during transition complete : " + formatError(e), "ERROR");
          }
        }, 20);
      }, delay);
    } else {
      log(elt, "Empty response, nothing to do here.", "DEBUG");
    }
  }

  function maybeFilter(newContent, filter) {
    var asQuery;
    if ($.zepto) {
      var newDoc = createDocument(newContent);
      asQuery = $(newDoc).find('body').contents();
    } else {
      asQuery = $($.parseHTML(newContent, null, true));
    }
    if (filter) {
      return walkTree(asQuery, filter).contents();
    } else {
      return asQuery;
    }
  }

  function walkTree(elt, filter) {
    return elt.filter(filter).add(elt.find(filter));
  }

  function fixIDs(contentToSwap) {
    var fixedIDs = {};
    walkTree(contentToSwap, "[id]").each(function() {
      var originalID = $(this).attr("id");
      var fixedID;
      do {
        fixedID = "ic-fixed-id-" + uuid();
      } while ($("#" + fixedID).length > 0);
      fixedIDs[originalID] = fixedID;
      $(this).attr("id", fixedID);
    });
    walkTree(contentToSwap, "label[for]").each(function () {
      var originalID = $(this).attr("for");
      $(this).attr("for", fixedIDs[originalID] || originalID);
    });
    walkTree(contentToSwap, "*").each(function () {
      $.each(this.attributes, function () {
        if (this.value.indexOf("#") !== -1) {
          this.value = this.value.replace(/#([-_A-Za-z0-9]+)/g, function(match, originalID) {
            return "#" + (fixedIDs[originalID] || originalID);
          });
        }
      })
    });
  }

  function getStyleTarget(elt) {
    var val = closestAttrValue(elt, 'ic-target');
    if (val && val.indexOf("this.style.") == 0) {
      return val.substr(11)
    } else {
      return null;
    }
  }

  function getAttrTarget(elt) {
    var val = closestAttrValue(elt, 'ic-target');
    if (val && val.indexOf("this.") == 0) {
      return val.substr(5)
    } else {
      return null;
    }
  }

  function fireICRequest(elt, alternateHandler) {
    elt = $(elt);

    var triggerOrigin = elt;
    if (!elt.is(getICAttributeSelector('ic-src')) && getICAttribute(elt, 'ic-action') == undefined) {
      elt = elt.closest(getICAttributeSelector('ic-src'));
    }

    var confirmText = closestAttrValue(elt, 'ic-confirm');
    if (confirmText) {
      if (!confirm(confirmText)) {
        return;
      }
    }

    if("true" == closestAttrValue(elt, 'ic-disable-when-doc-hidden')) {
      if(document['hidden']) {
        return;
      }
    }

    if("true" == closestAttrValue(elt, 'ic-disable-when-doc-inactive')) {
      if(!document.hasFocus()) {
        return;
      }
    }

    if (elt.length > 0) {
      var icEventId = uuid();
      elt.data('ic-event-id', icEventId);
      var invokeRequest = function() {

        // if an existing request is in flight for this element, push this request as the next to be executed
        if (elt.data('ic-request-in-flight') == true) {
          elt.data('ic-next-request', {"req" : invokeRequest});
          return;
        }

        if (elt.data('ic-event-id') == icEventId) {
          var styleTarget = getStyleTarget(elt);
          var attrTarget = styleTarget ? null : getAttrTarget(elt);
          var verb = verbFor(elt);
          var url = getICAttribute(elt, 'ic-src');
          if (url) {
            var success = alternateHandler || function(data) {
              if (styleTarget) {
                elt.css(styleTarget, data);
              } else if (attrTarget) {
                elt.attr(attrTarget, data);
              } else {
                processICResponse(data, elt, false, url);
                if (verb != 'GET') {
                  refreshDependencies(getICAttribute(elt, 'ic-src'), elt);
                }
              }
            };
            var data = getParametersForElement(verb, elt, triggerOrigin);
            if(data) {
              handleRemoteRequest(elt, verb, url, data, success);
            }
          }
          maybeInvokeLocalAction(elt, "");
        }
      };

      var triggerDelay = closestAttrValue(elt, 'ic-trigger-delay');
      if (triggerDelay) {
        setTimeout(invokeRequest, parseInterval(triggerDelay));
      } else {
        invokeRequest();
      }
    }
  }

  function maybeInvokeLocalAction(elt, modifier) {
    var actions = getICAttribute(elt, 'ic' + modifier + '-action');
    if (actions) {
      invokeLocalAction(elt, actions, modifier);
    }
  }

  function invokeLocalAction(elt, actions, modifier) {
    var actionTargetVal = closestAttrValue(elt, 'ic' + modifier + '-action-target');
    if(actionTargetVal === null && modifier !== "") {
      actionTargetVal = closestAttrValue(elt, 'ic-action-target');
    }

    var target = null;
    if(actionTargetVal) {
      target = getTargetImpl(elt, 'ic-action-target');
    } else {
      target = getTarget(elt);
    }
    var actionArr = actions.split(";");

    var actionsArr = [];
    var delay = 0;

    $.each(actionArr, function(i, actionStr) {
      var actionDef = $.trim(actionStr);
      var action = actionDef;
      var actionArgs = [];
      if (actionDef.indexOf(":") > 0) {
        action = actionDef.substr(0, actionDef.indexOf(":"));
        actionArgs = computeArgs(actionDef.substr(actionDef.indexOf(":") + 1, actionDef.length));
      }
      if (action == "") {
        // ignore blanks
      } else if (action == "delay") {
        if (delay == null) {
          delay = 0;
        }
        delay += parseInterval(actionArgs[0] + "");  // custom interval increase
      } else {
        if (delay == null) {
          delay = 420; // 420ms default interval increase (400ms jQuery default + 20ms slop)
        }
        actionsArr.push([delay, makeApplyAction(target, action, actionArgs)]);
        delay = null;
      }
    });

    delay = 0;
    $.each(actionsArr, function(i, action) {
      delay += action[0];
      setTimeout(action[1], delay);
    });
  }

  function computeArgs(args) {
    try {
      return eval("[" + args + "]")
    } catch (e) {
      return [$.trim(args)];
    }
  }

  function makeApplyAction(target, action, args) {
    return function() {
      var func = target[action] || window[action];
      if (func) {
        func.apply(target, args);
      } else {
        log(target, "Action " + action + " was not found", "ERROR");
      }
    };
  }

  //============================================================
  // History Support
  //============================================================

  function newIntercoolerHistory(storage, history, slotLimit, historyVersion) {

    /* Constants */
    var HISTORY_SUPPORT_SLOT = 'ic-history-support';
    var HISTORY_SLOT_PREFIX = "ic-hist-elt-";

    /* Instance Vars */
    var historySupportData = JSON.parse(storage.getItem(HISTORY_SUPPORT_SLOT));
    var _snapshot = null;

    // Reset history if the history config has changed
    if (historyConfigHasChanged(historySupportData)) {
      log(getTargetForHistory($('body')), "Intercooler History configuration changed, clearing history", "INFO");
      clearHistory();
    }

    if (historySupportData == null) {
      historySupportData = {
        slotLimit: slotLimit,
        historyVersion: historyVersion,
        lruList: []
      };
    }

    /* Instance Methods  */
    function historyConfigHasChanged(historySupportData) {
      return historySupportData == null ||
        historySupportData.slotLimit != slotLimit ||
        historySupportData.historyVersion != historyVersion ||
        historySupportData.lruList == null
    }

    function clearHistory() {
      var keys = [];
      for (var i = 0; i < storage.length; i++) {
        if (storage.key(i).indexOf(HISTORY_SLOT_PREFIX) == 0) {
          keys.push(storage.key(i));
        }
      }
      for (var j = 0; j < keys.length; j++) {
        storage.removeItem(keys[j]);
      }
      storage.removeItem(HISTORY_SUPPORT_SLOT);
      historySupportData = {
        slotLimit: slotLimit,
        historyVersion: historyVersion,
        lruList: []
      };
    }

    function updateLRUList(url) {
      var lruList = historySupportData.lruList;
      var currentIndex = lruList.indexOf(url);
      var t = getTargetForHistory($('body'));
      // found in current list, shift it to the end
      if (currentIndex >= 0) {
        log(t, "URL found in LRU list, moving to end", "INFO");
        lruList.splice(currentIndex, 1);
        lruList.push(url);
      } else {
        // not found, add and shift if necessary
        log(t, "URL not found in LRU list, adding", "INFO");
        lruList.push(url);
        if (lruList.length > historySupportData.slotLimit) {
          var urlToDelete = lruList.shift();
          log(t, "History overflow, removing local history for " + urlToDelete, "INFO");
          storage.removeItem(HISTORY_SLOT_PREFIX + urlToDelete);
        }
      }

      // save history metadata
      storage.setItem(HISTORY_SUPPORT_SLOT, JSON.stringify(historySupportData));
      return lruList;
    }

    function saveHistoryData(restorationData) {
      var content = JSON.stringify(restorationData);
      try {
        storage.setItem(restorationData.id, content);
      } catch (e) {
        //quota error, nuke local cache
        try {
          clearHistory();
          storage.setItem(restorationData.id, content);
        } catch (e) {
          log(getTargetForHistory($('body')), "Unable to save intercooler history with entire history cleared, is something else eating " +
            "local storage? History Limit:" + slotLimit, "ERROR");
        }
      }
    }

    function makeHistoryEntry(html, yOffset, url, title) {
      var restorationData = {
        "url": url,
        "id": HISTORY_SLOT_PREFIX + url,
        "content": html,
        "yOffset": yOffset,
        "timestamp": new Date().getTime(),
        "title": title
      };
      updateLRUList(url);
      // save to the history slot
      saveHistoryData(restorationData);
      return restorationData;
    }

    function addPopStateHandler(windowToAdd) {
      if (windowToAdd.onpopstate == null || windowToAdd.onpopstate['ic-on-pop-state-handler'] != true) {
        var currentOnPopState = windowToAdd.onpopstate;
        windowToAdd.onpopstate = function(event) {
          triggerEvent(getTargetForHistory($('body')), 'handle.onpopstate.ic');
          if (!handleHistoryNavigation(event)) {
            if (currentOnPopState) {
              currentOnPopState(event);
            }
          }
          triggerEvent(getTargetForHistory($('body')), 'pageLoad.ic');
        };
        windowToAdd.onpopstate['ic-on-pop-state-handler'] = true;
      }
    }

    function updateHistory() {
      if (_snapshot) {
        pushUrl(_snapshot.newUrl, currentUrl(), _snapshot.oldHtml, _snapshot.yOffset, _snapshot.oldTitle);
        _snapshot = null;
      }
    }

    function pushUrl(newUrl, originalUrl, originalHtml, yOffset, originalTitle) {

      var historyEntry = makeHistoryEntry(originalHtml, yOffset, originalUrl, originalTitle);
      history.replaceState({"ic-id": historyEntry.id}, "", "");

      var t = getTargetForHistory($('body'));
      var restorationData = makeHistoryEntry(t.html(), window.pageYOffset, newUrl, document.title);
      history.pushState({'ic-id': restorationData.id}, "", newUrl);

      triggerEvent(t, "pushUrl.ic", [t, restorationData]);
    }

    function handleHistoryNavigation(event) {
      var data = event.state;
      if (data && data['ic-id']) {
        var historyData = JSON.parse(storage.getItem(data['ic-id']));
        if (historyData) {
          processICResponse(historyData["content"], getTargetForHistory($('body')), true);
          if (historyData["yOffset"]) {
            setTimeout(function () {
              window.scrollTo(0, historyData["yOffset"]);
            }, 100);
          }
          if (historyData["title"]) {
            document.title = historyData["title"];
          }
          return true;
        } else {
          $.get(currentUrl(), {'ic-restore-history': true}, function(data, status) {
            var newDoc = createDocument(data);
            var replacementHtml = getTargetForHistory(newDoc).html();
            processICResponse(replacementHtml, getTargetForHistory($('body')), true);
          });
        }
      }
      return false;
    }

    function getTargetForHistory(elt) {
      var explicitHistoryTarget = elt.find(getICAttributeSelector('ic-history-elt'));
      if (explicitHistoryTarget.length > 0) {
        return explicitHistoryTarget;
      } else {
        return elt;
      }
    }

    function snapshotForHistory(newUrl, oldTitle) {
      var t = getTargetForHistory($('body'));
      triggerEvent(t, "beforeHistorySnapshot.ic", [t]);
      _snapshot = {
        newUrl: newUrl,
        oldHtml: t.html(),
        yOffset: window.pageYOffset,
        oldTitle: oldTitle
      };
    }

    function dumpLocalStorage() {
      var str = "";
      var keys = [];
      for (var x in storage) {
        keys.push(x);
      }
      keys.sort();
      var total = 0;
      for (var i in keys) {
        var size = (storage[keys[i]].length * 2);
        total += size;
        str += keys[i] + "=" + (size / 1024 / 1024).toFixed(2) + " MB\\n";
      }
      return str + "\\nTOTAL LOCAL STORAGE: " + (total / 1024 / 1024).toFixed(2) + " MB";
    }

    function supportData() {
      return historySupportData;
    }

    /* API */
    return {
      clearHistory: clearHistory,
      updateHistory: updateHistory,
      addPopStateHandler: addPopStateHandler,
      snapshotForHistory: snapshotForHistory,
      _internal: {
        addPopStateHandler: addPopStateHandler,
        supportData: supportData,
        dumpLocalStorage: dumpLocalStorage,
        updateLRUList: updateLRUList
      }
    };
  }

  function getSlotLimit() {
    return 20;
  }

  function refresh(val) {
    if (typeof val == 'string' || val instanceof String) {
      refreshDependencies(val);
    } else {
      fireICRequest(val);
    }
    return Intercooler;
  }

  var _history = null;
  try {
    _history = newIntercoolerHistory(localStorage, window.history, getSlotLimit(), .1);
  } catch(e) {
    log($('body'), "Could not initialize history", "WARN");
  }

  //============================================================
  // Local references transport
  //============================================================

  if($.ajaxTransport) {
    $.ajaxTransport("text", function(options, origOptions) {
        if (origOptions.url[0] == "#") {
          var ltAttr = fixICAttributeName("ic-local-");
          var src = $(origOptions.url);
          var rsphdr = [];
          var status = 200;
          var statusText = "OK";
          src.each(function(i, el) {
            $.each(el.attributes, function(j, attr) {
              if (attr.name.substr(0, ltAttr.length) == ltAttr) {
                var lhName = attr.name.substring(ltAttr.length);
                if (lhName == "status") {
                  var statusLine = attr.value.match(/(\\d+)\\s?(.*)/);
                  if (statusLine != null) {
                    status = statusLine[1];
                    statusText = statusLine[2];
                  } else {
                    status = "500";
                    statusText = "Attribute Error";
                  }
                } else {
                  rsphdr.push(lhName + ": " + attr.value);
                }
              }
            });
          });
          var rsp = src.length > 0 ? src.html() : "";
          return {
            send: function(reqhdr, completeCallback) {
              completeCallback(status, statusText, {html: rsp}, rsphdr.join("\\n"));
            },
            abort: function() {
            }
          };
        } else {
          return null;
        }
      }
    );

  }

  //============================================================
  // Bootstrap
  //============================================================

  function init() {
    var elt = $('body');
    processNodes(elt);
    fireReadyStuff(elt);
    if(_history) {
      _history.addPopStateHandler(window);
    }
    if($.zepto) {
      $('body').data('zeptoDataTest', {});
      if(typeof($('body').data('zeptoDataTest')) == "string") {
        log(null,
          "!!!! Please include the data module with Zepto!  Intercooler requires full data support to function !!!!",
          "ERROR")
      }
    }
  }

  $(function() {
    init();
  });

  /* ===================================================
   * API
   * =================================================== */
  return {
    refresh: refresh,
    history: _history,
    triggerRequest: fireICRequest,
    processNodes: processNodes,
    closestAttrValue: closestAttrValue,
    verbFor: verbFor,
    isDependent: isDependent,
    getTarget: getTarget,
    processHeaders: processHeaders,
    startPolling: startPolling,
    cancelPolling: cancelPolling,
    setIsDependentFunction: function(func) {
      _isDependentFunction = func;
    },
    ready: function(readyHandler) {
      _readyHandlers.push(readyHandler);
    },
    _internal: {
      init: init,
      replaceOrAddMethod: replaceOrAddMethod,
      initEventSource: function(url, withCredentials) {
        return new EventSource(url, {withCredentials: withCredentials});
      },
      globalEval: globalEval,
      getLocalURL: getLocalURL
    }
  };
})();

return Intercooler;

}));
`},3054:function(t){t.exports=`'use strict';var pdfflip=pdfflip||{},PRESENTATION=pdfflip;!function(e,t){e.version="1.4.31",e.PAGE_MODE={SINGLE:1,DOUBLE:2,AUTO:null},e.SINGLE_PAGE_MODE={ZOOM:1,BOOKLET:2,AUTO:null},e.CONTROLSPOSITION={HIDDEN:"hide",TOP:"top",BOTTOM:"bottom"},e.DIRECTION={LTR:1,RTL:2},e.CORNERS={TL:"tl",TR:"tr",BL:"bl",BR:"br",L:"l",R:"r",NONE:null},e.SOURCE_TYPE={IMAGE:"image",PDF:"pdf",HTML:"html"},e.DISPLAY_TYPE={WEBGL:"3D",HTML:"2D"},e.PAGE_SIZE={AUTO:0,SINGLE:1,DOUBLEINTERNAL:2};var n,i,o,a,r=e.defaults={webgl:!0,webglShadow:!0,enableSound:!0,height:"100%",autoEnableOutline:!1,autoEnableThumbnail:!1,overwritePDFOutline:!0,downloadEnable:!0,duration:800,direction:e.DIRECTION.LTR,pageMode:e.PAGE_MODE.AUTO,singlePageMode:e.SINGLE_PAGE_MODE.AUTO,backgroundColor:"#fff",forceFit:!0,transparent:!1,hard:"none",openPage:1,annotationClass:"",autoPlay:!0,autoPlayDuration:3e3,autoPlayStart:!1,maxTextureSize:1600,minTextureSize:256,rangeChunkSize:524288,icons:{altnext:"ti-angle-right",altprev:"ti-angle-right",next:"fa fa-chevron-right",prev:"fa fa-chevron-left",end:"ti-angle-double-right",start:"ti-angle-double-left",share:"fa fa-share",help:"ti-help-alt",more:"ti-more-alt",download:"fa fa-file-ppdff-o",zoomin:"ti-zoom-in",zoomout:"ti-zoom-out",fullscreen:"fa fa-arrows-alt",fitscreen:"ti-arrows-corner",thumbnail:"ti-layout-grid2",outline:"ti-menu-alt",close:"ti-close",doublepage:"ti-book",singlepage:"ti-file",sound:"ti-volume",facebook:"ti-facebook",google:"ti-google",twitter:"ti-twitter-alt",mail:"ti-email",play:"ti-control-play",pause:"ti-control-pause"},text:{toggleSound:"Sound",toggleThumbnails:"Thumbnails",toggleOutline:"Contents",previousPage:"Previous Page",nextPage:"Next Page",toggleFullscreen:"Fullscreen",zoomIn:"Zoom In",zoomOut:"Zoom Out",downloadPDFFile:"Download PDF",gotoFirstPage:"First Page",gotoLastPage:"Last Page",play:"AutoPlay On",pause:"AutoPlay Off",share:"Share"},allControls:"startPage,altPrev,pageNumber,altNext,endPage,play,outline,thumbnail,zoomIn,zoomOut,fullScreen,share,download,sound",moreControls:"",hideControls:"",controlsPosition:e.CONTROLSPOSITION.BOTTOM,paddingTop:15,paddingLeft:15,paddingRight:15,paddingBottom:-10,scrollWheel:!0,onCreate:function(e){},onCreateUI:function(e){},onFlip:function(e){},beforeFlip:function(e){},onReady:function(e){},zoomRatio:1.5,pageSize:e.PAGE_SIZE.AUTO,pdfjsSrc:"js/libs/pdf.min.js",pdfjsCompatibilitySrc:"js/libs/compatibility.js",pdfjsWorkerSrc:"js/libs/pdf.worker.min.js",threejsSrc:"js/libs/three.min.js",utilsSrc:"js/libs/utils.min.js",soundFile:"sound/turn.mp3",imagesLocation:"images",imageResourcesPath:"images/pdfjs/",cMapUrl:"cmaps/",enableDebugLog:!1,canvasToBlob:!1,enableAnnotation:!0,pdfRenderQuality:.9,textureLoadFallback:"blank",stiffness:3,backgroundImage:"pflip/background.jpg",pageRatio:null,pixelRatio:window.devicePixelRatio||1,thumbElement:"div",spotLightIntensity:.22,ambientLightColor:"#fff",ambientLightIntensity:.8,shadowOpacity:.08},s="WebKitCSSMatrix"in window||document.body&&"MozPerspective"in document.body.style,l="onmousedown"in window,c=(window,navigator.userAgent),d=e.utils={drag:{left:0,right:1,none:-1},mouseEvents:l?{type:"mouse",start:"mousedown",move:"mousemove",end:"mouseup"}:{type:"touch",start:"touchstart",move:"touchmove",end:"touchend"},html:{div:"<div/>",img:"<img/>",a:"<a>",input:"<input type='text'/>"},toRad:function(e){return e*Math.PI/180},isset:function(e,t){return null==e?t:e},isnull:function(e){return null==e||null==e},toDeg:function(e){return 180*e/Math.PI},transition:function(e,t){return e?t/1e3+"s ease-out":"0s none"},display:function(e){return e?"block":"none"},resetTranslate:function(){return b(0,0)},translateStr:function(e,t){return s?" translate3d("+e+"px,"+t+"px, 0px) ":" translate("+e+"px, "+t+"px) "},httpsCorrection:function(e){var t=window.location;return t.href.indexOf("https://")>-1&&e.indexOf(t.hostname)>-1&&(e=e.replace("http://","https://")),e},resetBoxShadow:function(){return"rgba(0, 0, 0, 0) 0px 0px 20px"},rotateStr:function(e){return" rotateZ("+e+"deg) "},bg:function(e){return"#fff"+y(e)},bgImage:function(e){return null==e||"blank"==e?"":" url("+e+")"},src:function(e){return null!=e?""+e:""},limitAt:function(e,t,n){return e<t?t:e>n?n:e},distOrigin:function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},distPoints:function(e,t,n,i){return Math.sqrt(Math.pow(n-e,2)+Math.pow(i-t,2))},calculateScale:function(e,t){var n=C(e[0].x,e[0].y,e[1].x,e[1].y);return C(t[0].x,t[0].y,t[1].x,t[1].y)/n},getVectorAvg:function(e){return{x:e.map(function(e){return e.x}).reduce(d.sum)/e.length,y:e.map(function(e){return e.y}).reduce(d.sum)/e.length}},sum:function(e,t){return e+t},getTouches:function(e,t){return t=t||{left:0,top:0},Array.prototype.slice.call(e.touches).map(function(e){return{x:e.pageX-t.left,y:e.pageY-t.top}})},angleByDistance:function(e,t){var n=t/2,i=P(e,0,t);return i<n?v(Math.asin(i/n)):90+v(Math.asin((i-n)/n))},log:function(e){1==r.enableDebugLog&&window.console&&console.log(e)},lowerPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},nearestPowerOfTwo:function(e,t){return Math.min(t||2048,Math.pow(2,Math.ceil(Math.log(e)/Math.LN2)))},zoomStops:function(e,t,n,i,o){null==i&&(i=256),null==o&&(o=2048);var a=Math.log(e/i)/Math.log(t);return i*Math.pow(t,null==n?Math.round(a):1==n?Math.ceil(a):Math.floor(a))},extendOptions:function(e,n){return t.extend(!0,{},e,n)},getFullscreenElement:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},hasFullscreenEnabled:function(){return document.fullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled},getBasePage:function(e){return 2*Math.floor(e/2)},loadResources:function(e,t,n){var i=document,o=i.createElement(e),a=i.getElementsByTagName(e)[0];o.async=!0,n&&o.addEventListener("load",function(e){n(null,e)},!1),o.src=t,a.parentNode.insertBefore(o,a)},getScript:function(e,t,n){var i=document.createElement("script"),o=document.body.getElementsByTagName("script")[0];function a(e,o){null!=i&&(o||!i.readyState||/loaded|complete/.test(i.readyState))&&(i.onload=i.onreadystatechange=null,i=null,i=null,o||(t&&t(),t=null,n=null))}i.async=1,i.setAttribute("data-cfasync",!1),null!=o?(o.parentNode.insertBefore(i,o),o=null):document.body.appendChild(i),i.addEventListener("load",a,!1),i.addEventListener("readystatechange",a,!1),i.addEventListener("complete",a,!1),n&&i.addEventListener("error",n,!1),i.src=e+("MS"==R.dom?"?"+Math.random(1):"")},isHardPage:function(e,t,n,i){if(null!=e){if("cover"==e)return 0==t||i&&1==t||t==Math.floor(n/(i?1:2))-(i?0:1);if("all"==e)return!0;var o=(","+e+",").indexOf(","+(2*t+1)+",")>-1,a=(","+e+",").indexOf(","+(2*t+2)+",")>-1;return o||a}return!1},fixMouseEvent:function(e){if(e){var n=e.originalEvent||e;if(n.changedTouches&&n.changedTouches.length>0){var i=t.event.fix(e),o=n.changedTouches[0];return i.clientX=o.clientX,i.clientY=o.clientY,i.pageX=o.pageX,i.touches=n.touches,i.pageY=o.pageY,i.movementX=o.movementX,i.movementY=o.movementY,i}return e}return e},hasWebgl:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}}(),isBookletMode:function(t){return t.pageMode==e.PAGE_MODE.SINGLE&&t.singlePageMode==e.SINGLE_PAGE_MODE.BOOKLET},isRTLMode:function(t){return t.direction==e.DIRECTION.RTL},isMobile:(a=!1,o=c||navigator.vendor||window.opera,(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(o.substr(0,4)))&&(a=!0),a),isIOS:/(iPad|iPhone|iPod)/g.test(c),isSafari:/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||safari.pushNotification).toString(),prefix:(n=window.getComputedStyle(document.documentElement,""),i=Array.prototype.slice.call(n).join("").match(/-(moz|webkit|ms)-/)[1],{dom:"WebKit|Moz|MS".match(new RegExp("("+i+")","i"))[1],lowercase:i,css:"-"+i+"-",js:i[0].toUpperCase()+i.substr(1)}),__extends:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super=t.prototype,e}},u=e.SOURCE_TYPE,p=(e.DISPLAY_TYPE,d.drag),h=d.mouseEvents,f=d.html,g=d.isset,m=(d.isnull,d.toRad),v=d.toDeg,b=(d.transition,d.translateStr),w=(d.resetBoxShadow,d.rotateStr),y=(d.bg,d.bgImage),P=(d.src,d.limitAt),x=d.distOrigin,C=d.distPoints,E=d.angleByDistance,S=d.log,k=d.nearestPowerOfTwo,T=d.extendOptions,L=d.getBasePage,O=d.getScript,I=d.fixMouseEvent,R=d.prefix,M=d.isBookletMode,D=d.isRTLMode,F=d.isMobile,z=d.hasWebgl,N=d.isSafari,A=d.isIOS,B=d.__extends;!function(){if(window.CanvasPixelArray)"function"!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(e){for(var t=0,n=this.length;t<n;t++)this[t]=e[t]});else{var e,t=!1;if(N&&(t=(e=c.match(/Version\\/([0-9]+)\\.([0-9]+)\\.([0-9]+) Safari\\//))&&parseInt(e[1])<6),t){var n=window.CanvasRenderingContext2D.prototype,i=n.createImageData;n.createImageData=function(e,t){var n=i.call(this,e,t);return n.data.set=function(e){for(var t=0,n=this.length;t<n;t++)this[t]=e[t]},n},n=null}}}(),"requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,20)}),function(){if("undefined"!=typeof Uint8Array)return void 0===Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(e,t){return new Uint8Array(this.slice(e,t))},Float32Array.prototype.subarray=function(e,t){return new Float32Array(this.slice(e,t))}),void("undefined"==typeof Float64Array&&(window.Float64Array=Float32Array));function e(e,t){return new n(this.slice(e,t))}function t(e,t){arguments.length<2&&(t=0);for(var n=0,i=e.length;n<i;++n,++t)this[t]=255&e[n]}function n(n){var i,o,a;if("number"==typeof n)for(i=[],o=0;o<n;++o)i[o]=0;else if("slice"in n)i=n.slice(0);else for(i=[],o=0,a=n.length;o<a;++o)i[o]=n[o];return i.subarray=e,i.buffer=i,i.byteLength=i.length,i.set=t,"object"==typeof n&&n.buffer&&(i.buffer=n.buffer),i}window.Uint8Array=n,window.Int8Array=n,window.Uint32Array=n,window.Int32Array=n,window.Uint16Array=n,window.Float32Array=n,window.Float64Array=n}();var j=function(n,i){var o="pdff-ui",a="pdff-ui-wrapper",r=o+"-btn",s=i.ui=t(f.div,{class:o}),l=i.options;s.dispose=function(){n.find("."+r).each(function(){t(this).off()}),y.off(),u.off(),p.off(),h.off(),g.off(),m.off(),v.off(),b.off(),P.off(),x.off(),T.off(),L.off(),I.off(),R.off(),M.off(),D.off(),F.off(),z.off(),N.off(),A.off(),O.remove(),w.remove(),p.remove(),u.remove(),g.remove(),s.shareBox&&(s.shareBox.dispose&&s.shareBox.dispose(),s.shareBox=null),document.removeEventListener("keyup",X,!1),window.removeEventListener("click",C,!1),s.update=null,i=null};var c=function(e){return isNaN(e)?e=i.target._activePage:e<1?e=1:e>i.target.pageCount&&(e=i.target.pageCount),e},u=s.next=t(f.div,{class:r+" "+o+"-next "+l.icons.next,title:l.text.nextPage,html:"<span>"+l.text.nextPage+"</span>"}).on("click",function(){i.next()}),p=s.prev=t(f.div,{class:r+" "+o+"-prev "+l.icons.prev,title:l.text.previousPage,html:"<span>"+l.text.previousPage+"</span>"}).on("click",function(){i.prev()}),h=t(f.div,{class:r+" "+o+"-play "+l.icons.play,title:l.text.play,html:"<span>"+l.text.play+"</span>"}).on("click",function(){var e=t(this);i.setAutoPlay(!e.hasClass(l.icons.pause))});1==l.autoPlay&&(s.play=h,i.setAutoPlay(l.autoPlayStart));var g=t(f.div,{class:a+" "+o+"-zoom"}),m=s.zoomIn=t(f.div,{class:r+" "+o+"-zoomin "+l.icons.zoomin,title:l.text.zoomIn,html:"<span>"+l.text.zoomIn+"</span>"}).on("click",function(){i.zoom(1),s.update(),i.target.startPoint&&i.target.pan&&i.target.pan(i.target.startPoint)}),v=s.zoomOut=t(f.div,{class:r+" "+o+"-zoomout "+l.icons.zoomout,title:l.text.zoomOut,html:"<span>"+l.text.zoomOut+"</span>"}).on("click",function(){i.zoom(-1),s.update(),i.target.startPoint&&i.target.pan&&i.target.pan(i.target.startPoint)});g.append(m).append(v);var b=s.pageNumber=t(f.div,{class:r+" "+o+"-page"}).on("change",function(){var e=parseInt(s.pageInput.val(),10);e=c(e),i.gotoPage(e)}).on("keyup",function(e){if(13==e.keyCode){var t=parseInt(s.pageInput.val(),10);(t=c(t))!==c(i.target._activePage||i._activePage)&&i.gotoPage(t)}});s.pageInput=t('<input id="df_book_page_number" type="text"/>').appendTo(b),s.pageLabel=t('<label for="df_book_page_number"/>').appendTo(b);var w=t(f.div,{class:a+" "+o+"-size"}),y=t(f.div,{class:r+" "+o+"-help "+l.icons.help,title:l.text.toggleHelp,html:"<span>"+l.text.toggleHelp+"</span>"}).on("click",function(){}),P=s.sound=t(f.div,{class:r+" "+o+"-sound "+l.icons.sound,title:l.text.toggleSound,html:"<span>"+l.text.toggleSound+"</span>"}).on("click",function(){l.enableSound=!l.enableSound,s.updateSound()});s.updateSound=function(){0==l.enableSound||"false"==l.enableSound?P.addClass("disabled"):P.removeClass("disabled")},s.updateSound();var x=s.more=t(f.div,{class:r+" "+o+"-more "+l.icons.more}).on("click",function(e){x.hasClass("pdff-active")||(t(this).addClass("pdff-active"),e.stopPropagation())});function C(e){x.removeClass("pdff-active")}window.addEventListener("click",C,!1);var E=t(f.div,{class:"more-container"});if(x.append(E),"string"==typeof l.source&&1==l.downloadEnable){var k=r+" "+o+"-download "+l.icons.download;(s.download=t('<a download target="_blank" class="'+k+'"><span>'+l.text.downloadPDFFile+"</span></a>")).attr("href",l.source).attr("title",l.text.downloadPDFFile)}d.hasFullscreenEnabled()||n.addClass("pdff-custom-fullscreen"),s.switchFullscreen=function(){d.getFullscreenElement();var e=i.container[0];1!=s.isFullscreen?(i.container.addClass("pdff-fullscreen"),e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(),s.isFullscreen=!0):(i.container.removeClass("pdff-fullscreen"),s.isFullscreen=!1,document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()),d.hasFullscreenEnabled()||setTimeout(function(){i.resize()},50)};var T=s.fullScreen=t(f.div,{class:r+" "+o+"-fullscreen "+l.icons.fullscreen,title:l.text.toggleFullscreen,html:"<span>"+l.text.toggleFullscreen+"</span>"}).on("click",s.switchFullscreen),L=s.fit=t(f.div,{class:r+" "+o+"-fit "+l.icons.fitscreen}).on("click",function(){t(this).toggleClass("pdff-button-fit-active")});w.append(T);var O=t(f.div,{class:a+" "+o+"-controls"}),I=(s.shareBox=new e.Share(n,l),s.share=t(f.div,{class:r+" "+o+"-share "+l.icons.share,title:l.text.share,html:"<span>"+l.text.share+"</span>"}).on("click",function(e){1==s.shareBox.isOpen?s.shareBox.close():(s.shareBox.update(i.getURLHash()),s.shareBox.show())})),R=s.startPage=t(f.div,{class:r+" "+o+"-start "+l.icons.start,title:l.text.gotoFirstPage,html:"<span>"+l.text.gotoFirstPage+"</span>"}).on("click",function(){i.start()}),M=s.endPage=t(f.div,{class:r+" "+o+"-end "+l.icons.end,title:l.text.gotoLastPage,html:"<span>"+l.text.gotoLastPage+"</span>"}).on("click",function(){i.end()}),D=s.pageMode=t(f.div,{class:r+" "+o+"-pagemode "+l.icons.singlepage,html:"<span>"+l.text.singlePageMode+"</span>"}).on("click",function(){var e=t(this);i.setPageMode(!e.hasClass(l.icons.doublepage))});i.setPageMode(i.target.pageMode==e.PAGE_MODE.SINGLE);for(var F=s.altPrev=t(f.div,{class:r+" "+o+"-prev "+o+"-alt "+l.icons.prev,title:l.text.previousPage,html:"<span>"+l.text.previousPage+"</span>"}).on("click",function(){i.prev()}),z=s.altNext=t(f.div,{class:r+" "+o+"-next "+o+"-alt "+l.icons.next,title:l.text.nextPage,html:"<span>"+l.text.nextPage+"</span>"}).on("click",function(){i.next()}),N=s.thumbnail=t(f.div,{class:r+" "+o+"-thumbnail "+l.icons.thumbnail,title:l.text.toggleThumbnails,html:"<span>"+l.text.toggleThumbnails+"</span>"}).on("click",function(){var e=t(this);i.target.thumbContainer?(i.target.thumbContainer.toggleClass("pdff-sidemenu-visible"),e.toggleClass("pdff-active")):(i.contentProvider.initThumbs(),e.toggleClass("pdff-active")),e.hasClass("pdff-active")&&e.siblings(".pdff-active").trigger("click"),s.update(!0)}),A=s.outline=t(f.div,{class:r+" "+o+"-outline "+l.icons.outline,title:l.text.toggleOutline,html:"<span>"+l.text.toggleOutline+"</span>"}).on("click",function(){var e=t(this);if(i.target.outlineContainer){var n=i.target.outlineContainer;e.toggleClass("pdff-active"),n.toggleClass("pdff-sidemenu-visible"),e.hasClass("pdff-active")&&e.siblings(".pdff-active").trigger("click"),s.update(!0)}}),B=l.allControls.replace(/ /g,"").split(","),j=","+l.moreControls.replace(/ /g,"")+",",_=","+l.hideControls.replace(/ /g,"")+",",U=(j.split(","),0);U<B.length;U++){var H=B[U];if(_.indexOf(","+H+",")<0){var W=s[H];null!=W&&(j.indexOf(","+H+",")>-1&&"more"!==H&&"pageNumber"!==H?E.append(W):O.append(W))}}n.append(O).append(p).append(u).append(g);var G=16,V=17,q=18,Z=39,Y=37,K=27;function X(e){switch(e.keyCode){case K:1==s.isFullscreen&&s.fullScreen.trigger("click");break;case G:case V:case q:break;case Y:i.prev();break;case Z:i.next()}}document.addEventListener("keyup",X,!1),s.update=function(t){S("ui update");var o=i.target,a=c(o._activePage||i._activePage),r=o.pageCount||i.pageCount,l=o.direction==e.DIRECTION.RTL,d=1==a||0==a,u=a==r;s.next.show(),s.prev.show(),s.altNext.removeClass("disabled"),s.altPrev.removeClass("disabled"),(d&&!l||u&&l)&&(s.prev.hide(),s.altPrev.addClass("disabled")),(u&&!l||d&&l)&&(s.next.hide(),s.altNext.addClass("disabled")),s.pageInput.val(a),s.pageLabel.html(a+"/"+r),n.find(".pdff-sidemenu-visible").length>0?n.addClass("pdff-sidemenu-open"):n.removeClass("pdff-sidemenu-open"),1==t&&i.resize(),o.contentProvider.zoomScale==o.contentProvider.maxZoom?s.zoomIn.addClass("disabled"):s.zoomIn.removeClass("disabled"),1==o.contentProvider.zoomScale?s.zoomOut.addClass("disabled"):s.zoomOut.removeClass("disabled")},null!=i.target&&(i.target.ui=s),null!=l.onCreateUI&&l.onCreateUI(i)},_=null;var U=function(n){function i(t){t=t||{},this.type="PreviewObject";var n=this;function i(){setTimeout(function(){n.resize()},50)}n.zoomValue=1,window.addEventListener("resize",i,!1),this.sound=document.createElement("audio"),this.sound.setAttribute("src",t.soundFile+"?ver="+e.version),this.sound.setAttribute("type","audio/mpeg"),this.autoPlayFunction=function(){n&&n.target.autoPlay&&(n.target.direction==e.DIRECTION.RTL?n.target.prev():n.target.next())},this.dispose=function(){if(clearInterval(this.autoPlayTimer),this.autoPlayTimer=null,this.autoPlayFunction=null,this.target&&this.target.children)for(var e=0;e<this.target.children.length;e++){var t=this.target.children[e];t&&t.currentTween&&t.currentTween.stop()}this.zoomTween&&(this.zoomTween.stop&&this.zoomTween.stop(),this.zoomTween=null),this.container&&this.container.info&&this.container.info.remove&&this.container.info.remove(),this.target&&this.target.dispose&&this.target.dispose(),this.target=null,this.stage&&this.stage.dispose&&this.stage.dispose(),this.stage=null,this.ui&&this.ui.dispose&&this.ui.dispose(),this.ui=null,this.contentProvider&&this.contentProvider.dispose&&this.contentProvider.dispose(),this.contentProvider=null,window.removeEventListener("resize",i)}}return i.prototype={start:function(){this.target.gotoPage(this.target.startPage)},end:function(){this.target.gotoPage(this.target.endPage)},next:function(){},prev:function(){},zoom:function(e){this.pendingZoom=!0,this.zoomDelta=e,this.resize(),this.ui.update()},resize:function(){var n=this;if(null!=n.target&&null!=n.target.ui&&null!=n.target.contentProvider&&null!=n.target.contentProvider.viewport&&null!=n.target.stage){this.ui&&1==this.ui.isFullscreen&&1==d.hasFullscreenEnabled()&&null==d.getFullscreenElement()&&this.ui.switchFullscreen();var i,o,a,r,s,l,c=n.target,p=n.container,h=n.options,f=c.stage,g=c.contentProvider,m=g.pageRatio,v=(g.zoomViewport,D(c)),b="css"!==c.mode,w=(g.pageRatio,p.hasClass("pdff-sidemenu-open")?220:0),y=this.target.pageMode==e.PAGE_MODE.SINGLE;p.height(h.height);var C=Math.min(p.height(),t(window).height());p.height(C);var E=p.width();E<400?n.container.addClass("pdff-xs"):n.container.removeClass("pdff-xs");var S=p.find(".pdff-ui-controls").height(),k=h.paddingTop+(h.controlsPosition==e.CONTROLSPOSITION.TOP?S:0),T=h.paddingRight,L=h.paddingBottom+(h.controlsPosition==e.CONTROLSPOSITION.BOTTOM?S:0),O=h.paddingLeft,I=E-w,R=C,M=(k=isNaN(k)?0:P(k,0,k))+(L=isNaN(L)?0:P(L,0,L)),F=(O=isNaN(O)?0:P(O,0,O))+(T=isNaN(T)?0:P(T,0,T)),z=I-F,N=R-M;if(a=Math.floor(y?z:z/2),(i=(o=Math.floor(a/m))>N)&&(a=(o=N)*m),l=g.maxZoom=g.zoomViewport.height/o,null==n.zoomValue&&(n.zoomValue=1),null==g.zoomScale&&(g.zoomScale=1),1==n.pendingZoom&&null!=n.zoomDelta){n.zoomDelta;var A,B=Math.max(o,a);n.zoomValue=n.zoomDelta>0?n.zoomValue*n.options.zoomRatio:n.zoomValue/n.options.zoomRatio,n.zoomValue=P(n.zoomValue,1,l),1==n.zoomValue?g.zoomScale=1:(A=o*n.zoomValue,A=d.zoomStops(A,n.options.zoomRatio,n.zoomDelta>0,Math.max(a,o)),g.zoomScale=P(A/B,1,l))}s=g.zoomScale,g.checkViewportSize(a,o,s),g.contentSourceType==u.PDF&&(a=g.imageViewport.width/s,o=g.imageViewport.height/s),1!=g.zoomScale&&this.target.container.addClass("pdff-zoom-enabled");var j=c.zoomWidth=Math.floor(a*s),_=c.zoomHeight=Math.floor(o*s),U=2*j;if(b){var H=_/c.height,W=i?s*(o+M)/H:s*(a*(y?1:2)+F)/H/(I/R);f.resizeCanvas(I,R),r=1/(2*Math.tan(Math.PI*f.camera.fov*.5/180)/(W/s))+2.2,f.camera.updateProjectionMatrix(),f.renderRequestPending=!0;var G=(k-L)*(c.height/o)/s/2,V=1==g.zoomScale;f.camera.position.z!==r&&1==n.pendingZoom?(null!=n.zoomTween&&n.zoomTween.stop(),n.zoomTween=new TWEEN.Tween({campos:f.camera.position.z,otx:f.orbitControl.target.x,oty:f.orbitControl.target.y,otz:f.orbitControl.target.z}).delay(0).to({campos:r,otx:0,oty:G,otz:0},100).onUpdate(function(){f.camera.position.z=this.campos,V&&(f.camera.position.y=this.oty,f.orbitControl.target=new THREE.Vector3(this.otx,this.oty,this.otz)),f.orbitControl.update()}).easing(TWEEN.Easing.Linear.None).onComplete(function(){f.camera.position.z=r,1==g.zoomScale&&(f.camera.position.set(0,G,r),f.orbitControl.target=new THREE.Vector3(0,G,0)),f.orbitControl.update()}).start()):(1==g.zoomScale&&(f.camera.position.set(0,G,r),f.orbitControl.target=new THREE.Vector3(0,G,0)),f.orbitControl.update()),f.orbitControl.update(),f.orbitControl.mouseButtons.ORBIT=1!=s?-1:THREE.MOUSE.RIGHT,f.orbitControl.mouseButtons.PAN=1!=s?THREE.MOUSE.LEFT:-1}else{c.pageWidth=Math.round(a),c.fullWidth=2*c.pageWidth,c.height=Math.round(o);var q=c.shiftHeight=Math.round(P((_-R+M)/2,0,_)),Z=c.shiftWidth=Math.round(P((U-I+F)/2,0,U));1==s&&(c.left=0,c.top=0),c.stage.css({top:-q,bottom:-q,right:-Z+(v?w:0),left:-Z+(v?0:w),paddingTop:k,paddingRight:T,paddingBottom:L,paddingLeft:O,transform:"translate3d("+c.left+"px,"+c.top+"px,0)"}),c.stageHeight=f.height(),c.wrapper.css({width:U,height:_,marginTop:C-_-M>0?(C-M-_)/2:0});var Y=Math.floor(x(a,o)*s);c.stage.find(".pdff-page-wrapper").width(Y).height(Y),c.stage.find(".ppdff-flipbook-page, .pdff-page-front , .pdff-page-back, .pdff-page-fold-inner-shadow").height(_).width(j)}n.checkCenter({type:"resize"}),1==g.zoomScale&&this.target.container.removeClass("pdff-zoom-enabled"),c.thumblist&&c.thumblist.reset(t(c.thumblist.container).height()),n.pendingZoom=!1}},playSound:function(){try{this.options&&1==this.options.enableSound&&(this.sound.currentTime=0,this.sound.play())}catch(e){}},setPageMode:function(t){1==t?(this.ui.pageMode.addClass(this.options.icons.doublepage),this.ui.pageMode.html("<span>"+this.options.text.doublePageMode+"</span>"),this.ui.pageMode.attr("title",this.options.text.doublePageMode),this.target.pageMode=e.PAGE_MODE.SINGLE):(this.ui.pageMode.removeClass(this.options.icons.doublepage),this.ui.pageMode.html("<span>"+this.options.text.singlePageMode+"</span>"),this.ui.pageMode.attr("title",this.options.text.singlePageMode),this.target.pageMode=e.PAGE_MODE.DOUBLE),this.target&&this.target.singlePageMode==e.SINGLE_PAGE_MODE.BOOKLET&&this.target.reset(),this.resize()},setAutoPlay:function(e){if(this.options.autoPlay){var t=(e=1==e)?this.options.text.pause:this.options.text.play;this.ui.play.toggleClass(this.options.icons.pause,e),this.ui.play.html("<span>"+t+"</span>"),this.ui.play.attr("title",t),clearInterval(this.autoPlayTimer),e&&(this.autoPlayTimer=setInterval(this.autoPlayFunction,this.options.autoPlayDuration)),this.target.autoPlay=e}},height:function(e){if(null==e)return this.container.height();this.options.height=e,this.container.height(e),this.resize()},checkCenter:function(t){t=null==t?{}:t,this.centerType=this.centerType||"start";var n,i=this.target,o=0,a=0,r=0,s=d.getBasePage(i._activePage),l=i._activePage%2==0,c=i.direction==e.DIRECTION.RTL,u=i.pageMode==e.PAGE_MODE.SINGLE,p=u&&i.singlePageMode==e.SINGLE_PAGE_MODE.BOOKLET,h=i.stage.width();if("css"==i.mode)n=i.wrapper.width(),o=Math.max((n-h)/2,0),a=-n/4,r=n/4,0==s||p?(i.wrapper.css({left:u?c?r-o:a-o:c?r:a}),i.shadow.css({width:"50%",left:c?0:"50%",transitionDelay:""})):s==i.pageCount?(i.wrapper.css({left:u?c?a-o:r-o:c?a:r}),i.shadow.css({width:"50%",left:c?"50%":0,transitionDelay:""})):(i.wrapper.css({left:u?c?l?a-o:r-o:l?r-o:a-o:0}),i.shadow.css({width:"100%",left:0,transitionDelay:parseInt(i.duration,10)+50+"ms"})),i.wrapper.css({transition:"resize"==t.type?"none":""});else if(null!=i.stage){var f,g=i.position.x;o=i.width/4,a=-(n=i.width)/2,r=n/2,(f=0==s||p?c?r:a:s==i.pageCount?c?a:r:u?c?l?a:r:l?r:a:0)!==this.centerEnd&&(this.centerTween=new TWEEN.Tween({x:g}).delay(0).to({x:f},i.duration).onUpdate(function(){i.position.x=this.x,i.stage.cssScene.position.x=this.x}).easing(i.ease).start(),this.centerEnd=f)}},width:function(e){if(null==e)return this.container.width();this.options.width=e,this.container.width(e),this.resize()}},i}();e.PreviewObject=U;var H=function(n){function i(n,i,o,a){o=o||{};var s=this;if(s.contentRawSource=n||[r.textureLoadFallback],s.contentSource=s.contentRawSource,s.contentSourceType=null,s.minDimension=o.minTextureSize||256,s.maxDimension=o.maxTextureSize||2048,s.pdfRenderQuality=o.pdfRenderQuality||e.defaults.pdfRenderQuality,s.flipbook=a,s.waitPeriod=50,s.maxLength=297,s.enableDebug=!1,s.zoomScale=1,s.maxZoom=2,s.options=o,s.outline=o.outline,s.links=o.links,s.html=o.html,s.isCrossOrigin=o.isCrossOrigin,s.normalViewport={height:297,width:210,scale:1},s.viewport={height:297,width:210,scale:1},s.imageViewport={height:297,width:210,scale:1},s.bookSize={height:297,width:210},s.zoomViewport={height:297,width:210},s.thumbsize=128,s.cacheIndex=256,s.cache=[],s.pageRatio=o.pageRatio||s.viewport.width/s.viewport.height,s.textureLoadTimeOut=null,s.type="TextureLibrary",Array===s.contentSource.constructor||Array.isArray(s.contentSource)||s.contentSource instanceof Array)s.contentSourceType=u.IMAGE,s.pageCount=s.contentSource.length,t("<img/>").attr("src",s.contentSource[0]).on("load",function(){s.viewport.height=this.height,s.viewport.width=this.width,s.pageRatio=s.viewport.width/s.viewport.height,s.bookSize={width:(s.pageRatio>1?1:s.pageRatio)*s.maxLength,height:s.maxLength/(s.pageRatio<1?1:s.pageRatio)},s.zoomViewport={width:(s.pageRatio>1?1:s.pageRatio)*s.maxDimension,height:s.maxDimension/(s.pageRatio<1?1:s.pageRatio)},s.linkService=new PDFLinkService,t(this).off(),s.options.pageSize==e.PAGE_SIZE.DOUBLEINTERNAL&&(s.pageCount=2*s.contentSource.length-2,1==s.options.webgl&&(s.requiresImageTextureScaling=!0)),null!=i&&(i(s),i=null),S(this.height+":"+this.width)});else if("string"==typeof s.contentSource||s.contentSource instanceof String){var l=function(){if(s){PDFJS.workerSrc=r.pdfjsWorkerSrc,s.contentSourceType=u.PDF,PDFJS.disableAutoFetch=!0,PDFJS.disableStream=!0,(N||A||1==s.options.disableFontFace)&&(PDFJS.disableFontFace=N||A||1==s.options.disableFontFace),PDFJS.imageResourcesPath=r.imageResourcesPath,PDFJS.cMapUrl=r.cMapUrl,PDFJS.cMapPacked=!0,PDFJS.externalLinkTarget=PDFJS.LinkTarget.BLANK;var t=s.loading=PDFJS.getDocument(s.options.docParameters?s.options.docParameters:{url:d.httpsCorrection(n),rangeChunkSize:isNaN(e.defaults.rangeChunkSize)?524288:e.defaults.rangeChunkSize});t.then(function(t){s.pdfDocument=t,t.getPage(1).then(function(n){s.normalViewport=n.getViewport(1),s.viewport=n.getViewport(1),s.viewport.height=s.viewport.height/10,s.viewport.width=s.viewport.width/10,s.pageRatio=s.viewport.width/s.viewport.height,s.bookSize={width:(s.pageRatio>1?1:s.pageRatio)*s.maxLength,height:s.maxLength/(s.pageRatio<1?1:s.pageRatio)},s.zoomViewport={width:(s.pageRatio>1?1:s.pageRatio)*s.maxDimension,height:s.maxDimension/(s.pageRatio<1?1:s.pageRatio)},s.refPage=n,t.numPages>1?t.getPage(2).then(function(n){if(s.options.pageSize==e.PAGE_SIZE.AUTO){var o=n.getViewport(1);o.width/o.height>1.5*s.pageRatio?(s.options.pageSize=e.PAGE_SIZE.DOUBLEINTERNAL,s.pageCount=2*t.numPages-2):s.options.pageSize=e.PAGE_SIZE.SINGLE}null!=i&&(i(s),i=null)}):null!=i&&(i(s),i=null)}),s.linkService=new PDFLinkService,s.linkService.setDocument(t,null),s.pageCount=t.numPages,s.contentSource=t},function(e){if(s){var t="",n=document.createElement("a");n.href=s.contentSource,n.hostname!==window.location.hostname&&(t="CROSS ORIGIN!! "),s.updateInfo(t+"Error Loading File -  "+s.contentSource)}}),t.onProgress=function(e){if(s){var t=100*e.loaded/e.total;isNaN(t)?e&&e.loaded?s.updateInfo("Loading Pages "+(Math.ceil(e.loaded/1e4)/100).toString()+"MB ..."):s.updateInfo("Loading Pages ..."):s.updateInfo("Loading Pages "+t.toString().split(".")[0]+"% ...")}}}},c=function(){if(s){r.pdfjsWorkerSrc+="?ver="+e.version,s.updateInfo("Loading Interface ...");var n=document.createElement("a");n.href=r.pdfjsWorkerSrc,n.hostname!==window.location.hostname?(s.updateInfo("Loading Interface ..."),t.ajax({url:r.pdfjsWorkerSrc,cache:!0,success:function(t){r.pdfjsWorkerSrc=e.createObjectURL(t,"text/javascript"),l()}})):l()}};null==window.PDFJS?s&&(s.updateInfo("Loading Interface ..."),O(r.pdfjsSrc+"?ver="+e.version,function(){"function"==typeof define&&define.amd?(s.updateInfo("Loading Interface ..."),require.config({paths:{"pdfjs-dist/build/pdf.worker":r.pdfjsWorkerSrc.replace(".js","")}}),require(["pdfjs-dist/build/pdf"],function(e){c()})):c()},function(){s.updateInfo("Unable to load Interface ..")})):l()}else console.error("Unsupported source type. Please load a valid PDF file.");return this.dispose=function(){s.loading&&s.loading.destroy&&s.loading.destroy(),s.loading=null,s.textureLoadTimeOut&&(clearTimeout(s.textureLoadTimeOut),s.textureLoadTimeOut=null),this.targetObject&&(this.targetObject.thumbContainer&&this.targetObject.thumbContainer.remove&&this.targetObject.thumbContainer.remove(),this.targetObject.outlineContainer&&this.targetObject.outlineContainer.remove&&this.targetObject.outlineContainer.remove(),this.targetObject.dispose&&this.targetObject.dispose(),this.targetObject.processPage=null,this.targetObject.requestPage=null,this.targetObject.container&&this.targetObject.container.off&&this.targetObject.container.off()),this.pdfDocument&&this.pdfDocument.destroy&&this.pdfDocument.destroy(),this.linkService&&this.linkService.dispose&&this.linkService.dispose(),this.outlineViewer&&this.outlineViewer.dispose&&this.outlineViewer.dispose(),this.thumblist&&this.thumblist.dispose&&(this.thumblist.review=null,this.thumblist.dispose()),this.activeThumb=null,this.targetObject=null,this.pdfDocument=null,this.linkService=null,this.outlineViewer=null,this.thumblist=null,s=null},this}return B(i,{}),i.prototype.updateInfo=function(e){this.flipbook&&this.flipbook.updateInfo&&this.flipbook.updateInfo(e)},i.prototype.initThumbs=function(){var e,n=this;null==n.cache[n.thumbsize]&&(n.cache[n.thumbsize]=[]);var i=function(){clearTimeout(e),e=setTimeout(function(){e=setTimeout(o,n.waitPeriod/2)},n.waitPeriod)},o=function(){var o=0;if(Date.now()-n.thumblist.lastScrolled<100?o=1:(n.targetObject.container.find(".pdff-thumb-container .pdff-vrow").each(function(){var e=t(this);if(!e.hasClass("pdff-thumb-loaded")){o++;var a=t(this).attr("id").replace("pdff-thumb","");return n.getPage(a,i,!0),e.addClass("pdff-thumb-loaded"),!1}}),0==o&&clearTimeout(e)),o>0&&i(),n.activeThumb!=n.targetObject._activePage&&null!=n.targetObject.thumbContainer&&n.targetObject.thumbContainer.hasClass("pdff-sidemenu-visible")){var a=n.thumblist.container,r=a.scrollTop,s=a.getBoundingClientRect().height,l=n.targetObject.thumbContainer.find("#pdff-thumb"+n.targetObject._activePage);l.length>0?(n.targetObject.thumbContainer.find(".pdff-selected").removeClass("pdff-selected"),l.addClass("pdff-selected"),r+s<(l=l[0]).offsetTop+l.scrollHeight?l.scrollIntoView(!1):r>l.offsetTop&&l.scrollIntoView(),n.activeThumb=n.targetObject._activePage):(t(a).scrollTop(124*n.targetObject._activePage),i())}};n.thumblist=n.targetObject.thumblist=new ThumbList({h:500,addFn:function(e){},scrollFn:i,itemHeight:128,totalRows:n.pageCount,generatorFn:function(e){var t=document.createElement("div"),n=e+1;t.id="pdff-thumb"+n;var i=document.createElement("div");return i.innerHTML=n,t.appendChild(i),t}}),n.thumblist.lastScrolled=Date.now(),n.thumblist.review=i,i();var a=t("<div>").addClass("pdff-thumb-container pdff-sidemenu-visible pdff-sidemenu");a.append(t(n.thumblist.container).addClass("pdff-thumb-wrapper")),n.targetObject.thumbContainer=a,n.targetObject.container.append(a);var r=t(f.div,{class:"pdff-ui-btn pdff-ui-sidemenu-close ti-close"});a.append(r),n.thumblist.reset(t(n.thumblist.container).height()),n.targetObject.container.on("click",".pdff-thumb-container .pdff-vrow",function(e){e.stopPropagation();var i=t(this).attr("id").replace("pdff-thumb","");n.targetObject.gotoPage(parseInt(i,10))})},i.prototype.initOutline=function(){var e=this,n=t("<div>").addClass("pdff-outline-container pdff-sidemenu"),i=t("<div>").addClass("pdff-outline-wrapper"),o=t(f.div,{class:"pdff-ui-btn pdff-ui-sidemenu-close ti-close"});function a(t){if(1==e.options.overwritePDFOutline&&(t=[]),t=t||[],e.outline)for(var n=0;n<e.outline.length;n++)e.outline[n].custom=!0,t&&t.push(e.outline[n]);e.outlineViewer.render({outline:t})}n.append(o).append(i),e.targetObject.container.append(n),e.targetObject.outlineContainer=n,e.outlineViewer=new BookMarkViewer({container:i[0],linkService:e.linkService,outlineItemClass:"pdff-outline-item",outlineToggleClass:"pdff-outline-toggle",outlineToggleHiddenClass:"pdff-outlines-hidden"}),e.pdfDocument?e.pdfDocument.getOutline().then(function(e){a(e)}):a([]),1==e.options.autoEnableOutline&&e.targetObject.ui.outline.trigger("click"),1==e.options.autoEnableThumbnail&&e.targetObject.ui.thumbnail.trigger("click")},i.prototype.checkViewportSize=function(e,t,n){var i=this,o=i.targetObject,a=e*n,s=t*n,l=i.cacheIndex;if(i.contentSourceType==u.PDF){if(i.cacheIndex=Math.ceil(Math.max(a,s)),i.cacheIndex=Math.floor(Math.max(a,s)),i.cacheIndex=P(i.cacheIndex*r.pixelRatio,i.minDimension,i.maxDimension),null==i.cache[i.cacheIndex]&&(i.cache[i.cacheIndex]=[]),l!==i.cacheIndex){for(var c=0;c<o.children.length;c++)o.children[c];o.refresh()}i.imageViewport=i.refPage.getViewport(s/i.normalViewport.height),i.viewport="css"==o.mode?i.imageViewport:i.refPage.getViewport(i.bookSize.height/i.normalViewport.height),S(i.cacheIndex);var d=o.container.find(".linkAnnotation"),p=i.viewport.clone({dontFlip:!0});d.css({transform:"matrix("+p.transform.join(",")+")"})}else null==i.cache[i.cacheIndex]&&(i.cache[i.cacheIndex]=[])},i.prototype.getCache=function(e,t){return 1==t?null==this.cache[this.thumbsize]?null:this.cache[this.thumbsize][e]:null==this.cache[this.cacheIndex]?null:this.cache[this.cacheIndex][e]},i.prototype.setCache=function(e,t,n,i){if(1==n)null!=this.cache[this.thumbsize]&&(this.cache[this.thumbsize][e]=t);else{var o=null==i?this.cacheIndex:i;null!=this.cache[o]&&(this.cache[o][e]=t)}},i.prototype.setTarget=function(e){var t=this;if(null==e)return this.targetObject;this.targetObject=e,e.contentProvider=this,e.container.removeClass("pdff-loading pdff-init"),null!=t.linkService&&(t.linkService.setViewer(e),t.initOutline()),e.processPage=function(e,n){e>0&&e<=t.pageCount?t.getPage(e,n):t.setPage(e,r.textureLoadFallback,n)},e.requestPage=function(){t.review("Request")},null!=e.resize&&e.resize()},i.prototype.review=function(e){var t=this;e=e||"timer review",clearTimeout(t.textureLoadTimeOut),t.textureLoadTimeOut=setTimeout(function(){t.textureLoadTimeOut=setTimeout(t.reviewPages,t.waitPeriod/2,t,e)},t.waitPeriod)},i.prototype.reviewPages=function(e,n){var i=(e=e||this).targetObject;if(null!=i){var o=M(i);null!=n&&S(n);var a,r=!1;for(a=0;a<e.targetObject.children.length;a++)if(1==i.children[a].isFlipping){r=!0;break}if(0==r){var s=i.children.length>3?3:i.children.length,l=o?i._activePage:L(i._activePage);for(e.baseNumber=l,e.zoomScale>1&&(s=1),a=0;a<s;a++){var c=Math.floor(a/2),d=a%2==0?-c*(o?1:2):(0==c?1:c)*(o?1:2),u=l+d,p=l+d+1,h=i.getPageByNumber(u),f=i.getPageByNumber(p),g=u+"|"+e.cacheIndex,m=p+"|"+e.cacheIndex,v=0;if(null!=h&&h.frontPageStamp!=g&&1==h.visible&&(h.frontTextureLoaded=!1,i.processPage(u,function(){e.review("Batch Call")}),h.frontPageStamp=g,v++),null==f||f.backPageStamp==m||1!=f.visible||o||(f.backTextureLoaded=!1,i.processPage(p,function(){e.review("Batch Call")}),f.backPageStamp=m,v++),0==d&&e.annotedPage!==l&&(e.getAnnotations(u),o||e.getAnnotations(p),e.annotedPage=l),v>0)break}0==v&&"css"!==i.mode&&e.setLoading(l)}else if(e.review("Revisit request"),null!=e.annotedPage&&"css"!==i.mode){var b=L(i._activePage);t(i.getContentLayer(b)).html(""),t(i.getContentLayer(b+1)).html(""),e.annotedPage=null}}},i.prototype.getPage=function(t,n,i){var o,a,s,l,c=this,d=t=parseInt(t,10),p=c.contentSource;t<=0&&t>=c.pageCount?c.setPage(t,r.textureLoadFallback,n,i):c.contentSourceType==u.PDF?null!=c.getCache(t,i)?(c.setPage(t,c.getCache(t,i),n,i),S("Page "+t+" loaded from cache")):(!0!==i&&c.setLoading(t,!0),c.options.pageSize==e.PAGE_SIZE.DOUBLEINTERNAL&&t>2&&(d=Math.ceil((t-1)/2)+1),p.getPage(d,i).then(function(o){!function(t,n,i,o){var a=c.options.forceFit,r=c.options.pageSize==e.PAGE_SIZE.DOUBLEINTERNAL&&n>1&&n<c.pageCount,s=r&&a?2:1,l=a?t.getViewport(1):c.normalViewport,d=c.cacheIndex/Math.max(l.width/s,l.height);1==c.webgl&&(d=k(c.cacheIndex)/(c.pageRatio>1?l.width/s:l.height));var u=document.createElement("canvas"),p=performance.now(),h=c.cacheIndex,f=u.getContext("2d");1==o&&(d=c.thumbsize/c.normalViewport.height),u.height=Math.round(l.height*d),u.width=Math.round(l.width/s*d),"css"==c.targetObject.mode&&Math.abs(c.targetObject.zoomHeight-u.height)<2&&(u.height=c.targetObject.zoomHeight+0,u.width=c.targetObject.zoomWidth+0),l=t.getViewport(d),S("rendering "+n+" at "+u.width+"x"+u.height),r&&(D(c.targetObject)?n%2==0&&(l.transform[4]=-u.width):n%2==1&&(l.transform[4]=-u.width));var g={canvasContext:f,viewport:l};t.cleanupAfterRender=!0,t.render(g).promise.then(function(){S(performance.now()-p),p=performance.now(),1==o||1==c.options.canvasToBlob&&!0!==c.webgl?u.toBlob(function(t){var a=e.createObjectURL(t,"image/jpeg");S(performance.now()-p),c.setCache(n,a,o,h),c.setPage(n,a,i,o)},"image/jpeg",c.pdfRenderQuality):(S("Setting Page "+n),c.setPage(n,u,i,o)),g=null})}(o,t,n,i)})):c.contentSourceType!=u.IMAGE&&c.contentSourceType!=u.HTML||(null!=c.getCache(t,i)?(c.setPage(t,c.getCache(t,i),n,i),S("Page "+t+" loaded from cache")):(!0!==i&&c.setLoading(t,!0),c.options.pageSize==e.PAGE_SIZE.DOUBLEINTERNAL&&t>2&&(d=Math.ceil((t-1)/2)+1),o=p[d-1],a=function(e){c.setCache(t,e,i,c.cacheIndex),c.setPage(t,e,n,i),null!=n&&n()},s=c.isCrossOrigin,(l=new Image).crossOrigin="Anonymous",l.onload=function(){if(1==s){var t=document.createElement("canvas"),n=t.getContext("2d");t.width=l.width,t.height=l.height,n.drawImage(l,0,0),1==r.canvasToBlob?t.toBlob(function(t){var n=e.createObjectURL(t,"image/jpeg");null!=a&&a(n)},"image/jpeg",.85):null!=a&&a(t)}else null!=a&&a(o);l.onload=null,l=null},l.src=o,(l.complete||void 0===l.complete)&&(l.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",l.src=o)))},i.prototype.getTargetPage=function(e){},i.prototype.setLoading=function(e,n){if(null!=this.targetObject)if(1==this.webgl){var i=this.targetObject.container;1==n?!0!==i.isLoading&&(i.addClass("pdff-loading"),i.isLoading=!0,S("Loading icon at "+e+" as "+n)):null!=i.isLoading&&(i.removeClass("pdff-loading"),i.isLoading=null,S("Loading icon at "+e+" as "+n))}else{var o=t(this.targetObject.getContentLayer(e));null!=o&&(1==n?o.addClass("pdff-page-loading"):o.removeClass("pdff-page-loading"),S("Loading icon at "+e+" as "+n))}},i.prototype.getAnnotations=function(n){var i=this;if(0!=i.options.enableAnnotation){var o=i.targetObject;n=parseInt(n,10);var a=i.contentSource,r=t(o.getContentLayer(n));if(r.empty(),n>0&&n<=i.pageCount){if(i.contentSourceType==u.PDF){L(n);var s=n;i.options.pageSize==e.PAGE_SIZE.DOUBLEINTERNAL&&n>2&&(s=Math.ceil((n-1)/2)+1),a.getPage(s).then(function(e){null!=r&&r.length>0&&i.setupAnnotations(e,i.viewport,r,n)})}if(null!=i.links&&null!=i.links[n])for(var l=i.links[n],c=0;c<l.length;c++){var d,p=l[c];p.dest&&p.dest.indexOf&&0==p.dest.indexOf("[html]")?((d=document.createElement("div")).innerHTML=p.dest.substr(6),d.className="customHtmlAnnotation"):((d=document.createElement("a")).setAttribute("dest",p.dest),d.className="customLinkAnnotation",d.href="#"+p.dest,d.onclick=function(){var e=this.getAttribute("dest");return e&&i.linkService.customNavigateTo(e),!1}),d.style.left=p.x+"%",d.style.top=p.y+"%",d.style.width=p.w+"%",d.style.height=p.h+"%",r[0].appendChild(d)}if(null!=i.html&&null!=i.html[n]){var h=i.html[n];r.append(t("<div class='customHTMLAnnotation'>").html(h))}}}},i.prototype.setPage=function(e,t,n,i){var o=this,a=o.targetObject,s=D(a),l=M(a);if(1==i)o.targetObject.container.find("#pdff-thumb"+e).css({backgroundImage:y(t)});else{t==r.textureLoadFallback&&S("Fallback on "+e);var c=a.getPageByNumber(e);null!=c?e%2!=0&&!s||e%2!=1&&s&&!l||l&&!s?(S(e+"rendered to back of "+c.color),c.backImage(t,function(t,i){c.backTextureLoaded=!0,o.setLoading(e),o.requiresImageTextureScaling&&i&&1!=e&&e!=o.pageCount&&(i.repeat.x=.5,i.offset.x=.5),null!=n&&n()})):(S(e+"rendered to front of "+c.color),c.frontImage(t,function(t,i){c.frontTextureLoaded=!0,o.setLoading(e),o.requiresImageTextureScaling&&i&&1!=e&&e!=o.pageCount&&(i.repeat.x=.5),null!=n&&n()})):S("Invalid set request on Page "+e)}},i.prototype.setupAnnotations=function(n,i,o,a){if(null!=o&&0!=t(o).length){var r=this;return n.getAnnotations().then(function(s){if(i=i.clone({dontFlip:!0}),r.options.pageSize,e.PAGE_SIZE.DOUBLEINTERNAL,null!=o){0==(o=t(o)).find(".annotationDiv").length&&o.append(t("<div class='annotationDiv'>"));var l=o.find(".annotationDiv");l.empty(),r.options.pageSize==e.PAGE_SIZE.DOUBLEINTERNAL&&a>2&&a%2==1?l.css({left:"-100%"}):1==a&&l.css({left:""}),PDFJS.AnnotationLayer.render({annotations:s,div:l[0],page:n,viewport:i,linkService:r.linkService}),r.options.annotationClass&&""!==r.options.annotationClass&&l.find(" > section").addClass(r.options.annotationClass)}})}},i}(),W=function(){function n(e){this.angles=e.angles||[0,0,0,0,0,0],this.stiffness=e.angles||.1,this.segments=e.segments||1,this.canvasMode=e.contentSourceType!==u.IMAGE&&0==e.canvasToBlob,this.initDOM()}function i(e){var n=e.contentLayer=t(f.div,{class:"pdff-page-content"});e.append(n)}return n.prototype={initDOM:function(){var e=this.element=t(f.div,{class:"ppdff-flipbook-page"}),n=this.wrapper=t(f.div,{class:"pdff-page-wrapper"}),o=this.front=t(f.div,{class:"pdff-page-front"}),a=this.back=t(f.div,{class:"pdff-page-back"}),r=this.foldInnerShadow=t(f.div,{class:"pdff-page-fold-inner-shadow"}),s=this.foldOuterShadow=t(f.div,{class:"pdff-page-fold-outer-shadow"});this.frontIMG=new Image,this.backIMG=new Image,i(o,this.segments),i(a,this.segments),e.append(n).append(s),n.append(o).append(a).append(r)},updatePoint:function(t){if(null!=t){var n=null!=this.parent.dragPage?this.parent.dragPage:null!=t.page?t.page:this,i=n.element.width(),o=n.element.height(),a=null!=this.parent.corner?this.parent.corner:t.corner,r=e.CORNERS,s=n.side==p.right,l=a==r.BL||a==r.BR;t.rx=1==s?2*i-t.x:t.x,t.ry=1==l?o-t.y:t.y;var c=Math.atan2(t.ry,t.rx);c=Math.PI/2-P(c,0,m(90));var d=s?t.x/2:i-t.x/2,u=t.ry/2,h=Math.max(0,Math.sin(c-Math.atan2(u,d))*x(d,u)),f=.5*x(t.rx,t.ry),g=Math.round(i-h*Math.sin(c)),y=Math.round(h*Math.cos(c)),C=v(c),E=l?s?90-C+180:180+C:s?C:90-C,S=l?s?90-C+180:C:s?C+180:E,k=l?s?90-C:C+90:s?E-90:E+180,T=s?i-g:g,L=l?o+y:-y,O=s?-g:g-i,I=l?-o-y:y,M=P(.5*t.distance/i,0,.5),D=P(.5*(2*i-t.rx)/i,.05,.3);n.element.addClass("pdff-folding");var F=s?n.back:n.front,z=s?n.front:n.back,N=n.foldOuterShadow,A=n.foldInnerShadow;n.wrapper.css({transform:b(T,L)+w(E)}),F.css({transform:w(-E)+b(-T,-L)}),z.css({transform:w(S)+b(O,I),boxShadow:"rgba(0, 0, 0, "+M+") 0px 0px 20px"}),A.css({transform:w(S)+b(O,I),opacity:D/2,backgroundImage:R.css+"linear-gradient( "+k+"deg, rgba(0, 0, 0, 0.25) , rgb(0, 0, 0) "+.7*f+"px, rgb(255, 255, 255) "+f+"px)"}),N.css({opacity:D/2,left:s?"auto":0,right:s?0:"auto",backgroundImage:R.css+"linear-gradient( "+(180-k)+"deg, rgba(0, 0, 0,0) "+f/3+"px, rgb(0, 0, 0) "+f+"px)"})}},updateAngle:function(e,t){var n=5*this.element.width();this.wrapper.css({perspective:n,perspectiveOrigin:1==t?"0% 50%":"100% 50%"}),this.front.css({display:1==t?e<=-90?"block":"none":e<90?"block":"none",transform:("MfS"!==R.dom?"":"perspective("+n+"px) ")+(1==t?"translateX(-100%) ":"")+"rotateY("+((1==t?180:0)+e)+"deg)"}),this.back.css({display:1==t?e>-90?"block":"none":e>=90?"block":"none",transform:("MSd"!==R.dom?"":"perspective("+n+"px) ")+(0==t?"translateX(100%) ":"")+"rotateY("+((0==t?-180:0)+e)+"deg)"})},tween:function(t){var n=this;if(null!=n&&null!=n.parent){var i,o=M(n.parent),a=n.side==p.right,r=n.parent.direction==e.DIRECTION.RTL,s=n.parent.corner==e.CORNERS.BL||n.parent.corner==e.CORNERS.BR,l=1==n.magnetic,c=s?n.parent.height:0,d=0,u=n.end=n&&1==n.animateToReset?{x:a?n.parent.fullWidth:0,y:c}:{x:a?0:n.parent.fullWidth,y:c};n.ease=n.isHard?TWEEN.Easing.Quadratic.InOut:TWEEN.Easing.Linear.None;var h=n.parent.duration;1==n.isHard?(null!=t&&(d=E(t.distance,t.fullWidth)),i=n.init={angle:d*(a?-1:1)},u=n.end=n&&1==n.animateToReset?{angle:a?0:-0}:{angle:a?-180:180}):null==t?(i=n.init=n&&1==n.animateToReset?{x:a?0:n.parent.fullWidth,y:0}:{x:a?n.parent.fullWidth:0,y:0},n.first={x:(a?3:1)*n.parent.fullWidth/4,y:0},n.mid={x:(a?1:3)*n.parent.fullWidth/4,y:0}):(i=n.init={x:t.x,y:t.y,opacity:1},n.first={x:3*t.x/4,y:3*t.y/4,opacity:1},n.mid={x:t.x/4,y:t.y/4,opacity:1},h=n.parent.duration*C(i.x,i.y,u.x,u.y)/n.parent.fullWidth,h=P(h,n.parent.duration/3,n.parent.duration)),i.index=0,u.index=1,n.isFlipping=!0;var f=function(e){1==n.isHard?(n.updateAngle(e.angle,a),n.angle=e.angle):(n.updatePoint({x:e.x,y:e.y}),n.x=e.x,n.y=e.y),o&&!l&&(n.element[0].style.opacity=a&&!r||!a&&r?e.index>.5?2*(1-e.index):1:e.index<.5?2*e.index:1)};o&&(!a&&!r||a&&r)&&(n.element[0].style.opacity=0),n.completeTween=n.completeTween||function(t){n.isFlipping=!1,1==n.isHard?(n.updateAngle(n.end.angle),n.back.css({display:"block"}),n.front.css({display:"block"})):n.updatePoint({x:n.end.x,y:n.end.y}),n.element[0].style.opacity=1,!0!==n.animateToReset?n.side=n.side==p.right?p.left:p.right:n.animateToReset=null,n.currentTween=null,n.pendingPoint=null,n.magnetic=!1,n.parent.dragPage=null,n.parent.corner=e.CORNERS.NONE,1!=t&&n.parent.refresh()},1==n.isHard?n.currentTween=new TWEEN.Tween(i).delay(0).to(u,n.parent.duration).onUpdate(function(){f(this)}).easing(n.ease).onComplete(n.completeTween).start():null==t?n.currentTween=new TWEEN.Tween(i).delay(0).to(u,n.parent.duration).onUpdate(function(){f(this)}).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(n.completeTween).start():(n.currentTween=new TWEEN.Tween(i).delay(0).to(u,h).onUpdate(function(){f(this)}).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(n.completeTween),n.currentTween.start())}},frontImage:function(e,n){var i=this;function o(){i.front.css({backgroundImage:y(e)}),null!=n&&n()}1==i.canvasMode?(i.front.find(">canvas").remove(),e!==r.textureLoadFallback&&i.front.append(t(e)),null!=n&&n()):e==r.textureLoadFallback?o():(i.frontIMG.onload=o,i.frontIMG.src=e)},backImage:function(e,n){var i=this;function o(){i.back.css({backgroundImage:y(e)}),null!=n&&n()}1==i.canvasMode?(i.back.find(">canvas").remove(),e!==r.textureLoadFallback&&i.back.append(t(e)),null!=n&&n()):e==r.textureLoadFallback?o():(i.backIMG.onload=o,i.backIMG.src=e)},updateCSS:function(e){this.element.css(e)},resetCSS:function(){this.wrapper.css({transform:""}),this.front.css({transform:"",boxShadow:""}),this.back.css({transform:"",boxShadow:""})},clearTween:function(e){this.currentTween.stop(),this.completeTween(1==e),this.resetCSS()}},n}(),G=function(n){function i(e){for(var t=!1,n=0;n<e.pages.length;n++)if(1==e.pages[n].isFlipping){t=!0;break}return t}function o(n,o){var a=this;function r(e){a.dragPage!=e.page&&1==e.page.visible&&(a.dragPage.clearTween(!0),a.dragPage=e.page,a.corner=e.corner,a.dragPage.pendingPoint=e)}a.type="BookCSS",a.images=n.images||[],a.pageCount=n.pageCount||2,a.foldSense=50,a.stackCount=4,a.mode="css",a.pages=[],a.duration=n.duration,a.container=t(o),a.options=n,a.drag=p.none,a.pageCount=1==a.pageCount?a.pageCount:2*Math.ceil(a.pageCount/2),a.pageMode=n.pageMode||(F||a.pageCount<=2?e.PAGE_MODE.SINGLE:e.PAGE_MODE.DOUBLE),a.singlePageMode=n.singlePageMode||(F?e.SINGLE_PAGE_MODE.BOOKLET:e.SINGLE_PAGE_MODE.ZOOM),a.swipe_threshold=F?15:50,a.direction=n.direction||e.DIRECTION.LTR,a.startPage=1,a.endPage=a.pageCount,a._activePage=n.openPage||a.startPage,a.hardConfig=n.hard,s="WebKitCSSMatrix"in window||document.body&&"MozPerspective"in document.body.style,a.animateF=function(){TWEEN.getAll().length>0?TWEEN.update():clearInterval(a.animate)},a.init(n),a.skipDrag=!1;var l=function(t){var n=a.eventToPoint(t);if(null!=t.touches&&2==t.touches.length&&null!=a.startTouches){a.zoomDirty=!0;var o=d.getVectorAvg(d.getTouches(t,a.container.offset())),r=d.calculateScale(a.startTouches,d.getTouches(t));a.lastScale,a.contentProvider.zoomScale,o.x,o.y,a.stage.css({transform:"translate3d("+a.left+"px,"+a.top+"px,0) scale3d("+r+","+r+",1)"}),a.lastScale=r,a.lastZoomCenter=o,t.preventDefault()}if(!(null!=t.touches&&t.touches.length>1||null==a.startPoint||null!=a.startTouches)){var s=a.dragPage||n.page;if(1!==a.contentProvider.zoomScale)null==t.touches&&1!=a.isPanning||(a.pan(n),t.preventDefault());else if(!0!==a.skipDrag&&(n.distance,!i(a))){if(null!=a.dragPage||1==n.isInside){null!=a.dragPage?S("set mouse down move"):(n.y=P(n.y,1,a.height-1),n.x=P(n.x,1,n.fullWidth-1));var l=a.corner||n.corner;if(s.isHard){var c=l==e.CORNERS.BR||l==e.CORNERS.TR,u=E(n.distance,n.fullWidth);s.updateAngle(u*(c?-1:1),c)}else s.updatePoint(n,a);s.magnetic=!0,s.magneticCorner=n.corner,t.preventDefault()}if(null==a.dragPage&&null!=s&&0==n.isInside&&1==s.magnetic&&(s.pendingPoint=n,s.animateToReset=!0,a.corner=s.magneticCorner,a.animatePage(s),s.pendingPoint=null,s.magnetic=!1,s.magneticCorner=null),1==a.isPanning&&null==a.dragPage&&1==a.contentProvider.zoomScale){var h=n.x-a.lastPos;performance.now(),a.lastTime,Math.abs(h)>a.swipe_threshold&&(h<0?a.next():a.prev(),a.drag=p.none,a.isPanning=!1,t.preventDefault()),a.lastPos=n.x,a.lastTime=performance.now()}}}},c=function(t){if(null!=t.touches&&0==t.touches.length&&(a.contentProvider.zoomScale,1==a.zoomDirty&&(a.previewObject.contentProvider.zoomScale=d.limitAt(a.previewObject.contentProvider.zoomScale*a.lastScale,1,a.previewObject.contentProvider.maxZoom),a.previewObject.zoomValue=1*a.previewObject.contentProvider.zoomScale,a.previewObject.resize(),a.zoomDirty=!1),a.wrapper.css({transform:""}),a.lastScale=null,a.startTouches=null),a.isPanning=!1,!(null!=t.touches&&t.touches.length>1)&&!0!==a.skipDrag){var n=a.eventToPoint(t);a.dragPage&&(t.preventDefault(),a.dragPage.pendingPoint=n,n.x==a.startPoint.x&&n.y==a.startPoint.y&&1==n.isInside?a.corner==e.CORNERS.BR||a.corner==e.CORNERS.TR?(r(n),!0!==a.dragPage.isFlipping&&a.next()):a.corner!=e.CORNERS.BL&&a.corner!=e.CORNERS.TL||(r(n),!0!==a.dragPage.isFlipping&&a.prev()):!0!==a.dragPage.isFlipping&&(n.distance>n.fullWidth/2?n.x>n.fullWidth/2?a.prev():a.next():(a.dragPage.animateToReset=!0,a.animatePage(a.dragPage))),a.dragPage&&(a.dragPage.pendingPoint=null,a.dragPage.magnetic=!1)),a.drag=p.none}},u=function(t){var n=a.eventToPoint(t),i=t.srcElement||t.originalTarget;a.dragPage&&a.dragPage.magnetic||a.wrapper[0].contains(t.target)&&1==a.contentProvider.zoomScale&&n.x==a.startPoint.x&&n.y==a.startPoint.y&&n.isInsidePage&&a.startPoint.page==n.page&&!n.page.isFlipping&&"A"!==i.nodeName&&(0==a.startPoint.page.side?(a.corner=e.CORNERS.TL,a.prev(),a.startPoint.page=null):(a.corner=e.CORNERS.TR,a.next(),a.startPoint.page=null),a.isPanning=!1)},h=function(t){if(null!=t.touches&&2==t.touches.length&&null==a.startTouches&&(a.startTouches=d.getTouches(t),a.lastScale=1),!(null!=t.touches&&t.touches.length>1||null==t.touches&&0!==t.button)){var n,o=a.eventToPoint(t);a.startPoint=o,a.left=a.left||0,a.top=a.top||0,a.isPanning=!0,a.lastPos=o.x,a.lastTime=performance.now(),!0!==a.skipDrag&&(1!=o.isInside||i(a)||(a.startPoint=o,a.drag=o.drag,a.dragPage=o.page,a.corner=o.corner,S(a.corner),(n=a.dragPage).parent.container.find(".pdff-folding").removeClass("pdff-folding"),n.element.addClass("pdff-folding"),o.page.isHard||o.page.updatePoint(o,a),"0"==o.page.name?a.shadow.css({width:"50%",left:a.direction==e.DIRECTION.RTL?0:"50%",transitionDelay:""}):o.page.name==Math.ceil(a.pageCount/2)-1&&a.shadow.css({width:"50%",left:a.direction==e.DIRECTION.RTL?"50%":0,transitionDelay:""})))}},f=function(e){var t=0;null!=e.wheelDelta?t=e.wheelDelta/120:null!=e.detail&&(t=-e.detail/3);var n=a.contentProvider.zoomScale,i=a.contentProvider.maxZoom;if(t&&(t>0&&n<i||t<0&&n>1)){e.stopPropagation(),e.preventDefault();var o=a.eventToPoint(e),r=a.eventToPoint(e),s=a.container.width()/2,l=a.container.height()/2-23;a.previewObject.zoom(t);var c=a.contentProvider.zoomScale;if(n!==c){var d=c/n;1==c?(a.left=0,a.top=0):(a.left*=d,a.top*=d);var u=(o.raw.x-s)*d,p=(o.raw.y-l)*d;r.raw.x=s+u,r.raw.y=l+p,a.startPoint=r,a.pan(o);var h=a.dragPage||o.page;null==a.dragPage&&null!=h&&1==o.isInside&&1==h.magnetic&&(h.pendingPoint=o,h.animateToReset=!0,a.corner=h.magneticCorner,a.animatePage(h),h.pendingPoint=null,h.magnetic=!1,h.magneticCorner=null)}}},g=a.container[0],m=a.stage[0];g&&(m.addEventListener("mousemove",l,!1),m.addEventListener("touchmove",l,!1),m.addEventListener("mousedown",h,!1),m.addEventListener("click",u,!1),m.addEventListener("mouseup",c,!1),m.addEventListener("touchend",c,!1),m.addEventListener("touchstart",h,!1),1==a.options.scrollWheel&&(m.addEventListener("mousewheel",f,!1),m.addEventListener("DOMMouseScroll",f,!1))),this.dispose=function(){m.removeEventListener("mousemove",l,!1),m.removeEventListener("touchmove",l,!1),m.removeEventListener("mousedown",h,!1),m.removeEventListener("click",u,!1),m.removeEventListener("mouseup",c,!1),m.removeEventListener("touchend",c,!1),m.removeEventListener("touchstart",h,!1),1==a.options.scrollWheel&&(m.removeEventListener("mousewheel",f,!1),m.removeEventListener("DOMMouseScroll",f,!1)),a.updatePageCallback=null,a.flipCallback=null,a.animateF=null,a.stage.remove()}}return B(o,{}),o.prototype={add:function(e){e instanceof W?this.container.append(t(e.element)):this.container.append(t(e))},pan:function(e){var t=this.startPoint,n=this.contentProvider.zoomScale,i=this.left+(e.raw.x-t.raw.x),o=this.top+(e.raw.y-t.raw.y);this.left=Math.round(P(i,-this.shiftWidth,this.shiftWidth)),this.top=Math.round(P(o,-this.shiftHeight,this.shiftHeight)),1==n&&(this.left=0,this.top=0),this.startPoint=e,this.stage.css({transform:"translate3d("+this.left+"px,"+this.top+"px,0)"})},getPageByNumber:function(e){for(var t,n=M(this)?D(this)?e+1:e:Math.floor((e-1)/2),i=0;i<this.pages.length;i++)n==parseInt(this.pages[i].name,10)&&(t=this.pages[i]);return t},getPageSide:function(t){var n=this.direction==e.DIRECTION.RTL,i=this.getPageByNumber(t);if(null!=i)return M(this)?n?i.front:i.back:t%2==0?n?i.back:i.front:n?i.front:i.back},getContentLayer:function(e){var t=this.getPageSide(e);return null==t?null:t.contentLayer}},o.prototype.init=function(e){var n=this;n.stage=t(f.div,{class:"ppdff-flipbook-stage"}),n.wrapper=t(f.div,{class:"ppdff-flipbook-wrapper"}),n.shadow=t(f.div,{class:"ppdff-flipbook-shadow"}),n.container.append(n.stage),n.stage.append(n.wrapper),n.wrapper.append(n.shadow),n.createStack(e)},o.prototype.createStack=function(e){for(var t="red,green,blue,yellow,orange,black".split(","),n=0;n<this.stackCount;n++){e.angles=[,this.stackCount-n],e.stiffness=(this.stackCount-n)/100;var i=new W(e);i.angles[1]=180,i.index=n,i.parent=this,i.textureReady=!1,i.textureRequested=!1,this.wrapper.append(i.element),i.isFlipping=!1,this.pages.push(i),i.color=t[n]}this.children=this.pages},o.prototype.isPageHard=function(e){return d.isHardPage(this.hardConfig,e,this.pageCount,M(this))},o.prototype.setDuration=function(e){this.duration=e},o.prototype.moveBy=function(e){var t=this._activePage+e;t=P(t,this.startPage,this.endPage),this.gotoPage(t)},o.prototype.next=function(t){null==t&&(t=this.direction==e.DIRECTION.RTL?-this.pageMode:this.pageMode),this.moveBy(t)},o.prototype.prev=function(t){null==t&&(t=this.direction==e.DIRECTION.RTL?this.pageMode:-this.pageMode),this.moveBy(t)},o.prototype.eventToPoint=function(n){n=I(n);var i=this.wrapper,o=this.pages,a=this.pageWidth,r=this.fullWidth,s=this.height,l=(t(window),{x:n.clientX,y:n.clientY}),c=l.x-i[0].getBoundingClientRect().left,d=l.y-i[0].getBoundingClientRect().top;l.x=l.x-this.container[0].getBoundingClientRect().left,l.y=l.y-this.container[0].getBoundingClientRect().top;var u,h=this.drag==p.none?c<a?c:r-c:this.drag==p.left?c:r-c,f=c<a?o[this.stackCount/2-1]:o[this.stackCount/2],g=c<this.foldSense?p.left:c>r-this.foldSense?p.right:p.none,m=c,v=d,b=s,w=r,y=this.foldSense,P=e.CORNERS;return u=m>=0&&m<y?v>=0&&v<=y?P.TL:v>=b-y&&v<=b?P.BL:v>y&&v<b-y?P.L:P.NONE:m>=w-y&&m<=w?v>=0&&v<=y?P.TR:v>=b-y&&v<=b?P.BR:v>y&&v<b-y?P.R:P.NONE:P.NONE,{isInsidePage:m>=0&&m<=w&&v>=0&&v<=b,isInside:u!==P.NONE&&u!==P.L&&u!==P.R,x:c,y:d,fullWidth:r,rawDistance:r-c,distance:h,page:f,drag:g,foldSense:this.foldSense,event:n,raw:l,corner:u}},o.prototype.gotoPage=function(e){e=parseInt(e,10),this._activePage=e,1==this.autoPlay&&this.previewObject.setAutoPlay(this.autoPlay),this.updatePage(e),this&&this.thumblist&&this.thumblist.review&&this.thumblist.review()},o.prototype.refresh=function(){this.updatePage(this._activePage),null!=this.flipCallback&&this.flipCallback()},o.prototype.updatePage=function(n){var i=this.direction==e.DIRECTION.RTL,o=M(this),a=(L(n),o?1:2);n=Math.floor(n/a),i&&(n=this.pageCount/a-n);var s=this.oldBaseNumber||0,l=this.pageCount/a,c=this.stackCount,d=Math.floor(c/2);s>n?(this.children[c-1].skipFlip=!0,this.children.unshift(this.children.pop())):s<n&&(this.children[0].skipFlip=!0,this.children.push(this.children.shift()));for(var u=0;u<c;u++){var h=this.children[u];s!==n&&null!=h.currentTween&&h.clearTween(!0);var f,g=h.side,m=n-d+u;i&&(m=o?this.pageCount-m:Math.floor(this.pageCount/2)-m-1);var v=h.name;h.isHard=this.isPageHard(m),h.isHard?h.element.addClass("pdff-hard-page"):(h.element.removeClass("pdff-hard-page"),h.front.css({display:"block"}),h.back.css({display:"block"})),0==m||m==l?h.element.addClass("pdff-cover-page"):h.element.removeClass("pdff-cover-page"),t(h.element).attr("pageNumber")!=m&&(h.front.contentLayer.empty(),h.back.contentLayer.empty()),t(h.element).attr("pageNumber",m),h.isEdge=!1,0==u||u==c-1||(h.isEdge=!1),f=u<d?p.left:p.right,0==h.isFlipping&&(f!==g&&0==h.skipFlip?(this.animatePage(h),null!=this.preFlipCallback&&this.preFlipCallback()):(h.skipFlip=!1,h.element.removeClass("pdff-flipping pdff-quick-turn pdff-folding pdff-left-side pdff-right-side"),h.element.addClass(u<d?"pdff-left-side":"pdff-right-side"),h.side=f)),h.visible=o?i?u<d||h.isFlipping:u>=d||h.isFlipping:m>=0&&m<l||o&&m==l,null!=this.requestPage&&1==h.visible&&(h.name=m.toString(),h.name!=v&&(h.backTextureLoaded=!1,h.frontTextureLoaded=!1,h.backPageStamp="-1",h.frontPageStamp="-1",h.thumbLoaded=!1,h.front.contentLayer.html(""),h.back.contentLayer.html(""),h.frontImage(r.textureLoadFallback),h.backImage(r.textureLoadFallback),this.requestPage())),h.oldDepth=h.depth,h.updateCSS({display:1==h.visible?"block":"none",zIndex:6+(u<d?u-d:d-u),transform:""}),null==h.pendingPoint&&0==h.isFlipping&&h.resetCSS()}0==TWEEN.getAll().length&&clearInterval(this.animate),t(".quick-hint").html(n),this.oldBaseNumber=n,this.updatePageCallback&&this.updatePageCallback()},o.prototype.animatePage=function(e){e.element.addClass("pdff-flipping"),e.isFlipping=!0,null!=this.animate&&clearInterval(this.animate),this.animate=setInterval(this.animateF,30),e.tween(e.pendingPoint)},o}(),V=function(n){function i(i,o,a){n.call(this,a);var r=this;r.type="FlipBook",r.container=i,r.options=a,r.options.source=o,r.contentSource=o,null!=a.height&&a.height.toString().indexOf("%")<0?r.container.height(Math.min(a.height,t(window).height())):r.container.height(a.height),r.options.isLightBox&&window.dfLightBox.closeButton.addClass(r.options.icons.close),r.options.pageSize==e.PAGE_SIZE.DOUBLEINTERNAL&&((Array===r.contentSource.constructor||Array.isArray(r.contentSource)||r.contentSource instanceof Array)&&(r.options.singlePageMode=e.SINGLE_PAGE_MODE.ZOOM),r.container.addClass("pdff-double-internal")),r.options.isLightBox||null==r.container.attr("id")||(r.options.id=r.container.attr("id")),!0!==r.options.parsed&&null!=r.options.links&&e.parseLinks(r.options.links);var s=r.webgl=1==a.webgl&&1==z;if(i.addClass("pdff-container pdff-loading pdff-init pdff-floating pdff-controls-"+r.options.controlsPosition),1==r.options.transparent&&i.addClass("pdff-transparent"),r.options.direction==e.DIRECTION.RTL&&i.addClass("pdff-rtl"),r.container.info=t(f.div,{class:"loading-info"}).appendTo(r.container).html("Loading..."),(-1!==c.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0||N&&!A)&&(r.options.webgl=!1),c.match(/msie\\s[5-9]/i))return r.container.info.html("Your browser (Internet Explorer) is out of date to run pdfflip Flipbook Plugin. <br><a href='http://browsehappy.com/'>Upgrade to a new one</a>").addClass("pdff-old-browser"),i.removeClass("pdff-loading"),r;var l=null==a.backgroundImage||""==a.backgroundImage?"":"url('"+a.backgroundImage+"')";return r.container.css({position:"relative",overflow:"hidden",backgroundColor:a.backgroundColor,backgroundImage:l}),r.init(s,o),null!=r.options.onCreate&&r.options.onCreate(r),r}return B(i,n),i.prototype.init=function(n){var i,o,a=this,s=a.target,l=a.options;1==n?(i=function(){a.container.css({minHeight:300,minWidth:300}),a.stage=new _(T(a.options,{container:a.container})),a.stage.previewObject=a,a.contentProvider=new H(a.contentSource,function(i){var o={pageCount:i.pageCount,stackCount:6,segments:20,width:i.bookSize.width,height:i.bookSize.height};a.checkOpenPage(),a.target=s=a.stage.target=new MOCKUP.Book(T(a.options,o),a.stage),a.extendtarget(),j(a.container,a),s.ui=a.ui,s.container=a.container,i.webgl=n,i.setTarget(a.target),s.getContentLayer=function(t){var n=s.direction==e.DIRECTION.RTL,i=a.stage.cssScene.divLeft.element,o=a.stage.cssScene.divRight.element;return L(s._activePage),M(s)?n?i:o:t%2==0?n?o:i:n?i:o},s.stage=a.stage,s.flipCallback=function(){if(a.contentProvider){a.contentProvider.review("flipCallback");var n,i,o=L(s._activePage),r=s.getPageByNumber(o),l=s.getPageByNumber(o+1),c=s.parent.cssScene.divLeft,d=s.parent.cssScene.divRight;s.pageMode,e.PAGE_MODE.SINGLE,s.direction,e.DIRECTION.RTL,null!=r&&null!=c&&(n=Math.abs(r.geometry.boundingBox.max.x-r.geometry.boundingBox.min.x),i=Math.abs(r.geometry.boundingBox.max.z-r.geometry.boundingBox.min.z),c.rotation.y=.9*-Math.atan2(i,n),c.position.z=.8*i,c.position.x=i/2.5,t(c.element).css({width:n,left:-n/2})),null!=l&&null!=d&&(n=Math.abs(l.geometry.boundingBox.max.x-l.geometry.boundingBox.min.x),i=Math.abs(l.geometry.boundingBox.max.z-l.geometry.boundingBox.min.z),d.rotation.y=.9*Math.atan2(i,n),d.position.z=.8*i,d.position.x=-i/2.5,t(d.element).css({width:n,left:n/2})),null!=a.options.onFlip&&a.options.onFlip(a)}},s.resize=void a.resize(),s.updatePageCallback=function(){a.ui.update(),a.checkCenter(),a.stage.renderRequestPending=!0};var r=t(a.stage.cssScene.divLeft.element),l=t(a.stage.cssScene.divRight.element);s.preFlipCallback=function(){r.empty(),l.empty(),null!=a.options.beforeFlip&&a.options.beforeFlip(a),a.playSound()},t(window).trigger("resize"),r.css({width:i.bookSize.width,height:i.bookSize.height,left:-i.bookSize.width/2}),l.css({width:i.bookSize.width,height:i.bookSize.height,left:i.bookSize.width/2}),s.ease=TWEEN.Easing.Cubic.InOut,s.contentProvider=i,s.duration=a.options.duration,s.gotoPage(s._activePage),s.flipCallback(),null!=a.options.onReady&&a.options.onReady(a)},l,a)},o=function(){MOCKUP.defaults.anisotropy=0,MOCKUP.defaults.groundTexture="blank",THREE.skipPowerOfTwo=!0,function(){_=function(e){function n(n){n=n||{};var i=this;e.call(this,n),i.options=n,i.canvas=t(i.renderer.domElement).addClass("pdff-3dcanvas"),i.container=n.container,i.container.append(i.canvas),i.type="PreviewStage",i.mouse=new THREE.Vector2,i.raycaster=new THREE.Raycaster,i.camera.position.set(0,20,600),i.camera.lookAt(new THREE.Vector3(0,0,0)),i.spotLight.position.set(-220,330,550),i.spotLight.castShadow=!F&&n.webglShadow,i.spotLight.shadow&&(i.spotLight.shadow.bias=-8e-4),i.spotLight.intensity=g(n.spotLightIntensity,r.spotLightIntensity),i.ambientLight.color=new THREE.Color(g(n.ambientLightColor,r.ambientLightColor)),i.ambientLight.intensity=g(n.ambientLightIntensity,r.ambientLightIntensity);var o=new THREE.ShadowMaterial;o.opacity=g(n.shadowOpacity,r.shadowOpacity),i.ground.material=o,i.ground.position.z=-2,i.orbitControl.maxAzimuthAngle=0,i.orbitControl.minAzimuthAngle=0,i.orbitControl.minPolarAngle=1.57,i.orbitControl.maxPolarAngle=1.57,i.orbitControl.mouseButtons.ORBIT=THREE.MOUSE.RIGHT,i.orbitControl.mouseButtons.PAN=-1,i.orbitControl.maxDistance=5e3,i.orbitControl.minDistance=50,i.orbitControl.noZoom=!0,i.selectiveRendering=!0,i.orbitControl.zoomSpeed=5,i.orbitControl.keyPanSpeed=0,i.orbitControl.center.set(0,0,0),i.orbitControl.update(),i.swipe_threshold=F?15:20;var a=i.cssRenderer=new THREE.CSS3DRenderer;t(a.domElement).css({position:"absolute",top:0,pointerEvents:"none"}).addClass("pdff-3dcanvas pdff-csscanvas"),i.container[0].appendChild(a.domElement);var s=i.cssScene=new THREE.Scene,l=document.createElement("div");l.className="pdff-page-content pdff-page-content-left";var c=document.createElement("div");c.className="pdff-page-content pdff-page-content-right";var u=s.divLeft=new THREE.CSS3DObject(l),p=s.divRight=new THREE.CSS3DObject(c);function f(){i.renderRequestPending=!0}s.add(u),s.add(p),i.resizeCallback=function(){a.setSize(i.canvas.width(),i.canvas.height())},window.addEventListener(h.move,f,!1),window.addEventListener("keyup",f,!1),i.dispose=function(){i.clearChild(),i.render(),window.removeEventListener(h.move,f,!1),1==i.options.scrollWheel&&(i.renderer.domElement.removeEventListener("mousewheel",m,!1),i.renderer.domElement.removeEventListener("DOMMouseScroll",m,!1)),window.removeEventListener("keyup",f,!1),i.renderer.domElement.removeEventListener("mousemove",v,!1),i.renderer.domElement.removeEventListener("touchmove",v,!1),i.renderer.domElement.removeEventListener("mousedown",b,!1),i.renderer.domElement.removeEventListener("touchstart",b,!1),i.renderer.domElement.removeEventListener("mouseup",w,!1),i.renderer.domElement.removeEventListener("touchend",w,!1),i.canvas.remove(),a.domElement.parentNode.removeChild(a.domElement),a=null,i.renderCallback=null,i.renderCallback=null,i.orbitControl.dispose(),i.orbitControl=null,i.renderer.dispose(),i.cancelRAF()},i.renderCallback=function(){TWEEN.getAll().length>0&&(i.renderRequestPending=!0),TWEEN.update(),a.render(s,i.camera)};var m=function(e){var t=0;if(null!=e.wheelDelta?t=e.wheelDelta:null!=e.detail&&(t=-e.detail),t){var n=i.previewObject.contentProvider.zoomScale;(t>0&&1==n||t<0&&n>1)&&e.preventDefault(),i.previewObject.zoom(t>0?1:-1)}f()},v=function(e){if(i.renderRequestPending=!0,e=I(e),i.isMouseDown&&0!=e.movementX&&0!=e.movementY&&(i.isMouseMoving=!0),null!=e.touches&&2==e.touches.length&&null!=i.startTouches){i.zoomDirty=!0;var t=d.getVectorAvg(d.getTouches(e,i.container.offset())),n=d.calculateScale(i.startTouches,d.getTouches(e));return i.lastScale,i.previewObject.contentProvider.zoomScale,t.x,t.y,i.camera.position.z=i.originalZ/n,i.lastScale=n,i.lastZoomCenter=t,void e.preventDefault()}if(1==i.isMouseDown&&1==i.previewObject.contentProvider.zoomScale){var o=e.pageX-i.lastPos;performance.now(),i.lastTime,Math.abs(o)>i.swipe_threshold&&(o<0?i.target.next():i.target.prev(),e.preventDefault(),i.isMouseDown=!1),i.lastPos=e.pageX,i.lastTime=performance.now()}},b=function(e){null!=(e=I(e)).touches&&2==e.touches.length&&null==i.startTouches&&(i.startTouches=d.getTouches(e),i.lastScale=1,i.originalZ=1*i.camera.position.z),document.activeElement.blur(),i.mouseValue=e.pageX+","+e.pageY,i.isMouseMoving=!1,i.isMouseDown=!0,i.lastPos=e.pageX,i.lastTime=performance.now()},w=function(e){null!=(e=I(e)).touches&&0==e.touches.length&&(i.previewObject.contentProvider.zoomScale,1==i.zoomDirty&&(i.previewObject.contentProvider.zoomScale=d.limitAt(i.previewObject.contentProvider.zoomScale*i.lastScale,1,i.previewObject.contentProvider.maxZoom),i.previewObject.zoomValue=1*i.previewObject.contentProvider.zoomScale,i.previewObject.resize(),i.zoomDirty=!1),i.lastScale=null,i.startTouches=null),null!=e.touches&&e.touches.length>1||function(e){if(i.isMouseDown=!1,0!==e.button)return this;var n=e.pageX+","+e.pageY;if(i.isMouseMoving);else if(n==i.mouseValue){e=e||window.event,e=t.event.fix(e);var o=i.mouse,a=i.raycaster;o.x=e.offsetX/i.canvas.innerWidth()*2-1,o.y=1-e.offsetY/i.canvas.innerHeight()*2,a.setFromCamera(o,i.camera);var r=a.intersectObjects(i.target instanceof MOCKUP.Bundle?i.target.children:[i.target],!0);if(r.length>0){var s,l=0;do{s=null!=r[l]?r[l].object:null,l++}while((s instanceof THREE.BoxHelper||!(s instanceof MOCKUP.Paper)||1==s.isFlipping)&&l<r.length);null!=s.userData.object||(s.angles[1]>90?1!=s.isEdge&&i.target.next():1!=s.isEdge&&i.target.prev())}}}(e)};return i.renderer.domElement.addEventListener("mousemove",v,!1),i.renderer.domElement.addEventListener("touchmove",v,!1),i.renderer.domElement.addEventListener("mousedown",b,!1),i.renderer.domElement.addEventListener("touchstart",b,!1),i.renderer.domElement.addEventListener("mouseup",w,!1),i.renderer.domElement.addEventListener("touchend",w,!1),1==i.options.scrollWheel&&(i.renderer.domElement.addEventListener("mousewheel",m,!1),i.renderer.domElement.addEventListener("DOMMouseScroll",m,!1)),t(i.renderer.domElement).css({display:"block"}),t(window).trigger("resize"),this}return B(n,e),n.prototype.width=function(){return this.container.width()},n.prototype.height=function(){return this.container.height()},n}(MOCKUP.Stage),MOCKUP.PreviewStage=_;var n=function(t){function n(e,n){(e=e||{}).folds=1,t.call(this,e,n),this.angle=0,this.isFlipping=!1,this.material.materials[5].transparent=!0,this.material.materials[4].transparent=!0,this.type="BookPaper"}return B(n,t),n.prototype.tween=function(t,n){var i=this;i.originalStiff=i.stiffness;var o=i.newStiffness,a=M(i.parent),r=n-t,s=t>90,l=i.parent.direction==e.DIRECTION.RTL;i.init={angle:t,angle2:t<90?0:180,stiff:i.originalStiff,index:s&&!l||!s&&l?1:0},i.first={angle:t+r/4,angle2:90,stiff:i.originalStiff,index:s&&!l||!s&&l?1:.25},i.mid={angle:t+2*r/4,angle2:t<90?135:45,stiff:i.newStiffness,index:.5},i.mid2={angle:t+3*r/4,angle2:t<90?180:0,stiff:i.newStiffness,index:s&&!l||!s&&l?.25:1},i.end={angle:n,angle2:t<90?180:0,stiff:i.newStiffness,index:s&&!l||!s&&l?0:1},i.isFlipping=!0,a&&(!s&&!l||s&&l)&&(i.material.materials[5].opacity=i.material.materials[4].opacity=0,i.castShadow=!1),i.currentTween=new TWEEN.Tween(i.init).to({angle:[i.first.angle,i.mid.angle,i.mid2.angle,i.end.angle],angle2:[i.first.angle2,i.mid.angle2,i.mid2.angle2,i.end.angle2],stiff:[i.first.stiff,i.mid.stiff,i.mid2.stiff,i.end.stiff],index:[i.first.index,i.mid.index,i.mid2.index,i.end.index]},i.parent.duration).onUpdate(function(e){var t;t=this,i.angles[1]=t.angle,i.angles[4]=i.isHard?t.angle:t.angle2,1==i.isHard?i.stiffness=0:(i.stiffness=t.stiff/(o+1e-5)*(i.newStiffness+1e-5),i.stiffness=isNaN(i.stiffness)?0:t.stiff),a&&(i.material.materials[5].opacity=i.material.materials[4].opacity=t.index,i.castShadow=t.index>.5),i.updateAngle(!0)}).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(function(e){i.stiffness=i.newStiffness,i.updateAngle(),i.material.materials[5].opacity=i.material.materials[4].opacity=1,i.castShadow=!0,i.isFlipping=!1,i.parent&&i.parent.refresh&&i.parent.refresh()}).start()},n}(MOCKUP.FlexBoxPaper);MOCKUP.BookPaper=n;var i=function(t){function n(n,i){(n=n||{}).segments=n.segments||50,this.pageCount=n.pageCount,this.height=n.height,this.width=n.width,this.pageCount=1==this.pageCount?this.pageCount:2*Math.ceil(this.pageCount/2),this.direction=n.direction||e.DIRECTION.LTR,this.startPage=1,this.endPage=this.pageCount,this.stackCount=n.stackCount||6,this.materials=[],t.call(this,n,i),this.angles=[0,0,0,0,0,0],this.stiffness=null==n.stiffness?1.5:n.stiffness,this.hardConfig=n.hard,this._activePage=n.openPage||this.startPage,this.createStack(n),this.pageMode=n.pageMode||(F||this.pageCount<=2?e.PAGE_MODE.SINGLE:e.PAGE_MODE.DOUBLE),this.singlePageMode=n.singlePageMode||(F?e.SINGLE_PAGE_MODE.BOOKLET:e.SINGLE_PAGE_MODE.ZOOM),this.type="Book"}return B(n,t),n.prototype.getPageByNumber=function(e){var t=M(this)?D(this)?e+1:e:Math.floor((e-1)/2);return this.getObjectByName(t.toString())},n.prototype.isPageHard=function(e){return d.isHardPage(this.hardConfig,e,this.pageCount)},n.prototype.activePage=function(e){if(null==e)return this._activePage;this.gotoPage(e)},n.prototype.gotoPage=function(e){e=parseInt(e,10),this._activePage=e,1==this.autoPlay&&this.previewObject.setAutoPlay(this.autoPlay),this.updatePage(e),this&&this.thumblist&&this.thumblist.review&&this.thumblist.review()},n.prototype.moveBy=function(e){var t=this._activePage+e;t=P(t,this.startPage,this.endPage),this.gotoPage(t)},n.prototype.next=function(t){null==t&&(t=this.direction==e.DIRECTION.RTL?-this.pageMode:this.pageMode),this.moveBy(t)},n.prototype.prev=function(t){null==t&&(t=this.direction==e.DIRECTION.RTL?this.pageMode:-this.pageMode),this.moveBy(t)},n.prototype.updateAngle=function(){for(var e=this.angles[1],t=this.angles[4]-e,n=this.stackCount,i=0;i<n;i++){var o=this.children[i];o.angles[1]=e+i*t/(100*n),o.stiffness=this.stiffness,o.updateAngle()}},n.prototype.refresh=function(){this.updatePage(this._activePage),null!=this.flipCallback&&this.flipCallback()},n.prototype.updatePage=function(t){var n=this.direction==e.DIRECTION.RTL,i=M(this),o=(L(t),i?1:2);t=Math.floor(t/o),n&&(t=this.pageCount/o-t);var a=this.oldBaseNumber||0,s=this.pageCount/o,l=this.stackCount,c=i?0:(.5-Math.abs(s/2-t)/s)/this.stiffness,d=Math.floor(l/2),u=!1;a>t?(u=!0,this.children[l-1].skipFlip=!0,this.children.unshift(this.children.pop())):a<t&&(this.children[0].skipFlip=!0,this.children.push(this.children.shift()));for(var p=5/s,h=p*t/2,f=p*(s-t)/2,g=h<f?f:h,m=0;m<l;m++){var v,b=this.children[m],w=(b.color,b.angles[1]),y=t-d+m;n&&(y=i?this.pageCount-y:Math.floor(this.pageCount/2)-y-1);var P=b.isHard=this.isPageHard(y),x=b.name;b.isEdge=!1,0==m?b.depth=h<.4?.4:h:m==l-1?b.depth=f<.4?.4:f:(b.depth=.4,b.isEdge=!1),1==b.isFlipping&&(b.depth=.4),b.position.x=0;var C=.02*m,E=180-.02*(m-d)+.02*m;if(m<d?(b.newStiffness=P||0==this.stiffness?0:c/(t/s)/4,v=C,b.position.z=g-.4*(-m+d),1==u&&(b.position.z-=.4)):(v=E,b.newStiffness=P||0==this.stiffness?0:c/(Math.abs(s-t)/s)/4,b.position.z=g-.4*(-l+m+d+1)-b.depth),0==b.isFlipping)if(Math.abs(w-v)>20&&0==b.skipFlip){b.depth=.4;var S=b.stiffness;S=w>v?c/(Math.abs(s-t)/s)/4:c/(t/s)/4,b.position.z+=.4,b.stiffness=isNaN(S)?b.stiffness:S,b.updateAngle(!0),b.targetStiffness=P?0:m<t?c/(Math.abs(s-t)/s)/4:c/(t/s)/4,b.targetStiffness=P?0:isNaN(b.targetStiffness)?b.stiffness:b.targetStiffness,b.isFlipping=!0,b.tween(w,v),null!=this.preFlipCallback&&this.preFlipCallback()}else b.skipFlip=!1,b.newStiffness=isNaN(b.newStiffness)?0:b.newStiffness,b.angles[1]==v&&b.stiffness==b.newStiffness&&b.depth==b.oldDepth||(b.angles[1]=b.angles[4]=v,b.stiffness=b.newStiffness,b.updateAngle(!0));b.visible=i?n?m<d||b.isFlipping:m>=d||b.isFlipping:y>=0&&y<s||i&&y==s,null!=this.requestPage&&1==b.visible&&(b.name=y.toString(),b.name!=x&&(b.textureLoaded=!1,b.frontImage(r.textureLoadFallback),b.frontPageStamp="-1",b.frontTextureLoaded=!1,b.thumbLoaded=!1,b.backImage(r.textureLoadFallback),b.backPageStamp="-1",b.backTextureLoaded=!1,this.requestPage())),b.oldDepth=b.depth;var k=Math.abs(b.geometry.boundingBox.max.x)<Math.abs(b.geometry.boundingBox.min.x)?b.geometry.boundingBox.max.x:b.geometry.boundingBox.min.x;b.position.x=1==b.isEdge&&0==b.isFlipping?m<d?k:-k:0}this.oldBaseNumber=t,null!=this.updatePageCallback&&this.updatePageCallback()},n.prototype.createCover=function(e){e.width=2*e.width,this.cover=new MOCKUP.BiFold(e),this.add(this.cover)},n.prototype.createStack=function(e){for(var t="red,green,blue,yellow,orange,black".split(","),n=0;n<this.stackCount;n++){e.angles=[,this.stackCount-n],e.stiffness=(this.stackCount-n)/100;var i=new MOCKUP.BookPaper(e);i.angles[1]=180,i.index=n,i.updateAngle(),i.textureReady=!1,i.textureRequested=!1,this.add(i),i.color=t[n],i.position.z=-1*n}},n.prototype.shininess=function(e){if(null==e)return this.mainObject.shininess();this.mainObject.shininess(e)},n.prototype.bumpScale=function(e){if(null==e)return this.mainObject.bumpScale();this.mainObject.bumpScale(e)},n.prototype.frontImage=function(e){if(null==e)return this.mainObject.frontImage();this.mainObject.frontImage(e)},n.prototype.backImage=function(e){if(null==e)return this.mainObject.backImage();this.mainObject.backImage(e)},n}(MOCKUP.Bundle);MOCKUP.Book=i}(),null!=i&&i()},null==window.MOCKUP?(a.updateInfo("Loading Interface ..."),"function"==typeof define&&define.amd?(requirejs.config({paths:{three:r.threejsSrc.replace(".js","")},shim:{three:{exports:"THREE"}}}),require(["three"],function(t){return window.THREE=t,O(r.utilsSrc+"?ver="+e.version,function(){o()}),t})):O(r.threejsSrc+"?ver="+e.version,function(){O(r.utilsSrc+"?ver="+e.version,function(){o()})})):o()):a.contentProvider=new H(a.contentSource,function(e){var i={pageCount:e.pageCount,contentSourceType:e.contentSourceType};a.checkOpenPage(),a.target=s=new G(T(a.options,i),a.container),a.target.previewObject=a,a.extendtarget(),j(a.container,a),e.webgl=n,e.setTarget(a.target),e.waitPeriod=2,s.ease=TWEEN.Easing.Quadratic.InOut,s.duration=a.options.duration,s.container=a.container,s.updatePageCallback=function(){a.ui.update(),a.checkCenter()},s.resize=void a.resize(),t(window).trigger("resize"),s.flipCallback=function(){a.contentProvider&&(a.contentProvider.review("flipCallback"),null!=a.options.onFlip&&a.options.onFlip(a))},s.preFlipCallback=function(){null!=a.options.beforeFlip&&a.options.beforeFlip(a),a.playSound()},s.gotoPage(s._activePage),s.flipCallback(),null!=a.options.onReady&&a.options.onReady(a)},l,a)},i.prototype.extendtarget=function(){var e=this;e.target.previewObject=e,e.target.reset=function(){for(var t=0;t<e.target.children.length;t++){var n=e.target.children[t];n.skipFlip=!0,n.name="-2"}e.contentProvider.annotedPage="-2",e.target.refresh()}},i.prototype.getURLHash=function(){if(null!=this.options.id){var e="pdfflip-"+(null!=this.options.slug?this.options.slug:this.options.id)+"/";null!=this.target&&null!=this.target._activePage&&(e+=this.target._activePage+"/"),window.location.hash=e}return window.location.href},i.prototype.checkOpenPage=function(){if(null!=this.options.id){var e=t("#"+this.options.id);if(e.length>0&&null!=e.data("page")){var n=parseInt(e.data("page"),10);isNaN(n)||(this.options.openPage=n)}}},i.prototype.end=function(){this.target.gotoPage(this.target.endPage)},i.prototype.gotoPage=function(e){this.target.gotoPage(e),null!=this.ui&&this.ui.update()},i.prototype.prev=function(){this.target.prev()},i.prototype.next=function(){this.target.next()},i.prototype.updateInfo=function(e){this.container&&this.container.info&&this.container.info.html&&this.container.info.html(e)},i}(U);t.fn.extend({shelf:function(){},flipBook:function(e,n){return new V(t(this),e,(i=n,t.extend(!0,{},r,i)));var i}})}(pdfflip,jQuery),function(e){if(e.URL=e.URL||e.webkitURL,e.Blob&&e.URL)try{return void new Blob}catch(e){}var t=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||function(e){var t=function(e){return Object.prototype.toString.call(e).match(/^\\[object\\s(.*)\\]$/)[1]},n=function(){this.data=[]},i=function(e,t,n){this.data=e,this.size=e.length,this.type=t,this.encoding=n},o=n.prototype,a=i.prototype,r=e.FileReaderSync,s=function(e){this.code=this[this.name=e]},l="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),c=l.length,d=e.URL||e.webkitURL||e,u=d.createObjectURL,p=d.revokeObjectURL,h=d,f=e.btoa,g=e.atob,m=e.ArrayBuffer,v=e.Uint8Array,b=/^[\\w-]+:\\/*\\[?[\\w\\.:-]+\\]?(?::[0-9]+)?/;for(i.fake=a.fake=!0;c--;)s.prototype[l[c]]=c+1;return d.createObjectURL||(h=e.URL=function(e){var t,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=e,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(t=e.match(b),n.origin=t&&t[1])),n}),h.createObjectURL=function(e){var t,n=e.type;return null===n&&(n="application/octet-stream"),e instanceof i?(t="data:"+n,"base64"===e.encoding?t+";base64,"+e.data:"URI"===e.encoding?t+","+decodeURIComponent(e.data):f?t+";base64,"+f(e.data):t+","+encodeURIComponent(e.data)):u?u.call(d,e):void 0},h.revokeObjectURL=function(e){"data:"!==e.substring(0,5)&&p&&p.call(d,e)},o.append=function(e){var n=this.data;if(v&&(e instanceof m||e instanceof v)){for(var o="",a=new v(e),l=0,c=a.length;l<c;l++)o+=String.fromCharCode(a[l]);n.push(o)}else if("Blob"===t(e)||"File"===t(e)){if(!r)throw new s("NOT_READABLE_ERR");var d=new r;n.push(d.readAsBinaryString(e))}else e instanceof i?"base64"===e.encoding&&g?n.push(g(e.data)):"URI"===e.encoding?n.push(decodeURIComponent(e.data)):"raw"===e.encoding&&n.push(e.data):("string"!=typeof e&&(e+=""),n.push(unescape(encodeURIComponent(e))))},o.getBlob=function(e){return arguments.length||(e=null),new i(this.data.join(""),e,"raw")},o.toString=function(){return"[object BlobBuilder]"},a.slice=function(e,t,n){var o=arguments.length;return o<3&&(n=null),new i(this.data.slice(e,o>1?t:this.data.length),n,this.encoding)},a.toString=function(){return"[object Blob]"},a.close=function(){this.size=0,delete this.data},n}(e);e.Blob=function(e,n){var i=n&&n.type||"",o=new t;if(e)for(var a=0,r=e.length;a<r;a++)Uint8Array&&e[a]instanceof Uint8Array?o.append(e[a].buffer):o.append(e[a]);var s=o.getBlob(i);return!s.slice&&s.webkitSlice&&(s.slice=s.webkitSlice),s};var n=Object.getPrototypeOf||function(e){return e.__proto__};e.Blob.prototype=n(new e.Blob)}(window),function(e){var t,n=e.Uint8Array,i=e.HTMLCanvasElement,o=i&&i.prototype,a=/\\s*;\\s*base64\\s*(?:;|$)/i,r="toDataURL";n&&(t=new n([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])),i&&!o.toBlob&&(o.toBlob=function(e,i){if(i||(i="image/png"),this.mozGetAsFile)e(this.mozGetAsFile("canvas",i));else if(this.msToBlob&&/^\\s*image\\/png\\s*(?:$|;)/i.test(i))e(this.msToBlob());else{var o,s=Array.prototype.slice.call(arguments,1),l=this[r].apply(this,s),c=l.indexOf(","),d=l.substring(c+1),u=a.test(l.substring(0,c));Blob.fake?((o=new Blob).encoding=u?"base64":"URI",o.data=d,o.size=d.length):n&&(o=u?new Blob([function(e){for(var i,o,a=e.length,r=new n(a/4*3|0),s=0,l=0,c=[0,0],d=0,u=0;a--;)o=e.charCodeAt(s++),255!==(i=t[o-43])&&null!=i&&(c[1]=c[0],c[0]=o,u=u<<6|i,4==++d&&(r[l++]=u>>>16,61!==c[1]&&(r[l++]=u>>>8),61!==c[0]&&(r[l++]=u),d=0));return r}(d)],{type:i}):new Blob([decodeURIComponent(d)],{type:i})),e(o)}},o.toDataURLHD?o.toBlobHD=function(){r="toDataURLHD";var e=this.toBlob();return r="toDataURL",e}:o.toBlobHD=o.toBlob)}(window),function(){if("performance"in window==0&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==0){var e=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-e}}}(),function(){var e,t,n=n||(e=[],{getAll:function(){return e},removeAll:function(){e=[]},add:function(t){e.push(t)},remove:function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)},update:function(t){if(0===e.length)return!1;var n=0;for(t=null!=t?t:window.performance.now();n<e.length;)e[n].update(t)?n++:e.splice(n,1);return!0}});n.Tween=function(e){var t=e,i={},o={},a={},r=1e3,s=0,l=!1,c=!1,d=!1,u=0,p=null,h=n.Easing.Linear.None,f=n.Interpolation.Linear,g=[],m=null,v=!1,b=null,w=null,y=null;for(var P in e)i[P]=parseFloat(e[P],10);this.to=function(e,t){return null!=t&&(r=t),o=e,this},this.start=function(e){n.add(this),c=!0,v=!1,p=null!=e?e:window.performance.now(),p+=u;for(var r in o){if(o[r]instanceof Array){if(0===o[r].length)continue;o[r]=[t[r]].concat(o[r])}null!==i[r]&&(i[r]=t[r],i[r]instanceof Array==0&&(i[r]*=1),a[r]=i[r]||0)}return this},this.stop=function(){return c?(n.remove(this),c=!1,null!==y&&y.call(t),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var e=0,t=g.length;e<t;e++)g[e].stop()},this.complete=function(){return c?(n.remove(this),c=!1,null!==w&&w.call(t),this.completeChainedTweens(),this):this},this.completeChainedTweens=function(){for(var e=0,t=g.length;e<t;e++)g[e].complete()},this.delay=function(e){return u=e,this},this.repeat=function(e){return s=e,this},this.yoyo=function(e){return l=e,this},this.easing=function(e){return h=null==e?h:e,this},this.interpolation=function(e){return f=e,this},this.chain=function(){return g=arguments,this},this.onStart=function(e){return m=e,this},this.onUpdate=function(e){return b=e,this},this.onComplete=function(e){return w=e,this},this.onStop=function(e){return y=e,this},this.update=function(e){var n,c,y;if(e<p)return!0;!1===v&&(null!==m&&m.call(t),v=!0),y=h(c=(c=(e-p)/r)>1?1:c);for(n in o)if(null!==i[n]){var P=i[n]||0,x=o[n];x instanceof Array?t[n]=f(x,y):("string"==typeof x&&(x=x.startsWith("+")||x.startsWith("-")?P+parseFloat(x,10):parseFloat(x,10)),"number"==typeof x&&(t[n]=P+(x-P)*y))}if(null!==b&&b.call(t,y),1===c){if(s>0){isFinite(s)&&s--;for(n in a){if("string"==typeof o[n]&&(a[n]=a[n]+parseFloat(o[n],10)),l){var C=a[n];a[n]=o[n],o[n]=C}i[n]=a[n]}return l&&(d=!d),p=e+u,!0}null!==w&&w.call(t);for(var E=0,S=g.length;E<S;E++)g[E].start(p+r);return!1}return!0}},n.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}}},n.Interpolation={Linear:function(e,t){var i=e.length-1,o=i*t,a=Math.floor(o),r=n.Interpolation.Utils.Linear;return t<0?r(e[0],e[1],o):t>1?r(e[i],e[i-1],i-o):r(e[a],e[a+1>i?i:a+1],o-a)},Bezier:function(e,t){for(var i=0,o=e.length-1,a=Math.pow,r=n.Interpolation.Utils.Bernstein,s=0;s<=o;s++)i+=a(1-t,o-s)*a(t,s)*e[s]*r(o,s);return i},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var i=n.Interpolation.Utils.Factorial;return i(e)/i(t)/i(e-t)},Factorial:(t=[1],function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}),CatmullRom:function(e,t,n,i,o){var a=.5*(n-e),r=.5*(i-t),s=o*o;return(2*t-2*n+a+r)*(o*s)+(-3*t+3*n-2*a-r)*s+a*o+t}}},window.TWEEN=n}(),pdfflip.createBlob=function(e,t){if("undefined"!=typeof Blob)return new Blob([e],{type:t});var n=new MozBlobBuilder;return n.append(e),n.getBlob(t)},pdfflip.createObjectURL=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return function(t,n){if("undefined"!=typeof URL&&URL.createObjectURL){var i=pdfflip.createBlob(t,n);return URL.createObjectURL(i)}for(var o="data:"+n+";base64,",a=0,r=t.length;a<r;a+=3){var s=255&t[a],l=255&t[a+1],c=255&t[a+2];o+=e[s>>2]+e[(3&s)<<4|l>>4]+e[a+1<r?(15&l)<<2|c>>6:64]+e[a+2<r?63&c:64]}return o}}();var ThumbList=function(){function e(t){var n=t&&t.w+"px"||"100%",i=t&&t.h+"px"||"100%",o=this.itemHeight=t.itemHeight;this.items=t.items,this.generatorFn=t.generatorFn,this.totalRows=t.totalRows||t.items&&t.items.length,this.addFn=t.addFn,this.scrollFn=t.scrollFn;var a=e.createScroller(o*this.totalRows);this.container=e.createContainer(n,i),this.container.appendChild(a),this.screenItemsLen=Math.ceil(t.h/o),this.offsetItems=this.screenItemsLen,this.cachedItemsLen=this.screenItemsLen+2*this.offsetItems,this._renderChunk(this.container,0);var r=this;function s(e){var t=e.target.scrollTop;if(!r.lastRepaintY||Math.abs(t-r.lastRepaintY)>=r.offsetItems*r.itemHeight){var n=parseInt(t/o,10)-r.offsetItems;r._renderChunk(r.container,n<0?0:n),r.lastRepaintY=t}r.lastScrolled=Date.now(),null!=r.scrollFn&&r.scrollFn(),e.preventDefault&&e.preventDefault()}r.lastRepaintY=0,this.screenItemsLen,r.dispose=function(){r.container&&r.container.parentNode&&r.container.parentNode.removeChild(r.container),r.container.removeEventListener("scroll",s)},r.container.addEventListener("scroll",s)}return e.prototype.reset=function(e){this.screenItemsLen=Math.ceil(e/this.itemHeight),this.cachedItemsLen=this.screenItemsLen+2*this.offsetItems;var t=parseInt(this.lastRepaintY/this.itemHeight,10)-this.offsetItems;this.needReset=!0,this._renderChunk(this.container,Math.max(t,0))},e.prototype.createRow=function(e){var t;return this.generatorFn&&((t=this.generatorFn(e)).classList.add("pdff-vrow"),t.style.position="absolute",t.style.top=e*this.itemHeight+"px",t.setAttribute("index",e)),t},e.prototype._renderChunk=function(e,t){var n=null==this.range;this.range=this.range||{min:0,max:this.cachedItemsLen};var i=this.range,o=i.min,a=i.max,r=!!n||t>=o;if(n||t!=o||0!=this.needReset){var s,l=n?o:r?a:t;l=l>this.totalRows?this.totalRows:l<0?0:l;var c=t+this.cachedItemsLen;for(c=c>this.totalRows?this.totalRows:c,s=l;s<c;s++)r?e.appendChild(this.createRow(s)):e.insertBefore(this.createRow(s),e.childNodes[1+s-l]),null!=this.addFn&&this.addFn(s);if(Math.abs(t-o),this.needReset=!1,!n&&e.childNodes.length>this.cachedItemsLen+1)for(var d=r?1:1+this.cachedItemsLen,u=d+(c-l);u>d;u--)e.childNodes[d]&&this.container.removeChild(e.childNodes[d]);this.range.min=t,this.range.max=c}},e.createContainer=function(e,t){var n=document.createElement("div");return n.style.width=e,n.style.height=t,n.style.overflow="auto",n.style.position="relative",n.style.padding=0,n},e.createScroller=function(e){var t=document.createElement("div");return t.style.opacity=0,t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.width="1px",t.style.height=e+"px",t},e}(),BookMarkViewer=function(){function e(e){this.outline=null,this.lastToggleIsShow=!0,this.container=e.container,this.linkService=e.linkService,this.outlineItemClass=e.outlineItemClass||"outlineItem",this.outlineToggleClass=e.outlineToggleClass||"outlineItemToggler",this.outlineToggleHiddenClass=e.outlineToggleHiddenClass||"outlineItemsHidden"}return e.prototype={dispose:function(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.linkService=null},reset:function(){this.outline=null,this.lastToggleIsShow=!0;for(var e=this.container;e.firstChild;)e.removeChild(e.firstChild)},_dispatchEvent:function(e){var t=document.createEvent("CustomEvent");t.initCustomEvent("outlineloaded",!0,!0,{outlineCount:e}),this.container.dispatchEvent(t)},_bindLink:function(e,t){var n=this.linkService;if(1==t.custom)e.href=n.getCustomDestinationHash(t.dest),e.onclick=function(e){return n.customNavigateTo(t.dest),!1};else{if(t.url)return void PDFJS.addLinkAttributes(e,{url:t.url});e.href=n.getDestinationHash(t.dest),e.onclick=function(e){return n.navigateTo(t.dest),!1}}},_addToggleButton:function(e){var t=document.createElement("div");t.className=this.outlineToggleClass+" "+this.outlineToggleHiddenClass,t.onclick=function(n){if(n.stopPropagation(),t.classList.toggle(this.outlineToggleHiddenClass),n.shiftKey){var i=!t.classList.contains(this.outlineToggleHiddenClass);this._toggleOutlineItem(e,i)}}.bind(this),e.insertBefore(t,e.firstChild)},_toggleOutlineItem:function(e,t){this.lastToggleIsShow=t;for(var n=e.querySelectorAll("."+this.outlineToggleClass),i=0,o=n.length;i<o;++i)n[i].classList[t?"remove":"add"](this.outlineToggleHiddenClass)},toggleOutlineTree:function(){this.outline&&this._toggleOutlineItem(this.container,!this.lastToggleIsShow)},render:function(e){var t=e&&e.outline||null,n=0;if(this.outline&&this.reset(),this.outline=t,t){for(var i=document.createDocumentFragment(),o=[{parent:i,items:this.outline}],a=!1;o.length>0;)for(var r=o.shift(),s=r.custom,l=0,c=r.items.length;l<c;l++){var d=r.items[l],u=document.createElement("div");u.className=this.outlineItemClass;var p=document.createElement("a");if(null==d.custom&&null!=s&&(d.custom=s),this._bindLink(p,d),p.textContent=d.title.replace(/\\x00/g,""),u.appendChild(p),d.items&&d.items.length>0){a=!0,this._addToggleButton(u);var h=document.createElement("div");h.className=this.outlineItemClass+"s",u.appendChild(h),o.push({parent:h,custom:d.custom,items:d.items})}r.parent.appendChild(u),n++}a&&(null!=this.container.classList?this.container.classList.add(this.outlineItemClass+"s"):null!=this.container.className&&(this.container.className+=" picWindow")),this.container.appendChild(i),this._dispatchEvent(n)}}},e}(),DFLightBox=function(e){function t(t,n){this.duration=300;var i=this;return i.lightboxWrapper=e("<div>").addClass("pdff-lightbox-wrapper"),i.container=e("<div>").addClass("pdff-container").appendTo(i.lightboxWrapper),i.controls=e("<div>").addClass("pdff-lightbox-controls").appendTo(i.lightboxWrapper),i.closeButton=e("<div>").addClass("pdff-lightbox-close pdff-ui-btn").on("click",function(){$("body").css("overflow","visible"),i.close(t)}).appendTo(i.controls),i.lightboxWrapper.append(i.container),i}return t.prototype.show=function(t){return 0==this.lightboxWrapper.parent().length&&e("body").append(this.lightboxWrapper),this.lightboxWrapper.fadeIn(this.duration,t),this},t.prototype.close=function(e){return this.lightboxWrapper.fadeOut(this.duration),setTimeout(e,this.duration),this},t}(jQuery);pdfflip.Share=function(e){function t(t,n){var i=this,o="<div>",a="pdff-share-button",r="width=500,height=400";i.isOpen=!1,i.shareUrl="",i.wrapper=e('<div class="pdff-share-wrapper" style="display: none;">').on("click",function(e){i.close()}),i.box=e('<div class="pdff-share-box">').on("click",function(e){e.preventDefault(),e.stopPropagation()}).appendTo(i.wrapper).html('<span class="pdff-share-title">'+n.text.share+"</span>"),i.urlInput=e('<textarea class="pdff-share-url">').on("click",function(){e(this).select()}),i.facebook=e(o,{class:a+" pdff-share-facebook "+n.icons.facebook}).on("click",function(e){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(i.shareUrl),"Sharer",r)}),i.google=e(o,{class:a+" pdff-share-google "+n.icons.google}).on("click",function(e){window.open("https://plus.google.com/share?url="+encodeURIComponent(i.shareUrl),"Sharer",r)}),i.twitter=e(o,{class:a+" pdff-share-twitter "+n.icons.twitter}).on("click",function(e){window.open("http://twitter.com/share?url="+encodeURIComponent(i.shareUrl),"Sharer",r)}),i.mail=e("<a>",{class:a+" pdff-share-mail "+n.icons.mail,href:"mailto:?subject=I wanted you to see this FlipBook&body=Check out this site "+encodeURIComponent(i.shareUrl),target:"_blank"}).on("click",function(t){e(this).attr("href","mailto:?subject=I wanted you to see this FlipBook&body=Check out this site "+encodeURIComponent(i.shareUrl)),t.stopPropagation()}),i.box.append(i.urlInput).append(i.facebook).append(i.google).append(i.twitter).append(i.mail),e(t).append(i.wrapper)}return t.prototype.show=function(){this.wrapper.fadeIn(300),this.urlInput.val(this.shareUrl),this.urlInput.trigger("click"),this.isOpen=!0},t.prototype.dispose=function(){var e=this;e.box.off(),e.google.off(),e.twitter.off(),e.facebook.off(),e.mail.off(),e.urlInput.off(),e.wrapper.off().remove()},t.prototype.close=function(){this.wrapper.fadeOut(300),this.isOpen=!1},t.prototype.update=function(e){this.shareUrl=e},t}(jQuery),pdfflip.Popup=function(e){function t(t,n){var i=this;i.isOpen=!1,i.wrapper=e('<div class="pdff-popup-wrapper" style="display: none;">').on("click",function(e){i.close()}),i.box=e('<div class="pdff-popup-box">').on("click",function(e){e.preventDefault(),e.stopPropagation()}).appendTo(i.wrapper),e(t).append(i.wrapper)}return t.prototype.show=function(){this.wrapper.fadeIn(300),this.isOpen=!0},t.prototype.dispose=function(){this.box.off(),this.wrapper.off().remove()},t.prototype.close=function(){this.wrapper.fadeOut(300),this.isOpen=!1},t}(jQuery);var PDFLinkService=function(){function e(){this.baseUrl=null,this.pdfDocument=null,this.pdfViewer=null,this.pdfHistory=null,this._pagesRefCache=null}return e.prototype={dispose:function(){this.baseUrl=null,this.pdfDocument=null,this.pdfViewer=null,this.pdfHistory=null,this._pagesRefCache=null},setDocument:function(e,t){this.baseUrl=t,this.pdfDocument=e,this._pagesRefCache=Object.create(null)},setViewer:function(e){this.pdfViewer=e},setHistory:function(e){this.pdfHistory=e},get pagesCount(){return this.pdfDocument.numPages},get page(){return this.pdfViewer.currentPageNumber},set page(e){this.pdfViewer.currentPageNumber=e},navigateTo:function(e){var t,n="",i=this,o=function(t){var a=t instanceof Object?i._pagesRefCache[t.num+" "+t.gen+" R"]:t+1;a?(i.pdfViewer.contentProvider.options.pageSize==pdfflip.PAGE_SIZE.DOUBLEINTERNAL&&a>2&&(a=2*a-1),a>i.pdfViewer.pageCount&&(a=i.pdfViewer.pageCount),i.pdfViewer.gotoPage(a),i.pdfHistory&&i.pdfHistory.push({dest:e,hash:n,page:a})):i.pdfDocument.getPageIndex(t).then(function(e){var n=e+1,a=t.num+" "+t.gen+" R";i._pagesRefCache[a]=n,o(t)})};"string"==typeof e?(n=e,t=this.pdfDocument.getDestination(e)):t=Promise.resolve(e),t.then(function(t){e=t,t instanceof Array&&o(t[0])})},customNavigateTo:function(e){if(""!=e&&null!=e&&"null"!=e){var t=null;if(isNaN(Math.round(e))){if("string"==typeof e&&(t=parseInt(e.replace("#",""),10),isNaN(t)))return void window.open(e)}else t=e;null!=t&&this.pdfViewer.gotoPage(t)}},getDestinationHash:function(e){if("string"==typeof e)return this.getAnchorUrl("#"+escape(e));if(e instanceof Array){var t=e[0],n=t instanceof Object?this._pagesRefCache[t.num+" "+t.gen+" R"]:t+1;if(n){var i=this.getAnchorUrl("#page="+n),o=e[1];if("object"==typeof o&&"name"in o&&"XYZ"===o.name){var a=e[4]||this.pdfViewer.currentScaleValue,r=parseFloat(a);r&&(a=100*r),i+="&zoom="+a,(e[2]||e[3])&&(i+=","+(e[2]||0)+","+(e[3]||0))}return i}}return this.getAnchorUrl("")},getCustomDestinationHash:function(e){return"#"+escape(e)},getAnchorUrl:function(e){return(this.baseUrl||"")+e},setHash:function(e){if(e.indexOf("=")>=0){var t,n,i=parseQueryString(e);if("nameddest"in i)return this.pdfHistory&&this.pdfHistory.updateNextHashParam(i.nameddest),void this.navigateTo(i.nameddest);if("page"in i&&(t=0|i.page||1),"zoom"in i){var o=i.zoom.split(","),a=o[0],r=parseFloat(a);-1===a.indexOf("Fit")?n=[null,{name:"XYZ"},o.length>1?0|o[1]:null,o.length>2?0|o[2]:null,r?r/100:a]:"Fit"===a||"FitB"===a?n=[null,{name:a}]:"FitH"===a||"FitBH"===a||"FitV"===a||"FitBV"===a?n=[null,{name:a},o.length>1?0|o[1]:null]:"FitR"===a?5!==o.length?console.error("PDFLinkService_setHash: Not enough parameters for 'FitR'."):n=[null,{name:a},0|o[1],0|o[2],0|o[3],0|o[4]]:console.error("PDFLinkService_setHash: '"+a+"' is not a valid zoom value.")}if(n?this.pdfViewer.scrollPageIntoView(t||this.page,n):t&&(this.page=t),"pagemode"in i){var s=document.createEvent("CustomEvent");s.initCustomEvent("pagemode",!0,!0,{mode:i.pagemode}),this.pdfViewer.container.dispatchEvent(s)}}else/^\\d+$/.test(e)?this.page=e:(this.pdfHistory&&this.pdfHistory.updateNextHashParam(unescape(e)),this.navigateTo(unescape(e)))},executeNamedAction:function(e){switch(e){case"GoBack":this.pdfHistory&&this.pdfHistory.back();break;case"GoForward":this.pdfHistory&&this.pdfHistory.forward();break;case"NextPage":this.page++;break;case"PrevPage":this.page--;break;case"LastPage":this.page=this.pagesCount;break;case"FirstPage":this.page=1}var t=document.createEvent("CustomEvent");t.initCustomEvent("namedaction",!0,!0,{action:e}),this.pdfViewer.container.dispatchEvent(t)},cachePageRef:function(e,t){var n=t.num+" "+t.gen+" R";this._pagesRefCache[n]=e}},e}();pdfflip.TextLayerBuilder=function(){function e(e){this.textLayerDiv=e.textLayerDiv,this.renderingDone=!1,this.divContentDone=!1,this.pageIdx=e.pageIndex,this.pageNumber=this.pageIdx+1,this.matches=[],this.viewport=e.viewport,this.textDivs=[],this.findController=e.findController||null,this.textLayerRenderTask=null,this.enhanceTextSelection=e.enhanceTextSelection,this._bindMouse()}return e.prototype={_finishRendering:function(){if(this.renderingDone=!0,!this.enhanceTextSelection){var e=document.createElement("div");e.className="endOfContent",this.textLayerDiv.appendChild(e)}},render:function(e){if(this.divContentDone&&!this.renderingDone){this.textLayerRenderTask&&(this.textLayerRenderTask.cancel(),this.textLayerRenderTask=null),this.textDivs=[];var t=document.createDocumentFragment();this.textLayerRenderTask=PDFJS.renderTextLayer({textContent:this.textContent,container:t,viewport:this.viewport,textDivs:this.textDivs,timeout:e,enhanceTextSelection:this.enhanceTextSelection}),this.textLayerRenderTask.promise.then(function(){this.textLayerDiv.appendChild(t),this._finishRendering(),this.updateMatches()}.bind(this),function(e){})}},setTextContent:function(e){this.textLayerRenderTask&&(this.textLayerRenderTask.cancel(),this.textLayerRenderTask=null),this.textContent=e,this.divContentDone=!0},convertMatches:function(e,t){var n=0,i=0,o=this.textContent.items,a=o.length-1,r=null===this.findController?0:this.findController.state.query.length,s=[];if(!e)return s;for(var l=0,c=e.length;l<c;l++){for(var d=e[l];n!==a&&d>=i+o[n].str.length;)i+=o[n].str.length,n++;n===o.length&&console.error("Could not find a matching mapping");var u={begin:{divIdx:n,offset:d-i}};for(d+=t?t[l]:r;n!==a&&d>i+o[n].str.length;)i+=o[n].str.length,n++;u.end={divIdx:n,offset:d-i},s.push(u)}return s},renderMatches:function(e){if(0!==e.length){var t=this.textContent.items,n=this.textDivs,i=null,o=this.pageIdx,a=null!==this.findController&&o===this.findController.selected.pageIdx,r=null===this.findController?-1:this.findController.selected.matchIdx,s=void 0,l=r,c=l+1;if(null!==this.findController&&this.findController.state.highlightAll)l=0,c=e.length;else if(!a)return;for(var d=l;d<c;d++){var u=e[d],p=u.begin,h=u.end,f=a&&d===r?" selected":"";if(this.findController&&this.findController.updateMatchPosition(o,d,n,p.divIdx),i&&p.divIdx===i.divIdx?b(i.divIdx,i.offset,p.offset):(null!==i&&b(i.divIdx,i.offset,s),v(p)),p.divIdx===h.divIdx)b(p.divIdx,p.offset,h.offset,"highlight"+f);else{b(p.divIdx,p.offset,s,"highlight begin"+f);for(var g=p.divIdx+1,m=h.divIdx;g<m;g++)n[g].className="highlight middle"+f;v(h,"highlight end"+f)}i=h}i&&b(i.divIdx,i.offset,s)}function v(e,t){var i=e.divIdx;n[i].textContent="",b(i,0,e.offset,t)}function b(e,i,o,a){var r=n[e],s=t[e].str.substring(i,o),l=document.createTextNode(s);if(a){var c=document.createElement("span");return c.className=a,c.appendChild(l),void r.appendChild(c)}r.appendChild(l)}},updateMatches:function(){if(this.renderingDone){for(var e,t,n=this.matches,i=this.textDivs,o=this.textContent.items,a=-1,r=0,s=n.length;r<s;r++){for(var l=n[r],c=Math.max(a,l.begin.divIdx),d=l.end.divIdx;c<=d;c++){var u=i[c];u.textContent=o[c].str,u.className=""}a=l.end.divIdx+1}null!==this.findController&&this.findController.active&&(null!==this.findController&&(e=this.findController.pageMatches[this.pageIdx]||null,t=this.findController.pageMatchesLength&&this.findController.pageMatchesLength[this.pageIdx]||null),this.matches=this.convertMatches(e,t),this.renderMatches(this.matches))}},_bindMouse:function(){var e=this.textLayerDiv,t=this;e.addEventListener("mousedown",function(n){if(t.enhanceTextSelection&&t.textLayerRenderTask)t.textLayerRenderTask.expandTextDivs(!0);else{var i=e.querySelector(".endOfContent");if(i){var o=n.target!==e;if(o=o&&"none"!==window.getComputedStyle(i).getPropertyValue("-moz-user-select")){var a=e.getBoundingClientRect(),r=Math.max(0,(n.pageY-a.top)/a.height);i.style.top=(100*r).toFixed(2)+"%"}i.classList.add("active")}}}),e.addEventListener("mouseup",function(n){if(t.enhanceTextSelection&&t.textLayerRenderTask)t.textLayerRenderTask.expandTextDivs(!1);else{var i=e.querySelector(".endOfContent");i&&(i.style.top="",i.classList.remove("active"))}})}},e}(),pdfflip.ConvertPageLinks=function(){for(var e,t=arguments[0]/100,n=arguments[1]/100,i=function(e,i,o,a,r){return{x:e/t,y:i/n,w:o/t,h:a/n,dest:r}},o=[],a=2;a<arguments.length;a++)e=arguments[a],o[a-2]=i.apply(this,e);return o},pdfflip.parseLinks=function(e){var t;if(null!=e&&e.length>0)for(var n=0;n<e.length;n++)null!=(t=e[n])&&null!=t[0]&&null==t[0].dest&&(t=pdfflip.ConvertPageLinks.apply(this,t),e[n]=t);return e},function(e){function t(e){return"true"==e||1==e}function n(e){null!=e.webgl&&(e.webgl=t(e.webgl)),null!=e.downloadEnable&&(e.downloadEnable=t(e.downloadEnable)),null!=e.scrollWheel&&(e.scrollWheel=t(e.scrollWheel)),null!=e.autoEnableOutline&&(e.autoEnableOutline=t(e.autoEnableOutline)),null!=e.autoEnableThumbnail&&(e.autoEnableThumbnail=t(e.autoEnableThumbnail)),null!=e.transparent&&(e.transparent=t(e.transparent)),null!=e.overwritePDFOutline&&(e.overwritePDFOutline=t(e.overwritePDFOutline)),null!=e.enableSound&&(e.enableSound=t(e.enableSound)),null!=e.forceFit&&(e.forceFit=t(e.forceFit)),null!=e.enableAnnotation&&(e.enableAnnotation=t(e.enableAnnotation)),null!=e.webglShadow&&(e.webglShadow=t(e.webglShadow)),null!=e.autoPlay&&(e.autoPlay=t(e.autoPlay)),null!=e.autoPlayStart&&(e.autoPlayStart=t(e.autoPlayStart)),null!=e.paddingTop&&(e.paddingTop=parseInt(e.paddingTop,10)),null!=e.paddingRight&&(e.paddingRight=parseInt(e.paddingRight,10)),null!=e.paddingBottom&&(e.paddingBottom=parseInt(e.paddingBottom,10)),null!=e.paddingLeft&&(e.paddingLeft=parseInt(e.paddingLeft,10)),null!=e.zoomRatio&&(e.zoomRatio=parseFloat(e.zoomRatio,10)),null!=e.stiffness&&(e.stiffness=parseFloat(e.stiffness,10)),null!=e.autoPlayDuration&&(e.autoPlayDuration=parseInt(e.autoPlayDuration,10)),0!=e.pageMode&&"0"!=e.pageMode||(e.pageMode=null),0!=e.singlePageMode&&"0"!=e.singlePageMode||(e.singlePageMode=null)}pdfflip.getOptions=function(t){var i="option_"+(t=e(t)).attr("id"),o=t.attr("source")||t.attr("pdff-source");(i=null==i||""==i||null==window[i]?{}:window[i]).source=null==o||""==o?i.source:o;var a={webgl:t.attr("webgl"),height:t.attr("height"),enableSound:t.attr("sound"),transparent:t.attr("transparent"),downloadEnable:t.attr("download"),duration:t.attr("duration"),hard:t.attr("hard"),pageMode:t.attr("pagemode"),direction:t.attr("direction"),backgroundColor:t.attr("backgroundcolor"),scrollWheel:t.attr("scrollwheel"),backgroundImage:t.attr("backgroundimage"),paddingTop:t.attr("paddingtop"),paddingRight:t.attr("paddingright"),paddingBottom:t.attr("paddingbottom"),paddingLeft:t.attr("paddingleft"),wpOptions:t.attr("wpoptions")};return function(e){if(1!=e.parsed){e.parsed=!0;var t=[];if(n(e),"undefined"!=typeof pdfflipWPGlobal&&"true"==e.wpOptions){try{for(var i in e.links){for(var o=e.links[i],a=[100,100],r=0;r<o.length;r++){for(var s=o[r].substr(1).slice(0,-1).split(","),l=[],c=0;c<5;c++)l[c]=s[c];a.push(l)}t[parseInt(i,10)+1]=a}}catch(e){console.error(e.stack)}e.links=pdfflip.parseLinks(t)}else e.links=pdfflip.parseLinks(e.links)}}(i=e.extend(!0,{},i,a)),i},pdfflip.parseBooks=function(){e("._PDFF_btt, ._pdff_thumb, ._PDFF_link, .PDFFlip").each(function(){var t=e(this);if("true"!==(t.attr("parsed")||t.attr("pdff-parsed")))if(t.attr("pdff-parsed","true"),t.hasClass("PDFFlip")){var n=t.attr("id"),i=t.attr("slug"),o=pdfflip.getOptions(t);o.id=n,null!=i&&(o.slug=i),n?window[n.toString()]=e(t).flipBook(o.source,o):e(t).flipBook(o.source,o)}else if(t.hasClass("_pdff_thumb")){var a=e("<div class='PDFFlip-cover'>"),r=t.html().trim();t.html(""),e("<span class='PDFFlip-title'>").html(r).appendTo(a);var s=t.attr("thumb")||t.attr("pdff-thumb"),l=t.attr("thumbtype")||pdfflip.defaults.thumbElement||"div",c=t.attr("tags")||t.attr("pdff-tags");if(c&&(c=c.split(",")).length>0)for(var d=0;d<c.length;d++)t.append("<span class='PDFFlip-tag'>"+c[d]+"</span>");null!=s&&""!=s.toString().trim()?"img"==l?(a.append('<img src="'+s+'" alt="'+r+'"/>'),t.attr("thumb-type","img")):a.css({backgroundImage:"url("+s+")"}):a.addClass("_pdff_thumb-not-found"),t.append(a)}})},e(document).ready(function(){if("undefined"==typeof pdfflipLocation&&0!=pdfflip.autoDetectLocation&&e("script").each(function(){var t=e(this)[0].src;if((t.indexOf("/pdfflip.js")>-1||t.indexOf("/pdfflip.min.js")>-1)&&(t.indexOf("https://")>-1||t.indexOf("http://")>-1)&&t.indexOf("js/pdfflip.")>-1){var n=t.split("/");window.pdfflipLocation=n.slice(0,-2).join("/")}}),"undefined"!=typeof pdfflipLocation&&(pdfflipLocation.length>2&&"/"!==pdfflipLocation.slice(-1)&&(window.pdfflipLocation+="/"),pdfflip.defaults.utilsSrc=pdfflipLocation+"js/libs/utils.min.js",pdfflip.defaults.pdfjsSrc=pdfflipLocation+"js/libs/pdf.min.js",pdfflip.defaults.pdfjsCompatibilitySrc=pdfflipLocation+"js/libs/compatibility.js",pdfflip.defaults.threejsSrc=pdfflipLocation+"js/libs/three.min.js",pdfflip.defaults.pdfjsWorkerSrc=pdfflipLocation+"js/libs/pdf.worker.min.js",pdfflip.defaults.soundFile=pdfflipLocation+"sound/turn.mp3",pdfflip.defaults.imagesLocation=pdfflipLocation+"images",pdfflip.defaults.imageResourcesPath=pdfflipLocation+"images/pdfjs/",pdfflip.defaults.cMapUrl=pdfflipLocation+"js/libs/cmaps/","undefined"!=typeof pdfflipWPGlobal&&(n(pdfflipWPGlobal),e.extend(pdfflip.defaults,pdfflipWPGlobal))),pdfflip.preParseHash=window.location.hash,pdfflip.parseBooks(),e("body").on("click","._PDFF_btt, ._pdff_thumb, ._PDFF_link",function(){$("body").css("overflow","hidden");var t=e(this);window.dfLightBox||(window.dfLightBox=new DFLightBox(function(){0==window.location.hash.indexOf("#pdfflip-")&&(window.location.hash="#_"),window.dfActiveLightBoxBook.dispose(),window.dfActiveLightBoxBook=null})),window.dfLightBox.duration=500,window.dfActiveLightBoxBook&&window.dfActiveLightBoxBook.dispose?window.dfActiveLightBoxBook.dispose():window.dfLightBox.show(function(){var n=pdfflip.getOptions(t);n.transparent=!1,n.id=t.attr("id");var i=t.attr("slug");null!=i&&(n.slug=i),n.isLightBox=!0,window.dfActiveLightBoxBook=e(window.dfLightBox.container).flipBook(n.source,n)})}),(pdfflip.utils.isSafari||pdfflip.utils.isIOS)&&e("body").addClass("pdff-webkit"),pdfflip.preParseHash&&pdfflip.preParseHash.indexOf("pdfflip-")>=0){var t,i=pdfflip.preParseHash.split("pdfflip-")[1].split("/")[0],o=pdfflip.preParseHash.split("pdfflip-")[1].split("/")[1];null!=o&&(o=o.split("/")[0]),0==(t=e("[slug="+i+"]")).length&&(t=e("#"+i)),t.length>0&&(null!=o&&t.data("page",o),t.is("._PDFF_btt, ._pdff_thumb, ._PDFF_link")&&t.trigger("click"))}e("body").on("click",".pdff-ui-sidemenu-close",function(){e(this).closest(".pdff-container").find(".pdff-ui-outline.pdff-active , .pdff-ui-thumbnail.pdff-active").trigger("click")})})}(jQuery);
`},6713:function(t){t.exports=`//override original pdf-flip setting

var option_PDFF = {

    /* BASIC SETTINGS */
    openPage: 1,
    height: '100%',
    enableSound: false,
    downloadEnable: true,
    direction: 1, // LTR = 1, RTL = 2
    autoPlay: true,
    autoPlayStart: false,
    autoPlayDuration: 3000,
    autoEnableOutline: false,
    autoEnableThumbnail: false,


    /* TRANSLATE INTERFACE */

    text: {
        toggleSound: "Sound",
        toggleThumbnails: "Thumbnails",
        toggleOutline: "Contents",
        previousPage: "Previous Page",
        nextPage: "Next Page",
        toggleFullscreen: "Fullscreen",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        downloadPDFFile: "Download PDF",
        gotoFirstPage: "First Page",
        gotoLastPage: "Last Page",
        play: "AutoPlay On",
        pause: "AutoPlay Off",
        share: "Share"
    },

    /* ADVANCED SETTINGS */

    hard: "none",
    overwritePDFOutline: true,
    duration: 1000,
    pageMode: null, //single = 1, double = 2, auto = null
    singlePageMode: null, // zoom = 1, booklet = 2, auto = null
    transparent: false,
    scrollWheel: true,
    zoomRatio: 1.5,
    maxTextureSize: 1600,
    backgroundImage: "/assets/flipbook/background.jpg",
    backgroundColor: "#fff",
    controlsPosition: 'bottom', //hidden= 'hide', top: 'top', bottom: 'bottom'
    allControls: "thumbnail,play,altPrev,pageNumber,altNext,zoomIn,zoomOut,fullScreen,download,sound",
    hideControls: "outline,startPage,endPage",

};
var pdfflipLocation = "/assets/flipbook/";

`},7088:function(t){t.exports=`/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.PerfectScrollbar=b())})(this,function(){'use strict';var u=Math.abs,v=Math.floor;function a(a){return getComputedStyle(a)}function b(a,b){for(var c in b){var d=b[c];"number"==typeof d&&(d+="px"),a.style[c]=d}return a}function c(a){var b=document.createElement("div");return b.className=a,b}function d(a,b){if(!w)throw new Error("No element matching method supported");return w.call(a,b)}function e(a){a.remove?a.remove():a.parentNode&&a.parentNode.removeChild(a)}function f(a,b){return Array.prototype.filter.call(a.children,function(a){return d(a,b)})}function g(a,b){var c=a.element.classList,d=z.state.scrolling(b);c.contains(d)?clearTimeout(A[b]):c.add(d)}function h(a,b){A[b]=setTimeout(function(){return a.isAlive&&a.element.classList.remove(z.state.scrolling(b))},a.settings.scrollingThreshold)}function j(a,b){g(a,b),h(a,b)}function k(a){if("function"==typeof window.CustomEvent)return new CustomEvent(a);var b=document.createEvent("CustomEvent");return b.initCustomEvent(a,!1,!1,void 0),b}function l(a,b,c,d,e){void 0===d&&(d=!0),void 0===e&&(e=!1);var f;if("top"===b)f=["contentHeight","containerHeight","scrollTop","y","up","down"];else if("left"===b)f=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");m(a,c,f,d,e)}function m(a,b,c,d,e){var f=c[0],g=c[1],h=c[2],i=c[3],l=c[4],m=c[5];void 0===d&&(d=!0),void 0===e&&(e=!1);var n=a.element;// reset reach
a.reach[i]=null,1>n[h]&&(a.reach[i]="start"),n[h]>a[f]-a[g]-1&&(a.reach[i]="end"),b&&(n.dispatchEvent(k("ps-scroll-"+i)),0>b?n.dispatchEvent(k("ps-scroll-"+l)):0<b&&n.dispatchEvent(k("ps-scroll-"+m)),d&&j(a,i)),a.reach[i]&&(b||e)&&n.dispatchEvent(k("ps-"+i+"-reach-"+a.reach[i]))}function n(a){return parseInt(a,10)||0}function o(a){return d(a,"input,[contenteditable]")||d(a,"select,[contenteditable]")||d(a,"textarea,[contenteditable]")||d(a,"button,[contenteditable]")}function p(b){var c=a(b);return n(c.width)+n(c.paddingLeft)+n(c.paddingRight)+n(c.borderLeftWidth)+n(c.borderRightWidth)}function q(a){var b=Math.ceil,c=a.element,d=v(c.scrollTop),g=c.getBoundingClientRect();a.containerWidth=b(g.width),a.containerHeight=b(g.height),a.contentWidth=c.scrollWidth,a.contentHeight=c.scrollHeight,c.contains(a.scrollbarXRail)||(f(c,z.element.rail("x")).forEach(function(a){return e(a)}),c.appendChild(a.scrollbarXRail)),c.contains(a.scrollbarYRail)||(f(c,z.element.rail("y")).forEach(function(a){return e(a)}),c.appendChild(a.scrollbarYRail)),!a.settings.suppressScrollX&&a.containerWidth+a.settings.scrollXMarginOffset<a.contentWidth?(a.scrollbarXActive=!0,a.railXWidth=a.containerWidth-a.railXMarginWidth,a.railXRatio=a.containerWidth/a.railXWidth,a.scrollbarXWidth=r(a,n(a.railXWidth*a.containerWidth/a.contentWidth)),a.scrollbarXLeft=n((a.negativeScrollAdjustment+c.scrollLeft)*(a.railXWidth-a.scrollbarXWidth)/(a.contentWidth-a.containerWidth))):a.scrollbarXActive=!1,!a.settings.suppressScrollY&&a.containerHeight+a.settings.scrollYMarginOffset<a.contentHeight?(a.scrollbarYActive=!0,a.railYHeight=a.containerHeight-a.railYMarginHeight,a.railYRatio=a.containerHeight/a.railYHeight,a.scrollbarYHeight=r(a,n(a.railYHeight*a.containerHeight/a.contentHeight)),a.scrollbarYTop=n(d*(a.railYHeight-a.scrollbarYHeight)/(a.contentHeight-a.containerHeight))):a.scrollbarYActive=!1,a.scrollbarXLeft>=a.railXWidth-a.scrollbarXWidth&&(a.scrollbarXLeft=a.railXWidth-a.scrollbarXWidth),a.scrollbarYTop>=a.railYHeight-a.scrollbarYHeight&&(a.scrollbarYTop=a.railYHeight-a.scrollbarYHeight),s(c,a),a.scrollbarXActive?c.classList.add(z.state.active("x")):(c.classList.remove(z.state.active("x")),a.scrollbarXWidth=0,a.scrollbarXLeft=0,c.scrollLeft=!0===a.isRtl?a.contentWidth:0),a.scrollbarYActive?c.classList.add(z.state.active("y")):(c.classList.remove(z.state.active("y")),a.scrollbarYHeight=0,a.scrollbarYTop=0,c.scrollTop=0)}function r(a,b){var c=Math.min,d=Math.max;return a.settings.minScrollbarLength&&(b=d(b,a.settings.minScrollbarLength)),a.settings.maxScrollbarLength&&(b=c(b,a.settings.maxScrollbarLength)),b}function s(a,c){var d={width:c.railXWidth},e=v(a.scrollTop);d.left=c.isRtl?c.negativeScrollAdjustment+a.scrollLeft+c.containerWidth-c.contentWidth:a.scrollLeft,c.isScrollbarXUsingBottom?d.bottom=c.scrollbarXBottom-e:d.top=c.scrollbarXTop+e,b(c.scrollbarXRail,d);var f={top:e,height:c.railYHeight};c.isScrollbarYUsingRight?c.isRtl?f.right=c.contentWidth-(c.negativeScrollAdjustment+a.scrollLeft)-c.scrollbarYRight-c.scrollbarYOuterWidth-9:f.right=c.scrollbarYRight-a.scrollLeft:c.isRtl?f.left=c.negativeScrollAdjustment+a.scrollLeft+2*c.containerWidth-c.contentWidth-c.scrollbarYLeft-c.scrollbarYOuterWidth:f.left=c.scrollbarYLeft+a.scrollLeft,b(c.scrollbarYRail,f),b(c.scrollbarX,{left:c.scrollbarXLeft,width:c.scrollbarXWidth-c.railBorderXWidth}),b(c.scrollbarY,{top:c.scrollbarYTop,height:c.scrollbarYHeight-c.railBorderYWidth})}function t(a,b){function c(b){b.touches&&b.touches[0]&&(b[k]=b.touches[0].pageY),s[o]=t+v*(b[k]-u),g(a,p),q(a),b.stopPropagation(),b.preventDefault()}function d(){h(a,p),a[r].classList.remove(z.state.clicking),a.event.unbind(a.ownerDocument,"mousemove",c)}function f(b,e){t=s[o],e&&b.touches&&(b[k]=b.touches[0].pageY),u=b[k],v=(a[j]-a[i])/(a[l]-a[n]),e?a.event.bind(a.ownerDocument,"touchmove",c):(a.event.bind(a.ownerDocument,"mousemove",c),a.event.once(a.ownerDocument,"mouseup",d),b.preventDefault()),a[r].classList.add(z.state.clicking),b.stopPropagation()}var i=b[0],j=b[1],k=b[2],l=b[3],m=b[4],n=b[5],o=b[6],p=b[7],r=b[8],s=a.element,t=null,u=null,v=null;a.event.bind(a[m],"mousedown",function(a){f(a)}),a.event.bind(a[m],"touchstart",function(a){f(a,!0)})}var w="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),z={main:"ps",rtl:"ps__rtl",element:{thumb:function(a){return"ps__thumb-"+a},rail:function(a){return"ps__rail-"+a},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(a){return"ps--active-"+a},scrolling:function(a){return"ps--scrolling-"+a}}},A={x:null,y:null},B=function(a){this.element=a,this.handlers={}},C={isEmpty:{configurable:!0}};B.prototype.bind=function(a,b){"undefined"==typeof this.handlers[a]&&(this.handlers[a]=[]),this.handlers[a].push(b),this.element.addEventListener(a,b,!1)},B.prototype.unbind=function(a,b){var c=this;this.handlers[a]=this.handlers[a].filter(function(d){return!!(b&&d!==b)||(c.element.removeEventListener(a,d,!1),!1)})},B.prototype.unbindAll=function(){for(var a in this.handlers)this.unbind(a)},C.isEmpty.get=function(){var a=this;return Object.keys(this.handlers).every(function(b){return 0===a.handlers[b].length})},Object.defineProperties(B.prototype,C);var D=function(){this.eventElements=[]};D.prototype.eventElement=function(a){var b=this.eventElements.filter(function(b){return b.element===a})[0];return b||(b=new B(a),this.eventElements.push(b)),b},D.prototype.bind=function(a,b,c){this.eventElement(a).bind(b,c)},D.prototype.unbind=function(a,b,c){var d=this.eventElement(a);d.unbind(b,c),d.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(d),1)},D.prototype.unbindAll=function(){this.eventElements.forEach(function(a){return a.unbindAll()}),this.eventElements=[]},D.prototype.once=function(a,b,c){var d=this.eventElement(a),e=function(a){d.unbind(b,e),c(a)};d.bind(b,e)};var E={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&0<window.navigator.maxTouchPoints||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},F=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},G={"click-rail":function(a){a.element;a.event.bind(a.scrollbarY,"mousedown",function(a){return a.stopPropagation()}),a.event.bind(a.scrollbarYRail,"mousedown",function(b){var c=b.pageY-window.pageYOffset-a.scrollbarYRail.getBoundingClientRect().top,d=c>a.scrollbarYTop?1:-1;a.element.scrollTop+=d*a.containerHeight,q(a),b.stopPropagation()}),a.event.bind(a.scrollbarX,"mousedown",function(a){return a.stopPropagation()}),a.event.bind(a.scrollbarXRail,"mousedown",function(b){var c=b.pageX-window.pageXOffset-a.scrollbarXRail.getBoundingClientRect().left,d=c>a.scrollbarXLeft?1:-1;a.element.scrollLeft+=d*a.containerWidth,q(a),b.stopPropagation()})},"drag-thumb":function(a){t(a,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),t(a,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(a){function b(b,d){var e=v(c.scrollTop);if(0===b){if(!a.scrollbarYActive)return!1;if(0===e&&0<d||e>=a.contentHeight-a.containerHeight&&0>d)return!a.settings.wheelPropagation}var f=c.scrollLeft;if(0===d){if(!a.scrollbarXActive)return!1;if(0===f&&0>b||f>=a.contentWidth-a.containerWidth&&0<b)return!a.settings.wheelPropagation}return!0}var c=a.element,f=function(){return d(c,":hover")},g=function(){return d(a.scrollbarX,":focus")||d(a.scrollbarY,":focus")};a.event.bind(a.ownerDocument,"keydown",function(d){if(!(d.isDefaultPrevented&&d.isDefaultPrevented()||d.defaultPrevented)&&(f()||g())){var e=document.activeElement?document.activeElement:a.ownerDocument.activeElement;if(e){if("IFRAME"===e.tagName)e=e.contentDocument.activeElement;else// go deeper if element is a webcomponent
for(;e.shadowRoot;)e=e.shadowRoot.activeElement;if(o(e))return}var h=0,i=0;switch(d.which){case 37:h=d.metaKey?-a.contentWidth:d.altKey?-a.containerWidth:-30;break;case 38:i=d.metaKey?a.contentHeight:d.altKey?a.containerHeight:30;break;case 39:h=d.metaKey?a.contentWidth:d.altKey?a.containerWidth:30;break;case 40:i=d.metaKey?-a.contentHeight:d.altKey?-a.containerHeight:-30;break;case 32:i=d.shiftKey?a.containerHeight:-a.containerHeight;break;case 33:i=a.containerHeight;break;case 34:i=-a.containerHeight;break;case 36:i=a.contentHeight;break;case 35:i=-a.contentHeight;break;default:return;}a.settings.suppressScrollX&&0!==h||a.settings.suppressScrollY&&0!==i||(c.scrollTop-=i,c.scrollLeft+=h,q(a),b(h,i)&&d.preventDefault())}})},wheel:function(b){function c(a,c){var d,e=v(h.scrollTop),f=0===h.scrollTop,g=e+h.offsetHeight===h.scrollHeight,i=0===h.scrollLeft,j=h.scrollLeft+h.offsetWidth===h.scrollWidth;return d=u(c)>u(a)?f||g:i||j,!d||!b.settings.wheelPropagation}function d(a){var b=a.deltaX,c=-1*a.deltaY;return("undefined"==typeof b||"undefined"==typeof c)&&(b=-1*a.wheelDeltaX/6,c=a.wheelDeltaY/6),a.deltaMode&&1===a.deltaMode&&(b*=10,c*=10),b!==b&&c!==c/* NaN checks */&&(b=0,c=a.wheelDelta),a.shiftKey?[-c,-b]:[b,c]}function f(b,c,d){// FIXME: this is a workaround for <select> issue in FF and IE #571
if(!E.isWebKit&&h.querySelector("select:focus"))return!0;if(!h.contains(b))return!1;for(var e=b;e&&e!==h;){if(e.classList.contains(z.element.consuming))return!0;var f=a(e);// if deltaY && vertical scrollable
if(d&&f.overflowY.match(/(scroll|auto)/)){var g=e.scrollHeight-e.clientHeight;if(0<g&&(0<e.scrollTop&&0>d||e.scrollTop<g&&0<d))return!0}// if deltaX && horizontal scrollable
if(c&&f.overflowX.match(/(scroll|auto)/)){var i=e.scrollWidth-e.clientWidth;if(0<i&&(0<e.scrollLeft&&0>c||e.scrollLeft<i&&0<c))return!0}e=e.parentNode}return!1}function g(a){var e=d(a),g=e[0],i=e[1];if(!f(a.target,g,i)){var j=!1;b.settings.useBothWheelAxes?b.scrollbarYActive&&!b.scrollbarXActive?(i?h.scrollTop-=i*b.settings.wheelSpeed:h.scrollTop+=g*b.settings.wheelSpeed,j=!0):b.scrollbarXActive&&!b.scrollbarYActive&&(g?h.scrollLeft+=g*b.settings.wheelSpeed:h.scrollLeft-=i*b.settings.wheelSpeed,j=!0):(h.scrollTop-=i*b.settings.wheelSpeed,h.scrollLeft+=g*b.settings.wheelSpeed),q(b),j=j||c(g,i),j&&!a.ctrlKey&&(a.stopPropagation(),a.preventDefault())}}var h=b.element;"undefined"==typeof window.onwheel?"undefined"!=typeof window.onmousewheel&&b.event.bind(h,"mousewheel",g):b.event.bind(h,"wheel",g)},touch:function(b){function c(a,c){var d=v(l.scrollTop),e=l.scrollLeft,f=u(a),g=u(c);if(g>f){// user is perhaps trying to swipe up/down the page
if(0>c&&d===b.contentHeight-b.containerHeight||0<c&&0===d)// set prevent for mobile Chrome refresh
return 0===window.scrollY&&0<c&&E.isChrome;}else if(f>g&&(0>a&&e===b.contentWidth-b.containerWidth||0<a&&0===e))// user is perhaps trying to swipe left/right across the page
return!0;return!0}function d(a,c){l.scrollTop-=c,l.scrollLeft-=a,q(b)}function f(a){return a.targetTouches?a.targetTouches[0]:a}function g(a){return!(a.pointerType&&"pen"===a.pointerType&&0===a.buttons)&&(!!(a.targetTouches&&1===a.targetTouches.length)||!!(a.pointerType&&"mouse"!==a.pointerType&&a.pointerType!==a.MSPOINTER_TYPE_MOUSE))}function h(a){if(g(a)){var b=f(a);m.pageX=b.pageX,m.pageY=b.pageY,n=new Date().getTime(),null!==p&&clearInterval(p)}}function i(b,c,d){if(!l.contains(b))return!1;for(var e=b;e&&e!==l;){if(e.classList.contains(z.element.consuming))return!0;var f=a(e);// if deltaY && vertical scrollable
if(d&&f.overflowY.match(/(scroll|auto)/)){var g=e.scrollHeight-e.clientHeight;if(0<g&&(0<e.scrollTop&&0>d||e.scrollTop<g&&0<d))return!0}// if deltaX && horizontal scrollable
if(c&&f.overflowX.match(/(scroll|auto)/)){var h=e.scrollWidth-e.clientWidth;if(0<h&&(0<e.scrollLeft&&0>c||e.scrollLeft<h&&0<c))return!0}e=e.parentNode}return!1}function j(a){if(g(a)){var b=f(a),e={pageX:b.pageX,pageY:b.pageY},h=e.pageX-m.pageX,j=e.pageY-m.pageY;if(i(a.target,h,j))return;d(h,j),m=e;var k=new Date().getTime(),l=k-n;0<l&&(o.x=h/l,o.y=j/l,n=k),c(h,j)&&a.preventDefault()}}function k(){b.settings.swipeEasing&&(clearInterval(p),p=setInterval(function(){return b.isInitialized?void clearInterval(p):o.x||o.y?.01>u(o.x)&&.01>u(o.y)?void clearInterval(p):void(d(30*o.x,30*o.y),o.x*=.8,o.y*=.8):void clearInterval(p)},10))}if(E.supportsTouch||E.supportsIePointer){var l=b.element,m={},n=0,o={},p=null;E.supportsTouch?(b.event.bind(l,"touchstart",h),b.event.bind(l,"touchmove",j),b.event.bind(l,"touchend",k)):E.supportsIePointer&&(window.PointerEvent?(b.event.bind(l,"pointerdown",h),b.event.bind(l,"pointermove",j),b.event.bind(l,"pointerup",k)):window.MSPointerEvent&&(b.event.bind(l,"MSPointerDown",h),b.event.bind(l,"MSPointerMove",j),b.event.bind(l,"MSPointerUp",k)))}}},H=function(d,e){var f=this;if(void 0===e&&(e={}),"string"==typeof d&&(d=document.querySelector(d)),!d||!d.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var g in this.element=d,d.classList.add(z.main),this.settings=F(),e)this.settings[g]=e[g];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var h=function(){return d.classList.add(z.state.focus)},i=function(){return d.classList.remove(z.state.focus)};this.isRtl="rtl"===a(d).direction,!0===this.isRtl&&d.classList.add(z.rtl),this.isNegativeScroll=function(){var a=d.scrollLeft,b=null;return d.scrollLeft=-1,b=0>d.scrollLeft,d.scrollLeft=a,b}(),this.negativeScrollAdjustment=this.isNegativeScroll?d.scrollWidth-d.clientWidth:0,this.event=new D,this.ownerDocument=d.ownerDocument||document,this.scrollbarXRail=c(z.element.rail("x")),d.appendChild(this.scrollbarXRail),this.scrollbarX=c(z.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",h),this.event.bind(this.scrollbarX,"blur",i),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var j=a(this.scrollbarXRail);this.scrollbarXBottom=parseInt(j.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=n(j.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=n(j.borderLeftWidth)+n(j.borderRightWidth),b(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=n(j.marginLeft)+n(j.marginRight),b(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=c(z.element.rail("y")),d.appendChild(this.scrollbarYRail),this.scrollbarY=c(z.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",h),this.event.bind(this.scrollbarY,"blur",i),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var k=a(this.scrollbarYRail);this.scrollbarYRight=parseInt(k.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=n(k.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?p(this.scrollbarY):null,this.railBorderYWidth=n(k.borderTopWidth)+n(k.borderBottomWidth),b(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=n(k.marginTop)+n(k.marginBottom),b(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:0>=d.scrollLeft?"start":d.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:0>=d.scrollTop?"start":d.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(a){return G[a](f)}),this.lastScrollTop=v(d.scrollTop),this.lastScrollLeft=d.scrollLeft,this.event.bind(this.element,"scroll",function(a){return f.onScroll(a)}),q(this)};return H.prototype.update=function(){this.isAlive&&(// Recalcuate negative scrollLeft adjustment
// Recalculate rail margins
// Hide scrollbars not to affect scrollWidth and scrollHeight
this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,b(this.scrollbarXRail,{display:"block"}),b(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=n(a(this.scrollbarXRail).marginLeft)+n(a(this.scrollbarXRail).marginRight),this.railYMarginHeight=n(a(this.scrollbarYRail).marginTop)+n(a(this.scrollbarYRail).marginBottom),b(this.scrollbarXRail,{display:"none"}),b(this.scrollbarYRail,{display:"none"}),q(this),l(this,"top",0,!1,!0),l(this,"left",0,!1,!0),b(this.scrollbarXRail,{display:""}),b(this.scrollbarYRail,{display:""}))},H.prototype.onScroll=function(){this.isAlive&&(q(this),l(this,"top",this.element.scrollTop-this.lastScrollTop),l(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=v(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},H.prototype.destroy=function(){this.isAlive&&(// unset elements
this.event.unbindAll(),e(this.scrollbarX),e(this.scrollbarY),e(this.scrollbarXRail),e(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},H.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(a){return!a.match(/^ps([-_].+|)$/)}).join(" ")},H});
//# sourceMappingURL=perfect-scrollbar.min.js.map
`},3530:function(t){t.exports=`(function(q,g){"function"===typeof define&&define.amd?define([],g):"object"===typeof module&&module.exports?module.exports=g():q.Rellax=g()})("undefined"!==typeof window?window:global,function(){var q=function(g,u){function C(){if(3===a.options.breakpoints.length&&Array.isArray(a.options.breakpoints)){var f=!0,c=!0,b;a.options.breakpoints.forEach(function(a){"number"!==typeof a&&(c=!1);null!==b&&a<b&&(f=!1);b=a});if(f&&c)return}a.options.breakpoints=[576,768,1201];console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}
var a=Object.create(q.prototype),l=0,v=0,m=0,n=0,d=[],w=!0,A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){return setTimeout(a,1E3/60)},p=null,x=!1;try{var k=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("testPassive",null,k);window.removeEventListener("testPassive",null,k)}catch(f){}var D=window.cancelAnimationFrame||window.mozCancelAnimationFrame||
clearTimeout,E=window.transformProp||function(){var a=document.createElement("div");if(null===a.style.transform){var c=["Webkit","Moz","ms"],b;for(b in c)if(void 0!==a.style[c[b]+"Transform"])return c[b]+"Transform"}return"transform"}();a.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}};u&&Object.keys(u).forEach(function(d){a.options[d]=
u[d]});u&&u.breakpoints&&C();g||(g=".rellax");k="string"===typeof g?document.querySelectorAll(g):[g];if(0<k.length){a.elems=k;if(a.options.wrapper&&!a.options.wrapper.nodeType)if(k=document.querySelector(a.options.wrapper))a.options.wrapper=k;else{console.warn("Rellax: The wrapper you're trying to use doesn't exist.");return}var F,B=function(){for(var f=0;f<d.length;f++)a.elems[f].style.cssText=d[f].style;d=[];v=window.innerHeight;n=window.innerWidth;f=a.options.breakpoints;F=n<f[0]?"xs":n>=f[0]&&n<
f[1]?"sm":n>=f[1]&&n<f[2]?"md":"lg";H();for(f=0;f<a.elems.length;f++){var c=void 0,b=a.elems[f],e=b.getAttribute("data-rellax-percentage"),y=b.getAttribute("data-rellax-speed"),t=b.getAttribute("data-rellax-xs-speed"),g=b.getAttribute("data-rellax-mobile-speed"),h=b.getAttribute("data-rellax-tablet-speed"),k=b.getAttribute("data-rellax-desktop-speed"),l=b.getAttribute("data-rellax-vertical-speed"),m=b.getAttribute("data-rellax-horizontal-speed"),p=b.getAttribute("data-rellax-vertical-scroll-axis"),
q=b.getAttribute("data-rellax-horizontal-scroll-axis"),u=b.getAttribute("data-rellax-zindex")||0,x=b.getAttribute("data-rellax-min"),A=b.getAttribute("data-rellax-max"),C=b.getAttribute("data-rellax-min-x"),D=b.getAttribute("data-rellax-max-x"),E=b.getAttribute("data-rellax-min-y"),L=b.getAttribute("data-rellax-max-y"),r=!0;t||g||h||k?c={xs:t,sm:g,md:h,lg:k}:r=!1;t=a.options.wrapper?a.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a.options.relativeToWrapper&&
(t=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-a.options.wrapper.offsetTop);var z=a.options.vertical?e||a.options.center?t:0:0,I=a.options.horizontal?e||a.options.center?a.options.wrapper?a.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0;t=z+b.getBoundingClientRect().top;g=b.clientHeight||b.offsetHeight||b.scrollHeight;h=I+b.getBoundingClientRect().left;k=b.clientWidth||b.offsetWidth||b.scrollWidth;
z=e?e:(z-t+v)/(g+v);e=e?e:(I-h+n)/(k+n);a.options.center&&(z=e=.5);c=r&&null!==c[F]?Number(c[F]):y?y:a.options.speed;l=l?l:a.options.verticalSpeed;m=m?m:a.options.horizontalSpeed;p=p?p:a.options.verticalScrollAxis;q=q?q:a.options.horizontalScrollAxis;y=J(e,z,c,l,m);b=b.style.cssText;r="";if(e=/transform\\s*:/i.exec(b))r=b.slice(e.index),r=(e=r.indexOf(";"))?" "+r.slice(11,e).replace(/\\s/g,""):" "+r.slice(11).replace(/\\s/g,"");d.push({baseX:y.x,baseY:y.y,top:t,left:h,height:g,width:k,speed:c,verticalSpeed:l,
horizontalSpeed:m,verticalScrollAxis:p,horizontalScrollAxis:q,style:b,transform:r,zindex:u,min:x,max:A,minX:C,maxX:D,minY:E,maxY:L})}K();w&&(window.addEventListener("resize",B),w=!1,G())},H=function(){var d=l,c=m;l=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;m=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;
a.options.relativeToWrapper&&(l=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-a.options.wrapper.offsetTop);return d!=l&&a.options.vertical||c!=m&&a.options.horizontal?!0:!1},J=function(d,c,b,e,g){var f={};d=100*(g?g:b)*(1-d);c=100*(e?e:b)*(1-c);f.x=a.options.round?Math.round(d):Math.round(100*d)/100;f.y=a.options.round?Math.round(c):Math.round(100*c)/100;return f},h=function(){window.removeEventListener("resize",h);window.removeEventListener("orientationchange",
h);(a.options.wrapper?a.options.wrapper:window).removeEventListener("scroll",h);(a.options.wrapper?a.options.wrapper:document).removeEventListener("touchmove",h);p=A(G)},G=function(){H()&&!1===w?(K(),p=A(G)):(p=null,window.addEventListener("resize",h),window.addEventListener("orientationchange",h),(a.options.wrapper?a.options.wrapper:window).addEventListener("scroll",h,x?{passive:!0}:!1),(a.options.wrapper?a.options.wrapper:document).addEventListener("touchmove",h,x?{passive:!0}:!1))},K=function(){for(var f,
c=0;c<a.elems.length;c++){var b=d[c].verticalScrollAxis.toLowerCase(),e=d[c].horizontalScrollAxis.toLowerCase();f=-1!=b.indexOf("x")?l:0;b=-1!=b.indexOf("y")?l:0;var g=-1!=e.indexOf("x")?m:0;e=-1!=e.indexOf("y")?m:0;f=J((f+g-d[c].left+n)/(d[c].width+n),(b+e-d[c].top+v)/(d[c].height+v),d[c].speed,d[c].verticalSpeed,d[c].horizontalSpeed);e=f.y-d[c].baseY;b=f.x-d[c].baseX;null!==d[c].min&&(a.options.vertical&&!a.options.horizontal&&(e=e<=d[c].min?d[c].min:e),a.options.horizontal&&!a.options.vertical&&
(b=b<=d[c].min?d[c].min:b));null!=d[c].minY&&(e=e<=d[c].minY?d[c].minY:e);null!=d[c].minX&&(b=b<=d[c].minX?d[c].minX:b);null!==d[c].max&&(a.options.vertical&&!a.options.horizontal&&(e=e>=d[c].max?d[c].max:e),a.options.horizontal&&!a.options.vertical&&(b=b>=d[c].max?d[c].max:b));null!=d[c].maxY&&(e=e>=d[c].maxY?d[c].maxY:e);null!=d[c].maxX&&(b=b>=d[c].maxX?d[c].maxX:b);a.elems[c].style[E]="translate3d("+(a.options.horizontal?b:"0")+"px,"+(a.options.vertical?e:"0")+"px,"+d[c].zindex+"px) "+d[c].transform}a.options.callback(f)};
a.destroy=function(){for(var f=0;f<a.elems.length;f++)a.elems[f].style.cssText=d[f].style;w||(window.removeEventListener("resize",B),w=!0);D(p);p=null};B();a.refresh=B;return a}console.warn("Rellax: The elements you're trying to select don't exist.")};return q});
`},8615:function(t){t.exports=`/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";function _(){}_.version="2.0.8","undefined"!=typeof window&&window.addEventListener("mousewheel",void 0);var P="data-scrollmagic-pin-spacer";_.Controller=function(e){function t(){var e,t,n;v&&u&&(e=R.type.Array(u)?u:f.slice(0),u=!1,t=d,0!=(n=(d=l.scrollPos())-t)&&(h=0<n?"FORWARD":i),h===i&&e.reverse(),e.forEach(function(e,t){e.update(!0)}))}function r(){n=R.rAF(t)}var n,o,i="REVERSE",s="PAUSED",a=z.defaults,l=this,c=R.extend({},a,e),f=[],u=!1,d=0,h=s,p=!0,g=0,v=!0,m=function(){0<c.refreshInterval&&(o=window.setTimeout(E,c.refreshInterval))},w=function(){return c.vertical?R.get.scrollTop(c.container):R.get.scrollLeft(c.container)},y=function(){return c.vertical?R.get.height(c.container):R.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?p?window.scrollTo(R.get.scrollLeft(),e):c.container.scrollTop=e:p?window.scrollTo(e,R.get.scrollTop()):c.container.scrollLeft=e},b=function(e){"resize"==e.type&&(g=y(),h=s),!0!==u&&(u=!0,r())},E=function(){if(!p&&g!=y()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(t)}f.forEach(function(e,t){e.refresh()}),m()};this._options=c;function x(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t}return this.addScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){l.addScene(e)});else if(e instanceof _.Scene)if(e.controller()!==l)e.addTo(l);else if(!~f.indexOf(e))for(var t in f.push(e),f=x(f),e.on("shift.controller_sort",function(){f=x(f)}),c.globalSceneOptions)e[t]&&e[t].call(e,c.globalSceneOptions[t]);return l},this.removeScene=function(e){var t;return R.type.Array(e)?e.forEach(function(e,t){l.removeScene(e)}):-1<(t=f.indexOf(e))&&(e.off("shift.controller_sort"),f.splice(t,1),e.remove()),l},this.updateScene=function(e,n){return R.type.Array(e)?e.forEach(function(e,t){l.updateScene(e,n)}):n?e.update(!0):!0!==u&&e instanceof _.Scene&&(~(u=u||[]).indexOf(e)||u.push(e),u=x(u),r()),l},this.update=function(e){return b({type:"resize"}),e&&t(),l},this.scrollTo=function(e,t){if(R.type.Number(e))S.call(c.container,e,t);else if(e instanceof _.Scene)e.controller()===l&&l.scrollTo(e.scrollOffset(),t);else if(R.type.Function(e))S=e;else{var n=R.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(P);)n=n.parentNode;var r=c.vertical?"top":"left",o=R.get.offset(c.container),i=R.get.offset(n);p||(o[r]-=l.scrollPos()),l.scrollTo(i[r]-o[r],t)}}return l},this.scrollPos=function(e){return arguments.length?(R.type.Function(e)&&(w=e),l):w.call(l)},this.info=function(e){var t={size:g,vertical:c.vertical,scrollPos:d,scrollDirection:h,container:c.container,isDocument:p};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return l},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,l.updateScene(f,!0)),l):v},this.destroy=function(e){window.clearTimeout(o);for(var t=f.length;t--;)f[t].destroy(e);return c.container.removeEventListener("resize",b),c.container.removeEventListener("scroll",b),R.cAF(n),null},function(){for(var e in c)a.hasOwnProperty(e)||delete c[e];if(c.container=R.get.elements(c.container)[0],!c.container)throw"ScrollMagic.Controller init failed.";(p=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),g=y(),c.container.addEventListener("resize",b),c.container.addEventListener("scroll",b);var t=parseInt(c.refreshInterval,10);c.refreshInterval=R.type.Number(t)?t:a.refreshInterval,m()}(),l};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,o=!0,s={};this.on=function(e,o){return R.type.Function(o)&&(e=e.trim().split(" ")).forEach(function(e){var t=e.split("."),n=t[0],r=t[1];"*"!=n&&(s[n]||(s[n]=[]),s[n].push({namespace:r||"",callback:o}))}),d},this.off=function(e,i){return e&&(e=e.trim().split(" ")).forEach(function(e,t){var n=e.split("."),r=n[0],o=n[1]||"";("*"===r?Object.keys(s):[r]).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var r=t[n];!r||o!==r.namespace&&"*"!==o||i&&i!=r.callback||t.splice(n,1)}t.length||delete s[e]})}),d},this.trigger=function(e,n){var t,r,o,i;return e&&(t=e.trim().split("."),r=t[0],o=t[1],(i=s[r])&&i.forEach(function(e,t){o&&o!==e.namespace||e.callback.call(d,new _.Event(r,e.namespace,d,n))})),d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(e){return e instanceof _.Controller&&l!=e&&(l&&l.removeScene(d),l=e,E(),i(!0),y(!0),t(),l.info("container").addEventListener("resize",S),e.addScene(d),d.trigger("add",{controller:l}),d.update()),d},this.enabled=function(e){return arguments.length?(o!=e&&(o=!!e,d.update(!0)),d):o},this.remove=function(){var e;return l&&(l.info("container").removeEventListener("resize",S),e=l,l=void 0,e.removeScene(d),d.trigger("remove")),d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),null},this.update=function(e){var t,n;return l&&(e?l.enabled()&&o?(t=l.info("scrollPos"),n=0<h.duration?(t-a.start)/(a.end-a.start):t>=a.start?1:0,d.trigger("update",{startPos:a.start,endPos:a.end,scrollPos:t}),d.progress(n)):m&&p===f&&T(!0):l.updateScene(d,!1)),d},this.refresh=function(){return i(),y(),d},this.progress=function(e){if(arguments.length){var t,n,r,o=!1,i=p,s=l?l.info("scrollDirection"):"PAUSED",a=h.reverse||g<=e;return 0===h.duration?(o=g!=e,p=0===(g=e<1&&a?0:1)?c:f):e<0&&p!==c&&a?(p=c,o=!(g=0)):0<=e&&e<1&&a?(g=e,p=f,o=!0):1<=e&&p!==u?(g=1,p=u,o=!0):p!==f||a||T(),o&&(t={progress:g,state:p,scrollDirection:s},r=function(e){d.trigger(e,t)},(n=p!=i)&&i!==f&&(r("enter"),r(i===c?"start":"end")),r("progress"),n&&p!==f&&(r(p===c?"start":"end"),r("leave"))),d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},i=function(e){var t;!n||x(t="duration",n.call(d))&&!e&&(d.trigger("change",{what:t,newval:h[t]}),d.trigger("shift",{reason:t}))},y=function(e){var t=0,n=h.triggerElement;if(l&&(n||0<v)){if(n)if(n.parentNode){for(var r=l.info(),o=R.get.offset(r.container),i=r.vertical?"top":"left";n.parentNode.hasAttribute(P);)n=n.parentNode;var s=R.get.offset(n);r.isDocument||(o[i]-=l.scrollPos()),t=s[i]-o[i]}else d.triggerElement(void 0);var a=t!=v;v=t,a&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){0<h.triggerHook&&d.trigger("shift",{reason:"containerResize"})},b=R.extend(D.validate,{duration:function(t){var e;if(R.type.String(t)&&t.match(/^(\\.|\\d)*\\d+%$/)&&(e=parseFloat(t)/100,t=function(){return l?l.info("size")*e:0}),R.type.Function(t)){n=t;try{t=parseFloat(n.call(d))}catch(e){t=-1}}if(t=parseFloat(t),!R.type.Number(t)||t<0)throw n=n&&void 0,0;return t}}),E=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(t,e){var n;if(b[t])try{n=b[t](h[t])}catch(e){n=r[t]}finally{h[t]=n}})},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(t){d[t]||(d[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),x(t,e)&&(d.trigger("change",{what:t,newval:h[t]}),~D.shifts.indexOf(t)&&d.trigger("shift",{reason:t})),d):h[t]})};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=v:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(p===u&&t||p===f&&0===h.duration)&&T(),t&&A()}).on("progress.internal",function(e){T()}).on("add.internal",function(e){A()}).on("destroy.internal",function(e){d.removePin(e.reset)});function C(){l&&m&&p===f&&!l.info("isDocument")&&T()}function F(){l&&m&&p===f&&((w.relSize.width||w.relSize.autoFullWidth)&&R.get.width(window)!=R.get.width(w.spacer.parentNode)||w.relSize.height&&R.get.height(window)!=R.get.height(w.spacer.parentNode))&&A()}function L(e){l&&m&&p===f&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))}var T=function(e){var t,n,r,o,i,s;m&&l&&(t=l.info(),n=w.spacer.firstChild,e||p!==f?(r={position:w.inFlow?"relative":"absolute",top:0,left:0},o=R.css(n,"position")!=r.position,w.pushFollowers?0<h.duration&&(p===u&&0===parseFloat(R.css(w.spacer,"padding-top"))||p===c&&0===parseFloat(R.css(w.spacer,"padding-bottom")))&&(o=!0):r[t.vertical?"top":"left"]=h.duration*g,R.css(n,r),o&&A()):("fixed"!=R.css(n,"position")&&(R.css(n,{position:"fixed"}),A()),i=R.get.offset(w.spacer,!0),s=h.reverse||0===h.duration?t.scrollPos-a.start:Math.round(g*h.duration*10)/10,i[t.vertical?"top":"left"]+=s,R.css(w.spacer.firstChild,{top:i.top,left:i.left})))},A=function(){var e,t,n,r,o;m&&l&&w.inFlow&&(e=p===f,t=l.info("vertical"),n=w.spacer.firstChild,r=R.isMarginCollapseType(R.css(w.spacer,"display")),o={},w.relSize.width||w.relSize.autoFullWidth?e?R.css(m,{width:R.get.width(w.spacer)}):R.css(m,{width:"100%"}):(o["min-width"]=R.get.width(t?m:n,!0,!0),o.width=e?o["min-width"]:"auto"),w.relSize.height?e?R.css(m,{height:R.get.height(w.spacer)-(w.pushFollowers?h.duration:0)}):R.css(m,{height:"100%"}):(o["min-height"]=R.get.height(t?n:m,!0,!r),o.height=e?o["min-height"]:"auto"),w.pushFollowers&&(o["padding"+(t?"Top":"Left")]=h.duration*g,o["padding"+(t?"Bottom":"Right")]=h.duration*(1-g)),R.css(w.spacer,o))};this.setPin=function(e,t){if(t=R.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=R.get.elements(e)[0]))return d;if("fixed"===R.css(e,"position"))return d;if(m){if(m===e)return d;d.removePin()}var n=(m=e).parentNode.style.display,r=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var o="absolute"!=R.css(m,"position"),i=R.css(m,r.concat(["display"])),s=R.css(m,["width","height"]);m.parentNode.style.display=n,!o&&t.pushFollowers&&(t.pushFollowers=!1);var a,l=m.parentNode.insertBefore(document.createElement("div"),m),c=R.extend(i,{position:o?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});return o||R.extend(c,R.css(m,["width","height"])),R.css(l,c),l.setAttribute(P,""),R.addClass(l,t.spacerClass),w={spacer:l,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&o&&R.isMarginCollapseType(i.display)},pushFollowers:t.pushFollowers,inFlow:o},m.___origStyle||(m.___origStyle={},a=m.style,r.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=a[e]||""})),w.relSize.width&&R.css(l,{width:s.width}),w.relSize.height&&R.css(l,{height:s.height}),l.appendChild(m),R.css(m,{position:o?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&R.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",C),window.addEventListener("resize",C),window.addEventListener("resize",F),m.addEventListener("mousewheel",L),m.addEventListener("DOMMouseScroll",L),T(),d},this.removePin=function(e){var t,n,r;return m&&(p===f&&T(!0),!e&&l||((t=w.spacer.firstChild).hasAttribute(P)&&(n=w.spacer.style,r={},["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),R.css(t,r)),w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute(P)||(R.css(m,m.___origStyle),delete m.___origStyle)),window.removeEventListener("scroll",C),window.removeEventListener("resize",C),window.removeEventListener("resize",F),m.removeEventListener("mousewheel",L),m.removeEventListener("DOMMouseScroll",L),m=void 0),d};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=R.get.elements(e);return 0!==n.length&&R.type.String(t)&&(0<O.length&&d.removeClassToggle(),N=t,O=n,d.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?R.addClass:R.removeClass;O.forEach(function(e,t){n(e,N)})})),d},this.removeClassToggle=function(e){return e&&O.forEach(function(e,t){R.removeClass(e,N)}),d.off("start.internal_class end.internal_class"),N=void 0,O=[],d},function(){for(var e in h)r.hasOwnProperty(e)||delete h[e];for(var t in r)z(t);E()}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!R.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=R.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(R.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(e,t,n,r){e in D.defaults||(D.defaults[e]=t,D.validate[e]=n,r&&D.shifts.push(e))},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(e,t,n,r){for(var o in r=r||{})this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var R=_._util=function(s){function a(e){return parseFloat(e)||0}function l(e){return e.currentStyle?e.currentStyle:s.getComputedStyle(e)}function r(e,t,n,r){if((t=t===document?s:t)===s)r=!1;else if(!u.DomElement(t))return 0;e=e[0].toUpperCase()+e.substr(1).toLowerCase();var o,i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;return n&&r&&(o=l(t),i+="Height"===e?a(o.marginTop)+a(o.marginBottom):a(o.marginLeft)+a(o.marginRight)),i}function c(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}var e={};e.extend=function(e){for(e=e||{},f=1;f<arguments.length;f++)if(arguments[f])for(var t in arguments[f])arguments[f].hasOwnProperty(t)&&(e[t]=arguments[f][t]);return e},e.isMarginCollapseType=function(e){return!!~["block","flex","list-item","table","-webkit-box"].indexOf(e)};for(var o=0,t=["ms","moz","webkit","o"],n=s.requestAnimationFrame,i=s.cancelAnimationFrame,f=0;!n&&f<4;++f)n=s[t[f]+"RequestAnimationFrame"],i=s[t[f]+"CancelAnimationFrame"]||s[t[f]+"CancelRequestAnimationFrame"];n=n||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-o)),r=s.setTimeout(function(){e(t+n)},n);return o=t+n,r},i=i||function(e){s.clearTimeout(e)},e.rAF=n.bind(s),e.cAF=i.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\\[object (.+)\\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=e.get={};return d.elements=function(e){var t=[];if(u.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===u(e)||u.Array(e)||e instanceof NodeList)for(var n=0,r=t.length=e.length;n<r;n++){var o=e[n];t[n]=u.DomElement(o)?o:d.elements(o)}else!u.DomElement(e)&&e!==document&&e!==s||(t=[e]);return t},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(e,t){var n,r={top:0,left:0};return e&&e.getBoundingClientRect&&(n=e.getBoundingClientRect(),r.top=n.top,r.left=n.left,t||(r.top+=d.scrollTop(),r.left+=d.scrollLeft())),r},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\\\b)"+t.split(" ").join("|")+"(\\\\b|$)","gi")," "))},e.css=function(e,t){if(u.String(t))return l(e)[c(t)];if(u.Array(t)){var n={},r=l(e);return t.forEach(function(e,t){n[e]=r[c(e)]}),n}for(var o in t){var i=t[o];i==parseFloat(i)&&(i+="px"),e.style[c(o)]=i}},e}(window||{});return _});`},7419:function(t){t.exports=`/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,r){"function"==typeof define&&define.amd?define(["ScrollMagic"],r):"object"==typeof exports?r(require("scrollmagic")):r(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic)}(this,function(i){"use strict";var o="0.85em",n="9999",v=i._util,h=0;i.Scene.extend(function(){var t,i=this;i.addIndicators=function(e){var r;return t||(r={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"},e=v.extend({},r,e),h++,t=new s(i,e),i.on("add.plugin_addIndicators",t.add),i.on("remove.plugin_addIndicators",t.remove),i.on("destroy.plugin_addIndicators",i.removeIndicators),i.controller()&&t.add()),i},i.removeIndicators=function(){return t&&(t.remove(),this.off("*.plugin_addIndicators"),t=void 0),i}}),i.Controller.addOption("addIndicators",!1),i.Controller.extend(function(){var c=this,e=c.info(),l=e.container,f=e.isDocument,m=e.vertical,h={groups:[]};this._indicators=h;function r(){h.updateBoundsPositions()}function t(){h.updateTriggerGroupPositions()}return l.addEventListener("resize",t),f||(window.addEventListener("resize",t),window.addEventListener("scroll",t)),l.addEventListener("resize",r),l.addEventListener("scroll",r),this._indicators.updateBoundsPositions=function(e){for(var r,t,i,o=e?[v.extend({},e.triggerGroup,{members:[e]})]:h.groups,n=o.length,s={},d=m?"left":"top",a=m?"width":"height",g=m?v.get.scrollLeft(l)+v.get.width(l)-15:v.get.scrollTop(l)+v.get.height(l)-15;n--;)for(r=(i=o[n]).members.length,t=v.get[a](i.element.firstChild);r--;)s[d]=g-t,v.css(i.members[r].bounds,s)},this._indicators.updateTriggerGroupPositions=function(e){for(var r,t,i,o,n=e?[e]:h.groups,s=n.length,d=f?document.body:l,a=f?{top:0,left:0}:v.get.offset(d,!0),g=m?v.get.width(l)-15:v.get.height(l)-15,p=m?"width":"height",u=m?"Y":"X";s--;)t=(r=n[s]).element,i=r.triggerHook*c.info("size"),o=v.get[p](t.firstChild.firstChild)<i?"translate"+u+"(-100%)":"",v.css(t,{top:a.top+(m?i:g-r.members[0].options.indent),left:a.left+(m?g-r.members[0].options.indent:i)}),v.css(t.firstChild.firstChild,{"-ms-transform":o,"-webkit-transform":o,transform:o})},this._indicators.updateTriggerGroupLabel=function(e){var r="trigger"+(1<e.members.length?"":" "+e.members[0].options.name),t=e.element.firstChild.firstChild;t.textContent!==r&&(t.textContent=r,m&&h.updateBoundsPositions())},this.addScene=function(e){this._options.addIndicators&&e instanceof i.Scene&&e.controller()===c&&e.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){l.removeEventListener("resize",t),f||(window.removeEventListener("resize",t),window.removeEventListener("scroll",t)),l.removeEventListener("resize",r),l.removeEventListener("scroll",r),this.$super.destroy.apply(this,arguments)},c});var s=function(o,n){var s,d,a=this,t=b.bounds(),i=b.start(n.colorStart),g=b.end(n.colorEnd),p=n.parent&&v.get.elements(n.parent)[0];n.name=n.name||h,i.firstChild.textContent+=" "+n.name,g.textContent+=" "+n.name,t.appendChild(i),t.appendChild(g),a.options=n,a.bounds=t,a.triggerGroup=void 0,this.add=function(){d=o.controller(),s=d.info("vertical");var e=d.info("isDocument");p=p||(e?document.body:d.info("container")),e||"static"!==v.css(p,"position")||v.css(p,{position:"relative"}),o.on("change.plugin_addIndicators",u),o.on("shift.plugin_addIndicators",r),m(),l(),setTimeout(function(){d._indicators.updateBoundsPositions(a)},0)},this.remove=function(){var e;a.triggerGroup&&(o.off("change.plugin_addIndicators",u),o.off("shift.plugin_addIndicators",r),1<a.triggerGroup.members.length?((e=a.triggerGroup).members.splice(e.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(e),d._indicators.updateTriggerGroupPositions(e),a.triggerGroup=void 0):f(),c())};var r=function(){l()},u=function(e){"triggerHook"===e.what&&m()},c=function(){t.parentNode.removeChild(t)},l=function(){var e;t.parentNode!==p&&(e=d.info("vertical"),v.css(i.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:n.indent,right:e?n.indent:-1,padding:e?"0 8px":"2px 4px"}),v.css(g,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?n.indent:"",bottom:e?"":n.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),p.appendChild(t));var r={};r[s?"top":"left"]=o.triggerPosition(),r[s?"height":"width"]=o.duration(),v.css(t,r),v.css(g,{display:0<o.duration()?"":"none"})},f=function(){d._indicators.groups.splice(d._indicators.groups.indexOf(a.triggerGroup),1),a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element),a.triggerGroup=void 0},m=function(){var e=o.triggerHook();if(!(a.triggerGroup&&Math.abs(a.triggerGroup.triggerHook-e)<1e-4)){for(var r,t=d._indicators.groups,i=t.length;i--;)if(r=t[i],Math.abs(r.triggerHook-e)<1e-4)return a.triggerGroup&&(1===a.triggerGroup.members.length?f():(a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(a.triggerGroup),d._indicators.updateTriggerGroupPositions(a.triggerGroup))),r.members.push(a),a.triggerGroup=r,void d._indicators.updateTriggerGroupLabel(r);if(a.triggerGroup){if(1===a.triggerGroup.members.length)return a.triggerGroup.triggerHook=e,void d._indicators.updateTriggerGroupPositions(a.triggerGroup);a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(a.triggerGroup),d._indicators.updateTriggerGroupPositions(a.triggerGroup),a.triggerGroup=void 0}!function(){var e=b.trigger(n.colorTrigger),r={};r[s?"right":"bottom"]=0,r[s?"border-top-width":"border-left-width"]=1,v.css(e.firstChild,r),v.css(e.firstChild.firstChild,{padding:s?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(e);var t={triggerHook:o.triggerHook(),element:e,members:[a]};d._indicators.groups.push(t),a.triggerGroup=t,d._indicators.updateTriggerGroupLabel(t),d._indicators.updateTriggerGroupPositions(t)}()}}},b={start:function(e){var r=document.createElement("div");r.textContent="start",v.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var t=document.createElement("div");return v.css(t,{position:"absolute",overflow:"visible",width:0,height:0}),t.appendChild(r),t},end:function(e){var r=document.createElement("div");return r.textContent="end",v.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),r},bounds:function(){var e=document.createElement("div");return v.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),e.style.zIndex=n,e},trigger:function(e){var r=document.createElement("div");r.textContent="trigger",v.css(r,{position:"relative"});var t=document.createElement("div");v.css(t,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),t.appendChild(r);var i=document.createElement("div");return v.css(i,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),i.style.zIndex=n,i.appendChild(t),i}}});`},1320:function(t){t.exports=`/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

!function(a,b){"function"==typeof define&&define.amd?define("bloodhound",["jquery"],function(c){return a.Bloodhound=b(c)}):"object"==typeof exports?module.exports=b(require("jquery")):a.Bloodhound=b(jQuery)}(this,function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\\d+(.\\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},isElement:function(a){return!(!a||1!==a.nodeType)},isJQuery:function(b){return b instanceof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,identity:function(a){return a},clone:function(b){return a.extend(!0,{},b)},getIdGenerator:function(){var a=0;return function(){return a++}},templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},stringify:function(a){return b.isString(a)?a:JSON.stringify(a)},noop:function(){}}}(),c="0.11.1",d=function(){"use strict";function a(a){return a=b.toStr(a),a?a.split(/\\s+/):[]}function c(a){return a=b.toStr(a),a?a.split(/\\W+/):[]}function d(a){return function(c){return c=b.isArray(c)?c:[].slice.call(arguments,0),function(d){var e=[];return b.each(c,function(c){e=e.concat(a(b.toStr(d[c])))}),e}}}return{nonword:c,whitespace:a,obj:{nonword:d(c),whitespace:d(a)}}}(),e=function(){"use strict";function c(c){this.maxSize=b.isNumber(c)?c:100,this.reset(),this.maxSize<=0&&(this.set=this.get=a.noop)}function d(){this.head=this.tail=null}function e(a,b){this.key=a,this.val=b,this.prev=this.next=null}return b.mixin(c.prototype,{set:function(a,b){var c,d=this.list.tail;this.size>=this.maxSize&&(this.list.remove(d),delete this.hash[d.key],this.size--),(c=this.hash[a])?(c.val=b,this.list.moveToFront(c)):(c=new e(a,b),this.list.add(c),this.hash[a]=c,this.size++)},get:function(a){var b=this.hash[a];return b?(this.list.moveToFront(b),b.val):void 0},reset:function(){this.size=0,this.hash={},this.list=new d}}),b.mixin(d.prototype,{add:function(a){this.head&&(a.next=this.head,this.head.prev=a),this.head=a,this.tail=this.tail||a},remove:function(a){a.prev?a.prev.next=a.next:this.head=a.next,a.next?a.next.prev=a.prev:this.tail=a.prev},moveToFront:function(a){this.remove(a),this.add(a)}}),c}(),f=function(){"use strict";function c(a,c){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+b.escapeRegExChars(this.prefix)),this.ls=c||h,!this.ls&&this._noop()}function d(){return(new Date).getTime()}function e(a){return JSON.stringify(b.isUndefined(a)?null:a)}function f(b){return a.parseJSON(b)}function g(a){var b,c,d=[],e=h.length;for(b=0;e>b;b++)(c=h.key(b)).match(a)&&d.push(c.replace(a,""));return d}var h;try{h=window.localStorage,h.setItem("~~~","!"),h.removeItem("~~~")}catch(i){h=null}return b.mixin(c.prototype,{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},_noop:function(){this.get=this.set=this.remove=this.clear=this.isExpired=b.noop},_safeSet:function(a,b){try{this.ls.setItem(a,b)}catch(c){"QuotaExceededError"===c.name&&(this.clear(),this._noop())}},get:function(a){return this.isExpired(a)&&this.remove(a),f(this.ls.getItem(this._prefix(a)))},set:function(a,c,f){return b.isNumber(f)?this._safeSet(this._ttlKey(a),e(d()+f)):this.ls.removeItem(this._ttlKey(a)),this._safeSet(this._prefix(a),e(c))},remove:function(a){return this.ls.removeItem(this._ttlKey(a)),this.ls.removeItem(this._prefix(a)),this},clear:function(){var a,b=g(this.keyMatcher);for(a=b.length;a--;)this.remove(b[a]);return this},isExpired:function(a){var c=f(this.ls.getItem(this._ttlKey(a)));return b.isNumber(c)&&d()>c?!0:!1}}),c}(),g=function(){"use strict";function c(a){a=a||{},this.cancelled=!1,this.lastReq=null,this._send=a.transport,this._get=a.limiter?a.limiter(this._get):this._get,this._cache=a.cache===!1?new e(0):h}var d=0,f={},g=6,h=new e(10);return c.setMaxPendingRequests=function(a){g=a},c.resetCache=function(){h.reset()},b.mixin(c.prototype,{_fingerprint:function(b){return b=b||{},b.url+b.type+a.param(b.data||{})},_get:function(a,b){function c(a){b(null,a),k._cache.set(i,a)}function e(){b(!0)}function h(){d--,delete f[i],k.onDeckRequestArgs&&(k._get.apply(k,k.onDeckRequestArgs),k.onDeckRequestArgs=null)}var i,j,k=this;i=this._fingerprint(a),this.cancelled||i!==this.lastReq||((j=f[i])?j.done(c).fail(e):g>d?(d++,f[i]=this._send(a).done(c).fail(e).always(h)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(c,d){var e,f;d=d||a.noop,c=b.isString(c)?{url:c}:c||{},f=this._fingerprint(c),this.cancelled=!1,this.lastReq=f,(e=this._cache.get(f))?d(null,e):this._get(c,d)},cancel:function(){this.cancelled=!0}}),c}(),h=window.SearchIndex=function(){"use strict";function c(c){c=c||{},c.datumTokenizer&&c.queryTokenizer||a.error("datumTokenizer and queryTokenizer are both required"),this.identify=c.identify||b.stringify,this.datumTokenizer=c.datumTokenizer,this.queryTokenizer=c.queryTokenizer,this.reset()}function d(a){return a=b.filter(a,function(a){return!!a}),a=b.map(a,function(a){return a.toLowerCase()})}function e(){var a={};return a[i]=[],a[h]={},a}function f(a){for(var b={},c=[],d=0,e=a.length;e>d;d++)b[a[d]]||(b[a[d]]=!0,c.push(a[d]));return c}function g(a,b){var c=0,d=0,e=[];a=a.sort(),b=b.sort();for(var f=a.length,g=b.length;f>c&&g>d;)a[c]<b[d]?c++:a[c]>b[d]?d++:(e.push(a[c]),c++,d++);return e}var h="c",i="i";return b.mixin(c.prototype,{bootstrap:function(a){this.datums=a.datums,this.trie=a.trie},add:function(a){var c=this;a=b.isArray(a)?a:[a],b.each(a,function(a){var f,g;c.datums[f=c.identify(a)]=a,g=d(c.datumTokenizer(a)),b.each(g,function(a){var b,d,g;for(b=c.trie,d=a.split("");g=d.shift();)b=b[h][g]||(b[h][g]=e()),b[i].push(f)})})},get:function(a){var c=this;return b.map(a,function(a){return c.datums[a]})},search:function(a){var c,e,j=this;return c=d(this.queryTokenizer(a)),b.each(c,function(a){var b,c,d,f;if(e&&0===e.length)return!1;for(b=j.trie,c=a.split("");b&&(d=c.shift());)b=b[h][d];return b&&0===c.length?(f=b[i].slice(0),void(e=e?g(e,f):f)):(e=[],!1)}),e?b.map(f(e),function(a){return j.datums[a]}):[]},all:function(){var a=[];for(var b in this.datums)a.push(this.datums[b]);return a},reset:function(){this.datums={},this.trie=e()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),c}(),i=function(){"use strict";function a(a){this.url=a.url,this.ttl=a.ttl,this.cache=a.cache,this.prepare=a.prepare,this.transform=a.transform,this.transport=a.transport,this.thumbprint=a.thumbprint,this.storage=new f(a.cacheKey)}var c;return c={data:"data",protocol:"protocol",thumbprint:"thumbprint"},b.mixin(a.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},store:function(a){this.cache&&(this.storage.set(c.data,a,this.ttl),this.storage.set(c.protocol,location.protocol,this.ttl),this.storage.set(c.thumbprint,this.thumbprint,this.ttl))},fromCache:function(){var a,b={};return this.cache?(b.data=this.storage.get(c.data),b.protocol=this.storage.get(c.protocol),b.thumbprint=this.storage.get(c.thumbprint),a=b.thumbprint!==this.thumbprint||b.protocol!==location.protocol,b.data&&!a?b.data:null):null},fromNetwork:function(a){function b(){a(!0)}function c(b){a(null,e.transform(b))}var d,e=this;a&&(d=this.prepare(this._settings()),this.transport(d).fail(b).done(c))},clear:function(){return this.storage.clear(),this}}),a}(),j=function(){"use strict";function a(a){this.url=a.url,this.prepare=a.prepare,this.transform=a.transform,this.transport=new g({cache:a.cache,limiter:a.limiter,transport:a.transport})}return b.mixin(a.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},get:function(a,b){function c(a,c){b(a?[]:e.transform(c))}var d,e=this;if(b)return a=a||"",d=this.prepare(a,this._settings()),this.transport.get(d,c)},cancelLastRequest:function(){this.transport.cancel()}}),a}(),k=function(){"use strict";function d(d){var e;return d?(e={url:null,ttl:864e5,cache:!0,cacheKey:null,thumbprint:"",prepare:b.identity,transform:b.identity,transport:null},d=b.isString(d)?{url:d}:d,d=b.mixin(e,d),!d.url&&a.error("prefetch requires url to be set"),d.transform=d.filter||d.transform,d.cacheKey=d.cacheKey||d.url,d.thumbprint=c+d.thumbprint,d.transport=d.transport?h(d.transport):a.ajax,d):null}function e(c){var d;if(c)return d={url:null,cache:!0,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:b.identity,transport:null},c=b.isString(c)?{url:c}:c,c=b.mixin(d,c),!c.url&&a.error("remote requires url to be set"),c.transform=c.filter||c.transform,c.prepare=f(c),c.limiter=g(c),c.transport=c.transport?h(c.transport):a.ajax,delete c.replace,delete c.wildcard,delete c.rateLimitBy,delete c.rateLimitWait,c}function f(a){function b(a,b){return b.url=f(b.url,a),b}function c(a,b){return b.url=b.url.replace(g,encodeURIComponent(a)),b}function d(a,b){return b}var e,f,g;return e=a.prepare,f=a.replace,g=a.wildcard,e?e:e=f?b:a.wildcard?c:d}function g(a){function c(a){return function(c){return b.debounce(c,a)}}function d(a){return function(c){return b.throttle(c,a)}}var e,f,g;return e=a.limiter,f=a.rateLimitBy,g=a.rateLimitWait,e||(e=/^throttle$/i.test(f)?d(g):c(g)),e}function h(c){return function(d){function e(a){b.defer(function(){g.resolve(a)})}function f(a){b.defer(function(){g.reject(a)})}var g=a.Deferred();return c(d,e,f),g}}return function(c){var f,g;return f={initialize:!0,identify:b.stringify,datumTokenizer:null,queryTokenizer:null,sufficient:5,sorter:null,local:[],prefetch:null,remote:null},c=b.mixin(f,c||{}),!c.datumTokenizer&&a.error("datumTokenizer is required"),!c.queryTokenizer&&a.error("queryTokenizer is required"),g=c.sorter,c.sorter=g?function(a){return a.sort(g)}:b.identity,c.local=b.isFunction(c.local)?c.local():c.local,c.prefetch=d(c.prefetch),c.remote=e(c.remote),c}}(),l=function(){"use strict";function c(a){a=k(a),this.sorter=a.sorter,this.identify=a.identify,this.sufficient=a.sufficient,this.local=a.local,this.remote=a.remote?new j(a.remote):null,this.prefetch=a.prefetch?new i(a.prefetch):null,this.index=new h({identify:this.identify,datumTokenizer:a.datumTokenizer,queryTokenizer:a.queryTokenizer}),a.initialize!==!1&&this.initialize()}var e;return e=window&&window.Bloodhound,c.noConflict=function(){return window&&(window.Bloodhound=e),c},c.tokenizers=d,b.mixin(c.prototype,{__ttAdapter:function(){function a(a,b,d){return c.search(a,b,d)}function b(a,b){return c.search(a,b)}var c=this;return this.remote?a:b},_loadPrefetch:function(){function b(a,b){return a?c.reject():(e.add(b),e.prefetch.store(e.index.serialize()),void c.resolve())}var c,d,e=this;return c=a.Deferred(),this.prefetch?(d=this.prefetch.fromCache())?(this.index.bootstrap(d),c.resolve()):this.prefetch.fromNetwork(b):c.resolve(),c.promise()},_initialize:function(){function a(){b.add(b.local)}var b=this;return this.clear(),(this.initPromise=this._loadPrefetch()).done(a),this.initPromise},initialize:function(a){return!this.initPromise||a?this._initialize():this.initPromise},add:function(a){return this.index.add(a),this},get:function(a){return a=b.isArray(a)?a:[].slice.call(arguments),this.index.get(a)},search:function(a,c,d){function e(a){var c=[];b.each(a,function(a){!b.some(f,function(b){return g.identify(a)===g.identify(b)})&&c.push(a)}),d&&d(c)}var f,g=this;return f=this.sorter(this.index.search(a)),c(this.remote?f.slice():f),this.remote&&f.length<this.sufficient?this.remote.get(a,e):this.remote&&this.remote.cancelLastRequest(),this},all:function(){return this.index.all()},clear:function(){return this.index.reset(),this},clearPrefetchCache:function(){return this.prefetch&&this.prefetch.clear(),this},clearRemoteCache:function(){return g.resetCache(),this},ttAdapter:function(){return this.__ttAdapter()}}),c}();return l});
`},3622:function(t){t.exports=`/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

!function(a,b){"function"==typeof define&&define.amd?define("typeahead.js",["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\\d+(.\\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},isElement:function(a){return!(!a||1!==a.nodeType)},isJQuery:function(b){return b instanceof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,identity:function(a){return a},clone:function(b){return a.extend(!0,{},b)},getIdGenerator:function(){var a=0;return function(){return a++}},templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},stringify:function(a){return b.isString(a)?a:JSON.stringify(a)},noop:function(){}}}(),c=function(){"use strict";function a(a){var g,h;return h=b.mixin({},f,a),g={css:e(),classes:h,html:c(h),selectors:d(h)},{css:g.css,html:g.html,classes:g.classes,selectors:g.selectors,mixin:function(a){b.mixin(a,g)}}}function c(a){return{wrapper:'<span class="'+a.wrapper+'"></span>',menu:'<div class="'+a.menu+'"></div>'}}function d(a){var c={};return b.each(a,function(a,b){c[b]="."+a}),c}function e(){var a={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return b.isMsie()&&b.mixin(a.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),a}var f={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};return a}(),d=function(){"use strict";function c(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d,e;return d="typeahead:",e={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"},b.mixin(c.prototype,{_trigger:function(b,c){var e;return e=a.Event(d+b),(c=c||[]).unshift(e),this.$el.trigger.apply(this.$el,c),e},before:function(a){var b,c;return b=[].slice.call(arguments,1),c=this._trigger("before"+a,b),c.isDefaultPrevented()},trigger:function(a){var b;this._trigger(a,[].slice.call(arguments,1)),(b=e[a])&&this._trigger(b,[].slice.call(arguments,1))}}),c}(),e=function(){"use strict";function a(a,b,c,d){var e;if(!c)return this;for(b=b.split(i),c=d?h(c,d):c,this._callbacks=this._callbacks||{};e=b.shift();)this._callbacks[e]=this._callbacks[e]||{sync:[],async:[]},this._callbacks[e][a].push(c);return this}function b(b,c,d){return a.call(this,"async",b,c,d)}function c(b,c,d){return a.call(this,"sync",b,c,d)}function d(a){var b;if(!this._callbacks)return this;for(a=a.split(i);b=a.shift();)delete this._callbacks[b];return this}function e(a){var b,c,d,e,g;if(!this._callbacks)return this;for(a=a.split(i),d=[].slice.call(arguments,1);(b=a.shift())&&(c=this._callbacks[b]);)e=f(c.sync,this,[b].concat(d)),g=f(c.async,this,[b].concat(d)),e()&&j(g);return this}function f(a,b,c){function d(){for(var d,e=0,f=a.length;!d&&f>e;e+=1)d=a[e].apply(b,c)===!1;return!d}return d}function g(){var a;return a=window.setImmediate?function(a){setImmediate(function(){a()})}:function(a){setTimeout(function(){a()},0)}}function h(a,b){return a.bind?a.bind(b):function(){a.apply(b,[].slice.call(arguments,0))}}var i=/\\s+/,j=g();return{onSync:c,onAsync:b,off:d,trigger:e}}(),f=function(a){"use strict";function c(a,c,d){for(var e,f=[],g=0,h=a.length;h>g;g++)f.push(b.escapeRegExChars(a[g]));return e=d?"\\\\b("+f.join("|")+")\\\\b":"("+f.join("|")+")",c?new RegExp(e):new RegExp(e,"i")}var d={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(e){function f(b){var c,d,f;return(c=h.exec(b.data))&&(f=a.createElement(e.tagName),e.className&&(f.className=e.className),d=b.splitText(c.index),d.splitText(c[0].length),f.appendChild(d.cloneNode(!0)),b.parentNode.replaceChild(f,d)),!!c}function g(a,b){for(var c,d=3,e=0;e<a.childNodes.length;e++)c=a.childNodes[e],c.nodeType===d?e+=b(c)?1:0:g(c,b)}var h;e=b.mixin({},d,e),e.node&&e.pattern&&(e.pattern=b.isArray(e.pattern)?e.pattern:[e.pattern],h=c(e.pattern,e.caseSensitive,e.wordsOnly),g(e.node,f))}}(window.document),g=function(){"use strict";function c(c,e){c=c||{},c.input||a.error("input is missing"),e.mixin(this),this.$hint=a(c.hint),this.$input=a(c.input),this.query=this.$input.val(),this.queryWhenFocused=this.hasFocus()?this.query:null,this.$overflowHelper=d(this.$input),this._checkLanguageDirection(),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=b.noop)}function d(b){return a('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function f(a,b){return c.normalizeQuery(a)===c.normalizeQuery(b)}function g(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey}var h;return h={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},c.normalizeQuery=function(a){return b.toStr(a).replace(/^\\s*/g,"").replace(/\\s{2,}/g," ")},b.mixin(c.prototype,e,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.queryWhenFocused=this.query,this.trigger("focused")},_onKeydown:function(a){var b=h[a.which||a.keyCode];this._managePreventDefault(b,a),b&&this._shouldTrigger(b,a)&&this.trigger(b+"Keyed",a)},_onInput:function(){this._setQuery(this.getInputValue()),this.clearHintIfInvalid(),this._checkLanguageDirection()},_managePreventDefault:function(a,b){var c;switch(a){case"up":case"down":c=!g(b);break;default:c=!1}c&&b.preventDefault()},_shouldTrigger:function(a,b){var c;switch(a){case"tab":c=!g(b);break;default:c=!0}return c},_checkLanguageDirection:function(){var a=(this.$input.css("direction")||"ltr").toLowerCase();this.dir!==a&&(this.dir=a,this.$hint.attr("dir",a),this.trigger("langDirChanged",a))},_setQuery:function(a,b){var c,d;c=f(a,this.query),d=c?this.query.length!==a.length:!1,this.query=a,b||c?!b&&d&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},bind:function(){var a,c,d,e,f=this;return a=b.bind(this._onBlur,this),c=b.bind(this._onFocus,this),d=b.bind(this._onKeydown,this),e=b.bind(this._onInput,this),this.$input.on("blur.tt",a).on("focus.tt",c).on("keydown.tt",d),!b.isMsie()||b.isMsie()>9?this.$input.on("input.tt",e):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){h[a.which||a.keyCode]||b.defer(b.bind(f._onInput,f,a))}),this},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getLangDir:function(){return this.dir},getQuery:function(){return this.query||""},setQuery:function(a,b){this.setInputValue(a),this._setQuery(a,b)},hasQueryChangedSinceLastFocus:function(){return this.query!==this.queryWhenFocused},getInputValue:function(){return this.$input.val()},setInputValue:function(a){this.$input.val(a),this.clearHintIfInvalid(),this._checkLanguageDirection()},resetInputValue:function(){this.setInputValue(this.query)},getHint:function(){return this.$hint.val()},setHint:function(a){this.$hint.val(a)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var a,b,c,d;a=this.getInputValue(),b=this.getHint(),c=a!==b&&0===b.indexOf(a),d=""!==a&&c&&!this.hasOverflow(),!d&&this.clearHint()},hasFocus:function(){return this.$input.is(":focus")},hasOverflow:function(){var a=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=a},isCursorAtEnd:function(){var a,c,d;return a=this.$input.val().length,c=this.$input[0].selectionStart,b.isNumber(c)?c===a:document.selection?(d=document.selection.createRange(),d.moveStart("character",-a),a===d.text.length):!0},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$overflowHelper.remove(),this.$hint=this.$input=this.$overflowHelper=a("<div>")}}),c}(),h=function(){"use strict";function c(c,e){c=c||{},c.templates=c.templates||{},c.templates.notFound=c.templates.notFound||c.templates.empty,c.source||a.error("missing source"),c.node||a.error("missing node"),c.name&&!h(c.name)&&a.error("invalid dataset name: "+c.name),e.mixin(this),this.highlight=!!c.highlight,this.name=c.name||j(),this.limit=c.limit||5,this.displayFn=d(c.display||c.displayKey),this.templates=g(c.templates,this.displayFn),this.source=c.source.__ttAdapter?c.source.__ttAdapter():c.source,this.async=b.isUndefined(c.async)?this.source.length>2:!!c.async,this._resetLastSuggestion(),this.$el=a(c.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)}function d(a){function c(b){return b[a]}return a=a||b.stringify,b.isFunction(a)?a:c}function g(c,d){function e(b){return a("<div>").text(d(b))}return{notFound:c.notFound&&b.templatify(c.notFound),pending:c.pending&&b.templatify(c.pending),header:c.header&&b.templatify(c.header),footer:c.footer&&b.templatify(c.footer),suggestion:c.suggestion||e}}function h(a){return/^[_a-zA-Z0-9-]+$/.test(a)}var i,j;return i={val:"tt-selectable-display",obj:"tt-selectable-object"},j=b.getIdGenerator(),c.extractData=function(b){var c=a(b);return c.data(i.obj)?{val:c.data(i.val)||"",obj:c.data(i.obj)||null}:null},b.mixin(c.prototype,e,{_overwrite:function(a,b){b=b||[],b.length?this._renderSuggestions(a,b):this.async&&this.templates.pending?this._renderPending(a):!this.async&&this.templates.notFound?this._renderNotFound(a):this._empty(),this.trigger("rendered",this.name,b,!1)},_append:function(a,b){b=b||[],b.length&&this.$lastSuggestion.length?this._appendSuggestions(a,b):b.length?this._renderSuggestions(a,b):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(a),this.trigger("rendered",this.name,b,!0)},_renderSuggestions:function(a,b){var c;c=this._getSuggestionsFragment(a,b),this.$lastSuggestion=c.children().last(),this.$el.html(c).prepend(this._getHeader(a,b)).append(this._getFooter(a,b))},_appendSuggestions:function(a,b){var c,d;c=this._getSuggestionsFragment(a,b),d=c.children().last(),this.$lastSuggestion.after(c),this.$lastSuggestion=d},_renderPending:function(a){var b=this.templates.pending;this._resetLastSuggestion(),b&&this.$el.html(b({query:a,dataset:this.name}))},_renderNotFound:function(a){var b=this.templates.notFound;this._resetLastSuggestion(),b&&this.$el.html(b({query:a,dataset:this.name}))},_empty:function(){this.$el.empty(),this._resetLastSuggestion()},_getSuggestionsFragment:function(c,d){var e,g=this;return e=document.createDocumentFragment(),b.each(d,function(b){var d,f;f=g._injectQuery(c,b),d=a(g.templates.suggestion(f)).data(i.obj,b).data(i.val,g.displayFn(b)).addClass(g.classes.suggestion+" "+g.classes.selectable),e.appendChild(d[0])}),this.highlight&&f({className:this.classes.highlight,node:e,pattern:c}),a(e)},_getFooter:function(a,b){return this.templates.footer?this.templates.footer({query:a,suggestions:b,dataset:this.name}):null},_getHeader:function(a,b){return this.templates.header?this.templates.header({query:a,suggestions:b,dataset:this.name}):null},_resetLastSuggestion:function(){this.$lastSuggestion=a()},_injectQuery:function(a,c){return b.isObject(c)?b.mixin({_query:a},c):c},update:function(b){function c(a){g||(g=!0,a=(a||[]).slice(0,e.limit),h=a.length,e._overwrite(b,a),h<e.limit&&e.async&&e.trigger("asyncRequested",b))}function d(c){c=c||[],!f&&h<e.limit&&(e.cancel=a.noop,h+=c.length,e._append(b,c.slice(0,e.limit-h)),e.async&&e.trigger("asyncReceived",b))}var e=this,f=!1,g=!1,h=0;this.cancel(),this.cancel=function(){f=!0,e.cancel=a.noop,e.async&&e.trigger("asyncCanceled",b)},this.source(b,c,d),!g&&c([])},cancel:a.noop,clear:function(){this._empty(),this.cancel(),this.trigger("cleared")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=a("<div>")}}),c}(),i=function(){"use strict";function c(c,d){function e(b){var c=f.$node.find(b.node).first();return b.node=c.length?c:a("<div>").appendTo(f.$node),new h(b,d)}var f=this;c=c||{},c.node||a.error("node is required"),d.mixin(this),this.$node=a(c.node),this.query=null,this.datasets=b.map(c.datasets,e)}return b.mixin(c.prototype,e,{_onSelectableClick:function(b){this.trigger("selectableClicked",a(b.currentTarget))},_onRendered:function(a,b,c,d){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetRendered",b,c,d)},_onCleared:function(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetCleared")},_propagate:function(){this.trigger.apply(this,arguments)},_allDatasetsEmpty:function(){function a(a){return a.isEmpty()}return b.every(this.datasets,a)},_getSelectables:function(){return this.$node.find(this.selectors.selectable)},_removeCursor:function(){var a=this.getActiveSelectable();a&&a.removeClass(this.classes.cursor)},_ensureVisible:function(a){var b,c,d,e;b=a.position().top,c=b+a.outerHeight(!0),d=this.$node.scrollTop(),e=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10),0>b?this.$node.scrollTop(d+b):c>e&&this.$node.scrollTop(d+(c-e))},bind:function(){var a,c=this;return a=b.bind(this._onSelectableClick,this),this.$node.on("click.tt",this.selectors.selectable,a),b.each(this.datasets,function(a){a.onSync("asyncRequested",c._propagate,c).onSync("asyncCanceled",c._propagate,c).onSync("asyncReceived",c._propagate,c).onSync("rendered",c._onRendered,c).onSync("cleared",c._onCleared,c)}),this},isOpen:function(){return this.$node.hasClass(this.classes.open)},open:function(){this.$node.addClass(this.classes.open)},close:function(){this.$node.removeClass(this.classes.open),this._removeCursor()},setLanguageDirection:function(a){this.$node.attr("dir",a)},selectableRelativeToCursor:function(a){var b,c,d,e;return c=this.getActiveSelectable(),b=this._getSelectables(),d=c?b.index(c):-1,e=d+a,e=(e+1)%(b.length+1)-1,e=-1>e?b.length-1:e,-1===e?null:b.eq(e)},setCursor:function(a){this._removeCursor(),(a=a&&a.first())&&(a.addClass(this.classes.cursor),this._ensureVisible(a))},getSelectableData:function(a){return a&&a.length?h.extractData(a):null},getActiveSelectable:function(){var a=this._getSelectables().filter(this.selectors.cursor).first();return a.length?a:null},getTopSelectable:function(){var a=this._getSelectables().first();return a.length?a:null},update:function(a){function c(b){b.update(a)}var d=a!==this.query;return d&&(this.query=a,b.each(this.datasets,c)),d},empty:function(){function a(a){a.clear()}b.each(this.datasets,a),this.query=null,this.$node.addClass(this.classes.empty)},destroy:function(){function c(a){a.destroy()}this.$node.off(".tt"),this.$node=a("<div>"),b.each(this.datasets,c)}}),c}(),j=function(){"use strict";function a(){i.apply(this,[].slice.call(arguments,0))}var c=i.prototype;return b.mixin(a.prototype,i.prototype,{open:function(){return!this._allDatasetsEmpty()&&this._show(),c.open.apply(this,[].slice.call(arguments,0))},close:function(){return this._hide(),c.close.apply(this,[].slice.call(arguments,0))},_onRendered:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),c._onRendered.apply(this,[].slice.call(arguments,0))},_onCleared:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),c._onCleared.apply(this,[].slice.call(arguments,0))},setLanguageDirection:function(a){return this.$node.css("ltr"===a?this.css.ltr:this.css.rtl),c.setLanguageDirection.apply(this,[].slice.call(arguments,0))},_hide:function(){this.$node.hide()},_show:function(){this.$node.css("display","block")}}),a}(),k=function(){"use strict";function c(c,e){var f,g,h,i,j,k,l,m,n,o,p;c=c||{},c.input||a.error("missing input"),c.menu||a.error("missing menu"),c.eventBus||a.error("missing event bus"),e.mixin(this),this.eventBus=c.eventBus,this.minLength=b.isNumber(c.minLength)?c.minLength:1,this.input=c.input,this.menu=c.menu,this.enabled=!0,this.active=!1,this.input.hasFocus()&&this.activate(),this.dir=this.input.getLangDir(),this._hacks(),this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this),f=d(this,"activate","open","_onFocused"),g=d(this,"deactivate","_onBlurred"),h=d(this,"isActive","isOpen","_onEnterKeyed"),i=d(this,"isActive","isOpen","_onTabKeyed"),j=d(this,"isActive","_onEscKeyed"),k=d(this,"isActive","open","_onUpKeyed"),l=d(this,"isActive","open","_onDownKeyed"),m=d(this,"isActive","isOpen","_onLeftKeyed"),n=d(this,"isActive","isOpen","_onRightKeyed"),o=d(this,"_openIfActive","_onQueryChanged"),p=d(this,"_openIfActive","_onWhitespaceChanged"),this.input.bind().onSync("focused",f,this).onSync("blurred",g,this).onSync("enterKeyed",h,this).onSync("tabKeyed",i,this).onSync("escKeyed",j,this).onSync("upKeyed",k,this).onSync("downKeyed",l,this).onSync("leftKeyed",m,this).onSync("rightKeyed",n,this).onSync("queryChanged",o,this).onSync("whitespaceChanged",p,this).onSync("langDirChanged",this._onLangDirChanged,this)}function d(a){var c=[].slice.call(arguments,1);return function(){var d=[].slice.call(arguments);b.each(c,function(b){return a[b].apply(a,d)})}}return b.mixin(c.prototype,{_hacks:function(){var c,d;c=this.input.$input||a("<div>"),d=this.menu.$node||a("<div>"),c.on("blur.tt",function(a){var e,f,g;e=document.activeElement,f=d.is(e),g=d.has(e).length>0,b.isMsie()&&(f||g)&&(a.preventDefault(),a.stopImmediatePropagation(),b.defer(function(){c.focus()}))}),d.on("mousedown.tt",function(a){a.preventDefault()})},_onSelectableClicked:function(a,b){this.select(b)},_onDatasetCleared:function(){this._updateHint()},_onDatasetRendered:function(a,b,c,d){this._updateHint(),this.eventBus.trigger("render",c,d,b)},_onAsyncRequested:function(a,b,c){this.eventBus.trigger("asyncrequest",c,b)},_onAsyncCanceled:function(a,b,c){this.eventBus.trigger("asynccancel",c,b)},_onAsyncReceived:function(a,b,c){this.eventBus.trigger("asyncreceive",c,b)},_onFocused:function(){this._minLengthMet()&&this.menu.update(this.input.getQuery())},_onBlurred:function(){this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change",this.input.getQuery())},_onEnterKeyed:function(a,b){var c;(c=this.menu.getActiveSelectable())&&this.select(c)&&b.preventDefault()},_onTabKeyed:function(a,b){var c;(c=this.menu.getActiveSelectable())?this.select(c)&&b.preventDefault():(c=this.menu.getTopSelectable())&&this.autocomplete(c)&&b.preventDefault()},_onEscKeyed:function(){this.close()},_onUpKeyed:function(){this.moveCursor(-1)},_onDownKeyed:function(){this.moveCursor(1)},_onLeftKeyed:function(){"rtl"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onRightKeyed:function(){"ltr"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onQueryChanged:function(a,b){this._minLengthMet(b)?this.menu.update(b):this.menu.empty()},_onWhitespaceChanged:function(){this._updateHint()},_onLangDirChanged:function(a,b){this.dir!==b&&(this.dir=b,this.menu.setLanguageDirection(b))},_openIfActive:function(){this.isActive()&&this.open()},_minLengthMet:function(a){return a=b.isString(a)?a:this.input.getQuery()||"",a.length>=this.minLength},_updateHint:function(){var a,c,d,e,f,h,i;a=this.menu.getTopSelectable(),c=this.menu.getSelectableData(a),d=this.input.getInputValue(),!c||b.isBlankString(d)||this.input.hasOverflow()?this.input.clearHint():(e=g.normalizeQuery(d),f=b.escapeRegExChars(e),h=new RegExp("^(?:"+f+")(.+$)","i"),i=h.exec(c.val),i&&this.input.setHint(d+i[1]))},isEnabled:function(){return this.enabled},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},isActive:function(){return this.active},activate:function(){return this.isActive()?!0:!this.isEnabled()||this.eventBus.before("active")?!1:(this.active=!0,this.eventBus.trigger("active"),!0)},deactivate:function(){return this.isActive()?this.eventBus.before("idle")?!1:(this.active=!1,this.close(),this.eventBus.trigger("idle"),!0):!0},isOpen:function(){return this.menu.isOpen()},open:function(){return this.isOpen()||this.eventBus.before("open")||(this.menu.open(),this._updateHint(),this.eventBus.trigger("open")),this.isOpen()},close:function(){return this.isOpen()&&!this.eventBus.before("close")&&(this.menu.close(),this.input.clearHint(),this.input.resetInputValue(),this.eventBus.trigger("close")),!this.isOpen()},setVal:function(a){this.input.setQuery(b.toStr(a))},getVal:function(){return this.input.getQuery()},select:function(a){var b=this.menu.getSelectableData(a);return b&&!this.eventBus.before("select",b.obj)?(this.input.setQuery(b.val,!0),this.eventBus.trigger("select",b.obj),this.close(),!0):!1},autocomplete:function(a){var b,c,d;return b=this.input.getQuery(),c=this.menu.getSelectableData(a),d=c&&b!==c.val,d&&!this.eventBus.before("autocomplete",c.obj)?(this.input.setQuery(c.val),this.eventBus.trigger("autocomplete",c.obj),!0):!1},moveCursor:function(a){var b,c,d,e,f;return b=this.input.getQuery(),c=this.menu.selectableRelativeToCursor(a),d=this.menu.getSelectableData(c),e=d?d.obj:null,f=this._minLengthMet()&&this.menu.update(b),f||this.eventBus.before("cursorchange",e)?!1:(this.menu.setCursor(c),d?this.input.setInputValue(d.val):(this.input.resetInputValue(),this._updateHint()),this.eventBus.trigger("cursorchange",e),!0)},destroy:function(){this.input.destroy(),this.menu.destroy()}}),c}();!function(){"use strict";function e(b,c){b.each(function(){var b,d=a(this);(b=d.data(p.typeahead))&&c(b,d)})}function f(a,b){return a.clone().addClass(b.classes.hint).removeData().css(b.css.hint).css(l(a)).prop("readonly",!0).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1})}function h(a,b){a.data(p.attrs,{dir:a.attr("dir"),autocomplete:a.attr("autocomplete"),spellcheck:a.attr("spellcheck"),style:a.attr("style")}),a.addClass(b.classes.input).attr({autocomplete:"off",spellcheck:!1});try{!a.attr("dir")&&a.attr("dir","auto")}catch(c){}return a}function l(a){return{backgroundAttachment:a.css("background-attachment"),backgroundClip:a.css("background-clip"),backgroundColor:a.css("background-color"),backgroundImage:a.css("background-image"),backgroundOrigin:a.css("background-origin"),backgroundPosition:a.css("background-position"),backgroundRepeat:a.css("background-repeat"),backgroundSize:a.css("background-size")}}function m(a){var c,d;c=a.data(p.www),d=a.parent().filter(c.selectors.wrapper),b.each(a.data(p.attrs),function(c,d){b.isUndefined(c)?a.removeAttr(d):a.attr(d,c)}),a.removeData(p.typeahead).removeData(p.www).removeData(p.attr).removeClass(c.classes.input),d.length&&(a.detach().insertAfter(d),d.remove())}function n(c){var d,e;return d=b.isJQuery(c)||b.isElement(c),e=d?a(c).first():[],e.length?e:null}var o,p,q;o=a.fn.typeahead,p={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"},q={initialize:function(e,l){function m(){var c,m,q,r,s,t,u,v,w,x,y;b.each(l,function(a){a.highlight=!!e.highlight}),c=a(this),m=a(o.html.wrapper),q=n(e.hint),r=n(e.menu),s=e.hint!==!1&&!q,t=e.menu!==!1&&!r,s&&(q=f(c,o)),t&&(r=a(o.html.menu).css(o.css.menu)),q&&q.val(""),c=h(c,o),(s||t)&&(m.css(o.css.wrapper),c.css(s?o.css.input:o.css.inputWithNoHint),c.wrap(m).parent().prepend(s?q:null).append(t?r:null)),y=t?j:i,u=new d({el:c}),v=new g({hint:q,input:c},o),w=new y({node:r,datasets:l},o),x=new k({input:v,menu:w,eventBus:u,minLength:e.minLength},o),c.data(p.www,o),c.data(p.typeahead,x)}var o;return l=b.isArray(l)?l:[].slice.call(arguments,1),e=e||{},o=c(e.classNames),this.each(m)},isEnabled:function(){var a;return e(this.first(),function(b){a=b.isEnabled()}),a},enable:function(){return e(this,function(a){a.enable()}),this},disable:function(){return e(this,function(a){a.disable()}),this},isActive:function(){var a;return e(this.first(),function(b){a=b.isActive()}),a},activate:function(){return e(this,function(a){a.activate()}),this},deactivate:function(){return e(this,function(a){a.deactivate()}),this},isOpen:function(){var a;return e(this.first(),function(b){a=b.isOpen()}),a},open:function(){return e(this,function(a){a.open()}),this},close:function(){return e(this,function(a){a.close()}),this},select:function(b){var c=!1,d=a(b);return e(this.first(),function(a){c=a.select(d)}),c},autocomplete:function(b){var c=!1,d=a(b);return e(this.first(),function(a){c=a.autocomplete(d)}),c},moveCursor:function(a){var b=!1;return e(this.first(),function(c){b=c.moveCursor(a)}),b},val:function(a){var b;return arguments.length?(e(this,function(b){b.setVal(a)}),this):(e(this.first(),function(a){b=a.getVal()}),b)},destroy:function(){return e(this,function(a,b){m(b),a.destroy()}),this}},a.fn.typeahead=function(a){return q[a]?q[a].apply(this,[].slice.call(arguments,1)):q.initialize.apply(this,arguments)},a.fn.typeahead.noConflict=function(){return a.fn.typeahead=o,this}}()});
`},8628:function(t,n,e){e(5714)(e(2906))},9493:function(t,n,e){e(5714)(e(6563))},8698:function(t,n,e){e(5714)(e(1282))},9118:function(t,n,e){e(5714)(e(5134))},9203:function(t,n,e){e(5714)(e(5423))},4377:function(t,n,e){e(5714)(e(3054))},7557:function(t,n,e){e(5714)(e(6713))},1095:function(t,n,e){e(5714)(e(7088))},7410:function(t,n,e){e(5714)(e(3530))},6543:function(t,n,e){e(5714)(e(8615))},7510:function(t,n,e){e(5714)(e(7419))},9113:function(t,n,e){e(5714)(e(1320))},341:function(t,n,e){e(5714)(e(3622))},5311:function(t){"use strict";t.exports=jQuery}},function(t){var n=function(r){return t(t.s=r)};t.O(0,[577],function(){return n(4080)});var e=t.O()}]);
