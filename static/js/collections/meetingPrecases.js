/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/meetingPrecase'
	],
	function (Backbone, MeetingPrecase) {
		App.Collections.MeetingPrecases = Backbone.Collection.extend({
			model: MeetingPrecase,
			url: '',
			sync: function (method, model, options) {
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data
			}
		});
		return App.Collections.MeetingPrecases;
});