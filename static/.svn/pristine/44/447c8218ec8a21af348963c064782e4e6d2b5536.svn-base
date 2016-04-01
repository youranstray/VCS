/*
*author:liyouran
*createtime:20160124
*/
define(['backbone'], function (Backbone) {
	App.Models.BigPrecase = Backbone.Model.extend({
		urlRoot: '',
		default: {
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
			var precaseName = attrs.precaseName;

			if (precaseName !== undefined) {
				if (!precaseName && !precaseName.trim()) {
					return '预案名称为必填项';
				}else if () {
					return '预案名称最大长度为32个字符';
				}
			}
		}
	});
	return App.Models.BigPrecase;
});