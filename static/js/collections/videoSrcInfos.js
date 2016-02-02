/*
*author:liyouran
*createtime:20160124
*/
define([
	'backbone',
	'models/videoSrcInfo'
	], 
	function (Backbone, VideoSrcInfo) {
		App.Collections.VideoSrcInfos = Backbone.Collection.extend({
			model: VideoSrcInfo,
			url: '',
			sync: function (method, model, options){
				return Backbone.sync(method, model, options);
			},
			parse: function (data, xhr) {
				return data.data;
			}
		});
		return App.Collections.VideoSrcInfos;
});