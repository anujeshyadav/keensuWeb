(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[167],{1277:function(e,t,n){"use strict";n.r(t);var a=n(775),r=n(41),o=n(207),i=n(202),l=n(203),s=n(204),c=n(205),u=n(0),d=n.n(u),m=n(688),h=n.n(m),p=n(702),f=n(718),g=(n(48),n(26)),v=n(118),y=n(745),b=n(910),w=n(738),E=n(692),x=n(680),N=n.n(x),O=n(1007),S=n(936),L=Object(O.a)({apiKey:"AIzaSyDXAAHwIaM_8XEHhFtm8K4N6IIq75YZYtk",authDomain:"astrootp-e1732.firebaseapp.com",projectId:"astrootp-e1732",storageBucket:"astrootp-e1732.appspot.com",messagingSenderId:"170824197254",appId:"1:170824197254:web:9fb7abbd086ac920975d07",measurementId:"G-ZTJP3WZCQ3"}),j=Object(S.b)(L);function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(P){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new S(r||[]);return a(i,"_invoke",{value:E(e,n,l)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=c;var d={};function m(){}function h(){}function p(){}var f={};s(f,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==t&&n.call(v,o)&&(f=v);var y=p.prototype=m.prototype=Object.create(f);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,l){var s=u(e[r],e,o);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(d).then((function(e){c.value=e,i(c)}),(function(e){return a("throw",e,i,l)}))}l(s.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function E(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return j()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=u(e,t,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}function x(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=p,a(y,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:h,configurable:!0}),h.displayName=s(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),s(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new w(c(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),s(y,l,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}n.d(t,"default",(function(){return P}));var P=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var l;return Object(i.a)(this,n),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name})},l.handlechange=function(e){e.preventDefault(),l.setState(Object(o.a)({},e.target.name,e.target.value))},l.ConfigureCaptcha=function(){window.recaptchaVerifier=new S.a("sign-in-button",{size:"invisible",callback:function(e){console.log(e),console.log("verified captcha")},defaultCountry:"IN"},j)},l.newConfigureCaptcha=function(){window.recaptchaVerifier=new S.a("sign-in-button",{size:"invisible",callback:function(e){console.log(e),console.log("Verified captcha")},defaultCountry:"IN"},j)},l.onSignInSubmit=function(){l.newConfigureCaptcha();var e=window.recaptchaVerifier,t="+91"+l.state.mobile;console.log("login mobile no:"+t),Object(S.c)(j,t,e).then((function(e){window.confirmationResult=e,console.log("OTP has been sent",e),N()("OTP send Succesfully ")})).catch((function(e){console.log(e.response.data),N()("SMS Not send","Server Error")}))},l.onRegistrationOtpverify=function(e){e.preventDefault();var t=l.state.otp;console.log(t),window.confirmationResult.confirm(t).then(function(){var e=Object(r.a)(C().mark((function e(t){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("User_Verified",t),l.finalstepRes();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(r.a)(C().mark((function e(t){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),document.getElementById("otptext").innerText="OTP Does Not Match, Try again";case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},l.loginHandler=function(){var e=Object(r.a)(C().mark((function e(t){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!l.state.mobile||!l.state.L_Password){e.next=6;break}return e.next=4,g.a.post("/user/loginWithPassword",{mobile:l.state.mobile,password:l.state.L_Password}).then((function(e){var t,n,a,r,o,i;localStorage.setItem("userData",JSON.stringify(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.user)),localStorage.setItem("token",JSON.stringify(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.token)),localStorage.setItem("user_id",JSON.stringify(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(r=a.user)||void 0===r?void 0:r._id)),localStorage.setItem("user_mobile_no",JSON.stringify(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.user)||void 0===i?void 0:i.mobile)),l.props.history.push("/")})).catch((function(e){var t,n,a;console.log(e.response),"Incorrect Password"===(null===(t=e.response)||void 0===t?void 0:t.data.msg)&&N()("Error!","Incorrect Pawword "),"User Doesnot Exist"===(null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.msg)&&(N()("Error!","User doesn't Exist","error"),l.setState({loginText:"Login"}))}));case 4:e.next=7;break;case 6:N()("Please Enter in Input BOX");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l.changeHandler=function(e){e.preventDefault(),l.setState(Object(o.a)({},e.target.name,e.target.value))},l.handleStartOtpSendReg=function(){l.ConfigureCaptcha(),l.setState({RegistrationView:!1}),window.scrollTo(0,0);var e=window.recaptchaVerifier,t="+91"+l.state.mobile;Object(S.c)(j,t,e).then((function(e){N()("otp has been sent"),window.confirmationResult=e})).catch((function(e){console.log(e.response.data),l.setState({Register:"Register"}),N()("OTP Not Send","Some Error Occured Try again")}))},l.finalstepRes=function(){var e=new FormData;e.append("fullname",l.state.fullname),e.append("email",l.state.email),e.append("mobile",l.state.mobile),e.append("gender",l.state.gender),e.append("city",l.state.city),e.append("dob",l.state.dob),e.append("password",l.state.password),e.append("cnfmPassword",l.state.cnfrmpassword),null!==l.state.selectedFile&&e.append("userimg",l.state.selectedFile,l.state.selectedName);var t,n=Object(a.a)(e.values());try{for(n.s();!(t=n.n()).done;){var r=t.value;console.log(r)}}catch(c){n.e(c)}finally{n.f()}var o,i=Object(a.a)(e.keys());try{for(i.s();!(o=i.n()).done;){var s=o.value;console.log(s)}}catch(c){i.e(c)}finally{i.f()}l.state.password===l.state.cnfrmpassword?g.a.post("/user/usersignup",e).then((function(e){console.log(e.data.msg),localStorage.setItem("auth-token",e.data.token),l.setState({otpMsg:e.data.otp}),N()("Success!"," Register Successful Done!","success"),l.props.history.push("/")})).catch((function(e){console.log("already exists"===e.response.data.message),"already exists"===e.response.data.message&&N()("user Already register with same mobile and email")})):N()("Password and Confirm password does not match")},l.submitHandler=function(e){e.preventDefault(),l.setState({Register:"wait"}),l.handleStartOtpSendReg()},l.state={L_Password:"",Register:"Register",RegistrationView:!0,loginText:"Login",fullname:"",email:"",mobile:"",dob:"",gender:"",city:"",userimg:"",selectedName:"",password:"",cnfrmpassword:"",selectedFile:null,otp:"",otpMsg:""},l}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return d.a.createElement(u.Fragment,null,d.a.createElement(h.a,null,d.a.createElement("title",null,"AstroVipra")),d.a.createElement(v.a,{headerTop:"visible"},d.a.createElement("div",{id:"recaptcha-container"}),d.a.createElement("div",{className:"login-register-area pt-100 pb-100"},d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},d.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},d.a.createElement("div",{className:"login-register-wrapper"},d.a.createElement(p.a.Container,{defaultActiveKey:"login"},d.a.createElement(f.a,{variant:"pills",className:"login-register-tab-list"},d.a.createElement(f.a.Item,null,d.a.createElement(f.a.Link,{eventKey:"login"},d.a.createElement("h4",null,"Login"))),d.a.createElement(f.a.Item,null,d.a.createElement(f.a.Link,{eventKey:"register"},d.a.createElement("h4",null,"Register")))),d.a.createElement(p.a.Content,null,d.a.createElement(p.a.Pane,{eventKey:"login"},d.a.createElement("div",{className:"login-form-container"},d.a.createElement("div",{className:"login-register-form"},d.a.createElement("div",{style:{color:"red"},id:"signintext"}),d.a.createElement(y.a,{onSubmit:this.loginHandler},d.a.createElement("div",{id:"sign-in-button"}),d.a.createElement(b.a,null,"Enter Mobile Number *"),d.a.createElement(w.a,{type:"number",name:"mobile",maxLength:"12",required:!0,placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),d.a.createElement(b.a,null,"Enter Password *"),d.a.createElement(w.a,{type:"password",name:"L_Password",required:!0,placeholder:"Enter Your Password",value:this.state.L_Password,onChange:this.changeHandler}),d.a.createElement("div",{className:"button-box"},d.a.createElement("div",{className:"login-toggle-btn"}),d.a.createElement("button",{type:"submit"},d.a.createElement("span",null,this.state.loginText))))))),d.a.createElement(p.a.Pane,{eventKey:"register"},this.state.RegistrationView?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"login-form-container"},d.a.createElement("div",{className:"login-register-form"},d.a.createElement(y.a,{className:"text-center",onSubmit:this.submitHandler,method:"post"},d.a.createElement(w.a,{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname",value:this.state.fullname,onChange:this.changeHandler}),d.a.createElement(w.a,{type:"email",name:"email",required:!0,placeholder:"Enter Your Email",value:this.state.email,onChange:this.changeHandler}),d.a.createElement(w.a,{type:"number",name:"mobile",maxLength:"12",required:!0,placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),d.a.createElement(w.a,{type:"date",name:"dob",required:!0,placeholder:"Date of birth",value:this.state.dob,onChange:this.changeHandler}),d.a.createElement(w.a,{type:"text",name:"city",required:!0,placeholder:"Enter city",value:this.state.city,onChange:this.changeHandler}),d.a.createElement(w.a,{type:"password",name:"password",required:!0,placeholder:"Enter Password",value:this.state.password,onChange:this.changeHandler}),d.a.createElement(w.a,{type:"password",name:"cnfrmpassword",required:!0,placeholder:"Enter Confirm Password",value:this.state.cnfrmpassword,onChange:this.changeHandler}),d.a.createElement(w.a,{required:!0,type:"select",name:"gender",placeholder:"",value:this.state.gender,onChange:this.changeHandler},d.a.createElement("option",null,"Select Gender"),d.a.createElement("option",null,"Male"),d.a.createElement("option",null,"Female")),d.a.createElement(b.a,null,"User Image"),d.a.createElement(w.a,{type:"file",name:"userimg",onChange:this.onChangeHandler}),d.a.createElement("div",{className:"button-box"},d.a.createElement(E.a,{type:"submit"},d.a.createElement("span",null,this.state.Register))))))):d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"login-register-form"},d.a.createElement("div",{style:{color:"red"},id:"otptext"},"Enter Otp Here"),d.a.createElement(y.a,{onSubmit:function(t){return e.onRegistrationOtpverify(t)}},d.a.createElement(w.a,{type:"number",name:"otp",required:!0,placeholder:"Enter otp",value:this.state.otp,onChange:this.changeHandler}),d.a.createElement("div",{className:"button-box"},d.a.createElement("div",{className:"login-toggle-btn"}),d.a.createElement(E.a,{color:"primary",className:"mt-3",type:"submit"},d.a.createElement("span",null,"Verify OTP ")))))))))),d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"login-form-container"},d.a.createElement("div",{className:"login-register-form"},d.a.createElement("div",{className:"button-box"},d.a.createElement("div",{className:"login-toggle-btn"})))))))))))}}]),n}(u.Component)}}]);
//# sourceMappingURL=167.d7d115ac.chunk.js.map