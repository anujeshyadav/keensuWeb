(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[87],{692:function(t,e,n){"use strict";var r=n(7),o=n(14),i=n(208),a=n(20),c=n(0),u=n.n(c),l=n(3),s=n.n(l),f=n(58),h=n.n(f),p=n(36),d=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],v={active:s.a.bool,"aria-label":s.a.string,block:s.a.bool,color:s.a.string,disabled:s.a.bool,outline:s.a.bool,tag:p.o,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),onClick:s.a.func,size:s.a.string,children:s.a.node,className:s.a.string,cssModule:s.a.object,close:s.a.bool},y=function(t){function e(e){var n;return(n=t.call(this,e)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(a.a)(e,t);var n=e.prototype;return n.onClick=function(t){if(!this.props.disabled)return this.props.onClick?this.props.onClick(t):void 0;t.preventDefault()},n.render=function(){var t=this.props,e=t.active,n=t["aria-label"],i=t.block,a=t.className,c=t.close,l=t.cssModule,s=t.color,f=t.outline,v=t.size,y=t.tag,m=t.innerRef,g=Object(o.a)(t,d);c&&"undefined"===typeof g.children&&(g.children=u.a.createElement("span",{"aria-hidden":!0},"\xd7"));var b="btn"+(f?"-outline":"")+"-"+s,w=Object(p.k)(h()(a,{close:c},c||"btn",c||b,!!v&&"btn-"+v,!!i&&"btn-block",{active:e,disabled:this.props.disabled}),l);g.href&&"button"===y&&(y="a");var k=c?"Close":null;return u.a.createElement(y,Object(r.a)({type:"button"===y&&g.onClick?"button":void 0},g,{className:w,ref:m,onClick:this.onClick,"aria-label":n||k}))},e}(u.a.Component);y.propTypes=v,y.defaultProps={color:"secondary",tag:"button"},e.a=y},733:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},734:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},754:function(t,e,n){"use strict";var r=n(733),o=n(734);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new O(o||[]);return r(a,"_invoke",{value:x(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(_([])));g&&g!==e&&n.call(g,a)&&(y=g);var b=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var o;r(this,"_invoke",{value:function(r,i){function a(){return new e((function(o,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}})}function x(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=v,r(b,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(k.prototype),l(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function c(t){try{u(r.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});var c=n(0),u=function(){function t(e){r(this,t),this.options=e,"undefined"!==typeof window&&(this.rzrpayInstannce=new window.Razorpay(this.options))}return o(t,[{key:"on",value:function(t,e){this.rzrpayInstannce.on(t,e)}},{key:"open",value:function(){this.rzrpayInstannce.open()}}]),t}();e.default=function(){var t=(0,c.useMemo)((function(){return"undefined"!==typeof window}),[]),e=(0,c.useCallback)((function(){return!(!t||!("Razorpay"in window))}),[]),n=(0,c.useCallback)((function(e){if(t)return new Promise((function(t,n){var r=document.createElement("script");r.src=e,r.onload=function(e){return t(e)},r.onerror=function(t){return n(t)},document.body.appendChild(r)}))}),[]);return(0,c.useEffect)((function(){e()||a(void 0,void 0,void 0,i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("https://checkout.razorpay.com/v1/checkout.js");case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),new Error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))}),[]),u}},777:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(754),a=n.n(i),c=n(692);e.default=function(t){var e=a()(),n=Object(r.useCallback)((function(){var n=new e({key:"rzp_test_8Q9MGMi8hVqdfZ",amount:"100",currency:"INR",name:"hello Corp",description:"Test Transaction",image:"http://example.com/your_logo",order_id:"",handler:function(e){console.log(e),t.callback(!0)},prefill:{name:"Sadik",email:"mailto:youremail@example.com",contact:"9999999999"},notes:{address:"Razorpay Corporate Office"},theme:{color:"#3399cc"}});n.on("payment.failed",(function(e){t.callback(!1)})),n.open()}),[e]);return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,{color:"success",onClick:n},"Payment"))}}}]);
//# sourceMappingURL=87.7c32755e.chunk.js.map