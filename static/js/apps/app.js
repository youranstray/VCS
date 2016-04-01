
require.config({ //配置
	baseUrl: RESOUCE_STATIC_URL + '/js',
	paths: { //配置路径
		templates:  RESOUCE_STATIC_URL + '/templates',
		jquery: 'libs/jQuery/jquery-1.9.0',
		backbone: 'libs/backbone',
		jqueryui: 'libs/jquery-ui.min',
		nicescroll: 'libs/jquery.nicescroll',
		underscore: 'libs/underscore',
		checkbox: 'libs/checkbox',
		cookieUtil: 'libs/cookieUtil',
		domReady: 'libs/domReady',
		dropkick: 'libs/dropkick',
		text: 'libs/text',
		placeholder: 'libs/jquery.placeholder',
		slimscroll: 'libs/jquery.slimscroll',
		bootstrap: 'libs/bootstrap/bootstrapv3',
		timepiker: 'libs/bootstrap/bootstrap-timepicker',
		datepiker: 'libs/bootstrap/bootstrap-datepicker',
		paginator: 'libs/bootstrap/bootstrap-paginator',
		ztree: 'libs/jquery.ztree.core-3.5',
		ztreeexcheck: 'libs/jquery.ztree.excheck-3.5',
		stacktrace: 'libs/stacktrace',
	},
	shim: { //申明依赖关系和导出
		'jquery': {
			exports: '$',
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'jqueryui': {
            deps:['jquery'],
            exports:'jqueryui'
        },
        'nicescroll': {
            deps:['jquery'],
            exports:'nicescroll'
        },
		'bootstrap': {
			deps: ['jquery'],
			exports: 'Bootstrap'
		},
		'dropkick': {
			deps: ['jquery'],
			exports: 'Dropkick',
		},
		'checkbox': {
			deps: ['jquery'],
			exports: 'Checkbox'
		},
		'timepicker': {
			deps: ['jquery'],
			exports: 'Timepicker'
		},
		'datepicker': {
			deps: ['jquery'],
			exports: 'Datepicker'
		},
		'paginator': {
			deps: ['bootstrap'],
			exports: 'Paginator'
		},
		'slimscroll': {
			deps: ['jquery'],
			exports: 'Slimscroll'
		},
		'ztree': {
			deps: ['jquery'],
			exports: 'zTree'
		},
		'zTreeExcheck': {
			deps: ['jquery'],
			exports: 'zTreeExcheck'
		}
	},
	urlArgs: ""
});
App = { //全局变量
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},
	Stores: {},
	Widgets: {}
};
require([
	'libs/domReady',
	'backbone',
	'bootstrap',
	'utils',
	'routers/router',
	'slimscroll'
	], 
	function (domReady, Backbone, Bootstrap, Utils, Router) { //入口
			domReady(function () {
				App.Router = new Router(); //路由
				Backbone.history.start({});
					
				if(Utils.isIE){
					$.ajaxSetup({
						cache: false
					});
				}
				$.ajaxSetup({
					complete: function (xhr, status){
						if(xhr.status === 499){
							window.location.replace("login");
						}
					}
				});
				$(document).keydown(function (event) { //禁用backspace键的后退功能
					var e = window.event;
					if (event.keyCode == 8 ) { 
						if(e.srcElement.readOnly || (e.srcElement.type != "text" && 
							e.srcElement.type != "textarea" && 
							e.srcElement.type != "password" &&
							e.srcElement.type != "search"))
							event.preventDefault();  
					} 
				});
			});
});