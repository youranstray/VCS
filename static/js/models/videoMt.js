/*
*author:liyouran
*createtime:20160124
*/
define(['backbone'], function (Backbone) {
	App.Models.VideoMt = Backbone.Model.extend({
		urlRoot: '',
		defaults: {
			id: null
		},
		parse: function (data, options) {
			var record;
			if (data.hasOwnProperty('success') && data,hasOwnProperty('msg')) {
				if (data.success == false && !data.data){
					record = this.attributes;
				}else{
					record = data.data;
				}
			}else {
				record = data;
			}
			if (record) {

			}
			return record;
		},
		validate: function (attrs, options) {
		}
	});
	return App.Models.VideoMt;
});