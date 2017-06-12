// Garden Gnome Software - Skin
// Pano2VR 5.2 beta3/15913
// Filename: Skin.ggsk
// Generated Mon Jun 12 19:46:06 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/button_image_quantity_surveying__o.png';
		preLoadImg.src=basePath + 'images/button_image_land_surveying__o.png';
		preLoadImg.src=basePath + 'images/button_image_civil_engineering__o.png';
		preLoadImg.src=basePath + 'images/button_image_construction_management__o.png';
		preLoadImg.src=basePath + 'images/button_image_human_resources__o.png';
		preLoadImg.src=basePath + 'images/button_image_information_technology__o.png';
		preLoadImg.src=basePath + 'images/button_image_marketing__o.png';
		preLoadImg.src=basePath + 'images/button_image_finance__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._video_screentint_youtube=document.createElement('div');
		this._video_screentint_youtube.ggId="video_screentint_youtube";
		this._video_screentint_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_screentint_youtube.ggVisible=false;
		this._video_screentint_youtube.className='ggskin ggskin_rectangle ';
		this._video_screentint_youtube.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0.02%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._video_screentint_youtube.setAttribute('style',hs);
		this._video_screentint_youtube.style[domTransform + 'Origin']='50% 50%';
		me._video_screentint_youtube.ggIsActive=function() {
			return false;
		}
		me._video_screentint_youtube.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_screentint_youtube.onclick=function (e) {
			me._video_screentint_youtube.style[domTransition]='none';
			me._video_screentint_youtube.style.visibility='hidden';
			me._video_screentint_youtube.ggVisible=false;
			me._close0.style[domTransition]='none';
			me._close0.style.visibility='hidden';
			me._close0.ggVisible=false;
			me._video_screentint_youtube.style[domTransition]='none';
			me._video_screentint_youtube.style.visibility='hidden';
			me._video_screentint_youtube.ggVisible=false;
			me._button_image_civil_engineering.style[domTransition]='none';
			me._button_image_civil_engineering.style.visibility='hidden';
			me._button_image_civil_engineering.ggVisible=false;
			me._video_civil_engineering.ggInitMedia('');
			me._video_civil_engineering.style[domTransition]='none';
			me._video_civil_engineering.style.visibility='hidden';
			me._video_civil_engineering.ggVisible=false;
			me._header_text_civil_engineering.style[domTransition]='none';
			me._header_text_civil_engineering.style.visibility='hidden';
			me._header_text_civil_engineering.ggVisible=false;
			me._body_text_civil_engineering.style[domTransition]='none';
			me._body_text_civil_engineering.style.visibility='hidden';
			me._body_text_civil_engineering.ggVisible=false;
			me._video_land_surveying.ggInitMedia('');
			me._video_land_surveying.style[domTransition]='none';
			me._video_land_surveying.style.visibility='hidden';
			me._video_land_surveying.ggVisible=false;
			me._header_text_land_surveying.style[domTransition]='none';
			me._header_text_land_surveying.style.visibility='hidden';
			me._header_text_land_surveying.ggVisible=false;
			me._body_text_land_surveying.style[domTransition]='none';
			me._body_text_land_surveying.style.visibility='hidden';
			me._body_text_land_surveying.ggVisible=false;
			me._video_construction_management.ggInitMedia('');
			me._video_construction_management.style[domTransition]='none';
			me._video_construction_management.style.visibility='hidden';
			me._video_construction_management.ggVisible=false;
			me._header_text_construction_management.style[domTransition]='none';
			me._header_text_construction_management.style.visibility='hidden';
			me._header_text_construction_management.ggVisible=false;
			me._body_text_construction_management.style[domTransition]='none';
			me._body_text_construction_management.style.visibility='hidden';
			me._body_text_construction_management.ggVisible=false;
			me._video_quantity_surveying.ggInitMedia('');
			me._video_quantity_surveying.style[domTransition]='none';
			me._video_quantity_surveying.style.visibility='hidden';
			me._video_quantity_surveying.ggVisible=false;
			me._header_text_quantity_surveying.style[domTransition]='none';
			me._header_text_quantity_surveying.style.visibility='hidden';
			me._header_text_quantity_surveying.ggVisible=false;
			me._body_text_quantity_surveying.style[domTransition]='none';
			me._body_text_quantity_surveying.style.visibility='hidden';
			me._body_text_quantity_surveying.ggVisible=false;
			me._video_construction_information.ggInitMedia('');
			me._video_construction_information.style[domTransition]='none';
			me._video_construction_information.style.visibility='hidden';
			me._video_construction_information.ggVisible=false;
			me._header_text_construction_information.style[domTransition]='none';
			me._header_text_construction_information.style.visibility='hidden';
			me._header_text_construction_information.ggVisible=false;
			me._body_text_construction_information.style[domTransition]='none';
			me._body_text_construction_information.style.visibility='hidden';
			me._body_text_construction_information.ggVisible=false;
			me._button_image_land_surveying.style[domTransition]='none';
			me._button_image_land_surveying.style.visibility='hidden';
			me._button_image_land_surveying.ggVisible=false;
			me._button_image_construction_management.style[domTransition]='none';
			me._button_image_construction_management.style.visibility='hidden';
			me._button_image_construction_management.ggVisible=false;
			me._button_image_quantity_surveying.style[domTransition]='none';
			me._button_image_quantity_surveying.style.visibility='hidden';
			me._button_image_quantity_surveying.ggVisible=false;
			me._box_construction_information.style[domTransition]='none';
			me._box_construction_information.style.visibility='hidden';
			me._box_construction_information.ggVisible=false;
			me._box_civil_engineering.style[domTransition]='none';
			me._box_civil_engineering.style.visibility='hidden';
			me._box_civil_engineering.ggVisible=false;
			me._box_land_surveying.style[domTransition]='none';
			me._box_land_surveying.style.visibility='hidden';
			me._box_land_surveying.ggVisible=false;
			me._box_construction_management.style[domTransition]='none';
			me._box_construction_management.style.visibility='hidden';
			me._box_construction_management.ggVisible=false;
			me._box_quantity_surveying.style[domTransition]='none';
			me._box_quantity_surveying.style.visibility='hidden';
			me._box_quantity_surveying.ggVisible=false;
			me._box_corporate_information.style[domTransition]='none';
			me._box_corporate_information.style.visibility='hidden';
			me._box_corporate_information.ggVisible=false;
			me._video_corporate_information.ggInitMedia('');
			me._video_corporate_information.style[domTransition]='none';
			me._video_corporate_information.style.visibility='hidden';
			me._video_corporate_information.ggVisible=false;
			me._body_text_corporate_information.style[domTransition]='none';
			me._body_text_corporate_information.style.visibility='hidden';
			me._body_text_corporate_information.ggVisible=false;
			me._header_text_corporate_information.style[domTransition]='none';
			me._header_text_corporate_information.style.visibility='hidden';
			me._header_text_corporate_information.ggVisible=false;
			me._video_finance.ggInitMedia('');
			me._video_finance.style[domTransition]='none';
			me._video_finance.style.visibility='hidden';
			me._video_finance.ggVisible=false;
			me._header_text_finance.style[domTransition]='none';
			me._header_text_finance.style.visibility='hidden';
			me._header_text_finance.ggVisible=false;
			me._body_text_finance.style[domTransition]='none';
			me._body_text_finance.style.visibility='hidden';
			me._body_text_finance.ggVisible=false;
			me._box_finance.style[domTransition]='none';
			me._box_finance.style.visibility='hidden';
			me._box_finance.ggVisible=false;
			me._button_image_finance.style[domTransition]='none';
			me._button_image_finance.style.visibility='hidden';
			me._button_image_finance.ggVisible=false;
			me._video_marketing.ggInitMedia('');
			me._video_marketing.style[domTransition]='none';
			me._video_marketing.style.visibility='hidden';
			me._video_marketing.ggVisible=false;
			me._header_text_marketing.style[domTransition]='none';
			me._header_text_marketing.style.visibility='hidden';
			me._header_text_marketing.ggVisible=false;
			me._body_text_marketing.style[domTransition]='none';
			me._body_text_marketing.style.visibility='hidden';
			me._body_text_marketing.ggVisible=false;
			me._box_marketing.style[domTransition]='none';
			me._box_marketing.style.visibility='hidden';
			me._box_marketing.ggVisible=false;
			me._button_image_marketing.style[domTransition]='none';
			me._button_image_marketing.style.visibility='hidden';
			me._button_image_marketing.ggVisible=false;
			me._video_information_technology.ggInitMedia('');
			me._video_information_technology.style[domTransition]='none';
			me._video_information_technology.style.visibility='hidden';
			me._video_information_technology.ggVisible=false;
			me._header_text_information_technology.style[domTransition]='none';
			me._header_text_information_technology.style.visibility='hidden';
			me._header_text_information_technology.ggVisible=false;
			me._body_text_information_technology.style[domTransition]='none';
			me._body_text_information_technology.style.visibility='hidden';
			me._body_text_information_technology.ggVisible=false;
			me._box_information_technology.style[domTransition]='none';
			me._box_information_technology.style.visibility='hidden';
			me._box_information_technology.ggVisible=false;
			me._button_image_information_technology.style[domTransition]='none';
			me._button_image_information_technology.style.visibility='hidden';
			me._button_image_information_technology.ggVisible=false;
			me._video_human_resources.ggInitMedia('');
			me._video_human_resources.style[domTransition]='none';
			me._video_human_resources.style.visibility='hidden';
			me._video_human_resources.ggVisible=false;
			me._header_text_human_resources.style[domTransition]='none';
			me._header_text_human_resources.style.visibility='hidden';
			me._header_text_human_resources.ggVisible=false;
			me._body_text_human_resources.style[domTransition]='none';
			me._body_text_human_resources.style.visibility='hidden';
			me._body_text_human_resources.ggVisible=false;
			me._box_human_resources.style[domTransition]='none';
			me._box_human_resources.style.visibility='hidden';
			me._box_human_resources.ggVisible=false;
			me._button_image_human_resources.style[domTransition]='none';
			me._button_image_human_resources.style.visibility='hidden';
			me._button_image_human_resources.ggVisible=false;
		}
		this._video_screentint_youtube.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._video_screentint_youtube);
		this._menu_button=document.createElement('div');
		this._menu_button__img=document.createElement('img');
		this._menu_button__img.className='ggskin ggskin_svg';
		this._menu_button__img.setAttribute('src',basePath + 'images/menu_button.svg');
		this._menu_button__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._menu_button__img['ondragstart']=function() { return false; };
		this._menu_button.appendChild(this._menu_button__img);
		this._menu_button__imgo=document.createElement('img');
		this._menu_button__imgo.className='ggskin ggskin_svg';
		this._menu_button__imgo.setAttribute('src',basePath + 'images/menu_button__o.svg');
		this._menu_button__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._menu_button__imgo['ondragstart']=function() { return false; };
		this._menu_button.appendChild(this._menu_button__imgo);
		this._menu_button.ggId="menu_button";
		this._menu_button.ggLeft=-16;
		this._menu_button.ggTop=-92;
		this._menu_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_button.ggVisible=true;
		this._menu_button.className='ggskin ggskin_svg ';
		this._menu_button.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -92px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._menu_button.setAttribute('style',hs);
		this._menu_button.style[domTransform + 'Origin']='50% 50%';
		me._menu_button.ggIsActive=function() {
			return false;
		}
		me._menu_button.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._menu_button.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=me.ggCurrentTime;
		}
		this._menu_button.onmouseover=function (e) {
			me._menu_button__img.style.visibility='hidden';
			me._menu_button__imgo.style.visibility='inherit';
		}
		this._menu_button.onmouseout=function (e) {
			me._menu_button__img.style.visibility='inherit';
			me._menu_button__imgo.style.visibility='hidden';
		}
		this._menu_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._hide_timer=document.createElement('div');
		this._hide_timer.ggTimestamp=this.ggCurrentTime;
		this._hide_timer.ggLastIsActive=true;
		this._hide_timer.ggTimeout=5000;
		this._hide_timer.ggId="hide_timer";
		this._hide_timer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer.ggVisible=true;
		this._hide_timer.className='ggskin ggskin_timer ';
		this._hide_timer.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer.setAttribute('style',hs);
		this._hide_timer.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		me._hide_timer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me._hide_elements.style[domTransition]='none';
			} else {
				me._hide_elements.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._hide_elements.style.opacity='1';
			me._hide_elements.style.visibility=me._hide_elements.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='0';
			me._menu_button.style.visibility='hidden';
		}
		this._hide_timer.ggDeactivate=function () {
			if (me.player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='1';
			me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._hide_elements.style[domTransition]='none';
			} else {
				me._hide_elements.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._hide_elements.style.opacity='0';
			me._hide_elements.style.visibility='hidden';
		}
		this._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		this._menu_button.appendChild(this._hide_timer);
		this.divSkin.appendChild(this._menu_button);
		this._hide_elements=document.createElement('div');
		this._hide_elements.ggId="hide_elements";
		this._hide_elements.ggLeft=0;
		this._hide_elements.ggTop=-92;
		this._hide_elements.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_elements.ggVisible=true;
		this._hide_elements.className='ggskin ggskin_container ';
		this._hide_elements.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -92px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_elements.setAttribute('style',hs);
		this._hide_elements.style[domTransform + 'Origin']='50% 50%';
		me._hide_elements.ggIsActive=function() {
			return false;
		}
		me._hide_elements.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide_elements.onmouseover=function (e) {
			me.elementMouseOver['hide_elements']=true;
		}
		this._hide_elements.onmouseout=function (e) {
			me.elementMouseOver['hide_elements']=false;
		}
		this._hide_elements.ontouchend=function (e) {
			me.elementMouseOver['hide_elements']=false;
		}
		this._hide_elements.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container ';
		this._controller.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -80px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 163px;';
		hs+='pointer-events:none;';
		this._controller.setAttribute('style',hs);
		this._controller.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._controller.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._controller.ggUpdatePosition=function (useTransition) {
		}
		this._controller_bg=document.createElement('div');
		this._controller_bg.ggId="controller_bg";
		this._controller_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller_bg.ggVisible=true;
		this._controller_bg.className='ggskin ggskin_rectangle ';
		this._controller_bg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 3px;';
		hs+='border-radius : 3px;';
		hs+='background : rgba(63,63,63,0.498039);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		this._controller_bg.setAttribute('style',hs);
		this._controller_bg.style[domTransform + 'Origin']='50% 50%';
		me._controller_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._controller_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._controller_bg.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._controller_bg);
		this._fullscreen_off=document.createElement('div');
		this._fullscreen_off__img=document.createElement('img');
		this._fullscreen_off__img.className='ggskin ggskin_svg';
		this._fullscreen_off__img.setAttribute('src',basePath + 'images/fullscreen_off.svg');
		this._fullscreen_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen_off__img['ondragstart']=function() { return false; };
		this._fullscreen_off.appendChild(this._fullscreen_off__img);
		this._fullscreen_off__imgo=document.createElement('img');
		this._fullscreen_off__imgo.className='ggskin ggskin_svg';
		this._fullscreen_off__imgo.setAttribute('src',basePath + 'images/fullscreen_off__o.svg');
		this._fullscreen_off__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._fullscreen_off__imgo['ondragstart']=function() { return false; };
		this._fullscreen_off.appendChild(this._fullscreen_off__imgo);
		this._fullscreen_off.ggId="fullscreen_off";
		this._fullscreen_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_off.ggVisible=false;
		this._fullscreen_off.className='ggskin ggskin_svg ';
		this._fullscreen_off.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 130px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._fullscreen_off.setAttribute('style',hs);
		this._fullscreen_off.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen_off.onclick=function (e) {
			me.player.exitFullscreen();
		}
		this._fullscreen_off.onmouseover=function (e) {
			me._fullscreen_off__img.style.visibility='hidden';
			me._fullscreen_off__imgo.style.visibility='inherit';
		}
		this._fullscreen_off.onmouseout=function (e) {
			me._fullscreen_off__img.style.visibility='inherit';
			me._fullscreen_off__imgo.style.visibility='hidden';
		}
		me._fullscreen_off.ggCurrentLogicStateVisible = -1;
		this._fullscreen_off.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_off.style[domTransition]='';
				if (me._fullscreen_off.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_off.style.visibility=(Number(me._fullscreen_off.style.opacity)>0||!me._fullscreen_off.style.opacity)?'inherit':'hidden';
					me._fullscreen_off.ggVisible=true;
				}
				else {
					me._fullscreen_off.style.visibility="hidden";
					me._fullscreen_off.ggVisible=false;
				}
			}
		}
		this._fullscreen_off.ggUpdatePosition=function (useTransition) {
			me._fullscreen_off.ggUpdateConditionResize();
		}
		this._controller.appendChild(this._fullscreen_off);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen__imgo=document.createElement('img');
		this._fullscreen__imgo.className='ggskin ggskin_svg';
		this._fullscreen__imgo.setAttribute('src',basePath + 'images/fullscreen__o.svg');
		this._fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._fullscreen__imgo['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__imgo);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg ';
		this._fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 130px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function (e) {
			me.player.enterFullscreen();
		}
		this._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		this._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		me._fullscreen.ggCurrentLogicStateVisible = -1;
		this._fullscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen.style[domTransition]='';
				if (me._fullscreen.ggCurrentLogicStateVisible == 0) {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.ggVisible=false;
				}
				else {
					me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
					me._fullscreen.ggVisible=true;
				}
			}
		}
		this._fullscreen.ggUpdatePosition=function (useTransition) {
			me._fullscreen.ggUpdateConditionResize();
		}
		this._controller.appendChild(this._fullscreen);
		this._movemode_1=document.createElement('div');
		this._movemode_1__img=document.createElement('img');
		this._movemode_1__img.className='ggskin ggskin_svg';
		this._movemode_1__img.setAttribute('src',basePath + 'images/movemode_1.svg');
		this._movemode_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._movemode_1__img['ondragstart']=function() { return false; };
		this._movemode_1.appendChild(this._movemode_1__img);
		this._movemode_1__imgo=document.createElement('img');
		this._movemode_1__imgo.className='ggskin ggskin_svg';
		this._movemode_1__imgo.setAttribute('src',basePath + 'images/movemode_1__o.svg');
		this._movemode_1__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._movemode_1__imgo['ondragstart']=function() { return false; };
		this._movemode_1.appendChild(this._movemode_1__imgo);
		this._movemode_1.ggId="movemode_1";
		this._movemode_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode_1.ggVisible=false;
		this._movemode_1.className='ggskin ggskin_svg ';
		this._movemode_1.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 97px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._movemode_1.setAttribute('style',hs);
		this._movemode_1.style[domTransform + 'Origin']='50% 50%';
		me._movemode_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._movemode_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._movemode_1.onclick=function (e) {
			me.player.changeViewMode(0);
		}
		this._movemode_1.onmouseover=function (e) {
			me._movemode_1__img.style.visibility='hidden';
			me._movemode_1__imgo.style.visibility='inherit';
		}
		this._movemode_1.onmouseout=function (e) {
			me._movemode_1__img.style.visibility='inherit';
			me._movemode_1__imgo.style.visibility='hidden';
		}
		me._movemode_1.ggCurrentLogicStateVisible = -1;
		this._movemode_1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewMode() == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._movemode_1.style[domTransition]='';
				if (me._movemode_1.ggCurrentLogicStateVisible == 0) {
					me._movemode_1.style.visibility=(Number(me._movemode_1.style.opacity)>0||!me._movemode_1.style.opacity)?'inherit':'hidden';
					me._movemode_1.ggVisible=true;
				}
				else {
					me._movemode_1.style.visibility="hidden";
					me._movemode_1.ggVisible=false;
				}
			}
		}
		this._movemode_1.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._movemode_1);
		this._movemode_2=document.createElement('div');
		this._movemode_2__img=document.createElement('img');
		this._movemode_2__img.className='ggskin ggskin_svg';
		this._movemode_2__img.setAttribute('src',basePath + 'images/movemode_2.svg');
		this._movemode_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._movemode_2__img['ondragstart']=function() { return false; };
		this._movemode_2.appendChild(this._movemode_2__img);
		this._movemode_2__imgo=document.createElement('img');
		this._movemode_2__imgo.className='ggskin ggskin_svg';
		this._movemode_2__imgo.setAttribute('src',basePath + 'images/movemode_2__o.svg');
		this._movemode_2__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._movemode_2__imgo['ondragstart']=function() { return false; };
		this._movemode_2.appendChild(this._movemode_2__imgo);
		this._movemode_2.ggId="movemode_2";
		this._movemode_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode_2.ggVisible=false;
		this._movemode_2.className='ggskin ggskin_svg ';
		this._movemode_2.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 97px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._movemode_2.setAttribute('style',hs);
		this._movemode_2.style[domTransform + 'Origin']='50% 50%';
		me._movemode_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._movemode_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._movemode_2.onclick=function (e) {
			me.player.changeViewMode(1);
		}
		this._movemode_2.onmouseover=function (e) {
			me._movemode_2__img.style.visibility='hidden';
			me._movemode_2__imgo.style.visibility='inherit';
		}
		this._movemode_2.onmouseout=function (e) {
			me._movemode_2__img.style.visibility='inherit';
			me._movemode_2__imgo.style.visibility='hidden';
		}
		me._movemode_2.ggCurrentLogicStateVisible = -1;
		this._movemode_2.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewMode() == 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._movemode_2.style[domTransition]='';
				if (me._movemode_2.ggCurrentLogicStateVisible == 0) {
					me._movemode_2.style.visibility=(Number(me._movemode_2.style.opacity)>0||!me._movemode_2.style.opacity)?'inherit':'hidden';
					me._movemode_2.ggVisible=true;
				}
				else {
					me._movemode_2.style.visibility="hidden";
					me._movemode_2.ggVisible=false;
				}
			}
		}
		this._movemode_2.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._movemode_2);
		this._autorotate=document.createElement('div');
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate__imgo=document.createElement('img');
		this._autorotate__imgo.className='ggskin ggskin_svg';
		this._autorotate__imgo.setAttribute('src',basePath + 'images/autorotate__o.svg');
		this._autorotate__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._autorotate__imgo['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__imgo);
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg ';
		this._autorotate.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate.style[domTransform + 'Origin']='50% 50%';
		me._autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._autorotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._autorotate.onclick=function (e) {
			me.player.startAutorotate("0.2","5","1");
		}
		this._autorotate.onmouseover=function (e) {
			me._autorotate__img.style.visibility='hidden';
			me._autorotate__imgo.style.visibility='inherit';
		}
		this._autorotate.onmouseout=function (e) {
			me._autorotate__img.style.visibility='inherit';
			me._autorotate__imgo.style.visibility='hidden';
		}
		me._autorotate.ggCurrentLogicStateVisible = -1;
		this._autorotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate.style[domTransition]='';
				if (me._autorotate.ggCurrentLogicStateVisible == 0) {
					me._autorotate.style.visibility="hidden";
					me._autorotate.ggVisible=false;
				}
				else {
					me._autorotate.style.visibility=(Number(me._autorotate.style.opacity)>0||!me._autorotate.style.opacity)?'inherit':'hidden';
					me._autorotate.ggVisible=true;
				}
			}
		}
		this._autorotate.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._autorotate);
		this._autorotate_off=document.createElement('div');
		this._autorotate_off__img=document.createElement('img');
		this._autorotate_off__img.className='ggskin ggskin_svg';
		this._autorotate_off__img.setAttribute('src',basePath + 'images/autorotate_off.svg');
		this._autorotate_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._autorotate_off__img['ondragstart']=function() { return false; };
		this._autorotate_off.appendChild(this._autorotate_off__img);
		this._autorotate_off__imgo=document.createElement('img');
		this._autorotate_off__imgo.className='ggskin ggskin_svg';
		this._autorotate_off__imgo.setAttribute('src',basePath + 'images/autorotate_off__o.svg');
		this._autorotate_off__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._autorotate_off__imgo['ondragstart']=function() { return false; };
		this._autorotate_off.appendChild(this._autorotate_off__imgo);
		this._autorotate_off.ggId="autorotate_off";
		this._autorotate_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate_off.ggVisible=false;
		this._autorotate_off.className='ggskin ggskin_svg ';
		this._autorotate_off.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._autorotate_off.setAttribute('style',hs);
		this._autorotate_off.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._autorotate_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._autorotate_off.onclick=function (e) {
			me.player.stopAutorotate();
		}
		this._autorotate_off.onmouseover=function (e) {
			me._autorotate_off__img.style.visibility='hidden';
			me._autorotate_off__imgo.style.visibility='inherit';
		}
		this._autorotate_off.onmouseout=function (e) {
			me._autorotate_off__img.style.visibility='inherit';
			me._autorotate_off__imgo.style.visibility='hidden';
		}
		me._autorotate_off.ggCurrentLogicStateVisible = -1;
		this._autorotate_off.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_off.style[domTransition]='';
				if (me._autorotate_off.ggCurrentLogicStateVisible == 0) {
					me._autorotate_off.style.visibility=(Number(me._autorotate_off.style.opacity)>0||!me._autorotate_off.style.opacity)?'inherit':'hidden';
					me._autorotate_off.ggVisible=true;
				}
				else {
					me._autorotate_off.style.visibility="hidden";
					me._autorotate_off.ggVisible=false;
				}
			}
		}
		this._autorotate_off.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._autorotate_off);
		this._zoomout=document.createElement('div');
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout__imgo=document.createElement('img');
		this._zoomout__imgo.className='ggskin ggskin_svg';
		this._zoomout__imgo.setAttribute('src',basePath + 'images/zoomout__o.svg');
		this._zoomout__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomout__imgo['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__imgo);
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg ';
		this._zoomout.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 31px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		this._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._zoomout);
		this._zoomin=document.createElement('div');
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin__imgo=document.createElement('img');
		this._zoomin__imgo.className='ggskin ggskin_svg';
		this._zoomin__imgo.setAttribute('src',basePath + 'images/zoomin__o.svg');
		this._zoomin__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomin__imgo['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__imgo);
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg ';
		this._zoomin.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		this._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._zoomin);
		this._hide_elements.appendChild(this._controller);
		this.divSkin.appendChild(this._hide_elements);
		this._quantity_surveying_content=document.createElement('div');
		this._quantity_surveying_content.ggId="Quantity Surveying content";
		this._quantity_surveying_content.ggLeft=-413;
		this._quantity_surveying_content.ggTop=211;
		this._quantity_surveying_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._quantity_surveying_content.ggVisible=true;
		this._quantity_surveying_content.className='ggskin ggskin_container ';
		this._quantity_surveying_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -413px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._quantity_surveying_content.setAttribute('style',hs);
		this._quantity_surveying_content.style[domTransform + 'Origin']='50% 50%';
		me._quantity_surveying_content.ggIsActive=function() {
			return false;
		}
		me._quantity_surveying_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._quantity_surveying_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_quantity_surveying=document.createElement('div');
		this._box_quantity_surveying.ggId="Box - Quantity Surveying";
		this._box_quantity_surveying.ggLeft=-162;
		this._box_quantity_surveying.ggTop=-441;
		this._box_quantity_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_quantity_surveying.ggVisible=false;
		this._box_quantity_surveying.className='ggskin ggskin_rectangle ';
		this._box_quantity_surveying.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_quantity_surveying.setAttribute('style',hs);
		this._box_quantity_surveying.style[domTransform + 'Origin']='50% 50%';
		me._box_quantity_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_quantity_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_quantity_surveying.ggCurrentLogicStatePosition = -1;
		me._box_quantity_surveying.ggCurrentLogicStateSize = -1;
		this._box_quantity_surveying.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_quantity_surveying.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_quantity_surveying.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_quantity_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._box_quantity_surveying.ggCurrentLogicStatePosition == 0) {
					me._box_quantity_surveying.ggLeft=-29;
					me._box_quantity_surveying.ggTop=-390;
					me._box_quantity_surveying.ggUpdatePosition(true);
				}
				else {
					me._box_quantity_surveying.ggLeft=-162;
					me._box_quantity_surveying.ggTop=-441;
					me._box_quantity_surveying.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_quantity_surveying.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_quantity_surveying.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_quantity_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._box_quantity_surveying.ggCurrentLogicStateSize == 0) {
					me._box_quantity_surveying.style.width='276px';
					me._box_quantity_surveying.style.height='238px';
					me.updateSize(me._box_quantity_surveying);
				}
				else {
					me._box_quantity_surveying.style.width='542px';
					me._box_quantity_surveying.style.height='450px';
					me.updateSize(me._box_quantity_surveying);
				}
			}
		}
		this._box_quantity_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_quantity_surveying.ggUpdateConditionResize();
		}
		this._quantity_surveying_content.appendChild(this._box_quantity_surveying);
		this._body_text_quantity_surveying=document.createElement('div');
		this._body_text_quantity_surveying__text=document.createElement('div');
		this._body_text_quantity_surveying.className='ggskin ggskin_textdiv';
		this._body_text_quantity_surveying.ggTextDiv=this._body_text_quantity_surveying__text;
		this._body_text_quantity_surveying.ggId="body_text - Quantity Surveying";
		this._body_text_quantity_surveying.ggLeft=-152;
		this._body_text_quantity_surveying.ggTop=-103;
		this._body_text_quantity_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_quantity_surveying.ggVisible=false;
		this._body_text_quantity_surveying.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_quantity_surveying.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		this._body_text_quantity_surveying.setAttribute('style',hs);
		this._body_text_quantity_surveying.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 411px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_quantity_surveying__text.setAttribute('style',hs);
		this._body_text_quantity_surveying__text.innerHTML="As a Quantity Surveying Graduate you will gain exposure to some of New Zealand\u2019s most exciting projects; observing and gaining hands-on experience managing costs and ensuring commercial value, in within some of New Zealand's most exciting projects, while playing a part in their success. With exposure to multiple areas of our business and a network of graduates across the industry to support you, we\u2019re setting you up for success - make your future.";
		this._body_text_quantity_surveying.appendChild(this._body_text_quantity_surveying__text);
		me._body_text_quantity_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_quantity_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_quantity_surveying.ggCurrentLogicStateScaling = -1;
		this._body_text_quantity_surveying.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_quantity_surveying.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_quantity_surveying.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_quantity_surveying.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_quantity_surveying.ggCurrentLogicStateScaling == 0) {
					me._body_text_quantity_surveying.ggParameter.sx = 0;
					me._body_text_quantity_surveying.ggParameter.sy = 0;
					me._body_text_quantity_surveying.style[domTransform]=parameterToTransform(me._body_text_quantity_surveying.ggParameter);
				}
				else {
					me._body_text_quantity_surveying.ggParameter.sx = 1;
					me._body_text_quantity_surveying.ggParameter.sy = 1;
					me._body_text_quantity_surveying.style[domTransform]=parameterToTransform(me._body_text_quantity_surveying.ggParameter);
				}
			}
		}
		this._body_text_quantity_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_quantity_surveying.ggUpdateConditionResize();
		}
		this._quantity_surveying_content.appendChild(this._body_text_quantity_surveying);
		this._header_text_quantity_surveying=document.createElement('div');
		this._header_text_quantity_surveying__text=document.createElement('div');
		this._header_text_quantity_surveying.className='ggskin ggskin_textdiv';
		this._header_text_quantity_surveying.ggTextDiv=this._header_text_quantity_surveying__text;
		this._header_text_quantity_surveying.ggId="header_text - Quantity Surveying";
		this._header_text_quantity_surveying.ggLeft=-152;
		this._header_text_quantity_surveying.ggTop=-121;
		this._header_text_quantity_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_quantity_surveying.ggVisible=false;
		this._header_text_quantity_surveying.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_quantity_surveying.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_quantity_surveying.setAttribute('style',hs);
		this._header_text_quantity_surveying.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_quantity_surveying__text.setAttribute('style',hs);
		this._header_text_quantity_surveying__text.innerHTML="Quantity Surveying";
		this._header_text_quantity_surveying.appendChild(this._header_text_quantity_surveying__text);
		me._header_text_quantity_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_quantity_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_quantity_surveying.ggCurrentLogicStateScaling = -1;
		this._header_text_quantity_surveying.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_quantity_surveying.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_quantity_surveying.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_quantity_surveying.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_quantity_surveying.ggCurrentLogicStateScaling == 0) {
					me._header_text_quantity_surveying.ggParameter.sx = 0;
					me._header_text_quantity_surveying.ggParameter.sy = 0;
					me._header_text_quantity_surveying.style[domTransform]=parameterToTransform(me._header_text_quantity_surveying.ggParameter);
				}
				else {
					me._header_text_quantity_surveying.ggParameter.sx = 1;
					me._header_text_quantity_surveying.ggParameter.sy = 1;
					me._header_text_quantity_surveying.style[domTransform]=parameterToTransform(me._header_text_quantity_surveying.ggParameter);
				}
			}
		}
		this._header_text_quantity_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_quantity_surveying.ggUpdateConditionResize();
		}
		this._quantity_surveying_content.appendChild(this._header_text_quantity_surveying);
		this._video_quantity_surveying=document.createElement('div');
		this._video_quantity_surveying.seekbars = [];
		this._video_quantity_surveying.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_quantity_surveying.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_quantity_surveying.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_quantity_surveying.hasChildNodes()) {
				me._video_quantity_surveying.removeChild(me._video_quantity_surveying.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_quantity_surveying.ggVideoNotLoaded = true;
				return;
			}
			me._video_quantity_surveying.ggVideoNotLoaded = false;
			me._video_quantity_surveying__vid=document.createElement('iframe');
			me._video_quantity_surveying__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_quantity_surveying__vid.setAttribute('src', ggVideoUrl);
			me._video_quantity_surveying__vid.setAttribute('width', '100%');
			me._video_quantity_surveying__vid.setAttribute('height', '100%');
			me._video_quantity_surveying__vid.setAttribute('style', 'border:none; ');
			me._video_quantity_surveying.appendChild(me._video_quantity_surveying__vid);
			me._video_quantity_surveying.ggVideoSource = media;
		}
		this._video_quantity_surveying.ggId="Video - Quantity Surveying";
		this._video_quantity_surveying.ggLeft=-152;
		this._video_quantity_surveying.ggTop=-418;
		this._video_quantity_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_quantity_surveying.ggVisible=false;
		this._video_quantity_surveying.className='ggskin ggskin_video ';
		this._video_quantity_surveying.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_quantity_surveying.setAttribute('style',hs);
		this._video_quantity_surveying.style[domTransform + 'Origin']='50% 50%';
		me._video_quantity_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_quantity_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_quantity_surveying.ggCurrentLogicStatePosition = -1;
		me._video_quantity_surveying.ggCurrentLogicStateSize = -1;
		this._video_quantity_surveying.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_quantity_surveying.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_quantity_surveying.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_quantity_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._video_quantity_surveying.ggCurrentLogicStatePosition == 0) {
					me._video_quantity_surveying.ggLeft=-19;
					me._video_quantity_surveying.ggTop=-360;
					me._video_quantity_surveying.ggUpdatePosition(true);
				}
				else {
					me._video_quantity_surveying.ggLeft=-152;
					me._video_quantity_surveying.ggTop=-418;
					me._video_quantity_surveying.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_quantity_surveying.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_quantity_surveying.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_quantity_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._video_quantity_surveying.ggCurrentLogicStateSize == 0) {
					me._video_quantity_surveying.style.width='256px';
					me._video_quantity_surveying.style.height='144px';
					me.updateSize(me._video_quantity_surveying);
				}
				else {
					me._video_quantity_surveying.style.width='522px';
					me._video_quantity_surveying.style.height='294px';
					me.updateSize(me._video_quantity_surveying);
				}
			}
		}
		this._video_quantity_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_quantity_surveying.ggUpdateConditionResize();
		}
		this._quantity_surveying_content.appendChild(this._video_quantity_surveying);
		this._button_image_quantity_surveying=document.createElement('div');
		this._button_image_quantity_surveying__img=document.createElement('img');
		this._button_image_quantity_surveying__img.className='ggskin ggskin_button';
		this._button_image_quantity_surveying__img.setAttribute('src',basePath + 'images/button_image_quantity_surveying.png');
		this._button_image_quantity_surveying__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_quantity_surveying__img.className='ggskin ggskin_button';
		this._button_image_quantity_surveying__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_image_quantity_surveying__img);
		this._button_image_quantity_surveying.appendChild(this._button_image_quantity_surveying__img);
		this._button_image_quantity_surveying.ggId="Button image - Quantity Surveying";
		this._button_image_quantity_surveying.ggLeft=261;
		this._button_image_quantity_surveying.ggTop=-102;
		this._button_image_quantity_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_quantity_surveying.ggVisible=false;
		this._button_image_quantity_surveying.className='ggskin ggskin_button ';
		this._button_image_quantity_surveying.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		this._button_image_quantity_surveying.setAttribute('style',hs);
		this._button_image_quantity_surveying.style[domTransform + 'Origin']='50% 50%';
		me._button_image_quantity_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_quantity_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_quantity_surveying.onclick=function (e) {
			me.player.openUrl("https:\/\/careers.fbcareers.com\/careers\/JobDetail?id=5381","");
		}
		this._button_image_quantity_surveying.onmouseover=function (e) {
			me._button_image_quantity_surveying__img.src=basePath + 'images/button_image_quantity_surveying__o.png';
		}
		this._button_image_quantity_surveying.onmouseout=function (e) {
			me._button_image_quantity_surveying__img.src=basePath + 'images/button_image_quantity_surveying.png';
		}
		me._button_image_quantity_surveying.ggCurrentLogicStatePosition = -1;
		me._button_image_quantity_surveying.ggCurrentLogicStateSize = -1;
		this._button_image_quantity_surveying.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_image_quantity_surveying.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_image_quantity_surveying.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_image_quantity_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_quantity_surveying.ggCurrentLogicStatePosition == 0) {
					me._button_image_quantity_surveying.ggLeft=34;
					me._button_image_quantity_surveying.ggTop=-201;
					me._button_image_quantity_surveying.ggUpdatePosition(true);
				}
				else {
					me._button_image_quantity_surveying.ggLeft=261;
					me._button_image_quantity_surveying.ggTop=-102;
					me._button_image_quantity_surveying.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_image_quantity_surveying.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_image_quantity_surveying.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_image_quantity_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_quantity_surveying.ggCurrentLogicStateSize == 0) {
					me._button_image_quantity_surveying.style.width='150px';
					me._button_image_quantity_surveying.style.height='34px';
					me.updateSize(me._button_image_quantity_surveying);
				}
				else {
					me._button_image_quantity_surveying.style.width='109px';
					me._button_image_quantity_surveying.style.height='24px';
					me.updateSize(me._button_image_quantity_surveying);
				}
			}
		}
		this._button_image_quantity_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_quantity_surveying.ggUpdateConditionResize();
		}
		this._quantity_surveying_content.appendChild(this._button_image_quantity_surveying);
		this.divSkin.appendChild(this._quantity_surveying_content);
		this._land_surveying_content=document.createElement('div');
		this._land_surveying_content.ggId="Land Surveying content";
		this._land_surveying_content.ggLeft=-413;
		this._land_surveying_content.ggTop=211;
		this._land_surveying_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._land_surveying_content.ggVisible=true;
		this._land_surveying_content.className='ggskin ggskin_container ';
		this._land_surveying_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -413px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._land_surveying_content.setAttribute('style',hs);
		this._land_surveying_content.style[domTransform + 'Origin']='50% 50%';
		me._land_surveying_content.ggIsActive=function() {
			return false;
		}
		me._land_surveying_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._land_surveying_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_land_surveying=document.createElement('div');
		this._box_land_surveying.ggId="Box - Land Surveying";
		this._box_land_surveying.ggLeft=-162;
		this._box_land_surveying.ggTop=-441;
		this._box_land_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_land_surveying.ggVisible=false;
		this._box_land_surveying.className='ggskin ggskin_rectangle ';
		this._box_land_surveying.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_land_surveying.setAttribute('style',hs);
		this._box_land_surveying.style[domTransform + 'Origin']='50% 50%';
		me._box_land_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_land_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_land_surveying.ggCurrentLogicStatePosition = -1;
		me._box_land_surveying.ggCurrentLogicStateSize = -1;
		this._box_land_surveying.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_land_surveying.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_land_surveying.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_land_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._box_land_surveying.ggCurrentLogicStatePosition == 0) {
					me._box_land_surveying.ggLeft=-29;
					me._box_land_surveying.ggTop=-390;
					me._box_land_surveying.ggUpdatePosition(true);
				}
				else {
					me._box_land_surveying.ggLeft=-162;
					me._box_land_surveying.ggTop=-441;
					me._box_land_surveying.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_land_surveying.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_land_surveying.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_land_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._box_land_surveying.ggCurrentLogicStateSize == 0) {
					me._box_land_surveying.style.width='276px';
					me._box_land_surveying.style.height='238px';
					me.updateSize(me._box_land_surveying);
				}
				else {
					me._box_land_surveying.style.width='542px';
					me._box_land_surveying.style.height='450px';
					me.updateSize(me._box_land_surveying);
				}
			}
		}
		this._box_land_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_land_surveying.ggUpdateConditionResize();
		}
		this._land_surveying_content.appendChild(this._box_land_surveying);
		this._body_text_land_surveying=document.createElement('div');
		this._body_text_land_surveying__text=document.createElement('div');
		this._body_text_land_surveying.className='ggskin ggskin_textdiv';
		this._body_text_land_surveying.ggTextDiv=this._body_text_land_surveying__text;
		this._body_text_land_surveying.ggId="body_text - Land Surveying";
		this._body_text_land_surveying.ggLeft=-152;
		this._body_text_land_surveying.ggTop=-103;
		this._body_text_land_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_land_surveying.ggVisible=false;
		this._body_text_land_surveying.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_land_surveying.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		this._body_text_land_surveying.setAttribute('style',hs);
		this._body_text_land_surveying.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 411px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_land_surveying__text.setAttribute('style',hs);
		this._body_text_land_surveying__text.innerHTML="As a land Surveying Graduate you will gain exposure to some of New Zealand\u2019s most exciting projects; observing and gaining hands-on experience, while playing a part in their success.  With a mentor on hand every step of the way and a network of graduates across the industry, we\u2019re setting you up for success \u2013 make your future.";
		this._body_text_land_surveying.appendChild(this._body_text_land_surveying__text);
		me._body_text_land_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_land_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_land_surveying.ggCurrentLogicStateScaling = -1;
		this._body_text_land_surveying.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_land_surveying.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_land_surveying.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_land_surveying.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_land_surveying.ggCurrentLogicStateScaling == 0) {
					me._body_text_land_surveying.ggParameter.sx = 0;
					me._body_text_land_surveying.ggParameter.sy = 0;
					me._body_text_land_surveying.style[domTransform]=parameterToTransform(me._body_text_land_surveying.ggParameter);
				}
				else {
					me._body_text_land_surveying.ggParameter.sx = 1;
					me._body_text_land_surveying.ggParameter.sy = 1;
					me._body_text_land_surveying.style[domTransform]=parameterToTransform(me._body_text_land_surveying.ggParameter);
				}
			}
		}
		this._body_text_land_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_land_surveying.ggUpdateConditionResize();
		}
		this._land_surveying_content.appendChild(this._body_text_land_surveying);
		this._header_text_land_surveying=document.createElement('div');
		this._header_text_land_surveying__text=document.createElement('div');
		this._header_text_land_surveying.className='ggskin ggskin_textdiv';
		this._header_text_land_surveying.ggTextDiv=this._header_text_land_surveying__text;
		this._header_text_land_surveying.ggId="header_text - Land Surveying";
		this._header_text_land_surveying.ggLeft=-152;
		this._header_text_land_surveying.ggTop=-121;
		this._header_text_land_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_land_surveying.ggVisible=false;
		this._header_text_land_surveying.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_land_surveying.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_land_surveying.setAttribute('style',hs);
		this._header_text_land_surveying.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_land_surveying__text.setAttribute('style',hs);
		this._header_text_land_surveying__text.innerHTML="Land Surveying";
		this._header_text_land_surveying.appendChild(this._header_text_land_surveying__text);
		me._header_text_land_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_land_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_land_surveying.ggCurrentLogicStateScaling = -1;
		this._header_text_land_surveying.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_land_surveying.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_land_surveying.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_land_surveying.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_land_surveying.ggCurrentLogicStateScaling == 0) {
					me._header_text_land_surveying.ggParameter.sx = 0;
					me._header_text_land_surveying.ggParameter.sy = 0;
					me._header_text_land_surveying.style[domTransform]=parameterToTransform(me._header_text_land_surveying.ggParameter);
				}
				else {
					me._header_text_land_surveying.ggParameter.sx = 1;
					me._header_text_land_surveying.ggParameter.sy = 1;
					me._header_text_land_surveying.style[domTransform]=parameterToTransform(me._header_text_land_surveying.ggParameter);
				}
			}
		}
		this._header_text_land_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_land_surveying.ggUpdateConditionResize();
		}
		this._land_surveying_content.appendChild(this._header_text_land_surveying);
		this._video_land_surveying=document.createElement('div');
		this._video_land_surveying.seekbars = [];
		this._video_land_surveying.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_land_surveying.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_land_surveying.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_land_surveying.hasChildNodes()) {
				me._video_land_surveying.removeChild(me._video_land_surveying.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_land_surveying.ggVideoNotLoaded = true;
				return;
			}
			me._video_land_surveying.ggVideoNotLoaded = false;
			me._video_land_surveying__vid=document.createElement('iframe');
			me._video_land_surveying__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_land_surveying__vid.setAttribute('src', ggVideoUrl);
			me._video_land_surveying__vid.setAttribute('width', '100%');
			me._video_land_surveying__vid.setAttribute('height', '100%');
			me._video_land_surveying__vid.setAttribute('style', 'border:none; ');
			me._video_land_surveying.appendChild(me._video_land_surveying__vid);
			me._video_land_surveying.ggVideoSource = media;
		}
		this._video_land_surveying.ggId="Video - Land Surveying";
		this._video_land_surveying.ggLeft=-152;
		this._video_land_surveying.ggTop=-418;
		this._video_land_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_land_surveying.ggVisible=false;
		this._video_land_surveying.className='ggskin ggskin_video ';
		this._video_land_surveying.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_land_surveying.setAttribute('style',hs);
		this._video_land_surveying.style[domTransform + 'Origin']='50% 50%';
		me._video_land_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_land_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_land_surveying.ggCurrentLogicStatePosition = -1;
		me._video_land_surveying.ggCurrentLogicStateSize = -1;
		this._video_land_surveying.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_land_surveying.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_land_surveying.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_land_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._video_land_surveying.ggCurrentLogicStatePosition == 0) {
					me._video_land_surveying.ggLeft=-19;
					me._video_land_surveying.ggTop=-360;
					me._video_land_surveying.ggUpdatePosition(true);
				}
				else {
					me._video_land_surveying.ggLeft=-152;
					me._video_land_surveying.ggTop=-418;
					me._video_land_surveying.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_land_surveying.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_land_surveying.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_land_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._video_land_surveying.ggCurrentLogicStateSize == 0) {
					me._video_land_surveying.style.width='256px';
					me._video_land_surveying.style.height='144px';
					me.updateSize(me._video_land_surveying);
				}
				else {
					me._video_land_surveying.style.width='522px';
					me._video_land_surveying.style.height='294px';
					me.updateSize(me._video_land_surveying);
				}
			}
		}
		this._video_land_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_land_surveying.ggUpdateConditionResize();
		}
		this._land_surveying_content.appendChild(this._video_land_surveying);
		this._button_image_land_surveying=document.createElement('div');
		this._button_image_land_surveying__img=document.createElement('img');
		this._button_image_land_surveying__img.className='ggskin ggskin_button';
		this._button_image_land_surveying__img.setAttribute('src',basePath + 'images/button_image_land_surveying.png');
		this._button_image_land_surveying__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_land_surveying__img.className='ggskin ggskin_button';
		this._button_image_land_surveying__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_image_land_surveying__img);
		this._button_image_land_surveying.appendChild(this._button_image_land_surveying__img);
		this._button_image_land_surveying.ggId="Button image - Land Surveying";
		this._button_image_land_surveying.ggLeft=261;
		this._button_image_land_surveying.ggTop=-102;
		this._button_image_land_surveying.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_land_surveying.ggVisible=false;
		this._button_image_land_surveying.className='ggskin ggskin_button ';
		this._button_image_land_surveying.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		this._button_image_land_surveying.setAttribute('style',hs);
		this._button_image_land_surveying.style[domTransform + 'Origin']='50% 50%';
		me._button_image_land_surveying.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_land_surveying.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_land_surveying.onclick=function (e) {
			me.player.openUrl("https:\/\/careers.fbcareers.com\/careers\/JobDetail?id=5380","");
		}
		this._button_image_land_surveying.onmouseover=function (e) {
			me._button_image_land_surveying__img.src=basePath + 'images/button_image_land_surveying__o.png';
		}
		this._button_image_land_surveying.onmouseout=function (e) {
			me._button_image_land_surveying__img.src=basePath + 'images/button_image_land_surveying.png';
		}
		me._button_image_land_surveying.ggCurrentLogicStatePosition = -1;
		me._button_image_land_surveying.ggCurrentLogicStateSize = -1;
		this._button_image_land_surveying.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_image_land_surveying.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_image_land_surveying.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_image_land_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_land_surveying.ggCurrentLogicStatePosition == 0) {
					me._button_image_land_surveying.ggLeft=34;
					me._button_image_land_surveying.ggTop=-201;
					me._button_image_land_surveying.ggUpdatePosition(true);
				}
				else {
					me._button_image_land_surveying.ggLeft=261;
					me._button_image_land_surveying.ggTop=-102;
					me._button_image_land_surveying.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_image_land_surveying.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_image_land_surveying.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_image_land_surveying.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_land_surveying.ggCurrentLogicStateSize == 0) {
					me._button_image_land_surveying.style.width='150px';
					me._button_image_land_surveying.style.height='34px';
					me.updateSize(me._button_image_land_surveying);
				}
				else {
					me._button_image_land_surveying.style.width='109px';
					me._button_image_land_surveying.style.height='24px';
					me.updateSize(me._button_image_land_surveying);
				}
			}
		}
		this._button_image_land_surveying.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_land_surveying.ggUpdateConditionResize();
		}
		this._land_surveying_content.appendChild(this._button_image_land_surveying);
		this.divSkin.appendChild(this._land_surveying_content);
		this._civil_engineering_content=document.createElement('div');
		this._civil_engineering_content.ggId="Civil Engineering content";
		this._civil_engineering_content.ggLeft=-413;
		this._civil_engineering_content.ggTop=211;
		this._civil_engineering_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._civil_engineering_content.ggVisible=true;
		this._civil_engineering_content.className='ggskin ggskin_container ';
		this._civil_engineering_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -413px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._civil_engineering_content.setAttribute('style',hs);
		this._civil_engineering_content.style[domTransform + 'Origin']='50% 50%';
		me._civil_engineering_content.ggIsActive=function() {
			return false;
		}
		me._civil_engineering_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._civil_engineering_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_civil_engineering=document.createElement('div');
		this._box_civil_engineering.ggId="Box - Civil Engineering";
		this._box_civil_engineering.ggLeft=-162;
		this._box_civil_engineering.ggTop=-441;
		this._box_civil_engineering.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_civil_engineering.ggVisible=false;
		this._box_civil_engineering.className='ggskin ggskin_rectangle ';
		this._box_civil_engineering.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_civil_engineering.setAttribute('style',hs);
		this._box_civil_engineering.style[domTransform + 'Origin']='50% 50%';
		me._box_civil_engineering.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_civil_engineering.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_civil_engineering.ggCurrentLogicStatePosition = -1;
		me._box_civil_engineering.ggCurrentLogicStateSize = -1;
		this._box_civil_engineering.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_civil_engineering.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_civil_engineering.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_civil_engineering.style[domTransition]='left none, top none, width none, height none';
				if (me._box_civil_engineering.ggCurrentLogicStatePosition == 0) {
					me._box_civil_engineering.ggLeft=-29;
					me._box_civil_engineering.ggTop=-390;
					me._box_civil_engineering.ggUpdatePosition(true);
				}
				else {
					me._box_civil_engineering.ggLeft=-162;
					me._box_civil_engineering.ggTop=-441;
					me._box_civil_engineering.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_civil_engineering.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_civil_engineering.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_civil_engineering.style[domTransition]='left none, top none, width none, height none';
				if (me._box_civil_engineering.ggCurrentLogicStateSize == 0) {
					me._box_civil_engineering.style.width='276px';
					me._box_civil_engineering.style.height='238px';
					me.updateSize(me._box_civil_engineering);
				}
				else {
					me._box_civil_engineering.style.width='542px';
					me._box_civil_engineering.style.height='450px';
					me.updateSize(me._box_civil_engineering);
				}
			}
		}
		this._box_civil_engineering.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_civil_engineering.ggUpdateConditionResize();
		}
		this._civil_engineering_content.appendChild(this._box_civil_engineering);
		this._body_text_civil_engineering=document.createElement('div');
		this._body_text_civil_engineering__text=document.createElement('div');
		this._body_text_civil_engineering.className='ggskin ggskin_textdiv';
		this._body_text_civil_engineering.ggTextDiv=this._body_text_civil_engineering__text;
		this._body_text_civil_engineering.ggId="body_text - Civil Engineering";
		this._body_text_civil_engineering.ggLeft=-152;
		this._body_text_civil_engineering.ggTop=-103;
		this._body_text_civil_engineering.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_civil_engineering.ggVisible=false;
		this._body_text_civil_engineering.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_civil_engineering.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		this._body_text_civil_engineering.setAttribute('style',hs);
		this._body_text_civil_engineering.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 411px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_civil_engineering__text.setAttribute('style',hs);
		this._body_text_civil_engineering__text.innerHTML="As a Civil Engineering Graduate you will learn about Fletcher Building and gain a deep understanding of the construction business. You will gain exposure in the planning, designing and overseeing some of New Zealand\u2019s most exciting projects, while gaining hands-on experience.  With a mentor on hand every step of the way and a network of graduates across the industry, we\u2019re setting you up for success \u2013 make your future.";
		this._body_text_civil_engineering.appendChild(this._body_text_civil_engineering__text);
		me._body_text_civil_engineering.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_civil_engineering.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_civil_engineering.ggCurrentLogicStateScaling = -1;
		this._body_text_civil_engineering.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_civil_engineering.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_civil_engineering.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_civil_engineering.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_civil_engineering.ggCurrentLogicStateScaling == 0) {
					me._body_text_civil_engineering.ggParameter.sx = 0;
					me._body_text_civil_engineering.ggParameter.sy = 0;
					me._body_text_civil_engineering.style[domTransform]=parameterToTransform(me._body_text_civil_engineering.ggParameter);
				}
				else {
					me._body_text_civil_engineering.ggParameter.sx = 1;
					me._body_text_civil_engineering.ggParameter.sy = 1;
					me._body_text_civil_engineering.style[domTransform]=parameterToTransform(me._body_text_civil_engineering.ggParameter);
				}
			}
		}
		this._body_text_civil_engineering.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_civil_engineering.ggUpdateConditionResize();
		}
		this._civil_engineering_content.appendChild(this._body_text_civil_engineering);
		this._header_text_civil_engineering=document.createElement('div');
		this._header_text_civil_engineering__text=document.createElement('div');
		this._header_text_civil_engineering.className='ggskin ggskin_textdiv';
		this._header_text_civil_engineering.ggTextDiv=this._header_text_civil_engineering__text;
		this._header_text_civil_engineering.ggId="header_text - Civil Engineering";
		this._header_text_civil_engineering.ggLeft=-152;
		this._header_text_civil_engineering.ggTop=-121;
		this._header_text_civil_engineering.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_civil_engineering.ggVisible=false;
		this._header_text_civil_engineering.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_civil_engineering.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_civil_engineering.setAttribute('style',hs);
		this._header_text_civil_engineering.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_civil_engineering__text.setAttribute('style',hs);
		this._header_text_civil_engineering__text.innerHTML="Civil Engineering";
		this._header_text_civil_engineering.appendChild(this._header_text_civil_engineering__text);
		me._header_text_civil_engineering.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_civil_engineering.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_civil_engineering.ggCurrentLogicStateScaling = -1;
		this._header_text_civil_engineering.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_civil_engineering.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_civil_engineering.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_civil_engineering.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_civil_engineering.ggCurrentLogicStateScaling == 0) {
					me._header_text_civil_engineering.ggParameter.sx = 0;
					me._header_text_civil_engineering.ggParameter.sy = 0;
					me._header_text_civil_engineering.style[domTransform]=parameterToTransform(me._header_text_civil_engineering.ggParameter);
				}
				else {
					me._header_text_civil_engineering.ggParameter.sx = 1;
					me._header_text_civil_engineering.ggParameter.sy = 1;
					me._header_text_civil_engineering.style[domTransform]=parameterToTransform(me._header_text_civil_engineering.ggParameter);
				}
			}
		}
		this._header_text_civil_engineering.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_civil_engineering.ggUpdateConditionResize();
		}
		this._civil_engineering_content.appendChild(this._header_text_civil_engineering);
		this._video_civil_engineering=document.createElement('div');
		this._video_civil_engineering.seekbars = [];
		this._video_civil_engineering.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_civil_engineering.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_civil_engineering.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_civil_engineering.hasChildNodes()) {
				me._video_civil_engineering.removeChild(me._video_civil_engineering.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_civil_engineering.ggVideoNotLoaded = true;
				return;
			}
			me._video_civil_engineering.ggVideoNotLoaded = false;
			me._video_civil_engineering__vid=document.createElement('iframe');
			me._video_civil_engineering__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_civil_engineering__vid.setAttribute('src', ggVideoUrl);
			me._video_civil_engineering__vid.setAttribute('width', '100%');
			me._video_civil_engineering__vid.setAttribute('height', '100%');
			me._video_civil_engineering__vid.setAttribute('style', 'border:none; ');
			me._video_civil_engineering.appendChild(me._video_civil_engineering__vid);
			me._video_civil_engineering.ggVideoSource = media;
		}
		this._video_civil_engineering.ggId="Video - Civil Engineering";
		this._video_civil_engineering.ggLeft=-152;
		this._video_civil_engineering.ggTop=-418;
		this._video_civil_engineering.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_civil_engineering.ggVisible=false;
		this._video_civil_engineering.className='ggskin ggskin_video ';
		this._video_civil_engineering.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_civil_engineering.setAttribute('style',hs);
		this._video_civil_engineering.style[domTransform + 'Origin']='50% 50%';
		me._video_civil_engineering.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_civil_engineering.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_civil_engineering.ggCurrentLogicStatePosition = -1;
		me._video_civil_engineering.ggCurrentLogicStateSize = -1;
		this._video_civil_engineering.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_civil_engineering.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_civil_engineering.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_civil_engineering.style[domTransition]='left none, top none, width none, height none';
				if (me._video_civil_engineering.ggCurrentLogicStatePosition == 0) {
					me._video_civil_engineering.ggLeft=-19;
					me._video_civil_engineering.ggTop=-360;
					me._video_civil_engineering.ggUpdatePosition(true);
				}
				else {
					me._video_civil_engineering.ggLeft=-152;
					me._video_civil_engineering.ggTop=-418;
					me._video_civil_engineering.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_civil_engineering.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_civil_engineering.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_civil_engineering.style[domTransition]='left none, top none, width none, height none';
				if (me._video_civil_engineering.ggCurrentLogicStateSize == 0) {
					me._video_civil_engineering.style.width='256px';
					me._video_civil_engineering.style.height='144px';
					me.updateSize(me._video_civil_engineering);
				}
				else {
					me._video_civil_engineering.style.width='522px';
					me._video_civil_engineering.style.height='294px';
					me.updateSize(me._video_civil_engineering);
				}
			}
		}
		this._video_civil_engineering.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_civil_engineering.ggUpdateConditionResize();
		}
		this._civil_engineering_content.appendChild(this._video_civil_engineering);
		this._button_image_civil_engineering=document.createElement('div');
		this._button_image_civil_engineering__img=document.createElement('img');
		this._button_image_civil_engineering__img.className='ggskin ggskin_button';
		this._button_image_civil_engineering__img.setAttribute('src',basePath + 'images/button_image_civil_engineering.png');
		this._button_image_civil_engineering__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_civil_engineering__img.className='ggskin ggskin_button';
		this._button_image_civil_engineering__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_image_civil_engineering__img);
		this._button_image_civil_engineering.appendChild(this._button_image_civil_engineering__img);
		this._button_image_civil_engineering.ggId="Button image - Civil Engineering";
		this._button_image_civil_engineering.ggLeft=261;
		this._button_image_civil_engineering.ggTop=-102;
		this._button_image_civil_engineering.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_civil_engineering.ggVisible=false;
		this._button_image_civil_engineering.className='ggskin ggskin_button ';
		this._button_image_civil_engineering.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		this._button_image_civil_engineering.setAttribute('style',hs);
		this._button_image_civil_engineering.style[domTransform + 'Origin']='50% 50%';
		me._button_image_civil_engineering.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_civil_engineering.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_civil_engineering.onclick=function (e) {
			me.player.openUrl("https:\/\/careers.fbcareers.com\/careers\/JobDetail?id=5379","");
		}
		this._button_image_civil_engineering.onmouseover=function (e) {
			me._button_image_civil_engineering__img.src=basePath + 'images/button_image_civil_engineering__o.png';
		}
		this._button_image_civil_engineering.onmouseout=function (e) {
			me._button_image_civil_engineering__img.src=basePath + 'images/button_image_civil_engineering.png';
		}
		me._button_image_civil_engineering.ggCurrentLogicStatePosition = -1;
		me._button_image_civil_engineering.ggCurrentLogicStateSize = -1;
		this._button_image_civil_engineering.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_image_civil_engineering.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_image_civil_engineering.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_image_civil_engineering.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_civil_engineering.ggCurrentLogicStatePosition == 0) {
					me._button_image_civil_engineering.ggLeft=34;
					me._button_image_civil_engineering.ggTop=-201;
					me._button_image_civil_engineering.ggUpdatePosition(true);
				}
				else {
					me._button_image_civil_engineering.ggLeft=261;
					me._button_image_civil_engineering.ggTop=-102;
					me._button_image_civil_engineering.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_image_civil_engineering.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_image_civil_engineering.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_image_civil_engineering.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_civil_engineering.ggCurrentLogicStateSize == 0) {
					me._button_image_civil_engineering.style.width='150px';
					me._button_image_civil_engineering.style.height='34px';
					me.updateSize(me._button_image_civil_engineering);
				}
				else {
					me._button_image_civil_engineering.style.width='109px';
					me._button_image_civil_engineering.style.height='24px';
					me.updateSize(me._button_image_civil_engineering);
				}
			}
		}
		this._button_image_civil_engineering.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_civil_engineering.ggUpdateConditionResize();
		}
		this._civil_engineering_content.appendChild(this._button_image_civil_engineering);
		this.divSkin.appendChild(this._civil_engineering_content);
		this._construction_management_content=document.createElement('div');
		this._construction_management_content.ggId="Construction Management content";
		this._construction_management_content.ggLeft=-413;
		this._construction_management_content.ggTop=211;
		this._construction_management_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._construction_management_content.ggVisible=true;
		this._construction_management_content.className='ggskin ggskin_container ';
		this._construction_management_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -413px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._construction_management_content.setAttribute('style',hs);
		this._construction_management_content.style[domTransform + 'Origin']='50% 50%';
		me._construction_management_content.ggIsActive=function() {
			return false;
		}
		me._construction_management_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._construction_management_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_construction_management=document.createElement('div');
		this._box_construction_management.ggId="Box - Construction Management";
		this._box_construction_management.ggLeft=-162;
		this._box_construction_management.ggTop=-441;
		this._box_construction_management.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_construction_management.ggVisible=false;
		this._box_construction_management.className='ggskin ggskin_rectangle ';
		this._box_construction_management.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_construction_management.setAttribute('style',hs);
		this._box_construction_management.style[domTransform + 'Origin']='50% 50%';
		me._box_construction_management.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_construction_management.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_construction_management.ggCurrentLogicStatePosition = -1;
		me._box_construction_management.ggCurrentLogicStateSize = -1;
		this._box_construction_management.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_construction_management.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_construction_management.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_construction_management.style[domTransition]='left none, top none, width none, height none';
				if (me._box_construction_management.ggCurrentLogicStatePosition == 0) {
					me._box_construction_management.ggLeft=-29;
					me._box_construction_management.ggTop=-390;
					me._box_construction_management.ggUpdatePosition(true);
				}
				else {
					me._box_construction_management.ggLeft=-162;
					me._box_construction_management.ggTop=-441;
					me._box_construction_management.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_construction_management.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_construction_management.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_construction_management.style[domTransition]='left none, top none, width none, height none';
				if (me._box_construction_management.ggCurrentLogicStateSize == 0) {
					me._box_construction_management.style.width='276px';
					me._box_construction_management.style.height='238px';
					me.updateSize(me._box_construction_management);
				}
				else {
					me._box_construction_management.style.width='542px';
					me._box_construction_management.style.height='450px';
					me.updateSize(me._box_construction_management);
				}
			}
		}
		this._box_construction_management.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_construction_management.ggUpdateConditionResize();
		}
		this._construction_management_content.appendChild(this._box_construction_management);
		this._body_text_construction_management=document.createElement('div');
		this._body_text_construction_management__text=document.createElement('div');
		this._body_text_construction_management.className='ggskin ggskin_textdiv';
		this._body_text_construction_management.ggTextDiv=this._body_text_construction_management__text;
		this._body_text_construction_management.ggId="body_text - Construction Management";
		this._body_text_construction_management.ggLeft=-152;
		this._body_text_construction_management.ggTop=-103;
		this._body_text_construction_management.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_construction_management.ggVisible=false;
		this._body_text_construction_management.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_construction_management.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		this._body_text_construction_management.setAttribute('style',hs);
		this._body_text_construction_management.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 411px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_construction_management__text.setAttribute('style',hs);
		this._body_text_construction_management__text.innerHTML="As a Construction Management Graduate you will learn about Fletcher Building and gain a deep understanding of the construction business. You will gain hands on exposure to some of New Zealand\u2019s most exciting projects, and with access to multiple areas of our business, a mentor on hand every step of the way, and a network of graduates across the industry, we\u2019re setting you up for success \u2013 make your future.";
		this._body_text_construction_management.appendChild(this._body_text_construction_management__text);
		me._body_text_construction_management.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_construction_management.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_construction_management.ggCurrentLogicStateScaling = -1;
		this._body_text_construction_management.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_construction_management.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_construction_management.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_construction_management.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_construction_management.ggCurrentLogicStateScaling == 0) {
					me._body_text_construction_management.ggParameter.sx = 0;
					me._body_text_construction_management.ggParameter.sy = 0;
					me._body_text_construction_management.style[domTransform]=parameterToTransform(me._body_text_construction_management.ggParameter);
				}
				else {
					me._body_text_construction_management.ggParameter.sx = 1;
					me._body_text_construction_management.ggParameter.sy = 1;
					me._body_text_construction_management.style[domTransform]=parameterToTransform(me._body_text_construction_management.ggParameter);
				}
			}
		}
		this._body_text_construction_management.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_construction_management.ggUpdateConditionResize();
		}
		this._construction_management_content.appendChild(this._body_text_construction_management);
		this._header_text_construction_management=document.createElement('div');
		this._header_text_construction_management__text=document.createElement('div');
		this._header_text_construction_management.className='ggskin ggskin_textdiv';
		this._header_text_construction_management.ggTextDiv=this._header_text_construction_management__text;
		this._header_text_construction_management.ggId="header_text - Construction Management";
		this._header_text_construction_management.ggLeft=-152;
		this._header_text_construction_management.ggTop=-121;
		this._header_text_construction_management.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_construction_management.ggVisible=false;
		this._header_text_construction_management.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_construction_management.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_construction_management.setAttribute('style',hs);
		this._header_text_construction_management.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_construction_management__text.setAttribute('style',hs);
		this._header_text_construction_management__text.innerHTML="Construction Management";
		this._header_text_construction_management.appendChild(this._header_text_construction_management__text);
		me._header_text_construction_management.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_construction_management.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_construction_management.ggCurrentLogicStateScaling = -1;
		this._header_text_construction_management.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_construction_management.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_construction_management.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_construction_management.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_construction_management.ggCurrentLogicStateScaling == 0) {
					me._header_text_construction_management.ggParameter.sx = 0;
					me._header_text_construction_management.ggParameter.sy = 0;
					me._header_text_construction_management.style[domTransform]=parameterToTransform(me._header_text_construction_management.ggParameter);
				}
				else {
					me._header_text_construction_management.ggParameter.sx = 1;
					me._header_text_construction_management.ggParameter.sy = 1;
					me._header_text_construction_management.style[domTransform]=parameterToTransform(me._header_text_construction_management.ggParameter);
				}
			}
		}
		this._header_text_construction_management.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_construction_management.ggUpdateConditionResize();
		}
		this._construction_management_content.appendChild(this._header_text_construction_management);
		this._video_construction_management=document.createElement('div');
		this._video_construction_management.seekbars = [];
		this._video_construction_management.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_construction_management.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_construction_management.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_construction_management.hasChildNodes()) {
				me._video_construction_management.removeChild(me._video_construction_management.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_construction_management.ggVideoNotLoaded = true;
				return;
			}
			me._video_construction_management.ggVideoNotLoaded = false;
			me._video_construction_management__vid=document.createElement('iframe');
			me._video_construction_management__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_construction_management__vid.setAttribute('src', ggVideoUrl);
			me._video_construction_management__vid.setAttribute('width', '100%');
			me._video_construction_management__vid.setAttribute('height', '100%');
			me._video_construction_management__vid.setAttribute('style', 'border:none; ');
			me._video_construction_management.appendChild(me._video_construction_management__vid);
			me._video_construction_management.ggVideoSource = media;
		}
		this._video_construction_management.ggId="Video - Construction Management";
		this._video_construction_management.ggLeft=-152;
		this._video_construction_management.ggTop=-418;
		this._video_construction_management.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_construction_management.ggVisible=false;
		this._video_construction_management.className='ggskin ggskin_video ';
		this._video_construction_management.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_construction_management.setAttribute('style',hs);
		this._video_construction_management.style[domTransform + 'Origin']='50% 50%';
		me._video_construction_management.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_construction_management.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_construction_management.ggCurrentLogicStatePosition = -1;
		me._video_construction_management.ggCurrentLogicStateSize = -1;
		this._video_construction_management.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_construction_management.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_construction_management.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_construction_management.style[domTransition]='left none, top none, width none, height none';
				if (me._video_construction_management.ggCurrentLogicStatePosition == 0) {
					me._video_construction_management.ggLeft=-19;
					me._video_construction_management.ggTop=-360;
					me._video_construction_management.ggUpdatePosition(true);
				}
				else {
					me._video_construction_management.ggLeft=-152;
					me._video_construction_management.ggTop=-418;
					me._video_construction_management.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_construction_management.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_construction_management.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_construction_management.style[domTransition]='left none, top none, width none, height none';
				if (me._video_construction_management.ggCurrentLogicStateSize == 0) {
					me._video_construction_management.style.width='256px';
					me._video_construction_management.style.height='144px';
					me.updateSize(me._video_construction_management);
				}
				else {
					me._video_construction_management.style.width='522px';
					me._video_construction_management.style.height='294px';
					me.updateSize(me._video_construction_management);
				}
			}
		}
		this._video_construction_management.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_construction_management.ggUpdateConditionResize();
		}
		this._construction_management_content.appendChild(this._video_construction_management);
		this._button_image_construction_management=document.createElement('div');
		this._button_image_construction_management__img=document.createElement('img');
		this._button_image_construction_management__img.className='ggskin ggskin_button';
		this._button_image_construction_management__img.setAttribute('src',basePath + 'images/button_image_construction_management.png');
		this._button_image_construction_management__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_construction_management__img.className='ggskin ggskin_button';
		this._button_image_construction_management__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_image_construction_management__img);
		this._button_image_construction_management.appendChild(this._button_image_construction_management__img);
		this._button_image_construction_management.ggId="Button image - Construction Management";
		this._button_image_construction_management.ggLeft=261;
		this._button_image_construction_management.ggTop=-102;
		this._button_image_construction_management.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_construction_management.ggVisible=false;
		this._button_image_construction_management.className='ggskin ggskin_button ';
		this._button_image_construction_management.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		this._button_image_construction_management.setAttribute('style',hs);
		this._button_image_construction_management.style[domTransform + 'Origin']='50% 50%';
		me._button_image_construction_management.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_construction_management.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_construction_management.onclick=function (e) {
			me.player.openUrl("https:\/\/careers.fbcareers.com\/careers\/JobDetail?id=5382","");
		}
		this._button_image_construction_management.onmouseover=function (e) {
			me._button_image_construction_management__img.src=basePath + 'images/button_image_construction_management__o.png';
		}
		this._button_image_construction_management.onmouseout=function (e) {
			me._button_image_construction_management__img.src=basePath + 'images/button_image_construction_management.png';
		}
		me._button_image_construction_management.ggCurrentLogicStatePosition = -1;
		me._button_image_construction_management.ggCurrentLogicStateSize = -1;
		this._button_image_construction_management.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_image_construction_management.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_image_construction_management.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_image_construction_management.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_construction_management.ggCurrentLogicStatePosition == 0) {
					me._button_image_construction_management.ggLeft=34;
					me._button_image_construction_management.ggTop=-201;
					me._button_image_construction_management.ggUpdatePosition(true);
				}
				else {
					me._button_image_construction_management.ggLeft=261;
					me._button_image_construction_management.ggTop=-102;
					me._button_image_construction_management.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_image_construction_management.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_image_construction_management.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_image_construction_management.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_construction_management.ggCurrentLogicStateSize == 0) {
					me._button_image_construction_management.style.width='150px';
					me._button_image_construction_management.style.height='34px';
					me.updateSize(me._button_image_construction_management);
				}
				else {
					me._button_image_construction_management.style.width='109px';
					me._button_image_construction_management.style.height='24px';
					me.updateSize(me._button_image_construction_management);
				}
			}
		}
		this._button_image_construction_management.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_construction_management.ggUpdateConditionResize();
		}
		this._construction_management_content.appendChild(this._button_image_construction_management);
		this.divSkin.appendChild(this._construction_management_content);
		this._construction_information_content=document.createElement('div');
		this._construction_information_content.ggId="Construction Information content";
		this._construction_information_content.ggLeft=-414;
		this._construction_information_content.ggTop=211;
		this._construction_information_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._construction_information_content.ggVisible=true;
		this._construction_information_content.className='ggskin ggskin_container ';
		this._construction_information_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -414px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._construction_information_content.setAttribute('style',hs);
		this._construction_information_content.style[domTransform + 'Origin']='50% 50%';
		me._construction_information_content.ggIsActive=function() {
			return false;
		}
		me._construction_information_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._construction_information_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_construction_information=document.createElement('div');
		this._box_construction_information.ggId="Box - Construction Information";
		this._box_construction_information.ggLeft=-161;
		this._box_construction_information.ggTop=-441;
		this._box_construction_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_construction_information.ggVisible=false;
		this._box_construction_information.className='ggskin ggskin_rectangle ';
		this._box_construction_information.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -161px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_construction_information.setAttribute('style',hs);
		this._box_construction_information.style[domTransform + 'Origin']='50% 50%';
		me._box_construction_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_construction_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_construction_information.ggCurrentLogicStatePosition = -1;
		me._box_construction_information.ggCurrentLogicStateSize = -1;
		this._box_construction_information.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_construction_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_construction_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_construction_information.style[domTransition]='left none, top none, width none, height none';
				if (me._box_construction_information.ggCurrentLogicStatePosition == 0) {
					me._box_construction_information.ggLeft=-28;
					me._box_construction_information.ggTop=-390;
					me._box_construction_information.ggUpdatePosition(true);
				}
				else {
					me._box_construction_information.ggLeft=-161;
					me._box_construction_information.ggTop=-441;
					me._box_construction_information.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_construction_information.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_construction_information.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_construction_information.style[domTransition]='left none, top none, width none, height none';
				if (me._box_construction_information.ggCurrentLogicStateSize == 0) {
					me._box_construction_information.style.width='276px';
					me._box_construction_information.style.height='204px';
					me.updateSize(me._box_construction_information);
				}
				else {
					me._box_construction_information.style.width='542px';
					me._box_construction_information.style.height='450px';
					me.updateSize(me._box_construction_information);
				}
			}
		}
		this._box_construction_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_construction_information.ggUpdateConditionResize();
		}
		this._construction_information_content.appendChild(this._box_construction_information);
		this._body_text_construction_information=document.createElement('div');
		this._body_text_construction_information__text=document.createElement('div');
		this._body_text_construction_information.className='ggskin ggskin_textdiv';
		this._body_text_construction_information.ggTextDiv=this._body_text_construction_information__text;
		this._body_text_construction_information.ggId="body_text - Construction Information";
		this._body_text_construction_information.ggLeft=-151;
		this._body_text_construction_information.ggTop=-103;
		this._body_text_construction_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_construction_information.ggVisible=false;
		this._body_text_construction_information.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_construction_information.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -151px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 520px;';
		hs+='pointer-events:auto;';
		this._body_text_construction_information.setAttribute('style',hs);
		this._body_text_construction_information.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 520px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_construction_information__text.setAttribute('style',hs);
		this._body_text_construction_information__text.innerHTML="Fletcher Building is an integrated manufacturer and distributor of world-leading building and construction products and services. Every day, we are building the lives, communities and futures our customers want. Take a 360\xb0 tour of one of our Auckland building sites and imagine joining a skilled, passionate and motivated team of more than 20,000 amazing people.";
		this._body_text_construction_information.appendChild(this._body_text_construction_information__text);
		me._body_text_construction_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_construction_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_construction_information.ggCurrentLogicStateScaling = -1;
		this._body_text_construction_information.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_construction_information.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_construction_information.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_construction_information.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_construction_information.ggCurrentLogicStateScaling == 0) {
					me._body_text_construction_information.ggParameter.sx = 0;
					me._body_text_construction_information.ggParameter.sy = 0;
					me._body_text_construction_information.style[domTransform]=parameterToTransform(me._body_text_construction_information.ggParameter);
				}
				else {
					me._body_text_construction_information.ggParameter.sx = 1;
					me._body_text_construction_information.ggParameter.sy = 1;
					me._body_text_construction_information.style[domTransform]=parameterToTransform(me._body_text_construction_information.ggParameter);
				}
			}
		}
		this._body_text_construction_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_construction_information.ggUpdateConditionResize();
		}
		this._construction_information_content.appendChild(this._body_text_construction_information);
		this._header_text_construction_information=document.createElement('div');
		this._header_text_construction_information__text=document.createElement('div');
		this._header_text_construction_information.className='ggskin ggskin_textdiv';
		this._header_text_construction_information.ggTextDiv=this._header_text_construction_information__text;
		this._header_text_construction_information.ggId="header_text - Construction Information";
		this._header_text_construction_information.ggLeft=-151;
		this._header_text_construction_information.ggTop=-121;
		this._header_text_construction_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_construction_information.ggVisible=false;
		this._header_text_construction_information.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_construction_information.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -151px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_construction_information.setAttribute('style',hs);
		this._header_text_construction_information.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_construction_information__text.setAttribute('style',hs);
		this._header_text_construction_information__text.innerHTML="Welcome to Fletcher Construction";
		this._header_text_construction_information.appendChild(this._header_text_construction_information__text);
		me._header_text_construction_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_construction_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_construction_information.ggCurrentLogicStateScaling = -1;
		this._header_text_construction_information.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_construction_information.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_construction_information.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_construction_information.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_construction_information.ggCurrentLogicStateScaling == 0) {
					me._header_text_construction_information.ggParameter.sx = 0;
					me._header_text_construction_information.ggParameter.sy = 0;
					me._header_text_construction_information.style[domTransform]=parameterToTransform(me._header_text_construction_information.ggParameter);
				}
				else {
					me._header_text_construction_information.ggParameter.sx = 1;
					me._header_text_construction_information.ggParameter.sy = 1;
					me._header_text_construction_information.style[domTransform]=parameterToTransform(me._header_text_construction_information.ggParameter);
				}
			}
		}
		this._header_text_construction_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_construction_information.ggUpdateConditionResize();
		}
		this._construction_information_content.appendChild(this._header_text_construction_information);
		this._video_construction_information=document.createElement('div');
		this._video_construction_information.seekbars = [];
		this._video_construction_information.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_construction_information.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_construction_information.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_construction_information.hasChildNodes()) {
				me._video_construction_information.removeChild(me._video_construction_information.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_construction_information.ggVideoNotLoaded = true;
				return;
			}
			me._video_construction_information.ggVideoNotLoaded = false;
			me._video_construction_information__vid=document.createElement('iframe');
			me._video_construction_information__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_construction_information__vid.setAttribute('src', ggVideoUrl);
			me._video_construction_information__vid.setAttribute('width', '100%');
			me._video_construction_information__vid.setAttribute('height', '100%');
			me._video_construction_information__vid.setAttribute('style', 'border:none; ');
			me._video_construction_information.appendChild(me._video_construction_information__vid);
			me._video_construction_information.ggVideoSource = media;
		}
		this._video_construction_information.ggId="Video - Construction Information";
		this._video_construction_information.ggLeft=-151;
		this._video_construction_information.ggTop=-418;
		this._video_construction_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_construction_information.ggVisible=false;
		this._video_construction_information.className='ggskin ggskin_video ';
		this._video_construction_information.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -151px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_construction_information.setAttribute('style',hs);
		this._video_construction_information.style[domTransform + 'Origin']='50% 50%';
		me._video_construction_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_construction_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_construction_information.ggCurrentLogicStatePosition = -1;
		me._video_construction_information.ggCurrentLogicStateSize = -1;
		this._video_construction_information.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_construction_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_construction_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_construction_information.style[domTransition]='left none, top none, width none, height none';
				if (me._video_construction_information.ggCurrentLogicStatePosition == 0) {
					me._video_construction_information.ggLeft=-18;
					me._video_construction_information.ggTop=-360;
					me._video_construction_information.ggUpdatePosition(true);
				}
				else {
					me._video_construction_information.ggLeft=-151;
					me._video_construction_information.ggTop=-418;
					me._video_construction_information.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_construction_information.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_construction_information.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_construction_information.style[domTransition]='left none, top none, width none, height none';
				if (me._video_construction_information.ggCurrentLogicStateSize == 0) {
					me._video_construction_information.style.width='256px';
					me._video_construction_information.style.height='144px';
					me.updateSize(me._video_construction_information);
				}
				else {
					me._video_construction_information.style.width='522px';
					me._video_construction_information.style.height='294px';
					me.updateSize(me._video_construction_information);
				}
			}
		}
		this._video_construction_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_construction_information.ggUpdateConditionResize();
		}
		this._construction_information_content.appendChild(this._video_construction_information);
		this.divSkin.appendChild(this._construction_information_content);
		this._human_resources_content=document.createElement('div');
		this._human_resources_content.ggId="Human Resources content";
		this._human_resources_content.ggLeft=-413;
		this._human_resources_content.ggTop=211;
		this._human_resources_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._human_resources_content.ggVisible=true;
		this._human_resources_content.className='ggskin ggskin_container ';
		this._human_resources_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -413px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._human_resources_content.setAttribute('style',hs);
		this._human_resources_content.style[domTransform + 'Origin']='50% 50%';
		me._human_resources_content.ggIsActive=function() {
			return false;
		}
		me._human_resources_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._human_resources_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_human_resources=document.createElement('div');
		this._box_human_resources.ggId="Box - Human Resources";
		this._box_human_resources.ggLeft=-162;
		this._box_human_resources.ggTop=-441;
		this._box_human_resources.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_human_resources.ggVisible=false;
		this._box_human_resources.className='ggskin ggskin_rectangle ';
		this._box_human_resources.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_human_resources.setAttribute('style',hs);
		this._box_human_resources.style[domTransform + 'Origin']='50% 50%';
		me._box_human_resources.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_human_resources.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_human_resources.ggCurrentLogicStatePosition = -1;
		me._box_human_resources.ggCurrentLogicStateSize = -1;
		this._box_human_resources.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_human_resources.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_human_resources.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_human_resources.style[domTransition]='left none, top none, width none, height none';
				if (me._box_human_resources.ggCurrentLogicStatePosition == 0) {
					me._box_human_resources.ggLeft=-29;
					me._box_human_resources.ggTop=-390;
					me._box_human_resources.ggUpdatePosition(true);
				}
				else {
					me._box_human_resources.ggLeft=-162;
					me._box_human_resources.ggTop=-441;
					me._box_human_resources.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_human_resources.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_human_resources.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_human_resources.style[domTransition]='left none, top none, width none, height none';
				if (me._box_human_resources.ggCurrentLogicStateSize == 0) {
					me._box_human_resources.style.width='276px';
					me._box_human_resources.style.height='238px';
					me.updateSize(me._box_human_resources);
				}
				else {
					me._box_human_resources.style.width='542px';
					me._box_human_resources.style.height='450px';
					me.updateSize(me._box_human_resources);
				}
			}
		}
		this._box_human_resources.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_human_resources.ggUpdateConditionResize();
		}
		this._human_resources_content.appendChild(this._box_human_resources);
		this._body_text_human_resources=document.createElement('div');
		this._body_text_human_resources__text=document.createElement('div');
		this._body_text_human_resources.className='ggskin ggskin_textdiv';
		this._body_text_human_resources.ggTextDiv=this._body_text_human_resources__text;
		this._body_text_human_resources.ggId="body_text - Human Resources";
		this._body_text_human_resources.ggLeft=-152;
		this._body_text_human_resources.ggTop=-103;
		this._body_text_human_resources.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_human_resources.ggVisible=false;
		this._body_text_human_resources.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_human_resources.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		this._body_text_human_resources.setAttribute('style',hs);
		this._body_text_human_resources.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 411px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_human_resources__text.setAttribute('style',hs);
		this._body_text_human_resources__text.innerHTML="As a Human Resources Graduate you will build the foundations of your future career. You will gain exposure to multiple areas of our global business where you will be supported by a mentor and a network of graduates across the industry, we\u2019re setting you up for success \u2013 make your future.";
		this._body_text_human_resources.appendChild(this._body_text_human_resources__text);
		me._body_text_human_resources.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_human_resources.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_human_resources.ggCurrentLogicStateScaling = -1;
		this._body_text_human_resources.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_human_resources.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_human_resources.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_human_resources.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_human_resources.ggCurrentLogicStateScaling == 0) {
					me._body_text_human_resources.ggParameter.sx = 0;
					me._body_text_human_resources.ggParameter.sy = 0;
					me._body_text_human_resources.style[domTransform]=parameterToTransform(me._body_text_human_resources.ggParameter);
				}
				else {
					me._body_text_human_resources.ggParameter.sx = 1;
					me._body_text_human_resources.ggParameter.sy = 1;
					me._body_text_human_resources.style[domTransform]=parameterToTransform(me._body_text_human_resources.ggParameter);
				}
			}
		}
		this._body_text_human_resources.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_human_resources.ggUpdateConditionResize();
		}
		this._human_resources_content.appendChild(this._body_text_human_resources);
		this._header_text_human_resources=document.createElement('div');
		this._header_text_human_resources__text=document.createElement('div');
		this._header_text_human_resources.className='ggskin ggskin_textdiv';
		this._header_text_human_resources.ggTextDiv=this._header_text_human_resources__text;
		this._header_text_human_resources.ggId="header_text - Human Resources";
		this._header_text_human_resources.ggLeft=-152;
		this._header_text_human_resources.ggTop=-121;
		this._header_text_human_resources.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_human_resources.ggVisible=false;
		this._header_text_human_resources.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_human_resources.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_human_resources.setAttribute('style',hs);
		this._header_text_human_resources.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_human_resources__text.setAttribute('style',hs);
		this._header_text_human_resources__text.innerHTML="Human Resources";
		this._header_text_human_resources.appendChild(this._header_text_human_resources__text);
		me._header_text_human_resources.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_human_resources.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_human_resources.ggCurrentLogicStateScaling = -1;
		this._header_text_human_resources.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_human_resources.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_human_resources.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_human_resources.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_human_resources.ggCurrentLogicStateScaling == 0) {
					me._header_text_human_resources.ggParameter.sx = 0;
					me._header_text_human_resources.ggParameter.sy = 0;
					me._header_text_human_resources.style[domTransform]=parameterToTransform(me._header_text_human_resources.ggParameter);
				}
				else {
					me._header_text_human_resources.ggParameter.sx = 1;
					me._header_text_human_resources.ggParameter.sy = 1;
					me._header_text_human_resources.style[domTransform]=parameterToTransform(me._header_text_human_resources.ggParameter);
				}
			}
		}
		this._header_text_human_resources.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_human_resources.ggUpdateConditionResize();
		}
		this._human_resources_content.appendChild(this._header_text_human_resources);
		this._video_human_resources=document.createElement('div');
		this._video_human_resources.seekbars = [];
		this._video_human_resources.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_human_resources.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_human_resources.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_human_resources.hasChildNodes()) {
				me._video_human_resources.removeChild(me._video_human_resources.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_human_resources.ggVideoNotLoaded = true;
				return;
			}
			me._video_human_resources.ggVideoNotLoaded = false;
			me._video_human_resources__vid=document.createElement('iframe');
			me._video_human_resources__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_human_resources__vid.setAttribute('src', ggVideoUrl);
			me._video_human_resources__vid.setAttribute('width', '100%');
			me._video_human_resources__vid.setAttribute('height', '100%');
			me._video_human_resources__vid.setAttribute('style', 'border:none; ');
			me._video_human_resources.appendChild(me._video_human_resources__vid);
			me._video_human_resources.ggVideoSource = media;
		}
		this._video_human_resources.ggId="Video - Human Resources";
		this._video_human_resources.ggLeft=-152;
		this._video_human_resources.ggTop=-418;
		this._video_human_resources.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_human_resources.ggVisible=false;
		this._video_human_resources.className='ggskin ggskin_video ';
		this._video_human_resources.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_human_resources.setAttribute('style',hs);
		this._video_human_resources.style[domTransform + 'Origin']='50% 50%';
		me._video_human_resources.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_human_resources.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_human_resources.ggCurrentLogicStatePosition = -1;
		me._video_human_resources.ggCurrentLogicStateSize = -1;
		this._video_human_resources.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_human_resources.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_human_resources.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_human_resources.style[domTransition]='left none, top none, width none, height none';
				if (me._video_human_resources.ggCurrentLogicStatePosition == 0) {
					me._video_human_resources.ggLeft=-19;
					me._video_human_resources.ggTop=-360;
					me._video_human_resources.ggUpdatePosition(true);
				}
				else {
					me._video_human_resources.ggLeft=-152;
					me._video_human_resources.ggTop=-418;
					me._video_human_resources.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_human_resources.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_human_resources.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_human_resources.style[domTransition]='left none, top none, width none, height none';
				if (me._video_human_resources.ggCurrentLogicStateSize == 0) {
					me._video_human_resources.style.width='256px';
					me._video_human_resources.style.height='144px';
					me.updateSize(me._video_human_resources);
				}
				else {
					me._video_human_resources.style.width='522px';
					me._video_human_resources.style.height='294px';
					me.updateSize(me._video_human_resources);
				}
			}
		}
		this._video_human_resources.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_human_resources.ggUpdateConditionResize();
		}
		this._human_resources_content.appendChild(this._video_human_resources);
		this._button_image_human_resources=document.createElement('div');
		this._button_image_human_resources__img=document.createElement('img');
		this._button_image_human_resources__img.className='ggskin ggskin_button';
		this._button_image_human_resources__img.setAttribute('src',basePath + 'images/button_image_human_resources.png');
		this._button_image_human_resources__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_human_resources__img.className='ggskin ggskin_button';
		this._button_image_human_resources__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_image_human_resources__img);
		this._button_image_human_resources.appendChild(this._button_image_human_resources__img);
		this._button_image_human_resources.ggId="Button image - Human Resources";
		this._button_image_human_resources.ggLeft=261;
		this._button_image_human_resources.ggTop=-102;
		this._button_image_human_resources.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_human_resources.ggVisible=false;
		this._button_image_human_resources.className='ggskin ggskin_button ';
		this._button_image_human_resources.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		this._button_image_human_resources.setAttribute('style',hs);
		this._button_image_human_resources.style[domTransform + 'Origin']='50% 50%';
		me._button_image_human_resources.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_human_resources.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_human_resources.onclick=function (e) {
			me.player.openUrl("https:\/\/careers.fbcareers.com\/careers\/JobDetail?id=5378","");
		}
		this._button_image_human_resources.onmouseover=function (e) {
			me._button_image_human_resources__img.src=basePath + 'images/button_image_human_resources__o.png';
		}
		this._button_image_human_resources.onmouseout=function (e) {
			me._button_image_human_resources__img.src=basePath + 'images/button_image_human_resources.png';
		}
		me._button_image_human_resources.ggCurrentLogicStatePosition = -1;
		me._button_image_human_resources.ggCurrentLogicStateSize = -1;
		this._button_image_human_resources.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_image_human_resources.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_image_human_resources.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_image_human_resources.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_human_resources.ggCurrentLogicStatePosition == 0) {
					me._button_image_human_resources.ggLeft=34;
					me._button_image_human_resources.ggTop=-201;
					me._button_image_human_resources.ggUpdatePosition(true);
				}
				else {
					me._button_image_human_resources.ggLeft=261;
					me._button_image_human_resources.ggTop=-102;
					me._button_image_human_resources.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_image_human_resources.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_image_human_resources.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_image_human_resources.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_human_resources.ggCurrentLogicStateSize == 0) {
					me._button_image_human_resources.style.width='150px';
					me._button_image_human_resources.style.height='34px';
					me.updateSize(me._button_image_human_resources);
				}
				else {
					me._button_image_human_resources.style.width='109px';
					me._button_image_human_resources.style.height='24px';
					me.updateSize(me._button_image_human_resources);
				}
			}
		}
		this._button_image_human_resources.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_human_resources.ggUpdateConditionResize();
		}
		this._human_resources_content.appendChild(this._button_image_human_resources);
		this.divSkin.appendChild(this._human_resources_content);
		this._information_technology_content=document.createElement('div');
		this._information_technology_content.ggId="Information Technology content";
		this._information_technology_content.ggLeft=-413;
		this._information_technology_content.ggTop=211;
		this._information_technology_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information_technology_content.ggVisible=true;
		this._information_technology_content.className='ggskin ggskin_container ';
		this._information_technology_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -413px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._information_technology_content.setAttribute('style',hs);
		this._information_technology_content.style[domTransform + 'Origin']='50% 50%';
		me._information_technology_content.ggIsActive=function() {
			return false;
		}
		me._information_technology_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information_technology_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_information_technology=document.createElement('div');
		this._box_information_technology.ggId="Box - Information Technology";
		this._box_information_technology.ggLeft=-162;
		this._box_information_technology.ggTop=-441;
		this._box_information_technology.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_information_technology.ggVisible=false;
		this._box_information_technology.className='ggskin ggskin_rectangle ';
		this._box_information_technology.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_information_technology.setAttribute('style',hs);
		this._box_information_technology.style[domTransform + 'Origin']='50% 50%';
		me._box_information_technology.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_information_technology.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_information_technology.ggCurrentLogicStatePosition = -1;
		me._box_information_technology.ggCurrentLogicStateSize = -1;
		this._box_information_technology.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_information_technology.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_information_technology.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_information_technology.style[domTransition]='left none, top none, width none, height none';
				if (me._box_information_technology.ggCurrentLogicStatePosition == 0) {
					me._box_information_technology.ggLeft=-29;
					me._box_information_technology.ggTop=-390;
					me._box_information_technology.ggUpdatePosition(true);
				}
				else {
					me._box_information_technology.ggLeft=-162;
					me._box_information_technology.ggTop=-441;
					me._box_information_technology.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_information_technology.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_information_technology.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_information_technology.style[domTransition]='left none, top none, width none, height none';
				if (me._box_information_technology.ggCurrentLogicStateSize == 0) {
					me._box_information_technology.style.width='276px';
					me._box_information_technology.style.height='238px';
					me.updateSize(me._box_information_technology);
				}
				else {
					me._box_information_technology.style.width='542px';
					me._box_information_technology.style.height='450px';
					me.updateSize(me._box_information_technology);
				}
			}
		}
		this._box_information_technology.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_information_technology.ggUpdateConditionResize();
		}
		this._information_technology_content.appendChild(this._box_information_technology);
		this._body_text_information_technology=document.createElement('div');
		this._body_text_information_technology__text=document.createElement('div');
		this._body_text_information_technology.className='ggskin ggskin_textdiv';
		this._body_text_information_technology.ggTextDiv=this._body_text_information_technology__text;
		this._body_text_information_technology.ggId="body_text - Information Technology";
		this._body_text_information_technology.ggLeft=-152;
		this._body_text_information_technology.ggTop=-103;
		this._body_text_information_technology.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_information_technology.ggVisible=false;
		this._body_text_information_technology.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_information_technology.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		this._body_text_information_technology.setAttribute('style',hs);
		this._body_text_information_technology.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 411px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_information_technology__text.setAttribute('style',hs);
		this._body_text_information_technology__text.innerHTML="As an Information Technology Graduate you will have a focus on professional development, you will learn about Fletcher Building, develop your commercial acumen, focus on how to be productive, and how to personally develop yourself and your career. We\u2019re setting you up for success \u2013 make your future.";
		this._body_text_information_technology.appendChild(this._body_text_information_technology__text);
		me._body_text_information_technology.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_information_technology.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_information_technology.ggCurrentLogicStateScaling = -1;
		this._body_text_information_technology.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_information_technology.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_information_technology.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_information_technology.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_information_technology.ggCurrentLogicStateScaling == 0) {
					me._body_text_information_technology.ggParameter.sx = 0;
					me._body_text_information_technology.ggParameter.sy = 0;
					me._body_text_information_technology.style[domTransform]=parameterToTransform(me._body_text_information_technology.ggParameter);
				}
				else {
					me._body_text_information_technology.ggParameter.sx = 1;
					me._body_text_information_technology.ggParameter.sy = 1;
					me._body_text_information_technology.style[domTransform]=parameterToTransform(me._body_text_information_technology.ggParameter);
				}
			}
		}
		this._body_text_information_technology.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_information_technology.ggUpdateConditionResize();
		}
		this._information_technology_content.appendChild(this._body_text_information_technology);
		this._header_text_information_technology=document.createElement('div');
		this._header_text_information_technology__text=document.createElement('div');
		this._header_text_information_technology.className='ggskin ggskin_textdiv';
		this._header_text_information_technology.ggTextDiv=this._header_text_information_technology__text;
		this._header_text_information_technology.ggId="header_text - Information Technology";
		this._header_text_information_technology.ggLeft=-152;
		this._header_text_information_technology.ggTop=-121;
		this._header_text_information_technology.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_information_technology.ggVisible=false;
		this._header_text_information_technology.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_information_technology.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_information_technology.setAttribute('style',hs);
		this._header_text_information_technology.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_information_technology__text.setAttribute('style',hs);
		this._header_text_information_technology__text.innerHTML="Information Technology";
		this._header_text_information_technology.appendChild(this._header_text_information_technology__text);
		me._header_text_information_technology.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_information_technology.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_information_technology.ggCurrentLogicStateScaling = -1;
		this._header_text_information_technology.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_information_technology.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_information_technology.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_information_technology.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_information_technology.ggCurrentLogicStateScaling == 0) {
					me._header_text_information_technology.ggParameter.sx = 0;
					me._header_text_information_technology.ggParameter.sy = 0;
					me._header_text_information_technology.style[domTransform]=parameterToTransform(me._header_text_information_technology.ggParameter);
				}
				else {
					me._header_text_information_technology.ggParameter.sx = 1;
					me._header_text_information_technology.ggParameter.sy = 1;
					me._header_text_information_technology.style[domTransform]=parameterToTransform(me._header_text_information_technology.ggParameter);
				}
			}
		}
		this._header_text_information_technology.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_information_technology.ggUpdateConditionResize();
		}
		this._information_technology_content.appendChild(this._header_text_information_technology);
		this._video_information_technology=document.createElement('div');
		this._video_information_technology.seekbars = [];
		this._video_information_technology.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_information_technology.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_information_technology.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_information_technology.hasChildNodes()) {
				me._video_information_technology.removeChild(me._video_information_technology.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_information_technology.ggVideoNotLoaded = true;
				return;
			}
			me._video_information_technology.ggVideoNotLoaded = false;
			me._video_information_technology__vid=document.createElement('iframe');
			me._video_information_technology__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_information_technology__vid.setAttribute('src', ggVideoUrl);
			me._video_information_technology__vid.setAttribute('width', '100%');
			me._video_information_technology__vid.setAttribute('height', '100%');
			me._video_information_technology__vid.setAttribute('style', 'border:none; ');
			me._video_information_technology.appendChild(me._video_information_technology__vid);
			me._video_information_technology.ggVideoSource = media;
		}
		this._video_information_technology.ggId="Video - Information Technology";
		this._video_information_technology.ggLeft=-152;
		this._video_information_technology.ggTop=-418;
		this._video_information_technology.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_information_technology.ggVisible=false;
		this._video_information_technology.className='ggskin ggskin_video ';
		this._video_information_technology.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_information_technology.setAttribute('style',hs);
		this._video_information_technology.style[domTransform + 'Origin']='50% 50%';
		me._video_information_technology.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_information_technology.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_information_technology.ggCurrentLogicStatePosition = -1;
		me._video_information_technology.ggCurrentLogicStateSize = -1;
		this._video_information_technology.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_information_technology.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_information_technology.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_information_technology.style[domTransition]='left none, top none, width none, height none';
				if (me._video_information_technology.ggCurrentLogicStatePosition == 0) {
					me._video_information_technology.ggLeft=-19;
					me._video_information_technology.ggTop=-360;
					me._video_information_technology.ggUpdatePosition(true);
				}
				else {
					me._video_information_technology.ggLeft=-152;
					me._video_information_technology.ggTop=-418;
					me._video_information_technology.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_information_technology.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_information_technology.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_information_technology.style[domTransition]='left none, top none, width none, height none';
				if (me._video_information_technology.ggCurrentLogicStateSize == 0) {
					me._video_information_technology.style.width='256px';
					me._video_information_technology.style.height='144px';
					me.updateSize(me._video_information_technology);
				}
				else {
					me._video_information_technology.style.width='522px';
					me._video_information_technology.style.height='294px';
					me.updateSize(me._video_information_technology);
				}
			}
		}
		this._video_information_technology.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_information_technology.ggUpdateConditionResize();
		}
		this._information_technology_content.appendChild(this._video_information_technology);
		this._button_image_information_technology=document.createElement('div');
		this._button_image_information_technology__img=document.createElement('img');
		this._button_image_information_technology__img.className='ggskin ggskin_button';
		this._button_image_information_technology__img.setAttribute('src',basePath + 'images/button_image_information_technology.png');
		this._button_image_information_technology__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_information_technology__img.className='ggskin ggskin_button';
		this._button_image_information_technology__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_image_information_technology__img);
		this._button_image_information_technology.appendChild(this._button_image_information_technology__img);
		this._button_image_information_technology.ggId="Button image - Information Technology";
		this._button_image_information_technology.ggLeft=261;
		this._button_image_information_technology.ggTop=-102;
		this._button_image_information_technology.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_information_technology.ggVisible=false;
		this._button_image_information_technology.className='ggskin ggskin_button ';
		this._button_image_information_technology.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		this._button_image_information_technology.setAttribute('style',hs);
		this._button_image_information_technology.style[domTransform + 'Origin']='50% 50%';
		me._button_image_information_technology.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_information_technology.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_information_technology.onclick=function (e) {
			me.player.openUrl("https:\/\/careers.fbcareers.com\/careers\/JobDetail?id=5376<https:\/\/linkprotect.cudasvc.com\/url?a=https:\/\/careers.fbcareers.com\/careers\/JobDetail%3fid%3d5376&c=E,1,ctcdeT_au6ON1ECZwoaBbq7VeIne5j1XPrLMJr0ZBGacUyWhOjru5mvas2VS2Kv9HH-Oo5ojA3QYTu7UREkJtL30LhXO4jH6haoejbZuhlUskLUb&typo=1","");
		}
		this._button_image_information_technology.onmouseover=function (e) {
			me._button_image_information_technology__img.src=basePath + 'images/button_image_information_technology__o.png';
		}
		this._button_image_information_technology.onmouseout=function (e) {
			me._button_image_information_technology__img.src=basePath + 'images/button_image_information_technology.png';
		}
		me._button_image_information_technology.ggCurrentLogicStatePosition = -1;
		me._button_image_information_technology.ggCurrentLogicStateSize = -1;
		this._button_image_information_technology.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_image_information_technology.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_image_information_technology.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_image_information_technology.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_information_technology.ggCurrentLogicStatePosition == 0) {
					me._button_image_information_technology.ggLeft=34;
					me._button_image_information_technology.ggTop=-201;
					me._button_image_information_technology.ggUpdatePosition(true);
				}
				else {
					me._button_image_information_technology.ggLeft=261;
					me._button_image_information_technology.ggTop=-102;
					me._button_image_information_technology.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_image_information_technology.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_image_information_technology.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_image_information_technology.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_information_technology.ggCurrentLogicStateSize == 0) {
					me._button_image_information_technology.style.width='150px';
					me._button_image_information_technology.style.height='34px';
					me.updateSize(me._button_image_information_technology);
				}
				else {
					me._button_image_information_technology.style.width='109px';
					me._button_image_information_technology.style.height='24px';
					me.updateSize(me._button_image_information_technology);
				}
			}
		}
		this._button_image_information_technology.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_information_technology.ggUpdateConditionResize();
		}
		this._information_technology_content.appendChild(this._button_image_information_technology);
		this.divSkin.appendChild(this._information_technology_content);
		this._marketing_content=document.createElement('div');
		this._marketing_content.ggId="Marketing content";
		this._marketing_content.ggLeft=-413;
		this._marketing_content.ggTop=211;
		this._marketing_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marketing_content.ggVisible=true;
		this._marketing_content.className='ggskin ggskin_container ';
		this._marketing_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -413px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._marketing_content.setAttribute('style',hs);
		this._marketing_content.style[domTransform + 'Origin']='50% 50%';
		me._marketing_content.ggIsActive=function() {
			return false;
		}
		me._marketing_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._marketing_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_marketing=document.createElement('div');
		this._box_marketing.ggId="Box - Marketing";
		this._box_marketing.ggLeft=-162;
		this._box_marketing.ggTop=-441;
		this._box_marketing.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_marketing.ggVisible=false;
		this._box_marketing.className='ggskin ggskin_rectangle ';
		this._box_marketing.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_marketing.setAttribute('style',hs);
		this._box_marketing.style[domTransform + 'Origin']='50% 50%';
		me._box_marketing.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_marketing.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_marketing.ggCurrentLogicStatePosition = -1;
		me._box_marketing.ggCurrentLogicStateSize = -1;
		this._box_marketing.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_marketing.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_marketing.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_marketing.style[domTransition]='left none, top none, width none, height none';
				if (me._box_marketing.ggCurrentLogicStatePosition == 0) {
					me._box_marketing.ggLeft=-29;
					me._box_marketing.ggTop=-390;
					me._box_marketing.ggUpdatePosition(true);
				}
				else {
					me._box_marketing.ggLeft=-162;
					me._box_marketing.ggTop=-441;
					me._box_marketing.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_marketing.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_marketing.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_marketing.style[domTransition]='left none, top none, width none, height none';
				if (me._box_marketing.ggCurrentLogicStateSize == 0) {
					me._box_marketing.style.width='276px';
					me._box_marketing.style.height='238px';
					me.updateSize(me._box_marketing);
				}
				else {
					me._box_marketing.style.width='542px';
					me._box_marketing.style.height='450px';
					me.updateSize(me._box_marketing);
				}
			}
		}
		this._box_marketing.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_marketing.ggUpdateConditionResize();
		}
		this._marketing_content.appendChild(this._box_marketing);
		this._body_text_marketing=document.createElement('div');
		this._body_text_marketing__text=document.createElement('div');
		this._body_text_marketing.className='ggskin ggskin_textdiv';
		this._body_text_marketing.ggTextDiv=this._body_text_marketing__text;
		this._body_text_marketing.ggId="body_text - Marketing";
		this._body_text_marketing.ggLeft=-152;
		this._body_text_marketing.ggTop=-103;
		this._body_text_marketing.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_marketing.ggVisible=false;
		this._body_text_marketing.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_marketing.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		this._body_text_marketing.setAttribute('style',hs);
		this._body_text_marketing.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 411px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_marketing__text.setAttribute('style',hs);
		this._body_text_marketing__text.innerHTML="As a Marketing Graduate you will develop your commercial acumen, focus on how to be productive, and how to personally develop yourself and your career. Alongside this, you will of course gain technical and practical Marketing experience, with the support of a mentor on hand every step of the way. We\u2019re setting you up for success \u2013 make your future.";
		this._body_text_marketing.appendChild(this._body_text_marketing__text);
		me._body_text_marketing.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_marketing.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_marketing.ggCurrentLogicStateScaling = -1;
		this._body_text_marketing.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_marketing.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_marketing.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_marketing.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_marketing.ggCurrentLogicStateScaling == 0) {
					me._body_text_marketing.ggParameter.sx = 0;
					me._body_text_marketing.ggParameter.sy = 0;
					me._body_text_marketing.style[domTransform]=parameterToTransform(me._body_text_marketing.ggParameter);
				}
				else {
					me._body_text_marketing.ggParameter.sx = 1;
					me._body_text_marketing.ggParameter.sy = 1;
					me._body_text_marketing.style[domTransform]=parameterToTransform(me._body_text_marketing.ggParameter);
				}
			}
		}
		this._body_text_marketing.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_marketing.ggUpdateConditionResize();
		}
		this._marketing_content.appendChild(this._body_text_marketing);
		this._header_text_marketing=document.createElement('div');
		this._header_text_marketing__text=document.createElement('div');
		this._header_text_marketing.className='ggskin ggskin_textdiv';
		this._header_text_marketing.ggTextDiv=this._header_text_marketing__text;
		this._header_text_marketing.ggId="header_text - Marketing";
		this._header_text_marketing.ggLeft=-152;
		this._header_text_marketing.ggTop=-121;
		this._header_text_marketing.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_marketing.ggVisible=false;
		this._header_text_marketing.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_marketing.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_marketing.setAttribute('style',hs);
		this._header_text_marketing.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_marketing__text.setAttribute('style',hs);
		this._header_text_marketing__text.innerHTML="Marketing";
		this._header_text_marketing.appendChild(this._header_text_marketing__text);
		me._header_text_marketing.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_marketing.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_marketing.ggCurrentLogicStateScaling = -1;
		this._header_text_marketing.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_marketing.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_marketing.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_marketing.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_marketing.ggCurrentLogicStateScaling == 0) {
					me._header_text_marketing.ggParameter.sx = 0;
					me._header_text_marketing.ggParameter.sy = 0;
					me._header_text_marketing.style[domTransform]=parameterToTransform(me._header_text_marketing.ggParameter);
				}
				else {
					me._header_text_marketing.ggParameter.sx = 1;
					me._header_text_marketing.ggParameter.sy = 1;
					me._header_text_marketing.style[domTransform]=parameterToTransform(me._header_text_marketing.ggParameter);
				}
			}
		}
		this._header_text_marketing.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_marketing.ggUpdateConditionResize();
		}
		this._marketing_content.appendChild(this._header_text_marketing);
		this._video_marketing=document.createElement('div');
		this._video_marketing.seekbars = [];
		this._video_marketing.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_marketing.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_marketing.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_marketing.hasChildNodes()) {
				me._video_marketing.removeChild(me._video_marketing.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_marketing.ggVideoNotLoaded = true;
				return;
			}
			me._video_marketing.ggVideoNotLoaded = false;
			me._video_marketing__vid=document.createElement('iframe');
			me._video_marketing__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_marketing__vid.setAttribute('src', ggVideoUrl);
			me._video_marketing__vid.setAttribute('width', '100%');
			me._video_marketing__vid.setAttribute('height', '100%');
			me._video_marketing__vid.setAttribute('style', 'border:none; ');
			me._video_marketing.appendChild(me._video_marketing__vid);
			me._video_marketing.ggVideoSource = media;
		}
		this._video_marketing.ggId="Video - Marketing";
		this._video_marketing.ggLeft=-152;
		this._video_marketing.ggTop=-418;
		this._video_marketing.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_marketing.ggVisible=false;
		this._video_marketing.className='ggskin ggskin_video ';
		this._video_marketing.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_marketing.setAttribute('style',hs);
		this._video_marketing.style[domTransform + 'Origin']='50% 50%';
		me._video_marketing.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_marketing.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_marketing.ggCurrentLogicStatePosition = -1;
		me._video_marketing.ggCurrentLogicStateSize = -1;
		this._video_marketing.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_marketing.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_marketing.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_marketing.style[domTransition]='left none, top none, width none, height none';
				if (me._video_marketing.ggCurrentLogicStatePosition == 0) {
					me._video_marketing.ggLeft=-19;
					me._video_marketing.ggTop=-360;
					me._video_marketing.ggUpdatePosition(true);
				}
				else {
					me._video_marketing.ggLeft=-152;
					me._video_marketing.ggTop=-418;
					me._video_marketing.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_marketing.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_marketing.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_marketing.style[domTransition]='left none, top none, width none, height none';
				if (me._video_marketing.ggCurrentLogicStateSize == 0) {
					me._video_marketing.style.width='256px';
					me._video_marketing.style.height='144px';
					me.updateSize(me._video_marketing);
				}
				else {
					me._video_marketing.style.width='522px';
					me._video_marketing.style.height='294px';
					me.updateSize(me._video_marketing);
				}
			}
		}
		this._video_marketing.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_marketing.ggUpdateConditionResize();
		}
		this._marketing_content.appendChild(this._video_marketing);
		this._button_image_marketing=document.createElement('div');
		this._button_image_marketing__img=document.createElement('img');
		this._button_image_marketing__img.className='ggskin ggskin_button';
		this._button_image_marketing__img.setAttribute('src',basePath + 'images/button_image_marketing.png');
		this._button_image_marketing__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_marketing__img.className='ggskin ggskin_button';
		this._button_image_marketing__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_image_marketing__img);
		this._button_image_marketing.appendChild(this._button_image_marketing__img);
		this._button_image_marketing.ggId="Button image - Marketing";
		this._button_image_marketing.ggLeft=261;
		this._button_image_marketing.ggTop=-102;
		this._button_image_marketing.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_marketing.ggVisible=false;
		this._button_image_marketing.className='ggskin ggskin_button ';
		this._button_image_marketing.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		this._button_image_marketing.setAttribute('style',hs);
		this._button_image_marketing.style[domTransform + 'Origin']='50% 50%';
		me._button_image_marketing.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_marketing.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_marketing.onclick=function (e) {
			me.player.openUrl("https:\/\/careers.fbcareers.com\/careers\/JobDetail?id=5377<https:\/\/linkprotect.cudasvc.com\/url?a=https:\/\/careers.fbcareers.com\/careers\/JobDetail%3fid%3d5377&c=E,1,1EIVNsSstCAQgf3W-ux9XYfBEeS48vKVGiWicbhCNtXtxAEvPnOI6X_JHOa08956lManj5WXFygxeOotHZOAIyS_52ppt3TjGHGbo9_w_VwuN4qDvEbXoA,,&typo=1","");
		}
		this._button_image_marketing.onmouseover=function (e) {
			me._button_image_marketing__img.src=basePath + 'images/button_image_marketing__o.png';
		}
		this._button_image_marketing.onmouseout=function (e) {
			me._button_image_marketing__img.src=basePath + 'images/button_image_marketing.png';
		}
		me._button_image_marketing.ggCurrentLogicStatePosition = -1;
		me._button_image_marketing.ggCurrentLogicStateSize = -1;
		this._button_image_marketing.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_image_marketing.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_image_marketing.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_image_marketing.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_marketing.ggCurrentLogicStatePosition == 0) {
					me._button_image_marketing.ggLeft=34;
					me._button_image_marketing.ggTop=-201;
					me._button_image_marketing.ggUpdatePosition(true);
				}
				else {
					me._button_image_marketing.ggLeft=261;
					me._button_image_marketing.ggTop=-102;
					me._button_image_marketing.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_image_marketing.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_image_marketing.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_image_marketing.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_marketing.ggCurrentLogicStateSize == 0) {
					me._button_image_marketing.style.width='150px';
					me._button_image_marketing.style.height='34px';
					me.updateSize(me._button_image_marketing);
				}
				else {
					me._button_image_marketing.style.width='109px';
					me._button_image_marketing.style.height='24px';
					me.updateSize(me._button_image_marketing);
				}
			}
		}
		this._button_image_marketing.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_marketing.ggUpdateConditionResize();
		}
		this._marketing_content.appendChild(this._button_image_marketing);
		this.divSkin.appendChild(this._marketing_content);
		this._finance_content=document.createElement('div');
		this._finance_content.ggId="Finance content";
		this._finance_content.ggLeft=-413;
		this._finance_content.ggTop=211;
		this._finance_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._finance_content.ggVisible=true;
		this._finance_content.className='ggskin ggskin_container ';
		this._finance_content.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -413px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:none;';
		this._finance_content.setAttribute('style',hs);
		this._finance_content.style[domTransform + 'Origin']='50% 50%';
		me._finance_content.ggIsActive=function() {
			return false;
		}
		me._finance_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._finance_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_finance=document.createElement('div');
		this._box_finance.ggId="Box - Finance";
		this._box_finance.ggLeft=-162;
		this._box_finance.ggTop=-441;
		this._box_finance.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_finance.ggVisible=false;
		this._box_finance.className='ggskin ggskin_rectangle ';
		this._box_finance.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -441px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_finance.setAttribute('style',hs);
		this._box_finance.style[domTransform + 'Origin']='50% 50%';
		me._box_finance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_finance.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_finance.ggCurrentLogicStatePosition = -1;
		me._box_finance.ggCurrentLogicStateSize = -1;
		this._box_finance.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_finance.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_finance.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_finance.style[domTransition]='left none, top none, width none, height none';
				if (me._box_finance.ggCurrentLogicStatePosition == 0) {
					me._box_finance.ggLeft=-29;
					me._box_finance.ggTop=-390;
					me._box_finance.ggUpdatePosition(true);
				}
				else {
					me._box_finance.ggLeft=-162;
					me._box_finance.ggTop=-441;
					me._box_finance.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_finance.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_finance.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_finance.style[domTransition]='left none, top none, width none, height none';
				if (me._box_finance.ggCurrentLogicStateSize == 0) {
					me._box_finance.style.width='276px';
					me._box_finance.style.height='238px';
					me.updateSize(me._box_finance);
				}
				else {
					me._box_finance.style.width='542px';
					me._box_finance.style.height='450px';
					me.updateSize(me._box_finance);
				}
			}
		}
		this._box_finance.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_finance.ggUpdateConditionResize();
		}
		this._finance_content.appendChild(this._box_finance);
		this._body_text_finance=document.createElement('div');
		this._body_text_finance__text=document.createElement('div');
		this._body_text_finance.className='ggskin ggskin_textdiv';
		this._body_text_finance.ggTextDiv=this._body_text_finance__text;
		this._body_text_finance.ggId="body_text - Finance";
		this._body_text_finance.ggLeft=-152;
		this._body_text_finance.ggTop=-103;
		this._body_text_finance.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_finance.ggVisible=false;
		this._body_text_finance.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_finance.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		this._body_text_finance.setAttribute('style',hs);
		this._body_text_finance.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 411px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_finance__text.setAttribute('style',hs);
		this._body_text_finance__text.innerHTML="As a Finance Graduate you will gain technical financial experience, and exposure to multiple areas of our business. You will have a mentor on hand every step of the way and a network of graduates across the industry. We\u2019re setting you up for success \u2013 make your future.";
		this._body_text_finance.appendChild(this._body_text_finance__text);
		me._body_text_finance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_finance.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_finance.ggCurrentLogicStateScaling = -1;
		this._body_text_finance.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_finance.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_finance.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_finance.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_finance.ggCurrentLogicStateScaling == 0) {
					me._body_text_finance.ggParameter.sx = 0;
					me._body_text_finance.ggParameter.sy = 0;
					me._body_text_finance.style[domTransform]=parameterToTransform(me._body_text_finance.ggParameter);
				}
				else {
					me._body_text_finance.ggParameter.sx = 1;
					me._body_text_finance.ggParameter.sy = 1;
					me._body_text_finance.style[domTransform]=parameterToTransform(me._body_text_finance.ggParameter);
				}
			}
		}
		this._body_text_finance.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_finance.ggUpdateConditionResize();
		}
		this._finance_content.appendChild(this._body_text_finance);
		this._header_text_finance=document.createElement('div');
		this._header_text_finance__text=document.createElement('div');
		this._header_text_finance.className='ggskin ggskin_textdiv';
		this._header_text_finance.ggTextDiv=this._header_text_finance__text;
		this._header_text_finance.ggId="header_text - Finance";
		this._header_text_finance.ggLeft=-152;
		this._header_text_finance.ggTop=-121;
		this._header_text_finance.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_finance.ggVisible=false;
		this._header_text_finance.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_finance.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_finance.setAttribute('style',hs);
		this._header_text_finance.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_finance__text.setAttribute('style',hs);
		this._header_text_finance__text.innerHTML="Finance";
		this._header_text_finance.appendChild(this._header_text_finance__text);
		me._header_text_finance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_finance.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_finance.ggCurrentLogicStateScaling = -1;
		this._header_text_finance.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_finance.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_finance.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_finance.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_finance.ggCurrentLogicStateScaling == 0) {
					me._header_text_finance.ggParameter.sx = 0;
					me._header_text_finance.ggParameter.sy = 0;
					me._header_text_finance.style[domTransform]=parameterToTransform(me._header_text_finance.ggParameter);
				}
				else {
					me._header_text_finance.ggParameter.sx = 1;
					me._header_text_finance.ggParameter.sy = 1;
					me._header_text_finance.style[domTransform]=parameterToTransform(me._header_text_finance.ggParameter);
				}
			}
		}
		this._header_text_finance.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_finance.ggUpdateConditionResize();
		}
		this._finance_content.appendChild(this._header_text_finance);
		this._video_finance=document.createElement('div');
		this._video_finance.seekbars = [];
		this._video_finance.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_finance.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_finance.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_finance.hasChildNodes()) {
				me._video_finance.removeChild(me._video_finance.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_finance.ggVideoNotLoaded = true;
				return;
			}
			me._video_finance.ggVideoNotLoaded = false;
			me._video_finance__vid=document.createElement('iframe');
			me._video_finance__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_finance__vid.setAttribute('src', ggVideoUrl);
			me._video_finance__vid.setAttribute('width', '100%');
			me._video_finance__vid.setAttribute('height', '100%');
			me._video_finance__vid.setAttribute('style', 'border:none; ');
			me._video_finance.appendChild(me._video_finance__vid);
			me._video_finance.ggVideoSource = media;
		}
		this._video_finance.ggId="Video - Finance";
		this._video_finance.ggLeft=-152;
		this._video_finance.ggTop=-418;
		this._video_finance.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_finance.ggVisible=false;
		this._video_finance.className='ggskin ggskin_video ';
		this._video_finance.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -152px;';
		hs+='position : absolute;';
		hs+='top : -418px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_finance.setAttribute('style',hs);
		this._video_finance.style[domTransform + 'Origin']='50% 50%';
		me._video_finance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_finance.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_finance.ggCurrentLogicStatePosition = -1;
		me._video_finance.ggCurrentLogicStateSize = -1;
		this._video_finance.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_finance.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_finance.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_finance.style[domTransition]='left none, top none, width none, height none';
				if (me._video_finance.ggCurrentLogicStatePosition == 0) {
					me._video_finance.ggLeft=-19;
					me._video_finance.ggTop=-360;
					me._video_finance.ggUpdatePosition(true);
				}
				else {
					me._video_finance.ggLeft=-152;
					me._video_finance.ggTop=-418;
					me._video_finance.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_finance.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_finance.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_finance.style[domTransition]='left none, top none, width none, height none';
				if (me._video_finance.ggCurrentLogicStateSize == 0) {
					me._video_finance.style.width='256px';
					me._video_finance.style.height='144px';
					me.updateSize(me._video_finance);
				}
				else {
					me._video_finance.style.width='522px';
					me._video_finance.style.height='294px';
					me.updateSize(me._video_finance);
				}
			}
		}
		this._video_finance.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_finance.ggUpdateConditionResize();
		}
		this._finance_content.appendChild(this._video_finance);
		this._button_image_finance=document.createElement('div');
		this._button_image_finance__img=document.createElement('img');
		this._button_image_finance__img.className='ggskin ggskin_button';
		this._button_image_finance__img.setAttribute('src',basePath + 'images/button_image_finance.png');
		this._button_image_finance__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_finance__img.className='ggskin ggskin_button';
		this._button_image_finance__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_image_finance__img);
		this._button_image_finance.appendChild(this._button_image_finance__img);
		this._button_image_finance.ggId="Button image - Finance";
		this._button_image_finance.ggLeft=261;
		this._button_image_finance.ggTop=-102;
		this._button_image_finance.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_finance.ggVisible=false;
		this._button_image_finance.className='ggskin ggskin_button ';
		this._button_image_finance.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		this._button_image_finance.setAttribute('style',hs);
		this._button_image_finance.style[domTransform + 'Origin']='50% 50%';
		me._button_image_finance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_finance.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_finance.onclick=function (e) {
			me.player.openUrl("https:\/\/linkprotect.cudasvc.com\/url?a=https:\/\/careers.fbcareers.com\/careers\/JobDetail%3fid%3d5374&c=E,1,B8DvFtG8qjXNHz4xnwLjo1MBf5B6REhXreglTFN9d84y2fucGPTNR_HcmbAK7Su6lLOtOxRy2Mpn1PYp1YzRD1x6sFB4bMhM03pRGg,,&typo=1","");
		}
		this._button_image_finance.onmouseover=function (e) {
			me._button_image_finance__img.src=basePath + 'images/button_image_finance__o.png';
		}
		this._button_image_finance.onmouseout=function (e) {
			me._button_image_finance__img.src=basePath + 'images/button_image_finance.png';
		}
		me._button_image_finance.ggCurrentLogicStatePosition = -1;
		me._button_image_finance.ggCurrentLogicStateSize = -1;
		this._button_image_finance.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_image_finance.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_image_finance.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_image_finance.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_finance.ggCurrentLogicStatePosition == 0) {
					me._button_image_finance.ggLeft=34;
					me._button_image_finance.ggTop=-201;
					me._button_image_finance.ggUpdatePosition(true);
				}
				else {
					me._button_image_finance.ggLeft=261;
					me._button_image_finance.ggTop=-102;
					me._button_image_finance.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_image_finance.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_image_finance.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_image_finance.style[domTransition]='left none, top none, width none, height none';
				if (me._button_image_finance.ggCurrentLogicStateSize == 0) {
					me._button_image_finance.style.width='150px';
					me._button_image_finance.style.height='34px';
					me.updateSize(me._button_image_finance);
				}
				else {
					me._button_image_finance.style.width='109px';
					me._button_image_finance.style.height='24px';
					me.updateSize(me._button_image_finance);
				}
			}
		}
		this._button_image_finance.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_finance.ggUpdateConditionResize();
		}
		this._finance_content.appendChild(this._button_image_finance);
		this.divSkin.appendChild(this._finance_content);
		this._corporate_information_content=document.createElement('div');
		this._corporate_information_content.ggId="Corporate Information content";
		this._corporate_information_content.ggLeft=-635;
		this._corporate_information_content.ggTop=16;
		this._corporate_information_content.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._corporate_information_content.ggVisible=true;
		this._corporate_information_content.className='ggskin ggskin_container ';
		this._corporate_information_content.ggType='container';
		hs ='';
		hs+='height : 265px;';
		hs+='left : -635px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 372px;';
		hs+='pointer-events:none;';
		this._corporate_information_content.setAttribute('style',hs);
		this._corporate_information_content.style[domTransform + 'Origin']='50% 50%';
		me._corporate_information_content.ggIsActive=function() {
			return false;
		}
		me._corporate_information_content.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._corporate_information_content.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_corporate_information=document.createElement('div');
		this._box_corporate_information.ggId="Box - Corporate Information";
		this._box_corporate_information.ggLeft=178;
		this._box_corporate_information.ggTop=-318;
		this._box_corporate_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_corporate_information.ggVisible=false;
		this._box_corporate_information.className='ggskin ggskin_rectangle ';
		this._box_corporate_information.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : 178px;';
		hs+='position : absolute;';
		hs+='top : -318px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_corporate_information.setAttribute('style',hs);
		this._box_corporate_information.style[domTransform + 'Origin']='50% 50%';
		me._box_corporate_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_corporate_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_corporate_information.ggCurrentLogicStatePosition = -1;
		me._box_corporate_information.ggCurrentLogicStateSize = -1;
		this._box_corporate_information.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_corporate_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_corporate_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_corporate_information.style[domTransition]='left none, top none, width none, height none';
				if (me._box_corporate_information.ggCurrentLogicStatePosition == 0) {
					me._box_corporate_information.ggLeft=311;
					me._box_corporate_information.ggTop=-267;
					me._box_corporate_information.ggUpdatePosition(true);
				}
				else {
					me._box_corporate_information.ggLeft=178;
					me._box_corporate_information.ggTop=-318;
					me._box_corporate_information.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_corporate_information.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_corporate_information.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_corporate_information.style[domTransition]='left none, top none, width none, height none';
				if (me._box_corporate_information.ggCurrentLogicStateSize == 0) {
					me._box_corporate_information.style.width='276px';
					me._box_corporate_information.style.height='204px';
					me.updateSize(me._box_corporate_information);
				}
				else {
					me._box_corporate_information.style.width='542px';
					me._box_corporate_information.style.height='450px';
					me.updateSize(me._box_corporate_information);
				}
			}
		}
		this._box_corporate_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_corporate_information.ggUpdateConditionResize();
		}
		this._corporate_information_content.appendChild(this._box_corporate_information);
		this._body_text_corporate_information=document.createElement('div');
		this._body_text_corporate_information__text=document.createElement('div');
		this._body_text_corporate_information.className='ggskin ggskin_textdiv';
		this._body_text_corporate_information.ggTextDiv=this._body_text_corporate_information__text;
		this._body_text_corporate_information.ggId="body_text - Corporate Information";
		this._body_text_corporate_information.ggLeft=188;
		this._body_text_corporate_information.ggTop=20;
		this._body_text_corporate_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_corporate_information.ggVisible=false;
		this._body_text_corporate_information.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_corporate_information.ggType='text';
		hs ='';
		hs+='height : 107px;';
		hs+='left : 188px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 520px;';
		hs+='pointer-events:auto;';
		this._body_text_corporate_information.setAttribute('style',hs);
		this._body_text_corporate_information.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 520px;';
		hs+='height: 107px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_corporate_information__text.setAttribute('style',hs);
		this._body_text_corporate_information__text.innerHTML="Fletcher Building is an integrated manufacturer and distributor of world-leading building and construction products and services. Every day, we are building the lives, communities and futures our customers want. Take a 360\xb0 tour of one of our Auckland building sites and imagine joining a skilled, passionate and motivated team of more than 20,000 amazing people.";
		this._body_text_corporate_information.appendChild(this._body_text_corporate_information__text);
		me._body_text_corporate_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_corporate_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_corporate_information.ggCurrentLogicStateScaling = -1;
		this._body_text_corporate_information.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._body_text_corporate_information.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._body_text_corporate_information.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._body_text_corporate_information.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._body_text_corporate_information.ggCurrentLogicStateScaling == 0) {
					me._body_text_corporate_information.ggParameter.sx = 0;
					me._body_text_corporate_information.ggParameter.sy = 0;
					me._body_text_corporate_information.style[domTransform]=parameterToTransform(me._body_text_corporate_information.ggParameter);
				}
				else {
					me._body_text_corporate_information.ggParameter.sx = 1;
					me._body_text_corporate_information.ggParameter.sy = 1;
					me._body_text_corporate_information.style[domTransform]=parameterToTransform(me._body_text_corporate_information.ggParameter);
				}
			}
		}
		this._body_text_corporate_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_corporate_information.ggUpdateConditionResize();
		}
		this._corporate_information_content.appendChild(this._body_text_corporate_information);
		this._header_text_corporate_information=document.createElement('div');
		this._header_text_corporate_information__text=document.createElement('div');
		this._header_text_corporate_information.className='ggskin ggskin_textdiv';
		this._header_text_corporate_information.ggTextDiv=this._header_text_corporate_information__text;
		this._header_text_corporate_information.ggId="header_text - Corporate Information";
		this._header_text_corporate_information.ggLeft=188;
		this._header_text_corporate_information.ggTop=2;
		this._header_text_corporate_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_corporate_information.ggVisible=false;
		this._header_text_corporate_information.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_corporate_information.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 188px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_corporate_information.setAttribute('style',hs);
		this._header_text_corporate_information.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_corporate_information__text.setAttribute('style',hs);
		this._header_text_corporate_information__text.innerHTML="Welcome to Fletcher Building";
		this._header_text_corporate_information.appendChild(this._header_text_corporate_information__text);
		me._header_text_corporate_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_corporate_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_corporate_information.ggCurrentLogicStateScaling = -1;
		this._header_text_corporate_information.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._header_text_corporate_information.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header_text_corporate_information.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header_text_corporate_information.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._header_text_corporate_information.ggCurrentLogicStateScaling == 0) {
					me._header_text_corporate_information.ggParameter.sx = 0;
					me._header_text_corporate_information.ggParameter.sy = 0;
					me._header_text_corporate_information.style[domTransform]=parameterToTransform(me._header_text_corporate_information.ggParameter);
				}
				else {
					me._header_text_corporate_information.ggParameter.sx = 1;
					me._header_text_corporate_information.ggParameter.sy = 1;
					me._header_text_corporate_information.style[domTransform]=parameterToTransform(me._header_text_corporate_information.ggParameter);
				}
			}
		}
		this._header_text_corporate_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_corporate_information.ggUpdateConditionResize();
		}
		this._corporate_information_content.appendChild(this._header_text_corporate_information);
		this._video_corporate_information=document.createElement('div');
		this._video_corporate_information.seekbars = [];
		this._video_corporate_information.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_corporate_information.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_corporate_information.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_corporate_information.hasChildNodes()) {
				me._video_corporate_information.removeChild(me._video_corporate_information.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_corporate_information.ggVideoNotLoaded = true;
				return;
			}
			me._video_corporate_information.ggVideoNotLoaded = false;
			me._video_corporate_information__vid=document.createElement('iframe');
			me._video_corporate_information__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_corporate_information__vid.setAttribute('src', ggVideoUrl);
			me._video_corporate_information__vid.setAttribute('width', '100%');
			me._video_corporate_information__vid.setAttribute('height', '100%');
			me._video_corporate_information__vid.setAttribute('style', 'border:none; ');
			me._video_corporate_information.appendChild(me._video_corporate_information__vid);
			me._video_corporate_information.ggVideoSource = media;
		}
		this._video_corporate_information.ggId="Video - Corporate Information";
		this._video_corporate_information.ggLeft=188;
		this._video_corporate_information.ggTop=-295;
		this._video_corporate_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_corporate_information.ggVisible=false;
		this._video_corporate_information.className='ggskin ggskin_video ';
		this._video_corporate_information.ggType='video';
		hs ='';
		hs+='height : 294px;';
		hs+='left : 188px;';
		hs+='position : absolute;';
		hs+='top : -295px;';
		hs+='visibility : hidden;';
		hs+='width : 522px;';
		hs+='pointer-events:auto;';
		this._video_corporate_information.setAttribute('style',hs);
		this._video_corporate_information.style[domTransform + 'Origin']='50% 50%';
		me._video_corporate_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_corporate_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._video_corporate_information.ggCurrentLogicStatePosition = -1;
		me._video_corporate_information.ggCurrentLogicStateSize = -1;
		this._video_corporate_information.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._video_corporate_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._video_corporate_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._video_corporate_information.style[domTransition]='left none, top none, width none, height none';
				if (me._video_corporate_information.ggCurrentLogicStatePosition == 0) {
					me._video_corporate_information.ggLeft=321;
					me._video_corporate_information.ggTop=-237;
					me._video_corporate_information.ggUpdatePosition(true);
				}
				else {
					me._video_corporate_information.ggLeft=188;
					me._video_corporate_information.ggTop=-295;
					me._video_corporate_information.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_corporate_information.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_corporate_information.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_corporate_information.style[domTransition]='left none, top none, width none, height none';
				if (me._video_corporate_information.ggCurrentLogicStateSize == 0) {
					me._video_corporate_information.style.width='256px';
					me._video_corporate_information.style.height='144px';
					me.updateSize(me._video_corporate_information);
				}
				else {
					me._video_corporate_information.style.width='522px';
					me._video_corporate_information.style.height='294px';
					me.updateSize(me._video_corporate_information);
				}
			}
		}
		this._video_corporate_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._video_corporate_information.ggUpdateConditionResize();
		}
		this._corporate_information_content.appendChild(this._video_corporate_information);
		this.divSkin.appendChild(this._corporate_information_content);
		this._close0=document.createElement('div');
		this._close0__img=document.createElement('img');
		this._close0__img.className='ggskin ggskin_image';
		this._close0__img.setAttribute('src',basePath + 'images/close0.png');
		this._close0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._close0__img.className='ggskin ggskin_image';
		this._close0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._close0__img);
		this._close0.appendChild(this._close0__img);
		this._close0.ggId="Close";
		this._close0.ggLeft=240;
		this._close0.ggTop=-168;
		this._close0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close0.ggVisible=false;
		this._close0.className='ggskin ggskin_image ';
		this._close0.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : -168px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._close0.setAttribute('style',hs);
		this._close0.style[domTransform + 'Origin']='50% 50%';
		me._close0.ggIsActive=function() {
			return false;
		}
		me._close0.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._close0.onclick=function (e) {
			me._close0.style[domTransition]='none';
			me._close0.style.visibility='hidden';
			me._close0.ggVisible=false;
			me._close0.style[domTransition]='none';
			me._close0.style.visibility='hidden';
			me._close0.ggVisible=false;
			me._video_screentint_youtube.style[domTransition]='none';
			me._video_screentint_youtube.style.visibility='hidden';
			me._video_screentint_youtube.ggVisible=false;
			me._button_image_civil_engineering.style[domTransition]='none';
			me._button_image_civil_engineering.style.visibility='hidden';
			me._button_image_civil_engineering.ggVisible=false;
			me._video_civil_engineering.ggInitMedia('');
			me._video_civil_engineering.style[domTransition]='none';
			me._video_civil_engineering.style.visibility='hidden';
			me._video_civil_engineering.ggVisible=false;
			me._header_text_civil_engineering.style[domTransition]='none';
			me._header_text_civil_engineering.style.visibility='hidden';
			me._header_text_civil_engineering.ggVisible=false;
			me._body_text_civil_engineering.style[domTransition]='none';
			me._body_text_civil_engineering.style.visibility='hidden';
			me._body_text_civil_engineering.ggVisible=false;
			me._video_land_surveying.ggInitMedia('');
			me._video_land_surveying.style[domTransition]='none';
			me._video_land_surveying.style.visibility='hidden';
			me._video_land_surveying.ggVisible=false;
			me._header_text_land_surveying.style[domTransition]='none';
			me._header_text_land_surveying.style.visibility='hidden';
			me._header_text_land_surveying.ggVisible=false;
			me._body_text_land_surveying.style[domTransition]='none';
			me._body_text_land_surveying.style.visibility='hidden';
			me._body_text_land_surveying.ggVisible=false;
			me._video_construction_management.ggInitMedia('');
			me._video_construction_management.style[domTransition]='none';
			me._video_construction_management.style.visibility='hidden';
			me._video_construction_management.ggVisible=false;
			me._header_text_construction_management.style[domTransition]='none';
			me._header_text_construction_management.style.visibility='hidden';
			me._header_text_construction_management.ggVisible=false;
			me._body_text_construction_management.style[domTransition]='none';
			me._body_text_construction_management.style.visibility='hidden';
			me._body_text_construction_management.ggVisible=false;
			me._video_quantity_surveying.ggInitMedia('');
			me._video_quantity_surveying.style[domTransition]='none';
			me._video_quantity_surveying.style.visibility='hidden';
			me._video_quantity_surveying.ggVisible=false;
			me._header_text_quantity_surveying.style[domTransition]='none';
			me._header_text_quantity_surveying.style.visibility='hidden';
			me._header_text_quantity_surveying.ggVisible=false;
			me._body_text_quantity_surveying.style[domTransition]='none';
			me._body_text_quantity_surveying.style.visibility='hidden';
			me._body_text_quantity_surveying.ggVisible=false;
			me._video_construction_information.ggInitMedia('');
			me._video_construction_information.style[domTransition]='none';
			me._video_construction_information.style.visibility='hidden';
			me._video_construction_information.ggVisible=false;
			me._header_text_construction_information.style[domTransition]='none';
			me._header_text_construction_information.style.visibility='hidden';
			me._header_text_construction_information.ggVisible=false;
			me._body_text_construction_information.style[domTransition]='none';
			me._body_text_construction_information.style.visibility='hidden';
			me._body_text_construction_information.ggVisible=false;
			me._button_image_land_surveying.style[domTransition]='none';
			me._button_image_land_surveying.style.visibility='hidden';
			me._button_image_land_surveying.ggVisible=false;
			me._button_image_construction_management.style[domTransition]='none';
			me._button_image_construction_management.style.visibility='hidden';
			me._button_image_construction_management.ggVisible=false;
			me._button_image_quantity_surveying.style[domTransition]='none';
			me._button_image_quantity_surveying.style.visibility='hidden';
			me._button_image_quantity_surveying.ggVisible=false;
			me._box_construction_information.style[domTransition]='none';
			me._box_construction_information.style.visibility='hidden';
			me._box_construction_information.ggVisible=false;
			me._box_civil_engineering.style[domTransition]='none';
			me._box_civil_engineering.style.visibility='hidden';
			me._box_civil_engineering.ggVisible=false;
			me._box_land_surveying.style[domTransition]='none';
			me._box_land_surveying.style.visibility='hidden';
			me._box_land_surveying.ggVisible=false;
			me._box_construction_management.style[domTransition]='none';
			me._box_construction_management.style.visibility='hidden';
			me._box_construction_management.ggVisible=false;
			me._box_quantity_surveying.style[domTransition]='none';
			me._box_quantity_surveying.style.visibility='hidden';
			me._box_quantity_surveying.ggVisible=false;
			me._box_corporate_information.style[domTransition]='none';
			me._box_corporate_information.style.visibility='hidden';
			me._box_corporate_information.ggVisible=false;
			me._video_corporate_information.ggInitMedia('');
			me._video_corporate_information.style[domTransition]='none';
			me._video_corporate_information.style.visibility='hidden';
			me._video_corporate_information.ggVisible=false;
			me._body_text_corporate_information.style[domTransition]='none';
			me._body_text_corporate_information.style.visibility='hidden';
			me._body_text_corporate_information.ggVisible=false;
			me._header_text_corporate_information.style[domTransition]='none';
			me._header_text_corporate_information.style.visibility='hidden';
			me._header_text_corporate_information.ggVisible=false;
			me._video_finance.ggInitMedia('');
			me._video_finance.style[domTransition]='none';
			me._video_finance.style.visibility='hidden';
			me._video_finance.ggVisible=false;
			me._header_text_finance.style[domTransition]='none';
			me._header_text_finance.style.visibility='hidden';
			me._header_text_finance.ggVisible=false;
			me._body_text_finance.style[domTransition]='none';
			me._body_text_finance.style.visibility='hidden';
			me._body_text_finance.ggVisible=false;
			me._box_finance.style[domTransition]='none';
			me._box_finance.style.visibility='hidden';
			me._box_finance.ggVisible=false;
			me._button_image_finance.style[domTransition]='none';
			me._button_image_finance.style.visibility='hidden';
			me._button_image_finance.ggVisible=false;
			me._video_marketing.ggInitMedia('');
			me._video_marketing.style[domTransition]='none';
			me._video_marketing.style.visibility='hidden';
			me._video_marketing.ggVisible=false;
			me._header_text_marketing.style[domTransition]='none';
			me._header_text_marketing.style.visibility='hidden';
			me._header_text_marketing.ggVisible=false;
			me._body_text_marketing.style[domTransition]='none';
			me._body_text_marketing.style.visibility='hidden';
			me._body_text_marketing.ggVisible=false;
			me._box_marketing.style[domTransition]='none';
			me._box_marketing.style.visibility='hidden';
			me._box_marketing.ggVisible=false;
			me._button_image_marketing.style[domTransition]='none';
			me._button_image_marketing.style.visibility='hidden';
			me._button_image_marketing.ggVisible=false;
			me._video_information_technology.ggInitMedia('');
			me._video_information_technology.style[domTransition]='none';
			me._video_information_technology.style.visibility='hidden';
			me._video_information_technology.ggVisible=false;
			me._header_text_information_technology.style[domTransition]='none';
			me._header_text_information_technology.style.visibility='hidden';
			me._header_text_information_technology.ggVisible=false;
			me._body_text_information_technology.style[domTransition]='none';
			me._body_text_information_technology.style.visibility='hidden';
			me._body_text_information_technology.ggVisible=false;
			me._box_information_technology.style[domTransition]='none';
			me._box_information_technology.style.visibility='hidden';
			me._box_information_technology.ggVisible=false;
			me._button_image_information_technology.style[domTransition]='none';
			me._button_image_information_technology.style.visibility='hidden';
			me._button_image_information_technology.ggVisible=false;
			me._video_human_resources.ggInitMedia('');
			me._video_human_resources.style[domTransition]='none';
			me._video_human_resources.style.visibility='hidden';
			me._video_human_resources.ggVisible=false;
			me._header_text_human_resources.style[domTransition]='none';
			me._header_text_human_resources.style.visibility='hidden';
			me._header_text_human_resources.ggVisible=false;
			me._body_text_human_resources.style[domTransition]='none';
			me._body_text_human_resources.style.visibility='hidden';
			me._body_text_human_resources.ggVisible=false;
			me._box_human_resources.style[domTransition]='none';
			me._box_human_resources.style.visibility='hidden';
			me._box_human_resources.ggVisible=false;
			me._button_image_human_resources.style[domTransition]='none';
			me._button_image_human_resources.style.visibility='hidden';
			me._button_image_human_resources.ggVisible=false;
		}
		me._close0.ggCurrentLogicStatePosition = -1;
		this._close0.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close0.style[domTransition]='left none, top none';
				if (me._close0.ggCurrentLogicStatePosition == 0) {
					me._close0.ggLeft=108;
					me._close0.ggTop=-114;
					me._close0.ggUpdatePosition(true);
				}
				else {
					me._close0.ggLeft=240;
					me._close0.ggTop=-168;
					me._close0.ggUpdatePosition(true);
				}
			}
		}
		this._close0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._close0.ggUpdateConditionResize();
		}
		this.divSkin.appendChild(this._close0);
		this._welcome_popup=document.createElement('div');
		this._welcome_popup.ggId="welcome popup";
		this._welcome_popup.ggLeft=-272;
		this._welcome_popup.ggTop=-169;
		this._welcome_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._welcome_popup.ggVisible=false;
		this._welcome_popup.className='ggskin ggskin_container ';
		this._welcome_popup.ggType='container';
		hs ='';
		hs+='height : 542px;';
		hs+='left : -272px;';
		hs+='position : absolute;';
		hs+='top : -169px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:none;';
		this._welcome_popup.setAttribute('style',hs);
		this._welcome_popup.style[domTransform + 'Origin']='50% 50%';
		me._welcome_popup.ggIsActive=function() {
			return false;
		}
		me._welcome_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._welcome_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._box_welcome_popup=document.createElement('div');
		this._box_welcome_popup.ggId="Box - welcome popup";
		this._box_welcome_popup.ggLeft=-271;
		this._box_welcome_popup.ggTop=-271;
		this._box_welcome_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_welcome_popup.ggVisible=false;
		this._box_welcome_popup.className='ggskin ggskin_rectangle ';
		this._box_welcome_popup.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -271px;';
		hs+='position : absolute;';
		hs+='top : -271px;';
		hs+='visibility : hidden;';
		hs+='width : 542px;';
		hs+='pointer-events:auto;';
		this._box_welcome_popup.setAttribute('style',hs);
		this._box_welcome_popup.style[domTransform + 'Origin']='50% 50%';
		me._box_welcome_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._box_welcome_popup.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._box_welcome_popup.ggCurrentLogicStatePosition = -1;
		me._box_welcome_popup.ggCurrentLogicStateSize = -1;
		this._box_welcome_popup.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._box_welcome_popup.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._box_welcome_popup.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._box_welcome_popup.style[domTransition]='left none, top none, width none, height none';
				if (me._box_welcome_popup.ggCurrentLogicStatePosition == 0) {
					me._box_welcome_popup.ggLeft=-137;
					me._box_welcome_popup.ggTop=-271;
					me._box_welcome_popup.ggUpdatePosition(true);
				}
				else {
					me._box_welcome_popup.ggLeft=-271;
					me._box_welcome_popup.ggTop=-271;
					me._box_welcome_popup.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._box_welcome_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._box_welcome_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._box_welcome_popup.style[domTransition]='left none, top none, width none, height none';
				if (me._box_welcome_popup.ggCurrentLogicStateSize == 0) {
					me._box_welcome_popup.style.width='276px';
					me._box_welcome_popup.style.height='129px';
					me.updateSize(me._box_welcome_popup);
				}
				else {
					me._box_welcome_popup.style.width='542px';
					me._box_welcome_popup.style.height='100px';
					me.updateSize(me._box_welcome_popup);
				}
			}
		}
		this._box_welcome_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._box_welcome_popup.ggUpdateConditionResize();
		}
		this._welcome_popup.appendChild(this._box_welcome_popup);
		this._body_text_welcome_popup=document.createElement('div');
		this._body_text_welcome_popup__text=document.createElement('div');
		this._body_text_welcome_popup.className='ggskin ggskin_textdiv';
		this._body_text_welcome_popup.ggTextDiv=this._body_text_welcome_popup__text;
		this._body_text_welcome_popup.ggId="body_text - welcome popup";
		this._body_text_welcome_popup.ggLeft=-261;
		this._body_text_welcome_popup.ggTop=-224;
		this._body_text_welcome_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._body_text_welcome_popup.ggVisible=false;
		this._body_text_welcome_popup.className='ggskin ggskin_text Graphik-Regular-Web';
		this._body_text_welcome_popup.ggType='text';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -261px;';
		hs+='position : absolute;';
		hs+='top : -224px;';
		hs+='visibility : hidden;';
		hs+='width : 520px;';
		hs+='pointer-events:auto;';
		this._body_text_welcome_popup.setAttribute('style',hs);
		this._body_text_welcome_popup.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 520px;';
		hs+='height: 50px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._body_text_welcome_popup__text.setAttribute('style',hs);
		this._body_text_welcome_popup__text.innerHTML="Take a tour of our office by moving around each 360\xb0 image. You will find 4 pins which feature our graduates and the roles to apply for. Find your pin, apply, and make your future.";
		this._body_text_welcome_popup.appendChild(this._body_text_welcome_popup__text);
		me._body_text_welcome_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._body_text_welcome_popup.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._body_text_welcome_popup.ggCurrentLogicStatePosition = -1;
		me._body_text_welcome_popup.ggCurrentLogicStateSize = -1;
		this._body_text_welcome_popup.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._body_text_welcome_popup.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._body_text_welcome_popup.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._body_text_welcome_popup.style[domTransition]='left none, top none, width none, height none';
				if (me._body_text_welcome_popup.ggCurrentLogicStatePosition == 0) {
					me._body_text_welcome_popup.ggLeft=-127;
					me._body_text_welcome_popup.ggTop=-224;
					me._body_text_welcome_popup.ggUpdatePosition(true);
				}
				else {
					me._body_text_welcome_popup.ggLeft=-261;
					me._body_text_welcome_popup.ggTop=-224;
					me._body_text_welcome_popup.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._body_text_welcome_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._body_text_welcome_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._body_text_welcome_popup__text.style[domTransition]='left none, top none, width none, height none';
				if (me._body_text_welcome_popup.ggCurrentLogicStateSize == 0) {
					me._body_text_welcome_popup__text.style.width='256px';
					me._body_text_welcome_popup__text.style.height='78px';
					me.updateSize(me._body_text_welcome_popup);
				}
				else {
					me._body_text_welcome_popup__text.style.width='520px';
					me._body_text_welcome_popup__text.style.height='50px';
					me.updateSize(me._body_text_welcome_popup);
				}
			}
		}
		this._body_text_welcome_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._body_text_welcome_popup.ggUpdateConditionResize();
		}
		this._welcome_popup.appendChild(this._body_text_welcome_popup);
		this._header_text_welcome_popup=document.createElement('div');
		this._header_text_welcome_popup__text=document.createElement('div');
		this._header_text_welcome_popup.className='ggskin ggskin_textdiv';
		this._header_text_welcome_popup.ggTextDiv=this._header_text_welcome_popup__text;
		this._header_text_welcome_popup.ggId="header_text - welcome popup";
		this._header_text_welcome_popup.ggLeft=-261;
		this._header_text_welcome_popup.ggTop=-244;
		this._header_text_welcome_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header_text_welcome_popup.ggVisible=false;
		this._header_text_welcome_popup.className='ggskin ggskin_text Graphik-Bold-Web';
		this._header_text_welcome_popup.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -261px;';
		hs+='position : absolute;';
		hs+='top : -244px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		this._header_text_welcome_popup.setAttribute('style',hs);
		this._header_text_welcome_popup.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(99,99,99,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._header_text_welcome_popup__text.setAttribute('style',hs);
		this._header_text_welcome_popup__text.innerHTML="Welcome to Fletcher Building's 360\xb0 tour!";
		this._header_text_welcome_popup.appendChild(this._header_text_welcome_popup__text);
		me._header_text_welcome_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header_text_welcome_popup.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._header_text_welcome_popup.ggCurrentLogicStatePosition = -1;
		this._header_text_welcome_popup.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._header_text_welcome_popup.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._header_text_welcome_popup.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._header_text_welcome_popup.style[domTransition]='left none, top none';
				if (me._header_text_welcome_popup.ggCurrentLogicStatePosition == 0) {
					me._header_text_welcome_popup.ggLeft=-127;
					me._header_text_welcome_popup.ggTop=-244;
					me._header_text_welcome_popup.ggUpdatePosition(true);
				}
				else {
					me._header_text_welcome_popup.ggLeft=-261;
					me._header_text_welcome_popup.ggTop=-244;
					me._header_text_welcome_popup.ggUpdatePosition(true);
				}
			}
		}
		this._header_text_welcome_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._header_text_welcome_popup.ggUpdateConditionResize();
		}
		this._welcome_popup.appendChild(this._header_text_welcome_popup);
		this._close=document.createElement('div');
		this._close__img=document.createElement('img');
		this._close__img.className='ggskin ggskin_image';
		this._close__img.setAttribute('src',basePath + 'images/close.png');
		this._close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._close__img.className='ggskin ggskin_image';
		this._close__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._close__img);
		this._close.appendChild(this._close__img);
		this._close.ggId="Close";
		this._close.ggLeft=240;
		this._close.ggTop=-269;
		this._close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close.ggVisible=false;
		this._close.className='ggskin ggskin_image ';
		this._close.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : -269px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._close.setAttribute('style',hs);
		this._close.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._close.onclick=function (e) {
			me._close.style[domTransition]='none';
			me._close.style.visibility='hidden';
			me._close.ggVisible=false;
			me._header_text_welcome_popup.style[domTransition]='none';
			me._header_text_welcome_popup.style.visibility='hidden';
			me._header_text_welcome_popup.ggVisible=false;
			me._body_text_welcome_popup.style[domTransition]='none';
			me._body_text_welcome_popup.style.visibility='hidden';
			me._body_text_welcome_popup.ggVisible=false;
			me._box_welcome_popup.style[domTransition]='none';
			me._box_welcome_popup.style.visibility='hidden';
			me._box_welcome_popup.ggVisible=false;
		}
		me._close.ggCurrentLogicStatePosition = -1;
		this._close.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close.style[domTransition]='left none, top none';
				if (me._close.ggCurrentLogicStatePosition == 0) {
					me._close.ggLeft=109;
					me._close.ggTop=-269;
					me._close.ggUpdatePosition(true);
				}
				else {
					me._close.ggLeft=240;
					me._close.ggTop=-269;
					me._close.ggUpdatePosition(true);
				}
			}
		}
		this._close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._close.ggUpdateConditionResize();
		}
		this._welcome_popup.appendChild(this._close);
		this.divSkin.appendChild(this._welcome_popup);
		me._welcome_popup.style[domTransition]='none';
		me._welcome_popup.style.visibility=(Number(me._welcome_popup.style.opacity)>0||!me._welcome_popup.style.opacity)?'inherit':'hidden';
		me._welcome_popup.ggVisible=true;
		me._video_quantity_surveying.ggVideoSource = '6vGYoA7nXDs';
		me._video_quantity_surveying.ggVideoNotLoaded = true;
		me._video_land_surveying.ggVideoSource = 'bMNm39uJAIk';
		me._video_land_surveying.ggVideoNotLoaded = true;
		me._video_civil_engineering.ggVideoSource = 'yTQwuGUsodc';
		me._video_civil_engineering.ggVideoNotLoaded = true;
		me._video_construction_management.ggVideoSource = 'Zf3eNk3rqM8';
		me._video_construction_management.ggVideoNotLoaded = true;
		me._video_construction_information.ggVideoSource = '1xcu2EZVRIc';
		me._video_construction_information.ggVideoNotLoaded = true;
		me._video_human_resources.ggVideoSource = 'dPwdwN16RrA';
		me._video_human_resources.ggVideoNotLoaded = true;
		me._video_information_technology.ggVideoSource = 'tSgVnavXzm8';
		me._video_information_technology.ggVideoNotLoaded = true;
		me._video_marketing.ggVideoSource = 'rMeooE8Hte0';
		me._video_marketing.ggVideoNotLoaded = true;
		me._video_finance.ggVideoSource = 'Ap6v5ECRTlg';
		me._video_finance.ggVideoNotLoaded = true;
		me._video_corporate_information.ggVideoSource = '1xcu2EZVRIc';
		me._video_corporate_information.ggVideoNotLoaded = true;
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (me.player.transitionsDisabled) {
					me._hide_elements.style[domTransition]='none';
				} else {
					me._hide_elements.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hide_elements.style.opacity='1';
				me._hide_elements.style.visibility=me._hide_elements.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='0';
				me._menu_button.style.visibility='hidden';
			} else {
				if (me.player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='1';
				me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._hide_elements.style[domTransition]='none';
				} else {
					me._hide_elements.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hide_elements.style.opacity='0';
				me._hide_elements.style.visibility='hidden';
			}
		}
		if (me.elementMouseOver['hide_elements']) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=me.ggCurrentTime;
		}
		me._movemode_1.ggUpdateConditionTimer();
		me._movemode_2.ggUpdateConditionTimer();
		me._autorotate.ggUpdateConditionTimer();
		me._autorotate_off.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Quantity Surveying') {
			this.__div=document.createElement('div');
			this.__div.ggId="Quantity Surveying";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._box_quantity_surveying.style[domTransition]='none';
				me.skin._box_quantity_surveying.style.visibility=(Number(me.skin._box_quantity_surveying.style.opacity)>0||!me.skin._box_quantity_surveying.style.opacity)?'inherit':'hidden';
				me.skin._box_quantity_surveying.ggVisible=true;
				me.skin._button_image_quantity_surveying.style[domTransition]='none';
				me.skin._button_image_quantity_surveying.style.visibility=(Number(me.skin._button_image_quantity_surveying.style.opacity)>0||!me.skin._button_image_quantity_surveying.style.opacity)?'inherit':'hidden';
				me.skin._button_image_quantity_surveying.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_quantity_surveying.ggVideoNotLoaded) {
					me.skin._video_quantity_surveying.ggInitMedia(me.skin._video_quantity_surveying.ggVideoSource);
				}
				me.skin._video_quantity_surveying.style[domTransition]='none';
				me.skin._video_quantity_surveying.style.visibility=(Number(me.skin._video_quantity_surveying.style.opacity)>0||!me.skin._video_quantity_surveying.style.opacity)?'inherit':'hidden';
				me.skin._video_quantity_surveying.ggVisible=true;
				me.skin._header_text_quantity_surveying.style[domTransition]='none';
				me.skin._header_text_quantity_surveying.style.visibility=(Number(me.skin._header_text_quantity_surveying.style.opacity)>0||!me.skin._header_text_quantity_surveying.style.opacity)?'inherit':'hidden';
				me.skin._header_text_quantity_surveying.ggVisible=true;
				me.skin._body_text_quantity_surveying.style[domTransition]='none';
				me.skin._body_text_quantity_surveying.style.visibility=(Number(me.skin._body_text_quantity_surveying.style.opacity)>0||!me.skin._body_text_quantity_surveying.style.opacity)?'inherit':'hidden';
				me.skin._body_text_quantity_surveying.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._construction_video_pin2=document.createElement('div');
			this._construction_video_pin2__img=document.createElement('img');
			this._construction_video_pin2__img.className='ggskin ggskin_button';
			this._construction_video_pin2__img.setAttribute('src',basePath + 'images/construction_video_pin2.png');
			this._construction_video_pin2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._construction_video_pin2__img.className='ggskin ggskin_button';
			this._construction_video_pin2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._construction_video_pin2__img);
			this._construction_video_pin2.appendChild(this._construction_video_pin2__img);
			this._construction_video_pin2.ggId="Construction video pin";
			this._construction_video_pin2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._construction_video_pin2.ggVisible=true;
			this._construction_video_pin2.className='ggskin ggskin_button ';
			this._construction_video_pin2.ggType='button';
			hs ='';
			hs+='height : 148px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 114px;';
			hs+='pointer-events:auto;';
			this._construction_video_pin2.setAttribute('style',hs);
			this._construction_video_pin2.style[domTransform + 'Origin']='50% 50%';
			me._construction_video_pin2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._construction_video_pin2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._construction_video_pin2.onmouseover=function (e) {
				me._construction_video_pin2__img.src=basePath + 'images/construction_video_pin2__o.png';
			}
			this._construction_video_pin2.onmouseout=function (e) {
				me._construction_video_pin2__img.src=basePath + 'images/construction_video_pin2.png';
			}
			this._construction_video_pin2.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._construction_video_pin2);
			this._quantity_surveying_pin_title=document.createElement('div');
			this._quantity_surveying_pin_title__text=document.createElement('div');
			this._quantity_surveying_pin_title.className='ggskin ggskin_textdiv';
			this._quantity_surveying_pin_title.ggTextDiv=this._quantity_surveying_pin_title__text;
			this._quantity_surveying_pin_title.ggId="Quantity Surveying pin title";
			this._quantity_surveying_pin_title.ggLeft=-153;
			this._quantity_surveying_pin_title.ggTop=85;
			this._quantity_surveying_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._quantity_surveying_pin_title.ggVisible=true;
			this._quantity_surveying_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._quantity_surveying_pin_title.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._quantity_surveying_pin_title.setAttribute('style',hs);
			this._quantity_surveying_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._quantity_surveying_pin_title__text.setAttribute('style',hs);
			this._quantity_surveying_pin_title__text.innerHTML="<b>Quantity Surveying<\/b>";
			this._quantity_surveying_pin_title.appendChild(this._quantity_surveying_pin_title__text);
			me._quantity_surveying_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._quantity_surveying_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._quantity_surveying_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._quantity_surveying_pin_title);
		} else
		if (hotspot.skinid=='Construction Management') {
			this.__div=document.createElement('div');
			this.__div.ggId="Construction Management";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._box_construction_management.style[domTransition]='none';
				me.skin._box_construction_management.style.visibility=(Number(me.skin._box_construction_management.style.opacity)>0||!me.skin._box_construction_management.style.opacity)?'inherit':'hidden';
				me.skin._box_construction_management.ggVisible=true;
				me.skin._button_image_construction_management.style[domTransition]='none';
				me.skin._button_image_construction_management.style.visibility=(Number(me.skin._button_image_construction_management.style.opacity)>0||!me.skin._button_image_construction_management.style.opacity)?'inherit':'hidden';
				me.skin._button_image_construction_management.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_construction_management.ggVideoNotLoaded) {
					me.skin._video_construction_management.ggInitMedia(me.skin._video_construction_management.ggVideoSource);
				}
				me.skin._video_construction_management.style[domTransition]='none';
				me.skin._video_construction_management.style.visibility=(Number(me.skin._video_construction_management.style.opacity)>0||!me.skin._video_construction_management.style.opacity)?'inherit':'hidden';
				me.skin._video_construction_management.ggVisible=true;
				me.skin._header_text_construction_management.style[domTransition]='none';
				me.skin._header_text_construction_management.style.visibility=(Number(me.skin._header_text_construction_management.style.opacity)>0||!me.skin._header_text_construction_management.style.opacity)?'inherit':'hidden';
				me.skin._header_text_construction_management.ggVisible=true;
				me.skin._body_text_construction_management.style[domTransition]='none';
				me.skin._body_text_construction_management.style.visibility=(Number(me.skin._body_text_construction_management.style.opacity)>0||!me.skin._body_text_construction_management.style.opacity)?'inherit':'hidden';
				me.skin._body_text_construction_management.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._construction_video_pin1=document.createElement('div');
			this._construction_video_pin1__img=document.createElement('img');
			this._construction_video_pin1__img.className='ggskin ggskin_button';
			this._construction_video_pin1__img.setAttribute('src',basePath + 'images/construction_video_pin1.png');
			this._construction_video_pin1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._construction_video_pin1__img.className='ggskin ggskin_button';
			this._construction_video_pin1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._construction_video_pin1__img);
			this._construction_video_pin1.appendChild(this._construction_video_pin1__img);
			this._construction_video_pin1.ggId="Construction video pin";
			this._construction_video_pin1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._construction_video_pin1.ggVisible=true;
			this._construction_video_pin1.className='ggskin ggskin_button ';
			this._construction_video_pin1.ggType='button';
			hs ='';
			hs+='height : 148px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 114px;';
			hs+='pointer-events:auto;';
			this._construction_video_pin1.setAttribute('style',hs);
			this._construction_video_pin1.style[domTransform + 'Origin']='50% 50%';
			me._construction_video_pin1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._construction_video_pin1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._construction_video_pin1.onmouseover=function (e) {
				me._construction_video_pin1__img.src=basePath + 'images/construction_video_pin1__o.png';
			}
			this._construction_video_pin1.onmouseout=function (e) {
				me._construction_video_pin1__img.src=basePath + 'images/construction_video_pin1.png';
			}
			this._construction_video_pin1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._construction_video_pin1);
			this._construction_management_pin_title=document.createElement('div');
			this._construction_management_pin_title__text=document.createElement('div');
			this._construction_management_pin_title.className='ggskin ggskin_textdiv';
			this._construction_management_pin_title.ggTextDiv=this._construction_management_pin_title__text;
			this._construction_management_pin_title.ggId="Construction Management pin title";
			this._construction_management_pin_title.ggLeft=-153;
			this._construction_management_pin_title.ggTop=85;
			this._construction_management_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._construction_management_pin_title.ggVisible=true;
			this._construction_management_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._construction_management_pin_title.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._construction_management_pin_title.setAttribute('style',hs);
			this._construction_management_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._construction_management_pin_title__text.setAttribute('style',hs);
			this._construction_management_pin_title__text.innerHTML="<b>Construction Management<\/b>";
			this._construction_management_pin_title.appendChild(this._construction_management_pin_title__text);
			me._construction_management_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._construction_management_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._construction_management_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._construction_management_pin_title);
		} else
		if (hotspot.skinid=='Land Surveying') {
			this.__div=document.createElement('div');
			this.__div.ggId="Land Surveying";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._box_land_surveying.style[domTransition]='none';
				me.skin._box_land_surveying.style.visibility=(Number(me.skin._box_land_surveying.style.opacity)>0||!me.skin._box_land_surveying.style.opacity)?'inherit':'hidden';
				me.skin._box_land_surveying.ggVisible=true;
				me.skin._button_image_land_surveying.style[domTransition]='none';
				me.skin._button_image_land_surveying.style.visibility=(Number(me.skin._button_image_land_surveying.style.opacity)>0||!me.skin._button_image_land_surveying.style.opacity)?'inherit':'hidden';
				me.skin._button_image_land_surveying.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_land_surveying.ggVideoNotLoaded) {
					me.skin._video_land_surveying.ggInitMedia(me.skin._video_land_surveying.ggVideoSource);
				}
				me.skin._video_land_surveying.style[domTransition]='none';
				me.skin._video_land_surveying.style.visibility=(Number(me.skin._video_land_surveying.style.opacity)>0||!me.skin._video_land_surveying.style.opacity)?'inherit':'hidden';
				me.skin._video_land_surveying.ggVisible=true;
				me.skin._header_text_land_surveying.style[domTransition]='none';
				me.skin._header_text_land_surveying.style.visibility=(Number(me.skin._header_text_land_surveying.style.opacity)>0||!me.skin._header_text_land_surveying.style.opacity)?'inherit':'hidden';
				me.skin._header_text_land_surveying.ggVisible=true;
				me.skin._body_text_land_surveying.style[domTransition]='none';
				me.skin._body_text_land_surveying.style.visibility=(Number(me.skin._body_text_land_surveying.style.opacity)>0||!me.skin._body_text_land_surveying.style.opacity)?'inherit':'hidden';
				me.skin._body_text_land_surveying.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._construction_video_pin0=document.createElement('div');
			this._construction_video_pin0__img=document.createElement('img');
			this._construction_video_pin0__img.className='ggskin ggskin_button';
			this._construction_video_pin0__img.setAttribute('src',basePath + 'images/construction_video_pin0.png');
			this._construction_video_pin0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._construction_video_pin0__img.className='ggskin ggskin_button';
			this._construction_video_pin0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._construction_video_pin0__img);
			this._construction_video_pin0.appendChild(this._construction_video_pin0__img);
			this._construction_video_pin0.ggId="Construction video pin";
			this._construction_video_pin0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._construction_video_pin0.ggVisible=true;
			this._construction_video_pin0.className='ggskin ggskin_button ';
			this._construction_video_pin0.ggType='button';
			hs ='';
			hs+='height : 148px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 114px;';
			hs+='pointer-events:auto;';
			this._construction_video_pin0.setAttribute('style',hs);
			this._construction_video_pin0.style[domTransform + 'Origin']='50% 50%';
			me._construction_video_pin0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._construction_video_pin0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._construction_video_pin0.onmouseover=function (e) {
				me._construction_video_pin0__img.src=basePath + 'images/construction_video_pin0__o.png';
			}
			this._construction_video_pin0.onmouseout=function (e) {
				me._construction_video_pin0__img.src=basePath + 'images/construction_video_pin0.png';
			}
			this._construction_video_pin0.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._construction_video_pin0);
			this._land_surveying_pin_title=document.createElement('div');
			this._land_surveying_pin_title__text=document.createElement('div');
			this._land_surveying_pin_title.className='ggskin ggskin_textdiv';
			this._land_surveying_pin_title.ggTextDiv=this._land_surveying_pin_title__text;
			this._land_surveying_pin_title.ggId="Land Surveying pin title";
			this._land_surveying_pin_title.ggLeft=-153;
			this._land_surveying_pin_title.ggTop=85;
			this._land_surveying_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._land_surveying_pin_title.ggVisible=true;
			this._land_surveying_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._land_surveying_pin_title.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._land_surveying_pin_title.setAttribute('style',hs);
			this._land_surveying_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._land_surveying_pin_title__text.setAttribute('style',hs);
			this._land_surveying_pin_title__text.innerHTML="<b>Land Surveying<\/b>";
			this._land_surveying_pin_title.appendChild(this._land_surveying_pin_title__text);
			me._land_surveying_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._land_surveying_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._land_surveying_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._land_surveying_pin_title);
		} else
		if (hotspot.skinid=='Civil Engineering') {
			this.__div=document.createElement('div');
			this.__div.ggId="Civil Engineering";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._box_civil_engineering.style[domTransition]='none';
				me.skin._box_civil_engineering.style.visibility=(Number(me.skin._box_civil_engineering.style.opacity)>0||!me.skin._box_civil_engineering.style.opacity)?'inherit':'hidden';
				me.skin._box_civil_engineering.ggVisible=true;
				me.skin._button_image_civil_engineering.style[domTransition]='none';
				me.skin._button_image_civil_engineering.style.visibility=(Number(me.skin._button_image_civil_engineering.style.opacity)>0||!me.skin._button_image_civil_engineering.style.opacity)?'inherit':'hidden';
				me.skin._button_image_civil_engineering.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_civil_engineering.ggVideoNotLoaded) {
					me.skin._video_civil_engineering.ggInitMedia(me.skin._video_civil_engineering.ggVideoSource);
				}
				me.skin._video_civil_engineering.style[domTransition]='none';
				me.skin._video_civil_engineering.style.visibility=(Number(me.skin._video_civil_engineering.style.opacity)>0||!me.skin._video_civil_engineering.style.opacity)?'inherit':'hidden';
				me.skin._video_civil_engineering.ggVisible=true;
				me.skin._header_text_civil_engineering.style[domTransition]='none';
				me.skin._header_text_civil_engineering.style.visibility=(Number(me.skin._header_text_civil_engineering.style.opacity)>0||!me.skin._header_text_civil_engineering.style.opacity)?'inherit':'hidden';
				me.skin._header_text_civil_engineering.ggVisible=true;
				me.skin._body_text_civil_engineering.style[domTransition]='none';
				me.skin._body_text_civil_engineering.style.visibility=(Number(me.skin._body_text_civil_engineering.style.opacity)>0||!me.skin._body_text_civil_engineering.style.opacity)?'inherit':'hidden';
				me.skin._body_text_civil_engineering.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._construction_video_pin=document.createElement('div');
			this._construction_video_pin__img=document.createElement('img');
			this._construction_video_pin__img.className='ggskin ggskin_button';
			this._construction_video_pin__img.setAttribute('src',basePath + 'images/construction_video_pin.png');
			this._construction_video_pin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._construction_video_pin__img.className='ggskin ggskin_button';
			this._construction_video_pin__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._construction_video_pin__img);
			this._construction_video_pin.appendChild(this._construction_video_pin__img);
			this._construction_video_pin.ggId="Construction video pin";
			this._construction_video_pin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._construction_video_pin.ggVisible=true;
			this._construction_video_pin.className='ggskin ggskin_button ';
			this._construction_video_pin.ggType='button';
			hs ='';
			hs+='height : 148px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 114px;';
			hs+='pointer-events:auto;';
			this._construction_video_pin.setAttribute('style',hs);
			this._construction_video_pin.style[domTransform + 'Origin']='50% 50%';
			me._construction_video_pin.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._construction_video_pin.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._construction_video_pin.onmouseover=function (e) {
				me._construction_video_pin__img.src=basePath + 'images/construction_video_pin__o.png';
			}
			this._construction_video_pin.onmouseout=function (e) {
				me._construction_video_pin__img.src=basePath + 'images/construction_video_pin.png';
			}
			this._construction_video_pin.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._construction_video_pin);
			this._civil_engineering_pin_title=document.createElement('div');
			this._civil_engineering_pin_title__text=document.createElement('div');
			this._civil_engineering_pin_title.className='ggskin ggskin_textdiv';
			this._civil_engineering_pin_title.ggTextDiv=this._civil_engineering_pin_title__text;
			this._civil_engineering_pin_title.ggId="Civil Engineering pin title";
			this._civil_engineering_pin_title.ggLeft=-153;
			this._civil_engineering_pin_title.ggTop=85;
			this._civil_engineering_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._civil_engineering_pin_title.ggVisible=true;
			this._civil_engineering_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._civil_engineering_pin_title.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._civil_engineering_pin_title.setAttribute('style',hs);
			this._civil_engineering_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._civil_engineering_pin_title__text.setAttribute('style',hs);
			this._civil_engineering_pin_title__text.innerHTML="<b>Civil Engineering<\/b>";
			this._civil_engineering_pin_title.appendChild(this._civil_engineering_pin_title__text);
			me._civil_engineering_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._civil_engineering_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._civil_engineering_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._civil_engineering_pin_title);
		} else
		if (hotspot.skinid=='Construction Information') {
			this.__div=document.createElement('div');
			this.__div.ggId="Construction Information";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._box_construction_information.style[domTransition]='none';
				me.skin._box_construction_information.style.visibility=(Number(me.skin._box_construction_information.style.opacity)>0||!me.skin._box_construction_information.style.opacity)?'inherit':'hidden';
				me.skin._box_construction_information.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_construction_information.ggVideoNotLoaded) {
					me.skin._video_construction_information.ggInitMedia(me.skin._video_construction_information.ggVideoSource);
				}
				me.skin._video_construction_information.style[domTransition]='none';
				me.skin._video_construction_information.style.visibility=(Number(me.skin._video_construction_information.style.opacity)>0||!me.skin._video_construction_information.style.opacity)?'inherit':'hidden';
				me.skin._video_construction_information.ggVisible=true;
				me.skin._header_text_construction_information.style[domTransition]='none';
				me.skin._header_text_construction_information.style.visibility=(Number(me.skin._header_text_construction_information.style.opacity)>0||!me.skin._header_text_construction_information.style.opacity)?'inherit':'hidden';
				me.skin._header_text_construction_information.ggVisible=true;
				me.skin._body_text_construction_information.style[domTransition]='none';
				me.skin._body_text_construction_information.style.visibility=(Number(me.skin._body_text_construction_information.style.opacity)>0||!me.skin._body_text_construction_information.style.opacity)?'inherit':'hidden';
				me.skin._body_text_construction_information.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._construction_info_pin=document.createElement('div');
			this._construction_info_pin__img=document.createElement('img');
			this._construction_info_pin__img.className='ggskin ggskin_button';
			this._construction_info_pin__img.setAttribute('src',basePath + 'images/construction_info_pin.png');
			this._construction_info_pin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._construction_info_pin__img.className='ggskin ggskin_button';
			this._construction_info_pin__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._construction_info_pin__img);
			this._construction_info_pin.appendChild(this._construction_info_pin__img);
			this._construction_info_pin.ggId="Construction info pin";
			this._construction_info_pin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._construction_info_pin.ggVisible=true;
			this._construction_info_pin.className='ggskin ggskin_button ';
			this._construction_info_pin.ggType='button';
			hs ='';
			hs+='height : 146px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 111px;';
			hs+='pointer-events:auto;';
			this._construction_info_pin.setAttribute('style',hs);
			this._construction_info_pin.style[domTransform + 'Origin']='50% 50%';
			me._construction_info_pin.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._construction_info_pin.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._construction_info_pin.onmouseover=function (e) {
				me._construction_info_pin__img.src=basePath + 'images/construction_info_pin__o.png';
			}
			this._construction_info_pin.onmouseout=function (e) {
				me._construction_info_pin__img.src=basePath + 'images/construction_info_pin.png';
			}
			this._construction_info_pin.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._construction_info_pin);
			this._construction_information_pin_title=document.createElement('div');
			this._construction_information_pin_title__text=document.createElement('div');
			this._construction_information_pin_title.className='ggskin ggskin_textdiv';
			this._construction_information_pin_title.ggTextDiv=this._construction_information_pin_title__text;
			this._construction_information_pin_title.ggId="Construction information pin title";
			this._construction_information_pin_title.ggLeft=-153;
			this._construction_information_pin_title.ggTop=85;
			this._construction_information_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._construction_information_pin_title.ggVisible=true;
			this._construction_information_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._construction_information_pin_title.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._construction_information_pin_title.setAttribute('style',hs);
			this._construction_information_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._construction_information_pin_title__text.setAttribute('style',hs);
			this._construction_information_pin_title__text.innerHTML="<b>Information<\/b>";
			this._construction_information_pin_title.appendChild(this._construction_information_pin_title__text);
			me._construction_information_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._construction_information_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._construction_information_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._construction_information_pin_title);
		} else
		if (hotspot.skinid=='Human Resources') {
			this.__div=document.createElement('div');
			this.__div.ggId="Human Resources";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_human_resources.ggVideoNotLoaded) {
					me.skin._video_human_resources.ggInitMedia(me.skin._video_human_resources.ggVideoSource);
				}
				me.skin._video_human_resources.style[domTransition]='none';
				me.skin._video_human_resources.style.visibility=(Number(me.skin._video_human_resources.style.opacity)>0||!me.skin._video_human_resources.style.opacity)?'inherit':'hidden';
				me.skin._video_human_resources.ggVisible=true;
				me.skin._header_text_human_resources.style[domTransition]='none';
				me.skin._header_text_human_resources.style.visibility=(Number(me.skin._header_text_human_resources.style.opacity)>0||!me.skin._header_text_human_resources.style.opacity)?'inherit':'hidden';
				me.skin._header_text_human_resources.ggVisible=true;
				me.skin._body_text_human_resources.style[domTransition]='none';
				me.skin._body_text_human_resources.style.visibility=(Number(me.skin._body_text_human_resources.style.opacity)>0||!me.skin._body_text_human_resources.style.opacity)?'inherit':'hidden';
				me.skin._body_text_human_resources.ggVisible=true;
				me.skin._box_human_resources.style[domTransition]='none';
				me.skin._box_human_resources.style.visibility=(Number(me.skin._box_human_resources.style.opacity)>0||!me.skin._box_human_resources.style.opacity)?'inherit':'hidden';
				me.skin._box_human_resources.ggVisible=true;
				me.skin._button_image_human_resources.style[domTransition]='none';
				me.skin._button_image_human_resources.style.visibility=(Number(me.skin._button_image_human_resources.style.opacity)>0||!me.skin._button_image_human_resources.style.opacity)?'inherit':'hidden';
				me.skin._button_image_human_resources.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._corporate_video_icon2=document.createElement('div');
			this._corporate_video_icon2__img=document.createElement('img');
			this._corporate_video_icon2__img.className='ggskin ggskin_button';
			this._corporate_video_icon2__img.setAttribute('src',basePath + 'images/corporate_video_icon2.png');
			this._corporate_video_icon2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._corporate_video_icon2__img.className='ggskin ggskin_button';
			this._corporate_video_icon2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._corporate_video_icon2__img);
			this._corporate_video_icon2.appendChild(this._corporate_video_icon2__img);
			this._corporate_video_icon2.ggId="Corporate video icon";
			this._corporate_video_icon2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._corporate_video_icon2.ggVisible=true;
			this._corporate_video_icon2.className='ggskin ggskin_button ';
			this._corporate_video_icon2.ggType='button';
			hs ='';
			hs+='height : 148px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 112px;';
			hs+='pointer-events:auto;';
			this._corporate_video_icon2.setAttribute('style',hs);
			this._corporate_video_icon2.style[domTransform + 'Origin']='50% 50%';
			me._corporate_video_icon2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._corporate_video_icon2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._corporate_video_icon2.onmouseover=function (e) {
				me._corporate_video_icon2__img.src=basePath + 'images/corporate_video_icon2__o.png';
			}
			this._corporate_video_icon2.onmouseout=function (e) {
				me._corporate_video_icon2__img.src=basePath + 'images/corporate_video_icon2.png';
			}
			this._corporate_video_icon2.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._corporate_video_icon2);
			this._human_resources_pin_title=document.createElement('div');
			this._human_resources_pin_title__text=document.createElement('div');
			this._human_resources_pin_title.className='ggskin ggskin_textdiv';
			this._human_resources_pin_title.ggTextDiv=this._human_resources_pin_title__text;
			this._human_resources_pin_title.ggId="Human Resources pin title";
			this._human_resources_pin_title.ggLeft=-153;
			this._human_resources_pin_title.ggTop=85;
			this._human_resources_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._human_resources_pin_title.ggVisible=true;
			this._human_resources_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._human_resources_pin_title.ggType='text';
			hs ='';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._human_resources_pin_title.setAttribute('style',hs);
			this._human_resources_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._human_resources_pin_title__text.setAttribute('style',hs);
			this._human_resources_pin_title__text.innerHTML="Human Resources";
			this._human_resources_pin_title.appendChild(this._human_resources_pin_title__text);
			me._human_resources_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._human_resources_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._human_resources_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._human_resources_pin_title);
		} else
		if (hotspot.skinid=='Information Technology') {
			this.__div=document.createElement('div');
			this.__div.ggId="Information Technology";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_information_technology.ggVideoNotLoaded) {
					me.skin._video_information_technology.ggInitMedia(me.skin._video_information_technology.ggVideoSource);
				}
				me.skin._video_information_technology.style[domTransition]='none';
				me.skin._video_information_technology.style.visibility=(Number(me.skin._video_information_technology.style.opacity)>0||!me.skin._video_information_technology.style.opacity)?'inherit':'hidden';
				me.skin._video_information_technology.ggVisible=true;
				me.skin._header_text_information_technology.style[domTransition]='none';
				me.skin._header_text_information_technology.style.visibility=(Number(me.skin._header_text_information_technology.style.opacity)>0||!me.skin._header_text_information_technology.style.opacity)?'inherit':'hidden';
				me.skin._header_text_information_technology.ggVisible=true;
				me.skin._body_text_information_technology.style[domTransition]='none';
				me.skin._body_text_information_technology.style.visibility=(Number(me.skin._body_text_information_technology.style.opacity)>0||!me.skin._body_text_information_technology.style.opacity)?'inherit':'hidden';
				me.skin._body_text_information_technology.ggVisible=true;
				me.skin._box_information_technology.style[domTransition]='none';
				me.skin._box_information_technology.style.visibility=(Number(me.skin._box_information_technology.style.opacity)>0||!me.skin._box_information_technology.style.opacity)?'inherit':'hidden';
				me.skin._box_information_technology.ggVisible=true;
				me.skin._button_image_information_technology.style[domTransition]='none';
				me.skin._button_image_information_technology.style.visibility=(Number(me.skin._button_image_information_technology.style.opacity)>0||!me.skin._button_image_information_technology.style.opacity)?'inherit':'hidden';
				me.skin._button_image_information_technology.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._corporate_video_icon1=document.createElement('div');
			this._corporate_video_icon1__img=document.createElement('img');
			this._corporate_video_icon1__img.className='ggskin ggskin_button';
			this._corporate_video_icon1__img.setAttribute('src',basePath + 'images/corporate_video_icon1.png');
			this._corporate_video_icon1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._corporate_video_icon1__img.className='ggskin ggskin_button';
			this._corporate_video_icon1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._corporate_video_icon1__img);
			this._corporate_video_icon1.appendChild(this._corporate_video_icon1__img);
			this._corporate_video_icon1.ggId="Corporate video icon";
			this._corporate_video_icon1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._corporate_video_icon1.ggVisible=true;
			this._corporate_video_icon1.className='ggskin ggskin_button ';
			this._corporate_video_icon1.ggType='button';
			hs ='';
			hs+='height : 148px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 112px;';
			hs+='pointer-events:auto;';
			this._corporate_video_icon1.setAttribute('style',hs);
			this._corporate_video_icon1.style[domTransform + 'Origin']='50% 50%';
			me._corporate_video_icon1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._corporate_video_icon1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._corporate_video_icon1.onmouseover=function (e) {
				me._corporate_video_icon1__img.src=basePath + 'images/corporate_video_icon1__o.png';
			}
			this._corporate_video_icon1.onmouseout=function (e) {
				me._corporate_video_icon1__img.src=basePath + 'images/corporate_video_icon1.png';
			}
			this._corporate_video_icon1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._corporate_video_icon1);
			this._information_technology_pin_title=document.createElement('div');
			this._information_technology_pin_title__text=document.createElement('div');
			this._information_technology_pin_title.className='ggskin ggskin_textdiv';
			this._information_technology_pin_title.ggTextDiv=this._information_technology_pin_title__text;
			this._information_technology_pin_title.ggId="Information Technology pin title";
			this._information_technology_pin_title.ggLeft=-153;
			this._information_technology_pin_title.ggTop=85;
			this._information_technology_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._information_technology_pin_title.ggVisible=true;
			this._information_technology_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._information_technology_pin_title.ggType='text';
			hs ='';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._information_technology_pin_title.setAttribute('style',hs);
			this._information_technology_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._information_technology_pin_title__text.setAttribute('style',hs);
			this._information_technology_pin_title__text.innerHTML="Information Technology";
			this._information_technology_pin_title.appendChild(this._information_technology_pin_title__text);
			me._information_technology_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._information_technology_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._information_technology_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._information_technology_pin_title);
		} else
		if (hotspot.skinid=='Marketing') {
			this.__div=document.createElement('div');
			this.__div.ggId="Marketing";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_marketing.ggVideoNotLoaded) {
					me.skin._video_marketing.ggInitMedia(me.skin._video_marketing.ggVideoSource);
				}
				me.skin._video_marketing.style[domTransition]='none';
				me.skin._video_marketing.style.visibility=(Number(me.skin._video_marketing.style.opacity)>0||!me.skin._video_marketing.style.opacity)?'inherit':'hidden';
				me.skin._video_marketing.ggVisible=true;
				me.skin._header_text_marketing.style[domTransition]='none';
				me.skin._header_text_marketing.style.visibility=(Number(me.skin._header_text_marketing.style.opacity)>0||!me.skin._header_text_marketing.style.opacity)?'inherit':'hidden';
				me.skin._header_text_marketing.ggVisible=true;
				me.skin._body_text_marketing.style[domTransition]='none';
				me.skin._body_text_marketing.style.visibility=(Number(me.skin._body_text_marketing.style.opacity)>0||!me.skin._body_text_marketing.style.opacity)?'inherit':'hidden';
				me.skin._body_text_marketing.ggVisible=true;
				me.skin._box_marketing.style[domTransition]='none';
				me.skin._box_marketing.style.visibility=(Number(me.skin._box_marketing.style.opacity)>0||!me.skin._box_marketing.style.opacity)?'inherit':'hidden';
				me.skin._box_marketing.ggVisible=true;
				me.skin._button_image_marketing.style[domTransition]='none';
				me.skin._button_image_marketing.style.visibility=(Number(me.skin._button_image_marketing.style.opacity)>0||!me.skin._button_image_marketing.style.opacity)?'inherit':'hidden';
				me.skin._button_image_marketing.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._corporate_video_icon0=document.createElement('div');
			this._corporate_video_icon0__img=document.createElement('img');
			this._corporate_video_icon0__img.className='ggskin ggskin_button';
			this._corporate_video_icon0__img.setAttribute('src',basePath + 'images/corporate_video_icon0.png');
			this._corporate_video_icon0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._corporate_video_icon0__img.className='ggskin ggskin_button';
			this._corporate_video_icon0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._corporate_video_icon0__img);
			this._corporate_video_icon0.appendChild(this._corporate_video_icon0__img);
			this._corporate_video_icon0.ggId="Corporate video icon";
			this._corporate_video_icon0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._corporate_video_icon0.ggVisible=true;
			this._corporate_video_icon0.className='ggskin ggskin_button ';
			this._corporate_video_icon0.ggType='button';
			hs ='';
			hs+='height : 148px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 112px;';
			hs+='pointer-events:auto;';
			this._corporate_video_icon0.setAttribute('style',hs);
			this._corporate_video_icon0.style[domTransform + 'Origin']='50% 50%';
			me._corporate_video_icon0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._corporate_video_icon0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._corporate_video_icon0.onmouseover=function (e) {
				me._corporate_video_icon0__img.src=basePath + 'images/corporate_video_icon0__o.png';
			}
			this._corporate_video_icon0.onmouseout=function (e) {
				me._corporate_video_icon0__img.src=basePath + 'images/corporate_video_icon0.png';
			}
			this._corporate_video_icon0.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._corporate_video_icon0);
			this._marketing_pin_title=document.createElement('div');
			this._marketing_pin_title__text=document.createElement('div');
			this._marketing_pin_title.className='ggskin ggskin_textdiv';
			this._marketing_pin_title.ggTextDiv=this._marketing_pin_title__text;
			this._marketing_pin_title.ggId="Marketing pin title";
			this._marketing_pin_title.ggLeft=-153;
			this._marketing_pin_title.ggTop=85;
			this._marketing_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._marketing_pin_title.ggVisible=true;
			this._marketing_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._marketing_pin_title.ggType='text';
			hs ='';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._marketing_pin_title.setAttribute('style',hs);
			this._marketing_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._marketing_pin_title__text.setAttribute('style',hs);
			this._marketing_pin_title__text.innerHTML="Marketing";
			this._marketing_pin_title.appendChild(this._marketing_pin_title__text);
			me._marketing_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._marketing_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._marketing_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._marketing_pin_title);
		} else
		if (hotspot.skinid=='Finance') {
			this.__div=document.createElement('div');
			this.__div.ggId="Finance";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				if (me.skin._video_finance.ggVideoNotLoaded) {
					me.skin._video_finance.ggInitMedia(me.skin._video_finance.ggVideoSource);
				}
				me.skin._video_finance.style[domTransition]='none';
				me.skin._video_finance.style.visibility=(Number(me.skin._video_finance.style.opacity)>0||!me.skin._video_finance.style.opacity)?'inherit':'hidden';
				me.skin._video_finance.ggVisible=true;
				me.skin._header_text_finance.style[domTransition]='none';
				me.skin._header_text_finance.style.visibility=(Number(me.skin._header_text_finance.style.opacity)>0||!me.skin._header_text_finance.style.opacity)?'inherit':'hidden';
				me.skin._header_text_finance.ggVisible=true;
				me.skin._body_text_finance.style[domTransition]='none';
				me.skin._body_text_finance.style.visibility=(Number(me.skin._body_text_finance.style.opacity)>0||!me.skin._body_text_finance.style.opacity)?'inherit':'hidden';
				me.skin._body_text_finance.ggVisible=true;
				me.skin._box_finance.style[domTransition]='none';
				me.skin._box_finance.style.visibility=(Number(me.skin._box_finance.style.opacity)>0||!me.skin._box_finance.style.opacity)?'inherit':'hidden';
				me.skin._box_finance.ggVisible=true;
				me.skin._button_image_finance.style[domTransition]='none';
				me.skin._button_image_finance.style.visibility=(Number(me.skin._button_image_finance.style.opacity)>0||!me.skin._button_image_finance.style.opacity)?'inherit':'hidden';
				me.skin._button_image_finance.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._corporate_video_icon=document.createElement('div');
			this._corporate_video_icon__img=document.createElement('img');
			this._corporate_video_icon__img.className='ggskin ggskin_button';
			this._corporate_video_icon__img.setAttribute('src',basePath + 'images/corporate_video_icon.png');
			this._corporate_video_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._corporate_video_icon__img.className='ggskin ggskin_button';
			this._corporate_video_icon__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._corporate_video_icon__img);
			this._corporate_video_icon.appendChild(this._corporate_video_icon__img);
			this._corporate_video_icon.ggId="Corporate video icon";
			this._corporate_video_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._corporate_video_icon.ggVisible=true;
			this._corporate_video_icon.className='ggskin ggskin_button ';
			this._corporate_video_icon.ggType='button';
			hs ='';
			hs+='height : 148px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 112px;';
			hs+='pointer-events:auto;';
			this._corporate_video_icon.setAttribute('style',hs);
			this._corporate_video_icon.style[domTransform + 'Origin']='50% 50%';
			me._corporate_video_icon.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._corporate_video_icon.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._corporate_video_icon.onmouseover=function (e) {
				me._corporate_video_icon__img.src=basePath + 'images/corporate_video_icon__o.png';
			}
			this._corporate_video_icon.onmouseout=function (e) {
				me._corporate_video_icon__img.src=basePath + 'images/corporate_video_icon.png';
			}
			this._corporate_video_icon.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._corporate_video_icon);
			this._finance_pin_title=document.createElement('div');
			this._finance_pin_title__text=document.createElement('div');
			this._finance_pin_title.className='ggskin ggskin_textdiv';
			this._finance_pin_title.ggTextDiv=this._finance_pin_title__text;
			this._finance_pin_title.ggId="Finance pin title";
			this._finance_pin_title.ggLeft=-153;
			this._finance_pin_title.ggTop=85;
			this._finance_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._finance_pin_title.ggVisible=true;
			this._finance_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._finance_pin_title.ggType='text';
			hs ='';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._finance_pin_title.setAttribute('style',hs);
			this._finance_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._finance_pin_title__text.setAttribute('style',hs);
			this._finance_pin_title__text.innerHTML="Finance";
			this._finance_pin_title.appendChild(this._finance_pin_title__text);
			me._finance_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._finance_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._finance_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._finance_pin_title);
		} else
		if (hotspot.skinid=='Corporate Information') {
			this.__div=document.createElement('div');
			this.__div.ggId="Corporate Information";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 962px;';
			hs+='position : absolute;';
			hs+='top : 433px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility=(Number(me.skin._close0.style.opacity)>0||!me.skin._close0.style.opacity)?'inherit':'hidden';
				me.skin._close0.ggVisible=true;
				me.skin._video_screentint_youtube.style[domTransition]='none';
				me.skin._video_screentint_youtube.style.visibility=(Number(me.skin._video_screentint_youtube.style.opacity)>0||!me.skin._video_screentint_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_youtube.ggVisible=true;
				me.skin._box_corporate_information.style[domTransition]='none';
				me.skin._box_corporate_information.style.visibility=(Number(me.skin._box_corporate_information.style.opacity)>0||!me.skin._box_corporate_information.style.opacity)?'inherit':'hidden';
				me.skin._box_corporate_information.ggVisible=true;
				if (me.skin._video_corporate_information.ggVideoNotLoaded) {
					me.skin._video_corporate_information.ggInitMedia(me.skin._video_corporate_information.ggVideoSource);
				}
				me.skin._video_corporate_information.style[domTransition]='none';
				me.skin._video_corporate_information.style.visibility=(Number(me.skin._video_corporate_information.style.opacity)>0||!me.skin._video_corporate_information.style.opacity)?'inherit':'hidden';
				me.skin._video_corporate_information.ggVisible=true;
				me.skin._body_text_corporate_information.style[domTransition]='none';
				me.skin._body_text_corporate_information.style.visibility=(Number(me.skin._body_text_corporate_information.style.opacity)>0||!me.skin._body_text_corporate_information.style.opacity)?'inherit':'hidden';
				me.skin._body_text_corporate_information.ggVisible=true;
				me.skin._header_text_corporate_information.style[domTransition]='none';
				me.skin._header_text_corporate_information.style.visibility=(Number(me.skin._header_text_corporate_information.style.opacity)>0||!me.skin._header_text_corporate_information.style.opacity)?'inherit':'hidden';
				me.skin._header_text_corporate_information.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._image_1=document.createElement('div');
			this._image_1__img=document.createElement('img');
			this._image_1__img.className='ggskin ggskin_button';
			this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
			this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_1__img.className='ggskin ggskin_button';
			this._image_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1__img);
			this._image_1.appendChild(this._image_1__img);
			this._image_1.ggId="Image 1";
			this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_1.ggVisible=true;
			this._image_1.className='ggskin ggskin_button ';
			this._image_1.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 147px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 113px;';
			hs+='pointer-events:auto;';
			this._image_1.setAttribute('style',hs);
			this._image_1.style[domTransform + 'Origin']='50% 50%';
			me._image_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_1.onmouseover=function (e) {
				me._image_1__img.src=basePath + 'images/image_1__o.png';
			}
			this._image_1.onmouseout=function (e) {
				me._image_1__img.src=basePath + 'images/image_1.png';
			}
			this._image_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_1);
			this._corporate_information_pin_title=document.createElement('div');
			this._corporate_information_pin_title__text=document.createElement('div');
			this._corporate_information_pin_title.className='ggskin ggskin_textdiv';
			this._corporate_information_pin_title.ggTextDiv=this._corporate_information_pin_title__text;
			this._corporate_information_pin_title.ggId="Corporate Information pin title";
			this._corporate_information_pin_title.ggLeft=-153;
			this._corporate_information_pin_title.ggTop=85;
			this._corporate_information_pin_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._corporate_information_pin_title.ggVisible=true;
			this._corporate_information_pin_title.className='ggskin ggskin_text Graphik-Bold-Web-large';
			this._corporate_information_pin_title.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 43px;';
			hs+='left : -153px;';
			hs+='position : absolute;';
			hs+='top : 85px;';
			hs+='visibility : inherit;';
			hs+='width : 297px;';
			hs+='pointer-events:auto;';
			this._corporate_information_pin_title.setAttribute('style',hs);
			this._corporate_information_pin_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.588235);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(99,99,99,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 10px 21px 10px 21px;';
			hs+='overflow: hidden;';
			this._corporate_information_pin_title__text.setAttribute('style',hs);
			this._corporate_information_pin_title__text.innerHTML="Information";
			this._corporate_information_pin_title.appendChild(this._corporate_information_pin_title__text);
			me._corporate_information_pin_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._corporate_information_pin_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._corporate_information_pin_title.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._corporate_information_pin_title);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="Arrow";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 958px;';
			hs+='position : absolute;';
			hs+='top : 367px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			me.__div.ggCurrentLogicStateScaling = -1;
			this.__div.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width <= 1440)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me.__div.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me.__div.ggCurrentLogicStateScaling = newLogicStateScaling;
					me.__div.style[domTransition]='' + cssPrefix + 'transform none';
					if (me.__div.ggCurrentLogicStateScaling == 0) {
						me.__div.ggParameter.sx = 0.7;
						me.__div.ggParameter.sy = 0.7;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
					else {
						me.__div.ggParameter.sx = 1;
						me.__div.ggParameter.sy = 1;
						me.__div.style[domTransform]=parameterToTransform(me.__div.ggParameter);
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				me.__div.ggUpdateConditionResize();
			}
			this._arrow_image=document.createElement('div');
			this._arrow_image__img=document.createElement('img');
			this._arrow_image__img.className='ggskin ggskin_image';
			this._arrow_image__img.setAttribute('src',basePath + 'images/arrow_image.png');
			this._arrow_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._arrow_image__img.className='ggskin ggskin_image';
			this._arrow_image__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._arrow_image__img);
			this._arrow_image.appendChild(this._arrow_image__img);
			this._arrow_image.ggId="Arrow image";
			this._arrow_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._arrow_image.ggVisible=true;
			this._arrow_image.className='ggskin ggskin_image ';
			this._arrow_image.ggType='image';
			hs ='';
			hs+='height : 200px;';
			hs+='left : -98px;';
			hs+='position : absolute;';
			hs+='top : -55px;';
			hs+='visibility : inherit;';
			hs+='width : 200px;';
			hs+='pointer-events:auto;';
			this._arrow_image.setAttribute('style',hs);
			this._arrow_image.style[domTransform + 'Origin']='50% 50%';
			me._arrow_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._arrow_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._arrow_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._arrow_image);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};