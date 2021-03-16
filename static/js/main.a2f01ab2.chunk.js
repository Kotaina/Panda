(this.webpackJsonppanda=this.webpackJsonppanda||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(9),i=n.n(r),c=(n(15),n(8)),u=n.n(c),l=n(6),o=n(10),h=n(2),p=n(3),j=n(5),m=n(4),f=(n(17),n(0)),b=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(f.jsx)("h1",{className:"header__title",children:"users list"})}}]),n}(s.a.Component),d=(n(19),function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"search",children:[Object(f.jsx)("input",{className:"search__input",onChange:this.props.inputHandler}),Object(f.jsx)("button",{onClick:this.props.onBtnCancelClick,children:"Reset"})]})}}]),n}(s.a.Component)),O=(n(20),function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this.props.listData.map((function(t,e){return Object(f.jsxs)("li",{id:"item-".concat(t.id),className:"tiny__item el",children:[Object(f.jsx)("span",{className:"el__name",children:t.name}),Object(f.jsx)("span",{className:"el__email",children:t.email})]},e)}));return Object(f.jsxs)("section",{className:"results",children:[Object(f.jsxs)("div",{className:"results__buttons btn",children:[Object(f.jsx)("div",{className:"btn__name",onClick:this.props.sortByName,children:"Name:"}),Object(f.jsx)("div",{className:"btn__email",children:"Email:"})]}),Object(f.jsx)("ul",{className:"results__list item",children:t})]})}}]),n}(s.a.Component)),g=(n(21),function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this,e=this.props.allPagesQty.map((function(e,n){return Object(f.jsx)("li",{className:"pagination__item",id:n,style:{cursor:"pointer"},onClick:t.props.clicky,children:n+1},n)}));return Object(f.jsx)("ul",{className:"pagination",children:e})}}]),n}(s.a.Component)),v=(n(22),function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={fetchedData:[],pageItems:[],currentPage:1,itemsOnPage:50,allPagesQty:[],reservedCopy:[],isFilterStraight:!0},t.componentDidMount=Object(o.a)(u.a.mark((function e(){var n,a,s,r,i,c,o,h;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/comments");case 2:return n=e.sent,e.next=5,n.json();case 5:for(a=e.sent,Object(l.a)(t.state.fetchedData),t.setState((function(){return{fetchedData:a}})),Object(l.a)(t.state.pageItems),s=a.slice(0,t.state.itemsOnPage),t.setState((function(){return{pageItems:s}})),r=t.state.fetchedData.length/t.state.itemsOnPage,i=[],c=0;c<r;c++)i.push(c+1);t.setState((function(){return{allPagesQty:i}})),o=Object(l.a)(t.state.pageItems),h=Object(l.a)(o),t.setState((function(){return{reservedCopy:h}}));case 18:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(n,[{key:"pageHandler",value:function(t){var e,n,a=parseInt(t.target.id)+1,s=Object(l.a)(this.state.fetchedData);1===a?(e=a-1,n=a*this.state.itemsOnPage):(e=a*this.state.itemsOnPage-this.state.itemsOnPage,n=a*this.state.itemsOnPage);var r=s.slice(e,n);this.setState((function(){return{pageItems:r}})),this.setState((function(){return{currentPage:a}}))}},{key:"sortHandler",value:function(){var t=Object(l.a)(this.state.pageItems);if(this.state.isFilterStraight){var e=t.sort((function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}));this.setState((function(){return{pageItems:e}})),this.setState((function(){return{isFilterStraight:!1}}))}else{var n=t.sort((function(t,e){return t.name<e.name?1:t.name>e.name?-1:0}));this.setState((function(){return{pageItems:n}})),this.setState((function(){return{isFilterStraight:!0}}))}}},{key:"inputHandler",value:function(t){var e=t.target.value.toLowerCase(),n=this.state.pageItems.filter((function(t){return t.name.toLowerCase().includes(e)}));this.setState((function(){return{pageItems:[]}})),this.setState((function(){return{pageItems:n}}))}},{key:"btnCancelClickHandler",value:function(){console.log("HEYY");var t=Object(l.a)(this.state.reservedCopy);this.setState((function(){return{pageItems:t}}))}},{key:"render",value:function(){var t=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b,{}),Object(f.jsx)(d,{inputHandler:this.inputHandler.bind(this),onBtnCancelClick:function(){t.btnCancelClickHandler()}}),Object(f.jsx)(O,{listData:this.state.pageItems,allPagesFck:this.state.allPagesQty,sortByName:function(){t.sortHandler()}}),Object(f.jsx)(g,{currentPage:this.state.currentPage,allPagesQty:this.state.allPagesQty,clicky:this.pageHandler.bind(this)})]})}}]),n}(s.a.Component)),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),r(t),i(t)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),y()}],[[23,1,2]]]);
//# sourceMappingURL=main.a2f01ab2.chunk.js.map