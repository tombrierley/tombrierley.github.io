(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NGP1:function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),a=e.n(r),o=e("8Kt/"),i=e.n(o),c=e("vLgW"),l=e("kmSd"),u=e("BJm1"),m=e("CuwK"),d=a.a.createElement;t.default=function(){var n=Object(r.useContext)(m.b),t=n.projects,e=n.contactEmail,o=n.metaTitle,s=n.metaDescription;return d(a.a.Fragment,null,d(i.a,null,d("title",null,o),d("meta",{name:"description",content:s})),d(u.a,{size:"medium",setThemeOnEntry:"light"},d(l.a,{as:"h2",type:"h1",line:!0},"Work")),d(c.a,{projects:t}),d(u.a,{center:!0,setThemeOnEntry:"light"},d(l.a,{as:"h2",type:"h1",line:!0,marginBottom:!0,center:!0},"Let\u2018s start a project"),d(l.a,{as:"p",type:"p",center:!0},e)))}},sIsM:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return e("NGP1")}])},vLgW:function(n,t,e){"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var a=e("q1tI"),o=e.n(a),i=e("vOnD"),c=o.a.createElement,l=i.default.a.withConfig({displayName:"Button__ButtonWrapper",componentId:"j1d3f9-0"})((function(n){var t=n.theme;return"\n    display: inline-block;\n    border-bottom: solid 1px ".concat(t.colors.textColor,";\n    font-weight: ").concat(t.fontWeights.bold,";\n    font-size: ").concat(t.fontSizes.xSmall,";\n    margin-right:  ").concat(t.spacing.xxSmall,";\n    text-transform: uppercase;\n\n    &:hover{\n      border-bottom: none;\n    }\n  ")})),u=function(n){var t=n.href,e=n.children;return c(l,{rel:"noreferrer noopener",target:"_blank",href:t},e)},m=o.a.createElement,d=i.default.figure.withConfig({displayName:"ImageLoader__Wrapper",componentId:"qwhfrz-0"})(["background-color:",";display:block;overflow:hidden;padding-bottom:100%;position:relative;width:100%;z-index:1;@media (","){padding-bottom:0;}img{display:none;}"],(function(n){return n.theme.colors.grey200}),(function(n){return n.theme.breakpoints.medium})),s=i.default.div.withConfig({displayName:"ImageLoader__Background",componentId:"qwhfrz-1"})(["background-image:url(",");background-position:center center;background-repeat:no-repeat;background-size:contain;bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transform:scale(1.1);transition:opacity "," "," 0s,transform "," "," 0s;",";"],(function(n){return n.imageUrl}),(function(n){return n.theme.base.transitionSpeed}),(function(n){return n.theme.easing.enter}),(function(n){return n.theme.base.transitionSpeed}),(function(n){return n.theme.easing.enter}),(function(n){return n.isLoaded&&"\n    opacity: 1;\n    transform: none;\n  "})),f=function(n){var t=n.imageUrl,e=n.alt,r=Object(a.useState)(!1),o=r[0],i=r[1],c=function(){i(!0)};return Object(a.useEffect)((function(){var n=new Image;return n.src=t,n.onload=c,function(){n.src="",n.onload=null}})),m(d,null,m(s,{isLoaded:o,imageUrl:t},m("img",{src:t,alt:e})))},p=e("BJm1"),g=e("kmSd"),h=e("hKI/"),b=e.n(h),v=o.a.createElement,w=i.default.div.withConfig({displayName:"Parallax__Container",componentId:"sc-1bdnbqt-0"})((function(n){var t=n.theme;return"\n    @media (".concat(t.breakpoints.medium,") {\n      overflow: hidden;\n      height: '100%';\n      display: flex;\n    };\n  ")})),y=i.default.div.withConfig({displayName:"Parallax__Inner",componentId:"sc-1bdnbqt-1"})((function(n){var t=n.theme,e=n.transform;return"\n    @media (".concat(t.breakpoints.medium,") {\n      transform: translateY(").concat(e,"px);\n      margin: auto;\n    };\n  ")})),k=function(n){var t=n.children,e=Object(a.useRef)(null),r=Object(a.useState)(0),o=r[0],i=r[1],c=b()((function(){if(e&&e.current){var n=e.current.getBoundingClientRect().top,t=e.current.offsetHeight;if(!(n>t||n<-t)){var r=n-(window.innerHeight-t)/2;i(.5*r)}}}),8);return Object(a.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}})),v(w,{ref:e},v(y,{transform:o},t))},_=e("OraA"),j=o.a.createElement,x=i.default.div.withConfig({displayName:"ProjectBlock__ProjectGrid",componentId:"ca00jt-0"})((function(n){var t=n.theme;return"\n    @media (".concat(t.breakpoints.medium,") {\n      display: flex;\n      height: 100%;\n      width: 100%;\n    }\n  ")})),I=i.default.div.withConfig({displayName:"ProjectBlock__ImageCol",componentId:"ca00jt-1"})((function(n){var t=n.theme;return"\n    display: flex;\n    margin-bottom: ".concat(t.spacing.large,";\n\n    @media (").concat(t.breakpoints.medium,") {\n      flex: 0 0 50%;\n      margin-bottom: 0;\n      width: 50%;\n    };\n  ")})),C=i.default.div.withConfig({displayName:"ProjectBlock__ContentCol",componentId:"ca00jt-2"})((function(n){var t=n.theme;return"\n    display: flex;\n\n    @media (".concat(t.breakpoints.medium,") {\n      flex: 0 0 50%;\n      padding-left: ").concat(t.spacing.xxLarge,";\n      position: relative;\n      z-index: 1;\n      width: 50%;\n    };\n  ")})),E=i.default.div.withConfig({displayName:"ProjectBlock__TagWrapper",componentId:"ca00jt-3"})((function(n){var t=n.theme;return"\n    margin-bottom: ".concat(t.spacing.large,";\n  ")})),O=function(n){var t=n.title,e=n.description,r=n.tags,a=n.image,o=n.url;return j(p.a,{setThemeOnEntry:"light"},j(x,null,j(I,null,j(f,{alt:t,imageUrl:a})),j(C,null,j(k,null,j(g.a,{as:"h3",type:"h1",marginBottom:!0},t),j(g.a,{as:"p",type:"p-alt",line:!0,marginBottom:!0},e),j(E,null,r.map((function(n){return j(_.a,null,n)}))),o&&j(u,{href:o},"View Project")))))},B=o.a.createElement;t.a=function(n){var t=n.projects;return t&&t.length?B(o.a.Fragment,null,t.map((function(n){return B(O,r({key:n.id},n))}))):B(o.a.Fragment,null)}}},[["sIsM",0,1,2,3]]]);