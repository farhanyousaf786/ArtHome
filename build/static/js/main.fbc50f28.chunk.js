(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(8),i=t.n(r),c=(t(13),t(4)),s=t(1),a=(t(14),t(2));function l(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var u={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:l,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=l();return e?JSON.parse(atob(e.split(".")[1])).user:null}},h="/api/users/";var j={signup:function(e){return fetch(h+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var n=e.token;return u.setToken(n)}))},logout:function(){u.removeToken()},login:function(e){return fetch(h+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var n=e.token;return u.setToken(n)}))},getUser:function(){return u.getUserFromToken()}};function g(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Signup PAGE"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Read the Login Model, You can change it to fit your needs"}),Object(a.jsx)("li",{children:"Make sure you read the Login Controller, to know how it is setup to find the user!"})]})]})}t(16);function d(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Setup Login Page"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Read the Login Model, You can change it to fit your needs"}),Object(a.jsx)("li",{children:"Make sure you read the Login Controller, to know how it is setup to find the user!"})]})]})}var b=function(){var e=Object(o.useState)(j.getUser()),n=Object(c.a)(e,2),t=n[0],r=n[1];function i(){r(j.getUser())}return t?Object(a.jsxs)(s.d,{children:[Object(a.jsx)(s.b,{path:"/",element:Object(a.jsx)("h1",{children:"This is Home Page!"})}),Object(a.jsx)(s.b,{path:"/login",element:Object(a.jsx)(d,{handleSignUpOrLogin:i})}),Object(a.jsx)(s.b,{path:"/signup",element:Object(a.jsx)(g,{handleSignUpOrLogin:i})})]}):Object(a.jsxs)(s.d,{children:[Object(a.jsx)(s.b,{path:"/login",element:Object(a.jsx)(d,{handleSignUpOrLogin:i})}),Object(a.jsx)(s.b,{path:"/signup",element:Object(a.jsx)(g,{handleSignUpOrLogin:i})}),Object(a.jsx)(s.b,{path:"/*",element:Object(a.jsx)(s.a,{to:"/login"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(5);i.a.render(Object(a.jsx)(O.a,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.fbc50f28.chunk.js.map