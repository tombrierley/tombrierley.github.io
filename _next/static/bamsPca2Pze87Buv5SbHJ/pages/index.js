(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t.n(a),o=t("8Kt/"),i=t.n(o),c=t("vLgW"),l=t("kmSd"),m=t("BJm1"),u=t("OraA"),d=t("CuwK"),s=r.a.createElement;e.default=function(){var n=Object(a.useContext)(d.b),e=n.intro,t=n.about,o=n.projects,p=n.interests,f=n.contactEmail,h=n.metaTitle,g=n.metaDescription,b=n.howIWork;return s(r.a.Fragment,null,s(i.a,null,s("title",null,h),s("meta",{name:"description",content:g})),s(m.a,{size:"medium",setThemeOnEntry:"dark"},s(l.a,{as:"h3",type:"h1",line:!0},e)),s(m.a,{size:"medium",setThemeOnEntry:"dark"},s(l.a,{as:"h2",type:"h1",line:!0,marginBottomLarge:!0},"About"),s(l.a,{as:"p",type:"h2"},t)),s(m.a,{size:"medium",setThemeOnEntry:"dark"},s(l.a,{as:"h2",type:"h1",line:!0,marginBottom:!0},"I\u2018m currently excited by"),s(u.a,null,p.map((function(n){return s(u.a,null,n)})))),s(m.a,{size:"medium",setThemeOnEntry:"dark"},s(l.a,{as:"h2",type:"h1",line:!0,marginBottomLarge:!0},"How I work"),s(l.a,{as:"p",type:"h2"},b)),s(m.a,{size:"medium",setThemeOnEntry:"light"},s(l.a,{as:"h2",type:"h1",line:!0},"Work")),s(c.a,{projects:o}),s(m.a,{center:!0,setThemeOnEntry:"light"},s(l.a,{as:"h2",type:"h1",line:!0,marginBottom:!0,center:!0},"Let\u2018s start a project"),s(l.a,{as:"p",type:"p",center:!0},f)))}},vLgW:function(n,e,t){"use strict";function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var r=t("q1tI"),o=t.n(r),i=t("vOnD"),c=o.a.createElement,l=i.default.a.withConfig({displayName:"Button__ButtonWrapper",componentId:"j1d3f9-0"})((function(n){var e=n.theme;return"\n    display: inline-block;\n    border-bottom: solid 1px ".concat(e.colors.textColor,";\n    font-weight: ").concat(e.fontWeights.bold,";\n    font-size: ").concat(e.fontSizes.xSmall,";\n    margin-right:  ").concat(e.spacing.xxSmall,";\n    text-transform: uppercase;\n\n    &:hover{\n      border-bottom: none;\n    }\n  ")})),m=function(n){var e=n.href,t=n.children;return c(l,{href:e},t)},u=o.a.createElement,d=i.default.figure.withConfig({displayName:"ImageLoader__Wrapper",componentId:"qwhfrz-0"})(["background-color:",";display:block;overflow:hidden;padding-bottom:100%;position:relative;width:100%;z-index:1;@media (","){padding-bottom:0;}img{display:none;}"],(function(n){return n.theme.colors.grey200}),(function(n){return n.theme.breakpoints.medium})),s=i.default.div.withConfig({displayName:"ImageLoader__Background",componentId:"qwhfrz-1"})(["background-image:url(",");background-position:center center;background-repeat:no-repeat;background-size:contain;bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transform:scale(1.1);transition:opacity "," "," 0s,transform "," "," 0s;",";"],(function(n){return n.imageUrl}),(function(n){return n.theme.base.transitionSpeed}),(function(n){return n.theme.easing.enter}),(function(n){return n.theme.base.transitionSpeed}),(function(n){return n.theme.easing.enter}),(function(n){return n.isLoaded&&"\n    opacity: 1;\n    transform: none;\n  "})),p=function(n){var e=n.imageUrl,t=n.alt,a=Object(r.useState)(!1),o=a[0],i=a[1],c=function(){i(!0)};return Object(r.useEffect)((function(){var n=new Image;return n.src=e,n.onload=c,function(){n.src="",n.onload=null}})),u(d,null,u(s,{isLoaded:o,imageUrl:e},u("img",{src:e,alt:t})))},f=t("BJm1"),h=t("kmSd"),g=t("hKI/"),b=t.n(g),y=o.a.createElement,w=i.default.div.withConfig({displayName:"Parallax__Container",componentId:"sc-1bdnbqt-0"})((function(n){var e=n.theme;return"\n    @media (".concat(e.breakpoints.medium,") {\n      overflow: hidden;\n      height: '100%';\n      display: flex;\n    };\n  ")})),v=i.default.div.withConfig({displayName:"Parallax__Inner",componentId:"sc-1bdnbqt-1"})((function(n){var e=n.theme,t=n.transform;return"\n    @media (".concat(e.breakpoints.medium,") {\n      transform: translateY(").concat(t,"px);\n      margin: auto;\n    };\n  ")})),k=function(n){var e=n.children,t=Object(r.useRef)(null),a=Object(r.useState)(0),o=a[0],i=a[1],c=b()((function(){if(t&&t.current){var n=t.current.getBoundingClientRect().top,e=t.current.offsetHeight;if(!(n>e||n<-e)){var a=n-(window.innerHeight-e)/2;i(.5*a)}}}),8);return Object(r.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}})),y(w,{ref:t},y(v,{transform:o},e))},j=t("OraA"),_=o.a.createElement,E=i.default.div.withConfig({displayName:"ProjectBlock__ProjectGrid",componentId:"ca00jt-0"})((function(n){var e=n.theme;return"\n    @media (".concat(e.breakpoints.medium,") {\n      display: flex;\n      height: 100%;\n      width: 100%;\n    }\n  ")})),x=i.default.div.withConfig({displayName:"ProjectBlock__ImageCol",componentId:"ca00jt-1"})((function(n){var e=n.theme;return"\n    display: flex;\n    margin-bottom: ".concat(e.spacing.large,";\n\n    @media (").concat(e.breakpoints.medium,") {\n      flex: 0 0 50%;\n      margin-bottom: 0;\n      width: 50%;\n    };\n  ")})),I=i.default.div.withConfig({displayName:"ProjectBlock__ContentCol",componentId:"ca00jt-2"})((function(n){var e=n.theme;return"\n    display: flex;\n\n    @media (".concat(e.breakpoints.medium,") {\n      flex: 0 0 50%;\n      padding-left: ").concat(e.spacing.xxLarge,";\n      position: relative;\n      z-index: 1;\n      width: 50%;\n    };\n  ")})),O=i.default.div.withConfig({displayName:"ProjectBlock__TagWrapper",componentId:"ca00jt-3"})((function(n){var e=n.theme;return"\n    margin-bottom: ".concat(e.spacing.large,";\n  ")})),C=function(n){var e=n.title,t=n.description,a=n.tags,r=n.image,o=n.url;return _(f.a,{setThemeOnEntry:"light"},_(E,null,_(x,null,_(p,{alt:e,imageUrl:r})),_(I,null,_(k,null,_(h.a,{as:"h3",type:"h1",marginBottom:!0},e),_(h.a,{as:"p",type:"p-alt",line:!0,marginBottom:!0},t),_(O,null,a.map((function(n){return _(j.a,null,n)}))),o&&_(m,{href:o},"View Project")))))},B=o.a.createElement;e.a=function(n){var e=n.projects;return e&&e.length?B(o.a.Fragment,null,e.map((function(n){return B(C,a({key:n.id},n))}))):B(o.a.Fragment,null)}}},[["/EDR",0,1,2,3]]]);