(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),l=a(1),o=a(2),b=a(4),s=a(3),u=a(8),m=(a(14),a(7)),v=function(t){var e=t.tab,a=t.active,n=t.event,r=e.title,i=e.id,l=i===a?"tab__item tab__active":"tab__item",o=i===a?"tab__link--active tab__link":"tab__lind--disabled tab__link";return c.a.createElement("li",{className:l,id:i,onClick:function(){return n(e)}},c.a.createElement("a",{href:"#",className:o},r))},_=function(t){Object(b.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={tabs:Object(m.a)(t.props.tab),activeTab:0},t.selected=function(e){t.setState((function(){return{activeTab:e.id}}))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.tabs,n=e.activeTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container tab"},c.a.createElement("ul",{className:"tab__list"},a.map((function(e){return c.a.createElement(v,{tab:e,event:t.selected,active:n,key:e.id})})))),c.a.createElement("article",{className:"article"},a[n].content))}}]),a}(c.a.Component),f=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}].map((function(t,e){return Object(u.a)({},t,{id:e})})),d=function(t){Object(b.a)(a,t);var e=Object(s.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(_,{tab:f})}}]),a}(c.a.PureComponent);i.a.render(c.a.createElement(d,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.90b8669b.chunk.js.map