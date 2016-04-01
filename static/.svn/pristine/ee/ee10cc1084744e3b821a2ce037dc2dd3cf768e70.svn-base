/**
 * Created by Adams.Shen on 2016/1/19.
 */

define(['backbone', 'models/matrixTemplate'], function(Backbone,MatrixTemplate) {
    App.Collections.MatrixTemplates = Backbone.Collection.extend({
        model: MatrixTemplate,
        url: '',   //从后端获取矩阵模板信息列表的url
        sync: function(method, model, options) {
            return Backbone.sync(method, model, options);
        },
        parse: function(data, xhr) {
            return data.data;
        }
    });

    return App.Collections.MatrixTemplates;
});