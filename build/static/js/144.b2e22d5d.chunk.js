(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[144],{692:function(e,a,t){"use strict";var l=t(7),n=t(14),o=t(208),c=t(20),i=t(0),r=t.n(i),s=t(3),m=t.n(s),d=t(58),u=t.n(d),v=t(36),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],E={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:v.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,c=e.className,i=e.close,s=e.cssModule,m=e.color,d=e.outline,E=e.size,g=e.tag,f=e.innerRef,h=Object(n.a)(e,p);i&&"undefined"===typeof h.children&&(h.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var b="btn"+(d?"-outline":"")+"-"+m,j=Object(v.k)(u()(c,{close:i},i||"btn",i||b,!!E&&"btn-"+E,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),s);h.href&&"button"===g&&(g="a");var y=i?"Close":null;return r.a.createElement(g,Object(l.a)({type:"button"===g&&h.onClick?"button":void 0},h,{className:j,ref:f,onClick:this.onClick,"aria-label":t||y}))},a}(r.a.Component);g.propTypes=E,g.defaultProps={color:"secondary",tag:"button"},a.a=g},938:function(e,a,t){"use strict";t.r(a);var l=t(202),n=t(203),o=t(204),c=t(205),i=t(0),r=t.n(i),s=t(2),m=t(340),d=t(341),u=t(342),v=t(212),p=t.n(v),E=t(26),g=(t(220),t(95)),f=t.n(g),h=t(692),b=(t(118),t(216),t(872)),j=t(819),y=t(680),N=t.n(y),k=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var n,o=e.props;return Object(l.a)(this,t),(n=a.call(this,o)).handlecheckpooja=function(e){localStorage.setItem("poojaviewone",JSON.stringify(e)),null!==localStorage.getItem("user_id")?n.props.history.push("/Poojadetailpage/".concat(null===e||void 0===e?void 0:e._id)):N()("No User Found","User Need to login First")},n.state={listofpooja:[]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/admin/get_adminevent").then((function(a){console.log(a.data.data),e.setState({listofpooja:a.data.data.slice(0,4)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e,a=this;return r.a.createElement("section",{className:"pt-0 pb-0"},r.a.createElement("div",{className:"container mt-2"},r.a.createElement(d.a,null,r.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},r.a.createElement("div",{className:"category-home"},r.a.createElement("section",{className:"pt-0"},r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,""!==this.state.listofpooja?r.a.createElement(r.a.Fragment,null,null===(e=this.state.listofpooja)||void 0===e?void 0:e.map((function(e,t){var l,n;return r.a.createElement(u.a,{key:t,className:"mt-3",md:"3"},r.a.createElement("div",{className:"product-grid8"},r.a.createElement("div",{class:"product-image8 imageofpooja"},r.a.createElement("img",{className:"imagepooja",style:{borderRadius:"10px",width:"100%"},src:null===e||void 0===e?void 0:e.poojaimg,alt:"pooja image"})),r.a.createElement("div",{className:"product-content"},r.a.createElement(d.a,{className:"priceandname"},r.a.createElement(u.a,{lg:"8",md:"8",sm:"8"},r.a.createElement("div",{style:{fontSize:"12px",fontWeight:"300"}},r.a.createElement("b",null,null===e||void 0===e||null===(l=e.pooja_type)||void 0===l||null===(n=l.pooja_name)||void 0===n?void 0:n.slice(0,13)))),r.a.createElement(u.a,{lg:"4",md:"4",sm:"4"},r.a.createElement("div",{style:{fontSize:"15px"},className:" poojanames  justify-content-end"},r.a.createElement("i",{class:"fa fa-inr","aria-hidden":"true"})," ",null===e||void 0===e?void 0:e.pooja_price))),r.a.createElement(d.a,{className:"priceandname"},r.a.createElement(u.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"12px",fontWeight:"200"}},"Mode of Pooja")),r.a.createElement(u.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"10px"},className:" poojanames  justify-content-end"},r.a.createElement("span",{style:{color:"green"}},(null===e||void 0===e?void 0:e.mode)?r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,null===e||void 0===e?void 0:e.mode)):"offline")))),r.a.createElement(d.a,{className:"mt-1"},"online"===(null===e||void 0===e?void 0:e.mode)?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"15px"}},"online"!==(null===e||void 0===e?void 0:e.mode)?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{color:"red",size:20})," ",null===e||void 0===e?void 0:e.fullfill_location):null))),r.a.createElement(u.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("span",{style:{fontSize:"12px"}},!0===(null===e||void 0===e?void 0:e.liveStreaming)?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{fontSize:"12px"},className:" poojanames  justify-content-end"},"LiveStreaming"),r.a.createElement("div",{style:{color:"green"}},"Available")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{fontSize:"12px"},className:" poojanames  justify-content-end"},"LiveStreaming"),r.a.createElement("div",{style:{color:"red"}},"Not Available"))))),r.a.createElement(d.a,null,r.a.createElement(u.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"17px",fontWeight:"500"}},r.a.createElement(b.a,{color:"green",size:16})," ","Duration")),r.a.createElement(u.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"15px"},className:" poojanames  justify-content-end"},null===e||void 0===e?void 0:e.duration))),r.a.createElement(d.a,{className:"mt-1"},r.a.createElement(s.c,{to:"/bookEvent"},r.a.createElement(h.a,{style:{width:"100%"},onClick:function(){return a.handlecheckpooja(e)},color:"success"},"View"))))))}))):null))))))))}}]),t}(r.a.Component),S=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={productList:[]},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/admin/getproductcalegory").then((function(a){e.setState({productList:a.data.data.slice(0,4)})}))}},{key:"render",value:function(){var e=this.state.productList;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("div",{className:"heading mt-40"},r.a.createElement("h2",null,"Newly Launched"),r.a.createElement("img",{src:p.a,alt:""})),r.a.createElement(k,null)),r.a.createElement(m.a,null,r.a.createElement("div",{className:"heading mt-40"},r.a.createElement("h2",null,"Our Trending Products"),r.a.createElement("img",{src:p.a,alt:""})),r.a.createElement(d.a,null,r.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},r.a.createElement("div",{className:"category-home"},r.a.createElement("section",{className:"pt-0"},r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,this.state.productList.length?e.map((function(e,a){var t;return r.a.createElement(u.a,{md:"3",className:"mt-1 mb-1"},r.a.createElement("div",{className:"product-grid8"},r.a.createElement("div",{class:"product-image8"},r.a.createElement(s.c,{to:"/productlist/".concat(null===e||void 0===e?void 0:e._id)},r.a.createElement("img",{style:{borderRadius:"8px"},width:"100%",height:"200px",src:null===e||void 0===e?void 0:e.img,alt:"",className:"Ptd-img"}))),r.a.createElement("div",{className:"product-content"},r.a.createElement("h4",{className:""},r.a.createElement(s.c,null,null===e||void 0===e?void 0:e.name.slice(0,30)," ")),r.a.createElement("div",{className:""},f()(null===e||void 0===e||null===(t=e.desc)||void 0===t?void 0:t.split(0,10))),r.a.createElement(s.c,{to:"/productlist/".concat(null===e||void 0===e?void 0:e._id),className:"all-deals"},"View More",r.a.createElement("i",{class:"fa fa-angle-right icon"})))))})):null))))))))}}]),t}(r.a.Component);a.default=S}}]);
//# sourceMappingURL=144.b2e22d5d.chunk.js.map