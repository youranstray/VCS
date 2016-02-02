
require.config({ //配置
	baseUrl: RESOUCE_STATIC_URL + '/js',
	paths: { //配置路径
		templates:  '../templates',
		jquery: 'libs/jQuery/jquery-1.9.0',
		backbone: 'libs/backbone',
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
	Stores: {},
	Widgets: {}
};
require([
	'libs/domReady',
	'backbone',
	'bootstrap',
	'utils',
	'routers/router',
	'collections/meetingPrecases',
	'widgets/combo',
	'libs/jquery-ui.min'
	], 
	function (domReady, Backbone, Bootstrap, Utils, Router, MeetingPrecases, Combo) { //入口
			domReady(function () {
				App.Router = new Router(); //路由
				Backbone.history.start({});

				//test draggable
				$('.resource-pool .mt-resource').draggable({
					drag: function (e, ui) {
						// debugger
					},
					containmentType: 'body'
					//appendTo: '.big-screen'
				});
				$('.window').droppable({
					drop: function (e, ui) {
						var dragTarget = ui.draggable[0];
						$(dragTarget).attr('style', '');
						$(this).append(dragTarget);
						$(this).find('.mt-resource').draggable({/*appendTo: '.resource-pool', */containmentType: 'body'});
					}
				});

				$('.resource-pool').droppable({
					drop: function (e, ui) {
						var dragTarget = ui.draggable[0];
						$(dragTarget).attr('style', '');
						$(this).append(dragTarget);
						$(this).find('.mt-resource').draggable({/*appendTo: '.window',*/ containmentType: 'body'});
					}
				});

				/*$('.window').find('.mt-resource').draggable({
					drag: function (e, ui) {
						debugger
					}
				});*/

				//test combo
				/*$('select.parent').combo({
					data: [
					{id: '1', name: '1'},
					{id: '2', name: '2'},
					{id: '3', name: '3'},
					{id: '4', name: '4'},
					{id: '5', name: '5'},
					{id: '6', name: '6'},
					],
					change: parentChange
				});

				$('select.children').combo({
					data: [
						{id: '', name:  ''},
						{id: '2', name: '22'},
						{id: '3', name: '33'},
						{id: '4', name: '44'},
						{id: '5', name: '55'},
						{id: '6', name: '66'},
					],
				});

				function parentChange ($select, value, label) {
					$('select.children').combo({
						data: [
						{id: '', name:  ''},
						{id: value + '2', name: value + '2'},
						{id: value + '3', name: value + '3'},
						{id: value + '4', name: value + '4'},
						{id: value + '5', name: value + '5'},
						{id: value + '6', name: value + '6'},
						],
					});
					// if (value == '1') {
					// 	$('select.children').val('');
					// }else{
					// 	$('select.children').val(value);
					// }
					// $('select.children').trigger('change');
				}
				$('.submit').click(function (e) {
					var parent = $('select.parent').val();
					var children = $('select.children').val();
					Utils.alert(parent,'','parent');
					if (children && children.trim()) {
						setTimeout(function () {
							Utils.alert(children, '', 'children');
						}, 5000);
					}else {
						console.log(children);
					}
					
				});*/

				//test alert&comfirm
				/*Utils.alert('ahhhhhhhhhh');
				setTimeout(function () {Utils.alert('233333333', '', '23');}, 1000);
				setTimeout(function () {Utils.alert('hhhhhhhhhhh', '', '23')}, 2000);
				setTimeout(function () {
					Utils.confirm('lalalalalalala', '', 'comfirm', function (result) {
						Utils.alert(result);
					});
				}, 3000);*/

				//test collection
				/*var meetingPrecases = new MeetingPrecases();
				console.log(meetingPrecases);*/
					
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