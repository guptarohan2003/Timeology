if (self.CavalryLogger) { CavalryLogger.start_js(["qw9ib"]); }

__d("MessengerParticipantsImages.bs",["bs_curry","bs_js_dict","MercuryIDs","bs_caml_option","MercuryAssert","ImageSourceType","ImmutableObject","bs_js_null_undefined","ImageSourceRequest","PhotoResizeModeConst","MessengerParticipants.bs","MercuryParticipantsConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c,d){new(b("ImageSourceRequest"))().setFBID(b("bs_js_null_undefined").fromOption(b("bs_caml_option").nullable_to_opt(b("MercuryIDs").getUserIDFromParticipantID(a)))).setType(b("ImageSourceType").PROFILE_PICTURE).setDimensions(c,c).setResizeMode(b("PhotoResizeModeConst").COVER).setCallback(function(c){return b("bs_curry")._2(d,a,c)}).send();return 0}function h(a,c,d,e){__p&&__p();b("MercuryAssert").allParticipantIDs(a);var f=[!1],h=b("MessengerParticipants.bs").getMulti(a,function(e){__p&&__p();var h={},i=function(d,e){h[d]=e;if(!f[0]&&a.length===Object.keys(h).length)return b("bs_curry")._1(c,h);else return 0},j=function(a,c){var d=b("bs_js_dict").get(e,a);d!==void 0&&(e[a]=b("ImmutableObject").set(b("bs_caml_option").valFromOption(d),{big_image_src:c.uri}));return i(a,c.uri)};Object.keys(e).map(function(a){return a}).forEach(function(a){__p&&__p();var c=b("bs_js_dict").get(e,a);if(c!==void 0){c=b("bs_caml_option").valFromOption(c);var f=d===b("MercuryParticipantsConstants").BIG_IMAGE_SIZE;f=f?b("bs_caml_option").nullable_to_opt(c.big_image_src):void 0;if(f!==void 0)return i(c.id,f);else return g(a,d,j)}else return g(a,d,j)});return 0});return{remove:function(a){f[0]=!0;if(h==null)return 0;else return b("MessengerParticipants.bs").removeCallback(h)}}}function i(a,c,d){return h(a,c,b("MercuryParticipantsConstants").BIG_IMAGE_SIZE,0)}function a(a,c){return i(a,function(d){return b("bs_curry")._1(c,a.map(function(a){return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(d,a))}))},0)}function c(a,c,d){return h(a,function(d){return b("bs_curry")._1(c,a.map(function(a){return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(d,a))}))},d,0)}f.getBigImageMultiWithSize=h;f.getBigImageMulti=i;f.getOrderedBigImageMulti=a;f.getOrderedBigImageMultiWithSize=c}),null);