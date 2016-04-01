/*
*author:liyouran
*createtime:20160124
*/

define(['backbone'], function (Backbone) {
	App.Models.MeetingPrecase = Backbone.Model.extend({
		urlRoot: '', //调度预案数据模板URL
		default: {
			id: null,
		},
		parse: function (data, options) { //数据返回格式限制
			var record;
			if (data.hasOwnProperty('success') && data.hasOwnProperty('msg')){
				if(data.success == false && !data.data){
					record = this.attributes;
				}else{
					record = data.data;
				}
			}else{
				record = data;
			}
			if (record) {

			}
			return record;
		},
		validate: function (attrs, options) { //调度预案数据验证
			var caseName = attrs.caseName; //调度预案名称
			var unitId = attrs.unitId; //所属单位
			var chairMan = attrs.chairMan; //调度席
			var comment = attrs.comment; //备注

			if (caseName !== undefined){
				if (!caseName && !caseName.trim()){
					return '预案名称为必填项';
				}else if (caseName.length > 32){
					return '预案名称最大长度为32个字符';
				}
			}

			if (chairMan !== undefined) {
				if(!chairMan && !chairMan.trim()){
					return '调度席为必选项';
				}
			}

			if (comment && comment.length > 128){
				return '备注最大长度为128个字符';
			}
		}
	});
	return App.Models.MeetingPrecase;
});