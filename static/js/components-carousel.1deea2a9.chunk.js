(this["webpackJsonpdeb.io"]=this["webpackJsonpdeb.io"]||[]).push([[20],{188:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(12),r=a(81),l=a(82),i=a(85),c=a(83),s=a(98),o=a(84),m=a(5),d=a.n(m),u=a(197),g=a(21);a(198);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var b=-1,E=-1,h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).onResize=a.onResize.bind(Object(s.a)(a)),a.renderDots=a.renderDots.bind(Object(s.a)(a)),a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.destroyGlide(),this.initGlide()}},{key:"componentDidMount",value:function(){this.initGlide()}},{key:"initGlide",value:function(){this.glideCarousel=new u.a(this.carousel,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.props.settings,{direction:Object(g.c)().direction})),this.glideCarousel.mount(),this.glideCarousel.on("resize",this.onResize),E=setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),500)}},{key:"componentWillUnmount",value:function(){this.destroyGlide()}},{key:"destroyGlide",value:function(){clearTimeout(b),clearTimeout(E),this.glideCarousel&&this.glideCarousel.destroy()}},{key:"onResize",value:function(){var e=this;clearTimeout(b),b=setTimeout((function(){e.glideCarousel.update(),b=-1}),500)}},{key:"renderDots",value:function(){for(var e=d.a.Children.count(this.props.children),t=[],a=0;a<e;a++)t.push(d.a.createElement("button",{className:"glide__bullet slider-dot",key:a,"data-glide-dir":"="+a}));return t}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement("div",{className:"glide",ref:function(t){return e.carousel=t}},d.a.createElement("div",{"data-glide-el":"track",className:"glide__track"},d.a.createElement("div",{className:"glide__slides"},this.props.children)),!this.props.settings.hideNav&&d.a.createElement("div",{className:"glide__arrows slider-nav","data-glide-el":"controls"},d.a.createElement("button",{className:"glide__arrow glide__arrow--left left-arrow btn btn-link","data-glide-dir":"<"},d.a.createElement("i",{className:"simple-icon-arrow-left"})),d.a.createElement("div",{className:"glide__bullets slider-dot-container","data-glide-el":"controls[nav]"},this.renderDots()),d.a.createElement("button",{className:"glide__arrow glide__arrow--right right-arrow btn btn-link","data-glide-dir":">"},d.a.createElement("i",{className:"simple-icon-arrow-right"})))))}}]),t}(d.a.Component)},90:function(e,t,a){"use strict";var n=a(5),r=a.n(n),l=a(101),i=a(102),c=a(88),s=a(86),o=function(e){return r.a.createElement(s.a,{id:"menu.".concat(e)})},m=function(e,t,a){return 0===a?"":e.split(t)[0]+t},d=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return r.a.createElement(i.a,{key:n,active:a.length===n+1},a.length!==n+1?r.a.createElement(c.b,{to:"/"+m(t,e,n)},o(e)):o(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return r.a.createElement(n.Fragment,null,t&&r.a.createElement("h1",null,r.a.createElement(s.a,{id:t})),r.a.createElement(d,{match:a}))}},921:function(e,t,a){"use strict";a.r(t);var n=a(81),r=a(82),l=a(85),i=a(83),c=a(84),s=a(5),o=a.n(s),m=a(99),d=a(107),u=a(525),g=a(111),p=a(89),b=a(90),E=a(86),h=[{id:1,title:"1 Homemade Cheesecake with Fresh Berries and Mint",img:"/assets/img/card-thumb-1.jpg",detail:"10.12.2019",category:"Cupcakes",badges:[{color:"theme-1",title:"NEW"},{color:"theme-2",title:"ONHOLD"}]},{id:2,title:"2 Wedding Cake with Flowers Macarons and Blueberries",img:"/assets/img/card-thumb-2.jpg",detail:"01.06.2019",category:"Cakes",badges:[{color:"theme-2",title:"DONE"},{color:"primary",title:"TRENDING"}]},{id:3,title:"3 Cheesecake with Chocolate Cookies and Cream Biscuits",img:"/assets/img/card-thumb-3.jpg",detail:"27.05.2019",category:"Cupcakes",badges:[{color:"secondary",title:"PROCESSED"}]},{id:4,title:"4 Homemade Cheesecake with Fresh Berries and Mint",img:"/assets/img/card-thumb-1.jpg",detail:"10.12.2019",category:"Cakes",badges:[{color:"primary",title:"NEW"}]},{id:5,title:"5 Cheesecake with Chocolate Cookies and Cream Biscuits",img:"/assets/img/card-thumb-3.jpg",detail:"27.05.2019",category:"Cupcakes",badges:[{color:"theme-3",title:"PROCESSED"}]}],f=a(188);a.d(t,"default",(function(){return N}));var v=function(e){var t=e.title,a=e.img,n=e.detail,r=e.badges;return o.a.createElement("div",{className:"glide-item"},o.a.createElement(m.a,{className:"flex-row"},o.a.createElement("div",{className:"w-50 position-relative"},o.a.createElement("img",{className:"card-img-left",src:a,alt:t}),r&&r.map((function(e,t){return o.a.createElement("span",{key:t,className:"badge badge-pill badge-".concat(e.color," position-absolute ").concat(0===t?"badge-top-left":"badge-top-left-"+(t+1))},e.title)}))),o.a.createElement("div",{className:"w-50"},o.a.createElement(d.a,null,o.a.createElement("h6",{className:"mb-4"},t),o.a.createElement("footer",null,o.a.createElement("p",{className:"text-muted text-small mb-0 font-weight-light"},n))))))},w=function(e){var t=e.title,a=e.img,n=e.category,r=e.detail,l=e.badges;return o.a.createElement("div",{className:"glide-item"},o.a.createElement(m.a,{className:"flex-row"},o.a.createElement("img",{className:"list-thumbnail responsive border-0 card-img-left",src:a,alt:t}),o.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},o.a.createElement(d.a,{className:"align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},o.a.createElement("p",{className:"list-item-heading mb-1 truncate"},t),o.a.createElement("p",{className:"mb-0 text-muted text-small"},n),o.a.createElement("p",{className:"mb-0 text-muted text-small"},r),o.a.createElement("div",null,l&&l.map((function(e,t){return o.a.createElement("span",{key:t,className:"badge badge-pill badge-".concat(e.color," ").concat(t<l.length&&"mr-1")},e.title)})))))))},y=function(e){var t=e.title,a=e.img,n=e.detail,r=e.badges;return o.a.createElement("div",{className:"glide-item"},o.a.createElement(m.a,null,o.a.createElement("div",{className:"position-relative"},o.a.createElement("img",{className:"card-img-top",src:a,alt:t}),r&&r.map((function(e,t){return o.a.createElement("span",{key:t,className:"badge badge-pill badge-".concat(e.color," position-absolute ").concat(0===t?"badge-top-left":"badge-top-left-"+(t+1))},e.title)}))),o.a.createElement(d.a,null,o.a.createElement("h6",{className:"mb-4"},t),o.a.createElement("footer",null,o.a.createElement("p",{className:"text-muted text-small mb-0 font-weight-light"},n)))))},N=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(p.a,{xxs:"12"},o.a.createElement(b.a,{heading:"menu.carousel",match:this.props.match}),o.a.createElement(p.b,{className:"mb-5"}))),o.a.createElement(u.a,null,o.a.createElement(p.a,{xxs:"12"},o.a.createElement(g.a,null,o.a.createElement(E.a,{id:"carousel.basic"}))),o.a.createElement(p.a,{xxs:"12",className:"pl-0 pr-0 mb-5"},o.a.createElement(f.a,{settings:{gap:5,perView:3,type:"carousel",breakpoints:{600:{perView:1},1400:{perView:2}}}},h.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(v,e))}))))),o.a.createElement(u.a,null,o.a.createElement(p.a,{xxs:"12"},o.a.createElement(g.a,null,o.a.createElement(E.a,{id:"carousel.single"}))),o.a.createElement(p.a,{xxs:"12",className:"pl-0 pr-0 mb-5"},o.a.createElement(f.a,{settings:{gap:5,perView:1,type:"carousel"}},h.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(w,e))}))))),o.a.createElement(u.a,null,o.a.createElement(p.a,{xxs:"12"},o.a.createElement(g.a,null,o.a.createElement(E.a,{id:"carousel.without-controls"}))),o.a.createElement(p.a,{xxs:"12",className:"pl-0 pr-0 mb-5"},o.a.createElement(f.a,{settings:{gap:5,perView:4,type:"carousel",breakpoints:{480:{perView:1},800:{perView:2},1200:{perView:3}},hideNav:!0}},h.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(y,e))}))))))}}]),t}(s.Component)}}]);