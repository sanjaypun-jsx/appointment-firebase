(this["webpackJsonpbook-appointment"]=this["webpackJsonpbook-appointment"]||[]).push([[0],{55:function(t,n,e){},56:function(t,n,e){},65:function(t,n,e){"use strict";e.r(n);var i=e(4),a=e(2),r=e.n(a),c=e(41),o=e.n(c),s=(e(55),e(56),e(16)),l=e(8),d=e(24),b=e(42),u=e(9),j=e(11),h=e(23);function p(){var t=Object(l.a)(["\nbackground-color:white; \nheight:10px;\nwidth:10px;\nborder:20px solid white;\nborder-radius: 50%;\n"]);return p=function(){return t},t}var O=Object(u.a)(j.a.div)(p()),x={animationOne:{x:[-20,20],y:[0,-30],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25,ease:"easeOut"}}}},v=function(){return Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50vh"},children:Object(i.jsx)(O,{variants:x,animate:"animationOne"})})};function f(){var t=Object(l.a)([" \n\ttext-decoration:none;\n\tcolor:white;\n\t&:hover{\n\tcolor:black;\n}\n"]);return f=function(){return t},t}function m(){var t=Object(l.a)([" \t\n\tdisplay:block;\n\tcolor:white;\n\tfont-size:20px;"]);return m=function(){return t},t}function y(){var t=Object(l.a)([" \n\tdisplay:block;\n\tjustify-content:center;\n\talign-items:center;\n\t"]);return y=function(){return t},t}function g(){var t=Object(l.a)(["\n\tpadding:15px 0;\n\tbackground:transparent;\n\tborder:1px solid white;\n\tcolor:white;\n\twidth:100%;\n\tcursor:pointer;\n\toutline:none;\n\t&:hover{\n\t\tcolor:black;\n\t\tbackground-color:white;\n\t\ttransition: all 0.6s ease-in-out;\n\t}\n\n\t"]);return g=function(){return t},t}function w(){var t=Object(l.a)([" \n\tdisplay:block;\n\twidth: 100%;\n  \tpadding: 12px 20px;\n  \tmargin: 8px 0;\n  \tbox-sizing: border-box;\n\t"]);return w=function(){return t},t}function k(){var t=Object(l.a)([" \n\tdisplay:block;\n\twidth: 100%;\n  \tpadding: 12px 20px;\n  \tmargin: 8px 0;\n  \tbox-sizing: border-box;\n\t"]);return k=function(){return t},t}function C(){var t=Object(l.a)(["\n\tborder: 1px solid white;\n\tmargin-top:10vh;\n\twidth:35%;\n\tmax-height:110vh;\n\toutline:none;\n\t"]);return C=function(){return t},t}var I=Object(u.a)(j.a.div)(C()),S=Object(u.a)(j.a.input)(k()),A=Object(u.a)(j.a.textarea)(w()),F=Object(u.a)(j.a.button)(g()),z=Object(u.a)(j.a.div)(y()),P=Object(u.a)(j.a.p)(m()),T=Object(u.a)(h.b)(f());var B=function(){var t=Object(b.useId)(),n=Object(a.useState)(!0),e=Object(s.a)(n,2),r=(e[0],e[1],Object(a.useState)("")),c=Object(s.a)(r,2),o=c[0],l=c[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),h=j[0],p=j[1],O=Object(a.useState)(""),x=Object(s.a)(O,2),v=x[0],f=x[1],m=Object(a.useState)(""),y=Object(s.a)(m,2),g=y[0],w=y[1],k=d.a.database(),C={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{ease:"easeInOut",duration:.6}}};return Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsxs)(I,{className:"container",children:[Object(i.jsx)("form",{id:"contact",action:"",onSubmit:function(n){alert("Form Submitted!"),n.preventDefault(),k.ref("Patients/".concat(t)).set({Name:o,Email:h,Phone:v,Details:g})},method:"post",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsxs)(z,{children:[Object(i.jsx)(P,{style:{display:"block"},children:"Please Fill Up This Form"}),Object(i.jsx)(P,{style:{display:"block"},children:"Arkham Asylum will contact you soon after."}),Object(i.jsx)(S,{placeholder:"Your name",type:"text",id:"Name",value:o,onChange:function(t){return l(t.target.value)}}),Object(i.jsx)(S,{placeholder:"Your Email Address",type:"email",id:"Email",value:h,onChange:function(t){return p(t.target.value)}}),Object(i.jsx)(S,{placeholder:"Your Phone Number",type:"tel",id:"Phone",value:v,onChange:function(t){return f(t.target.value)}}),Object(i.jsx)(A,{placeholder:"Type The Details Of Your Appointment Here",id:"Details",value:g,onChange:function(t){return w(t.target.value)}}),Object(i.jsx)("div",{style:{padding:20},children:Object(i.jsx)(F,{name:"submit",type:"submit",id:"contact-submit",variants:C,initial:"hidden",animate:"visible",children:"Submit"})})]})}),Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"},children:Object(i.jsx)(F,{style:{display:"block",width:"71%"},variants:C,initial:"hidden",animate:"visible",children:Object(i.jsx)(T,{to:"/docs",children:"BACK"})})})]})})};function E(){var t=Object(l.a)(["\ncolor:white;\nfont-size:20px;"]);return E=function(){return t},t}function D(){var t=Object(l.a)(["\nmargin-top:25vh;\nfont-size:40px;\ncolor:white;\n"]);return D=function(){return t},t}function N(){var t=Object(l.a)(["\nmargin-top:1vh;\npadding:20px 50px;\nbackground-color:white;\ncolor:black;\nborder-radius:40px;\ntext-decoration:none;\noutline:none;\nborder:none;\ncursor:pointer;\nfont-size:20px;\n&:hover{\n    color:black;\n    background-color:#e3f2fd;\n}\n"]);return N=function(){return t},t}var L=Object(u.a)(j.a.button)(N()),G=Object(u.a)(j.a.p)(D()),K=Object(u.a)(j.a.p)(E()),R={hidden:{opacity:0},visible:{opacity:1,transition:{ease:"easeInOut",duration:2}}},Y={hidden:{x:"-100vw"},visible:{x:0,type:"spring",mass:8,duration:2}},H=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(G,{variants:R,initial:"hidden",animate:"visible",children:"Gotham State Mental Health Care"}),Object(i.jsx)(K,{variants:R,initial:"hidden",animate:"visible",children:"Are you going through hard time?"}),Object(i.jsx)(h.b,{to:"/docs",children:Object(i.jsx)(L,{variants:Y,initial:"hidden",animate:"visible",children:"SEE THERAPISTS"})})]})},J=e(77),M=e(76);function Q(){var t=Object(l.a)(["\nbackground-color:white;\nwidth:60%;\nmargin:auto;\nmargin-top:3vh;\n"]);return Q=function(){return t},t}function U(){var t=Object(l.a)(["\ncolor:white;\nfont-size:30px;\nmargin-top:3vh;\n"]);return U=function(){return t},t}var W=Object(u.a)(j.a.header)(U()),_=Object(u.a)(M.a)(Q()),V={hidden:{y:"-20vh",opacity:0},visible:{y:0,opacity:1,transition:{duration:1,ease:"easeInOut"}}},Z=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(W,{variants:V,initial:"hidden",animate:"visible",children:"Arkham Asylum"})}),Object(i.jsx)("div",{animate:{opacity:1},children:Object(i.jsx)(_,{})})]})};function q(){var t=Object(l.a)([" \n\ttext-decoration:none;\n\tcolor:white;\n\t&:hover{\n\t\tcolor:black;\n\t}\n\t"]);return q=function(){return t},t}function X(){var t=Object(l.a)(["\n\tborder: 1px solid white;\n\tdisplay:inline-block;\n\tmargin:20px;\n\t"]);return X=function(){return t},t}function $(){var t=Object(l.a)(["\n\tpadding:15px 40px;\n\tbackground:transparent;\n\tborder:1px solid white;\n\tcolor:white;\n\twidth:100%;\n\tcursor:pointer;\n\toutline:none;\n\t&:hover{\n\t\tcolor:black;\n\t\tbackground-color:white;\n\t\ttransition: all 0.6s ease-in-out;\n\t}\n\t"]);return $=function(){return t},t}function tt(){var t=Object(l.a)(["\n\tfont-size:20px;\n\tline-height:0.5;\n\tpadding-left:20px;\n\t"]);return tt=function(){return t},t}function nt(){var t=Object(l.a)(["\n\tlist-style:none;\n\tcolor:white;\n\ttext-align:left;\n\t"]);return nt=function(){return t},t}var et=function(){var t=Object(a.useState)([]),n=Object(s.a)(t,2),e=n[0],r=n[1],c=Object(a.useState)(!0),o=Object(s.a)(c,2),l=o[0],b=o[1],p=d.a.database();Object(a.useEffect)((function(){d.a.database().ref().child("Therapists").on("value",(function(t){r(t.val()),b(!1)}))}),[p]);var O=Object(u.a)(j.a.li)(nt()),x=Object(u.a)(j.a.p)(tt()),f=Object(u.a)(j.a.button)($()),m=Object(u.a)(j.a.div)(X()),y={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{ease:"easeInOut",duration:.6}}},g=Object(u.a)(h.b)(q());return l?Object(i.jsx)(v,{}):Object(i.jsxs)("div",{style:{display:"block"},children:[Object.keys(e).map((function(t,n){return Object(i.jsx)(m,{children:Object(i.jsxs)(O,{children:[Object(i.jsx)("img",{src:e[t].Photo,alt:"pp",style:{height:"300px",width:"auto"}}),Object(i.jsxs)(x,{children:["Name: ",e[t].Name]}),Object(i.jsxs)(x,{children:["Age: ",e[t].Age]}),Object(i.jsxs)(x,{children:["License: ",e[t].License]}),Object(i.jsx)("div",{style:{padding:20,marginTop:-25},children:Object(i.jsx)(h.b,{to:"/form",children:Object(i.jsx)(f,{variants:y,initial:"hidden",animate:"visible",children:Object(i.jsx)("span",{children:"BOOK"})})})})]},n)})})),Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsx)(f,{style:{display:"block",width:"48%"},variants:y,initial:"hidden",animate:"visible",children:Object(i.jsx)(g,{to:"/",children:"BACK"})})})]})},it=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(et,{})})},at=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(B,{})})},rt=e(10);d.a.initializeApp({apiKey:"AIzaSyCWB_d_1DC4oidrGCFVlrhgJFjlLmCWt0w",authDomain:"appointment-a480b.firebaseapp.com",databaseURL:"https://appointment-a480b.firebaseio.com",projectId:"appointment-a480b",storageBucket:"appointment-a480b.appspot.com",messagingSenderId:"855241258733",appId:"1:855241258733:web:6c61c44087619e7a60fee4",measurementId:"G-QG54RQ3PGZ"});var ct=function(){return Object(i.jsx)("div",{className:"App",style:{fontFamily:"Roboto"},children:Object(i.jsx)(J.b,{injectFirst:!0,children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)(Z,{}),Object(i.jsxs)(rt.c,{children:[Object(i.jsx)(rt.a,{path:"/",exact:!0,component:H}),Object(i.jsx)(rt.a,{path:"/docs",component:it}),Object(i.jsx)(rt.a,{path:"/form",component:at})]})]})})})},ot=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,78)).then((function(n){var e=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;e(t),i(t),a(t),r(t),c(t)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(ct,{})}),document.getElementById("root")),ot()}},[[65,1,2]]]);
//# sourceMappingURL=main.13bddcf6.chunk.js.map