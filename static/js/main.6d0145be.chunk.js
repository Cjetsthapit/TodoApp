(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{10:function(e,t,n){e.exports={todo:"Todo_todo__14MkB"}},12:function(e,t,n){e.exports={header:"Header_header__JFTiF"}},13:function(e,t,n){e.exports={display:"Display_display__3514C"}},16:function(e,t,n){e.exports={inputform:"InputForm_inputform__171ys"}},21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n.n(o),s=n(11),i=n.n(s),a=(n(21),n(22),n(12)),r=n.n(a),u=n(1),d=function(e){return Object(u.jsx)("div",{className:r.a.header,children:"ToDo App"})},l=n(7),j=n(6),p=n(13),b=n.n(p),x=n(10),f=n.n(x),m=n(14),h=n(15),O=function(e){var t=e.task,n=e.removeTask,o=e.index,c=e.toggleTask;return Object(u.jsxs)("div",{className:f.a.todo,style:{textDecoration:t.isCompleted?"line-through":"",color:t.isCompleted?"red":""},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:f.a.tick,type:"checkbox",checked:t.isCompleted,value:t.isCompleted,onChange:function(){return c(o)}}),t.text]}),Object(u.jsx)("button",{onClick:function(){return n(o)},children:Object(u.jsx)(m.a,{icon:h.a})})]})},v=n(16),C=n.n(v),g=function(e){var t=e.addTask,n=Object(o.useState)(""),c=Object(j.a)(n,2),s=c[0],i=c[1];return Object(u.jsx)("div",{className:C.a.inputform,children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),s&&(t(s),i(""))},children:Object(u.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)}})})})},k=function(e){var t=Object(o.useState)([{text:"Hello World",isCompleted:!1},{text:"Type your thoughts",isCompleted:!1},{text:"They will be stored permanently",isCompleted:!1}]),n=Object(j.a)(t,2),c=n[0],s=n[1],i=function(e){var t=Object(l.a)(c);t.splice(e,1),s(t)},a=function(e){var t=Object(l.a)(c);t[e].isCompleted=!t[e].isCompleted,s(t)};return Object(u.jsxs)("div",{className:b.a.display,children:[Object(u.jsx)(g,{addTask:function(e){var t=[{text:e}].concat(Object(l.a)(c));s(t)}}),c.reverse().map((function(e,t){return Object(u.jsx)(O,{index:t,task:e,removeTask:i,toggleTask:a},t)}))]})};var T=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{}),Object(u.jsx)(k,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.6d0145be.chunk.js.map