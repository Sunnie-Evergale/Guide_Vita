"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[276],{9276:(e,l,t)=>{t.r(l),t.d(l,{default:()=>je});var a=t(6252),n=t(3577),i=t(2262),r=t(9963),u=t(7621),o=t(2119),s=t(480);const c=["href","rel","target","aria-label"],d=(0,a.aZ)({inheritAttrs:!1}),v=(0,a.aZ)({...d,props:{item:{type:Object,required:!0}},setup(e){const l=e,t=(0,o.yj)(),r=(0,u.WF)(),{item:d}=(0,i.BK)(l),v=(0,a.Fl)((()=>(0,s.ak)(d.value.link))),p=(0,a.Fl)((()=>(0,s.B2)(d.value.link)||(0,s.R5)(d.value.link))),h=(0,a.Fl)((()=>{if(!p.value)return d.value.target?d.value.target:v.value?"_blank":void 0})),g=(0,a.Fl)((()=>"_blank"===h.value)),k=(0,a.Fl)((()=>!v.value&&!p.value&&!g.value)),m=(0,a.Fl)((()=>{if(!p.value)return d.value.rel?d.value.rel:g.value?"noopener noreferrer":void 0})),w=(0,a.Fl)((()=>d.value.ariaLabel||d.value.text)),b=(0,a.Fl)((()=>{const e=Object.keys(r.value.locales);return e.length?!e.some((e=>e===d.value.link)):"/"!==d.value.link})),f=(0,a.Fl)((()=>!!b.value&&t.path.startsWith(d.value.link))),U=(0,a.Fl)((()=>!!k.value&&(d.value.activeMatch?new RegExp(d.value.activeMatch).test(t.path):f.value)));return(e,l)=>{const t=(0,a.up)("RouterLink"),r=(0,a.up)("OutboundLink");return(0,i.SU)(k)?((0,a.wg)(),(0,a.j4)(t,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":(0,i.SU)(U)}],to:(0,i.SU)(d).link,"aria-label":(0,i.SU)(w)},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,i.SU)(d).text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"nav-link external",href:(0,i.SU)(d).link,rel:(0,i.SU)(m),target:(0,i.SU)(h),"aria-label":(0,i.SU)(w)},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,i.SU)(d).text)+" ",1),(0,i.SU)(g)&&!(0,i.SU)(d).hideExtern?((0,a.wg)(),(0,a.j4)(r,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,c))}}});var p=t(2568);const h=["aria-labelledby"],g={class:"wrapper"},k={key:0,id:"main-title"},m={key:1,class:"description"},w={key:2},b={key:3,class:"actions"},f={class:"home"},U=["innerHTML"],S={key:1,class:"features"},y={class:"theme-default-content custom"},_={key:2,style:{"text-align":"center"}},D=["id"],F={key:3},x={key:4,style:{"text-align":"center"}},W=["id"],L=["id","innerHTML"],T=["innerHTML"],H=["textContent"],I=(0,a.aZ)({setup(e){const l=(0,u.I2)(),t=(0,u.I5)(),r=(0,p.X6)(),o=(0,a.Fl)((()=>{if(l.value.header.overlay_image)return(0,u.pJ)(l.value.header.overlay_image)})),c=(0,a.Fl)((()=>{if(l.value.header.overlay_color)return l.value.header.overlay_color})),d=(0,a.Fl)((()=>l.value.header.overlay_filter?l.value.header.overlay_filter:0)),I=(0,a.Fl)((()=>{if(l.value.header.overlay_title)return l.value.header.overlay_title||t.value.title||"Hello"})),$=(0,a.Fl)((()=>{if(l.value.header.cta_label)return l.value.header.cta_label})),q=(0,a.Fl)((()=>{if(l.value.header.cta_url)return l.value.header.cta_url})),C=((0,a.Fl)((()=>l.value.heroAlt||I.value||"hero")),(0,a.Fl)((()=>{if(l.value.header.overlay_excerpt)return l.value.header.overlay_excerpt||t.value.description||"Welcome to your VuePress site"}))),M=(0,a.Fl)((()=>{var e=l.value.discordNoticeText||r.value.discordNoticeText;if(e)return"<p>"+e+"</p>"})),z=(0,a.Fl)((()=>{var e=r.value.splashAd;if(e)return e})),j=(0,a.Fl)((()=>{var e=r.value.adTagOne;if(e)return e})),B=(0,a.Fl)((()=>{var e=r.value.adTagTwo;if(e)return e})),Y=(0,a.Fl)((()=>{if(l.value.ads)return l.value.ads})),R=(0,a.Fl)((()=>(0,s.kJ)(l.value.actions)?l.value.actions.map((({text:e,link:l,type:t="primary"})=>({text:e,link:l,type:t}))):[])),X=(0,a.Fl)((()=>(0,s.kJ)(l.value.features)?l.value.features:[])),Z=(0,a.Fl)((()=>l.value.footer)),N=(0,a.Fl)((()=>l.value.footerHtml));return(e,l)=>{const t=(0,a.up)("router-link"),r=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",{class:"splash","aria-labelledby":(0,i.SU)(I)?"main-title":void 0},[(0,a._)("header",{class:"hero heroImage",style:(0,n.j5)({"background-image":"linear-gradient(rgba(0, 0, 0, "+(0,i.SU)(d)+"), rgba(0, 0, 0, "+(0,i.SU)(d)+")), url("+(0,i.SU)(o)+")","background-color":(0,i.SU)(c)})},[(0,a._)("div",g,[(0,i.SU)(I)?((0,a.wg)(),(0,a.iD)("h1",k,(0,n.zw)((0,i.SU)(I)),1)):(0,a.kq)("",!0),(0,i.SU)(C)?((0,a.wg)(),(0,a.iD)("p",m,(0,n.zw)((0,i.SU)(C)),1)):(0,a.kq)("",!0),(0,i.SU)($)?((0,a.wg)(),(0,a.iD)("p",w,[(0,a.Wm)(t,{class:"heroBtn",to:(0,i.SU)(q)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)((0,i.SU)($)),1)])),_:1},8,["to"])])):(0,a.kq)("",!0),(0,i.SU)(R).length?((0,a.wg)(),(0,a.iD)("p",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(R),(e=>((0,a.wg)(),(0,a.j4)(v,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,a.kq)("",!0)])],4),(0,a._)("div",f,[(0,i.SU)(M)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"custom-container tip",innerHTML:(0,i.SU)(M)},null,8,U)):(0,a.kq)("",!0),(0,i.SU)(X).length?((0,a.wg)(),(0,a.iD)("div",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(X),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.title,class:"feature"},[(0,a._)("h2",null,(0,n.zw)(e.title),1),(0,a._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,a.kq)("",!0),(0,a._)("div",y,[(0,a.Wm)(r)]),(0,i.SU)(j)&&(0,i.SU)(Y)?((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("div",{id:(0,i.SU)(j)},null,8,D)])):(0,a.kq)("",!0),(0,i.SU)(j)&&(0,i.SU)(B)&&(0,i.SU)(Y)?((0,a.wg)(),(0,a.iD)("hr",F)):(0,a.kq)("",!0),(0,i.SU)(B)&&(0,i.SU)(Y)?((0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",{id:(0,i.SU)(B)},null,8,W)])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(z),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a._)("div",{id:e.id,style:(0,n.j5)(`min-width: ${e.size[0]}px; min-height: ${e.size[1]}px;`),innerHTML:`<script>googletag.cmd.push(function() { googletag.display('${e.id}'); }); <\/script>`},null,12,L)])))),128)),(0,i.SU)(Z)?((0,a.wg)(),(0,a.iD)(a.HY,{key:5},[(0,i.SU)(N)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"footer",innerHTML:(0,i.SU)(Z)},null,8,T)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)((0,i.SU)(Z))},null,8,H))],64)):(0,a.kq)("",!0)])],8,h)}}}),$=e=>!(0,s.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,q={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},C=(0,a.aZ)({setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},t=e=>{e.style.height=""};return(e,n)=>((0,a.wg)(),(0,a.j4)(r.uT,{name:"dropdown",onEnter:l,onAfterEnter:t,onBeforeLeave:l},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3}))}}),M=["aria-label"],z=["innerHTML"],j={key:0,class:"arrow down"},B=["aria-label"],Y=["innerHTML"],R={class:"nav-dropdown"},X={class:"dropdown-subtitle"},Z={key:1},N={class:"dropdown-subitem-wrapper"},O=(0,a.aZ)({props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:t}=(0,i.BK)(l),u=(0,a.Fl)((()=>t.value.ariaLabel||t.value.text)),s=(0,i.iH)(!1),c=(0,o.yj)();(0,a.YP)((()=>c.path),(()=>{s.value=!1}));const d=e=>{const l=0===e.detail;s.value=!!l&&!s.value},p=(e,l)=>l[l.length-1]===e;return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["dropdown-wrapper",{open:s.value}])},[(0,a._)("button",{class:"dropdown-title",type:"button","aria-label":(0,i.SU)(u),onClick:d},[(0,a._)("span",{class:"title",innerHTML:(0,i.SU)(t).text},null,8,z),(0,i.SU)(t).noDropdown?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",j))],8,M),(0,a._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":(0,i.SU)(u),onClick:l[0]||(l[0]=e=>s.value=!s.value)},[(0,a._)("span",{class:"title",innerHTML:(0,i.SU)(t).text},null,8,Y),(0,a._)("span",{class:(0,n.C_)(["arrow",s.value?"down":"right"])},null,2)],8,B),(0,a.Wm)(C,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",R,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(t).children,((e,l)=>((0,a.wg)(),(0,a.iD)("li",{key:e.link||l,class:"dropdown-item"},[e.children?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h4",X,[e.link?((0,a.wg)(),(0,a.j4)(v,{key:0,item:e,onFocusout:l=>p(e,(0,i.SU)(t).children)&&0===e.children.length&&(s.value=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.iD)("span",Z,(0,n.zw)(e.text),1))]),(0,a._)("ul",N,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(l=>((0,a.wg)(),(0,a.iD)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(v,{item:l,onFocusout:a=>p(l,e.children)&&p(e,(0,i.SU)(t).children)&&(s.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(v,{key:1,item:e,onFocusout:l=>p(e,(0,i.SU)(t).children)&&(s.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[r.F8,s.value]])])),_:1})],2))}}),P={key:0,class:"navbar-links"},E=(0,a.aZ)({setup(e){const l=e=>(0,s.HD)(e)?(0,p.sC)(e):e.children?{...e,children:e.children.map(l)}:e,t=(()=>{const e=(0,p.X6)();return(0,a.Fl)((()=>(e.value.navbar||[]).map(l)))})(),n=(()=>{const e=(0,o.tv)(),l=(0,u.I)(),t=(0,u.I5)(),n=(0,p.X6)();return(0,a.Fl)((()=>{var a,i;const r=Object.keys(t.value.locales);if(r.length<2)return[];const u=e.currentRoute.value.path,o=e.currentRoute.value.fullPath;return[{text:null!=(a=n.value.selectLanguageText)?a:"unkown language",ariaLabel:null!=(i=n.value.selectLanguageAriaLabel)?i:"unkown language",dropdown:!1,children:r.map((a=>{var i,r,s,c,d,v;const p=null!=(r=null==(i=t.value.locales)?void 0:i[a])?r:{},h=null!=(c=null==(s=n.value.locales)?void 0:s[a])?c:{},g=`${p.lang}`,k=null!=(d=h.selectLanguageName)?d:g;let m;if(g===t.value.lang)m=o;else{const t=u.replace(l.value,a);m=e.getRoutes().some((e=>e.path===t))?t:null!=(v=h.home)?v:a}return{text:k,link:m}})),noDropdown:!0}]}))})(),r=(()=>{const e=(0,p.X6)(),l=(0,a.Fl)((()=>e.value.repo)),t=(0,a.Fl)((()=>l.value?$(l.value):null)),n=(0,a.Fl)((()=>l.value&&!(0,s.ak)(l.value)?`https://github.com/${l.value}`:l.value)),i=(0,a.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===t.value?"Source":t.value:null));return(0,a.Fl)((()=>n.value&&i.value?[{text:i.value,link:n.value}]:[]))})(),c=(0,a.Fl)((()=>[...t.value,...r.value,...n.value]));return(e,l)=>(0,i.SU)(c).length?((0,a.wg)(),(0,a.iD)("nav",P,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(c),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(O,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(v,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)}}),A=["title"],K={class:"icon",focusable:"false",viewBox:"0 0 32 32"},V=[(0,a.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],G={class:"icon",focusable:"false",viewBox:"0 0 32 32"},J=[(0,a._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],Q=(0,a.aZ)({setup(e){const l=(0,p.X6)(),t=(0,p.vs)(),n=()=>{t.value=!t.value};return(e,u)=>((0,a.wg)(),(0,a.iD)("button",{class:"toggle-dark-button",title:(0,i.SU)(l).toggleDarkMode,onClick:n},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",K,V,512)),[[r.F8,!(0,i.SU)(t)]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",G,J,512)),[[r.F8,(0,i.SU)(t)]])],8,A))}}),ee=["title"],le=[(0,a._)("div",{class:"icon","aria-hidden":"true"},[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1)],te=(0,a.aZ)({emits:["toggle"],setup(e){const l=(0,p.X6)();return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"toggle-sidebar-button",title:(0,i.SU)(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=l=>e.$emit("toggle"))},le,8,ee))}}),ae=["src","alt"],ne=(0,a.aZ)({emits:["toggle-sidebar"],setup(e){const l=(0,u.I)(),t=(0,u.I5)(),r=(0,p.X6)(),o=(0,p.vs)(),s=(0,i.iH)(null),c=(0,i.iH)(null),d=(0,a.Fl)((()=>r.value.home||l.value)),v=(0,a.Fl)((()=>o.value&&void 0!==r.value.logoDark?r.value.logoDark:r.value.logo)),h=(0,a.Fl)((()=>t.value.title)),g=(0,i.iH)(0),k=(0,a.Fl)((()=>g.value?{maxWidth:g.value+"px"}:{})),m=(0,a.Fl)((()=>r.value.darkMode));function w(e,l){var t,a,n;const i=null==(n=null==(a=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[l],r=Number.parseInt(i,10);return Number.isNaN(r)?0:r}return(0,a.bv)((()=>{const e=w(s.value,"paddingLeft")+w(s.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?g.value=0:g.value=s.value.offsetWidth-e-((null==(l=c.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const t=(0,a.up)("ClientOnly"),r=(0,a.up)("RouterLink"),o=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.iD)("header",{ref_key:"navbar",ref:s,class:"navbar"},[(0,a.Wm)(te,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),(0,a._)("span",{ref_key:"siteBrand",ref:c},[(0,a.Wm)(r,{to:(0,i.SU)(d)},{default:(0,a.w5)((()=>[(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[(0,i.SU)(v)?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"logo",src:(0,i.SU)(u.pJ)((0,i.SU)(v)),alt:(0,i.SU)(h)},null,8,ae)):(0,a.kq)("",!0)])),_:1}),(0,i.SU)(h)?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,n.C_)(["site-name",{"can-hide":(0,i.SU)(v)}])},(0,n.zw)((0,i.SU)(h)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])],512),(0,a._)("div",{class:"navbar-links-wrapper",style:(0,n.j5)((0,i.SU)(k))},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(E,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,i.SU)(m)?((0,a.wg)(),(0,a.j4)(Q,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(o)],4)],512)}}}),ie={class:"page-meta"},re={key:0,class:"meta-item edit-link"},ue={key:1,class:"meta-item last-updated"},oe={class:"meta-item-label"},se={class:"meta-item-info"},ce={key:2,class:"meta-item contributors"},de={class:"meta-item-label"},ve={class:"meta-item-info"},pe=["title"],he={key:1,class:"contributor"},ge=(0,a.Uk)(", "),ke=(0,a.aZ)({setup(e){const l=(0,p.X6)(),t=(()=>{const e=(0,p.X6)(),l=(0,u.Vi)(),t=(0,u.I2)();return(0,a.Fl)((()=>{var a,n;if(null!=(n=null!=(a=t.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:i,docsRepo:r=i,docsBranch:u="main",docsDir:o="docs",editLinkText:c}=e.value;if(!r)return null;const d=(({docsRepo:e,docsBranch:l,docsDir:t,filePathRelative:a,editLinkPattern:n})=>{const i=$(e);let r;return n?r=n:null!==i&&(r=q[i]),r?r.replace(/:repo/,(0,s.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,(0,s.FY)(`${(0,s.U1)(t)}/${a}`)):null})({docsRepo:r,docsBranch:u,docsDir:o,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return d?{text:null!=c?c:"Edit this page",link:d}:null}))})(),r=(()=>{(0,u.I5)();const e=(0,p.X6)(),l=(0,u.Vi)(),t=(0,u.I2)();return(0,a.Fl)((()=>{var a,n,i,r;return(null==(n=null!=(a=t.value.lastUpdated)?a:e.value.lastUpdated)||n)&&(null==(i=l.value.git)?void 0:i.updatedTime)?new Date(null==(r=l.value.git)?void 0:r.updatedTime).toLocaleString():null}))})(),o=(()=>{const e=(0,p.X6)(),l=(0,u.Vi)(),t=(0,u.I2)();return(0,a.Fl)((()=>{var a,n,i,r;try{let u=function(e){return{name:e,email:null,commits:0}};if(null!=(n=null!=(a=t.value.contributors)?a:e.value.contributors)&&!n)return null;let o=null!=(r=null==(i=l.value.git)?void 0:i.contributors)?r:null,s=[];if(t.value.hasOwnProperty("extra_contributors")){const e=t.value.extra_contributors;if(Array.isArray(e))for(const l in e)s.push(e[l]);else s.push(e)}return[...o,...s.map(u)]}catch(e){return null}}))})();return(e,u)=>{const s=(0,a.up)("ClientOnly");return(0,a.wg)(),(0,a.iD)("footer",ie,[(0,i.SU)(t)?((0,a.wg)(),(0,a.iD)("div",re,[(0,a.Wm)(v,{class:"meta-item-label",item:(0,i.SU)(t)},null,8,["item"])])):(0,a.kq)("",!0),(0,i.SU)(r)?((0,a.wg)(),(0,a.iD)("div",ue,[(0,a._)("span",oe,(0,n.zw)((0,i.SU)(l).lastUpdatedText)+": ",1),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a._)("span",se,(0,n.zw)((0,i.SU)(r)),1)])),_:1})])):(0,a.kq)("",!0),(0,i.SU)(o)&&(0,i.SU)(o).length?((0,a.wg)(),(0,a.iD)("div",ce,[(0,a._)("span",de,(0,n.zw)((0,i.SU)(l).contributorsText)+": ",1),(0,a._)("span",ve,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(o),((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[e.email?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"contributor",title:`email: ${e.email}`},(0,n.zw)(e.name),9,pe)):(0,a.kq)("",!0),e.email?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",he,(0,n.zw)(e.name),1)),l!==(0,i.SU)(o).length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[ge],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)])}}}),me={key:0,class:"page-nav"},we={class:"inner"},be={key:0,class:"prev"},fe={key:1,class:"next"},Ue=(0,a.aZ)({setup(e){const l=e=>!1===e?null:(0,s.HD)(e)?(0,p.sC)(e):!!(0,s.PO)(e)&&e,t=(e,l,a)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+a];return(null==l?void 0:l.link)?l:null}for(const n of e)if(n.children){const e=t(n.children,l,a);if(e)return e}return null},n=(0,u.I2)(),r=(0,p.VU)(),c=(0,o.yj)(),d=(0,a.Fl)((()=>{const e=l(n.value.prev);return!1!==e?e:t(r.value,c.path,-1)})),h=(0,a.Fl)((()=>{const e=l(n.value.next);return!1!==e?e:t(r.value,c.path,1)}));return(e,l)=>(0,i.SU)(d)||(0,i.SU)(h)?((0,a.wg)(),(0,a.iD)("nav",me,[(0,a._)("p",we,[(0,i.SU)(d)?((0,a.wg)(),(0,a.iD)("span",be,[(0,a.Wm)(v,{item:(0,i.SU)(d)},null,8,["item"])])):(0,a.kq)("",!0),(0,i.SU)(h)?((0,a.wg)(),(0,a.iD)("span",fe,[(0,a.Wm)(v,{item:(0,i.SU)(h)},null,8,["item"])])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)}}),Se={class:"page"},ye={class:"theme-default-content"},_e=["innerHTML"],De={key:1,style:{"text-align":"center"}},Fe=["id"],xe={key:2,style:{"text-align":"center"}},We=["id"],Le=(0,a.aZ)({setup(e){const l=(0,u.I2)(),t=(0,p.X6)(),r=(0,a.Fl)((()=>{var e=l.value.discordNoticeText||t.value.discordNoticeText;if(e)return"<p>"+e+"</p>"})),o=(0,a.Fl)((()=>{var e=t.value.adTagOne;if(e)return e})),s=(0,a.Fl)((()=>{var e=t.value.adTagTwo;if(e)return e})),c=(0,a.Fl)((()=>{if(l.value.ads)return l.value.ads})),d=(0,a.Fl)((()=>{if(l.value.title)return l.value.title}));return(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",Se,[(0,a.WI)(e.$slots,"top"),(0,a._)("div",ye,[(0,a._)("h1",null,(0,n.zw)((0,i.SU)(d)),1),(0,i.SU)(r)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"custom-container tip",innerHTML:(0,i.SU)(r)},null,8,_e)):(0,a.kq)("",!0),(0,i.SU)(o)&&(0,i.SU)(c)?((0,a.wg)(),(0,a.iD)("div",De,[(0,a._)("div",{id:(0,i.SU)(o)},null,8,Fe)])):(0,a.kq)("",!0),(0,a.Wm)(t),(0,i.SU)(s)&&(0,i.SU)(c)?((0,a.wg)(),(0,a.iD)("div",xe,[(0,a._)("div",{id:(0,i.SU)(s)},null,8,We)])):(0,a.kq)("",!0)]),(0,a.Wm)(ke),(0,a.Wm)(Ue),(0,a.WI)(e.$slots,"bottom")])}}}),Te=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),He=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||Te(e.path)===Te(l)))(e,l.link)||!!l.children&&l.children.some((l=>He(e,l))),Ie=(e,l)=>e.link?(0,a.h)(v,{...l,item:e}):(0,a.h)("p",l,e.text),$e=(e,l)=>{var t;return(null===(t=e.children)||void 0===t?void 0:t.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(qe,{item:e,depth:l+1}))))):null},qe=({item:e,depth:l=0})=>{const t=(0,o.yj)(),a=He(t,e);return[Ie(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:a}}),$e(e,l)]};qe.displayName="SidebarChild",qe.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const Ce={class:"sidebar"},Me={class:"sidebar-links"},ze=(0,a.aZ)({setup(e){const l=(0,p.VU)();return(e,t)=>((0,a.wg)(),(0,a.iD)("aside",Ce,[(0,a.Wm)(E),(0,a.WI)(e.$slots,"top"),(0,a._)("ul",Me,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(l),(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.link||e.text},[(0,a.Wm)((0,i.SU)(qe),{item:e},null,8,["item"])])))),128))]),(0,a.WI)(e.$slots,"bottom")]))}}),je=(0,a.aZ)({setup(e){const l=(0,u.Vi)(),t=(0,u.I2)(),s=(0,p.X6)(),c=(0,a.Fl)((()=>!1!==t.value.navbar&&!1!==s.value.navbar)),d=(0,p.VU)(),v=(0,i.iH)(!1),h=e=>{v.value="boolean"==typeof e?e:!v.value},g={x:0,y:0},k=e=>{g.x=e.changedTouches[0].clientX,g.y=e.changedTouches[0].clientY},m=e=>{const l=e.changedTouches[0].clientX-g.x,t=e.changedTouches[0].clientY-g.y;Math.abs(l)>Math.abs(t)&&Math.abs(l)>40&&(l>0&&g.x<=80?h(!0):h(!1))},w=(0,a.Fl)((()=>[{"no-navbar":!c.value,"no-sidebar":!d.value.length,"sidebar-open":v.value},t.value.pageClass]));let b;(0,a.bv)((()=>{const e=(0,o.tv)();b=e.afterEach((()=>{h(!1)}))})),(0,a.Ah)((()=>{b()}));const f=(0,p.P$)(),U=f.resolve,S=f.pending;return(e,u)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["theme-container",(0,i.SU)(w)]),onTouchstart:k,onTouchend:m},[(0,a.WI)(e.$slots,"navbar",{},(()=>[(0,i.SU)(c)?((0,a.wg)(),(0,a.j4)(ne,{key:0,onToggleSidebar:h},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:3})):(0,a.kq)("",!0)])),(0,a._)("div",{class:"sidebar-mask",onClick:u[0]||(u[0]=e=>h(!1))}),(0,a.WI)(e.$slots,"sidebar",{},(()=>[(0,a.Wm)(ze,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:3})])),(0,a.WI)(e.$slots,"page",{},(()=>[(0,i.SU)(t).home?((0,a.wg)(),(0,a.j4)(I,{key:0})):((0,a.wg)(),(0,a.j4)(r.uT,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:(0,i.SU)(U),onBeforeLeave:(0,i.SU)(S)},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)(Le,{key:(0,i.SU)(l).path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:3}))])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}})}}]);