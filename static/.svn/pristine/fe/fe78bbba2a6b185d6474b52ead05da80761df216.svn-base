define([
    'jquery',
    'backbone',
    'text!templates/electronicMap.html',
    'js/collections/mapElements',
    'js/widgets/hideShowBar',
    'mapapiMin',
    'distanceTool',
    'drawingManager',
    'markerClusterer',
    'rectangleZoom',
    'searchInRectangle',
    'textIconOverlay',
    'geoutilsMin',
    'luShu',
    'nicescroll'
], function($,Backbone,electronicMapTpl,MapElements) {
    App.Views.ElectronicMap = Backbone.View.extend({
        /*事件*/
        events: {
            'click #reset': 'resetClick',
            'click #overviewMap': 'overviewMapClick',
            'click #mapType': 'mapTypeClick',
            'click #scale': 'scaleClick',
            'click #pointJump': 'pointJumpClick',
            'click #pointNewImage': 'pointNewImageClick',
            'click #pointDrage': 'pointDrageClick',
            'click #coverShowHide': 'coverShowHideClick',
            'click #textLabel': 'textLabelClick',
            'click #coverTextLabel': 'coverTextLabelClick',
            'click #coverInfo': 'coverInfoClick',
            'click #multiplePoints': 'multiplePointsClick',
            'click #deleteSpecificPoint': 'deleteSpecificPointClick',
            'click #addCustomCover': 'addCustomCoverClick',
            'click #addTextInfo': 'addTextInfoClick',
            'click #addGraphicCombination': 'addGraphicCombinationClick',
            'click #mapRightHandMenu': 'mapRightHandMenuClick',
            'click #coverRightHandMenu': 'coverRightHandMenuClick',
            'click #mousePullBox': 'mousePullBoxClick',
            'click #mouseDistance': 'mouseDistanceClick',
            'click #mousePickUpCoordinates': 'mousePickUpCoordinatesClick',
            'click #mouseDraw': 'mouseDrawClick',
            'click #frameSelection': 'frameSelectionClick',
            'click #AClassification': 'AClassificationClick',
            'click #BClassification': 'BClassificationClick',
            'click #singlePointMovement': 'singlePointMovementClick',
            'click #electronicMap': 'electronicMapClick',
            'click #localPreview': 'localPreviewClick',
            'click #closeDualDisplay': 'closeDualDisplayClick',

            'click #widgetTitle': 'widgetTitleClick',
            'click #coverTitle': 'coverTitleClick',
            'click #infoWindowTitle': 'infoWindowTitleClick',
            'click #rightHandMenuTitle': 'rightHandMenuTitleClick',
            'click #mouseOperateTitle': 'mouseOperateTitleClick',
            'click #serverTitle': 'serverTitleClick',
            'click #classificationDisplayTitle': 'classificationDisplayTitleClick',
            'click #dualDisplayTitle': 'dualDisplayTitleClick',
            'click #GPSTitle': 'GPSTitleClick',

            'click #fullscreen': 'fullscreenClick',
            'click #MarkBtn': 'MarkBtnClick',
            'click #searchBtn': 'searchBtnClick',

            'click #Mark': 'MarkClick',
            'click #search': 'searchClick',
            'click #baiduMap': 'baiduMapClick',

        },
        /*初始化*/
        initialize: function() {
            this.$el.html(electronicMapTpl);

            //$('.nav').css('display', 'none');

            this.map = new BMap.Map("baiduMap");
            this.map_location = new BMap.Point(109.421624,24.353349);
            this.map.centerAndZoom(this.map_location, 11);

            /*添加地图控件*/
            this.map.addControl(new BMap.NavigationControl());    //添加地图平移缩放控件
            this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            this.map.enableKeyboard(true);

            this.initOverviewMap();
            this.initMapType();
            this.initScale();
            this.initPointJump();
            this.initPointNewImage();
            this.initPointDrage();
            this.initCoverShowHide();
            this.initTextLabel();
            this.initCoverTextLabel();
            this.initCoverInfo();
            this.initMultiplePoints();
            this.initAddCustomCover();
            this.initAddTextInfo();
            this.initAddGraphicCombination();
            this.initMapRightHandMenu();
            this.initCoverRightHandMenu();
            this.initMousePullBox();
            this.initMouseDistance();
            this.initMousePickUpCoordinates();
            this.initMouseDraw();
            this.initFrameSelection();
            this.initClassification();
            this.initSinglePointMovement();
            //this.$el.find('#overviewMap').click(this.initOverviewMap);

            this.render();

            this.$el.find('#servers').niceScroll({
                cursorborder: "0",
                cursorcolor: "rgba(226, 222, 222, 1)",
                cursorborderradius: 3,
                bouncescroll: true
            });

            this.$el.find('.left').hideShowBar();

        },
        /*渲染*/
        render: function() {

        },
        /*清除所有覆盖物*/
        resetClick: function() {
            this.map.clearOverlays();
        },
        /*添加鹰眼视图*/
        initOverviewMap: function() {
            this.overviewMap = new BMap.OverviewMapControl();
        },
        overviewMapClick: function() {
            this.map.addControl(this.overviewMap);
        },
        /*添加地图类型控件*/
        initMapType: function() {
            this.mapTypeControl = new BMap.MapTypeControl( {
                mapTypes:[BMAP_NORMAL_MAP]
            });
        },
        mapTypeClick: function() {
            //this.initMapType();
            this.map.addControl(this.mapTypeControl);
        },
        /*添加比例尺控件*/
        initScale: function() {
            this.scaleControl = new BMap.ScaleControl({
                offset: new BMap.Size(15, 3),
                anchor: BMAP_ANCHOR_BOTTOM_LEFT
            });
            //this.initMapType();
            //this.mapTypeClick();
        },
        scaleClick: function() {
            //this.mapTypeClick();
            //this.initScale();
            this.map.addControl(this.scaleControl);
        },
        /*设置点的跳动动画*/
        initPointJump: function() {
            this.marker_pointJump = new BMap.Marker(this.map_location);
        },
        pointJumpClick: function() {
            this.map.addOverlay(this.marker_pointJump);
            this.marker_pointJump.setAnimation(BMAP_ANIMATION_BOUNCE);
        },
        /*设置点的新图标*/
        initPointNewImage: function() {
            var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300,157));
            this.marker_pointNewImage = new BMap.Marker(this.map_location,{icon:myIcon});  // 创建标注
        },
        pointNewImageClick: function() {
            this.map.addOverlay(this.marker_pointNewImage);  // 将标注添加到地图中
            this.marker_pointNewImage.setAnimation(BMAP_ANIMATION_BOUNCE);
        },
        /*设置点可拖拽*/
        initPointDrage: function() {
           this.marker_pointDrage = new BMap.Marker(new BMap.Point(109.4,24.3));
        },
        pointDrageClick: function() {
            this.map.addOverlay(this.marker_pointDrage);
            this.marker_pointDrage.enableDragging();
        },
        /*设置覆盖物显示和隐藏*/
        initCoverShowHide: function() {
            this.polylineShowHide = new BMap.Polyline([
                new BMap.Point(109.4,24.3),
                new BMap.Point(109.5,24.4),
                new BMap.Point(109.2,24.4)
            ], {
                strokeColor:"blue",
                strokeWeight:6,
                strokeOpacity:0.5
            });
            this.showHideSign = true;
        },
        coverShowHideClick: function() {
            this.map.addOverlay(this.polylineShowHide);
            if(this.showHideSign){
                this.polylineShowHide.show();
                this.showHideSign = false;
            }else {
                this.polylineShowHide.hide();
                this.showHideSign = true;
            }
        },
        /*添加文字标签*/
        initTextLabel: function() {
            var opts = {
                position:this.map_location,
                offset: new BMap.Size(30,-30)
            }
            this.label = new BMap.Label("欢迎使用百度地图，这是一个简单的文本哦!", opts);
            this.label.setStyle({
                color: "red",
                fontSize: "14px",
                height: "20px",
                lineHeight: "20px",
                fontFamily: "微软雅黑"
            });
        },
        textLabelClick: function() {
            this.map.addOverlay(this.label);
        },
        /*添加覆盖物文字标签*/
        initCoverTextLabel: function() {
            this.coverLabel = new BMap.Label("我是你的文字标签哦!", {
                offset: new BMap.Size(20,-10)
            });
        },
        coverTextLabelClick: function() {
            this.map.addOverlay(this.marker_pointDrage);
            this.marker_pointDrage.setLabel(this.coverLabel);
        },
        /*获取覆盖物信息 */
        initCoverInfo: function() {

        },
        coverInfoClick: function() {
            this.map.addOverlay(this.marker_pointDrage);
            var that = this;
            this.marker_pointDrage.addEventListener("click", function() {
                var pos = that.marker_pointDrage.getPosition();
                alert("marker的位置是：" + pos.lng + ", " + pos.lat);
            });
        },
        /*添加多个点*/
        initMultiplePoints: function() {

        },
        multiplePointsClick: function() {
            var bounds = this.map.getBounds();
            var sw = bounds.getSouthWest();
            var ne = bounds.getNorthEast();
            var lngSpan = Math.abs(sw.lng - ne.lng);
            var latSpan = Math.abs(ne.lat - sw.lat);
            for (var i = 0; i < 25; i ++) {
                var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
                var marker = new BMap.Marker(point);
                this.map.addOverlay(marker);
            }
        },
        /*删除多点中特定点*/
        deletePoint: function(point, label) {
            var marker = new BMap.Marker(point);
            this.map.addOverlay(marker);
            marker.setLabel(label);
            var that = this;

            marker.addEventListener("click", function() {
                if(marker.getLabel().content == "我是id=1"){
                    that.map.removeOverlay(marker);
                    alert("oh no,我被删除了!");
                    return false;
                }else {
                    alert("我不是id=1的点哦!");
                }
            });
        },
        deleteSpecificPointClick: function() {
            var bounds = this.map.getBounds();
            var sw = bounds.getSouthWest();
            var ne = bounds.getNorthEast();
            var lngSpan = Math.abs(sw.lng - ne.lng);
            var latSpan = Math.abs(ne.lat - sw.lat);
            for (var i = 0; i < 25; i ++) {
                var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
                var label = new BMap.Label("我是id=" + i, {
                    offset: new BMap.Size(20,-10)
                });
                this.deletePoint(point, label);
            }
        },
        /*添加自定义覆盖物,复杂的自定义覆盖物*/
        initAddCustomCover: function() {
            this.ComplexCustomOverlay = function(point, text, mouseoverText) {
                this._point = point;
                this._text = text;
                this._overText = mouseoverText;
            };

            this.ComplexCustomOverlay.prototype = new BMap.Overlay();
            this.ComplexCustomOverlay.prototype.initialize = function(map){
                this._map = map;
                var div = this._div = document.createElement("div");
                div.style.position = "absolute";
                div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
                div.style.backgroundColor = "#EE5D5B";
                div.style.border = "1px solid #BC3B3A";
                div.style.color = "white";
                div.style.height = "18px";
                div.style.padding = "2px";
                div.style.lineHeight = "18px";
                div.style.whiteSpace = "nowrap";
                div.style.MozUserSelect = "none";
                div.style.fontSize = "12px"
                var span = this._span = document.createElement("span");
                div.appendChild(span);
                span.appendChild(document.createTextNode(this._text));
                var that = this;

                var arrow = this._arrow = document.createElement("div");
                arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
                arrow.style.position = "absolute";
                arrow.style.width = "11px";
                arrow.style.height = "10px";
                arrow.style.top = "22px";
                arrow.style.left = "10px";
                arrow.style.overflow = "hidden";
                div.appendChild(arrow);

                div.onmouseover = function(){
                    this.style.backgroundColor = "#6BADCA";
                    this.style.borderColor = "#0000ff";
                    this.getElementsByTagName("span")[0].innerHTML = that._overText;
                    arrow.style.backgroundPosition = "0px -20px";
                }

                div.onmouseout = function(){
                    this.style.backgroundColor = "#EE5D5B";
                    this.style.borderColor = "#BC3B3A";
                    this.getElementsByTagName("span")[0].innerHTML = that._text;
                    arrow.style.backgroundPosition = "0px 0px";
                }

                map.getPanes().labelPane.appendChild(div);

                return div;
            }
            this.ComplexCustomOverlay.prototype.draw = function(){
                var map = this._map;
                var pixel = map.pointToOverlayPixel(this._point);
                this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
                this._div.style.top  = pixel.y - 30 + "px";
            }
        },
        addCustomCoverClick: function() {
            var txt = "柳州市", mouseoverTxt = txt + " " + parseInt(Math.random() * 1000,10) + "座桥" ;
            var myCompOverlay = new this.ComplexCustomOverlay(this.map_location,"柳州市",mouseoverTxt);
            this.map.addOverlay(myCompOverlay);
        },
        /*添加纯文本信息窗口*/
        initAddTextInfo: function() {
            var  opts_textInfo = {
                width: 200,
                height: 100,
                title: "柳州市",
                enableMessage:true,
                message:"欢迎来到柳州市!",
                offset: new BMap.Size(0,-20)
            }

            this.infoWindow_textInfo = new BMap.InfoWindow("地址：柳州市", opts_textInfo);
            this.marker_textInfo = new BMap.Marker(this.map_location);
        },
        addTextInfoClick: function() {
            var that = this;
            this.map.addOverlay(this.marker_textInfo);
            this.marker_textInfo.addEventListener("click", function() {
                that.map.openInfoWindow(that.infoWindow_textInfo, that.map_location);
            });
        },
        /*添加图文组合信息窗口*/
        initAddGraphicCombination: function() {
            var sContent =
                "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" +
                "<img style='float:right;margin:4px' id='imgDemo' src='http://app.baidu.com/map/images/tiananmen.jpg' width='139' height='104' title='天安门'/>" +
                "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
                "</div>";
            this.infoWindow = new BMap.InfoWindow(sContent);  // 创建信息
            this.marker_graphicCombination = new BMap.Marker(this.map_location);
        },
        addGraphicCombinationClick: function() {
            var that = this;
            this.map.addOverlay(this.marker_graphicCombination);
            this.marker_graphicCombination.addEventListener("click", function(){
                this.openInfoWindow(that.infoWindow);
                //图片加载完毕重绘infowindow
                document.getElementById('imgDemo').onload = function (){
                    that.infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
                }
            });
        },
        /*添加地图右键菜单*/
        initMapRightHandMenu: function() {
            this.menu = new BMap.ContextMenu();
            var that = this;

            var txtMenuItem = [{
                text: '放大',
                callback: function() {
                    that.map.zoomIn();
                }
            }, {
                text: '缩小',
                callback: function() {
                    that.map.zoomOut();
                }
            }];

            for(var i = 0; i < txtMenuItem.length; i++) {
                this.menu.addItem(new BMap.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback,500));
            }
        },
        mapRightHandMenuClick: function() {
            this.map.addContextMenu(this.menu);
        },
        /*添加覆盖物右键菜单*/
        initCoverRightHandMenu: function() {
            var that = this;
            var point_coverRightHandMenu = new BMap.Point(109.5,24.4);
            this.marker_coverRightHandMenu = new BMap.Marker(point_coverRightHandMenu);
            this.markerMenu = new BMap.ContextMenu();
            /* var removeMarker = function(e,ee,marker){
             map.removeOverlay(marker);
             }*/
            this.markerMenu.addItem(new BMap.MenuItem('删除', function() {
                that.map.removeOverlay(that.marker_coverRightHandMenu);
            }, 200));
        },
        coverRightHandMenuClick: function() {
            this.map.addOverlay(this.marker_coverRightHandMenu);
            this.marker_coverRightHandMenu.addContextMenu(this.markerMenu);
        },
        /*鼠标拉框放大地图*/
        initMousePullBox: function() {
            this.myDrag = new BMapLib.RectangleZoom(this.map, {
                followText: "拖拽鼠标进行操作",
                autoClose: true
            });
        },
        mousePullBoxClick: function() {
            this.myDrag.open();
        },
        /*鼠标测距*/
        initMouseDistance: function() {
            this.myDis = new BMapLib.DistanceTool(this.map);
            this.myDisSign = false;
            var that = this;

            this.openDistance = function() {
                that.myDis.open();
            }
        },
        mouseDistanceClick: function() {
            if(!this.myDisSign) {
                var that = this;
                this.map.addEventListener("click", this.openDistance);
                this.myDisSign = true;
                this.myDis.addEventListener("drawend", function() {
                    that.myDis.close();
                    that.map.removeEventListener("click", that.openDistance);
                    that.myDisSign = false;
                });
            }
        },
        /*鼠标点击拾取坐标*/
        initMousePickUpCoordinates: function() {
            this.pickUpCoordinatesSign = false;
            var that = this;

            this.pickUpCoordinates = function(e) {
                alert(e.point.lng + ", " + e.point.lat);
                that.map.removeEventListener("click", that.pickUpCoordinates);
                that.pickUpCoordinatesSign = false;
            }
        },
        mousePickUpCoordinatesClick: function() {
            if(!this.pickUpCoordinatesSign) {
                this.map.addEventListener("click", this.pickUpCoordinates);
                this.pickUpCoordinatesSign = true;
            }
        },
        /*鼠标绘制点、线、面*/
        initMouseDraw: function() {
            this.drawingManager;
            var that = this;
            this.overlaycomplete = function(e){
                console.log(BMapLib.GeoUtils.isPointInPolygon(that.map_location, e.overlay));
                that.drawingManager.close();
            };
            this.styleOptions = {
                strokeColor:"red",    //边线颜色。
                fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
                strokeWeight: 3,       //边线的宽度，以像素为单位。
                strokeOpacity: 0.6,	   //边线透明度，取值范围0 - 1。
                fillOpacity: 0.2,      //填充的透明度，取值范围0 - 1。
                strokeStyle: 'solid' //边线的样式，solid或dashed。
            }
        },
        mouseDrawClick: function() {
            if(!this.drawingManager) {
                //实例化鼠标绘制工具
                this.drawingManager = new BMapLib.DrawingManager(this.map, {
                    isOpen: false, //是否开启绘制模式
                    enableDrawingTool: true, //是否显示工具栏
                    enableCalculate: true, //绘制时是否测距，测面
                    drawingToolOptions: {
                        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                        offset: new BMap.Size(5, 15), //偏离值
                        scale:0.7   //工具栏的缩放比例
                    },
                    circleOptions: this.styleOptions, //圆的样式
                    polylineOptions: this.styleOptions, //线的样式
                    polygonOptions: this.styleOptions, //多边形的样式
                    rectangleOptions: this.styleOptions //矩形的样式
                });
                this.drawingManager.addEventListener("overlaycomplete", this.overlaycomplete);
            }
        },
        /*框选服务*/
        initFrameSelection: function() {
            var points = [
                new BMap.Point(108.97,24.25),
                new BMap.Point(109.41,24.40),
                new BMap.Point(109.87,24.43),
                new BMap.Point(109.90,24.40),
                new BMap.Point(108.97,24.14),
                new BMap.Point(109.42,24.16),
                new BMap.Point(109.96,24.13),
                new BMap.Point(108.95,23.82),
                new BMap.Point(109.27,23.87),
                new BMap.Point(109.34,23.82),
                new BMap.Point(109.48,23.84),
                new BMap.Point(109.96,23.89)
            ];

            this.markeres = [];
            var marker_point;
            var markerPointMenu;
            this.marker_infoWindow = [];
            var that = this;
            for(point in points) {
                marker_point = new BMap.Marker(points[point]);
                (
                    function(marker_point) {
                        markerPointMenu = new BMap.ContextMenu();
                        markerPointMenu.addItem(new BMap.MenuItem("删除", function() {
                            that.map.removeOverlay(marker_point);
                        }));
                        marker_point.addContextMenu(markerPointMenu);
                    }
                )(marker_point);
                (
                    function(marker_point, point) {
                        var opts = {
                            width : 200,     // 信息窗口宽度
                            height: 100,     // 信息窗口高度
                            title : "第" + (parseInt(point)+1) + "个点", // 信息窗口标题
                        }
                        var infoWindow = new BMap.InfoWindow("我的内容就是：我是框选信息中的第" + (parseInt(point)+1) + "个点哦!",opts);
                        that.marker_infoWindow[point] = infoWindow;
                        marker_point.addEventListener("click", function() {
                            this.openInfoWindow(infoWindow);
                        });
                    }
                )(marker_point, point);
                this.markeres[point] = marker_point;
            }

            this.styleOptions = {
                strokeColor:"red",    //边线颜色。
                fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
                strokeWeight: 3,       //边线的宽度，以像素为单位。
                strokeOpacity: 0.6,	   //边线透明度，取值范围0 - 1。
                fillOpacity: 0.2,      //填充的透明度，取值范围0 - 1。
                strokeStyle: 'solid' //边线的样式，solid或dashed。
            }
            this.drawingManagerSearch;
            this.detailHtml = "<tr>\
                        <th>经度</th>\
                        <th>纬度</th>\
                        <th>标题</th>\
                        <th>内容</th>\
                    </tr>";

            this.showPoint = function(e) {
                var isExist = false;
                for(point in points) {
                    if(BMapLib.GeoUtils.isPointInPolygon(points[point], e.overlay)) {
                        that.getDetailInfo(that.markeres[point], point);
                        isExist = true;
                    }
                }
                if(isExist) {
                    $("#showDetailInfo").html(that.detailHtml);
                    $("#showDetailInfo").show("normal");
                }
                that.drawingManagerSearch.close();
                that.drawingManagerSearch = null;
            }
            this.getDetailInfo = function(marker, index) {
                var point = marker.getPosition();
                that.detailHtml += "<tr>\
                        <td>" + point.lng + "</td>\
                        <td>" + point.lat + "</td>\
                        <td>" + that.marker_infoWindow[index].getTitle() + "</td>\
                        <td>" + that.marker_infoWindow[index].getContent() + "</td>";
            }
        },
        frameSelectionClick: function() {
            this.map.clearOverlays();
            for(marker in this.markeres) {
                this.map.addOverlay(this.markeres[marker]);
            }
            this.detailHtml = "<tr>\
                        <th>经度</th>\
                        <th>纬度</th>\
                        <th>标题</th>\
                        <th>内容</th>\
                    </tr>";

            //实例化鼠标绘制工具
            this.drawingManagerSearch = new BMapLib.DrawingManager(this.map, {
                isOpen: true, //是否开启绘制模式
                rectangleOptions: this.styleOptions //矩形的样式
            });
            this.drawingManagerSearch.setDrawingMode(BMAP_DRAWING_RECTANGLE);
            this.drawingManagerSearch.addEventListener("overlaycomplete", this.showPoint);
        },
        /*显示/隐藏A类覆盖物*/
        initClassification: function() {
            var pointsA = [
                new BMap.Point(108.97,24.25),
                new BMap.Point(109.41,24.40),
                new BMap.Point(109.87,24.43),
                new BMap.Point(109.90,24.40),
                new BMap.Point(108.97,24.14),
                new BMap.Point(109.42,24.16),
                new BMap.Point(109.96,24.13),
                new BMap.Point(108.95,23.82),
                new BMap.Point(109.27,23.87),
                new BMap.Point(109.34,23.82),
                new BMap.Point(109.48,23.84),
                new BMap.Point(109.96,23.89)
            ];
            var icon_pointsA = new BMap.Icon("images/marker-red.png",new BMap.Size(36,36));
            this.marker_pointsAs = [];
            var that = this;
            for(point in pointsA) {
                var marker_pointsA = new BMap.Marker(pointsA[point], {
                    icon: icon_pointsA
                });
                this.marker_pointsAs[point] = marker_pointsA;
//        map.addOverlay(marker_pointsA);
                (
                    function(marker_pointsA, point) {
                        var opts = {
                            width : 200,     // 信息窗口宽度
                            height: 100,     // 信息窗口高度
                            title : "第" + (parseInt(point)+1) + "个点", // 信息窗口标题
                            offset: new BMap.Size(-10,-15)
                        }
                        var infoWindow = new BMap.InfoWindow("我的内容就是：我是A类覆盖物中的第" + (parseInt(point)+1) + "个点哦!",opts);
                        that.marker_infoWindow[point] = infoWindow;
                        marker_pointsA.addEventListener("click", function() {
                            this.openInfoWindow(infoWindow);
                        });
                    }
                )(marker_pointsA, point);
            }

            var pointsB = [
                new BMap.Point(108.95,24.23),
                new BMap.Point(109.39,24.38),
                new BMap.Point(109.85,24.41),
                new BMap.Point(109.88,24.38),
                new BMap.Point(108.95,24.12),
                new BMap.Point(109.40,24.14),
                new BMap.Point(109.94,24.11),
                new BMap.Point(108.94,23.80),
                new BMap.Point(109.25,23.85),
                new BMap.Point(109.32,23.80),
                new BMap.Point(109.46,23.82),
                new BMap.Point(109.94,23.87)
            ];
            var icon_pointsB = new BMap.Icon("images/marker-blue.png",new BMap.Size(36,36));
            this.marker_pointsBs = [];
            for(point in pointsB) {
                var marker_pointsB = new BMap.Marker(pointsB[point], {
                    icon:icon_pointsB
                });
                this.marker_pointsBs[point] = marker_pointsB;
//        map.addOverlay(marker_pointsB);
                (
                    function(marker_pointsB, point) {
                        var opts = {
                            width : 200,     // 信息窗口宽度
                            height: 100,     // 信息窗口高度
                            title : "第" + (parseInt(point)+1) + "个点", // 信息窗口标题
                            offset: new BMap.Size(-10,-15)
                        }
                        var infoWindow = new BMap.InfoWindow("我的内容就是：我是B类覆盖物中的第" + (parseInt(point)+1) + "个点哦!",opts);
                        that.marker_infoWindow[point] = infoWindow;
                        marker_pointsB.addEventListener("click", function() {
                            this.openInfoWindow(infoWindow);
                        });
                    }
                )(marker_pointsB, point);
            }

            this.marker_pointsAs_sign = false;
            this.marker_pointsBs_sign = false;
        },
        AClassificationClick: function() {
            if(!this.marker_pointsAs_sign) {
                this.marker_pointsAs_sign = true;
                for(marker in this.marker_pointsAs) {
                    this.map.addOverlay(this.marker_pointsAs[marker]);
                    this.marker_pointsAs[marker].show();
                }
            }else {
                this.marker_pointsAs_sign = false
                for(marker in this.marker_pointsAs) {
                    this.marker_pointsAs[marker].hide();
                }
            }
        },
        /*显示/隐藏B类覆盖物*/
        BClassificationClick: function() {
            if(!this.marker_pointsBs_sign) {
                this.marker_pointsBs_sign = true;
                for(marker in this.marker_pointsBs) {
                    this.map.addOverlay(this.marker_pointsBs[marker]);
                    this.marker_pointsBs[marker].show();
                }
            }else {
                this.marker_pointsBs_sign = false;
                for(marker in this.marker_pointsBs) {
                    this.marker_pointsBs[marker].hide();
                }
            }
        },
        /*单点沿线运动*/
        initSinglePointMovement: function() {
            var myP1 = new BMap.Point(108.97,24.25);    //起点
            var myP2 = new BMap.Point(109.96,23.89);    //终点

            this.marker1 = new BMap.Marker(myP1);
            var marker2 = new BMap.Marker(myP2);


            var pointMove = [
                new BMap.Point(108.97,24.25),
                new BMap.Point(109.41,24.40),
                new BMap.Point(109.87,24.43),
                new BMap.Point(109.90,24.40),
                new BMap.Point(108.97,24.14),
                new BMap.Point(109.42,24.16),
                new BMap.Point(109.96,24.13),
                new BMap.Point(108.95,23.82),
                new BMap.Point(109.27,23.87),
                new BMap.Point(109.34,23.82),
                new BMap.Point(109.48,23.84),
                new BMap.Point(109.96,23.89)
            ];

            var myIcon = new BMap.Icon("images/Mario.png", new BMap.Size(35, 70), {    //小车图片
                //anchor: new BMap.Size(0, -5),    //相当于CSS设置
                imageOffset: new BMap.Size(0, 0),    //图片的偏移量。为了使图片底部中心对准坐标点。
                imageSize: new BMap.Size(128,128)    //图标所用的图片的大小，此功能的作用等同于CSS中的background-size属性。可用于实现高清屏的高清效果。---自1.4版本新增
            });

            var pointMoveChange = [pointMove[0], pointMove[1]];
            var lushu = new BMapLib.LuShu(this.map, pointMoveChange, {
                landmarkPois:[],
                icon: myIcon,
                autoView: true,
                enableRotation: true,
                speed:6000,
                defaultContent:"我是终端!"
            });

            var startPoint;
            var endPoint;
            var that = this;
            this.moveNext = function (startPoint, endPoint) {
//        console.log(typeof startPoint);
                pointMoveChange[0] = pointMove[startPoint];
                pointMoveChange[1] = pointMove[endPoint];

                var polylineMove = new BMap.Polyline(pointMoveChange, {
                    strokeColor:"blue",
                    strokeWeight:6,
                    strokeOpacity:0.5
                });

                that.map.addOverlay(polylineMove);
                function changePathListener() {
                    //console.log(endPoint + "," + pointMove.length);
                    if(endPoint < pointMove.length-1) {
                        pointMoveChange[0] = pointMove[endPoint];
                        pointMoveChange[1] = pointMove[endPoint + 1];
                        lushu.setPath(pointMoveChange);
                        lushu.removeEventListener("moveend", changePathListener);
                        that.moveNext(endPoint, endPoint + 1);
                    }else {
                        lushu.removeEventListener("moveend", changePathListener);
                        that.map.addOverlay(marker2);
                    }
                }
                lushu.addEventListener("moveend", changePathListener);
                lushu.start();
            }
        },
        singlePointMovementClick: function() {
            this.map.addOverlay(this.marker1);
            this.moveNext(0, 1);
        },
        /*辅屏电子地图展示*/
        electronicMapClick: function() {
            var electronicApplet = '<applet code="HelloWorld.class" codeBase="applet/electronicMap/" width=0 height=0>' +
                '<param name=pageUrl value="http://172.16.48.87:8080/vcs_web_demo/index.html#.electronic-page"></param></applet>';


            $("#applet").html(electronicApplet);
        },
        /*辅屏本地预览展示*/
        localPreviewClick: function() {
            var localPreviewApplet = '<applet code="LocalPreview.class" codeBase="applet/localPreview/" archive="DJNativeSwing.jar,DJNativeSwing-SWT.jar,org.eclipse.swt.win32.win32.x86_3.102.0.v20130605-1544.jar" width=0 height=0>' +
                '<param name=pageUrl value="http://172.16.48.87:8080/vcs_web_demo/index.html#.secondScreen-page"></param></applet>';


            $("#applet").html(localPreviewApplet);
        },
        /*关闭一机双屏*/
        closeDualDisplayClick: function() {
            $("#applet").html("");
        },
        /*定义添加控件按钮点击事件*/
        widgetTitleClick: function() {
            if($("#widgets").css("display") == "none") {
                $("#widgets").show("normal");
                $("#widgetTitle").addClass("change");
            }else {
                $("#widgets").hide("normal");
                $("#widgetTitle").removeClass("change");
            }
        },
        /*定义添加覆盖物按钮点击事件*/
        coverTitleClick: function() {
            if($("#covers").css("display") == "none") {
                $("#covers").show("normal");
                $("#coverTitle").addClass("change");
            }else {
                $("#covers").hide("normal");
                $("#coverTitle").removeClass("change");
            }
        },
        /*定义添加信息窗口按钮点击事件*/
        infoWindowTitleClick: function() {
            if($("#infoWindows").css("display") == "none") {
                $("#infoWindows").show("normal");
                $("#infoWindowTitle").addClass("change");
            }else {
                $("#infoWindows").hide("normal");
                $("#infoWindowTitle").removeClass("change");
            }
        },
        /*定义添加右键菜单按钮点击事件*/
        rightHandMenuTitleClick: function() {
            if($("#rightHandMenu").css("display") == "none") {
                $("#rightHandMenu").show("normal");
                $("#rightHandMenuTitle").addClass("change");
            }else {
                $("#rightHandMenu").hide("normal");
                $("#rightHandMenuTitle").removeClass("change");
            }
        },
        /*定义鼠标操作按钮点击事件*/
        mouseOperateTitleClick: function() {
            if($("#mouseOperate").css("display") == "none") {
                $("#mouseOperate").show("normal");
                $("#mouseOperateTitle").addClass("change");
            }else {
                $("#mouseOperate").hide("normal");
                $("#mouseOperateTitle").removeClass("change");
            }
        },
        /*定义框选服务按钮点击事件*/
        serverTitleClick: function() {
            if($("#servers").css("display") == "none") {
                $("#servers").show("normal");
                $("#serverTitle").addClass("change");
            }else {
                $("#servers").hide("normal");
                $("#serverTitle").removeClass("change");
            }
        },
        /*定义地图分类显示按钮点击事件*/
        classificationDisplayTitleClick: function() {
            if($("#classificationDisplay").css("display") == "none") {
                $("#classificationDisplay").show("normal");
                $("#classificationDisplayTitle").addClass("change");
            }else {
                $("#classificationDisplay").hide("normal");
                $("#classificationDisplayTitle").removeClass("change");
            }
        },
        /*定义双屏显示按钮点击事件*/
        dualDisplayTitleClick: function() {
            if($("#dualDisplay").css("display") == "none") {
                $("#dualDisplay").show("normal");
                $("#dualDisplayTitle").addClass("change");
            }else {
                $("#dualDisplay").hide("normal");
                $("#dualDisplayTitle").removeClass("change");
            }
        },
        /*定义GPS功能按钮的点击事件*/
        GPSTitleClick: function() {
            if($("#GPSContent").css("display") == "none") {
                $("#GPSContent").show("normal");
                $("#GPSTitle").addClass("change");
            }else {
                $("#GPSContent").hide("normal");
                $("#GPSTitle").removeClass("change");
            }
        },

        /*定义全屏放大按钮事件*/
        fullscreenClick: function() {
            if($("#fullscreen").hasClass("exit-screen")) {
                $(".left").css("display","block");
                $(".baiduMap").css("width","82%");
                $("#fullscreen").removeClass("exit-screen");
                $("#fullscreen i").addClass("fa-arrows-alt");
                $(".container .map_menu").css("left", "25%");
            }else {
                $(".left").css("display","none");
                $("#fullscreen").addClass("exit-screen");
                $(".baiduMap").css("width","100%");
                $("#fullscreen i").removeClass("fa-arrows-alt");
                $(".container .map_menu").css("left", "8%");
            }
        },
        /*定义点击标记按钮事件操作*/
        MarkBtnClick: function() {
            var xPoint = $("#xPoint").val();
            var yPoint = $("#yPoint").val();
            if(xPoint != "" && yPoint != "") {
                var markPoint = new BMap.Point(xPoint, yPoint);
                var markMarker = new BMap.Marker(markPoint);
            }
            this.map.addOverlay(markMarker);
            this.map.panTo(markPoint);
        },
        /*定义点击搜索按钮事件操作*/
        searchBtnClick: function() {
            var xPointSearch = $("#xPointSearch").val();
            var yPointSearch = $("#yPointSearch").val();
            console.log(xPointSearch + "," + yPointSearch);
            var markPoint;
            if(xPointSearch != "" && yPointSearch != "") {
                for(point in points) {
//                console.log(points[point].lng + "," + points[point].lat);
                    if((xPointSearch == points[point].lng) && (yPointSearch == points[point].lat)) {
                        markPoint = points[point];
                        markeres[point].openInfoWindow(marker_infoWindow[point]);
                    }
                }
//            var markMarker = new BMap.Marker(markPoint);
            }
            if(markPoint) {
//        map.addOverlay(markMarker);
                map.panTo(markPoint);
            }else {
                alert("没有搜索到该标记点!");
            }
        },
        /*点击显示弹出层，点击地图其他地方弹出层消失*/
        MarkClick: function() {
            $("#markDiv").show("normal");
            return false;
        },
        searchClick: function() {
            for(marker in this.markeres) {
                this.map.addOverlay(this.markeres[marker]);
            }
            $("#searchDiv").show("normal");
            return false;
        },

        baiduMapClick: function() {
            if($("#markDiv").css('display') == 'block') {
                $("#markDiv").hide("normal");
                $("#xPoint").val("");
                $("#yPoint").val("");
            }
            if($("#searchDiv").css('display') == 'block') {
                $("#searchDiv").hide("normal");
            }
        },
        /*隐藏展示组件按钮点击事件操作*/
        /*hideShowWidgetClick: function() {

            if($('.left').width() != 0) {
                $('.left').animate({
                    width: '0px',
                    padding: '0px',
                    borderWidth: '0px'
                }, 100);

                $('.left .hideShowWidget').addClass('change');
                $('.baiduMap').css('width','100%');
            }else {
                $('.left').animate({
                    width: '18%',
                    padding: '0px 5px;',
                    borderWidth: '1px'
                }, 100);
                $('.baiduMap').css('width', '82%');

                $('.left .hideShowWidget').removeClass('change');
            }
        }*/

    });

    return App.Views.ElectronicMap;
});