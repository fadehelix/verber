(this.webpackJsonpverber=this.webpackJsonpverber||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),i=n.n(l),c=(n(9),n(1)),o=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),r=n[0],l=n[1];return Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return l(e.data)}))}),[e]),r},s=function(e){var t=e.children,n=e.verb,l=Object(a.useState)(""),i=Object(c.a)(l,2),o=i[0],s=i[1],u=Object(a.useState)(!1),m=Object(c.a)(u,2),p=m[0],f=m[1],v=Object(a.useState)(null),E=Object(c.a)(v,2),d=E[0],b=E[1];return r.a.createElement("div",{className:"answer ".concat(d)},r.a.createElement("label",{htmlFor:"firstAnswerInput"},t),r.a.createElement("input",{id:"firstAnswerInput",type:"text",value:o,onFocus:function(e){f(!1),b(null)},onChange:function(e){s(e.target.value)},onBlur:function(e){var t=e.target.value;t.length>1&&(f(!0),b(function(e,t){return!!e.split("/").find((function(e){return e===t}))}(n,t)?"answer--isCorrect":"answer--isInCorrect"))}}),p&&r.a.createElement("span",{className:"answer__definition"},n))};n(10);var u=function(){var e=o("https://iverbapi.herokuapp.com/api/all"),t=Object(a.useState)({infinitive:"",past:"",pastParticiple:""}),n=Object(c.a)(t,2),l=n[0],i=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Verber")),r.a.createElement("main",null,r.a.createElement("section",{className:"verbFinder"},r.a.createElement("h2",null,"Find a verb"),r.a.createElement("form",null,r.a.createElement("div",{className:"question"},r.a.createElement("label",{htmlFor:"firstAnswerInput"},"Find infinitive form verb"),r.a.createElement("input",{id:"questionInput",type:"search",list:"verbs",autoComplete:"off",onBlur:function(t){var n=t.target.value;n&&i(e.find((function(e){return e.infinitive===n})))}}),r.a.createElement("datalist",{id:"verbs"},e.map((function(e){return r.a.createElement("option",{key:"option-".concat(e._id)},e.infinitive)})))),r.a.createElement("div",{className:"answers"},r.a.createElement(s,{verb:l.past},"Past"),r.a.createElement(s,{verb:l.pastParticiple},"Past Participle")))),r.a.createElement("section",{className:"verbList"},r.a.createElement("h2",null,"All Verbs"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"infinitive"),r.a.createElement("th",null,"Past"),r.a.createElement("th",null,"Past Participle"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.infinitive),r.a.createElement("td",null,e.past),r.a.createElement("td",null,e.pastParticiple))})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.6582e3cf.chunk.js.map