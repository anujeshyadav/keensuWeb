(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[59],{1048:function(e,t,a){},1049:function(e,t,a){e.exports=function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var t=window.Element.prototype.matches,a=function(e,t){return e.closest(t)},n=function(e,t){return new window.Event(e,t)},r=function(e,t){return new window.CustomEvent(e,t)};!function(){if(window.Element.prototype.matches||(t=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(a=function(e,a){if(!document.documentElement.contains(e))return null;do{if(t.call(e,a))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.Event&&"function"===typeof window.Event||(n=function(e,t){t=t||{};var a=document.createEvent("Event");return a.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),a}),"function"!==typeof window.CustomEvent){var e=window.Event.prototype.preventDefault;r=function(t,a){var n=document.createEvent("CustomEvent");return a=a||{bubbles:!1,cancelable:!1,detail:null},n.initCustomEvent(t,a.bubbles,a.cancelable,a.detail),n.preventDefault=function(){this.cancelable&&(e.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},n}}}();var s="active",l="linear",i="dstepper-block",o="dstepper-none",c="fade",m="vertical",u=function(e,t,a,n){var l=e.bsStepper;if(!l._steps[t].classList.contains(s)&&!l._stepsContents[t].classList.contains(s)){var o=r("show.bs-stepper",{cancelable:!0,detail:{from:l._currentIndex,to:t,indexStep:t}});e.dispatchEvent(o);var c=l._steps.filter((function(e){return e.classList.contains(s)})),u=l._stepsContents.filter((function(e){return e.classList.contains(s)}));o.defaultPrevented||(c.length&&c[0].classList.remove(s),u.length&&(u[0].classList.remove(s),e.classList.contains(m)||l.options.animation||u[0].classList.remove(i)),p(e,l._steps[t],l._steps,a),d(e,l._stepsContents[t],l._stepsContents,u,n))}},p=function(e,t,a,n){a.forEach((function(t){var a=t.querySelector(n.selectors.trigger);a.setAttribute("aria-selected","false"),e.classList.contains(l)&&a.setAttribute("disabled","disabled")})),t.classList.add(s);var r=t.querySelector(n.selectors.trigger);r.setAttribute("aria-selected","true"),e.classList.contains(l)&&r.removeAttribute("disabled")},d=function(e,t,a,n,l){var m=e.bsStepper,u=a.indexOf(t),p=r("shown.bs-stepper",{cancelable:!0,detail:{from:m._currentIndex,to:u,indexStep:u}});if(t.classList.contains(c)){t.classList.remove(o);var d=h(t);t.addEventListener("transitionend",(function a(){t.classList.add(i),t.removeEventListener("transitionend",a),e.dispatchEvent(p),l()})),n.length&&n[0].classList.add(o),t.classList.add(s),f(t,d)}else t.classList.add(s),t.classList.add(i),e.dispatchEvent(p),l()},h=function(e){if(!e)return 0;var t=window.getComputedStyle(e).transitionDuration;return parseFloat(t)?(t=t.split(",")[0],1e3*parseFloat(t)):0},f=function(e,t){var a=!1,r=t+5;function s(){a=!0,e.removeEventListener("transitionend",s)}e.addEventListener("transitionend",s),window.setTimeout((function(){a||e.dispatchEvent(n("transitionend")),e.removeEventListener("transitionend",s)}),r)},g={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function t(t,a){var n,r=this;void 0===a&&(a={}),this._element=t,this._currentIndex=0,this._stepsContents=[],this.options=e({},g,{},a),this.options.selectors=e({},g.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(l),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter((function(e){return e.hasAttribute("data-target")})).forEach((function(e){r._stepsContents.push(r._element.querySelector(e.getAttribute("data-target")))})),n=this._stepsContents,this.options.animation&&n.forEach((function(e){e.classList.add(c),e.classList.add(o)})),this._setLinkListeners(),Object.defineProperty(this._element,"bsStepper",{value:this,writable:!0}),this._steps.length&&u(this._element,this._currentIndex,this.options,(function(){}))}var n=t.prototype;return n._setLinkListeners=function(){var e=this;this._steps.forEach((function(t){var n,r=t.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=(e.options,function(e){e.preventDefault()}),r.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=(n=e.options,function(e){e.preventDefault();var t=a(e.target,n.selectors.steps),r=a(t,n.selectors.stepper),s=r.bsStepper,l=s._steps.indexOf(t);u(r,l,n,(function(){s._currentIndex=l}))}),r.addEventListener("click",e._clickStepNonLinearListener))}))},n.next=function(){var e=this,t=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;u(this._element,t,this.options,(function(){e._currentIndex=t}))},n.previous=function(){var e=this,t=this._currentIndex-1>=0?this._currentIndex-1:0;u(this._element,t,this.options,(function(){e._currentIndex=t}))},n.to=function(e){var t=this,a=e-1,n=a>=0&&a<this._steps.length?a:0;u(this._element,n,this.options,(function(){t._currentIndex=n}))},n.reset=function(){var e=this;u(this._element,0,this.options,(function(){e._currentIndex=0}))},n.destroy=function(){var e=this;this._steps.forEach((function(t){var a=t.querySelector(e.options.selectors.trigger);e.options.linear?a.removeEventListener("click",e._clickStepLinearListener):a.removeEventListener("click",e._clickStepNonLinearListener)})),this._element.bsStepper=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},t}()}()},1216:function(e,t,a){"use strict";a.r(t);var n=a(775),r=a(207),s=a(202),l=a(203),i=a(204),o=a(205),c=a(0),m=a.n(c),u=(a(821),a(1048),a(1049)),p=a.n(u),d=a(340),h=a(745),f=a(341),g=a(342),b=a(910),_=a(738),v=a(692),E=a(210),y=a.n(E),k=a(680),N=a.n(k),x=a(26),w=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChangeHandler=function(t){e.setState({selectedFile:t.target.files[0]}),e.setState({selectedName:t.target.files[0].name}),console.log(t.target.files[0])},e.handlechange=function(t){e.setState(Object(r.a)({},t.target.name,t.target.value))},e.changeHandler=function(t){t.preventDefault(),e.setState(Object(r.a)({},t.target.name,t.target.value))},e.submitHandlerLogin=function(t){t.preventDefault(),x.a.post("/user/signup",e.state).then((function(t){console.log(t),localStorage.setItem("auth-token",t.data.token),e.setState({token:t.data.token}),N()("Success!"," Register Successful Done!","success"),e.props.history.push("/otpverify")})).catch((function(e){console.log(e.response),N()("Error!","Something went wrong","error")}))},e.submitHandler=function(t){t.preventDefault();var a={fullname:e.state.fullname,email:e.state.email,mobile:e.state.mobile,otpverify:e.state.otpverify,approvedstatus:e.state.approvedstatus,all_skills:e.state.all_skills,anybody_prefer:e.state.anybody_prefer,callCharge:e.state.callCharge,img:null!==e.state.selectedFile?e.state.selectedName:"",clg_scl_name:e.state.clg_scl_name,conrubute_hrs:e.state.conrubute_hrs,crnt_city:e.state.crnt_city,degree_deploma:e.state.degree_deploma,dob:e.state.dob,exp_in_years:e.state.exp_in_years,fb_link:e.state.fb_link,gender:e.state.gender,hear_abt_astrology:e.state.hear_abt_astrology,highest_qualification:e.state.highest_qualification,income_src:e.state.income_src,insta_link:e.state.insta_link,language:e.state.language,linkedln_link:e.state.linkedln_link,long_bio:e.state.long_bio,lrn_abt_astrology:e.state.lrn_abt_astrology,max_earning_expe:e.state.max_earning_expe,min_earning_expe:e.state.min_earning_expe,other_online_platform:e.state.other_online_platform,primary_skills:e.state.primary_skills,status:e.state.status,suitable_tym_interview:e.state.suitable_tym_interview,website_link:e.state.website_link,why_onboard_you:e.state.why_onboard_you,youtube_link:e.state.youtube_link},r=new FormData;r.append("_id",e.state.userId),r.append("fullname",e.state.fullname),r.append("email",e.state.email),r.append("mobile",e.state.mobile),r.append("gender",e.state.gender),r.append("dob",e.state.dob),r.append("primary_skills",e.state.primary_skills),r.append("all_skills",e.state.all_skills),r.append("language",e.state.language),r.append("exp_in_years",e.state.exp_in_years),r.append("conrubute_hrs",e.state.conrubute_hrs),r.append("hear_abt_astrology",e.state.hear_abt_astrology),r.append("other_online_platform",e.state.other_online_platform),r.append("why_onboard_you",e.state.why_onboard_you),r.append("suitable_tym_interview",e.state.suitable_tym_interview),r.append("crnt_city",e.state.crnt_city),r.append("income_src",e.state.income_src),r.append("highest_qualification",e.state.highest_qualification),r.append("degree_deploma",e.state.degree_deploma),r.append("lrn_abt_astrology",e.state.lrn_abt_astrology),r.append("insta_link",e.state.insta_link),r.append("fb_link",e.state.fb_link),r.append("linkedln_link",e.state.linkedln_link),r.append("youtube_link",e.state.youtube_link),r.append("website_link",e.state.website_link),r.append("anybody_prefer",e.state.anybody_prefer),r.append("min_earning_expe",e.state.min_earning_expe),r.append("max_earning_expe",e.state.max_earning_expe),r.append("long_bio",e.state.long_bio),r.append("status",e.state.status),r.append("callCharge",e.state.callCharge),null!==e.state.selectedFile&&r.append("img",e.state.selectedFile,e.state.selectedName);var s,l=Object(n.a)(r.values());try{for(l.s();!(s=l.n()).done;){var i=s.value;console.log(i)}}catch(u){l.e(u)}finally{l.f()}var o,c=Object(n.a)(r.keys());try{for(c.s();!(o=c.n()).done;){var m=o.value;console.log(m)}}catch(u){c.e(u)}finally{c.f()}x.a.post("/user/editAstroDetails/".concat(e.state.userId),a).then((function(t){console.log(t.data.message),N()("Success!","Submitted SuccessFull!","success"),e.props.history.push("/")})).catch((function(e){N()("Error!","You clicked the button!","error"),console.log(e.response)}))},e.stepperFirst=function(){var t=e.state,a=t.email,n=t.mobile,r=t.fullname;x.a.post("/user/signup",{mobile:NaN!=parseInt(n)?parseInt(n):"null",email:a,fullname:r,moblie:n}).then((function(t){e.stepper.next(),console.log("@@@####",t.data);var a=t.data.user;localStorage.setItem("user_id",t.data._id),localStorage.setItem("userInfo",JSON.stringify(a))})).catch((function(e){console.log(e),console.log(e.response),N()("Error!"," Wrong UserName or Password","error")}))},e.stepperSecond=function(){var t,a=e.state,n=a.otp,s=a.mobile;x.a.post("/user/verifyotp",(t={otp:NaN!=parseInt(n,s)?parseInt(n):"null"},Object(r.a)(t,"otp",n),Object(r.a)(t,"mobile",s),t)).then((function(t){e.stepper.next(),console.log("@@@####",t.data);var a=t.data.user;e.setState({userId:t.data._id}),localStorage.setItem("user_id",t.data._id),localStorage.setItem("userInfo",JSON.stringify(a))})).catch((function(e){console.log(e),console.log(e.response),N()("Error!"," Wrong UserName or Password","error")}))},e.state={fullname:"",email:"",mobile:"",gender:"",otp:"",dob:"",primary_skills:"",all_skills:"",language:"",exp_in_years:"",conrubute_hrs:"",hear_abt_astrology:"",other_online_platform:"",why_onboard_you:"",suitable_tym_interview:"",crnt_city:"",income_src:"",highest_qualification:"",degree_deploma:"",clg_scl_name:"",lrn_abt_astrology:"",insta_link:"",fb_link:"",linkedln_link:"",youtube_link:"",website_link:"",anybody_prefer:"",min_earning_expe:"",max_earning_expe:"",long_bio:"",status:"Active",callCharge:"",img:"",selectedName:"",selectedFile:null,userId:"",__v:0,approvedstatus:"false",otpverify:"true"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.stepper=new p.a(document.querySelector("#stepper1"),{linear:!1,animation:!0})}},{key:"render",value:function(){var e=this;return m.a.createElement("section",{className:"",style:{backgroundImage:"url(".concat(y.a,")"),width:"100%",padding:"50px 0px",height:"100%",backgroundSize:"cover"}},m.a.createElement(d.a,null,m.a.createElement("section",{className:"ptb-30"},m.a.createElement("div",{className:"stp-1"},m.a.createElement("h2",{className:"th-1"},"AstroVipra"),m.a.createElement("h4",{className:"th-2"},"Astrologer Register"),m.a.createElement("div",{id:"stepper1",className:"bs-stepper"},m.a.createElement("div",{className:"bs-stepper-header"},m.a.createElement("div",{className:"step","data-target":"#test-l-1"},m.a.createElement("button",{className:"step-trigger"},m.a.createElement("span",{className:"bs-stepper-circle"},"1"),m.a.createElement("span",{className:"bs-stepper-label"},"Personal Details"))),m.a.createElement("div",{className:"line"}),m.a.createElement("div",{className:"step","data-target":"#test-otp"},m.a.createElement("button",{className:"step-trigger"},m.a.createElement("span",{className:"bs-stepper-circle"},"2"),m.a.createElement("span",{className:"bs-stepper-label"},"Verify OTP"))),m.a.createElement("div",{className:"line"}),m.a.createElement("div",{className:"step","data-target":"#test-l-2"},m.a.createElement("button",{className:"step-trigger"},m.a.createElement("span",{className:"bs-stepper-circle"},"3"),m.a.createElement("span",{className:"bs-stepper-label"},"Skill Details"))),m.a.createElement("div",{className:"line"}),m.a.createElement("div",{className:"step","data-target":"#test-l-3"},m.a.createElement("button",{className:"step-trigger"},m.a.createElement("span",{className:"bs-stepper-circle"},"4"),m.a.createElement("span",{className:"bs-stepper-label"},"Other Details")))),m.a.createElement("div",{className:"bs-stepper-content"},m.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement("div",{id:"test-l-1",className:"content"},m.a.createElement(f.a,null,m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Name*"),m.a.createElement(_.a,{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname",value:this.state.fullname,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Email address*"),m.a.createElement(_.a,{type:"email",name:"email",required:!0,placeholder:"Enter Your email",value:this.state.email,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Mobile Number*"),m.a.createElement(_.a,{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number",value:this.state.mobile,onChange:this.changeHandler})))),m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.stepperFirst()}},"Next")),m.a.createElement("div",{id:"test-otp",className:"content"},m.a.createElement(f.a,null,m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Otp*"),m.a.createElement(_.a,{type:"text",required:!0,name:"otp",value:this.state.otp,onChange:this.changeHandler})))),m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.stepperSecond()}},"Next")),m.a.createElement("div",{id:"test-l-2",className:"content"},m.a.createElement(f.a,null,m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Gender*"),m.a.createElement("select",{className:"form-control",value:this.state.gender,onChange:this.changeHandler,name:"gender"},m.a.createElement("option",{selected:!0},"--select--"),m.a.createElement("option",{value:"Male"},"Male"),m.a.createElement("option",{value:"Female"},"Female")))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"DOB*"),m.a.createElement(_.a,{type:"date",required:!0,name:"dob",maxLength:"8",value:this.state.dob,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Primary Skills*"),m.a.createElement(_.a,{placeholder:"Primary Skills",name:"primary_skills",type:"text",value:this.state.primary_skills,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"All Skills*"),m.a.createElement(_.a,{placeholder:"All Skills",name:"all_skills",type:"text",value:this.state.all_skills,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Language*"),m.a.createElement(_.a,{placeholder:"language",name:"language",type:"text",value:this.state.language,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Experience in years*"),m.a.createElement(_.a,{type:"text",name:"exp_in_years",required:!0,value:this.state.exp_in_years,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement(b.a,null,"How many hours you can contribute daily?*"),m.a.createElement(_.a,{type:"text",name:"conrubute_hrs",required:!0,value:this.state.conrubute_hrs,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Where did you hear about Astro ?*"),m.a.createElement(_.a,{type:"text",name:"hear_abt_astrology",value:this.state.hear_abt_astrology,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"12"},m.a.createElement("p",{className:"mb-0 mt-10"},"Are you working on any other online platform?*"),m.a.createElement(f.a,null,m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Name of platform"),m.a.createElement(_.a,{type:"text",name:"other_online_platform",value:this.state.other_online_platform,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Monthly Earning"),m.a.createElement(_.a,{type:"text"})))))),m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.stepper.next()}},"Next")),m.a.createElement("div",{id:"test-l-3",className:"content"},m.a.createElement(f.a,null,m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Why do you think we should onboard you?*"),m.a.createElement(_.a,{type:"text",required:!0,name:"why_onboard_you",value:this.state.why_onboard_you,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"What is a suitable time for interview*"),m.a.createElement(_.a,{type:"text",required:!0,name:"suitable_tym_interview",value:this.state.suitable_tym_interview,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Which city do you currently live in?"),m.a.createElement(_.a,{type:"text",required:!0,name:"crnt_city",value:this.state.crnt_city,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Call Charge"),m.a.createElement(_.a,{type:"text",required:!0,name:"callCharge",value:this.state.callCharge,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Main source of business (other than astrology)*"),m.a.createElement(_.a,{placeholder:"source of business",name:"income_src",type:"text",value:this.state.income_src,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Select your highest qualification*"),m.a.createElement(_.a,{placeholder:"qualification",name:"highest_qualification",type:"text",value:this.state.highest_qualification,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Degree/Diploma*"),m.a.createElement(_.a,{placeholder:"Degree/Diploma",name:"degree_deploma",type:"text",value:this.state.degree_deploma,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"College/School/University*"),m.a.createElement(_.a,{type:"text",name:"clg_scl_name",required:!0,value:this.state.clg_scl_name,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"From where did you learn Astrology?"),m.a.createElement(_.a,{type:"text",name:"lrn_abt_astrology",required:!0,value:this.state.lrn_abt_astrology,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement(b.a,null,"User Image"),m.a.createElement(_.a,{className:"form-control",type:"file",name:"img",onChange:this.onChangeHandler})),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Instagram profile link"),m.a.createElement(_.a,{type:"text",name:"insta_link",required:!0,value:this.state.insta_link,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Facebook profile link"),m.a.createElement(_.a,{type:"text",name:"fb_link",required:!0,value:this.state.fb_link,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"LinkedIn profile link"),m.a.createElement(_.a,{type:"text",name:"linkedln_link",required:!0,value:this.state.linkedln_link,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Youtube channel link"),m.a.createElement(_.a,{type:"text",name:"youtube_link",required:!0,value:this.state.youtube_link,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Name of the person who referred you?"),m.a.createElement(_.a,{type:"text",name:"anybody_prefer",required:!0,value:this.state.anybody_prefer,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Minimum Earning Expectation from AstroVipra*"),m.a.createElement(_.a,{type:"text",name:"min_earning_expe",required:!0,value:this.state.min_earning_expe,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Maximum Earning Expectation from AstroVipra*"),m.a.createElement(_.a,{type:"text",name:"max_earning_expe",required:!0,value:this.state.max_earning_expe,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"6"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Website profile link"),m.a.createElement(_.a,{type:"text",name:"website_link",required:!0,value:this.state.website_link,onChange:this.changeHandler}))),m.a.createElement(g.a,{md:"12"},m.a.createElement("div",{className:"form-group mtb-10"},m.a.createElement(b.a,null,"Long bio*"),m.a.createElement("textarea",{type:"text",className:"form-control",name:"long_bio",required:!0,value:this.state.long_bio,onChange:this.changeHandler,placeholder:"Please let us know more about you"})))),m.a.createElement("p",{className:"ptb-10"},"You can reach out to us for Astrologer onboarding support team at onboarding@astrovipra.com in case of any issues or queries."),m.a.createElement(v.a,{type:"submit",className:"btn btn-primary mt-5"},"Submit")))))))))}}]),a}(m.a.Component);t.default=w},692:function(e,t,a){"use strict";var n=a(7),r=a(14),s=a(208),l=a(20),i=a(0),o=a.n(i),c=a(3),m=a.n(c),u=a(58),p=a.n(u),d=a(36),h=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],f={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:d.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,l=e.className,i=e.close,c=e.cssModule,m=e.color,u=e.outline,f=e.size,g=e.tag,b=e.innerRef,_=Object(r.a)(e,h);i&&"undefined"===typeof _.children&&(_.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+m,E=Object(d.k)(p()(l,{close:i},i||"btn",i||v,!!f&&"btn-"+f,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),c);_.href&&"button"===g&&(g="a");var y=i?"Close":null;return o.a.createElement(g,Object(n.a)({type:"button"===g&&_.onClick?"button":void 0},_,{className:E,ref:b,onClick:this.onClick,"aria-label":a||y}))},t}(o.a.Component);g.propTypes=f,g.defaultProps={color:"secondary",tag:"button"},t.a=g},738:function(e,t,a){"use strict";var n=a(7),r=a(14),s=a(208),l=a(20),i=a(0),o=a.n(i),c=a(3),m=a.n(c),u=a(58),p=a.n(u),d=a(36),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,i=e.valid,c=e.invalid,m=e.tag,u=e.addon,f=e.plaintext,g=e.innerRef,b=Object(r.a)(e,h),_=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=m||("select"===s||"textarea"===s?s:"input"),y="form-control";f?(y+="-plaintext",E=m||"input"):"file"===s?y+="-file":"range"===s?y+="-range":_&&(y=u?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(d.q)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var k=Object(d.k)(p()(t,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,y),a);return("input"===E||m&&"function"===typeof m)&&(b.type=s),b.children&&!f&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(d.q)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(E,Object(n.a)({},b,{ref:g,className:k,"aria-invalid":c}))},t}(o.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},745:function(e,t,a){"use strict";var n=a(7),r=a(14),s=a(208),l=a(20),i=a(0),o=a.n(i),c=a(3),m=a.n(c),u=a(58),p=a.n(u),d=a(36),h=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:d.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,i=e.innerRef,c=Object(r.a)(e,h),m=Object(d.k)(p()(t,!!s&&"form-inline"),a);return o.a.createElement(l,Object(n.a)({},c,{ref:i,className:m}))},t}(i.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g},775:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(144);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw s}}}}},910:function(e,t,a){"use strict";var n=a(7),r=a(14),s=a(0),l=a.n(s),i=a(3),o=a.n(i),c=a(58),m=a.n(c),u=a(36),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:d,order:d,offset:d})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.o,className:o.a.string,cssModule:o.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},_=function(e){var t=e.className,a=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,c=e.check,d=e.size,h=e.for,f=Object(r.a)(e,p),g=[];i.forEach((function(t,n){var r=e[t];if(delete f[t],r||""===r){var s,l=!n;if(Object(u.i)(r)){var i,o=l?"-":"-"+t+"-";s=b(l,t,r.size),g.push(Object(u.k)(m()(((i={})[s]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),a)}else s=b(l,t,r),g.push(s)}}));var _=Object(u.k)(m()(t,!!s&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:h},f,{className:_}))};_.propTypes=f,_.defaultProps=g,t.a=_}}]);
//# sourceMappingURL=59.b76e5d69.chunk.js.map