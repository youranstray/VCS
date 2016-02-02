/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/department'
	], 
	function (Backbone, Department) {
		App.Collections.Departments = Backbone.Collection.extend({
			model: Department,
			url: '',
			sync: function (method, model, options){
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data;
			}
		});
		return App.Collections.Departments;
});