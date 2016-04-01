//会议高级设置
define([
	'backbone'
	],
	function (Backbone) {
		App.Views.AdvanceSetForm = Backbone.View.extend({
			event: {
				'click .submit': 'onSubmit',
				'click .cancel': 'onCancel'
			},
			initialize: function (options) {
				_.bindAll(this, 'onSubmit');
			},
			render: function (options) {
			},
			onSubmit: function (e) { //提交设置
			},
			onCancel: function (e) { //取消设置
			}
		});
		return App.Views.AdvanceSetForm;
	});