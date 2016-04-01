/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/videoMt'
	], 
	function (Backbone, VideoMt) {
		App.Collections.VideoMts = Backbone.Collection.extend({
			model: VideoMt,
			url: '',
			sync: function (method, model, options){
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data;
			}
		});
		return App.Collections.VideoMts;
});