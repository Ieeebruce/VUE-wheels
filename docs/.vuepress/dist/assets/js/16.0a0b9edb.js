(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{109:function(t,e,n){},132:function(t,e,n){"use strict";var o=n(109);n.n(o).a},137:function(t,e,n){},138:function(t,e,n){"use strict";var o={name:"gulu-button",components:{"gulu-icon":n(150).a},props:{icon:{},load:{type:Boolean,default:!1},type:{type:String,default:"default",validator:function(t){return"default"===t||"primary"}},shape:{type:String,default:"triangle",validator:function(t){return"triangle"===t||"circle"}},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},i=(n(132),n(3)),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"g-button",class:"icon-"+t.iconPosition+" "+t.type+" "+t.shape,on:{click:function(e){return t.$emit("click")}}},[t.icon&&!t.load?n("gulu-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.load?n("gulu-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):t._e(),t._v(" "),n("div",{staticClass:"gcontent"},[t._t("default")],2)],1)},[],!1,null,"1f69628c",null);e.a=r.exports},174:function(t,e,n){"use strict";var o=n(137);n.n(o).a},175:function(t,e,n){"use strict";n(146);var o={name:"gulu-popover",props:{popClassName:{type:String},position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}},container:{type:Element}},data:function(){return{visible:!1}},mounted:function(){this.addPopoverListeners()},beforeDestroy:function(){this.putBackContent(),this.removePopoverListeners()},computed:{openEvent:function(){return"click"===this.trigger?"click":"mouseenter"},closeEvent:function(){return"click"===this.trigger?"click":"mouseleave"}},methods:{addPopoverListeners:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},removePopoverListeners:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},putBackContent:function(){var t=this.$refs,e=t.contentWrapper,n=t.popover;e&&n.appendChild(e)},positionContent:function(){var t=this.$refs,e=t.contentWrapper,n=t.triggerWrapper;(this.container||document.body).appendChild(e);var o=n.getBoundingClientRect(),i=o.width,r=o.height,s=o.top,c=o.left,l=e.getBoundingClientRect().height,a={top:{top:s+window.scrollY,left:c+window.scrollX},bottom:{top:s+r+window.scrollY,left:c+window.scrollX},left:{top:s+window.scrollY+(r-l)/2,left:c+window.scrollX},right:{top:s+window.scrollY+(r-l)/2,left:c+window.scrollX+i}};e.style.left=a[this.position].left+"px",e.style.top=a[this.position].top+"px"},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},open:function(){var t=this;this.visible=!0,this.$emit("open"),this.$nextTick(function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)})},close:function(){this.visible=!1,this.$emit("close"),document.removeEventListener("click",this.onClickDocument)},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())}}},i=(n(174),n(3)),r=Object(i.a)(o,function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{ref:"popover",staticClass:"popover"},[e.visible?o("div",{ref:"contentWrapper",staticClass:"gulu-popover-content-wrapper",class:[(t={},t["position-"+e.position]=!0,t),e.popClassName]},[e._t("content",null,{close:e.close})],2):e._e(),e._v(" "),o("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[e._t("default")],2)])},[],!1,null,"98934ffc",null);e.a=r.exports},307:function(t,e,n){"use strict";n.r(e);var o=n(175),i=n(138),r={components:{"g-popover":o.a,"g-button":i.a}},s=n(3),c=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("g-popover",{scopedSlots:t._u([{key:"content",fn:function(e){var o=e.close;return[t._v(" 弹出内容\n            "),n("g-button",{on:{click:o}},[t._v("关闭")])]}}])},[t._v(" "),n("g-button",[t._v("内部关闭")])],1)],1)},[],!1,null,null,null);e.default=c.exports}}]);