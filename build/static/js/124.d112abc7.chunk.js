(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[124],{1154:function(e,t,a){"use strict";a.r(t);a(41);var n=a(22),c=a(0),l=a.n(c),o=(a(209),a(47)),i=a(119),r=a(59),s=a(118),u=a(676),d=a(26),m=a(340),f=a(23),v=a(680),b=a.n(v);t.default=Object(o.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(r.g)(t,a,n))},addToWishlist:function(t,a,n){e(Object(i.d)(t,a,n))},deleteFromWishlist:function(t,a,n){e(Object(i.f)(t,a,n))},deleteAllFromWishlist:function(t){e(Object(i.e)(t))}}}))((function(e){var t=e.location,a=(e.args,t.pathname,Object(c.useState)([])),o=Object(n.a)(a,2),i=(o[0],o[1],Object(c.useState)(!1)),r=Object(n.a)(i,2),v=(r[0],r[1],Object(c.useState)({})),g=Object(n.a)(v,2),p=(g[0],g[1],Object(c.useState)(!0)),h=Object(n.a)(p,2),j=h[0],O=h[1],E=Object(f.useHistory)(),y=Object(f.useLocation)();return Object(c.useEffect)((function(){localStorage.getItem("user_id")&&function(){var e=setInterval((function(){var t,a;JSON.parse(localStorage.getItem("user_id"));console.log(null===(t=y.state)||void 0===t?void 0:t._id);var n=(null===y||void 0===y||null===(a=y.state)||void 0===a?void 0:a._id)||sessionStorage.getItem("notificationdata");console.log(n),d.a.get("/user/getOnenotificationByastro/".concat(n)).then((function(t){var a,n,c,l,o,i;(console.log("request status ",t.data.data),console.log("notificationid",t.data.data),"Accept"===(null===t||void 0===t||null===(a=t.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.status)&&"Video"===(null===t||void 0===t||null===(c=t.data)||void 0===c||null===(l=c.data)||void 0===l?void 0:l.type))&&(O(!1),b()("Request Accepted","Wait Till Astro Joins Videocall"),clearInterval(e),E.push("/userVideoCall/".concat(null===(o=t.data.data)||void 0===o?void 0:o._id)),d.a.get("/admin/dltNotificattion/".concat(null===(i=t.data.data)||void 0===i?void 0:i._id)).then((function(e){console.log("notification deleted",e)})).catch((function(e){console.log(e)})))})).catch((function(e){}))}),5e3)}()}),[]),l.a.createElement(c.Fragment,null,l.a.createElement(s.a,{headerTop:"visible"},l.a.createElement(u.a,null),l.a.createElement("section",{style:{padding:"180px 0px"}},l.a.createElement(m.a,null,j&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex justify-content-center mb-4"},l.a.createElement("div",{class:"custom-loader"})),l.a.createElement("div",{className:"d-flex justify-content-center align-item-center"},l.a.createElement("h3",null,"Wait Till Astrologer Accept Your Request..."),l.a.createElement("h3",null,"Do not Refresh Your Page...")))))))}))},676:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(2),o=a(209);t.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(o.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:l.d,finalItem:"span"}))))}}}]);
//# sourceMappingURL=124.d112abc7.chunk.js.map