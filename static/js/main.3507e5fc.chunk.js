(this.webpackJsonplcotodo=this.webpackJsonplcotodo||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),a=n(4),c=n.n(a),o=(n(13),n(2)),d=n(5),u=n(6),l=n(8),r=n(7),h=n.p+"static/media/my-logo.e34ef385.png",j=(n(14),n(0)),b=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).state={newItem:"",list:[]},i}return Object(u.a)(n,[{key:"addItem",value:function(t){if(""!==t){var e={id:Date.now(),value:t,isDone:!1},n=Object(o.a)(this.state.list);n.push(e),this.setState({list:n,newItem:""})}}},{key:"deleteItem",value:function(t){var e=Object(o.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"updateInput",value:function(t){this.setState({newItem:t})}},{key:"handleCheck",value:function(t){var e=Object(o.a)(this.state.list);!1===e[e.findIndex((function(e){return e.id===t}))].isDone?e[e.findIndex((function(e){return e.id===t}))].isDone=!0:e[e.findIndex((function(e){return e.id===t}))].isDone=!1,this.setState({list:e})}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:h,width:"100",height:"100",className:"logo"}),Object(j.jsx)("h1",{className:"app-title",children:"TODO APP"}),Object(j.jsxs)("div",{className:"container",children:["add an item...",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"input-text",placeholder:"write a todo",required:!0,value:this.state.newItem,onChange:function(e){return t.updateInput(e.target.value)}}),Object(j.jsx)("button",{className:"add-btn",onClick:function(){return t.addItem(t.state.newItem)},disabled:!this.state.newItem.length,children:"add todo"}),Object(j.jsx)("div",{className:"list",children:Object(j.jsx)("ul",{children:this.state.list.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{type:"checkbox",name:"isDone",checked:e.isDone,onChange:function(){return t.handleCheck(e.id)}}),e.value,Object(j.jsx)("button",{className:"btn",onClick:function(){return t.deleteItem(e.id)},children:"delete"})]},e.id)}))})})]})]})}}]),n}(s.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),a(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.3507e5fc.chunk.js.map