/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/platform'
	], 
	function (Backbone, Platform) {
		App.Collections.Platforms = Backbone.Collection.extend({
			model: Platform,
			url: '',
			sync: function (method, model, options){
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data;
			}
		});
		return App.Collections.Platforms;
});