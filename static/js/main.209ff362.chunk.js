(this.webpackJsonppanda=this.webpackJsonppanda||[]).push([[0],{56:function(t,e,n){},58:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),r=n(21),c=n.n(r),i=(n(56),n(16)),o=n.n(i),l=n(8),u=n(22),h=n(3),m=n(4),j=n(6),p=n(5),d=(n(58),n(1)),b=function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(d.jsx)("h1",{className:"header__title",children:"users list"})}}]),n}(s.a.Component),f=(n(60),function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("input",{className:"search__input",onChange:this.props.inputHandler}),Object(d.jsx)("button",{onClick:this.props.onBtnCancelClick,children:"Reset"})]})}}]),n}(s.a.Component)),g=n(51),O=(n(61),Object(g.a)((function(t){var e=t.listData.map((function(t,e){var n=700*Math.random(),a=270*Math.random(),s=85*Math.random()*13,r={":hover":{backgroundColor:"rgb(".concat(n,",").concat(a,",").concat(s,")")}};return Object(d.jsxs)("li",{id:"item-".concat(t.id),style:r,className:"tiny__item el",children:[Object(d.jsx)("span",{className:"el__name",children:t.name}),Object(d.jsx)("span",{className:"el__email",children:t.email})]},e)}));return Object(d.jsxs)("section",{className:"results",children:[Object(d.jsxs)("div",{className:"results__buttons btn",children:[Object(d.jsx)("div",{className:"btn__name",onClick:t.sortByName,children:"Name:"}),Object(d.jsx)("div",{className:"btn__email",children:"Email:"})]}),Object(d.jsx)("ul",{className:"results__list item",children:e})]})}))),v=(n(73),function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var t=this,e=this.props.allPagesQty.map((function(e,n){return Object(d.jsx)("li",{className:"pagination__item",id:n,style:{cursor:"pointer"},onClick:t.props.clicky,children:n+1},n)}));return Object(d.jsx)("ul",{className:"pagination",children:e})}}]),n}(s.a.Component)),y=(n(74),function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={fetchedData:[],pageItems:[],currentPage:1,itemsOnPage:50,allPagesQty:[],reservedCopy:[],isFilterStraight:!0},t.componentDidMount=Object(u.a)(o.a.mark((function e(){var n,a,s,r,c,i,u,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/comments");case 2:return n=e.sent,e.next=5,n.json();case 5:for(a=e.sent,Object(l.a)(t.state.fetchedData),t.setState((function(){return{fetchedData:a}})),Object(l.a)(t.state.pageItems),s=a.slice(0,t.state.itemsOnPage),t.setState((function(){return{pageItems:s}})),r=t.state.fetchedData.length/t.state.itemsOnPage,c=[],i=0;i<r;i++)c.push(i+1);t.setState((function(){return{allPagesQty:c}})),u=Object(l.a)(t.state.pageItems),h=Object(l.a)(u),t.setState((function(){return{reservedCopy:h}}));case 18:case"end":return e.stop()}}),e)}))),t}return Object(m.a)(n,[{key:"pageHandler",value:function(t){var e,n,a=parseInt(t.target.id)+1,s=Object(l.a)(this.state.fetchedData);1===a?(e=a-1,n=a*this.state.itemsOnPage):(e=a*this.state.itemsOnPage-this.state.itemsOnPage,n=a*this.state.itemsOnPage);var r=s.slice(e,n);this.setState((function(){return{pageItems:r}})),this.setState((function(){return{currentPage:a}}))}},{key:"sortHandler",value:function(){var t=Object(l.a)(this.state.pageItems);if(this.state.isFilterStraight){var e=t.sort((function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}));this.setState((function(){return{pageItems:e}})),this.setState((function(){return{isFilterStraight:!1}}))}else{var n=t.sort((function(t,e){return t.name<e.name?1:t.name>e.name?-1:0}));this.setState((function(){return{pageItems:n}})),this.setState((function(){return{isFilterStraight:!0}}))}}},{key:"inputHandler",value:function(t){var e=t.target.value.toLowerCase(),n=this.state.pageItems.filter((function(t){return t.name.toLowerCase().includes(e)}));this.setState((function(){return{pageItems:[]}})),this.setState((function(){return{pageItems:n}}))}},{key:"btnCancelClickHandler",value:function(){console.log("HEYY");var t=Object(l.a)(this.state.reservedCopy);this.setState((function(){return{pageItems:t}}))}},{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(f,{inputHandler:this.inputHandler.bind(this),onBtnCancelClick:function(){t.btnCancelClickHandler()}}),Object(d.jsx)(O,{listData:this.state.pageItems,allPagesFck:this.state.allPagesQty,sortByName:function(){t.sortHandler()}}),Object(d.jsx)(v,{currentPage:this.state.currentPage,allPagesQty:this.state.allPagesQty,clicky:this.pageHandler.bind(this)})]})}}]),n}(s.a.Component)),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),r(t),c(t)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),C()}},[[75,1,2]]]);
//# sourceMappingURL=main.209ff362.chunk.js.map