(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{6089:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/posts/[slug]",function(){return a(4369)}])},4362:function(e,t,a){"use strict";var n=a(5893),s=a(2138),o=a.n(s);t.Z=()=>(0,n.jsx)("footer",{className:o().footer,children:"Copyright \xa9 2023 Maximilian Luz"})},9023:function(e,t,a){"use strict";a.d(t,{Z:function(){return NavBar}});var n=a(5893),s=a(1664),o=a.n(s),c=a(9332),i=a(1600),l=a.n(i);let r=[{name:"Home",path:"/"},{name:"Blog",path:"/blog"}];function NavItem(e){let{name:t,path:a}=e,s=(0,c.usePathname)(),i=s===a?l().active:l().inactive;return(0,n.jsx)("li",{className:"".concat(l().item," ").concat(i),children:(0,n.jsx)(o(),{href:a,children:(0,n.jsx)("div",{children:t})})})}function NavBar(){return(0,n.jsx)("nav",{className:l().base,children:(0,n.jsx)("ul",{className:l().menu,children:r.map((e,t)=>(0,n.jsx)(NavItem,{name:e.name,path:e.path},t))})})}},4369:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return p}});var n=a(5893),s=a(7294),o=a(9008),c=a.n(o),i=a(3194),l=a(4362),r=a(7062),_=a.n(r),m=a(9023),u=a(1553),d=a.n(u);a(4743),a(6049);var p=!0;t.default=e=>{var t;let{post:a}=e,o="".concat(a.title," | ").concat(a.author),r=new Date(a.date).toLocaleDateString("en-us",{month:"long",day:"numeric",year:"numeric"}),u=s.useMemo(()=>(0,i.getMDXComponent)(a.content),[a.content]);return(0,n.jsxs)("div",{className:_().base,children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:o}),(0,n.jsx)("meta",{name:"description",content:"Blog of Maximilian Luz"})]}),(0,n.jsx)(m.Z,{}),(0,n.jsxs)("main",{children:[(0,n.jsx)("div",{className:_().topspace}),(0,n.jsx)("div",{className:_().page,children:(0,n.jsx)("div",{className:_().column,children:(0,n.jsxs)("div",{className:_().text,children:[(0,n.jsx)("h1",{className:_().title,children:a.title}),(0,n.jsxs)("div",{className:_().meta,children:[(0,n.jsx)("p",{className:_().date,children:r}),(0,n.jsx)("div",{className:_().tags,children:null===(t=a.tags)||void 0===t?void 0:t.map(e=>(0,n.jsxs)("p",{className:_().tag,children:["#",e]},e))})]}),(0,n.jsx)("div",{className:d().markdown,children:(0,n.jsx)(u,{})})]})})})]}),(0,n.jsx)(l.Z,{})]})}},7062:function(e){e.exports={base:"blog-post_base__lGFjW",topspace:"blog-post_topspace__hzEPI",page:"blog-post_page__hiMUe",column:"blog-post_column__Ok4d_",text:"blog-post_text__xJeIW",title:"blog-post_title__N_tAN",meta:"blog-post_meta__vl9aH",tags:"blog-post_tags__5wDL3",tag:"blog-post_tag__0wTv3",date:"blog-post_date__Iw80J"}},2138:function(e){e.exports={footer:"footer_footer__YtHeK"}},1553:function(e){e.exports={markdown:"markdown_markdown__o1E4A"}},1600:function(e){e.exports={base:"navbar_base__ZGSyI",menu:"navbar_menu__9VAe7",item:"navbar_item__tSgzS",active:"navbar_active__qIXOm"}}},function(e){e.O(0,[769,774,888,179],function(){return e(e.s=6089)}),_N_E=e.O()}]);