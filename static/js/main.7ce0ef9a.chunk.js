(this["webpackJsonputube-demo"]=this["webpackJsonputube-demo"]||[]).push([[0],{40:function(e,t,n){},52:function(e,t,n){e.exports=n(69)},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){e.exports=n.p+"static/media/sample.e9226429.jpg"},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),i=n.n(c),l=(n(59),n(15)),o=n(35),s=(n(60),n(38));n(61),n(40);var u=n(18);var m=function(e){return a.createElement("section",{className:"box"},a.createElement(u.b,{to:"/player/".concat(e.id)},a.createElement("img",{src:e.thumbnail.url,alt:"video img"})),a.createElement("div",{className:"description"},a.createElement("section",null,a.createElement(u.b,{to:"/player/".concat(e.id)},a.createElement("div",{className:"topic"},e.title))),a.createElement("section",null,a.createElement("div",{className:"pl8"},"\u5f71\u7247\u9577\u5ea6: ",e.duration.split("T")[1].replace("M","\u5206").replace("S","\u79d2").replace("H","\u6642")),a.createElement("article",{className:"pl8 text_overflow_ellipsis"},"\u5f71\u7247\u63cf\u8ff0\uff1a",e.description))))},p=n(43),d=n.n(p),f=(n(66),n(44)),v=n(45),b=n(73),h=n(32),g=n(74),E=n(70),j=new(function(){function e(){Object(f.a)(this,e),this._event$=new b.a("init"),this._repo$=new b.a(null),this.init(),this._numPerPg=12}return Object(v.a)(e,[{key:"init",value:function(){var e=this;Object(h.a)(fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=50&key=AIzaSyCrwZT5eJWe9ue4IDvvmrvXftdyVDIkQa8").then((function(e){return e.json()}))).pipe(Object(g.a)((function(t){return e._repo$.next(t)})),Object(g.a)(console.log),Object(E.a)((function(e){return Object(h.a)(fetch("\n        https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=50&pageToken=".concat(e.nextPageToken,"&key=AIzaSyCrwZT5eJWe9ue4IDvvmrvXftdyVDIkQa8\n        ")).then((function(e){return e.json()})))}))).subscribe((function(t){var n=t.items,a=e._repo$.value;a.items=a.items.concat(n),e._repo$.next(a),e._event$.next("ready")}))}},{key:"getPage",value:function(e){var t=e*this._numPerPg,n=this._repo$.value;return console.log("inside getPage",n),null!==n?n.items.slice(t,t+this._numPerPg):[]}},{key:"get",value:function(e){return console.log(this._repo$.value.items.find((function(t){return t.id===e}))),this._repo$.value.items.find((function(t){return t.id===e}))}},{key:"event",get:function(){return this._event$.value}}]),e}());var y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){r(j.getPage(0))}),[]),a.createElement("div",{className:"container"},a.createElement("section",{className:"wrapper"},n.map((function(e,t){return a.createElement(m,{key:t,id:e.id,thumbnail:e.snippet.thumbnails.default,title:e.snippet.title,description:e.snippet.description,duration:e.contentDetails.duration})}))),a.createElement(d.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:9,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;console.log("handle page click",t),r(j.getPage(t))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))},O=n(2),k=n(71),w=n(72);var N=function(e){var t=Object(a.useState)(!0),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=e.videoEl,n=Object(k.a)(t.current,"play"),a=Object(k.a)(t.current,"pause"),r=Object(w.a)(n,a).pipe(Object(g.a)((function(){return c((function(e){return!e}))}))).subscribe();return function(){r.unsubscribe()}}),[e]),a.createElement("div",{className:"ad ".concat(r?"":"hide")},a.createElement("h1",{className:"pd20"},"demo designed by Howard Chang. ",a.createElement("br",null),"I'm looking for a frontend engineer job.....QQ"))},_=n(46),x=n.n(_);n(67);var P=function(){var e=Object(a.useRef)(null),t=Object(O.f)().id,n=Object(a.useState)(j.get(t)),r=Object(l.a)(n,1)[0];return a.createElement("div",{className:"container"},a.createElement("section",{className:"video_container"},a.createElement(x.a,{url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",autoplay:!1,controls:!0,width:"100%",height:"auto",playerRef:e,className:"video"}),a.createElement(N,{videoEl:e})),a.createElement("section",null,a.createElement("h1",{className:"topic"},r.snippet.title),r.snippet.description.split("\n").map((function(e,t){return a.createElement("p",{key:t},e)}))))};var $=function(){return a.createElement("div",null,"like")};function C(){var e=Object(o.a)(["\n  min-height: 50px;\n  margin: auto;\n"]);return C=function(){return e},e}function D(){var e=Object(o.a)(["\n  max-width: 1140px;\n  margin: auto;\n  min-height: 50px;\n"]);return D=function(){return e},e}var I=s.a.header(D()),S=s.a.footer(C());var R=function(){var e=Object(a.useState)("init"),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){j._event$.asObservable().subscribe((function(e){r(e)}))}),[]),"init"===n?a.createElement("div",{className:"container"},a.createElement("h1",null,"\u8b80\u53d6\u4e2d\uff0c\u8acb\u7a0d\u5019......")):a.createElement(a.Fragment,null,a.createElement(u.a,null,a.createElement(I,null,a.createElement("nav",null,a.createElement("ul",null,a.createElement("li",null,a.createElement(u.b,{to:"/"},"\u9996\u9801")),a.createElement("li",null,a.createElement(u.b,{to:"/like"},"\u6536\u85cf"))))),a.createElement("div",{className:"body"},a.createElement(O.c,null,a.createElement(O.a,{path:"/player/:id"},a.createElement(P,null)),a.createElement(O.a,{path:"/like"},a.createElement($,null)),a.createElement(O.a,{path:"/"},a.createElement(y,null))),a.createElement(S,null,"sample expired by ..."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.7ce0ef9a.chunk.js.map