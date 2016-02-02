/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/monitorDevice'
	], 
	function (Backbone, MonitorDevice) {
		App.Collections.MonitorDevices = Backbone.Collection.extend({
			model: MonitorDevice,
			url: '',
			sync: function (method, model, options){
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data;
			}
		});
		return App.Collections.MonitorDevices;
});