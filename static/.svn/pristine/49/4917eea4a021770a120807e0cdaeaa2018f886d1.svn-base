/**
 * Created by Adams.Shen on 2016/1/19.
 */

define(['backbone', 'models/matrix'], function(Backbone, Matrix) {
    App.Collections.Matrixs = Backbone.Collection.extend({
        model: Matrix,
        url: '',   //从后端获取矩阵信息列表的url
        sync: function(method, model, options) {
            return Backbone.sync(method, model, options);
        },
        parse: function(data, xhr) {
            return data.data;
        }
    });

    return App.Collections.Matrixs;
});