(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[101],{1058:function(e,a,t){e.exports=t.p+"static/media/tilak.7908f7b9.png"},1285:function(e,a,t){"use strict";t.r(a);var n=t(207),l=t(202),c=t(203),s=t(204),r=t(205),o=t(0),i=t.n(o),d=t(22),m=(t(740),function(){var e=Object(o.useState)(0),a=Object(d.a)(e,2),t=a[0],n=a[1],l=Object(o.useState)(!1),c=Object(d.a)(l,2),s=c[0],r=c[1];return Object(o.useEffect)((function(){var e;return s?e=setInterval((function(){n((function(e){return e+10}))}),10):s||clearInterval(e),function(){return clearInterval(e)}}),[s]),i.a.createElement("div",{className:"stopwatch"},i.a.createElement("div",{className:"numbers"},i.a.createElement("span",null,("0"+Math.floor(t/6e4%60)).slice(-2),":"),i.a.createElement("span",null,("0"+Math.floor(t/1e3%60)).slice(-2),":"),i.a.createElement("span",null,("0"+t/10%100).slice(-2))),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{onClick:function(){return r(!0)}},"Start"),i.a.createElement("button",{onClick:function(){return r(!1)}},"Stop"),i.a.createElement("button",{onClick:function(){return n(0)}},"Reset")))}),u=t(340),v=t(341),g=t(342),p=(t(1058),t(118)),f=t(680),E=t.n(f),h=t(26),b=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("astroId"));h.a.get("/admin/getoneAstro/".concat(e)).then((function(e){var a,t,l,s,r;console.log(e.data),c.setState((r={fullname:e.data.data.fullname,all_skills:e.data.data.all_skills,language:e.data.data.language,img:e.data.data.img[0],status:e.data.status},Object(n.a)(r,"status",null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.status),Object(n.a)(r,"astroId",null===e||void 0===e||null===(l=e.data)||void 0===l||null===(s=l.data)||void 0===s?void 0:s._id),r))})).catch((function(e){console.log(e)}))},c.submitHandler=function(e,a,t,n){e.preventDefault();var l=c.props.match.params.id,s=JSON.parse(localStorage.getItem("user_id")),r={astroId:l,astroid:a,roomId:l,roomid:n,userid:s,msg:c.state.msg};h.a.post("/user/addchat/".concat(s),r).then((function(e){var a,t,n,l,s,r,o,i;(console.log("@@@@@",null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.roomid),c.setState({msg:""}),c.setState({roomid:null===e||void 0===e||null===(n=e.data)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.roomid}),void 0!==(null===e||void 0===e||null===(s=e.data)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.roomid))&&h.a.get("/user/allchatwithuser/"+(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.roomid)).then((function(e){var a;console.log("ROOMID",e.data.data),c.setState({msg:"",chatMsgList:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data})})).catch((function(e){console.log(e)}));E()("Success!","Submitted SuccessFull!","success")})).catch((function(e){E()("Error!","You clicked the button!","error"),console.log(e)}))},c.handleChange=function(e){c.setState({msg:e.target.value})},c.state={astroid:"",msg:"",chatMsgList:[],userId:"",roomid:""},c}return Object(c.a)(t,[{key:"render",value:function(){var e,a=this,t=this.state.chatMsgList;return i.a.createElement(p.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{backgroundColor:"#FFD59E",width:"100%",padding:"70px 0px",backgroundSize:"cover"}},i.a.createElement(u.a,null,i.a.createElement(v.a,null,i.a.createElement(g.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Chat With Best Astrologers"))))))),i.a.createElement("section",null,i.a.createElement(u.a,null,i.a.createElement("div",{className:""},i.a.createElement("div",{className:""},i.a.createElement("div",{className:"col-md-12 col-xl-12 chat"},i.a.createElement("div",{className:"card cardchat",style:{backgroundColor:"#f0f0f0",width:"100%"}},i.a.createElement("div",{className:"card-header msg_head"},i.a.createElement("div",{className:"d-flex "},i.a.createElement("div",{className:"img_cont"},i.a.createElement("img",{src:null===(e=this.state)||void 0===e?void 0:e.img,alt:"",className:"rounded-circle user_st"}),i.a.createElement("span",{className:"online_icon"})),i.a.createElement("div",{className:"user_info"},i.a.createElement("span",null,"Tilak"),i.a.createElement(m,null),i.a.createElement("p",null,"typing....")))),i.a.createElement("div",null,t.length>0?t.map((function(e,a){return i.a.createElement("div",null,i.a.createElement("div",{className:"card-body msg_card_body"},i.a.createElement("div",{className:"d-flex justify-content-start mb-4"},i.a.createElement("div",{className:"msg_cotainer"},e.msg_reply,i.a.createElement("span",{className:"msg_time"},"8:40 AM, Today")))),i.a.createElement("div",{className:"card-body msg_card_body"},i.a.createElement("div",{className:"d-flex justify-content-end mb-4"},i.a.createElement("div",{className:"msg_cotainer_send"},e.msg,i.a.createElement("span",{className:"msg_time_send"},"8:55 AM, Today")))))})):""),i.a.createElement("div",{className:"card-footer"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-append"},i.a.createElement("span",{className:"input-group-text attach_btn"},i.a.createElement("i",{class:"fa fa-paperclip","aria-hidden":"true"}))),i.a.createElement("textarea",{name:!0,className:"form-control type_msg",placeholder:"Type your message...",onChange:function(e){a.handleChange(e)},value:this.state.msg,defaultValue:""}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("span",{className:"input-group-text send_btn",onClick:function(e){return a.submitHandler(e,a.state.astroId,a.state.userId,a.state.roomid)}},i.a.createElement("i",{class:"fa fa-location-arrow","aria-hidden":"true"}))))))))))))}}]),t}(i.a.Component);a.default=b},740:function(e,a,t){}}]);
//# sourceMappingURL=101.3b0adcf9.chunk.js.map