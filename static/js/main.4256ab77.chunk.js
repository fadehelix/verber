(this.webpackJsonpverber=this.webpackJsonpverber||[]).push([[0],{38:function(e,t,a){e.exports=a(50)},43:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=a(22),o=(a(43),a(15)),s=a(7),m=function(){return r.a.createElement("h2",null,"Loading...")},u=a(84),v=a(87),d=a(89),h=a(90),f=Object(u.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:18},pos:{marginBottom:12}});var E=function(e){var t=e.title,a=e.children,n=f();return r.a.createElement(v.a,{className:n.root},r.a.createElement(d.a,null,r.a.createElement(h.a,{variant:"h3",component:"h2",gutterBottom:!0},t),a))},p=a(91);var b=function(e){var t=e.value,a=e.id,n=e.label,l=e.onChange,c=e.onFocus,i=e.onBlur;return r.a.createElement(p.a,{id:a,label:n,variant:"outlined",value:t,onChange:l,onFocus:c,onBlur:i,autoComplete:"off"})},g=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){m(e.data),l(!1)}))}),[e]),{verbs:s,isLoading:r}},w=function(e){var t=e.children,a=e.value,l=e.htmlId,c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(!1),v=Object(o.a)(u,2),d=v[0],h=v[1],f=Object(n.useState)(null),E=Object(o.a)(f,2),p=E[0],g=E[1];return r.a.createElement("div",{className:"answer ".concat(p)},r.a.createElement(b,{id:l,label:t,value:s,onFocus:function(){h(!1),g(null)},onChange:function(e){m(e.target.value)},onBlur:function(e){var t,n;e.target.value.length>1&&(h(!0),g((t=a,n=e.target.value,t.split("/").find((function(e){return e.toLowerCase()===n.toLowerCase()}))?"answer--isCorrect":"answer--isIncorrect")))}}),d&&r.a.createElement("span",{className:"answer__definition"},a))};w.defaultProps={htmlId:"answer",children:r.a.createElement(r.a.Fragment,null)};var N=w,j=function(e){var t=e.verb,a=e.children;return t?r.a.createElement(E,{title:a},r.a.createElement("div",{className:"Exercise"},r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{value:t.past,htmlId:"firstAnswer"},"Past"),r.a.createElement(N,{value:t.pastParticiple,htmlId:"secondAnswer"},"Past Participle")))):r.a.createElement("span",{className:"answers answers--error"},'"Invalid word :("')};j.defaultProps={children:r.a.createElement(r.a.Fragment,null)};var O=j,I=function(e){return e[Math.floor(Math.random()*e.length)]},P=(a(47),function(e){var t=e.title,a=e.children;return r.a.createElement("section",{className:"Page"},r.a.createElement("h2",{className:"PageTitle"},t),r.a.createElement("div",{className:"PageContent"},a))});P.defaultProps={};var C=P;var F=function(){var e=Object(s.g)(),t=g("https://iverbapi.herokuapp.com/api/all"),a=t.verbs,l=t.isLoading,c=Object(n.useState)({infinitive:"",past:"",pastParticiple:""}),u=Object(o.a)(c,2),v=u[0],d=u[1];return Object(n.useEffect)((function(){a.length>0&&d(I(a))}),[a]),l?r.a.createElement(m,null):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},"Verber"))),r.a.createElement("main",null,"/"===e.pathname&&r.a.createElement("nav",{className:"AppNav"},r.a.createElement("div",{className:"AppNavItem"},r.a.createElement(i.b,{to:"/search"},"Search for a verb")),r.a.createElement("div",{className:"AppNavItem"},r.a.createElement(i.b,{to:"/challenge"},"Take a challenge"))),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return r.a.createElement(s.a,{to:"/challenge"})}}),r.a.createElement(s.b,{path:"/search"},r.a.createElement(C,{title:"Search"},r.a.createElement("div",{className:"verbFinder"},r.a.createElement("form",null,r.a.createElement(O,{verb:v},r.a.createElement("label",{htmlFor:"questionInput"},"Find infinitive form verb"),r.a.createElement("input",{id:"questionInput",type:"search",list:"verbs",autoComplete:"off",onBlur:function(e){var t=e.target.value;t&&d(a.find((function(e){return e.infinitive===t})))}}),r.a.createElement("datalist",{id:"verbs"},a.map((function(e){return r.a.createElement("option",{key:"option-".concat(e._id)},e.infinitive)})))))))),r.a.createElement(s.b,{path:"/challenge"},r.a.createElement(C,{title:"Challenge"},r.a.createElement("div",{className:"verbFinder"},r.a.createElement("form",null,r.a.createElement(O,{verb:v},r.a.createElement("div",{className:"RandomVerb"},v.infinitive)))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4256ab77.chunk.js.map