(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{5040:function(e,t,r){"use strict";function clientHookInServerComponentError(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return clientHookInServerComponentError}}),r(8754),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6104:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return ReadonlyURLSearchParams},useSearchParams:function(){return useSearchParams},usePathname:function(){return usePathname},ServerInsertedHTMLContext:function(){return i.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return i.useServerInsertedHTML},useRouter:function(){return useRouter},useParams:function(){return useParams},useSelectedLayoutSegments:function(){return useSelectedLayoutSegments},useSelectedLayoutSegment:function(){return useSelectedLayoutSegment},redirect:function(){return c.redirect},permanentRedirect:function(){return c.permanentRedirect},RedirectType:function(){return c.RedirectType},notFound:function(){return f.notFound}});let n=r(7294),o=r(1158),u=r(8197),l=r(5040),a=r(1130),i=r(4198),c=r(6282),f=r(9498),s=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return Error("ReadonlyURLSearchParams cannot be modified")}let ReadonlyURLSearchParams=class ReadonlyURLSearchParams{[Symbol.iterator](){return this[s][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(e){this[s]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}};function useSearchParams(){(0,l.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(u.SearchParamsContext),t=(0,n.useMemo)(()=>e?new ReadonlyURLSearchParams(e):null,[e]);return t}function usePathname(){return(0,l.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(u.PathnameContext)}function useRouter(){(0,l.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function useParams(){(0,l.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(u.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function getSelectedParams(e,t){void 0===t&&(t={});let r=e[1];for(let e of Object.values(r)){let r=e[0],n=Array.isArray(r),o=n?r[1]:r;if(!o||o.startsWith("__PAGE__"))continue;let u=n&&("c"===r[2]||"oc"===r[2]);u?t[r[0]]=r[1].split("/"):n&&(t[r[0]]=r[1]),t=getSelectedParams(e,t)}return t}(e.tree):t,[null==e?void 0:e.tree,t])}function useSelectedLayoutSegments(e){void 0===e&&(e="children"),(0,l.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function getSelectedLayoutSegmentPath(e,t,r,n){let o;if(void 0===r&&(r=!0),void 0===n&&(n=[]),r)o=e[1][t];else{var u;let t=e[1];o=null!=(u=t.children)?u:Object.values(t)[0]}if(!o)return n;let l=o[0],i=(0,a.getSegmentValue)(l);return!i||i.startsWith("__PAGE__")?n:(n.push(i),getSelectedLayoutSegmentPath(o,t,!1,n))}(t,e)}function useSelectedLayoutSegment(e){void 0===e&&(e="children"),(0,l.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=useSelectedLayoutSegments(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9498:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return notFound},isNotFoundError:function(){return isNotFoundError}});let r="NEXT_NOT_FOUND";function notFound(){let e=Error(r);throw e.digest=r,e}function isNotFoundError(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6282:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return getRedirectError},redirect:function(){return redirect},permanentRedirect:function(){return permanentRedirect},isRedirectError:function(){return isRedirectError},getURLFromRedirectError:function(){return getURLFromRedirectError},getRedirectTypeFromError:function(){return getRedirectTypeFromError}});let u=r(9344),l="NEXT_REDIRECT";function getRedirectError(e,t,r){void 0===r&&(r=!1);let n=Error(l);n.digest=l+";"+t+";"+e+";"+r;let o=u.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function redirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!1)}function permanentRedirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!0)}function isRedirectError(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n,o]=e.digest.split(";",4);return t===l&&("replace"===r||"push"===r)&&"string"==typeof n&&("true"===o||"false"===o)}function getURLFromRedirectError(e){return isRedirectError(e)?e.digest.split(";",3)[2]:null}function getRedirectTypeFromError(e){if(!isRedirectError(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1130:function(e,t){"use strict";function getSegmentValue(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return getSegmentValue}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},628:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f}});let o="refresh",u="navigate",l="restore",a="server-patch",i="prefetch",c="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7567:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2955),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4520:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(8754),o=n._(r(7294)),u=r(4785),l=r(4131),a=r(3833),i=r(1306),c=r(2048),f=r(637),s=r(1158),d=r(5352),p=r(7567),y=r(5864),g=r(628),b=new Set;function prefetch(e,t,r,n,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+o;if(b.has(u))return;b.add(u)}let a=u?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let h=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:b,children:h,prefetch:m=null,passHref:v,replace:_,shallow:S,scroll:P,locale:E,onClick:R,onMouseEnter:O,onTouchStart:j,legacyBehavior:C=!1,...L}=e;r=h,C&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let M=o.default.useContext(f.RouterContext),T=o.default.useContext(s.AppRouterContext),x=null!=M?M:T,A=!M,I=!1!==m,k=null===m?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:U,as:w}=o.default.useMemo(()=>{if(!M){let e=formatStringOrUrl(a);return{href:e,as:b?formatStringOrUrl(b):e}}let[e,t]=(0,u.resolveHref)(M,a,!0);return{href:e,as:b?(0,u.resolveHref)(M,b):t||e}},[M,a,b]),F=o.default.useRef(U),H=o.default.useRef(w);C&&(n=o.default.Children.only(r));let N=C?n&&"object"==typeof n&&n.ref:t,[D,K,V]=(0,d.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(H.current!==w||F.current!==U)&&(V(),H.current=w,F.current=U),D(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[w,N,U,V,D]);o.default.useEffect(()=>{x&&K&&I&&prefetch(x,U,w,{locale:E},{kind:k},A)},[w,U,K,E,I,null==M?void 0:M.locale,x,A,k]);let q={ref:G,onClick(e){C||"function"!=typeof R||R(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),x&&!e.defaultPrevented&&function(e,t,r,n,u,a,i,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:a,locale:c,scroll:e}):t[u?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};f?o.default.startTransition(navigate):navigate()}(e,x,U,w,_,S,P,E,A,I)},onMouseEnter(e){C||"function"!=typeof O||O(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),x&&(I||!A)&&prefetch(x,U,w,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:k},A)},onTouchStart(e){C||"function"!=typeof j||j(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),x&&(I||!A)&&prefetch(x,U,w,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:k},A)}};if((0,i.isAbsoluteUrl)(w))q.href=w;else if(!C||v||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(w,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);q.href=t||(0,y.addBasePath)((0,c.addLocale)(w,e,null==M?void 0:M.defaultLocale))}return C?o.default.cloneElement(n,q):o.default.createElement("a",{...L,...q},r)}),m=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5352:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(3767),u="function"==typeof IntersectionObserver,l=new Map,a=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!u,[f,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(u){if(c||f)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},a.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,f,d.current]);let y=(0,n.useCallback)(()=>{s(!1)},[]);return[p,f,y]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4198:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return useServerInsertedHTML}});let n=r(1757),o=n._(r(7294)),u=o.default.createContext(null);function useServerInsertedHTML(e){let t=(0,o.useContext)(u);t&&t(e)}},9008:function(e,t,r){e.exports=r(46)},1664:function(e,t,r){e.exports=r(4520)},9332:function(e,t,r){e.exports=r(6104)},7346:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return createAsyncLocalStorage}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");let FakeAsyncLocalStorage=class FakeAsyncLocalStorage{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}};let n=globalThis.AsyncLocalStorage;function createAsyncLocalStorage(){return n?new n:new FakeAsyncLocalStorage}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9344:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(7346),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);