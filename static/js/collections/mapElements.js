/**
 * Created by Adams.Shen on 2016/1/18.
 */

define(['backbone', 'models/mapElement'], function(Backbone, MapElement) {
    App.Collections.MapElements = Backbone.Collection.extend({
        model: MapElement,
        url: '',   //从后端获取地图图标列表的url
        sync: function(method, model, options) {
            return Backbone.sync(method, model, options);
        },
        parse: function(data, xhr) {
            return data.data;
        }
    });

    return App.Collections.MapElements;
});