(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[157],{1197:function(e,t,a){"use strict";a.r(t);var n=a(202),c=a(203),r=a(204),l=a(205),o=a(0),s=a.n(o),i=a(340),u=a(341),m=a(342),d=a(210),p=a.n(d),h=a(118),f=(a(691),a(26)),g=a(861),b=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={userChatList:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(this.props.match.params.id,JSON.parse(localStorage.getItem("user_id")));f.a.get("/user/getOne_Conversation_Wallet/".concat(t)).then((function(t){console.log("userChatList",t.data.data),!0===t.data.status&&e.setState({userChatList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){this.state.userChatList;return s.a.createElement(h.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(p.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(i.a,null,s.a.createElement(u.a,null,s.a.createElement(m.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"User Chat History"))))))),s.a.createElement("section",{style:{marginTop:"52px"},className:"userchathistory"},s.a.createElement(i.a,null,s.a.createElement("div",{className:"container mt-3"},s.a.createElement(g.a,null)))))}}]),a}(s.a.Component);t.default=b}}]);
//# sourceMappingURL=157.60da0559.chunk.js.map