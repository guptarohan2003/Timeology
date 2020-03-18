if (self.CavalryLogger) { CavalryLogger.start_js(["yIMvj"]); }

__d("showDesktopNotification",["MessengerDesktopNotificationPermissions","MessengerDesktopNotifications","ZenonUserActionLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=8e3;function a(){__p&&__p();return function(a){__p&&__p();var c=a.acceptCall,d=a.body,e=a.icon;a=a.title;var f={body:d,closeTime:g,icon:e,onClick:function(){b("ZenonUserActionLogger").logClick({surface:"desktop_notification",component:"browser_notification"}),window.focus(),c({trigger:"desktop_notification"})},onShow:function(){b("ZenonUserActionLogger").logImpression({surface:"desktop_notification",component:"browser_notification"})},title:a};if(b("MessengerDesktopNotifications").checkPermission()===b("MessengerDesktopNotificationPermissions").DEFAULT){b("MessengerDesktopNotifications").requestPermission(function(){b("MessengerDesktopNotifications").showNotification(f)});return}b("MessengerDesktopNotifications").showNotification(f)}}e.exports=a}),null);
__d("RTWebCallInviteDesktopNotification.react",["fbt","React","RTWebPreCallHooks","ZenonUsersHooks","showDesktopNotification","usePrevious"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){a=a.invite;return(a==null?void 0:a.type)==="ringing"?b("React").jsx(h,{invite:a}):null}function h(a){a=a.invite;var c=b("showDesktopNotification")(),d=b("usePrevious")(a.ringID),e=b("RTWebPreCallHooks").useAcceptCallCallback(),f=b("ZenonUsersHooks").useZenonUser(a.inviterID),g=a.requestingVideo,h=a.participants.length>1;if(d!==a.ringID&&f!=null){c({acceptCall:e,body:j(f.shortName),icon:(d=f.profilePictureUrl)!=null?d:null,title:i(g,h)})}return null}function i(a,b){if(!b)return a?g._("Incoming video chat"):g._("Incoming call");else return a?g._("Incoming Group Video Chat"):g._("Incoming Group Call")}function j(a){return g._("{caller name} is calling you. Click to answer.",[g._param("caller name",a)])}e.exports=a}),null);
__d("useDocumentTitleBlink",["DocumentTitle","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useEffect;function a(a){g(function(){if(a==null)return;var c=b("DocumentTitle").blink(a);return function(){c.stop()}},[a])}e.exports=a}),null);
__d("ZenonCallInviteTitleBlinking.react",["fbt","React","ZenonUsersHooks","useDocumentTitleBlink"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){a=a.invite;return a!==null&&a.type==="ringing"&&a.inviterID!=null?b("React").jsx(h,{inviterID:a.inviterID}):null}function h(a){a=a.inviterID;a=b("ZenonUsersHooks").useZenonUser(a);b("useDocumentTitleBlink")(a?g._("{name} is calling",[g._param("name",a.shortName)]):null);return null}e.exports=a}),null);
__d("RTWebPreCallContextSingleton",["requireDeferred","FBLogger","JSResource","RTWebCallWindowControllerLoader","RTWebIncomingRingConfiguration","ZenonCallInviteModelLoader","ZenonIncomingRingSDK","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("RTWebSignalingListener"),h=!1,i;a={create:function(a){if(i!=null)return i;try{var c=new(b("ZenonIncomingRingSDK"))();i={callInviteModel:new(b("ZenonCallInviteModelLoader"))(c),callWindowController:new(b("RTWebCallWindowControllerLoader"))(a,b("JSResource")("RTWebMercuryCallWindowInitializer").__setRef("RTWebPreCallContextSingleton")),incomingRingSDK:c};return i}catch(a){b("FBLogger")("rtc_www").catching(a).mustfix("Pre-call context initialization failed! This breaks all calling!");return null}},init:function(){if(h)return i;h=!0;i.callInviteModel.init();i.callWindowController.init();i.incomingRingSDK.init({isSupportedClientForProtocol:b("RTWebIncomingRingConfiguration").isSupportedClientForProtocol});b("promiseDone")(g.load(),function(a){i.incomingRingSDK.initListeners([new a()])});return i},get:function(){return i}};e.exports=a}),null);
__d("useRTWebMercuryIncomingCallDialog",["fbt","requireDeferred","MessengerDialogs.re","RTWebMercuryDialogBase.react","RTWebStrings","ZenonUserActionLogger","deferredLoadComponent","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerDialogs.re").removeDialog,i=b("MessengerDialogs.re").showDialog,j=b("deferredLoadComponent")(b("requireDeferred")("RTWebMercuryIncomingCallContent.react")),k=function(){h({})};function a(){__p&&__p();return function(a){__p&&__p();var c=a.inviterID,d=a.isVideoCall,e=a.onAccept,f=a.onDecline,h=a.participantIDs;b("ZenonUserActionLogger").logImpression({surface:"incoming_call_dialog"});a=h.length>1;var l=a?d?g._("Incoming Group Video Chat"):g._("Incoming Group Call"):d?b("RTWebStrings").incomingVideoChat:g._("Incoming call"),m=a?g._("Ignore"):g._("Decline"),n=a?g._("Answer Call"):g._("Accept");i(function(){return b("React").jsx(b("RTWebMercuryDialogBase.react"),{acceptLabel:n,body:b("React").jsx(j,{inviterID:c,isVideoCall:d,participantIDs:h}),declineLabel:m,onClose:function(a){b("ZenonUserActionLogger").logClick({component:a?"accept_button":"decline_button",surface:"incoming_call_dialog"});k();return a?e():f()},title:l})});return{dismiss:k}}}e.exports=a}),null);
__d("useRTWebMercuryMissedCallDialog",["fbt","requireDeferred","MessengerDialogs.re","RTWebMercuryDialogBase.react","ZenonUserActionLogger","deferredLoadComponent","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerDialogs.re").removeDialog,i=b("MessengerDialogs.re").showDialog,j=b("deferredLoadComponent")(b("requireDeferred")("RTWebMercuryMissedCallContent.react")),k=function(){h({})};function a(){__p&&__p();return function(a){__p&&__p();var c=a.inviterID,d=a.isVideoCall,e=a.onCallback,f=a.participantIDs,h=a.timeMissed;b("ZenonUserActionLogger").logImpression({surface:"missed_call_dialog"});var l=g._("Missed Call"),m=g._("Close"),n=g._("Call Back");i(function(){return b("React").jsx(b("RTWebMercuryDialogBase.react"),{acceptLabel:n,body:b("React").jsx(j,{inviterID:c,isVideoCall:d,participantIDs:f,timeMissed:h}),declineLabel:m,onClose:function(a){b("ZenonUserActionLogger").logClick({component:a?"call_back":"close_dialog",surface:"missed_call_dialog"});a&&b("ZenonUserActionLogger").logClick({component:"start_call_button",surface:"missed_call_dialog"});k();return a?e():void 0},title:l})});return{dismiss:k}}}e.exports=a}),null);
__d("useRTWebMercuryUnsupportedBrowserDialog",["fbt","requireDeferred","FBRTCConfig","MessengerDialogs.re","RTWebMercuryDialogBase.react","ZenonUserActionLogger","deferredLoadComponent","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerDialogs.re").removeDialog,i=b("MessengerDialogs.re").showDialog,j=b("deferredLoadComponent")(b("requireDeferred")("RTWebMercuryUnsupportedBrowserContent.react")),k=function(){h({})};function a(){return function(a){var c=a.isVideoCall;b("ZenonUserActionLogger").logImpression({surface:"unsupported_browser_dialog"});var d=g._("OK"),e=g._("Learn More"),f=g._("Switch Browsers to Make Calls");i(function(){return b("React").jsx(b("RTWebMercuryDialogBase.react"),{acceptLabel:d,body:b("React").jsx(j,{isVideoCall:c,onClose:k}),declineLabel:e,onClose:function(a){a===!1&&window.open(b("FBRTCConfig").unsupportedBrowserUrl(),"_blank"),k()},title:f})});return{dismiss:k}}}e.exports=a}),null);
__d("RTWebMercuryCallInviteDialogs.react",["CurrentUser","React","RTWebPreCallContext","RTWebPreCallHooks","ServerTime","useRTWebMercuryIncomingCallDialog","useRTWebMercuryMissedCallDialog","useRTWebMercuryUnsupportedBrowserDialog","useZenonDialogController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext,h=b("RTWebPreCallHooks").useAcceptCallCallback,i=b("RTWebPreCallHooks").useStartCallCallback;function a(a){__p&&__p();var c=a.invite,d=b("CurrentUser").getID();a=g(b("RTWebPreCallContext"));var e=b("useRTWebMercuryIncomingCallDialog")(),f=b("useRTWebMercuryMissedCallDialog")(),j=b("useRTWebMercuryUnsupportedBrowserDialog")(),k=h(),l=i(),m=a?a.callInviteModel:null;b("useZenonDialogController")(c,function(){__p&&__p();if(c===null||m==null)return null;switch(c.type){case"ringing":return e({inviterID:c.inviterID,isVideoCall:c.requestingVideo,onAccept:function(){k({trigger:"mercury_incoming_dialog_accept_button"})},onDecline:function(){m.decline("IgnoreCall")},participantIDs:c.participants});case"missed":return f({inviterID:c.inviterID,isVideoCall:c.requestingVideo,onCallback:function(){l({existingCall:null,invitees:[c.inviterID].concat(c.participants.filter(function(a){return a!==d})),mediaType:c.requestingVideo?"video":"audio",thread:c.thread,trigger:"mercury_missed_call_dialog"}),m.dismiss()},participantIDs:c.participants,timeMissed:new Date(b("ServerTime").getMillis())});case"unsupported_browser":return j({isVideoCall:c.requestingVideo});default:return null}});return null}e.exports=a}),null);
__d("RTWebMercuryCallInviteController.react",["requireDeferred","React","RTWebCallInviteDesktopNotification.react","RTWebMercuryCallInviteDialogs.react","RTWebPreCallHooks","ZenonCallInviteRingtone.react","ZenonCallInviteTitleBlinking.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("requireDeferred")("FBRTCCallSummaryUploader");c.onReady(function(a){a.init()});function a(){var a;b("RTWebPreCallHooks").useNoAnswerTimeout();var c=b("RTWebPreCallHooks").useCallInvite();return(a=b("React")).jsxs(a.Fragment,{children:[a.jsx(b("RTWebMercuryCallInviteDialogs.react"),{invite:c}),a.jsx(b("RTWebCallInviteDesktopNotification.react"),{invite:c}),a.jsx(b("ZenonCallInviteRingtone.react"),{invite:c}),a.jsx(b("ZenonCallInviteTitleBlinking.react"),{invite:c})]})}e.exports=a}),null);
__d("RTWebMercuryPreCallProvider.react",["FBLogger","React","RelayFBDefaultEnvironment","RTWebPreCallContext","RTWebPreCallContextSingleton","useStable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useEffect;function a(a){a=a.children;var c=b("useStable")(function(){try{return b("RTWebPreCallContextSingleton").create({relayEnvironment:b("RelayFBDefaultEnvironment")})}catch(a){b("FBLogger")("rtc_www").catching(a).mustfix("Pre-call context initialization failed! This breaks all calling!");return null}});g(function(){c&&(b("RTWebPreCallContextSingleton").init(),c.callInviteModel.startListening({callsBlocked:!1}))},[c]);return b("React").jsx(b("RTWebPreCallContext").Provider,{value:c,children:a})}e.exports=a}),null);