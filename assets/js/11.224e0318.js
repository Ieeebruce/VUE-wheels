(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{135:function(t,s,a){},136:function(t,s,a){},171:function(t,s,a){"use strict";var o=a(135);a.n(o).a},172:function(t,s,a){"use strict";var o=a(136);a.n(o).a},176:function(t,s,a){"use strict";a(141),a(142),a(133);var o={name:"gulu-row",props:{gap:{type:[Number,String]}},computed:{rowStyle:function(){var t=this.gap;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gap=t.gap})}},c=(a(172),a(3)),i=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",style:this.rowStyle},[this._t("default")],2)},[],!1,null,"94791ce4",null);s.a=i.exports},177:function(t,s,a){"use strict";var o=a(33),c=(a(133),a(199),a(200),a(141),a(142),a(32)),i=a.n(c),l=function(t){var s=i()(t),a=!0;return s.forEach(function(t){["span","offset"].includes(t)||(a=!1)}),a},e={name:"gulu-col",data:function(){return{gap:0}},props:{span:{type:[Number,String],default:24},offset:{type:[Number,String],default:0},ipad:{type:Object,validator:l},narrowPc:{type:Object,validator:l},pc:{type:Object,validator:l},widePc:{type:Object,validator:l}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var a=[];return t.span&&a.push("span-".concat(s).concat(t.span)),t.offset&&a.push("offset-".concat(s).concat(t.offset)),a}},computed:{styleCol:function(){return{paddingLeft:this.gap/2+"px",paddingRight:this.gap/2+"px"}},classRow:function(){var t=this.span,s=this.offset,a=this.ipad,c=this.narrowPc,i=this.pc,l=this.widePc,e=this.createClasses;return[].concat(Object(o.a)(e({span:t,offset:s})),Object(o.a)(e(a,"ipad-")),Object(o.a)(e(c,"narrow-pc-")),Object(o.a)(e(i,"pc-")),Object(o.a)(e(l,"wide-pc-")))}}},n=(a(171),a(3)),r=Object(n.a)(e,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col",class:this.classRow,style:this.styleCol},[s("div",{staticStyle:{border:"1px solid red"}},[this._t("default")],2)])},[],!1,null,"b1676092",null);s.a=r.exports},201:function(t,s,a){},273:function(t,s,a){"use strict";var o=a(201);a.n(o).a},298:function(t,s,a){"use strict";a.r(s);var o=a(177),c=a(176),i={components:{"g-col":o.a,"g-row":c.a}},l=(a(273),a(3)),e=Object(l.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("g-row",{staticClass:"demoRow"},[a("g-col",{attrs:{span:"8"}},[a("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),a("g-col",{attrs:{span:"8"}},[a("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),a("g-col",{attrs:{span:"8"}},[a("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),a("g-row",{staticClass:"demoRow"},[a("g-col",{attrs:{span:"6"}},[a("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),a("g-col",{attrs:{span:"6"}},[a("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),a("g-col",{attrs:{span:"6"}},[a("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),a("g-col",{attrs:{span:"6"}},[a("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),a("g-row",{staticClass:"demoRow"},[a("g-col",{attrs:{span:"4"}},[a("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("g-col",{attrs:{span:"4"}},[a("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("g-col",{attrs:{span:"4"}},[a("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("g-col",{attrs:{span:"4"}},[a("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("g-col",{attrs:{span:"4"}},[a("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("g-col",{attrs:{span:"4"}},[a("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),a("g-row",{staticClass:"demoRow"},[a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])])],1)],1)},[],!1,null,"c3145c30",null);s.default=e.exports}}]);