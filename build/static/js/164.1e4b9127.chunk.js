(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[164],{915:function(e,t,r){"use strict";r.r(t),r.d(t,"LiveStreaming",(function(){return l}));var n=r(41),o=r(0),a=r.n(o),i=r(824),c=r.n(i);function u(){u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(V){l=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),c=new L(o||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(V){return{type:"throw",arg:V}}}e.wrap=s;var f={};function h(){}function p(){}function v(){}var m={};l(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==t&&r.call(g,a)&&(m=g);var w=v.prototype=h.prototype=Object.create(m);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var u=d(e[o],e,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(s).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=d(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var l=function(){var e={appId:"7d1f07c76f9d46be86bc46a791884023",channel:"anujesh",token:"0067d1f07c76f9d46be86bc46a791884023IABZ7sN96RKmFTBkTuG/f1zAI3QZSNel+OjfEB1HYpztCElEne4AAAAAEABAuqeD7vxdZAEAAQAOOF1k",uid:0,role:"Audience"},t={localAudioTrack:null,localVideoTrack:null,remoteAudioTrack:null,remoteVideoTrack:null,remoteUid:null};function r(){return(r=Object(n.a)(u().mark((function r(){var a,i,l;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=c.a.createClient({mode:"live",codec:"vp8"}),i=document.createElement("div"),(l=document.createElement("div")).id=e.uid,l.textContent="Local user "+e.uid,l.style.width="640px",l.style.height="480px",l.style.padding="15px 5px 5px 5px",i.style.width="640px",i.style.height="480px",i.style.padding="15px 5px 5px 5px",a.on("user-published",function(){var r=Object(n.a)(u().mark((function r(n,o){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.subscribe(n,o);case 2:console.log("subscribe success"),"video"==o&&(t.remoteVideoTrack=n.videoTrack,t.remoteAudioTrack=n.audioTrack,t.remoteUid=n.uid.toString(),i.id=n.uid.toString(),t.remoteUid=n.uid.toString(),i.textContent="Remote user "+n.uid.toString(),document.body.append(i),"host"!=e.role&&t.remoteVideoTrack.play(i)),"audio"==o&&(t.remoteAudioTrack=n.audioTrack,t.remoteAudioTrack.play()),a.on("user-unpublished",(function(e){console.log(e.uid+"has left the channel")}));case 6:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),window.onload=function(){document.getElementById("join").onclick=Object(n.a)(u().mark((function r(){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!=e.role){r.next=3;break}return window.alert("Select a user role first!"),r.abrupt("return");case 3:return r.next=5,a.join(e.appId,e.channel,e.token,e.uid);case 5:return r.next=7,c.a.createMicrophoneAudioTrack();case 7:return t.localAudioTrack=r.sent,r.next=10,c.a.createCameraVideoTrack();case 10:if(t.localVideoTrack=r.sent,document.body.append(l),"host"!=e.role){r.next=17;break}return r.next=15,a.publish([t.localAudioTrack,t.localVideoTrack]);case 15:t.localVideoTrack.play(l),console.log("publish success!");case 17:case"end":return r.stop()}}),r)}))),document.getElementById("leave").onclick=Object(n.a)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.localAudioTrack.close(),t.localVideoTrack.close(),o(i.id),o(l.id),e.next=6,a.leave();case 6:console.log("You left the channel",a),window.location.reload();case 8:case"end":return e.stop()}}),e)}))),document.getElementById("host").onclick=Object(n.a)(u().mark((function r(){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!document.getElementById("host").checked){r.next=9;break}return e.role="host",r.next=4,a.setClientRole(e.role);case 4:if(null==t.localVideoTrack){r.next=9;break}return r.next=7,a.publish([t.localAudioTrack,t.localVideoTrack]);case 7:t.remoteVideoTrack.stop(),t.localVideoTrack.play(l);case 9:case"end":return r.stop()}}),r)}))),document.getElementById("Audience").onclick=Object(n.a)(u().mark((function r(){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!document.getElementById("Audience").checked){r.next=8;break}if(e.role="audience",null==t.localAudioTrack||null==t.localVideoTrack){r.next=6;break}if(null==t.remoteVideoTrack){r.next=6;break}return r.next=6,t.localVideoTrack.replaceTrack(t.remoteVideoTrack,!0);case 6:return r.next=8,a.setClientRole(e.role);case 8:case"end":return r.stop()}}),r)})))};case 13:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function o(e){console.log("Removing "+e+"Div");var t=document.getElementById(e);t&&t.remove()}return function(){r.apply(this,arguments)}(),a.a.createElement("div",null,a.a.createElement("h2",{className:"left-align mt-1"}),a.a.createElement("div",{className:"row"},a.a.createElement("div",null,a.a.createElement("input",{type:"radio",id:"host",name:"joinAs",value:"host"}),a.a.createElement("label",null,"Host"),a.a.createElement("br",null),a.a.createElement("input",{type:"radio",id:"Audience",name:"joinAs",value:"audience"}),a.a.createElement("label",null,"Audience"),a.a.createElement("br",null),a.a.createElement("button",{type:"button",id:"join"},"Join"),a.a.createElement("button",{type:"button",id:"leave"},"Leave"))))}}}]);
//# sourceMappingURL=164.1e4b9127.chunk.js.map