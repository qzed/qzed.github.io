(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5075)}])},2980:function(t,r,e){"use strict";var n=e(5893),i=e(2077),o=e.n(i);r.Z=function(){return(0,n.jsx)("footer",{className:o().footer,children:"Copyright \xa9 2022 Maximilian Luz"})}},5075:function(t,r,e){"use strict";e.r(r),e.d(r,{__N_SSG:function(){return c}});var n=e(5893),i=e(9008),o=e.n(i),f=e(7294),s=e(2980),u=e(8732),a=e.n(u),h=e(1876).Buffer;var c=!0;r.default=function(t){var r,e=(r="mailto:Maximilian%20Luz<luzmaximilian@gmail.com>",h.from(r).toString("base64"));return(0,f.useEffect)((function(){var t=document.getElementById("maillink");null!==t&&(t.href=function(t){return h.from(t,"base64").toString("utf-8")}(e))})),(0,n.jsxs)("div",{className:a().base,children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Maximilian Luz"}),(0,n.jsx)("meta",{name:"description",content:"Personal website of Maximilian Luz"})]}),(0,n.jsxs)("main",{children:[(0,n.jsx)("div",{className:"".concat(a().section," ").concat(a().profile),children:(0,n.jsx)("div",{className:a().column,children:(0,n.jsxs)("div",{className:a().profileCard,children:[(0,n.jsxs)("div",{className:a().profileMain,children:[(0,n.jsx)("img",{className:a().profileImage,src:"/assets/profile.png",alt:"Profile Picture"}),(0,n.jsxs)("div",{className:a().profileText,children:[(0,n.jsx)("p",{className:a().profileName,children:"Maximilian Luz"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"M.Sc. Student in Computer Science"}),(0,n.jsx)("li",{children:"Currently looking for a PhD position"}),(0,n.jsx)("li",{children:"Linux Kernel Maintainer"})]})]})]}),(0,n.jsxs)("div",{className:a().profileLinks,children:[(0,n.jsx)("a",{href:"https://github.com/qzed",children:(0,n.jsxs)("svg",{className:a().icon,viewBox:"0 0 16 16",children:[(0,n.jsx)("title",{children:"GitHub"}),(0,n.jsx)("use",{href:"/assets/social-icons.svg#github"})]})}),(0,n.jsx)("a",{href:"https://twitter.com/mxnluz",children:(0,n.jsxs)("svg",{className:a().icon,viewBox:"0 0 16 16",children:[(0,n.jsx)("title",{children:"Twitter"}),(0,n.jsx)("use",{href:"/assets/social-icons.svg#twitter"})]})}),(0,n.jsx)("a",{href:"",id:"maillink",children:(0,n.jsxs)("svg",{className:a().icon,viewBox:"0 0 24 24",children:[(0,n.jsx)("title",{children:"E-Mail"}),(0,n.jsx)("use",{href:"/assets/social-icons.svg#email"})]})})]})]})})}),(0,n.jsx)("div",{className:"".concat(a().section," ").concat(a().about),children:(0,n.jsx)("div",{className:a().column,children:(0,n.jsx)("div",{className:a().text,dangerouslySetInnerHTML:{__html:t.about}})})})]}),(0,n.jsx)(s.Z,{})]})}},1876:function(t){!function(){var r={449:function(t,r){"use strict";r.byteLength=function(t){var r=u(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){var r,e,o=u(t),f=o[0],s=o[1],a=new i(function(t,r,e){return 3*(r+e)/4-e}(0,f,s)),h=0,c=s>0?f-4:f;for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)]<<18|n[t.charCodeAt(e+1)]<<12|n[t.charCodeAt(e+2)]<<6|n[t.charCodeAt(e+3)],a[h++]=r>>16&255,a[h++]=r>>8&255,a[h++]=255&r;2===s&&(r=n[t.charCodeAt(e)]<<2|n[t.charCodeAt(e+1)]>>4,a[h++]=255&r);1===s&&(r=n[t.charCodeAt(e)]<<10|n[t.charCodeAt(e+1)]<<4|n[t.charCodeAt(e+2)]>>2,a[h++]=r>>8&255,a[h++]=255&r);return a},r.fromByteArray=function(t){for(var r,n=t.length,i=n%3,o=[],f=16383,s=0,u=n-i;s<u;s+=f)o.push(h(t,s,s+f>u?u:s+f));1===i?(r=t[n-1],o.push(e[r>>2]+e[r<<4&63]+"==")):2===i&&(r=(t[n-2]<<8)+t[n-1],o.push(e[r>>10]+e[r>>4&63]+e[r<<2&63]+"="));return o.join("")};for(var e=[],n=[],i="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,s=o.length;f<s;++f)e[f]=o[f],n[o.charCodeAt(f)]=f;function u(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function a(t){return e[t>>18&63]+e[t>>12&63]+e[t>>6&63]+e[63&t]}function h(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(a(n));return i.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},877:function(t,r,e){"use strict";var n=e(449),i=e(543),o="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=u,r.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},r.INSPECT_MAX_BYTES=50;var f=2147483647;function s(t){if(t>f)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,u.prototype),r}function u(t,r,e){if("number"===typeof t){if("string"===typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return c(t)}return a(t,r,e)}function a(t,r,e){if("string"===typeof t)return function(t,r){"string"===typeof r&&""!==r||(r="utf8");if(!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=0|g(t,r),n=s(e),i=n.write(t,r);i!==e&&(n=n.slice(0,i));return n}(t,r);if(ArrayBuffer.isView(t))return l(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(q(t,ArrayBuffer)||t&&q(t.buffer,ArrayBuffer))return p(t,r,e);if("undefined"!==typeof SharedArrayBuffer&&(q(t,SharedArrayBuffer)||t&&q(t.buffer,SharedArrayBuffer)))return p(t,r,e);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,r,e);var i=function(t){if(u.isBuffer(t)){var r=0|y(t.length),e=s(r);return 0===e.length||t.copy(e,0,0,r),e}if(void 0!==t.length)return"number"!==typeof t.length||F(t.length)?s(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(i)return i;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return h(t),s(t<0?0:0|y(t))}function l(t){for(var r=t.length<0?0:0|y(t.length),e=s(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function p(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===r&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,r):new Uint8Array(t,r,e),Object.setPrototypeOf(n,u.prototype),n}function y(t){if(t>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return 0|t}function g(t,r){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||q(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===e)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return D(t).length;default:if(i)return n?-1:z(t).length;r=(""+r).toLowerCase(),i=!0}}function d(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,r,e);case"utf8":case"utf-8":return j(this,r,e);case"ascii":return U(this,r,e);case"latin1":case"binary":return S(this,r,e);case"base64":return T(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function m(t,r,e,n,i){if(0===t.length)return-1;if("string"===typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),F(e=+e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"===typeof r&&(r=u.from(r,n)),u.isBuffer(r))return 0===r.length?-1:v(t,r,e,n,i);if("number"===typeof r)return r&=255,"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):v(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function v(t,r,e,n,i){var o,f=1,s=t.length,u=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,s/=2,u/=2,e/=2}function a(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var h=-1;for(o=e;o<s;o++)if(a(t,o)===a(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===u)return h*f}else-1!==h&&(o-=o-h),h=-1}else for(e+u>s&&(e=s-u),o=e;o>=0;o--){for(var c=!0,l=0;l<u;l++)if(a(t,o+l)!==a(r,l)){c=!1;break}if(c)return o}return-1}function b(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;n>o/2&&(n=o/2);for(var f=0;f<n;++f){var s=parseInt(r.substr(2*f,2),16);if(F(s))return f;t[e+f]=s}return f}function E(t,r,e,n){return X(z(r,t.length-e),t,e,n)}function x(t,r,e,n){return X(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function A(t,r,e,n){return x(t,r,e,n)}function B(t,r,e,n){return X(D(r),t,e,n)}function _(t,r,e,n){return X(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)n=(e=t.charCodeAt(f))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function T(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function j(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,s,u,a=t[i],h=null,c=a>239?4:a>223?3:a>191?2:1;if(i+c<=e)switch(c){case 1:a<128&&(h=a);break;case 2:128===(192&(o=t[i+1]))&&(u=(31&a)<<6|63&o)>127&&(h=u);break;case 3:o=t[i+1],f=t[i+2],128===(192&o)&&128===(192&f)&&(u=(15&a)<<12|(63&o)<<6|63&f)>2047&&(u<55296||u>57343)&&(h=u);break;case 4:o=t[i+1],f=t[i+2],s=t[i+3],128===(192&o)&&128===(192&f)&&128===(192&s)&&(u=(15&a)<<18|(63&o)<<12|(63&f)<<6|63&s)>65535&&u<1114112&&(h=u)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return I(n)}r.kMaxLength=f,u.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,r,e){return a(t,r,e)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,r,e){return function(t,r,e){return h(t),t<=0?s(t):void 0!==r?"string"===typeof e?s(t).fill(r,e):s(t).fill(r):s(t)}(t,r,e)},u.allocUnsafe=function(t){return c(t)},u.allocUnsafeSlow=function(t){return c(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,r){if(q(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),q(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(t)||!u.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=u.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(q(o,Uint8Array)&&(o=u.from(o)),!u.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},u.byteLength=g,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)w(this,r,r+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},u.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?j(this,0,t):d.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},o&&(u.prototype[o]=u.prototype.inspect),u.prototype.compare=function(t,r,e,n,i){if(q(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),f=(e>>>=0)-(r>>>=0),s=Math.min(o,f),a=this.slice(n,i),h=t.slice(r,e),c=0;c<s;++c)if(a[c]!==h[c]){o=a[c],f=h[c];break}return o<f?-1:f<o?1:0},u.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},u.prototype.indexOf=function(t,r,e){return m(this,t,r,e,!0)},u.prototype.lastIndexOf=function(t,r,e){return m(this,t,r,e,!1)},u.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"===typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,t,r,e);case"utf8":case"utf-8":return E(this,t,r,e);case"ascii":return x(this,t,r,e);case"latin1":case"binary":return A(this,t,r,e);case"base64":return B(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function I(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}function U(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function L(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=Y[t[o]];return i}function C(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function N(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function M(t,r,e,n,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function O(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function R(t,r,e,n,o){return r=+r,e>>>=0,o||O(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function k(t,r,e,n,o){return r=+r,e>>>=0,o||O(t,0,e,8),i.write(t,r,e,n,52,8),e+8}u.prototype.slice=function(t,r){var e=this.length;(t=~~t)<0?(t+=e)<0&&(t=0):t>e&&(t=e),(r=void 0===r?e:~~r)<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n=this.subarray(t,r);return Object.setPrototypeOf(n,u.prototype),n},u.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||N(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},u.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||N(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},u.prototype.readUInt8=function(t,r){return t>>>=0,r||N(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,r){return t>>>=0,r||N(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,r){return t>>>=0,r||N(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,r){return t>>>=0,r||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,r){return t>>>=0,r||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||N(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},u.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||N(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},u.prototype.readInt8=function(t,r){return t>>>=0,r||N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,r){t>>>=0,r||N(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},u.prototype.readInt16BE=function(t,r){t>>>=0,r||N(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},u.prototype.readInt32LE=function(t,r){return t>>>=0,r||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,r){return t>>>=0,r||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,r){return t>>>=0,r||N(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,r){return t>>>=0,r||N(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,r){return t>>>=0,r||N(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,r){return t>>>=0,r||N(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||M(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},u.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||M(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},u.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,1,255,0),this[r]=255&t,r+1},u.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},u.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},u.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},u.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},u.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=0,f=1,s=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===s&&0!==this[r+o-1]&&(s=1),this[r+o]=(t/f>>0)-s&255;return r+e},u.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=e-1,f=1,s=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===s&&0!==this[r+o+1]&&(s=1),this[r+o]=(t/f>>0)-s&255;return r+e},u.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},u.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},u.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},u.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},u.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||M(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},u.prototype.writeFloatLE=function(t,r,e){return R(this,t,r,!0,e)},u.prototype.writeFloatBE=function(t,r,e){return R(this,t,r,!1,e)},u.prototype.writeDoubleLE=function(t,r,e){return k(this,t,r,!0,e)},u.prototype.writeDoubleBE=function(t,r,e){return k(this,t,r,!1,e)},u.prototype.copy=function(t,r,e,n){if(!u.isBuffer(t))throw new TypeError("argument should be a Buffer");if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i=n-e;if(this===t&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,e,n);else if(this===t&&e<r&&r<n)for(var o=i-1;o>=0;--o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,n),r);return i},u.prototype.fill=function(t,r,e,n){if("string"===typeof t){if("string"===typeof r?(n=r,r=0,e=this.length):"string"===typeof e&&(n=e,e=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"===typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=u.isBuffer(t)?t:u.from(t,n),s=f.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<e-r;++o)this[o+r]=f[o%s]}return this};var P=/[^+/0-9A-Za-z-_]/g;function z(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function D(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(P,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function X(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function q(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function F(t){return t!==t}var Y=function(){for(var t="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var n=16*e,i=0;i<16;++i)r[n+i]=t[e]+t[i];return r}()},543:function(t,r){r.read=function(t,r,e,n,i){var o,f,s=8*i-n-1,u=(1<<s)-1,a=u>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[r+c],c+=l,h-=8);for(f=o&(1<<-h)-1,o>>=-h,h+=n;h>0;f=256*f+t[r+c],c+=l,h-=8);if(0===o)o=1-a;else{if(o===u)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),o-=a}return(p?-1:1)*f*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var f,s,u,a=8*o-i-1,h=(1<<a)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(s=isNaN(r)?1:0,f=h):(f=Math.floor(Math.log(r)/Math.LN2),r*(u=Math.pow(2,-f))<1&&(f--,u*=2),(r+=f+c>=1?l/u:l*Math.pow(2,1-c))*u>=2&&(f++,u/=2),f+c>=h?(s=0,f=h):f+c>=1?(s=(r*u-1)*Math.pow(2,i),f+=c):(s=r*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[e+p]=255&s,p+=y,s/=256,i-=8);for(f=f<<i|s,a+=i;a>0;t[e+p]=255&f,p+=y,f/=256,a-=8);t[e+p-y]|=128*g}}},e={};function n(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={exports:{}},f=!0;try{r[t](o,o.exports,n),f=!1}finally{f&&delete e[t]}return o.exports}n.ab="//";var i=n(877);t.exports=i}()},2077:function(t){t.exports={footer:"footer_footer__CKQ67"}},8732:function(t){t.exports={base:"home_base__vgM70",section:"home_section__LskIX",column:"home_column__uS4w9",text:"home_text__PXNQN",about:"home_about__2TZSg",profile:"home_profile__IhfuT",profileCard:"home_profileCard__qnLre",profileMain:"home_profileMain__5TpnT",profileText:"home_profileText__J_qX0",profileName:"home_profileName___NEKu",profileImage:"home_profileImage__knplG",profileLinks:"home_profileLinks__SJjnb",icon:"home_icon__9K_pj"}},9008:function(t,r,e){t.exports=e(5443)}},function(t){t.O(0,[774,888,179],(function(){return r=8312,t(t.s=r);var r}));var r=t.O();_N_E=r}]);