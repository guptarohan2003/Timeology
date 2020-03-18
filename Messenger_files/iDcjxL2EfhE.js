if (self.CavalryLogger) { CavalryLogger.start_js(["7iWhk"]); }

__d("AdsPECreateStartCreateFlowActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"PowerEditor.CREATE.START_CREATE_FLOW"}}),null);
__d("BizNotificationTabCountUtils",["BizNotificationListConst"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_MAP,h=b("BizNotificationListConst").CLASSIFICATION_TO_TAB_MAP;a={incrementCountByTab:function(a,b){var c=Object.assign({},b);Object.keys(a).forEach(function(b){var d=h[b]||h[g[b]];b=a[b];d!=null&&(c[d]+=b,c.all+=b)});return c},clearTabCount:function(a,b,c){var d=Object.assign({},b),e=Object.assign({},c);a==="all"?Object.keys(b).forEach(function(a){d[a]=0,e[a]=!1}):(d.all-=d[a],d[a]=0,e[a]=!1);return{updatedUnseenByTab:d,updatedTabCountToBeCleared:e}}};e.exports=a}),null);
__d("BizNotificationInitUnseenNotifsReducerPlugin",["BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_MAP;a={reduce:function(a,c){var d=c.initialClassificationsForUnseenNotifs,e=a.unseenNotifsClassificationsMap,f=a.unseenNotifsCountByTab;f=b("BizNotificationTabCountUtils").incrementCountByTab(c.initialUnseenNotifsCountByClassification,a.unseenNotifsCountByTab);Object.keys(d).forEach(function(a){var b=d[a];b.forEach(function(b){e[b]=g[a]||a})});return babelHelpers["extends"]({},a,{unseenNotifsClassificationsMap:e,unseenNotifsCountByTab:f})}};e.exports=a}),null);
__d("BizNotificationInitUnseenNotifsAction",["Laminar","BizNotificationInitUnseenNotifsReducerPlugin","BizNotificationPopoverDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationInitUnseenNotifsReducerPlugin"),b("BizNotificationPopoverDataProvider"),{},"")]},function(){return[]},"BizNotificationInitUnseenNotifsActionPlugin");e.exports=a}),null);
__d("BizNotificationPrefsProviderPlugin",[],(function(a,b,c,d,e,f){"use strict";a={initialState:{prefs:null}};e.exports=a}),null);
__d("BizNotificationPrefsProvider",["Laminar","BizNotificationPrefsProviderPlugin"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Laminar").__createProvider(b("BizNotificationPrefsProviderPlugin"),"BizNotificationPrefsProviderPlugin")}),null);
__d("IndeterminateNotificationCounter",["cx","DocumentTitle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="(*) ",i={init:function(a){a>0&&i.addBadge()},addBadge:function(){__p&&__p();var a=b("DocumentTitle").get(),c=document.getElementById("NotifIndeterminateBadge"),d=c&&c.getAttribute("class");if(d!=null&&d.includes("_76t_")){c=c&&c.textContent;c!=null&&b("DocumentTitle").set("("+c+") "+a,!0);return}else if(d!=null&&d.includes("_79ig")){b("DocumentTitle").set("(99+) "+a,!0);return}b("DocumentTitle").set(h+a,!0)},removeBadge:function(){var a=b("DocumentTitle").get();b("DocumentTitle").set(a,!0)}};e.exports=i}),null);
__d("BizNotificationBadgeUtils",["cx","IndeterminateNotificationCounter","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=99,i={increaseBadgeCount:function(a){if(a!=null){var b=a.textContent;if(!b.endsWith("+")){b=Number(a.textContent)+1;a.textContent=b<=h?b+"":h+"+"}}return a},decreaseBadgeCount:function(a){a!=null&&(a.textContent="0");return a},setBadgeElementToBeActive:function(a){var c=document.getElementById("NotifIndeterminateBadge");a?(c=i.increaseBadgeCount(c),b("IndeterminateNotificationCounter").addBadge()):(c=i.decreaseBadgeCount(c),b("IndeterminateNotificationCounter").removeBadge());var d=c&&c.textContent;d=(d!=null&&!d.endsWith("+")?"_76t_":"")+(d!=null&&d.endsWith("+")?" _79ig":"");a=a?b("joinClasses")("_7256",d):b("joinClasses")("_7257",d);c&&c.setAttribute("class",a)}};e.exports=i}),null);
__d("BizNotificationReceivedNotifReducerPlugin",["BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_TO_MACRO_CATEGORY_MAP,h=b("BizNotificationListConst").EMPTY_UNSEEN_NOTIFS_COUNT_BY_CLASSIFICATION,i=b("BizNotificationListConst").ORDERED_CLASSIFICATIONS,j=function(a,b){if(b==null)return!1;b=b.macro_categories_excluded_from_badging;return!b.includes(g[a])};a={reduce:function(a,c,d){__p&&__p();var e=d.prefsData;d=c.notifs;var f=a.unseenNotifsClassificationsMap,g=Object.assign({},h);d.forEach(function(a){var c=a.classifications;if(c==null)return;c.forEach(function(c){i.includes(c)&&(g[c]+=1,f[a.alert_id]=c,j(c,e.prefs)&&b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!0))})});c=b("BizNotificationTabCountUtils").incrementCountByTab(g,a.unseenNotifsCountByTab);return babelHelpers["extends"]({},a,{unseenNotifsClassificationsMap:f,unseenNotifsCountByTab:c})}};e.exports=a}),null);
__d("BizNotificationReceivedNotifAction",["Laminar","BizNotificationReceivedNotifReducerPlugin","BizNotificationPopoverDataProvider","BizNotificationPrefsProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationReceivedNotifReducerPlugin"),b("BizNotificationPopoverDataProvider"),{prefsData:b("BizNotificationPrefsProvider")},"")]},function(){return[]},"BizNotificationReceivedNotifActionPlugin");e.exports=a}),null);
__d("BizNotificationSeenStateUpdateReducerPlugin",["BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_TO_TAB_MAP;a={reduce:function(a,c){__p&&__p();b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!1);if(!a.isJewelOpen){var d=b("BizNotificationTabCountUtils").clearTabCount("all",a.unseenNotifsCountByTab,a.tabCountToBeCleared),e=d.updatedUnseenByTab;d=d.updatedTabCountToBeCleared;return babelHelpers["extends"]({},a,{unseenNotifsCountByTab:e,tabCountToBeCleared:d})}else{var f=a.tabCountToBeCleared;Object.keys(c.seenState).forEach(function(b){b=a.unseenNotifsClassificationsMap[b];if(b!=null){b=g[b];f[b]=!0}});return babelHelpers["extends"]({},a,{tabCountToBeCleared:f})}}};e.exports=a}),null);
__d("BizNotificationSeenStateUpdateAction",["Laminar","BizNotificationSeenStateUpdateReducerPlugin","BizNotificationPopoverDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationSeenStateUpdateReducerPlugin"),b("BizNotificationPopoverDataProvider"),{},"")]},function(){return[]},"BizNotificationSeenStateUpdateActionPlugin");e.exports=a}),null);
__d("BizNotificationSetJewelOpenReducerPlugin",["BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").TAB_MAP;a={reduce:function(a,c){__p&&__p();c=c.isJewelOpen;var d=a.tabCountToBeCleared,e=a.unseenNotifsCountByTab,f=a.tabCountToBeCleared;b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!1);c||Object.keys(d).forEach(function(a){if(d[a]){a=b("BizNotificationTabCountUtils").clearTabCount(g[a],e,f);e=a.updatedUnseenByTab;f=a.updatedTabCountToBeCleared}});return babelHelpers["extends"]({},a,{isJewelOpen:c,unseenNotifsCountByTab:e,tabCountToBeCleared:f})}};e.exports=a}),null);
__d("BizNotificationSetJewelOpenAction",["Laminar","BizNotificationSetJewelOpenReducerPlugin","BizNotificationPopoverDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationSetJewelOpenReducerPlugin"),b("BizNotificationPopoverDataProvider"),{},"")]},function(){return[]},"BizNotificationSetJewelOpenActionPlugin");e.exports=a}),null);
__d("BizNotificationsSetPrefsReducerPlugin",[],(function(a,b,c,d,e,f){"use strict";a={reduce:function(a,b){return babelHelpers["extends"]({},a,{prefs:b.prefs})}};e.exports=a}),null);
__d("BizNotificationSetPrefsAction",["Laminar","BizNotificationsSetPrefsReducerPlugin","BizNotificationPrefsProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationsSetPrefsReducerPlugin"),b("BizNotificationPrefsProvider"),{},"")]},function(){return[]},"BIZ_NOTIFICATION.SET_PREFS");e.exports=a}),null);
__d("AdsPersonalSettingsConstants",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({ACCOUNT_INFORMATION:"account_information",BILLING:"billing",NOTIFICATION:"notification",PAGES:"pages"});c=b("keyMirror")({NONE:null,NEW:null,OLD:null});d="bi_personal_settings_gear_tip";f="ads_personal_settings_gear";e.exports={EMAIL_NOTIFICATION_HANDLER_KEY:c,TABS:a,PERSONAL_SETTINGS_NUX_NAME:d,PERSONAL_SETTINGS_NUX_PLACEMENT:f}}),null);
__d("AdsPersonalSettingsGearNux.react",["AdsIntelligentBlueTip.react","AdsPersonalSettingsConstants","React","gkx"],(function(a,b,c,d,e,f){"use strict";var g=b("AdsPersonalSettingsConstants").PERSONAL_SETTINGS_NUX_NAME,h=b("AdsPersonalSettingsConstants").PERSONAL_SETTINGS_NUX_PLACEMENT;a=function(){return!b("gkx")("677810")?null:b("React").jsx("div",{id:h,children:b("React").jsx(b("AdsIntelligentBlueTip.react"),{contextNodeID:h,messageID:g,position:"below"})})};e.exports=a}),null);
__d("BusinessUnifiedNavigationGearButtonLogger",["BusinessUnifiedNavigationLogger","Event"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c){b("Event").listen(a,"click",function(){return b("BusinessUnifiedNavigationLogger").log("gear_button_click","app_init",{toTool:c})})}};e.exports=a}),null);
__d("AdsPECreationSource",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({CATALOG_MANAGER:null,CONTEXTUAL_MENU:null,CONTEXTUAL_MENU_CREATE_AD:null,CONTEXTUAL_MENU_CREATE_AD_SET:null,CONVERGENCE_ADD_AD_BUTTON:null,CONVERGENCE_ADD_AD_CONTEXTUAL:null,CONVERGENCE_ADD_AD_SET_BUTTON:null,CONVERGENCE_ADD_AD_SET_CONTEXTUAL:null,CREATION_BUTTON:null,CREATION_BUTTON_DROPDOWN:null,CREATION_MODAL:null,EDITING_DRAWER:null,EXTERNAL_CREATION:null,OPPORTUNITIES_CREATION_BUTTON:null,QUICK_CREATE_TO_STEPPER_ENTRY:null,QUICK_CREATE_SWITCH_TO_GUIDED:null,STEPPER_TO_QUICK_CREATE_ENTRY:null,CREATIVE_HUB:null,NES_TO_CREATION_FLOW:null});e.exports=a}),null);
__d("AppLoggerUtils.brands",["AppLogger.brands","AppLoggerHelper.brands","BanzaiODS","Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g,h={register:function(a,c,d,e,f){f=f||{},f.brandID=c,b("Event").listen(a,"click",function(a){b("AppLogger.brands").logForAnalytics(d,e,f)})},logServerEvent:function(a,c,d){b("AppLogger.brands").logForAnalytics(a,c,d)},registerForPopoverMenu:function(a,c,d,e,f){f&&h.register(a,d,e,f,{}),c.subscribe("itemclick",function(a,c){a=c.item&&c.item.getValue&&c.item.getValue();a?b("AppLogger.brands").logForAnalytics(e,a,{brandID:d}):b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.NAV,"invalid_nav_item")})},registerForPopoverOnlyMenu:function(a,c,d,e){a.subscribe("itemclick",function(a,e){a=new(g||(g=b("URI")))(window.location.href).getPath();var f=221;b("AppLoggerHelper.brands").getTool(a)==="ANALYTICS"&&b("BanzaiODS").bumpEntityKey(f,"app_events","fba_count_persona_item_selected");a=e.item&&e.item.getValue&&e.item.getValue();a?b("AppLogger.brands").logForAnalytics(d,a,{brandID:c}):b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.NAV,"invalid_nav_item")})},registerForElements:function(a,c,d,e,f){f=f||{},f.brandID=c,a.forEach(function(a){b("Event").listen(a,"click",function(a){b("AppLogger.brands").logForAnalytics(d,e,f)})})}};e.exports=h}),null);
__d("BizsiteHelpButton.react",["ix","cx","AdsApplicationUtils","AdsFBIconDownsized.react","AdsGeodesicAdoptionFlags","AdsIntelligentBlueTip.react","Bootloader","BusinessUnifiedNavigationLogger","FluxContainerSubscriptions","Link.react","React","asset","joinClasses","requireWeak"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PureComponent;var i,j="help-jewel";function k(){return{isTrayOpen:!!i&&i.isTrayOpen()}}c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$2=function(a){var c=a.ctrlKey||a.shiftKey||a.metaKey||a.button===1,e=c?"help_center_open_new_window":d.state.isTrayOpen?"help_center_close":"help_center_open",f=e==="help_center_close"?"help_center_open":"app_init";b("BusinessUnifiedNavigationLogger").log(e,f);if(!c){a.preventDefault();var g=!d.state.isTrayOpen;b("Bootloader").loadModules(["AdsHelpTrayUIActions","AdsHelpTrayUIStore"],function(a,b){i=b,d.$1.setStores([i]),a.toggleHelpTray(g,null,d.props.pageType,!0)},"BizsiteHelpButton.react")}};d.$1=new(b("FluxContainerSubscriptions"))(d.constructor.name);d.$1.addListener(function(){return d.setState(k)});d.state=k();return d}var d=c.prototype;d.componentDidMount=function(){var a=this;b("requireWeak")("AdsHelpTrayUIStore",function(b){i=b,a.$1.setStores([i])});this.setState(k)};d.componentWillUnmount=function(){this.$1.reset()};d.render=function(){var a=this.props.buttonElement,c=this.props.pageType==="ANALYTICS"||this.props.pageType==="ANALYTICS"?"/help/analytics":"/help",d=b("AdsGeodesicAdoptionFlags").isAdsEditorClassicReskinEnabled();c=b("React").jsx(b("Link.react"),{className:b("joinClasses")(this.props.className,this.state.isTrayOpen?this.props.classNameActive:null,(this.props.className?"":"_14xs")+(d?" _8y6x":"")+(this.state.isTrayOpen&&!this.props.classNameActive?" _14xt":"")),"data-testid":void 0,href:c,id:j,onClick:this.$2,children:a!=void 0?a:b("React").jsx("span",{className:"_tkm",children:b("React").jsx(b("AdsFBIconDownsized.react"),{className:"_nxh",src:d?g("519027"):g("392521")})})});!this.state.isTrayOpen&&b("AdsApplicationUtils").isPowerEditor()&&(c=b("React").jsxs(b("React").Fragment,{children:[c,b("React").jsx(b("AdsIntelligentBlueTip.react"),{contextNodeID:j,messageID:"release_notes_intro",position:"below"})]}));return c};return c}(a);e.exports=c}),null);
__d("BizHomeHelpTrayLogger",["AppLogger.brands"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={logFBExpertHelpItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_fbexperthelp_click",{page:a})},logExpertHelpItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_experthelp_click",{page:a})},logReportItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_report_click",{page:a})},logEmailItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_email_click",{page:a})},logCommunityItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_community_click",{page:a})},logSupportItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_support_click",{page:a})},logSupportInboxItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_support_inbox_click",{page:a})},logChatItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_chat_click",{page:a})},logDirectSupportItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_direct_support_click",{page:a})},logHelpCenterClick:function(a,c){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_footer_link_click",{destination:a,page:c})},logFAQItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_faq_item_click",{data:a})},logSearch:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_search",{query:a})},logHelpTrayOpen:function(){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_open")},logNewbieProgramItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_newbie_program_click",{page:a})},logFlyTrapClick:function(){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,"helptray_flytrap_click")}};e.exports=a}),null);
__d("BizHomeHelpTrayLoggerStore",["AdsDataAtom","AdsHelpTrayPushCmsIdDataActionFlux","AdsHelpTraySearchQueryDataActionFlux","AdsHelpTrayToggleDataActionFlux","AdsHelpTrayUIStore","BizHomeHelpTrayLogger","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__onDispatch=function(a){a=a.action;switch(a.actionType){case b("AdsHelpTrayToggleDataActionFlux").actionType:b("AdsDataAtom").waitFor([b("AdsHelpTrayUIStore").getDispatchToken()]);b("AdsHelpTrayUIStore").isTrayOpen()&&b("BizHomeHelpTrayLogger").logHelpTrayOpen();break;case b("AdsHelpTraySearchQueryDataActionFlux").actionType:a.data.query&&b("BizHomeHelpTrayLogger").logSearch(a.data.query);break;case b("AdsHelpTrayPushCmsIdDataActionFlux").actionType:b("BizHomeHelpTrayLogger").logFAQItemClick(a.data);break}};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("BizHomeHelpTrayBootloadContainer.brands",["AdsHelpTrayUIStore","BootloadedComponent.react","FluxMixinLegacy","JSResource","React","ReactComponentWithPureRenderMixin","createReactClass_DEPRECATED","BizHomeHelpTrayLoggerStore"],(function(a,b,c,d,e,f){"use strict";a=b("createReactClass_DEPRECATED")({displayName:"BizHomeHelpTrayContainer",mixins:[b("FluxMixinLegacy")([b("AdsHelpTrayUIStore")]),b("ReactComponentWithPureRenderMixin")],statics:{calculateState:function(){return{hidden:!b("AdsHelpTrayUIStore").isTrayOpen()}}},componentDidMount:function(){b("BizHomeHelpTrayLoggerStore")},render:function(){return this.state.hidden?null:b("React").jsx(b("BootloadedComponent.react"),babelHelpers["extends"]({},this.props,{bootloadLoader:b("JSResource")("BizHomeHelpTrayContainer.brands").__setRef("BizHomeHelpTrayBootloadContainer.brands"),name:"BizHomeHelpTrayContainer",bootloadPlaceholder:b("React").jsx("div",{})}))}});e.exports=a}),null);
__d("NotificationGenericBucket",["NotificationSeenState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){var b=this;this.$2=[];this.$3={};this.$4={};this.$7=function(a,c){a=b.$4[a];c=b.$4[c];return Number(c)-Number(a)};this.$1=a}var c=a.prototype;c.reset=function(){this.$2=[],this.$3={},this.$4={}};c.getType=function(){return this.$1.bucket_type};c.getTitle=function(){return this.$1.title};c.getSortedIDs=function(){return this.$2.slice()};c.insertIfEligible=function(a){var b=this.$5(a);if(!b.eligible)return b;this.$6(a);return{eligible:!0}};c.remove=function(a){if(!this.$3[a])return!1;delete this.$3[a];delete this.$4[a];a=this.$2.indexOf(a);a>-1&&this.$2.splice(a,1);return!0};c.$6=function(a){__p&&__p();var b=a.alert_id;if(this.$3[b])return!0;this.$2.push(b);this.$3[b]=!0;var c=this.$8(this.$1.sort_key_index);if(c>-1){a=a.sort_keys?a.sort_keys[c]:null;a&&(this.$4[b]=a,this.$9())}return!0};c.$9=function(){this.$2.sort(this.$7)};c.$5=function(a){__p&&__p();if(!this.$10(a))return{eligible:!1,type:"bucket",data:a.eligible_buckets};if(!this.$11(a))return{eligible:!1,type:"exp_time"};if(!this.$12(a))return{eligible:!1,type:"seen_filter"};if(!this.$13(a))return{eligible:!1,type:"max_count"};if(!this.$14(a))return{eligible:!1,type:"seen_evict",data:this.$15(a)};return!this.$16(a)?{eligible:!1,type:"read_evict"}:{eligible:!0}};c.$8=function(a){return Number.isInteger(a)?Number(a):-1};c.$10=function(a){return!a.eligible_buckets?!1:a.eligible_buckets.includes(this.getType())};c.$12=function(a){return b("NotificationSeenState").validateFilter(a.alert_id,this.$1.seen_filter)};c.$11=function(a){var b=this.$8(this.$1.min_to_expire);return b===-1?!0:Date.now()-a.creation_time<b*60*1e3};c.$13=function(a){a=this.$8(this.$1.max_count);return a===-1?!0:this.$2.length<a};c.$15=function(a){var b=this.$8(this.$1.sec_to_evict_seen);return{secToEvict:b,firstTime:a.first_seen_time||0,currentTime:Date.now()/1e3}};c.$17=function(a){var b=this.$8(this.$1.sec_to_evict_read);return{secToEvict:b,firstTime:a.first_read_time||0,currentTime:Date.now()/1e3}};c.$18=function(a){var b=a.secToEvict,c=a.firstTime;a=a.currentTime;return b===-1||c===0?!0:a-c<b};c.$14=function(a){return this.$18(this.$15(a))};c.$16=function(a){return this.$18(this.$17(a))};return a}();e.exports=a}),null);
__d("NotificationServerTransport",["invariant","DOM","UIPagelet","compactArray","ifRequired","objectValues","once","promiseDone","setImmediateAcrossTransitions","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={},i={},j={},k={};function l(a){k[a]==null&&(k[a]=b("DOM").create("div",{"class":"hidden_elem",id:a}),b("DOM").appendContent(document.documentElement,k[a]));return k[a].id}function m(a){return a.reduce(function(a,b){b=b.targetNumToLoad;return Math.max(a,b)},0)}function n(a,b){var c=b.getHash(),d=h[c];if(!d||d.clientRequestID!==a)return;delete h[c];d.calls.forEach(function(a){a=a.onCompleted;a&&a()});i[c]!=null&&p(b)}function o(a,b,c){var d=b.getHash(),e=h[d];if(!e||e.clientRequestID!==a)return;delete h[d];e.calls.forEach(function(a){a=a.onError;a&&a(c)});i[d]!=null&&p(b)}function p(a){__p&&__p();var c=a.getHash();if(j[c]!=null)return;j[c]=b("setImmediateAcrossTransitions")(function(){__p&&__p();delete j[c];var d=b("uniqueID")(),e=i[c];delete i[c];if(e==null)return;var f=m(e);f=a.getRequestParams(f);if(f.length<=0){e.forEach(function(a){a=a.onCompleted;a&&a()});return}var k=function(b){o(d,a,b.toError())},n=a.getStreamingTransportPageletName();n!=null||g(0,5708,a.getHash());n=b("UIPagelet").loadFromEndpoint(n,l(d),babelHelpers["extends"]({},f,{clientRequestID:d}),{allowIrrelevantRequests:!0,automatic:!1,crossPage:!0,errorHandler:k,jsNonblock:!0,transportErrorHandler:k,usePipe:!0,usePostRequest:!1});h[c]={calls:e,clientRequestID:d,endpointState:a,transport:n}})}a={makeRequest:function(a,b,c){__p&&__p();var d=c.onChunkResponse,e=c.onCompleted;c=c.onError;var f=a.getHash(),j={onChunkResponse:d,onCompleted:e,onError:c,targetNumToLoad:b};s(f);d=h[f];e=d?m(d.calls)>=b:!1;e?(d!=null||g(0,5709),d.calls.push(j)):(i[f]==null&&(i[f]=[]),i[f].push(j),d==null&&p(a));return{remove:function(){__p&&__p();var b=h[f];if(b!=null){var c=b.calls.indexOf(j);c!==-1&&b.calls.splice(c,1);b.calls.length===0&&(b.transport&&b.transport.abandon(),delete h[f],i[f]!=null&&p(a))}c=i[f];if(c!=null){b=c.indexOf(j);b!==-1&&c.splice(b,1)}}}},handleResponseChunk:function(a,b){a=q(a);a.forEach(function(a){a(b)})},handleRequestCompleted:function(a){var c=b("objectValues")(h).find(function(b){return b&&b.clientRequestID===a});c||g(0,5710,a);n(a,c.endpointState)},handleRequestFailed:function(a,c){__p&&__p();var d=b("objectValues")(h).find(function(b){return b&&b.clientRequestID===a});d||g(0,5711,a);var e=d.endpointState.getHash(),f=h[e];if(!f||f.clientRequestID!==a)return;delete h[e];f.calls.forEach(function(a){a=a.onError;a&&a(new Error(c))});i[e]!=null&&p(d.endpointState)}};function q(a){__p&&__p();var c=Object.keys(h).find(function(b){b=h[b];return b&&b.clientRequestID===a}),d=c&&h[c];if(!d||!c)return[];d=d.calls;c=i[c];c&&(d=d.concat(c));return b("compactArray")(d.map(function(a){return a.onChunkResponse}))}function r(a,c){__p&&__p();var d=c.targetNumToLoad,e=c.endpointState;c=c.payloadPromise;if(h[a]!=null)return;var f=b("uniqueID")();d={calls:[{targetNumToLoad:d}],clientRequestID:f,endpointState:e};h[a]=d;c||g(0,5712);a=c.then(function(a){var b=q(f);b.forEach(function(b){b(a)})});b("promiseDone")(a["finally"](function(){n(f,e)}))}c=function(a){b("ifRequired")("NotificationEagerLoader",function(b){b=b.eagerlyLoadedData;b.hasData&&a===b.endpointState.getHash()&&r(a,b)})};var s=b("once")(c);e.exports=a}),null);
__d("NotificationStore",["FBLogger","NotificationConstants","NotificationEndpointState","NotificationServerTransport","NotificationUpdates","createObjectBy","distinctArrayBy","flatMapArray","objectValues","sortBy"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a,b,c){return a.page_info!=null&&b.classification==c.classification&&b.endpointControllerName===c.endpointControllerName&&b.readness==c.readness}function i(a,c){__p&&__p();var d={};b("NotificationEndpointState").getAllInstances(c.endpointControllerName).forEach(function(e){var f;h(a,e,c)?(e.graphQLPageInfo=a.page_info,f=a):a.payloadsource===b("NotificationConstants").PayloadSourceType.SYNC&&c.endpointControllerName==="WebNotificationsPayloadPagelet"&&e.classification==null&&e.readness==null?f=a:f=babelHelpers["extends"]({},a,{nodes:a.nodes?a.nodes.filter(function(a){return j(a,e)}):void 0});if(f.nodes&&f.nodes.length>0){f=k(e,f);f!=null&&f.forEach(function(a){d[a]=!0})}});b("NotificationUpdates").didUpdateNotifications(Object.keys(d))}function j(a,b){__p&&__p();var c=b.classification,d=b.notifications,e=b.order;b=b.readness;e=e.getAllResources();e.length===0;if(e.length>0){e=e[0];d=d.getResource(e);if(d.creation_time>=a.creation_time)return!1}if(c&&(!a.classifications||!a.classifications.includes(c)))return!1;return b&&b==="SEEN_AND_READ"!==(a.seen_state==="SEEN_AND_READ")?!1:!0}function k(a,b){var c=[],d={};b.nodes&&b.nodes.length>0&&b.nodes.forEach(function(b){var e=b.alert_id,f=a.notifications.getResource(e);(!f||f.creation_time<b.creation_time)&&(c.push(e),d[e]=b)});a.notifications.addResourcesAndExecute(d);a.order.addResources(c);return c}b("NotificationUpdates").subscribe("update-notifications",function(a,c){c.payloadsource!==b("NotificationConstants").PayloadSourceType.ENDPOINT&&i(c,{endpointControllerName:c.endpoint!=null?c.endpoint:"WebNotificationsPayloadPagelet"})});var l={getNotifications:function(a,c,d){__p&&__p();var e=b("NotificationEndpointState").getInstance(c),f=e.notifications,h=e.order,j,k=h.executeOrEnqueue(0,a,function(a){if(d){j=f.executeOrEnqueue(a,d);a=f.getUnavailableResources(j);a.length>0&&b("FBLogger")("notifications").warn("The range for this endpoint contained notification IDs for which we have no payload (Notification IDs: %s, Endpoint config: %s)",JSON.stringify(a),JSON.stringify(e.getConfig()))}});function m(){h.unsubscribe(k),j&&f.unsubscribe(j)}if(h.getUnavailableResources(k).length===0)return{remove:m};if(!l.canFetchMore(c)){h.forceRunCallbacks();return{remove:m}}var n=e.getHash();g[n]==null?g[n]=1:g[n]++;function o(){g[n]--,g[n]===0&&h.forceRunCallbacks()}function p(a){if(!(a&&a.nodes))return;b("NotificationUpdates").handleUpdate(b("NotificationConstants").PayloadSourceType.ENDPOINT,a,c.readness,c.classification);i(babelHelpers["extends"]({},a,{payloadsource:b("NotificationConstants").PayloadSourceType.ENDPOINT}),c)}function q(){g[n]--,g[n]===0&&h.forceRunCallbacks()}a=b("NotificationServerTransport").makeRequest(e,a,{onChunkResponse:p,onCompleted:q,onError:o});var r=a.remove;return{remove:function(){m(),r()}}},getNotification:function(a,c){c=c===void 0?{}:c;var d=c.classification,e=c.endpointControllerName;e=e===void 0?"WebNotificationsPayloadPagelet":e;c=c.readness;d=b("NotificationEndpointState").getInstance({classification:d,endpointControllerName:e,readness:c});e=d.notifications;return e.getResource(a)},getAllForAllEndpoints:function(){__p&&__p();var a=this,c=b("NotificationEndpointState").getAllInstances();c=b("flatMapArray")(c,function(c){c=a.getAll(c.getConfig());return b("objectValues")(c)});c=b("sortBy")(c,function(a){return a.creation_time});c=c.reverse();c=b("distinctArrayBy")(c,function(a){return a.alert_id});return b("createObjectBy")(c,function(a){return a.alert_id})},getAll:function(a){var c=b("NotificationEndpointState").getInstance(a),d=c.notifications;c=c.order;var e={};c.getAllResources().forEach(function(c){var f=d.getResource(c);f==null?b("FBLogger")("notifications").warn("The range for this endpoint contained a notification ID for which we have no payload (Notification ID: %s, Endpoint config: %s)",c,JSON.stringify(a)):e[c]=f});return e},getCount:function(a){a=b("NotificationEndpointState").getInstance(a);return a.order.getAllResources().length},canFetchMore:function(a){a=b("NotificationEndpointState").getInstance(a);a=a.graphQLPageInfo;return!a||!Object.prototype.hasOwnProperty.call(a,"has_next_page")||a.has_next_page},registerEndpoint:function(a){b("NotificationEndpointState").getInstance(a)}};l.registerEndpoint({endpointControllerName:"WebNotificationsPayloadPagelet"});e.exports=l}),null);
__d("NotificationBucketStore",["Arbiter","JSLogger","NotificationBucketStoreManager","NotificationConstants","NotificationGenericBucket","NotificationsBucketList","NotificationStore","NotificationUpdates"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b){this.$1=[],this.$2={},this.$3=[],this.$4={},this.$5=b,this.$6=!1,this.$7=null,this.$8={},this.$6=!1,this.$9(a),this.$10()}var c=a.prototype;c.$9=function(a){__p&&__p();var c=this;if(this.$6)return;this.$6=!0;b("NotificationsBucketList").buckets.forEach(function(a){a.bucket_type=a.bucket_type.toUpperCase();a=new(b("NotificationGenericBucket"))(a);c.$3.push(a);c.$4[a.getType()]=a});this.$11(a,this.$5,!1)};c.$12=function(){this.$1=this.$3.map(function(a){return{ids:a.getSortedIDs(),title:a.getTitle()||"",bucketType:a.getType()}})};c.$13=function(a,c,d){return!d&&a===b("NotificationBucketStoreManager").getSkipBucketType()&&!c};c.$14=function(a,b,c){__p&&__p();var d=a.alert_id;this.$2[d]||(this.$2[d]=[]);var e=[];for(var f=0,g=this.$3.length;f<g;f++){var h=this.$3[f];if(this.$13(h.getType(),b,c))continue;var i=h.insertIfEligible(a);e.push({bucket:h.getType(),result:i});if(i.eligible){this.$2[d].push(e);this.$15(a,h);return h.getType()}}this.$2[d].push(e);return null};c.$15=function(a,b){this.$8[a.alert_id]=b.getType()};c.$16=function(a,b){delete this.$8[a.alert_id]};c.$17=function(a,b,c){var d=a.alert_id,e=this.$18(d);if(e){e=this.$19(e);e&&(e.remove(d),this.$16(a,e))}this.$14(a,b,c)};c.$18=function(a){return this.$8[a]};c.$19=function(a){return this.$4[a]};c.$20=function(){this.$8={},this.$3.forEach(function(a){return a.reset()}),this.$2={},this.$12()};c.$11=function(a,c,d){var e=b("NotificationStore").getAll({endpointControllerName:a,classification:c});this.$21(Object.keys(e).map(function(a){return e[a]}),d||!1,!1)};c.$21=function(a,b,c){var d=this;a.forEach(function(a){return d.$17(a,b,c)});this.$12()};c.$10=function(){__p&&__p();var a=this;b("NotificationUpdates").subscribe("update-notifications",function(c,d){__p&&__p();c=d.nodes;if(c==null||c.length===0)return;if(d.payloadsource===b("NotificationConstants").PayloadSourceType.LIVE_SEND){var e=!1;c.forEach(function(b){e=b.classifications&&b.classifications.includes(a.$5)});if(!e&&a.$5!=null)return;a.$20();a.$11(d.endpoint||"WebNotificationsPayloadPagelet",a.$5,!0)}else b("NotificationBucketStoreManager").getActiveClassification()==a.$5&&(a.$7==null&&(a.$7=d.servertime),a.$21(c,!1,d.servertime===a.$7))});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(b,c){c.notifs_bucket_data={bucketInfo:a.$1,data:a.$1.reduce(function(c,b){b=b.ids.map(function(b){return{id:b,results:a.$2[b]}});return[].concat(c,b)},[])}})};c.getBucketListData=function(){return this.$1};c.isEmptyBucketListData=function(){var a=this.$1.reduce(function(a,b){return a+b.ids.length},0);return a===0};return a}();e.exports=a}),null);
__d("NotificationBucketStoreManager",["NotificationBucketStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h,i=null;a={getSkipBucketType:function(){return i},setSkipBucketType:function(a){i=a},setActiveClassification:function(a){h=a},getActiveClassification:function(){return h},getBucketStoreInstance:function(a,c){var d=c==null?"NO_CLASSIFICATION":c;g[d]==null&&(g[d]=new(b("NotificationBucketStore"))(a,c));return g[d]}};e.exports=a}),null);
__d("BizNotificationBucketingUtils",["BizNotificationConfig"],(function(a,b,c,d,e,f){"use strict";a={preProcessNodeForLiveSendBucketing:function(a){var c=b("BizNotificationConfig").notifTypeWhitelist,d=[];a.eligible_buckets==null?d=["BIZ_NON_CRITICAL"]:!a.eligible_buckets.includes("BIZ_CRITICAL")&&c.includes(a.notif_type)&&(d=["BIZ_CRITICAL"].concat(a.eligible_buckets||[]));d.length!==0&&(a.eligible_buckets=d);return a}};e.exports=a}),null);
__d("BizNotificationPopoverInitializationHelper",["AdsNuxTourAbandonedDataAction","Arbiter","BizNotificationInitUnseenNotifsAction","BizNotificationReceivedNotifAction","BizNotificationSeenStateUpdateAction","BizNotificationSetJewelOpenAction","BizNotificationSetPrefsAction","NotificationBucketStoreManager","NotificationConstants","NotificationUpdates"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={initPrefs:function(a){b("BizNotificationSetPrefsAction").dispatch({prefs:a},{line:"31",module:"BizNotificationPopoverInitializationHelper.js"})},initTabs:function(a,c){b("BizNotificationInitUnseenNotifsAction").dispatch({initialUnseenNotifsCountByClassification:a,initialClassificationsForUnseenNotifs:c},{line:"41",module:"BizNotificationPopoverInitializationHelper.js"}),g.setupSubscriptions(),g.initSkipBucket()},initSkipBucket:function(){b("NotificationBucketStoreManager").setSkipBucketType("BIZ_CRITICAL")},setupSubscriptions:function(){b("NotificationUpdates").subscribe("update-notifications",function(a,c){a=c.payloadsource;if(a!==b("NotificationConstants").PayloadSourceType.LIVE_SEND&&a!==b("NotificationConstants").PayloadSourceType.USER_ACTION)return;a=c.nodes;c=c.seenState;a!=null?b("BizNotificationReceivedNotifAction").dispatch({notifs:a},{line:"67",module:"BizNotificationPopoverInitializationHelper.js"}):c!=null&&b("BizNotificationSeenStateUpdateAction").dispatch({seenState:c},{line:"72",module:"BizNotificationPopoverInitializationHelper.js"})}),b("Arbiter").subscribe("notificationJewel/opened",function(){b("BizNotificationSetJewelOpenAction").dispatch({isJewelOpen:!0},{line:"77",module:"BizNotificationPopoverInitializationHelper.js"})}),b("Arbiter").subscribe("notificationJewel/closed",function(){b("AdsNuxTourAbandonedDataAction").dispatch({},{line:"81",module:"BizNotificationPopoverInitializationHelper.js"}),b("BizNotificationSetJewelOpenAction").dispatch({isJewelOpen:!1},{line:"82",module:"BizNotificationPopoverInitializationHelper.js"})})}};e.exports=g}),null);
__d("XUIIndeterminateBadge",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a}var b=a.prototype;b.getCount=function(){return 0};b.setCount=function(a){return};b.setLegacyContent=function(a){return};b.increment=function(){return};return a}();e.exports=a}),null);