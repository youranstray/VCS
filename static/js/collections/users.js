/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/user'
	], 
	function (Backbone, User) {
		App.Collections.Users = Backbone.Collection.extend({
			model: User,
			url: '',
			sync: function (method, model, options){
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data;
			}
		});
		return App.Collections.Users;
});