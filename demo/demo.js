!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.stellarIdenticonGenerator=t():e.stellarIdenticonGenerator=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){const r=7,n="0123456789ABCDEFGHJKMNPQRSTVWXYZ";function o(e){return function(e){var t={};n.split("").map(function(e,r){t[e]=r});var r=[],o=8,a=0;return e.toUpperCase().split("").forEach(function(e){var n=255&t[e];(o-=5)>0?a|=n<<o:o<0?(r.push(a|n>>-o),a=n<<(o+=8)&255):(r.push(a|n),o=8,a=0)}),8!==o&&0!==a&&(r.push(a),o=8,a=0),r}(e).slice(2,16)}function a(e,t){return 0==(t[Math.floor(e/8)]&1<<7-e%8)?0:1}function i(e,t){var r=e.getContext("2d"),n=function(e,t,r){var n,o,a,i,c,u,l,s;switch(1===arguments.length&&(t=e.s,r=e.v,e=e.h),u=r*(1-t),l=r*(1-(c=6*e-(i=Math.floor(6*e)))*t),s=r*(1-(1-c)*t),i%6){case 0:n=r,o=s,a=u;break;case 1:n=l,o=r,a=u;break;case 2:n=u,o=r,a=s;break;case 3:n=u,o=l,a=r;break;case 4:n=s,o=u,a=r;break;case 5:n=r,o=u,a=l}return{r:Math.round(255*n),g:Math.round(255*o),b:Math.round(255*a)}}(t/255,.7,.8);r.fillStyle="rgb("+n.r+", "+n.g+", "+n.b+")"}function c(e,t){var n=o(t),c=function(e,t){for(var n=r,o=r,i=function(e,t){for(var r=[],n=0;n<t;n++){for(var o=[],a=0;a<e;a++)o.push(!1);r.push(o)}return r}(n,o),c=t?Math.ceil(n/2):n,u=0;u<c;u++)for(var l=0;l<o;l++)a(u+l*c,e.slice(1))&&(i[l][u]=!0,t&&(i[l][n-u-1]=!0));return i}(n,!0);i(e,n[0]),function(e,t){e.getContext("2d").clearRect(0,0,e.width,e.height);const r=e.width/t.length;if(e.getContext)for(var n=e.getContext("2d"),o=0;o<t.length;o++)for(var a=0;a<t[o].length;a++)t[o][a]&&n.fillRect(r*a,r*o,r,r)}(e,c)}e.exports=function(e,t={}){t.width=t.width||210,t.height=t.height||210;var r=document.createElement("canvas");return r.width=t.width,r.height=t.height,c(r,e),r}},,function(e,t,r){e.exports=r(3)},function(e,t,r){const n=r(0);var o=document.getElementById("random-address"),a=document.getElementsByName("stellar_address")[0];function i(e){a.value=e,document.getElementById("image").src="https://id.lobstr.co/"+e+".png";var t=document.getElementById("existing-canvas"),r=n(e);r.id="existing-canvas",t.parentNode.replaceChild(r,t)}o.onclick=function(){i(StellarSdk.Keypair.random().publicKey())},o.onclick();a.onchange=function(){try{StellarSdk.Keypair.fromPublicKey(this.value),i(this.value),this.parentNode.classList.remove("has-error")}catch(e){this.parentNode.classList.add("has-error")}};var c=null;a.oninput=function(){this.parentNode.classList.remove("has-error"),c&&clearTimeout(c);try{StellarSdk.Keypair.fromPublicKey(this.value),i(this.value)}catch(t){var e=this;c=setTimeout(function(){e.parentNode.classList.add("has-error")},2e3)}}}])});