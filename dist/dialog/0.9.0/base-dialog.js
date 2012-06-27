define("#dialog/0.9.0/base-dialog",["#jquery/1.7.2/jquery","#overlay/0.9.7/overlay","#position/0.9.2/position","#iframe-shim/0.9.2/iframe-shim","#widget/0.9.16/widget","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser","#widget/0.9.16/auto-render","#overlay/0.9.7/mask"],function(e,t,n){function a(e){e.attr("tabindex")==null&&e.attr("tabindex","-1")}var r=e("#jquery/1.7.2/jquery"),i=e("#overlay/0.9.7/overlay"),s=e("#overlay/0.9.7/mask"),o=e("#events/0.9.1/events"),u=i.extend({attrs:{trigger:null,triggerType:"click",zIndex:999,confirmElement:null,cancelElement:null,closeElement:null,titleElement:null,title:"",contentElement:null,content:"",hasMask:!1,onConfirm:function(){},onClose:function(){}},parseElement:function(){u.superclass.parseElement.call(this),this.set("trigger",r(this.get("trigger"))),this.set("confirmElement",this.$(this.get("confirmElement"))),this.set("cancelElement",this.$(this.get("cancelElement"))),this.set("closeElement",this.$(this.get("closeElement"))),this.set("titleElement",this.$(this.get("titleElement"))),this.set("contentElement",this.$(this.get("contentElement")))},events:{"click {{attrs.confirmElement}}":"_confirmHandler","click {{attrs.cancelElement}}":"_closeHandler","click {{attrs.closeElement}}":"_closeHandler"},_confirmHandler:function(){this.trigger("confirm")},_closeHandler:function(){this.trigger("close"),this.hide(),this.get("trigger").focus()},delegateEvents:function(){u.superclass.delegateEvents.call(this);var e=this;this.get("trigger").bind(this.get("triggerType"),function(t){t.preventDefault(),e.activeTrigger=this,e.show()}),o.mixTo(this.element[0]),this.element[0].on("confirm",this._confirmHandler,this),this.element[0].on("close cancel",this._closeHandler,this)},show:function(){return u.superclass.show.call(this)},hide:function(){return u.superclass.hide.call(this)},setup:function(){this._setupMask(),a(this.element),a(this.get("trigger"))},_setupMask:function(){this.before("show",function(){this.get("hasMask")&&s.show()}),this.before("hide",function(){this.get("hasMask")&&s.hide()})},_onRenderTitle:function(e){r.isFunction(e)?this.get("titleElement").html(e.call(this)):this.get("titleElement").html(e)},_onRenderContent:function(e){r.isFunction(e)?this.get("contentElement").html(e.call(this)):this.get("contentElement").html(e)},_onRenderAjaxUrl:function(e){var t=this;r.get(e,this.get("ajaxCallback")||function(e){t.get("contentElement").html(e)})},_onRenderIframeUrl:function(e){this.$("iframe").eq(0).attr("src",e)}});n.exports=u});