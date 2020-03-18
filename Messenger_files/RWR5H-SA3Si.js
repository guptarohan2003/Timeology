if (self.CavalryLogger) { CavalryLogger.start_js(["ZE\/7c"]); }

__d("CSSFade",["cx","invariant","CSS","DataStore","Event","Style","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="css-fade-animation",j="css-show-animation",k="CSSFade_hide",l="CSSFade_show";a=document.createElement("div").animate!==void 0;var m={cancel:function(){}};function n(a,c){a!=null||h(0,5875);a=b("DataStore").get(a,c);a&&a.cancel();return a}function o(a,b,c){a=((a=a)!=null?(a=a.style)!=null?a.animation:a:a)||"";b=b+"s "+c;a.length>5&&(b=a.slice(0,-1)+(", "+b));return b}function p(a,b){a=((a=a)!=null?(a=a.style)!=null?a.animation:a:a)||"";a=a.split(",");var c=a.findIndex(function(a){return a.indexOf(b)>-1});c!==-1&&a.splice(c,1);return a.join(",")}c={show:function(a,c){__p&&__p();c===void 0&&(c={});var d=c.duration!=null?c.duration/1e3:.3;n(a,i);n(a,j);b("CSS").removeClass(a,c.invisible?"invisible_elem":"hidden_elem");b("requestAnimationFrameAcrossTransitions")(function(){a.style.animation=o(a,d,l)});var e=b("Event").listen(a,"animationend",function(){c.callback&&c.callback(),a.style.animation=p(a,l)}),f={cancel:function(){a.style.animation=p(a,l),e.remove(),f.cancel=function(){}}};b("DataStore").set(a,j,f);return f},hide:function(a,c){__p&&__p();c===void 0&&(c={});var d=function(){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem"),c.callback&&c.callback(),a.style.animation=p(a,k)};if(c.simple){d();return m}var e=c.duration!=null?c.duration/1e3:.3;n(a,j);n(a,i);b("requestAnimationFrameAcrossTransitions")(function(){a.style.animation=o(a,e,k)});var f=b("Event").listen(a,"animationend",d),g={cancel:function(){a.style.animation=p(a,k),f.remove(),g.cancel=function(){}}};b("DataStore").set(a,i,g);return g}};d={show:function(a,c){__p&&__p();c===void 0&&(c={});var d=c.duration!=null?c.duration:300;n(a,i);n(a,j);b("CSS").removeClass(a,c.invisible?"invisible_elem":"hidden_elem");b("Style").set(a,"opacity","1");d=a.animate([{opacity:"0"},{opacity:"1.0"}],{duration:d});c.callback&&(d.onfinish=c.callback);b("DataStore").set(a,j,d);return d},hide:function(a,c){__p&&__p();c===void 0&&(c={});var d=c.duration!=null?c.duration:300;n(a,j);if(c.simple===!0){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem");return m}else{n(a,i);b("Style").set(a,"opacity","0");d=a.animate([{opacity:"1.0"},{opacity:"0"}],{duration:d});d.onfinish=function(){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem"),c.callback&&c.callback()};b("DataStore").set(a,i,d);return d}}};e.exports=a?d:c}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.enable=function(){if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};c._getDuration=function(){return 150};c._handleStartHide=function(){__p&&__p();var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){var b=this;c.unsubscribe();c=null;var d=function(){b._layer.finishHide()};a?this._animate(d):d()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};c._animate=function(a){var c=this._layer.getRoot();c!=null||g(0,70);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};a.forDuration=function(c){var d=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(a);d.prototype._getDuration=b("emptyFunction").thatReturns(c);return d};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("XUIText.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getAriaLevel=function(a,b){if(a==="header1")return 1;else if(a==="header2")return 2;else if(a==="header3")return 3;else if(a==="header4")return 4;return b};d.render=function(){var a=this.props,c=a.color,d=a.palette,e=a.type,f=a.size,g=a.weight,h=a.display,i=a.headingLevel,j=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","palette","type","size","weight","display","headingLevel","children"]);e=(e==="serif"?"_5s6c":"")+(f==="small"?" _50f3":"")+(f==="medium"?" _50f4":"")+(f==="large"?" _50f5":"")+(f==="xlarge"||f==="xlarge_DEPRECATED"?" _50f6":"")+(g==="bold"?" _50f7":"")+(g==="normal"?" _5kx5":"")+(f==="display"?" _2iei":"")+(f==="header1"?" _2iej":"")+(f==="header2"?" _2iek":"")+(f==="header3"?" _2iel":"")+(f==="header4"?" _2iem":"")+(f==="body1"?" _2ien":"")+(f==="body2"?" _2ieo":"")+(f==="body3"?" _2iep":"")+(f==="meta1"?" _2ieq":"")+(c==="blueLink"?" _rzx":"")+(c==="white"?" _2ier":"")+(c==="highlight"?" _1hk0":"")+(c==="positive"?" _2iet":"")+(c==="negative"?" _2ieu":"")+(d!=="dark"&&c==="placeholder"?" _rzy":"")+(d!=="dark"&&c==="primary"?" _2iev":"")+(d!=="dark"&&c==="secondary"?" _2iex":"")+(d!=="dark"&&c==="disabled"?" _2iey":"")+(d==="dark"&&c==="primary"?" _2iez":"")+(d==="dark"&&c==="secondary"?" _2ie-":"")+(d==="dark"&&c==="disabled"?" _2ie_":"");g=this.getAriaLevel(f,i);g!==void 0&&g!==null&&(a=babelHelpers["extends"]({},a,{role:"heading","aria-level":""+g}));return h==="block"?b("React").jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,e),children:j})):b("React").jsx("span",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,e),children:j}))};return c}(b("React").Component);a.propTypes={color:(c=b("prop-types")).oneOf(["primary","secondary","blueLink","placeholder","disabled","white","highlight","positive","negative"]),display:c.oneOf(["inline","block"]),headingLevel:c.oneOf([1,2,3,4,5,6]),palette:c.oneOf(["light","dark"]),size:c.oneOf(["small","medium","large","xlarge","xlarge_DEPRECATED","inherit","display","header1","header2","header3","header4","body1","body2","body3","meta1"]),type:c.oneOf(["serif","inherit"]),weight:c.oneOf(["bold","inherit","normal"])};a.defaultProps={type:"inherit",size:"inherit",weight:"inherit",display:"inline"};e.exports=a}),null);