(this["webpackJsonppomodoro-focus-clock"]=this["webpackJsonppomodoro-focus-clock"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(5),a=c.n(n),r=c(2),o=c(7),j=(c(12),c(0));function u(e){return Object(j.jsx)("button",Object(o.a)({className:"button"},e))}c(14);var b=c(6),d=c.p+"static/media/timer.dbb3e4ba.mp3";function l(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([!0,!1,!1]),a=Object(r.a)(n,2),o=a[0],l=a[1],O=Object(s.useState)(!1),m=Object(r.a)(O,2),f=m[0],x=m[1],h=Object(s.useState)("Iniciar"),p=Object(r.a)(h,2),v=p[0],S=p[1],N=Object(s.useState)(!1),g=Object(r.a)(N,2),k=g[0],q=g[1],w=Object(s.useState)(1500),y=Object(r.a)(w,2),C=y[0],E=y[1],I=Math.floor(C/60),P=C%60,M=String(I).padStart(2,"0").split(""),B=Object(r.a)(M,2),J=B[0],A=B[1],L=String(P).padStart(2,"0").split(""),T=Object(r.a)(L,2),V=T[0],z=T[1];function D(e){switch(e){case 0:l([!0,!1,!1]),E(1500);break;case 1:l([!1,!0,!1]),E(300);break;case 2:l([!1,!1,!0]),E(900)}}function F(){!1===k?(x(!0),q(!k),S("Pausar")):(x(!1),q(!k),S("Iniciar"))}return Object(s.useEffect)((function(){Notification.requestPermission()}),[]),Object(s.useEffect)((function(){if(f&&C>0)Object(b.setTimeout)((function(){E(C-1)}),1e3);else if(f&&0===C){document.getElementById("audio").play(),new Notification("Vamos l\xe1!"),c<4&&(o.toString()===[!1,!0,!1].toString()||o.toString()===[!1,!1,!0].toString()?D(0):3===c?(i(0),D(2)):(i(c+1),D(1))),F()}}),[f,C]),Object(j.jsxs)("main",{children:[Object(j.jsxs)("div",{className:"button-group",children:[Object(j.jsx)(u,{activate:o[0].toString(),onClick:function(){return D(0)},children:"Pomodoro"}),Object(j.jsx)(u,{activate:o[1].toString(),onClick:function(){return D(1)},children:"Pequena pausa"}),Object(j.jsx)(u,{activate:o[2].toString(),onClick:function(){return D(2)},children:"Longa pausa"})]}),Object(j.jsxs)("div",{className:"timer",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"numbers",children:[Object(j.jsx)("div",{className:"square",children:J}),Object(j.jsx)("div",{className:"square",children:A}),Object(j.jsxs)("div",{className:"separator",children:[Object(j.jsx)("div",{className:"circle"}),Object(j.jsx)("div",{className:"circle"})]})]}),Object(j.jsx)("p",{children:"Minutos"})]}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"numbers",children:[Object(j.jsx)("div",{className:"square",children:V}),Object(j.jsx)("div",{className:"square",children:z})]}),Object(j.jsx)("p",{children:"Segundos"})]})]}),Object(j.jsx)(u,{className:"start-button",onClick:function(){F()},clicked:k.toString(),children:v}),Object(j.jsx)("audio",{controls:!0,id:"audio",children:Object(j.jsx)("source",{src:d,type:"audio/mp3"})})]})}var O=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l,{})})};c(17);a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b1fa576e.chunk.js.map