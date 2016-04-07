//指挥调度
/*
*author:liyouran
*createtime:20160226
*/
define([
	'backbone',
	'models/meetingPrecase',
	'collections/meetingPrecases',
	'text!templates/command-page.html',
	'views/meetingPrecaseForm',
	'widgets/pagingbar'
	], 
	function (Backbone, MeetingPrecase, MeetingPrecases, commandpageTpl, MeetingPrecaseForm, PagingBar) {
	App.Views.CommandManager = Backbone.View.extend({
		events: {
			'click .search': 'precaseSearch',
			'click .addnew': 'precaseAddnew',
			'click .delete': 'precaseDelete',
			'click .status': 'getPrecaseList',

		},
		initialize: function (options) {
			_.bindAll(this, 'render', 'precaseSearch', 'precaseAddnew', 'precaseDelete', 'getPrecaseList');
			this.$el.find('.content').html(commandpageTpl);
			this.form = new MeetingPrecaseForm({el: this.$el.find('.mpform'), autoValid: true}); //预案表单
			this.collection = new MeetingPrecases(); //预案集合
			this.pagingBar = new PagingBar({el:this.$el.find('.pagingbar ul')}); //分页
			//this.render();
			this.$el.find('.content-main').slimScroll({
				//distance: '30px',
				width: '100%',
				//height: '100%', 
				alwaysVisible: true
			});
		},
		render: function () {
			var extraParam = {};
			this.pagingBar.update(this.collection, extraParam);
		},
		precaseSearch: function (e) { //预案搜索

		},
		precaseAddnew: function (e) { //新建预案
			var attrs;
			var model = new MeetingPrecase(attrs, {collection: this.collection});
			Utils.animateSwitch($('.test1'), $('.test2'));
		},
		precaseDelete: function (e) { //删除预案

		},
		getPrecaseList: function (e) { //获取预案列表

		},
		
	});
	return App.Views.CommandManager;
});