if (self.CavalryLogger) { CavalryLogger.start_js(["WxGnY"]); }

__d("CampfireTimeSpentMonitor",["BanzaiLogger","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){function a(a,c){this.$1=a,this.$2=c,b("Run").onBeforeUnload(this.$4.bind(this)),this.$3=Date.now()}var c=a.prototype;c.$4=function(){var a=Date.now(),c=Math.round((a-this.$3)/1e3);b("BanzaiLogger").log("CampfireNotesLoggerConfig",{event:"consume_permalink_exit_published",event_time:a,note_id:Number(this.$1),note_type:"campfire",author_id:Number(this.$2.ownerID),is_author_verified:this.$2.isAuthorVerified,is_author_page:this.$2.isAuthorPage,time_spent_reading_sec:c})};return a}();e.exports=a}),null);
__d("SpotlightViewerAutoResize",["invariant","Event","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";function a(a){this.$1=a,typeof this.$1.onResize==="function"||g(0,1068)}var c=a.prototype;c.enable=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("Event").listen(window,"resize",this.$1.onResize))};c.disable=function(){this.$2.release(),delete this.$2};return a}();e.exports=a}),null);
__d("SpotlightViewerBehaviorsMixin",["BehaviorsMixin"],(function(a,b,c,d,e,f){a={UNSAFE_componentWillMount:function(){this.behaviors&&this.enableBehaviors(this.behaviors)},componentWillUnmount:function(){this.destroyBehaviors()}};Object.assign(a,b("BehaviorsMixin"));e.exports=a}),null);
__d("SpotlightViewerPageWithKeys",["KeyEventController","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a}var c=a.prototype;c.enable=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("KeyEventController").registerKey("LEFT",function(){this.$1.viewState.backward();return!1}.bind(this)),b("KeyEventController").registerKey("RIGHT",function(){this.$1.viewState.forward();return!1}.bind(this)))};c.disable=function(){this.$2.release(),delete this.$2};return a}();e.exports=a}),null);
__d("SpotlightViewerPagers",["cx","LeftRight.react","Link.react","React"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsxs(b("LeftRight.react"),{children:[b("React").jsx(b("Link.react"),{className:"_4-oa _4-ob _50-m"}),b("React").jsx(b("Link.react"),{className:"_4-oa _4-oc _50-m"})]})};return c}(b("React").Component);e.exports=a}),null);
__d("SpotlightSnowflakePhotoViewer",["ArbiterMixin","React","SpotlightViewer","SpotlightViewerAutoResize","SpotlightViewerBehaviorsMixin","SpotlightViewerClose","SpotlightViewerCoreMixin","SpotlightViewerDimensionMixin","SpotlightViewerPagers","SpotlightViewerPageWithKeys","SpotlightViewerThumbnailMixin","SpotlightViewport","SubscriptionsHandler","createReactClass_DEPRECATED"],(function(a,b,c,d,e,f){a=b("createReactClass_DEPRECATED")({displayName:"SpotlightSnowflakePhotoViewer",mixins:[b("ArbiterMixin"),b("SpotlightViewerBehaviorsMixin"),b("SpotlightViewerCoreMixin"),b("SpotlightViewerThumbnailMixin"),b("SpotlightViewerDimensionMixin")],behaviors:[b("SpotlightViewerPageWithKeys"),b("SpotlightViewerAutoResize")],getViewerID:function(){return"photoviewer"},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release(),this._subscriptions=null},getInitialState:function(){this._subscriptions=new(b("SubscriptionsHandler"))();return{photoData:this._getInitialPhotoData(),open:!0}},_enableSubscriptions:function(){this.props.useloadingindicator&&this._subscriptions.addSubscriptions(this.viewState.subscribe("photo_fetch",this.setState.bind(this,{photoData:null},null)))},render:function(){var a=this.getMedia(),c=this.getStageDimensions(),d=this.props.useloadingindicator&&!this.state.photoData;return b("React").jsx(b("SpotlightViewer"),{open:this.state.open,onHide:this.close,children:b("React").jsxs(b("SpotlightViewport"),{media:a,showLoadingIndicator:d,stageDimensions:c,onClick:this._onClickViewport,children:[b("React").jsx(b("SpotlightViewerClose"),{onClick:this.close}),this.props.disablepaging?null:b("React").jsx(b("SpotlightViewerPagers"),{})]})})}});e.exports=a}),null);
__d("CampfireImageViewer",["DOM","Event","React","ReactDOM","SpotlightSnowflakePhotoViewer","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={registerPopup:function(a,c){b("Event").listen(a,"click",function(a){g.bootstrap({src:c.src,fbid:c.id,dimensions:[c.width,c.height].join(","),disablePaging:!0})})},bootstrap:function(a){a=b("React").jsx(b("SpotlightSnowflakePhotoViewer"),{dimensions:[a.dimensions],open:!0,disablepaging:!0,photoid:a.fbid,reverse:!1,rootClassName:a.rootClassName,thumbsrc:a.src});g.render(a)},render:function(a){var c=b("ge")("campfire_viewer");c||(c=b("DOM").create("div",{id:"messages_viewer"}),document.body.appendChild(c));a=b("ReactDOM").render(a,c);a.subscribeOnce("close",function(){b("ReactDOM").unmountComponentAtNode(c)})}};e.exports=g}),null);
__d("CampfireEmbedParent",["DOM","Style","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a={listen:function(a,b,c){var d=this,e=function e(f){f=d.parse(f,b);if(!f)return;d.resize(a,f,c);window.removeEventListener("message",e)};window.addEventListener("message",e)},parse:function(a,c){var d;try{d=JSON.parse(a.data)}catch(a){return null}a=new(g||(g=b("URI")))(a.origin);var e=new g(c);return a.getDomain()!==e.getDomain()||!d.height||!d.width||!d.src||d.src!==c?null:d},resize:function(a,c,d){__p&&__p();var e=a.embed,f=a.frame,g=a.iframe;a=a.placeholder;d?(g.height=c.height/c.width*g.offsetWidth,b("Style").set(g,"max-width",c.width+"px")):(g.height=c.height,g.width=c.width);e.style.removeProperty("height");e.style.removeProperty("width");d&&e.style.removeProperty("max-width");b("DOM").remove(a);f.style.removeProperty("position");f.style.removeProperty("visibility");d&&f.style.removeProperty("width")}};e.exports=a}),null);