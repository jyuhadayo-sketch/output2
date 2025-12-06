// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: mapskin.ggsk
// Generated 2025-12-06T15:14:38

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
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
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
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
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
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
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 2px solid #6a6a6a;';
		hs+='height : 250px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me.divSkin.appendChild(me._map_1);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : 266px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
			me._map_1__img.setAttribute('loading', 'lazy');
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 20;
					me._map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		player.addListener('changenode', function(event) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
		});
		player.addListener('configloaded', function(event) {
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		player.addListener('positionchanged', function(event) {
			me._map_1.ggRadar.update();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};