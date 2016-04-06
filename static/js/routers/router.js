define(['backbone'], function (Backbone) {
	App.Routers.Router = Backbone.Router.extend({
		routes:{
			'*page': 'showPage' 
		},
		initialize: function () {
			var router = this;
			$('.nav-group').slimScroll({
				//distance: '30px',
				width: '138px',
				height: '100%', 
				alwaysVisible: true
			});
			$('.nav-group').on('click', '.nav', function (e) {
				e = e || window.event;
				
				var navPage = $(this).attr('data-navpage');

				if($(e.target).hasClass('nav-btn') || $(e.target).closest('.nav').hasClass('nav-btn')){
					if(!$(this).hasClass('selected') && $(this).attr('data-navpage')){
						$('.nav-group').find('.selected').removeClass('selected');
						$(this).addClass('selected');
					}else if($(this).find('.drop-icon')){
						$('.nav-group').find('.showSecondary').removeClass('showSecondary');
						$(this).find('ul').addClass('.showSecondary').show();
					}
				}
				/*debugger
				if($(e.target).find('.drop-icon') || $(e.target).closest('.nav').find('.drop-icon')){
					$('.nav-group').find('.showSecondary').removeClass('showSecondary');
					$(this).find('ul').addClass('.showSecondary').show();
				}else if(!$(this).hasClass('selected')){
					$('.nav-group').find('.selected').removeClass('selected');
					$(this).addClass('selected');
				}*/

				if(navPage){
					router.navigate(navPage,{trigger: true});
				}
				e.stopPropagation();
				e.preventDefault();
			});
			this.defaultPage = $('.nav-group').find('.nav').eq(0).attr('data-navpage');
		},
		showPage: function (page) { //切换路由
			page = page || this.defaultPage;
			var $page = $('.main.pages').find(page);
			var curView = null;
			var firstshow = false;
			var me = this;
			$('.nav-group').find('div[data-navpage="'+ page +'"]').eq(0).addClass('selected');
			switch (page) {
				case '.command-page': { //指挥调度
					if(!this.commandView){
						require(['views/commandManager'], function (View) {
							me.commandView = new View({el: $page});
						});
						firstshow = true;
					}
					curView = this.commandView;
					break;
				}
				case '.bigScreen-page': { //控制到解码板卡
					if(!this.dBDispatchView){
						require(['views/bigScreenManager'], function (View) {
							me.bigScreenView = new View({el: $page});
						});
						firstshow = true;
					}
					curView = this.bigScreenView;
					break;
				}
				/*case '.dBSet-page': { //解码板卡配置
					if(!this.dBSetView){
						require(['views/dBSetManager'], function (View) {
							me.dBSetView = new View({el: $page});
						});
						firstshow = true;
					}
					curView = this.dBSetView;
					break;
				}*/
				case '.mSet-page': { //矩阵配置
					if(!this.mSetView){
						require(['views/mSetManager'], function (View) {
							me.mSetView = new View({el: $page});
						});
						firstshow = true;
					}
					curView = this.mSetView;
					break;
				}
				case '.map-page': { //电子地图
					if(!this.mapView){
						require(['views/mapManager'], function (View) {
							me.mapView = new View({el: $page});
						});
						firstshow = true;
					}
					curView = this.mapView;
					break;
				}
			}
			if($page.is(':hidden')){
				$('.page:visible').hide();
				$page.show();
			}
			if(!firstshow){
				curView ? curView.render() : '';
			}
		},

	});
	return App.Routers.Router;
});