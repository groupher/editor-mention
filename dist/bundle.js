!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Mention=n():e.Mention=n()}(window,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=6)}([function(e,n,t){window,e.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=7)}([function(e,n){function t(e,n,t){var o,r,i,s,a;function c(){var u=Date.now()-s;u<n&&u>=0?o=setTimeout(c,n-u):(o=null,t||(a=e.apply(i,r),i=r=null))}null==n&&(n=100);var u=function(){i=this,r=arguments,s=Date.now();var u=t&&!o;return o||(o=setTimeout(c,n)),u&&(a=e.apply(i,r),i=r=null),a};return u.clear=function(){o&&(clearTimeout(o),o=null)},u.flush=function(){o&&(a=e.apply(i,r),i=r=null,clearTimeout(o),o=null)},u}t.debounce=t,e.exports=t},function(e,n,t){(function(o){n.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},n.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;n.splice(1,0,t,"color: inherit");let o=0,r=0;n[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&"%c"===e&&(r=++o)}),n.splice(r,0,t)},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")}catch(e){}},n.load=function(){let e;try{e=n.storage.getItem("debug")}catch(e){}return!e&&void 0!==o&&"env"in o&&(e=o.env.DEBUG),e},n.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},n.storage=function(){try{return localStorage}catch(e){}}(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=t(4)(n);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,t(3))},function(e,n,t){(function(e){!function(t,o){"use strict";var r={};t.PubSub=r;var i=t.define;!function(e){var n={},t=-1;function o(e){var n;for(n in e)if(e.hasOwnProperty(n))return!0;return!1}function r(e,n,t){try{e(n,t)}catch(e){setTimeout(function(e){return function(){throw e}}(e),0)}}function i(e,n,t){e(n,t)}function s(e,t,o,s){var a,c=n[t],u=s?i:r;if(n.hasOwnProperty(t))for(a in c)c.hasOwnProperty(a)&&u(c[a],e,o)}function a(e,t,r,i){var a=function(e,n,t){return function(){var o=String(e),r=o.lastIndexOf(".");for(s(e,e,n,t);-1!==r;)r=(o=o.substr(0,r)).lastIndexOf("."),s(e,o,n,t)}}(e="symbol"==typeof e?e.toString():e,t,i);return!!function(e){for(var t=String(e),r=Boolean(n.hasOwnProperty(t)&&o(n[t])),i=t.lastIndexOf(".");!r&&-1!==i;)i=(t=t.substr(0,i)).lastIndexOf("."),r=Boolean(n.hasOwnProperty(t)&&o(n[t]));return r}(e)&&(!0===r?a():setTimeout(a,0),!0)}e.publish=function(n,t){return a(n,t,!1,e.immediateExceptions)},e.publishSync=function(n,t){return a(n,t,!0,e.immediateExceptions)},e.subscribe=function(e,o){if("function"!=typeof o)return!1;e="symbol"==typeof e?e.toString():e,n.hasOwnProperty(e)||(n[e]={});var r="uid_"+String(++t);return n[e][r]=o,r},e.subscribeOnce=function(n,t){var o=e.subscribe(n,(function(){e.unsubscribe(o),t.apply(this,arguments)}));return e},e.clearAllSubscriptions=function(){n={}},e.clearSubscriptions=function(e){var t;for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&delete n[t]},e.countSubscriptions=function(e){var t,o=0;for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&o++;return o},e.getSubscriptions=function(e){var t,o=[];for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&o.push(t);return o},e.unsubscribe=function(t){var o,r,i,s="string"==typeof t&&(n.hasOwnProperty(t)||function(e){var t;for(t in n)if(n.hasOwnProperty(t)&&0===t.indexOf(e))return!0;return!1}(t)),a=!s&&"string"==typeof t,c="function"==typeof t,u=!1;if(!s){for(o in n)if(n.hasOwnProperty(o)){if(r=n[o],a&&r[t]){delete r[t],u=t;break}if(c)for(i in r)r.hasOwnProperty(i)&&r[i]===t&&(delete r[i],u=!0)}return u}e.clearSubscriptions(t)}}(r),"function"==typeof i&&i.amd?i((function(){return r})):(void 0!==e&&e.exports&&(n=e.exports=r),n.PubSub=r,e.exports=n=r)}("object"==typeof window&&window||this)}).call(this,t(6)(e))},function(e,n){var t,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(e){o=s}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=a(f);l=!0;for(var n=u.length;n;){for(c=u,u=[];++d<n;)c&&c[d].run();d=-1,n=u.length}c=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(n){try{return o.call(null,e)}catch(n){return o.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function h(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new m(e,n)),1!==u.length||l||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,n,t){e.exports=function(e){function n(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return o.colors[Math.abs(n)%o.colors.length]}function o(e){let t;function s(...e){if(!s.enabled)return;const n=s,r=Number(new Date),i=r-(t||r);n.diff=i,n.prev=t,n.curr=r,t=r,e[0]=o.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,r)=>{if("%%"===t)return t;a++;const i=o.formatters[r];if("function"==typeof i){const o=e[a];t=i.call(n,o),e.splice(a,1),a--}return t}),o.formatArgs.call(n,e),(n.log||o.log).apply(n,e)}return s.namespace=e,s.enabled=o.enabled(e),s.useColors=o.useColors(),s.color=n(e),s.destroy=r,s.extend=i,"function"==typeof o.init&&o.init(s),o.instances.push(s),s}function r(){const e=o.instances.indexOf(this);return-1!==e&&(o.instances.splice(e,1),!0)}function i(e,n){const t=o(this.namespace+(void 0===n?":":n)+e);return t.log=this.log,t}function s(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return o.debug=o,o.default=o,o.coerce=function(e){return e instanceof Error?e.stack||e.message:e},o.disable=function(){const e=[...o.names.map(s),...o.skips.map(s).map(e=>"-"+e)].join(",");return o.enable(""),e},o.enable=function(e){let n;o.save(e),o.names=[],o.skips=[];const t=("string"==typeof e?e:"").split(/[\s,]+/),r=t.length;for(n=0;n<r;n++)t[n]&&("-"===(e=t[n].replace(/\*/g,".*?"))[0]?o.skips.push(new RegExp("^"+e.substr(1)+"$")):o.names.push(new RegExp("^"+e+"$")));for(n=0;n<o.instances.length;n++){const e=o.instances[n];e.enabled=o.enabled(e.namespace)}},o.enabled=function(e){if("*"===e[e.length-1])return!0;let n,t;for(n=0,t=o.skips.length;n<t;n++)if(o.skips[n].test(e))return!1;for(n=0,t=o.names.length;n<t;n++)if(o.names[n].test(e))return!0;return!1},o.humanize=t(5),Object.keys(e).forEach(n=>{o[n]=e[n]}),o.instances=[],o.names=[],o.skips=[],o.formatters={},o.selectColor=n,o.enable(o.load()),o}},function(e,n){var t=1e3,o=6e4,r=60*o,i=24*r;function s(e,n,t,o){var r=n>=1.5*t;return Math.round(e/t)+" "+o+(r?"s":"")}e.exports=function(e,n){n=n||{};var a=typeof e;if("string"===a&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var n=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(n){var s=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"weeks":case"week":case"w":return 6048e5*s;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*o;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}(e);if("number"===a&&!1===isNaN(e))return n.long?function(e){var n=Math.abs(e);return n>=i?s(e,n,i,"day"):n>=r?s(e,n,r,"hour"):n>=o?s(e,n,o,"minute"):n>=t?s(e,n,t,"second"):e+" ms"}(e):function(e){var n=Math.abs(e);return n>=i?Math.round(e/i)+"d":n>=r?Math.round(e/r)+"h":n>=o?Math.round(e/o)+"m":n>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o);const i="object"==typeof document&&null!==document,s="object"==typeof window&&null!==window&&window.self===window;if(()=>i&&s){let n;try{"undefined"!=typeof window&&(n=window.localStorage.debug)}catch(e){console.error("groupher could not enable debug.")}r.a.enable(n)}var a=(e,n="@editor/")=>r()(`${n}${e}`);const c={focusHolder:"focus-holder",mention:"cdx-mention",emoji:"cdx-emoji",editorInlineToolbarWrapper:"ce-inline-toolbar__toggler-and-button-wrapper",mentionContainer:"cdx-mention__container",emojiContainer:"cdx-emoji__container"},u={mention:"label",strike:"strike",lock:"addr",emoji:"i"},l="classList"in document.documentElement,d=e=>new RegExp("(^|\\s+)"+e+"(\\s+|$)"),f=(e,n)=>l?e.classList.contains(n):d(n).test(e.className),p=(e,n)=>{0!==n.trim().length&&(l?e.classList.add(n):f(e,n)||(e.className=e.className+" "+n))},m=(e,n)=>{0!==n.trim().length&&(l?e.classList.remove(n):e.className=e.className.replace(d(n)," "))};var h={has:f,add:p,remove:m,toggle:(e,n,t)=>{if(0===n.trim().length)return;let o;(o=void 0!==t?t?p:m:f(e,n)?m:p)(e,n)}};const g=a("utils/dom"),b=e=>e instanceof Element,y=(e,n=null,t={})=>{let o=document.createElement(e);Array.isArray(n)?o.classList.add(...n.filter(e=>!!e)):n&&o.classList.add(n);for(let e in t)"placeholder"===e?o.setAttribute("placeholder",t[e]):0===e.indexOf("data-")?o.setAttribute(e,t[e]):o[e]=t[e];return o},v=(e,n=[])=>new Promise((t,o)=>{const r=document.createElement("script");r.setAttribute("src",e),r.addEventListener("load",()=>{t(n.map(e=>{const n=window[e];return void 0===n&&console.warn(`No external named '${e}' in window`),n}))}),r.addEventListener("error",o),document.body.appendChild(r)}),C=(e,n)=>{if(e.parentNode){const t=e.parentNode.querySelectorAll("."+n.styles.settingsButton);Array.from(t).forEach(e=>e.classList.remove(n.styles.settingsButtonActive))}e.classList.add(n.styles.settingsButtonActive)},w=e=>{if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var n=document.createRange();n.selectNodeContents(e),n.collapse(!1);var t=window.getSelection();t.removeAllRanges(),t.addRange(n)}else if(void 0!==document.body.createTextRange){var o=document.body.createTextRange();o.moveToElementText(e),o.collapse(!1),o.select()}},x=e=>{let n,t;if(window.getSelection&&(n=window.getSelection()).getRangeAt&&n.rangeCount){(t=n.getRangeAt(0)).deleteContents();const s=document.createElement("div");s.innerHTML=e;for(var o,r,i=document.createDocumentFragment();o=s.firstChild;)r=i.appendChild(o);t.insertNode(i),r&&((t=t.cloneRange()).setStartAfter(r),t.collapse(!0),n.removeAllRanges(),n.addRange(t))}},S=function(e){if(document.body.createTextRange){const n=document.body.createTextRange();n.moveToElementText(e),n.select()}else if(window.getSelection){const n=window.getSelection(),t=document.createRange();t.selectNodeContents(e),n.removeAllRanges(),n.addRange(t)}else console.warn("Could not select text in node: Unsupported browser.")},k=(e,n)=>{const t=document.querySelector("."+e);t&&(t.style.display=n)},_=(e,n)=>{const t=document.querySelector("."+e);t&&t.remove()},T=(e,n=c.editorInlineToolbarWrapper)=>{g("keepCustomInlineToolOnly: ",e),k(n,"none"),"mention"===e&&(k(c.mentionContainer,"block"),k(c.emojiContainer,"none")),"emoji"===e&&(k(c.emojiContainer,"block"),k(c.mentionContainer,"none"))},E=(e=c.editorInlineToolbarWrapper)=>{g("restoreDefaultInlineTools: ",e),k(e,"flex"),k(c.mentionContainer,"none"),k(c.emojiContainer,"none")},O=(e,n,t="@")=>{""===n.value.trim()&&(e.replaceWith(""),x(t))},I=(e,n,t="@")=>{n&&(e.replaceWith(""),x(t))},j=(e,n,t)=>{e.replaceWith(n),t&&(t.tooltip.hide(),t.toolbar.close())},A=(e,n,t="block")=>{if(e>=0){for(let e=0;e<n.length;e+=1)n[e].style.display="none";setTimeout(()=>{n[e].style.display=t})}},F=e=>{for(let n=0;n<e.length;n+=1)e[n].style.display="none"},L="cdx-mention",R="cdx-emoji",M="inline_tmp_anchor",N=a("utils:markdown"),D="HEADER_1",P="HEADER_2",B="HEADER_3",U="UNORDERED_LIST",z="ORDERED_LIST",$="QUOTE",H="CODE",q={BOLD:new RegExp(/\*\*([\S]{1,})\*\*/),ITALIC:new RegExp(/__([\S]{1,})__/),MARKER:new RegExp(/==([\S]{1,})==/),INLINE_CODE:new RegExp(/\`([\S]{1,})\`/)},V=function(e){return{md:e[0],content:e[1],isValid:!0}},W=e=>{switch(e){case D:return{type:"header",toolData:{level:1},config:{}};case P:return{type:"header",toolData:{level:2},config:{}};case B:return{type:"header",toolData:{level:3},config:{}};case U:return{type:"list",toolData:{style:"unordered"},config:{}};case z:return{type:"list",toolData:{style:"ordered"},config:{}};case $:return{type:"quote",toolData:{},config:{}};case H:return{type:"code",toolData:{},config:{}};default:return{isInvalid:!1,type:"",toolData:"",config:""}}},G=a("utils/emoji"),J=a("utils/emoji"),K=a("utils:linkCard"),Z=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");var X=t(0),Q=t.n(X);const Y=function(e,n,t){let o=document.createElement("script");o.src=e,o.onload=n,o.onreadystatechange=n,t.appendChild(o)},ee=function(e,n,t){let o=document.createElement("link");o.rel="stylesheet",o.src=e,o.onload=n,o.onreadystatechange=n,t.appendChild(o)},ne=e=>{for(var n in e)return!1;return!0},te=(e,n)=>{const{length:t}=e;let o=-1;for(;++o<t;)if(n(e[o],o,e))return o;return-1},oe=(e,n,t)=>{const o=e.splice(n,1)[0];e.splice(t,0,o)},re=(e,n,t)=>{const o=e[n];e[n]=e[t],e[t]=o},ie=a("utils:enhancer"),se=(e,n,t)=>{ie("inputHandler: ",e.data),ie("opt: ",t),t.markdown&&((e,n)=>{const t=n.blocks.getCurrentBlockIndex(),o=n.blocks.getBlockByIndex(t);if(t<0||!o)return!1;const{isValidMDStatus:r,MDType:i}=((e,n)=>{const t=e.holder.textContent.trim();let o=!0,r="";const i=" "===n;if(t.length>7)return{isValidMDStatus:!1,MDType:r};switch(!0){case"#"===t&&i:r=D;break;case"##"===t&&i:r=P;break;case("###"===t||"####"===t||"#####"===t||"######"===t)&&i:r=B;break;case"-"===t&&i:r=U;break;case"1"===t&&i:r=z;break;case">"===t&&i:r=$;break;case"```"===t:r=H;break;default:o=!1}return{isValidMDStatus:o,MDType:r}})(o,e.data);if(!r)return!1;const{isInvalid:s,type:a,toolData:c,config:u}=W(i);N("_markdownBlockConfig: ",W(i)),s||(n.blocks.delete(t),n.blocks.insert(a,c,u,t),n.caret.setToBlock(t,"start"))})(e,n),t.inlineMarkdown&&((e,n)=>{const t=n.blocks.getCurrentBlockIndex(),o=n.blocks.getBlockByIndex(t);if(t<0||!o)return!1;const{isValid:r,md:i,html:s}=((e,n)=>{const t=e.holder.textContent.trim(),{BOLD:o,ITALIC:r,MARKER:i,INLINE_CODE:s}=q,a=t.match(o);if(a){const{isValid:e,md:n,content:t}=V(a);return{isValid:e,md:n,html:`<b>${t}</b>`}}const c=t.match(i);if(c){const{isValid:e,md:n,content:t}=V(c);return{isValid:e,md:n,html:`<mark class=cdx-marker>${t}</mark>`}}const u=t.match(r);if(u){const{isValid:e,md:n,content:t}=V(u);return{isValid:e,md:n,html:`<i>${t}</i>`}}const l=t.match(s);if(l){const{isValid:e,md:n,content:t}=V(l);return{isValid:e,md:n,html:`<code class=inline-code>${t}</code>`}}return{isValid:!1,text:""}})(o,e.data);r&&(x(`<span id="${M}" />`),e.target.innerHTML=e.target.innerHTML.replace(i,s),S(document.querySelector("#"+M)),document.querySelector("#"+M).remove(),x("&nbsp;"))})(e,n),t.mention&&(e=>{if("@"===e.data){const e=`<${u.mention} data-sign="@" class="${L}" contenteditable="false" id="${L}" tabindex="1">&nbsp;</${u.mention}>`,n="#"+L;x(e);const t=document.querySelector(n).parentElement;G("mentionParent: ",t),t.innerHTML=t.innerHTML.replace("@"+e,e),G("selectNode mentionId: ",n),S(document.querySelector(n))}})(e),t.emoji&&(e=>{if(":"===e.data){J("handleEmoji: ",e.data);const n=`<${u.emoji} class="${R}" contenteditable="false" id="${R}" tabindex="1">&nbsp;</${u.emoji}>`,t="#"+R;x(n);const o=document.querySelector(t).parentElement;o.innerHTML=o.innerHTML.replace(":"+n,n),S(document.querySelector(t))}})(e),t.linkCard&&((e,n)=>{const t=n.blocks.getCurrentBlockIndex(),o=n.blocks.getBlockByIndex(t);if(t<0||!o)return!1;const r=((e,n)=>{const t=e.holder.textContent.trim(),o=" "===n;return!(!Z.test(t)||!o)})(o,e.data);if(K("isValidLink: ",r),!r)return!1;n.blocks.delete(t),n.blocks.insert("linkCard",{link:"https://codex.so",meta:{title:"CodeX Team",site_name:"CodeX",description:"Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",image:{url:"https://codex.so/public/app/img/meta_img.png"}}},{},t),n.caret.setToBlock(t,"start")})(e,n)},ae=(e,n,t={})=>{const o=Object.assign({markdown:!1,inlineMarkdown:!0,mention:!0,emoji:!0,linkCard:!1},t);n.listeners.on(e,"input",e=>Q()(se(e,n,o),100))},ce=(e,n)=>{n.listeners.off(e,"input",t=>se(e,n),!1),n.listeners.off(e,"keyup",e=>(e=>{if("Backspace"===e.code||"Delete"===e.code)if(window.getSelection){let e=window.getSelection();e.anchorNode.parentNode.className===L&&e.anchorNode.parentNode.remove()}else ie("window Selection is not supported.")})(e),!1)};var ue=t(2),le=t.n(ue);const de=()=>(window.PubSub||(window.PubSub=le.a),window.PubSub),fe={KEEP_PARAGRAPH_AFTER_REMOVED:"KEEP_PARAGRAPH_AFTER_REMOVED"},pe=e=>!!new RegExp("^(https:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e);t.d(n,"debounce",(function(){return X.debounce})),t.d(n,"loadJS",(function(){return Y})),t.d(n,"loadCSS",(function(){return ee})),t.d(n,"isEmptyObj",(function(){return ne})),t.d(n,"findIndex",(function(){return te})),t.d(n,"insertAndShift",(function(){return oe})),t.d(n,"swapArrayItems",(function(){return re})),t.d(n,"isDOM",(function(){return b})),t.d(n,"make",(function(){return y})),t.d(n,"showElement",(function(){return A})),t.d(n,"hideElements",(function(){return F})),t.d(n,"replaceEl",(function(){return j})),t.d(n,"clazz",(function(){return h})),t.d(n,"importScript",(function(){return v})),t.d(n,"highlightSettingIcon",(function(){return C})),t.d(n,"moveCaretToEnd",(function(){return w})),t.d(n,"selectNode",(function(){return S})),t.d(n,"insertHtmlAtCaret",(function(){return x})),t.d(n,"keepCustomInlineToolOnly",(function(){return T})),t.d(n,"restoreDefaultInlineTools",(function(){return E})),t.d(n,"removeElementByClass",(function(){return _})),t.d(n,"convertElementToTextIfNeed",(function(){return O})),t.d(n,"convertElementToText",(function(){return I})),t.d(n,"enhanceBlock",(function(){return ae})),t.d(n,"freeEnhanceBlock",(function(){return ce})),t.d(n,"buildLog",(function(){return a})),t.d(n,"initEventBus",(function(){return de})),t.d(n,"EVENTS",(function(){return fe})),t.d(n,"CSS",(function(){return c})),t.d(n,"INLINE_BLOCK_TAG",(function(){return u})),t.d(n,"isValidURL",(function(){return pe}))}])},function(e,n,t){var o=t(2);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){(e.exports=t(3)(!1)).push([e.i,".cdx-hidden-toolbar-block {\n  display: inline-block;\n  min-width: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.cdx-mention {\n  color: #1785a9;\n  font-weight: bold;\n  outline: none;\n  margin-left: 4px;\n  margin-right: 1px;\n}\n.cdx-mention::before {\n  content: attr(data-sign);\n  /* content: '@'; */\n  color: #1785a9;\n  border-radius: 100%;\n  display: inline-block;\n  font-size: 14px;\n  transform: rotateZ(-10deg);\n  font-family: serif;\n  opacity: 0.65;\n}\n.cdx-mention__container {\n  padding: 5px;\n  padding-bottom: 0px;\n}\n\n.cdx-mention__tab {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 6px;\n  padding: 5px 4px;\n}\n\n.cdx-mention__tab_item {\n  font-size: 12px;\n  margin-right: 12px;\n  border-bottom: 1px solid transparent;\n  padding-bottom: 3px;\n  opacity: 0.6;\n}\n\n.cdx-mention__tab_item:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n\n.cdx-mention__tab_item_active {\n  margin-top: -1px;\n  opacity: 1;\n  border-bottom-color: grey;\n}\n\n.cdx-mention__input {\n  margin-bottom: 8px;\n  outline: none;\n  box-sizing: border-box;\n  padding: 5px;\n  font-variant: tabular-nums;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  width: 180px;\n  height: 26px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 13px;\n  line-height: 1.2;\n  background: transparent;\n  border: 1px solid #e5e5e7;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.cdx-mention__input::placeholder {\n  font-size: 12px;\n  font-style: italic;\n}\n\n.cdx-mention-suggestion-wrapper {\n  width: 100%;\n  min-height: 1px;\n  max-height: 300px;\n  overflow: hidden;\n}\n\n.cdx-mention-suggestion {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  height: 40px;\n  padding: 3px 6px;\n  cursor: pointer;\n}\n\n.cdx-mention-suggestion:first-child {\n  opacity: 0.9;\n}\n.cdx-mention-suggestion:last-child {\n  margin-bottom: 8px;\n}\n\n.cdx-mention-suggestion:hover {\n  background: #f1f3f7;\n}\n\n.cdx-mention-suggestion__avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 100%;\n  display: block;\n  margin-right: 8px;\n}\n\n.cdx-mention-suggestion__intro {\n  display: flex;\n  flex-direction: column;\n}\n\n.cdx-mention-suggestion__title {\n  color: #828282;\n  font-size: 15px;\n}\n\n.cdx-mention-suggestion__desc {\n  color: #b5b5b5;\n  font-size: 12px;\n  margin-top: 2px;\n}\n",""])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[t].concat(i).concat([r]).join("\n")}var s;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(e){return document.querySelector(e)},c=function(e){var n={};return function(e){if("function"==typeof e)return e();if(void 0===n[e]){var t=a.call(this,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}}(),u=null,l=0,d=[],f=t(5);function p(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(v(o.parts[s],n))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(v(o.parts[s],n));i[o.id]={id:o.id,refs:1,parts:a}}}}function m(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):t.push(o[s]={id:s,parts:[a]})}return t}function h(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertInto+" "+e.insertAt.before);t.insertBefore(n,r)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function b(e){var n=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(n,e.attrs),h(e,n),n}function y(e,n){Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])}))}function v(e,n){var t,o,r,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var s=l++;t=u||(u=b(n)),o=x.bind(null,t,s,!1),r=x.bind(null,t,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(n,e.attrs),h(e,n),n}(n),o=k.bind(null,t,n),r=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(n),o=S.bind(null,t),r=function(){g(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=m(e,n);return p(t,n),function(e){for(var o=[],r=0;r<t.length;r++){var s=t[r];(a=i[s.id]).refs--,o.push(a)}e&&p(m(e,n),n);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var C,w=(C=[],function(e,n){return C[e]=n,C.filter(Boolean).join("\n")});function x(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(n,r);else{var i=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function S(e,n){var t=n.css,o=n.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function k(e,n,t){var o=t.css,r=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,n){var r,i=n.trim().replace(/^"(.*)"$/,(function(e,n){return n})).replace(/^'(.*)'$/,(function(e,n){return n}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var o=t(0),r="post",i="user";t(1);function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(n){var t=n.api;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=t,this.activeTab=i,this.tabConfig=[{title:"用户",raw:i},{title:"帖子",raw:r}],this.CSS={mention:o.CSS.mention,mentionContainer:"cdx-mention__container",mentionInput:"cdx-mention__input",mentionIntro:"cdx-mention-suggestion__intro",mentionAvatar:"cdx-mention-suggestion__avatar",mentionTitle:"cdx-mention-suggestion__title",mentionDesc:"cdx-mention-suggestion__desc",tabWrapper:"cdx-mention__tab",tabItem:"cdx-mention__tab_item",tabItemActive:"cdx-mention__tab_item_active",suggestionContainer:"cdx-mention-suggestion-wrapper",suggestion:"cdx-mention-suggestion",inlineToolBar:"ce-inline-toolbar",inlineToolBarOpen:"ce-inline-toolbar--showed",inlineToolbarButtons:"ce-inline-toolbar__buttons"},this._initNodes()}var n,t,a;return n=e,(t=[{key:"_initNodes",value:function(){this.nodes={mention:Object(o.make)("div",this.CSS.mentionContainer),suggestions:Object(o.make)("div",this.CSS.suggestionContainer),tab:this._drawTab(),mentionInput:Object(o.make)("input",this.CSS.mentionInput,{autofocus:!0,placeholder:"你想 @ 谁？"})},this._initMentionInput(),this.nodes.mention.appendChild(this.nodes.tab),this.nodes.mention.appendChild(this.nodes.mentionInput),this.nodes.mention.appendChild(this.nodes.suggestions)}},{key:"_handleTabChange",value:function(e){var n=this;if(this.activeTab!==e){this.activeTab=e;var t=this._drawTab();this.nodes.tab.replaceWith(t),this.nodes.tab=t,setTimeout((function(){return n._applyInputStyle()}))}}},{key:"_applyInputStyle",value:function(){switch(this.activeTab){case r:this.nodes.mentionInput.style.width="280px",this.nodes.mentionInput.placeholder="文章标题";break;default:this.nodes.mentionInput.style.width="180px",this.nodes.mentionInput.placeholder="你想 @ 谁?"}this.nodes.mentionInput.focus()}},{key:"_initMentionInput",value:function(){var e=this;this.api.listeners.off(this.nodes.mentionInput,"focus"),this.api.listeners.off(this.nodes.mentionInput,"keyup"),this.api.listeners.on(this.nodes.mentionInput,"focus",(function(){var n=document.querySelector("#"+e.CSS.mention);if(n){var t=n.parentNode;if(!t.querySelector(".".concat(o.CSS.focusHolder))){var r=Object(o.make)("span",o.CSS.focusHolder);t.insertBefore(r,n.nextSibling)}}})),this.api.listeners.on(this.nodes.mentionInput,"keyup",Object(o.debounce)(this._handleInput.bind(this),200))}},{key:"_drawTab",value:function(){var e=this,n=Object(o.make)("div",this.CSS.tabWrapper);return this.tabConfig.forEach((function(t){var r=[e.CSS.tabItem];t.raw===e.activeTab&&r.push(e.CSS.tabItemActive);var i=Object(o.make)("div",r,{innerHTML:t.title});i.addEventListener("click",(function(){e._handleTabChange(t.raw)})),n.appendChild(i)})),n}},{key:"renderActions",value:function(){return this.nodes.mention}},{key:"handleMentionActions",value:function(){var e=this;Object(o.keepCustomInlineToolOnly)("mention"),this.clearSuggestions(),this.nodes.mentionInput.value="",setTimeout((function(){return e.nodes.mentionInput.focus()}),100)}},{key:"clearSuggestions",value:function(){console.log("clearSuggestions");for(var e=document.querySelector("."+this.CSS.suggestionContainer);e.firstChild;)e.removeChild(e.firstChild)}},{key:"_handleInput",value:function(e){if("Escape"===e.code)return this.nodes.mentionInput.value="",void this._cleanUp();if("Enter"===e.code)return console.log("select first item");var n=this._drawSuggestion({id:1,title:"mydaerxym",desc:"摩托旅行爱好者",avatar:"https://cps-oss.oss-cn-shanghai.aliyuncs.com/test.jpg"});this.nodes.suggestions.appendChild(n)}},{key:"_drawSuggestion",value:function(e){var n=this,t=document.querySelector("#"+this.CSS.mention),r=Object(o.make)("div",[this.CSS.suggestion],{}),s=Object(o.make)("img",[this.CSS.mentionAvatar],{src:e.avatar}),a=Object(o.make)("div",[this.CSS.mentionIntro],{}),c=Object(o.make)("div",[this.CSS.mentionTitle],{innerText:e.title}),u=Object(o.make)("div",[this.CSS.mentionDesc],{innerText:e.desc});return r.appendChild(s),a.appendChild(c),a.appendChild(u),r.appendChild(a),r.addEventListener("click",(function(){n.nodes.mentionInput.value=e.title,t.innerHTML="".concat(e.title," "),console.log("<<<< mentionEl: ",t),n.activeTab===i?t.setAttribute("data-sign","@"):t.setAttribute("data-sign","#"),setTimeout((function(){return n._cleanUp()}))})),r}},{key:"_cleanUp",value:function(){var e=this;console.log("_cleanUp");var n=document.querySelector("#"+this.CSS.mention);n&&(this.nodes.mentionInput.value="",this._clearSuggestions(),document.querySelector("."+this.CSS.inlineToolBar).classList.remove(this.CSS.inlineToolBarOpen),console.log("> clean up the fucking mentionEl: ",n),console.log("> nextElementSibling: ",n.nextElementSibling),n.nextElementSibling&&Object(o.moveCaretToEnd)(n.nextElementSibling),setTimeout((function(){e._removeAllHolderIds(),Object(o.removeElementByClass)(o.CSS.focusHolder),"&nbsp;"===n.innerHTML&&Object(o.convertElementToText)(n,!0)})))}},{key:"_clearSuggestions",value:function(){console.log("clearSuggestions");for(var e=document.querySelector("."+this.CSS.suggestionContainer);e.firstChild;)e.removeChild(e.firstChild)}},{key:"_removeAllHolderIds",value:function(){return document.querySelectorAll("."+this.CSS.mention).forEach((function(e){return e.removeAttribute("id")})),!1}},{key:"clear",value:function(){var e=this;setTimeout((function(){document.querySelector("#"+e.CSS.mention),e._cleanUp()}))}}])&&s(n.prototype,t),a&&s(n,a),e}();function c(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n,t){return n&&c(e.prototype,n),t&&c(e,t),e}var l=function(){function e(n){var t=n.api;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=t,this.CSS={mention:o.CSS.mention,hiddenToolbar:"cdx-hidden-toolbar-block"},this.ui=new a({api:t})}return u(e,null,[{key:"isInline",get:function(){return!0}}]),u(e,[{key:"render",value:function(){return Object(o.make)("div",[this.CSS.hiddenToolbar],{})}},{key:"renderActions",value:function(){return this.ui.renderActions()}},{key:"surround",value:function(e){}},{key:"checkState",value:function(e){return e&&e.anchorNode.id===o.CSS.mention?e.anchorNode.id===o.CSS.mention?this.ui.handleMentionActions():(console.log("restoreDefaultInlineTools 2"),Object(o.restoreDefaultInlineTools)()):Object(o.restoreDefaultInlineTools)()}},{key:"clear",value:function(){this.ui.clear()}}],[{key:"sanitize",get:function(){return e={},n=o.INLINE_BLOCK_TAG.mention,t={class:o.CSS.mention},n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e;var e,n,t}}]),e}()}]).default}));