/**
 * Created by Adams.Shen on 2016/1/18.
 */

define(['backbone', 'models/map'], function(Backbone, Map) {
    App.Collections.Maps = Backbone.Collection.extend({
        model: Map,
        url: '',   //从后端获取地图列表的url
        sync: function(method, model, options) {
            return Backbone.sync(method, model, options);
        },
        parse: function(data, xhr) {
            return data.data;
        }
    });

    return App.Collections.Maps;
});