(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[114,142],{1231:function(e,t,a){"use strict";a.r(t);var n=a(202),l=a(203),c=a(204),o=a(205),r=a(0),i=a.n(r),u=a(2),s=a(340),m=a(341),d=a(342),p=a(118),v=(a(95),a(859)),f=a(26),E=a(210),g=a.n(E),h=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={productList:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(t),f.a.get("/user/productbycategory/".concat(t)).then((function(t){console.log("productbycategory",t.data.data),e.setState({productList:t.data.data}),t.data.status})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.productList;return i.a.createElement(p.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(g.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(s.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Online-puja Products"),i.a.createElement("h3",null,"Shop Best Online Astrology Products And Services"))))))),i.a.createElement("section",{className:"ptb-0"},i.a.createElement(s.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"12"},i.a.createElement("div",{className:"pt-10 pb-50"},i.a.createElement(v.default,null),i.a.createElement(m.a,null,e.length?e.map((function(e,t){var a,n,l,c;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{md:"3",key:t},i.a.createElement("div",{className:"po-box text-center"},i.a.createElement(m.a,null,i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"po-1 text-center"},i.a.createElement("img",{src:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a.image,alt:"pooja",width:"250px",height:"200px"}))),i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"po-1 mt-1 mb-1 text-center"},i.a.createElement("h3",null,null===(n=e.product)||void 0===n?void 0:n.title),i.a.createElement("p",null,"Price:"," ",i.a.createElement("b",null," ",(null===e||void 0===e?void 0:e.price)?null===e||void 0===e||null===(l=e.product)||void 0===l?void 0:l.price:0," "),"Rs/-"),i.a.createElement(u.c,{to:"/poojadetail/"+(null===e||void 0===e||null===(c=e.product)||void 0===c?void 0:c._id),className:"pto-l text-center"},"Book Now")))))))})):null))),i.a.createElement(d.a,{lg:"6"})))))}}]),a}(i.a.Component);t.default=h},748:function(e,t,a){"use strict";t.a=function(e){var t=Object.create(null);return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}},859:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(779);t.default=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"st-search"},l.a.createElement(c.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,t){console.log(e,t)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){console.log("Focused")},autoFocus:!0,formatResult:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),l.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}}}]);
//# sourceMappingURL=114.6a66d7d8.chunk.js.map