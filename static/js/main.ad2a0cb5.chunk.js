(this["webpackJsonppoc-tags"]=this["webpackJsonppoc-tags"]||[]).push([[0],[,,,,,,function(e,t,r){e.exports={block:"ControllerItem_block__1WHjF",title:"ControllerItem_title__1bT7Z",left:"ControllerItem_left__34PHa",right:"ControllerItem_right__2eqRu",tagsHeading:"ControllerItem_tagsHeading__2lWv2"}},,,function(e,t,r){e.exports={block:"Tag_block__5qBnU",content:"Tag_content__2_ZQ0",close:"Tag_close__339Yh"}},,,function(e,t,r){e.exports={block:"TagsList_block__1iSCA"}},function(e,t,r){e.exports={block:"SuggestedControllerTags_block__2eOL1"}},function(e,t,r){e.exports={block:"ControllerForm_block__4kv8-"}},,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(2),o=r.n(c),l=r(11),a=r.n(l),i=(r(20),r(3)),u=r(5),s=r(4),d=r(1);function j(e,t){if("CREATE_GROUP"===t.type){var r,n=e.groups,c=n[t.parent_id],o={id:t.id,title:t.title,parent_id:t.parent_id,children:[],controllers:[]};return Object(d.a)(Object(d.a)({},e),{},{groups:Object(d.a)(Object(d.a)({},n),{},(r={},Object(u.a)(r,t.parent_id,Object(d.a)(Object(d.a)({},c),{},{children:[].concat(Object(s.a)(c.children),[t.id])})),Object(u.a)(r,t.id,o),r))})}if("CREATE_CONTROLLER"===t.type){var l=e.controllers,a=e.groups,i=a[t.group_id];return console.log(i),Object(d.a)(Object(d.a)({},e),{},{controllers:Object(d.a)(Object(d.a)({},l),{},Object(u.a)({},t.id,{id:t.id,title:t.title,group_id:t.group_id,tags:[]})),groups:Object(d.a)(Object(d.a)({},a),{},Object(u.a)({},i.id,Object(d.a)(Object(d.a)({},i),{},{controllers:[].concat(Object(s.a)(i.controllers),[t.id])})))})}if("CREATE_TAG"===t.type){var j=t.title,b=t.controller_id,O=t.group_id,p=e.controllers[b];return Object(d.a)(Object(d.a)({},e),{},{controllers:Object(d.a)(Object(d.a)({},e.controllers),{},Object(u.a)({},b,Object(d.a)(Object(d.a)({},p),{},{tags:[].concat(Object(s.a)(p.tags),[{title:j,controller_id:b,group_id:O}])})))})}if("REMOVE_TAG"===t.type){var f=t.title,g=t.controller_id,_=e.controllers[g];return Object(d.a)(Object(d.a)({},e),{},{controllers:Object(d.a)(Object(d.a)({},e.controllers),{},Object(u.a)({},g,Object(d.a)(Object(d.a)({},_),{},{tags:_.tags.filter((function(e){return e.title!==f}))})))})}return"SELECT_GROUP"===t.type?Object(d.a)(Object(d.a)({},e),{},{selectedGroupId:t.group_id}):e}var b={selectedGroupId:"group_id",groups:{group_id:{id:"group_id",children:[],title:"Top group",parent_id:null,controllers:[]}},controllers:{}},O=Object(c.createContext)();function p(e){var t=e.children,r=Object(c.useReducer)(j,b);return Object(n.jsx)(O.Provider,{value:r,children:t})}function f(){return Object(c.useContext)(O)}function g(e){return Object(c.useMemo)((function(){return function(e){var t=e.map((function(e){return e.tags.map((function(e){return e.title}))})).reduce((function(e,t){return t.forEach((function(t){return e.add(t)})),e}),new Set);return Object(s.a)(t)}(e)}),[e])}var _=r(9),h=r.n(_);function v(e){var t=e.children,r=e.onClick,c=e.onClose,o=e.background;return Object(n.jsxs)("span",{className:h.a.block,style:{background:o},children:[Object(n.jsx)("span",{className:h.a.content,onClick:function(){return r&&r()},children:t}),c&&Object(n.jsx)("span",{className:h.a.close,onClick:function(){return c()}})]})}var x=r(12),m=r.n(x),C=function(e){return e};function k(e,t,r){for(var n=[],c=e;;){var o=t[c];if(n.push(o),!o.parent_id)break;c=o.parent_id}return n.map(r)}var T=function(){return Math.floor(1e7*Math.random())},E=function e(t,r){var n=t[r],c=n.children.map((function(r){return e(t,r)})).reduce((function(e,t){return[].concat(Object(s.a)(e),Object(s.a)(t))}),[]);return[].concat(Object(s.a)(n.controllers),Object(s.a)(c))},I=function(e){var t=e.groups,r=e.selectedGroupId,n=e.controllers;return E(t,r).map((function(e){return n[e]}))},R=function(e){return e.id};function y(e){var t=e.tags,r=e.onClose,c=f(),o=Object(i.a)(c,1)[0].selectedGroupId,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=f(),r=Object(i.a)(t,1)[0],n=r.selectedGroupId,c=r.groups;return k(n,c,e)}(R);return Object(n.jsx)("div",{className:m.a.block,children:t.map((function(e){var t=function(e,t,r){var n=e.indexOf(t),c=e.indexOf(r);if(-1===t)throw new Error("groupId1 is not in the ancestor path");if(-1===r)throw new Error("groupId2 is not in the ancestor path");return n===c?0:n>c?1:-1}(l,o,e.group_id)>=0?function(){return r(e)}:null;return Object(n.jsx)(v,{onClose:t,background:"crimson",children:e.title},e.title)}))})}function G(e){var t=e.canCreate,r=e.onCreate,o=Object(c.useRef)();return Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=o.current.value;t(n)?alert("Sorry such tag already exists on the controller"):r(n)},children:Object(n.jsx)("input",{type:"text",ref:o,placeholder:"assign tag to the controller"})})}var A=r(13),N=r.n(A);function S(e){var t=e.onSelect,r=e.tags,c=e.availableTagTitles,o=r.map((function(e){return e.title}));return Object(n.jsx)("div",{className:N.a.block,children:c.filter((function(e){return!o.find((function(t){return t===e}))})).map((function(e){return Object(n.jsx)(v,{onClick:function(){return t(e)},background:"bisque",children:e},e)}))})}var L=r(6),w=r.n(L);function M(e){var t=e.controller,r=e.availableTagTitles,c=f(),o=Object(i.a)(c,2),l=o[0],a=l.selectedGroupId,u=l.groups,s=o[1],d=u[t.group_id],j=function(e){var r,n;s((r=e,n=t.id,{type:"CREATE_TAG",title:r,controller_id:n,group_id:a}))};return Object(n.jsxs)("div",{className:w.a.block,children:[Object(n.jsxs)("h4",{className:w.a.title,children:[t.title," - "," ",Object(n.jsx)("i",{children:d.title})]}),Object(n.jsxs)("div",{className:w.a.left,children:[Object(n.jsx)("h5",{className:w.a.tagsHeading,children:"Assigned tags:"}),Object(n.jsx)(y,{tags:t.tags,onClose:function(e){var r;s((r=e.title,{type:"REMOVE_TAG",controller_id:t.id,title:r}))}})]}),Object(n.jsxs)("div",{className:w.a.right,children:[Object(n.jsx)("h5",{className:w.a.tagsHeading,children:"Suggested tags:"}),Object(n.jsx)(S,{onSelect:j,tags:t.tags,availableTagTitles:r}),Object(n.jsx)(G,{canCreate:function(e){return t.tags.find((function(t){return t.title===e}))},onCreate:j})]})]},t.id)}function H(e){var t=e.controllers,r=g(t);return Object(n.jsx)("div",{children:t.map((function(e){return Object(n.jsx)(M,{controller:e,availableTagTitles:r},e.id)}))})}function P(){var e=f(),t=Object(i.a)(e,1)[0].groups,r=Object.values(t).find((function(e){return!e.parent_id}));return Object(n.jsx)("ul",{children:Object(n.jsx)(U,{groupId:r.id})})}function U(e){var t=e.groupId,r=Object(c.useRef)(),o=f(),l=Object(i.a)(o,2),a=l[0].groups,u=l[1],s=a[t];return Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),u(function(e){return{type:"SELECT_GROUP",group_id:e}}(t))},title:"Click to select",children:s.title}),Object(n.jsx)("form",{style:{marginLeft:"10px"},onSubmit:function(e){var n,c;e.preventDefault(),u((n=T(),c=r.current.value,{type:"CREATE_GROUP",id:n,title:c,parent_id:t}))},children:Object(n.jsx)("input",{placeholder:"Add subgroup",ref:r})})]}),!!s.children.length&&Object(n.jsx)("ul",{children:s.children.map((function(e){return Object(n.jsx)(U,{groupId:e},e)}))})]})}var D=r(14),q=r.n(D);function B(){var e=f(),t=Object(i.a)(e,2),r=t[0].selectedGroupId,o=t[1],l=Object(c.useRef)();return Object(n.jsx)("form",{className:q.a.block,onSubmit:function(e){var t,n;e.preventDefault(),o((t=T(),n=l.current.value,{type:"CREATE_CONTROLLER",id:t,title:n,group_id:r}))},children:Object(n.jsx)("input",{type:"text",ref:l,placeholder:"Add controller to the selected group"})})}var F=function(){var e=f(),t=Object(i.a)(e,1)[0],r=t.groups[t.selectedGroupId],o=function(){var e=f(),t=Object(i.a)(e,1)[0],r=t.selectedGroupId,n=t.groups,o=t.controllers;return Object(c.useMemo)((function(){return I({selectedGroupId:r,groups:n,controllers:o})}),[r,n,o])}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("h1",{children:["Selected group: ",r.title]}),Object(n.jsx)(P,{}),Object(n.jsx)("h2",{children:"Available Controllers"}),Object(n.jsx)(H,{controllers:o}),Object(n.jsx)("hr",{}),Object(n.jsx)(B,{})]})};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(p,{children:Object(n.jsx)(F,{})})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ad2a0cb5.chunk.js.map