(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[135],{1206:function(e,t,a){"use strict";a.r(t);var n=a(207),l=a(202),o=a(203),c=a(204),r=a(205),s=a(0),i=a.n(s),u=a(340),d=a(341),m=a(342),b=a(692),p=a(118),v=a(26),h=a(680),f=a.n(h),E=a(845),g=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e,t){e.preventDefault();o.props.match.params.id;var a=JSON.parse(localStorage.getItem("user_id"));console.log(o.state.subject),console.log(o.state.desc),console.log(a);var n={userid:a,subject:o.state.subject,desc:o.state.desc};v.a.post("/user/addTicket",n).then((function(e){console.log("@@@@@",e.data.data),o.setState({subject:"",desc:""}),window.location.reload("/customersupport"),window.location.reload()})).catch((function(e){f()("Error!","You clicked the button!","error"),console.log(e)}))},o.handleChange=function(e){o.setState({subject:e.target.value,desc:e.target.value})},o.state={desc:"",subject:"",userid:""},o}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,{headerTop:"visible"},i.a.createElement("section",{className:""},i.a.createElement(u.a,null,i.a.createElement("div",{className:"spt-1"},i.a.createElement(d.a,null,i.a.createElement(m.a,{lg:"12"},i.a.createElement("div",{className:"wal-amt"},i.a.createElement("h3",null,"Create Ticket "),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(m.a,{md:"12"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Select "),i.a.createElement(E.a.Select,{"aria-label":"Default select example",name:"subject",value:this.state.subject,onChange:this.changeHandler},i.a.createElement("option",null,"--Select --"),i.a.createElement("option",{value:"Previous Order"},"Previous Order"),i.a.createElement("option",{value:"Transaction Related"},"Transaction Related"),i.a.createElement("option",{value:"Technical Issue"},"Technical Issue"),i.a.createElement("option",{value:"Astrologer Related"},"Astrologer Related"),i.a.createElement("option",{value:"Live event related"},"Live event related"),i.a.createElement("option",{value:"Offers & Coupons"},"Offers & Coupons"),i.a.createElement("option",{value:"General FAQs"},"General FAQs"),i.a.createElement("option",{value:"Escalate the issue"},"Escalate the issue"),i.a.createElement("option",{value:"AstroMall Related"},"AstroMall Related"),i.a.createElement("option",{value:"Any Other Reason"},"Any Other Reason")))),i.a.createElement(m.a,{md:"12"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Description*"),i.a.createElement("textarea",{className:"form-control",placeholder:"support ticket description...",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),i.a.createElement(m.a,{md:"12",className:"mt-3"},i.a.createElement(b.a,{type:"submit",className:"btn btn-warning"},"Submit")))))))))))}}]),a}(i.a.Component);t.default=g},692:function(e,t,a){"use strict";var n=a(7),l=a(14),o=a(208),c=a(20),r=a(0),s=a.n(r),i=a(3),u=a.n(i),d=a(58),m=a.n(d),b=a(36),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],v={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,c=e.className,r=e.close,i=e.cssModule,u=e.color,d=e.outline,v=e.size,h=e.tag,f=e.innerRef,E=Object(l.a)(e,p);r&&"undefined"===typeof E.children&&(E.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(d?"-outline":"")+"-"+u,k=Object(b.k)(m()(c,{close:r},r||"btn",r||g,!!v&&"btn-"+v,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),i);E.href&&"button"===h&&(h="a");var j=r?"Close":null;return s.a.createElement(h,Object(n.a)({type:"button"===h&&E.onClick?"button":void 0},E,{className:k,ref:f,onClick:this.onClick,"aria-label":a||j}))},t}(s.a.Component);h.propTypes=v,h.defaultProps={color:"secondary",tag:"button"},t.a=h}}]);
//# sourceMappingURL=135.3f6f5ae1.chunk.js.map