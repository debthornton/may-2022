(this["webpackJsonpdeb.io"]=this["webpackJsonpdeb.io"]||[]).push([[18],{101:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(5),r=t.n(l),s=t(17),o=t.n(s),m=t(78),i=t.n(m),u=t(79),b={tag:u.tagPropType,listTag:u.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},d=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,s=e.children,o=e.tag,m=e.listTag,b=e["aria-label"],d=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),E=Object(u.mapToCssModules)(i()(a),l),p=Object(u.mapToCssModules)(i()("breadcrumb",t),l);return r.a.createElement(o,Object(n.a)({},d,{className:E,"aria-label":b}),r.a.createElement(m,{className:p},s))};d.propTypes=b,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=d},102:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(5),r=t.n(l),s=t(17),o=t.n(s),m=t(78),i=t.n(m),u=t(79),b={tag:u.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,l=e.active,s=e.tag,o=Object(c.a)(e,["className","cssModule","active","tag"]),m=Object(u.mapToCssModules)(i()(a,!!l&&"active","breadcrumb-item"),t);return r.a.createElement(s,Object(n.a)({},o,{className:m,"aria-current":l?"page":void 0}))};d.propTypes=b,d.defaultProps={tag:"li"},a.a=d},107:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(5),r=t.n(l),s=t(17),o=t.n(s),m=t(78),i=t.n(m),u=t(79),b={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,s=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),m=Object(u.mapToCssModules)(i()(a,"card-body"),t);return r.a.createElement(s,Object(n.a)({},o,{className:m,ref:l}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d},111:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(5),r=t.n(l),s=t(17),o=t.n(s),m=t(78),i=t.n(m),u=t(79),b={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(c.a)(e,["className","cssModule","tag"]),o=Object(u.mapToCssModules)(i()(a,"card-title"),t);return r.a.createElement(l,Object(n.a)({},s,{className:o}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d},133:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(92),r=t(87),s=t(5),o=t.n(s),m=t(17),i=t.n(m),u=t(78),b=t.n(u),d=t(120),E=t(79),p={children:i.a.node,active:i.a.bool,disabled:i.a.bool,divider:i.a.bool,tag:E.tagPropType,header:i.a.bool,onClick:i.a.func,className:i.a.string,cssModule:i.a.object,toggle:i.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(t)),t.getTabIndex=t.getTabIndex.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},t.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},t.render=function(){var e=this.getTabIndex(),a=e>-1?"menuitem":void 0,t=Object(E.omit)(this.props,["toggle"]),l=t.className,r=t.cssModule,s=t.divider,m=t.tag,i=t.header,u=t.active,d=Object(c.a)(t,["className","cssModule","divider","tag","header","active"]),p=Object(E.mapToCssModules)(b()(l,{disabled:d.disabled,"dropdown-item":!s&&!i,active:u,"dropdown-header":i,"dropdown-divider":s}),r);return"button"===m&&(i?m="h6":s?m="div":d.href&&(m="a")),o.a.createElement(m,Object(n.a)({type:"button"===m&&(d.onClick||this.props.toggle)?"button":void 0},d,{tabIndex:e,role:a,className:p,onClick:this.onClick}))},a}(o.a.Component);g.propTypes=p,g.defaultProps={tag:"button",toggle:!0},g.contextType=d.a,a.a=g},192:function(e,a,t){"use strict";var n=t(10),c=t(5),l=t.n(c),r=t(17),s=t.n(r),o=t(158),m={children:s.a.node},i=function(e){return l.a.createElement(o.a,Object(n.a)({group:!0},e))};i.propTypes=m,a.a=i},288:function(e,a,t){"use strict";var n=t(10),c=t(5),l=t.n(c),r=t(78),s=t.n(r),o=t(299),m=function(e){var a=s()("popover","show"),t=s()("popover-inner",e.innerClassName);return l.a.createElement(o.a,Object(n.a)({},e,{popperClassName:a,innerClassName:t}))};m.propTypes=o.b,m.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"},a.a=m},323:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(5),r=t.n(l),s=t(17),o=t.n(s),m=t(78),i=t.n(m),u=t(79),b={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(c.a)(e,["className","cssModule","tag"]),o=Object(u.mapToCssModules)(i()(a,"popover-body"),t);return r.a.createElement(l,Object(n.a)({},s,{className:o}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d},478:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(5),r=t.n(l),s=t(17),o=t.n(s),m=t(78),i=t.n(m),u=t(79),b={tag:u.tagPropType,"aria-label":o.a.string,className:o.a.string,cssModule:o.a.object,role:o.a.string,size:o.a.string,vertical:o.a.bool},d=function(e){var a=e.className,t=e.cssModule,l=e.size,s=e.vertical,o=e.tag,m=Object(c.a)(e,["className","cssModule","size","vertical","tag"]),b=Object(u.mapToCssModules)(i()(a,!!l&&"btn-group-"+l,s?"btn-group-vertical":"btn-group"),t);return r.a.createElement(o,Object(n.a)({},m,{className:b}))};d.propTypes=b,d.defaultProps={tag:"div",role:"group"},a.a=d},479:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(5),r=t.n(l),s=t(17),o=t.n(s),m=t(78),i=t.n(m),u=t(79),b={tag:u.tagPropType,"aria-label":o.a.string,className:o.a.string,cssModule:o.a.object,role:o.a.string},d=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(c.a)(e,["className","cssModule","tag"]),o=Object(u.mapToCssModules)(i()(a,"btn-toolbar"),t);return r.a.createElement(l,Object(n.a)({},s,{className:o}))};d.propTypes=b,d.defaultProps={tag:"div",role:"toolbar"},a.a=d},90:function(e,a,t){"use strict";var n=t(5),c=t.n(n),l=t(101),r=t(102),s=t(88),o=t(86),m=function(e){return c.a.createElement(o.a,{id:"menu.".concat(e)})},i=function(e,a,t){return 0===t?"":e.split(a)[0]+a},u=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),c.a.createElement(n.Fragment,null,c.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,n){return c.a.createElement(r.a,{key:n,active:t.length===n+1},t.length!==n+1?c.a.createElement(s.b,{to:"/"+i(a,e,n)},m(e)):m(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return c.a.createElement(n.Fragment,null,a&&c.a.createElement("h1",null,c.a.createElement(o.a,{id:a})),c.a.createElement(u,{match:t}))}},917:function(e,a,t){"use strict";t.r(a);var n=t(81),c=t(82),l=t(85),r=t(83),s=t(84),o=t(5),m=t.n(o),i=t(525),u=t(99),b=t(107),d=t(111),E=t(344),p=t(478),g=t(479),h=t(192),N=t(514),f=t(517),v=t(133),y=t(86),k=t(89),O=t(90),j=t(288),C=t(323),x=t(78),T=t.n(x),M=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(r.a)(a).call(this,e))).handleOnClick=function(){t.setState({status:"processing"},(function(){t.props.onClick().then((function(e){t.setState({status:"success",message:e})})).catch((function(e){t.setState({status:"fail",message:e})})).finally((function(){t.setState({messageShow:!0},(function(){setTimeout((function(){t.setState({messageShow:!1,status:"default"})}),3e3)}))}))}))},t.state={status:"default",message:"",messageShow:!1},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return m.a.createElement("span",null,m.a.createElement(E.a,{id:this.props.id,className:"btn-multiple-state  ".concat(this.props.className,"  ").concat(T()({"show-spinner":"processing"===this.state.status,"show-success":"success"===this.state.status,"show-fail":"fail"===this.state.status})),color:this.props.color,onClick:this.handleOnClick,disabled:"default"!==this.state.status},m.a.createElement(j.a,{placement:"top",isOpen:this.state.messageShow,target:this.props.id},m.a.createElement(C.a,null,this.state.message)),m.a.createElement("span",{className:"spinner d-inline-block"},m.a.createElement("span",{className:"bounce1"}),m.a.createElement("span",{className:"bounce2"}),m.a.createElement("span",{className:"bounce3"})),m.a.createElement("span",{className:"icon success"},m.a.createElement("i",{className:"simple-icon-check"})),m.a.createElement("span",{className:"icon fail"},m.a.createElement("i",{className:"simple-icon-exclamation"})),m.a.createElement("span",{className:"label"},this.props.children)))}}]),a}(m.a.Component),w=function(e){function a(){var e,t;Object(n.a)(this,a);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(s)))).handleSuccessButtonClick=function(){return new Promise((function(e,a){setTimeout((function(){e("Everything went right!")}),2e3)}))},t.handleFailButtonClick=function(){return new Promise((function(e,a){setTimeout((function(){a("Something is wrong!")}),2e3)}))},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.states"})),m.a.createElement("p",{className:"mb-1"},m.a.createElement(y.a,{id:"button.states-text"})),m.a.createElement(M,{id:"successButton",color:"primary",className:"mb-3",onClick:this.handleSuccessButtonClick},m.a.createElement(y.a,{id:"button.click-here"})),m.a.createElement("p",{className:"mb-1"},m.a.createElement(y.a,{id:"button.states-text-alternate"})),m.a.createElement(M,{id:"failButton",color:"secondary",className:"mb-3",onClick:this.handleFailButtonClick},m.a.createElement(y.a,{id:"button.click-here"})))))}}]),a}(o.Component);t.d(a,"default",(function(){return P}));var P=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(r.a)(a).call(this,e))).nestingToggle=function(){t.setState({nestingDropdownOpen:!t.state.nestingDropdownOpen})},t.radioButtonSelect=function(e){t.setState({selectedRadio:e})},t.checkButtonCheck=function(e){var a=t.state.checkedCheckboxes.indexOf(e);-1===a?t.state.checkedCheckboxes.push(e):t.state.checkedCheckboxes.splice(a,1),t.setState({checkedCheckboxes:t.state.checkedCheckboxes})},t.state={nestingDropdownOpen:!1,checkedCheckboxes:[],selectedRadio:0},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement(o.Fragment,null,m.a.createElement(i.a,null,m.a.createElement(k.a,{xxs:"12"},m.a.createElement(O.a,{heading:"menu.buttons",match:this.props.match}),m.a.createElement(k.b,{className:"mb-5"}))),m.a.createElement(i.a,null,m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.rounded"})),m.a.createElement(E.a,{color:"primary",className:"mb-2"},m.a.createElement(y.a,{id:"button.primary"}))," ",m.a.createElement(E.a,{color:"secondary",className:"mb-2"},m.a.createElement(y.a,{id:"button.secondary"}))," ",m.a.createElement(E.a,{color:"success",className:"mb-2"},m.a.createElement(y.a,{id:"button.success"}))," ",m.a.createElement(E.a,{color:"info",className:"mb-2"},m.a.createElement(y.a,{id:"button.info"}))," ",m.a.createElement(E.a,{color:"warning",className:"mb-2"},m.a.createElement(y.a,{id:"button.warning"}))," ",m.a.createElement(E.a,{color:"danger",className:"mb-2"},m.a.createElement(y.a,{id:"button.danger"}))," ",m.a.createElement(E.a,{color:"light",className:"mb-2"},m.a.createElement(y.a,{id:"button.light"}))," ",m.a.createElement(E.a,{color:"dark",className:"mb-2"},m.a.createElement(y.a,{id:"button.dark"}))))),m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.outline"})),m.a.createElement(E.a,{outline:!0,color:"primary",className:"mb-2"},m.a.createElement(y.a,{id:"button.primary"}))," ",m.a.createElement(E.a,{outline:!0,color:"secondary",className:"mb-2"},m.a.createElement(y.a,{id:"button.secondary"}))," ",m.a.createElement(E.a,{outline:!0,color:"success",className:"mb-2"},m.a.createElement(y.a,{id:"button.success"}))," ",m.a.createElement(E.a,{outline:!0,color:"info",className:"mb-2"},m.a.createElement(y.a,{id:"button.info"}))," ",m.a.createElement(E.a,{outline:!0,color:"warning",className:"mb-2"},m.a.createElement(y.a,{id:"button.warning"}))," ",m.a.createElement(E.a,{outline:!0,color:"danger",className:"mb-2"},m.a.createElement(y.a,{id:"button.danger"}))," ",m.a.createElement(E.a,{outline:!0,color:"light",className:"mb-2"},m.a.createElement(y.a,{id:"button.light"}))," ",m.a.createElement(E.a,{outline:!0,color:"dark",className:"mb-2"},m.a.createElement(y.a,{id:"button.dark"}))))),m.a.createElement(w,null),m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.sizes"})),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.large-button"})),m.a.createElement(E.a,{color:"primary",size:"lg",className:"mb-2"},m.a.createElement(y.a,{id:"button.large-button"}))," ",m.a.createElement(E.a,{color:"secondary",size:"lg",className:"mb-2"},m.a.createElement(y.a,{id:"button.large-button"}))),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.small-button"})),m.a.createElement(E.a,{color:"primary",size:"sm",className:"mb-2"},m.a.createElement(y.a,{id:"button.small-button"}))," ",m.a.createElement(E.a,{color:"secondary",size:"sm",className:"mb-2"},m.a.createElement(y.a,{id:"button.small-button"}))),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.extra-small-button"})),m.a.createElement(E.a,{color:"primary",size:"xs",className:"mb-2"},m.a.createElement(y.a,{id:"button.extra-small-button"}))," ",m.a.createElement(E.a,{color:"secondary",size:"xs",className:"mb-2"},m.a.createElement(y.a,{id:"button.extra-small-button"}))),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.block-button"})),m.a.createElement(E.a,{color:"primary",block:!0,className:"mb-2"},m.a.createElement(y.a,{id:"button.block-button"}))," ",m.a.createElement(E.a,{color:"secondary",block:!0,className:"mb-2"},m.a.createElement(y.a,{id:"button.block-button"})))))),m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.states"})),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.active"})),m.a.createElement(E.a,{color:"primary",href:"#",className:"mb-2"},m.a.createElement(y.a,{id:"button.primary-link"}))," ",m.a.createElement(E.a,{color:"secondary",href:"#",className:"mb-2"},m.a.createElement(y.a,{id:"button.link"}))),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.disabled"})),m.a.createElement(E.a,{color:"primary",disabled:!0,className:"mb-2"},m.a.createElement(y.a,{id:"button.primary-button"}))," ",m.a.createElement(E.a,{color:"secondary",disabled:!0,className:"mb-2"},m.a.createElement(y.a,{id:"button.button"})))))),m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null," ",m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.button-groups"})),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.basic"})),m.a.createElement(p.a,{className:"mb-2"},m.a.createElement(E.a,{color:"primary"},m.a.createElement(y.a,{id:"button.left"})),m.a.createElement(E.a,{color:"primary"},m.a.createElement(y.a,{id:"button.middle"})),m.a.createElement(E.a,{color:"primary"},m.a.createElement(y.a,{id:"button.right"})))),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.toolbar"})),m.a.createElement(g.a,null,m.a.createElement(p.a,{className:"mb-2 mr-1"},m.a.createElement(E.a,{color:"primary"},"1"),m.a.createElement(E.a,{color:"primary"},"2"),m.a.createElement(E.a,{color:"primary"},"3"),m.a.createElement(E.a,{color:"primary"},"4")),m.a.createElement(p.a,{className:"mb-2 mr-1"},m.a.createElement(E.a,{color:"primary"},"5"),m.a.createElement(E.a,{color:"primary"},"6"),m.a.createElement(E.a,{color:"primary"},"7")),m.a.createElement(p.a,{className:"mb-2"},m.a.createElement(E.a,{color:"primary"},"8")))),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.sizes"})),m.a.createElement(p.a,{size:"lg",className:"mb-2 mr-1"},m.a.createElement(E.a,{color:"primary"},"1"),m.a.createElement(E.a,{color:"primary"},"2")),m.a.createElement(p.a,{className:"mb-2 mr-1"},m.a.createElement(E.a,{color:"primary"},"1"),m.a.createElement(E.a,{color:"primary"},"2"),m.a.createElement(E.a,{color:"primary"},"3")),m.a.createElement(p.a,{size:"sm",className:"mb-2"},m.a.createElement(E.a,{color:"primary"},"1"),m.a.createElement(E.a,{color:"primary"},"2"),m.a.createElement(E.a,{color:"primary"},"3")))))),m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.nesting"})),m.a.createElement(p.a,{className:"mb-2"},m.a.createElement(E.a,null,"1"),m.a.createElement(E.a,null,"2"),m.a.createElement(h.a,{isOpen:this.state.nestingDropdownOpen,toggle:this.nestingToggle},m.a.createElement(N.a,{caret:!0},m.a.createElement(y.a,{id:"button.dropdown"})),m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement(y.a,{id:"button.dropdown-link"})),m.a.createElement(v.a,null,m.a.createElement(y.a,{id:"button.dropdown-link"})))))))),m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.checkbox-radio-button"})),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.checkbox"})),m.a.createElement(E.a,{className:"mb-2",color:"primary",onClick:function(){return e.checkButtonCheck(1)},active:-1!==this.state.checkedCheckboxes.indexOf(1)},m.a.createElement(y.a,{id:"button.checkbox"})),m.a.createElement("br",null),m.a.createElement(E.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(){return e.checkButtonCheck(2)},active:-1!==this.state.checkedCheckboxes.indexOf(2)},m.a.createElement(y.a,{id:"button.checkbox"}))),m.a.createElement("div",{className:"mb-4"},m.a.createElement("h6",{className:"mb-2"},m.a.createElement(y.a,{id:"button.radio-button"})),m.a.createElement(p.a,null,m.a.createElement(E.a,{color:"primary",onClick:function(){return e.radioButtonSelect(1)},active:1===this.state.selectedRadio},m.a.createElement(y.a,{id:"button.radio"})),m.a.createElement(E.a,{color:"primary",onClick:function(){return e.radioButtonSelect(2)},active:2===this.state.selectedRadio},m.a.createElement(y.a,{id:"button.radio"})),m.a.createElement(E.a,{color:"primary",onClick:function(){return e.radioButtonSelect(3)},active:3===this.state.selectedRadio},m.a.createElement(y.a,{id:"button.radio"}))))))),m.a.createElement(k.a,{xxs:"12",className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(y.a,{id:"button.default"})),m.a.createElement(E.a,{color:"primary",className:"default mb-2"},m.a.createElement(y.a,{id:"button.primary"}))," ",m.a.createElement(E.a,{color:"secondary",className:"default mb-2"},m.a.createElement(y.a,{id:"button.secondary"}))," ",m.a.createElement(E.a,{color:"success",className:"default mb-2"},m.a.createElement(y.a,{id:"button.success"}))," ",m.a.createElement(E.a,{color:"info",className:"default mb-2"},m.a.createElement(y.a,{id:"button.info"}))," ",m.a.createElement(E.a,{color:"warning",className:"default mb-2"},m.a.createElement(y.a,{id:"button.warning"}))," ",m.a.createElement(E.a,{color:"danger",className:"default mb-2"},m.a.createElement(y.a,{id:"button.danger"}))," ",m.a.createElement(E.a,{color:"light",className:"default mb-2"},m.a.createElement(y.a,{id:"button.light"}))," ",m.a.createElement(E.a,{color:"dark",className:"default mb-2"},m.a.createElement(y.a,{id:"button.dark"})))))))}}]),a}(o.Component);P.whyDidYouRender=!0},99:function(e,a,t){"use strict";var n=t(10),c=t(15),l=t(5),r=t.n(l),s=t(17),o=t.n(s),m=t(78),i=t.n(m),u=t(79),b={tag:u.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,l=e.color,s=e.body,o=e.inverse,m=e.outline,b=e.tag,d=e.innerRef,E=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.mapToCssModules)(i()(a,"card",!!o&&"text-white",!!s&&"card-body",!!l&&(m?"border":"bg")+"-"+l),t);return r.a.createElement(b,Object(n.a)({},E,{className:p,ref:d}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d}}]);