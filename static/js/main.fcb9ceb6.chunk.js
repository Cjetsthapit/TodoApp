(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{25:function(e,t,n){e.exports={navbar:"Header_navbar__Egm1f",active:"Header_active__htlWR"}},33:function(e,t,n){e.exports={todo:"Todo_todo__14MkB"}},34:function(e,t,n){e.exports={inputform:"InputForm_inputform__171ys"}},39:function(e,t,n){e.exports={display:"Display_display__3514C"}},42:function(e,t,n){e.exports={tracker:"Tracker_tracker__2lwq9"}},48:function(e,t,n){},49:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(15),i=n.n(s),o=(n(48),n(49),n(25)),r=n.n(o),l=n(14),d=n(62),j=n(61),b=n(64),u=n(4),x=function(e){return Object(u.jsx)(d.a,{bg:"dark",variant:"dark",expand:"md",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d.a.Brand,{style:{color:"white",textDecoration:"none"},children:"App"}),Object(u.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(d.a.Collapse,{id:"basic-navbar-nav",className:r.a.navbar,children:Object(u.jsxs)(b.a,{className:"ml-auto",children:[Object(u.jsx)(b.a.Link,{children:Object(u.jsx)(l.b,{to:"/",exact:!0,activeClassName:r.a.active,children:"Todo"})}),Object(u.jsx)(b.a.Link,{children:Object(u.jsx)(l.b,{to:"/tictac",activeClassName:r.a.active,children:"TicTac"})})]})})]})})},p=n(26),h=n(22),O=n(39),m=n.n(O),v=n(33),f=n.n(v),k=n(40),g=n(41),T=function(e){var t=e.task,n=e.removeTask,a=e.index,c=e.toggleTask;return Object(u.jsxs)("div",{className:f.a.todo,style:{textDecoration:t.isCompleted?"line-through":"",color:t.isCompleted?"rgb(177, 172, 172)":""},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:f.a.tick,type:"checkbox",checked:t.isCompleted,value:t.isCompleted,onChange:function(){return c(a)}}),t.text]}),Object(u.jsx)("button",{onClick:function(){return n(a)},children:Object(u.jsx)(k.a,{icon:g.a})})]})},C=n(34),_=n.n(C),y=n(63),N=function(e){var t=e.addTask,n=Object(a.useState)(""),c=Object(h.a)(n,2),s=c[0],i=c[1];return Object(u.jsx)("div",{className:_.a.inputform,children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&(t(s),i(""))},className:_.a.input,children:[Object(u.jsx)(y.a.Control,{size:"lg",type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("br",{})]})})},w=n(42),D=n.n(w),F=function(e){return Object(u.jsxs)("div",{className:D.a.tracker,children:[Object(u.jsxs)("div",{children:["Total= ",e.totalTasks]}),Object(u.jsxs)("div",{children:["Completed= ",e.doneTasks]}),Object(u.jsxs)("div",{children:["Remaining= ",e.totalTasks-e.doneTasks]})]})},S=function(e){var t=Object(a.useState)([{text:"Hello World",isCompleted:!1},{text:"Type your thoughts",isCompleted:!1},{text:"They will be stored permanently",isCompleted:!1}]),n=Object(h.a)(t,2),c=n[0],s=n[1],i=function(e){var t=Object(p.a)(c);t.splice(e,1),s(t)},o=function(e){var t=Object(p.a)(c);t[e].isCompleted=!t[e].isCompleted,s(t)};return Object(u.jsxs)("div",{className:m.a.display,children:[Object(u.jsx)(N,{addTask:function(e){var t=[{text:e}].concat(Object(p.a)(c));s(t)}}),Object(u.jsx)(F,{totalTasks:c.length,doneTasks:c.filter((function(e){return e.isCompleted})).length}),c.map((function(e,t){return Object(u.jsx)(T,{index:t,task:e,removeTask:i,toggleTask:o},t)}))]})},B=n(7);var L=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{}),Object(u.jsx)(B.a,{exact:!0,path:"/",component:S})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(L,{})})}),document.getElementById("root")),H()}},[[59,1,2]]]);
//# sourceMappingURL=main.fcb9ceb6.chunk.js.map