(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[135],{1207:function(e,t,a){"use strict";a.r(t);var l=a(202),n=a(203),o=a(204),c=a(205),i=a(0),s=a.n(i),r=a(340),u=a(341),d=a(342),m=a(692),p=a(118),v=a(26),b=(a(680),a(210)),f=a.n(b),h=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSubmitQuestion=function(e){e.preventDefault();n.props.match.params.ticketid;var t={userid:JSON.parse(localStorage.getItem("user_id")),ticketNo:n.state.TicketNumber,desc:n.state.myQuestion};v.a.post("/user/addTicketComment",t).then((function(e){console.log(e.data.data),n.setState({myQuestion:""}),n.componentDidMount()})).catch((function(e){console.log(e.response)}))},n.state={myQuestion:"",data:{},TicketNumber:"",desc:"",subject:"",createdAt:"",astroQuesList:[],userId:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;localStorage.getItem("user_id");v.a.get("/user/getoneTicket/".concat(t)).then((function(t){var a,l,n;console.log(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data);var o=null===t||void 0===t||null===(l=t.data)||void 0===l||null===(n=l.data)||void 0===n?void 0:n.ticketNo;e.setState({TicketNumber:o}),e.setState({data:t.data.data}),v.a.get("/user/CmntByTicketNo/".concat(o)).then((function(t){var a,l;console.log(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data),e.setState({astroQuesList:null===t||void 0===t||null===(l=t.data)||void 0===l?void 0:l.data})})).then((function(e){console.log(e)})),e.setState({fullname:t.data.data.fullname,desc:t.data.data.desc,subject:t.data.data.subject,img:t.data.data.img[0],status:t.data.data.status,userId:t.data.data._id,createdAt:t.data.data.createdAt})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,a,l,n,o,c,i,v=this;return s.a.createElement(p.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(r.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"View Customer Support"))))))),s.a.createElement("section",{className:""},s.a.createElement(r.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"12"},s.a.createElement("div",{className:"support-box"},s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"12"},s.a.createElement("div",{className:"supp-2"},s.a.createElement("h4",null,null===(e=this.state.data)||void 0===e?void 0:e.subject),s.a.createElement("ul",null,s.a.createElement("li",null,"Date/Time: ",s.a.createElement("span",null,null===(t=this.state.data)||void 0===t?void 0:t.createdAt)),s.a.createElement("li",null,"Ticket No: ",s.a.createElement("span",null,null===(a=this.state.data)||void 0===a?void 0:a.ticketNo)),s.a.createElement("li",null,"Status: ",s.a.createElement("span",null,null===(l=this.state.data)||void 0===l?void 0:l.status)),s.a.createElement("li",null,"Description: ",s.a.createElement("span",null,null===(n=this.state.data)||void 0===n?void 0:n.desc))),s.a.createElement("div",null,this.state.astroQuesList.length&&s.a.createElement("div",{className:"container"},this.state.astroQuesList&&(null===(o=this.state.astroQuesList)||void 0===o?void 0:o.map((function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"py-2",key:t},s.a.createElement("p",null,(null===e||void 0===e?void 0:e.desc)&&s.a.createElement(s.a.Fragment,null,"Question: ",s.a.createElement("b",null," ",null===e||void 0===e?void 0:e.desc," ?")),(null===e||void 0===e?void 0:e.reply)&&s.a.createElement(s.a.Fragment,null,"Reply:",s.a.createElement("b",null," ",null===e||void 0===e?void 0:e.reply," ")))))}))))),(null===(c=this.state.data)||void 0===c?void 0:c.reply)&&s.a.createElement("div",{className:"container"},s.a.createElement("p",null,"Reply:"," ",s.a.createElement("span",null,s.a.createElement("b",null,null===(i=this.state.data)||void 0===i?void 0:i.reply)))),s.a.createElement("div",{className:"supp-4"},s.a.createElement("h3",null,"Write Your Commets"),s.a.createElement("form",null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Description*"),s.a.createElement("textarea",{value:this.state.myQuestion,onChange:function(e){return v.setState({myQuestion:e.target.value})},className:"form-control stp",placeholder:"support ticket description..."}))),s.a.createElement(m.a,{onClick:this.handleSubmitQuestion,className:"btn btn-primary"},"Submit"))))))))))))}}]),a}(s.a.Component);t.default=h},692:function(e,t,a){"use strict";var l=a(7),n=a(14),o=a(208),c=a(20),i=a(0),s=a.n(i),r=a(3),u=a.n(r),d=a(58),m=a.n(d),p=a(36),v=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,c=e.className,i=e.close,r=e.cssModule,u=e.color,d=e.outline,b=e.size,f=e.tag,h=e.innerRef,E=Object(n.a)(e,v);i&&"undefined"===typeof E.children&&(E.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(d?"-outline":"")+"-"+u,k=Object(p.k)(m()(c,{close:i},i||"btn",i||g,!!b&&"btn-"+b,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),r);E.href&&"button"===f&&(f="a");var N=i?"Close":null;return s.a.createElement(f,Object(l.a)({type:"button"===f&&E.onClick?"button":void 0},E,{className:k,ref:h,onClick:this.onClick,"aria-label":a||N}))},t}(s.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},t.a=f}}]);
//# sourceMappingURL=135.039ce573.chunk.js.map