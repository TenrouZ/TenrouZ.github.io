var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document
window.fnc = window.fnc || {};

var docwrite = function (v){
	'use strict';
	document.write(v);
};
window.fnc.docwrite = docwrite;

var hasJQuery = function (){
	'use strict';
	return (typeof jQuery === 'function');
};
window.fnc.hasJQuery =  hasJQuery;

var getCopyrights = function (){
	'use strict';
	return ((window.env.isConsole)?'(C)':'&copy;')+ 'CAPCOM CO., LTD. ALL RIGHTS RESERVED.';
};
window.fnc.getCopyrights =  getCopyrights;


window.member = window.member || {}; //サイト内データ
window.member.xhrSrc = (window.member.xhrSrc instanceof Array)?window.member.xhrSrc:[]; //外部ファイル読み込み定義用Array

/*XHR完了時処理関連*/
window.member.xhrCompleteFncs = (window.member.xhrCompleteFncs instanceof Array)?window.member.xhrCompleteFncs:[];
window.fnc.xhrComplete = function(){
	'use strict';
	for (var i=0;i<window.member.xhrCompleteFncs.length;i++) {
		window.member.xhrCompleteFncs[i]();
	}
};

window.env = {}; //環境情報

(function(){
	'use strict';
	//ローカル閲覧時のルートパス
	window.env.root = '';
	var _me = '/js/init.js';
	var _trg = document.getElementsByTagName('script');
	for (var i = 0; i < _trg.length; i++) {
		if (String(_trg[i].src).indexOf(_me) !== -1){
			window.env.root = _trg[i].src.split(_me)[0];
			break;
		}
	}
	
	//ua***********************************************************************************************
	var _ua = navigator.userAgent;

	//SP
	window.env.isiOS = (_ua.indexOf('iPhone') > 0 || _ua.indexOf('iPad') > 0 || _ua.indexOf('iPod') > 0);
	window.env.isDroid = (_ua.indexOf('Android') > 0);
	window.env.isSP = (window.env.isiOS || window.env.isDroid);

	//Game Console
	window.env.isPS3Con  = (_ua.indexOf('MHF-PS3') > -1) ? 1 : 0;
	window.env.isPSVCon  = (_ua.indexOf('MHF-VITA') > -1) ? 1 : 0;
	window.env.isXboxCon = (_ua.indexOf('MHF-Xbox360') > -1) ? 1 : 0;
	window.env.isConsole = (window.env.isXboxCon || window.env.isPSVCon || window.env.isPS3Con);

	//Console Full Browser
	window.env.isPS4Browser = (_ua.toUpperCase().indexOf('PLAYSTATION 4') > -1) ? 1 : 0;
	window.env.isPS3Browser = (_ua.toUpperCase().indexOf('PLAYSTATION 3') > -1) ? 1 : 0;
	window.env.isPSVBrowser = (_ua.toUpperCase().indexOf('PLAYSTATION VITA') > -1) ? 1 : 0;
	window.env.isNintendo   = (_ua.toUpperCase().indexOf('NINTENDO WIIU') > -1) ? 1 : 0;

	window.env.isMSIE = (/*@cc_on!@*/false) || (_ua.toLowerCase().indexOf('trident') > -1);
	
	window.env.isMayBePc = !(window.env.isSP || window.env.isConsole || window.env.isPS4Browser || window.env.isPS3Browser || window.env.isPSVBrowser || window.env.isNintendo);
	
	//dmain***********************************************************************************************
	var _host = location.host;
	var _href = location.href;
	window.env.isCog     = (_host.indexOf('cog')  > -1) ? 1 : ((_href.indexOf("_cog.html") > -1) ? 1 : 0);
	window.env.isPs4     = (_host.indexOf('ps4')  > -1) ? 1 : ((_href.indexOf("_ps4.html") > -1) ? 1 : 0);
	window.env.isPs3     = (_host.indexOf('ps3')  > -1) ? 1 : ((_href.indexOf("_ps3.html") > -1) ? 1 : 0);
	window.env.isPsV     = (_host.indexOf('psvita')  > -1) ? 1 : ((_href.indexOf("_psvita.html") > -1) ? 1 : 0);
	window.env.isHangame = (_host.indexOf('hangame')  > -1) ? 1 : ((_href.indexOf("_hangame.html") > -1) ? 1 : 0);
	window.env.isXbox    = (_host.indexOf('xbox360') > -1) ? 1 : ((_href.indexOf("_xbox.html") > -1) ? 1 : 0);
	window.env.isWiiU    = (_host.indexOf('wiiu') > -1) ? 1 : ((_href.indexOf("_wiiu.html") > -1) ? 1 : 0);
	window.env.isDmm     = (_host.indexOf('dmm')  > -1) ? 1 : ((_href.indexOf("_dmm.html") > -1) ? 1 : 0);
	window.env.isDebug   = (_host.indexOf('debug-')  > -1);
	window.env.isStage   = (_host.indexOf('stage-')  > -1);
	window.env.isLocal   = (_host === '');
	
	window.env.crrDom = '';
	window.env.crrDom = (window.env.isCog)?'cog':window.env.crrDom;
	window.env.crrDom = (window.env.isPs4)?'ps4':window.env.crrDom;
	window.env.crrDom = (window.env.isPs3)?'ps3':window.env.crrDom;
	window.env.crrDom = (window.env.isPsV)?'psv':window.env.crrDom;
	window.env.crrDom = (window.env.isWiiU)?'wiiu':window.env.crrDom;
	window.env.crrDom = (window.env.isHangame)?'hangame':window.env.crrDom;
	window.env.crrDom = (window.env.isDmm)?'dmm':window.env.crrDom;
	window.env.crrDom = (window.env.isXbox)?'xbox':window.env.crrDom;
	
	window.env.pathname = window.location.pathname;
	if (window.env.isLocal) {
		window.env.pathname = String(window.location.href).split(window.env.root).pop();
	}
	
	window.env.nhn = {};
	window.env.nhn.stage = 'beta-members-mhf-z.hangame.co.jp';
	window.env.nhn.debug = 'alpha-members-mhf-z.hangame.co.jp';
	window.env.nhn.real  = 'members-mhf-z.hangame.co.jp';
	
	
	var _cssTxt = '';
	//ドメインフィルタ
	var _style = '{display:none !important;}\n';
	_cssTxt += '.'+((window.env.isCog)?'cogHide':'cogOnly')+_style;
	_cssTxt += '.'+((window.env.isPs4)?'ps4Hide':'ps4Only')+_style;
	_cssTxt += '.'+((window.env.isPs3)?'ps3Hide':'ps3Only')+_style;
	_cssTxt += '.'+((window.env.isPsV)?'psvHide':'psvOnly')+_style;
	_cssTxt += '.'+((window.env.isWiiU)?'wiiuHide':'wiiuOnly')+_style;
	_cssTxt += '.'+((window.env.isHangame)?'nhnHide':'nhnOnly')+_style;
	_cssTxt += '.'+((window.env.isXbox)?'xboxHide':'xboxOnly')+_style;
	_cssTxt += '.'+((window.env.isDmm)?'dmmHide':'dmmOnly')+_style;
	
	//エージェントフィルタ
	_cssTxt += '.'+((window.env.isConsole)?'consoleHide':'consoleOnly')+_style;
	_cssTxt += '.'+((window.env.isXboxCon)?'nfXboxHide':'nfXboxOnly')+_style;
	_cssTxt += '.'+((window.env.isPS3Con)?'nfPs3Hide':'nfPs3Only')+_style;
	_cssTxt += '.'+((window.env.isPSVCon)?'nfPsVHide':'nfPsVOnly')+_style;
	_cssTxt += '.'+((window.env.isSP)?'spHide':'spOnly')+_style;
	_cssTxt += '.'+((window.env.isiOS)?'iosHide':'iosOnly')+_style;
	_cssTxt += '.'+((window.env.isDroid)?'droidHide':'droidOnly')+_style;
	_cssTxt += '.'+((window.env.isNintendo)?'nintendoHide':'nintendoOnly')+_style;
	_cssTxt += '.'+((window.env.isPS4Browser)?'playstation4Hide':'playstation4Only')+_style;
	_cssTxt += '.'+((window.env.isPS3Browser)?'playstation3Hide':'playstation3Only')+_style;
	_cssTxt += '.'+((window.env.isPSVBrowser)?'playstationVitaHide':'playstationVitaOnly')+_style;
	_cssTxt += '.'+((window.env.isMayBePc)?'pcHide':'pcOnly')+_style;
	
	docwrite('<style type="text/css">' + _cssTxt + '</style>');
	
	//load libs.
	if (window.fnc.hasJQuery()) {
		return; //
	} else {
		if (window.env.isConsole) {
			docwrite('<script src="'+window.env.root+'/js/libs/jquery.1.4.0.min.js" type="text/javascript"></script>');
		} else {
			docwrite('<script src="'+window.env.root+'/js/libs/jquery.1.7.2.min.js" type="text/javascript"></script>');
		}
	}
})();


