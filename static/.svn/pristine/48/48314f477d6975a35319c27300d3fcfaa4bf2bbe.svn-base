/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/bigPrecase'
	], 
	function (Backbone, BigPrecase) {
		App.Collections.BigPrecases = Backbone.Collection.extend({
			model: BigPrecase,
			url: '',
			sync: function (method, model, options){
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data;
			}
		});
		return App.Collections.BigPrecases;
});