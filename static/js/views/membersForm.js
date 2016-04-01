define([
	'backbone'
	],
	function (Backbone) {
		App.Views.MembersForm = Backbone.View.extend({
			events: {
				'click .submit': 'onSubmit',
				'click .cancel': 'onCancel',
				'click .search': 'onSearch',
				'click .delete': 'onDelete',
				'click .add': 'addMembers',
				'click .remove': 'removeMembers'
			},
			initialize: function (options) {
				_.bindAll(this, 'onSubmit', 'onCancel', 'onSearch', 'onDelete', 'addMembers', 'removeMembers');
			},
			render: function (options) {
			},
			onSubmit: function (e) { //提交
			},
			onCancel: function (e) { //取消
			},
			onSearch: function (e) { //搜索
			},
			onDelete: function (e) { //删除
			},
			addMembers: function (e) { //添加调度成员
			},
			removeMembers: function (e) { //移除调度成员
			},
		});
		return App.Views.MembersForm;
	});