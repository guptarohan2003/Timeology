if (self.CavalryLogger) { CavalryLogger.start_js(["2qRrz"]); }

__d("CometReactionIcon.react",["React","getReactionSVGSource","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){var c=a.alt,d=a.reactionType,e=b("getReactionSVGSource")(d);if(e==null){b("recoverableViolation")("Could not render unsupported reaction type "+d,"comet_ui");return null}return b("React").jsx("img",{alt:c,className:(g||(g=b("stylex")))(a.xstyle),"data-testid":void 0,height:a.size,src:e,width:a.size})}e.exports=b("React").memo(a)}),null);
__d("StoriesConstants",[],(function(a,b,c,d,e,f){"use strict";a={CARD:{DEFAULT_SUSPENSE_CARD_INDEX:-1},NUMBER_OF_BUCKETS_TO_PREFETCH:2,NavList:{BANNER_HEIGHT:42,BOTTOM_MARGIN:25,CONNECTION_NAME:"useStoriesViewerBuckets_unified_stories_buckets",COUNT_PER_PAGINATION_FETCH:9},RATING_STICKER:{MAX_RATING:5,PADDING_SPACE_PORTION:.04,STAR_ICON_SIZE:32,STAR_INLINE_PORTION:.55},RELAY_FETCH_POLICY:{NETWORK_ONLY:"network-only",STORE_OR_NETWORK:"store-or-network"},TIMEOUT_FOR_SERVER_TO_FINISH_WORK:3e3,TRANSITION_DURATION_MS:300,ViewerSheetViewerList:{COUNT_PER_PAGINATION_FETCH:10,MAX_REACTIONS_PER_VIEWER:5}};e.exports=a}),null);
__d("StoriesLoggerHelper",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={getCameraPostType:function(a){__p&&__p();switch(a){case"PAGE_STORY":return"PAGE_STORY";case"GROUP_STORY":return"GROUP_STORY";case"EVENT_STORY":return"EVENT_STORY";case"BIRTHDAY_STORY":return"BIRTHDAY_STORY";case"CREW_STORY":return"CREW_STORY";case"GOODWILL_STORY":return"GOODWILL_STORY";case"GOODWILL_GENERATED_STORY":return"GOODWILL_GENERATED_STORY";case"STORY":return"STORY";case"PROFILE_PLUS_STORY":return"PROFILE_PLUS_STORY";case"ADMINED_ADDITIONAL_PROFILE_STORY":return"ADMINED_ADDITIONAL_PROFILE_STORY"}return null},getLoggingMediaType:function(a){var b="unknown";a==="Photo"?b="photo":a==="Video"?b="video":a==="live"&&(b="live");return b},getOwnerType:function(a,b,c,d){switch(b){case"Page":return"page";case"Event":return"event";case"User":return c===a?"self":d?"friend":"followee";case"Group":return"group";case"StoryPromotionOwner":return"promotion";default:return"null"}}};e.exports=a}),null);
__d("StoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTION_SOURCE:{ARCHIVE:"archive",FACEBOOK_CHAT_TAB:"facebook_chat_tab",IN_FEED:"in_feed",MESSENGER_DOT_COM:"messenger_dot_com",NOTIFICATION:"notification",PAGE_PROFILE:"page_profile",POST_HEADER:"post_header_actor_photo",STORIES_SURFACE:"stories_surface",TODAY_IN:"today_in",TRAY:"story_tray",UNKNOWN:"unknown",VIEWER:"viewer"},ACTION_TYPE:{CLOSE_STORY:"close_story",DELETE_MEDIA:"delete_media_attempted",OPEN_LINK:"open_link",OPEN_MEDIA:"open_media",OPEN_SEEN_SUMMARY:"open_seen_summary",OPEN_STORY:"open_story",PAUSE_STORY:"pause_story",REACTION_STICKER_INTERACTED:"reaction_sticker_interacted",REPLY_ATTEMPT_COMPLETED:"reply_attempt_completed",SEND_REPLY_ATTEMPT:"attempt_to_send_reply",SEND_STORY_FAILED:"send_story_failed",SEND_STORY_SUCCEEDED:"send_story_succeed",STORY_MEDIA_VIEW:"story_media_view",STORY_NAVIGATION:"story_navigation",TRAY_LOAD:"story_tray_load",UNPAUSE_STORY:"unpause_story",VISIT_PAGE:"fb_stories_visit_page"},CLOSE_STORY_GESTURE:{AUTO_EXIT:"auto_exit",BACK_BUTTON_EXIT:"back_button_exit",BLUR_BACKGROUND:"blur_background",CLOSE_BUTTON_EXIT:"close_button_exit",KEYBOARD_EXIT:"keyboard_exit"},FB_STORIES_IMPRESSION:75,FB_STORIES_TIMESPENT:76,IMPRESSION_DEDUPLICATION_TIME:6e4,NAVIGATION_GESTURE:{AUTO_JUMP:"auto_jump",NAVIGATE_AWAY:"navigate_away",SWIPE_LEFT:"swipe_left",SWIPE_RIGHT:"swipe_right",TAP_BACKWARD:"tap_backward",TAP_FORWARD:"tap_forward",VIEWER_SHEET:"viewer_sheet"},STORY_TYPE:{EVENT_STORY:"event",FOLLOWEE_STORY:"followee",FRIEND_STORY:"friend",GROUP_STORY:"group",MISSING_STORY_DATA:"missingStoryData",PAGE_STORY:"page",SELF_STORY:"self",STORY_PROMOTION:"promotion"},TIMESPENT_MINIMUM_TIME:500};e.exports=a}),null);
__d("ColorUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new RegExp("^[#]{0,1}([\\w]{1,2})?([\\w]{1,2})([\\w]{1,2})([\\w]{1,2})$"),h=function(a,b){__p&&__p();if(a==null)return null;a=a.match(g);if(a==null)return null;a=a.slice(1).map(function(a){return parseInt(a.length==1?a+a:a,16)});if(a.length==4){b==="ARGB"&&a.push(a.shift());return"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]/100+")"}return"rgb("+a[0]+","+a[1]+","+a[2]+")"};a={hexARGBToCSSRGBA:function(a){return h(a,"ARGB")},hexRGBAToCSSRGBA:function(a){return h(a,"RGBA")}};e.exports=a}),null);