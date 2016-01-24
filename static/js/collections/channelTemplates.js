/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/channelTemplate'
	], 
	function (Backbone, ChannelTemplate) {
		App.Collections.ChannelTemplates = Backbone.Collection.extend({
			model: ChannelTemplate,
			url: '',
			sync: function (method, model, options) {
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data;
			}
		});
		return App.Collections.ChannelTemplates;
});