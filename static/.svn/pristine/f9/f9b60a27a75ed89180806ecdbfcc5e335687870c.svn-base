/**
 * Created by Adams.Shen on 2016/1/18.
 */

define(['backbone'], function(Backbone) {
    App.Models.MapElement = Backbone.Model.extend({
        defaults: {
            id: null
        },
        urlRoot: '',   //向后端保存地图图标信息的url
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

        }
    });

    return App.Models.MapElement;
});