(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=(n(16),n(2)),u=n(9),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=2CLlm0C9quusFSUDLEou4FiNvsTU8gut"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(r.jsxs)("div",{className:"card animate__animated animate__fadeInLeftBig",children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsxs)("p",{children:[" ",e,"  "]})]})},O=function(t){var e=t.category,n=function(t){var e=t.category,n=Object(c.useState)({data:[],loading:!0}),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){b(e).then((function(t){i({data:t,loading:!1})}))}),[e]),a}({category:e}),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:[" ",e]}),i&&Object(r.jsx)("p",{children:"Loading"}),Object(r.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(r.jsx)(f,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)(["One Punch"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(o,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(O,{category:t},t)}))})]})};i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1b9b5d3e.chunk.js.map