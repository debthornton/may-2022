(this["webpackJsonpdeb.io"]=this["webpackJsonpdeb.io"]||[]).push([[31],{101:function(e,t,a){"use strict";var n=a(10),s=a(15),r=a(5),o=a.n(r),c=a(17),l=a.n(c),i=a(78),u=a.n(i),p=a(79),m={tag:p.tagPropType,listTag:p.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},b=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,c=e.children,l=e.tag,i=e.listTag,m=e["aria-label"],b=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),d=Object(p.mapToCssModules)(u()(t),r),g=Object(p.mapToCssModules)(u()("breadcrumb",a),r);return o.a.createElement(l,Object(n.a)({},b,{className:d,"aria-label":m}),o.a.createElement(i,{className:g},c))};b.propTypes=m,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=b},102:function(e,t,a){"use strict";var n=a(10),s=a(15),r=a(5),o=a.n(r),c=a(17),l=a.n(c),i=a(78),u=a.n(i),p=a(79),m={tag:p.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.active,c=e.tag,l=Object(s.a)(e,["className","cssModule","active","tag"]),i=Object(p.mapToCssModules)(u()(t,!!r&&"active","breadcrumb-item"),a);return o.a.createElement(c,Object(n.a)({},l,{className:i,"aria-current":r?"page":void 0}))};b.propTypes=m,b.defaultProps={tag:"li"},t.a=b},107:function(e,t,a){"use strict";var n=a(10),s=a(15),r=a(5),o=a.n(r),c=a(17),l=a.n(c),i=a(78),u=a.n(i),p=a(79),m={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,c=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(p.mapToCssModules)(u()(t,"card-body"),a);return o.a.createElement(c,Object(n.a)({},l,{className:i,ref:r}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},111:function(e,t,a){"use strict";var n=a(10),s=a(15),r=a(5),o=a.n(r),c=a(17),l=a.n(c),i=a(78),u=a.n(i),p=a(79),m={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(p.mapToCssModules)(u()(t,"card-title"),a);return o.a.createElement(r,Object(n.a)({},c,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},288:function(e,t,a){"use strict";var n=a(10),s=a(5),r=a.n(s),o=a(78),c=a.n(o),l=a(299),i=function(e){var t=c()("popover","show"),a=c()("popover-inner",e.innerClassName);return r.a.createElement(l.a,Object(n.a)({},e,{popperClassName:t,innerClassName:a}))};i.propTypes=l.b,i.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"},t.a=i},323:function(e,t,a){"use strict";var n=a(10),s=a(15),r=a(5),o=a.n(r),c=a(17),l=a.n(c),i=a(78),u=a.n(i),p=a(79),m={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(p.mapToCssModules)(u()(t,"popover-body"),a);return o.a.createElement(r,Object(n.a)({},c,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},90:function(e,t,a){"use strict";var n=a(5),s=a.n(n),r=a(101),o=a(102),c=a(88),l=a(86),i=function(e){return s.a.createElement(l.a,{id:"menu.".concat(e)})},u=function(e,t,a){return 0===a?"":e.split(t)[0]+t},p=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),s.a.createElement(n.Fragment,null,s.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return s.a.createElement(o.a,{key:n,active:a.length===n+1},a.length!==n+1?s.a.createElement(c.b,{to:"/"+u(t,e,n)},i(e)):i(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return s.a.createElement(n.Fragment,null,t&&s.a.createElement("h1",null,s.a.createElement(l.a,{id:t})),s.a.createElement(p,{match:a}))}},918:function(e,t,a){"use strict";a.r(t);var n=a(81),s=a(82),r=a(85),o=a(83),c=a(84),l=a(5),i=a.n(l),u=a(525),p=a(99),m=a(107),b=a(111),d=a(86),g=a(89),f=a(90),v=a(344),h=a(288),O=a(323),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).toggle=function(){a.setState((function(e){return{popoverOpen:!e.popoverOpen}}))},a.state={popoverOpen:!1},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("span",null,i.a.createElement(v.a,{className:"mr-1 mb-2",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),i.a.createElement(h.a,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},i.a.createElement(O.a,null,this.props.item.body)))}}]),t}(i.a.Component),E=a(347),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).toggle=function(){a.setState((function(e){return{tooltipOpen:!e.tooltipOpen}}))},a.state={tooltipOpen:!1},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("span",null,i.a.createElement(v.a,{className:"mr-1 mb-2",color:"secondary",id:"Tooltip-"+this.props.id},this.props.item.text),i.a.createElement(E.a,{placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:"Tooltip-"+this.props.id,toggle:this.toggle},this.props.item.body))}}]),t}(i.a.Component);a.d(t,"default",(function(){return N}));var N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={popovers:[{placement:"top",text:"Popover on top",body:"Augue laoreet rutrum faucibus vivamus sagittis lacus vel ."},{placement:"bottom",text:"Popover on bottom",body:"Vel augue laoreet rutrum Vivamus sagittis lacus faucibus."},{placement:"left",text:"Popover on left",body:"Lacus vel augue Vivamus sagittis laoreet rutrum faucibus."},{placement:"right",text:"Popover on right",body:"Laoreet rutrum faucibus vivamus sagittis lacus vel augue."}],tooltips:[{placement:"top",text:"Tooltip on top",body:"Vivamus sagittis lacus"},{placement:"bottom",text:"Tooltip on bottom",body:"Lacus vel augue"},{placement:"left",text:"Tooltip on left",body:"Laoreet rutrum faucibus"},{placement:"right",text:"Tooltip on right",body:"Augue rutrum vel"}]},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(l.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(g.a,{xxs:"12"},i.a.createElement(f.a,{heading:"menu.popover-tooltip",match:this.props.match}),i.a.createElement(g.b,{className:"mb-5"}))),i.a.createElement(u.a,null,i.a.createElement(g.a,{xxs:"12"},i.a.createElement(p.a,{className:"mb-4"},i.a.createElement(m.a,null,i.a.createElement(b.a,null,i.a.createElement(d.a,{id:"popover-tooltip.popover"})),this.state.popovers.map((function(e,t){return i.a.createElement(j,{key:t,item:e,id:t})})))))),i.a.createElement(u.a,null,i.a.createElement(g.a,{xxs:"12"},i.a.createElement(p.a,{className:"mb-4"},i.a.createElement(m.a,null,i.a.createElement(b.a,null,i.a.createElement(d.a,{id:"popover-tooltip.tooltip"})),this.state.tooltips.map((function(e,t){return i.a.createElement(y,{key:t,item:e,id:t})})))))))}}]),t}(l.Component)},99:function(e,t,a){"use strict";var n=a(10),s=a(15),r=a(5),o=a.n(r),c=a(17),l=a.n(c),i=a(78),u=a.n(i),p=a(79),m={tag:p.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.color,c=e.body,l=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,d=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(p.mapToCssModules)(u()(t,"card",!!l&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),a);return o.a.createElement(m,Object(n.a)({},d,{className:g,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b}}]);