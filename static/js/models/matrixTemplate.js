/**
 * Created by Adams.Shen on 2016/1/19.
 */

define(['backbone'], function(Backbone) {
    App.Models.MatrixTemplate = Backbone.Model.extend({
        defaults: {
            id: null
        },
        urlRoot: '',   //向后端保存矩阵模板信息的url
        parse: function(data, options) {
            var record;
            if (data.hasOwnProperty('success') && data.hasOwnProperty('msg')) {
                //当服务端返回false时,data应该为原数据
                if (data.success == false && !data.data) {
                    record = this.attributes;
                }
                else {
                    record = data.data;
                }
            }
            else {
                record = data;
            }
            if (record) {
                //custom parse
            }
            return record;
        },
        validate: function(attrs, options) {
            var templateName = attrs.templateName;
            var rowNum  = attrs.rowNum;
            var columnNum = attrs.columnNum;

            //var unitName = attrs.unitVO.unitName;

            if(!templateName || !templateName.trim()) {
                return '矩阵模板名称为必填项';
            }else if(templateName.length > 32) {
                return '矩阵模板名称最大长度为32个字符';
            }

            if(!rowNum || !rowNum.trim()) {
                return '行数为必填项';
            }else if(!/^\d+$/.test(parseInt(rowNum))) {
                return '行数仅支持数字';
            }else if(parseInt(rowNum) < 1 || parseInt(rowNum) > 99) {
                return '行数取值范围是1~99';
            }

            if(!columnNum || !columnNum.trim()) {
                return '列数为必填项';
            }else if(!/^\d+$/.test(parseInt(columnNum))) {
                return '列数仅支持数字';
            }else if(parseInt(columnNum) < 1 || parseInt(columnNum) > 99) {
                return '列数取值范围是1~99';
            }

           /* if(unitName !== undefined) {
                if(!unitName || !unitName.trim()) {
                    return '所属单位为必选项';
                }
            }*/
        }
    });

    return App.Models.MatrixTemplate;
});
