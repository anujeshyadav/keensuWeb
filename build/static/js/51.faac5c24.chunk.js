(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[51],{673:function(e,t,n){"use strict";var r=n(13),o=n(669),a=n(58),i=n.n(a),c=/-(.)/g;var u=n(0),l=n(670),s=n(668);n.d(t,"a",(function(){return p}));var f=["className","bsPrefix","as"],d=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,a=void 0===n?d(e):n,c=t.Component,p=t.defaultProps,m=u.forwardRef((function(t,n){var a=t.className,u=t.bsPrefix,d=t.as,p=void 0===d?c||"div":d,m=Object(o.a)(t,f),b=Object(l.c)(u,e);return Object(s.jsx)(p,Object(r.a)({ref:n,className:i()(a,b)},m))}));return m.defaultProps=p,m.displayName=a,m}},674:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(0),o=r.createContext(null),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null};t.a=o},676:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),i=n(209);t.a=function(){return o.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"breadcrumb-content text-center"},o.a.createElement(i.Breadcrumbs,{separator:o.a.createElement("span",null,"/"),item:a.d,finalItem:"span"}))))}},678:function(e,t,n){"use strict";var r=n(0),o=r.createContext(null);t.a=o},681:function(e,t,n){"use strict";var r,o=n(13),a=n(669),i=n(207),c=n(58),u=n.n(c),l=n(0),s=n(27),f=n(700),d=n(699),p=n(703),m=n(668),b=["className","children","transitionClasses"],v=(r={},Object(i.a)(r,s.b,"show"),Object(i.a)(r,s.a,"show"),r),y=l.forwardRef((function(e,t){var n=e.className,r=e.children,i=e.transitionClasses,c=void 0===i?{}:i,s=Object(a.a)(e,b),y=Object(l.useCallback)((function(e,t){Object(d.a)(e),null==s.onEnter||s.onEnter(e,t)}),[s]);return Object(m.jsx)(p.a,Object(o.a)(Object(o.a)({ref:t,addEndListener:f.a},s),{},{onEnter:y,childRef:r.ref,children:function(e,t){return l.cloneElement(r,Object(o.a)(Object(o.a)({},t),{},{className:u()("fade",n,r.props.className,v[e],c[e])}))}}))}));y.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},y.displayName="Fade",t.a=y},688:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(705)),o=i(n(693)),a=i(n(707));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default;t.default=c},693:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=c(n(3)),a=c(n(37)),i=n(706);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,b,v,y=function(e){function t(){return l(this,t),f(this,d(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);a.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,a=o.innerHTML;(r=(r=r.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,i.getDuplicateTitle)();n&&(0,i.removeChild)(o,n)}else if("meta"===t){var r=(0,i.getDuplicateMeta)(e);r&&(0,i.removeChild)(o,r)}else if("link"===t&&"canonical"===e.rel){var a=(0,i.getDuplicateCanonical)(e);a&&(0,i.removeChild)(o,a)}})),(0,i.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,o),c&&s(n,c),t}(r.Component);m=y,b="contextTypes",v={extract:o.default.func},b in m?Object.defineProperty(m,b,{value:v,enumerable:!0,configurable:!0,writable:!0}):m[b]=v;var h=y;t.default=h,e.exports=t.default},702:function(e,t,n){"use strict";var r=n(3),o=n.n(r),a=n(0),i=n.n(a),c=n(13),u=n(669),l=n(22),s=n(704),f={prefix:String(Math.round(1e10*Math.random())),current:0},d=i.a.createContext(f);var p=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var m=n(678),b=n(674);var v=function(e){var t=e.children,n=e.in,r=e.mountOnEnter,o=e.unmountOnExit,i=Object(a.useRef)(n);return Object(a.useEffect)((function(){n&&(i.current=!0)}),[n]),n?t:o||!i.current&&r?null:t},y=n(668),h=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O=["activeKey","getControlledId","getControllerId"],E=["as"];function g(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function j(e){var t=e.active,n=e.eventKey,r=e.mountOnEnter,o=e.transition,i=e.unmountOnExit,c=e.role,u=void 0===c?"tabpanel":c,l=e.onEnter,s=e.onEntering,f=e.onEntered,d=e.onExit,p=e.onExiting,v=e.onExited,y=g(e,h),E=Object(a.useContext)(m.a);if(!E)return[Object.assign({},y,{role:u}),{eventKey:n,isActive:t,mountOnEnter:r,transition:o,unmountOnExit:i,onEnter:l,onEntering:s,onEntered:f,onExit:d,onExiting:p,onExited:v}];var j=E.activeKey,x=E.getControlledId,C=E.getControllerId,P=g(E,O),w=Object(b.b)(n);return[Object.assign({},y,{role:u,id:x(n),"aria-labelledby":C(n)}),{eventKey:n,isActive:null==t&&null!=w?Object(b.b)(j)===w:t,transition:o||P.transition,mountOnEnter:null!=r?r:P.mountOnEnter,unmountOnExit:null!=i?i:P.unmountOnExit,onEnter:l,onEntering:s,onEntered:f,onExit:d,onExiting:p,onExited:v}]}var x=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=j(g(e,E)),a=Object(l.a)(o,2),i=a[0],c=a[1],u=c.isActive,s=c.onEnter,f=c.onEntering,d=c.onEntered,p=c.onExit,h=c.onExiting,O=c.onExited,x=c.mountOnEnter,C=c.unmountOnExit,P=c.transition,w=void 0===P?v:P;return Object(y.jsx)(m.a.Provider,{value:null,children:Object(y.jsx)(b.a.Provider,{value:null,children:Object(y.jsx)(w,{in:u,onEnter:s,onEntering:f,onEntered:d,onExit:p,onExiting:h,onExited:O,mountOnEnter:x,unmountOnExit:C,children:Object(y.jsx)(r,Object.assign({},i,{ref:t,hidden:!u,"aria-hidden":!u}))})})})}));x.displayName="TabPanel";var C=function(e){var t=e.id,n=e.generateChildId,r=e.onSelect,o=e.activeKey,i=e.defaultActiveKey,c=e.transition,u=e.mountOnEnter,v=e.unmountOnExit,h=e.children,O=Object(s.b)(o,i,r),E=Object(l.a)(O,2),g=E[0],j=E[1],x=function(e){var t=Object(a.useContext)(d);return t!==f||p||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),Object(a.useMemo)((function(){return e||"react-aria".concat(t.prefix,"-").concat(++t.current)}),[e])}(t),C=Object(a.useMemo)((function(){return n||function(e,t){return x?"".concat(x,"-").concat(t,"-").concat(e):null}}),[x,n]),P=Object(a.useMemo)((function(){return{onSelect:j,activeKey:g,transition:c,mountOnEnter:u||!1,unmountOnExit:v||!1,getControlledId:function(e){return C(e,"tabpane")},getControllerId:function(e){return C(e,"tab")}}}),[j,g,c,u,v,C]);return Object(y.jsx)(m.a.Provider,{value:P,children:Object(y.jsx)(b.a.Provider,{value:j||null,children:h})})};C.Panel=x;var P=C,w=n(681);function _(e){return"boolean"===typeof e?e?w.a:v:e}var S=["transition"],N=function(e){var t=e.transition,n=Object(u.a)(e,S);return Object(y.jsx)(P,Object(c.a)(Object(c.a)({},n),{},{transition:_(t)}))};N.displayName="TabContainer";var T=N,M=n(673),k=Object(M.a)("tab-content"),A=n(58),R=n.n(A),D=n(670),K=["bsPrefix","transition"],I=["className","as"],H=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.transition,o=Object(u.a)(e,K),a=j(Object(c.a)(Object(c.a)({},o),{},{transition:_(r)})),i=Object(l.a)(a,2),s=i[0],f=s.className,d=s.as,p=void 0===d?"div":d,v=Object(u.a)(s,I),h=i[1],O=h.isActive,E=h.onEnter,g=h.onEntering,x=h.onEntered,C=h.onExit,P=h.onExiting,S=h.onExited,N=h.mountOnEnter,T=h.unmountOnExit,M=h.transition,k=void 0===M?w.a:M,A=Object(D.c)(n,"tab-pane");return Object(y.jsx)(m.a.Provider,{value:null,children:Object(y.jsx)(b.a.Provider,{value:null,children:Object(y.jsx)(k,{in:O,onEnter:E,onEntering:g,onEntered:x,onExit:C,onExiting:P,onExited:S,mountOnEnter:N,unmountOnExit:T,children:Object(y.jsx)(p,Object(c.a)(Object(c.a)({},v),{},{ref:t,className:R()(f,A,O&&"active")}))})})})}));H.displayName="TabPane";var q=H,F={eventKey:o.a.oneOfType([o.a.string,o.a.number]),title:o.a.node.isRequired,disabled:o.a.bool,tabClassName:o.a.string,tabAttrs:o.a.object},L=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};L.propTypes=F;t.a=Object.assign(L,{Container:T,Content:k,Pane:q})},705:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),a=(r=n(3))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return c(this,t),l(this,s(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&u(n.prototype,r),a&&u(n,a),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(d,"childContextTypes",{extract:a.default.func});var p=d;t.default=p,e.exports=t.default},706:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],i=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?n=e:"meta"===o?r.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var i=e[r],c=i.props.id;(c?!t.id[c]:0===o.filter((function(e){var n=i.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(i),a.forEach((function(e){var n=i.props[e];n&&(t[e][n]=i)})))},i=e.length-1;i>=0;i--)r(i);return n}(r)),[n],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var o,a=e.getAttribute(r);return a?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),a=o.concat(["id"])},707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=i(n(3)),a=i(n(693));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,m,b,v=function(e){function t(){return u(this,t),s(this,f(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(a.default,null,r.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,o),i&&l(n,i),t}(r.Component);p=v,m="propTypes",b={title:o.default.string},m in p?Object.defineProperty(p,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[m]=b;var y=v;t.default=y,e.exports=t.default},745:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(208),i=n(20),c=n(0),u=n.n(c),l=n(3),s=n.n(l),f=n(58),d=n.n(f),p=n(36),m=["className","cssModule","inline","tag","innerRef"],b={children:s.a.node,inline:s.a.bool,tag:p.o,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),className:s.a.string,cssModule:s.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(a.a)(n)),n.submit=n.submit.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.inline,i=e.tag,c=e.innerRef,l=Object(o.a)(e,m),s=Object(p.k)(d()(t,!!a&&"form-inline"),n);return u.a.createElement(i,Object(r.a)({},l,{ref:c,className:s}))},t}(c.Component);v.propTypes=b,v.defaultProps={tag:"form"},t.a=v},911:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(207),o=n(202),a=n(203),i=n(204),c=n(205),u=n(0),l=n.n(u),s=n(688),f=n.n(s),d=n(702),p=n(118),m=n(676),b=n(48),v=n.n(b),y=n(745),h=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChangeHandler=function(e){a.setState({selectedFile:e.target.files[0]}),a.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},a.changeHandler=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault(),v.a.post("http://13.235.180.192/api/user/sendotp",a.state).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},a.state={mobile_no:"12345678",customer_email:"guptapratima98710@gmail.com",selectedFile:null},a}return Object(a.a)(n,[{key:"render",value:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(f.a,null,l.a.createElement("title",null,"Buynaa | Login"),l.a.createElement("meta",{content:"Compare page of flone react minimalist eCommerce template."})),l.a.createElement(p.a,{headerTop:"visible"},l.a.createElement(m.a,null),l.a.createElement("div",{className:"login-register-area pt-100 pb-100"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},l.a.createElement("div",{className:"login-register-wrapper"},l.a.createElement(d.a.Container,{defaultActiveKey:"login"},l.a.createElement(d.a.Content,null,l.a.createElement(d.a.Pane,{eventKey:"login"},l.a.createElement("div",{className:"login-form-container"},l.a.createElement("div",{className:"login-register-form"},l.a.createElement(y.a,{onSubmit:this.submitHandler},l.a.createElement("input",{onChange:this.changeHandler,type:"number",value:this.state.mobile_no,name:"mobile_no ",placeholder:"Enter your mobile number"}),l.a.createElement("input",{value:this.state.customer_email,type:"email",name:"customer_email",placeholder:"Enter Email"}),l.a.createElement("div",{className:"button-box"},l.a.createElement("button",{type:"submit",color:"primary"},"SendOTP")))))))))))))))}}]),n}(u.Component)}}]);
//# sourceMappingURL=51.faac5c24.chunk.js.map