var addEvt = function(trg,lis,func){
	'use strict';
	try{trg.addEventListener(lis,func,false);}
	catch(e){trg.attachEvent('on'+lis,func);}
};
window.fnc.addEvt = addEvt;

addEvt(window,'load',function(){
	'use strict';
});


var pathTest = function(trgs) {
	'use strict';
	if (trgs instanceof Array) {
		for (var i=0;i<trgs.length;i++) {
			var trg = String(trgs[i]);
			if (window.env.pathname.substr(0, trg.length) === trg) {
				return ' act';
			}
		}
	} else if(typeof(trgs) === 'string'){
		if (window.env.pathname.substr(0, trgs.length) === trgs) {
			return ' act';
		}
	}
	return '';
};
window.fnc.pathTest = pathTest;

//page title by domain
var showTitle = function (subTitle){
	'use strict';
	var ttl;
	switch (window.env.crrDom)
	{
		case 'cog':
			ttl = 'COG';
			break;
		case 'ps4':
			ttl = 'PS4&reg;版';
			break;
		case 'ps3':
			ttl = 'PS3&reg;版';
			break;
		case 'psv':
			ttl = 'PS Vita版';
			break;
		case 'wiiu':
			ttl = 'Wii U版';
			break;
		case 'hangame':
			ttl = 'ハンゲーム';
			break;
		case 'dmm':
			ttl = 'DMM.com';
			break;
		case 'xbox':
			ttl = 'Xbox360版';
			break;
		default:
			ttl = 'CAPCOM';
	}
	ttl += '「モンスターハンター フロンティアＺ」公式メンバーサイト';
	if (subTitle) {
		ttl = subTitle + '｜' + ttl;
	}
	//
	var _tmp = document.createElement('div'); _tmp.innerHTML = ttl;
	document.title = _tmp.innerHTML;
};
window.fnc.showTitle = showTitle;

/*
<script type="text/javascript">amp_reg();</script>
*/
var amp_reg = function(){
	'use strict';
	docwrite((window.env.isConsole)?'(R)':'&reg;');
};
window.fnc.amp_reg =  amp_reg;
/*
<script type="text/javascript">amp_copy();</script>
*/
var amp_copy = function amp_copy(){
	'use strict';
	docwrite((window.env.isConsole)?'(C)':'&copy;');
};
window.fnc.amp_copy =  amp_copy;









}
/*
     FILE ARCHIVED ON 03:02:36 Feb 15, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:43:10 Jan 17, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 413.637
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.063
  RedisCDXSource: 0.956
  esindex: 0.007
  LoadShardBlock: 395.484 (3)
  PetaboxLoader3.datanode: 353.819 (4)
  CDXLines.iter: 13.718 (3)
  PetaboxLoader3.resolve: 79.023 (2)
  load_resource: 94.471
*/