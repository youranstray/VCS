///<reference path="../libs/require.js" />
///<reference path="../libs/jQuery/jquery1.9.js" />
///<reference path="../libs/underscore.js" />
///<reference path="../libs/backbone.js" />
define([
    'jquery',
    'backbone'
],
    function ($, Backbone) {
        App.Views.DataTable = Backbone.View.extend({
            initialize: function (options) {
                _.bindAll(this, 'render', 'itemselected');
                this.itemTpl = options.itemTpl;
                this.collection.bind('change', this.onupdate, this);
                this.collection.bind('remove', this.onremove, this);
                this.collection.bind('destroy', this.onremove, this);
                this.collection.bind('add', this.onadd, this);
                this.collection.bind('reset', this.onreset, this);
                this.$el.on('click', 'tbody tr', this.itemselected);
                this.render();
            },
            render: function () {
                var me = this;
                this.$lastSel = null;
				var htmls = [];
				var first = null;
                _.each(this.collection.models, function (model) {
                    htmls.unshift(_.template(me.itemTpl, { data: model.toJSON(), id: model.cid }));
					first = model;
                });
                this.$el.find('tbody').html(htmls.join(''));
				if(first){
					this.selectByModel(first);
				}
            },
            selectItem: function (elem) {
                var old = this.$lastSel;
                this.$lastSel = elem;
                var me = this;
                if (old) {
                    old.find('.tb-dropmenu').css('display', 'none');
                    old.removeClass('item-sel');

                }
                if (this.$lastSel && this.$lastSel.length > 0) {
                    if (old && this.$lastSel[0] == old[0]) {
                        return;
                    }
                    this.$lastSel.addClass('item-sel');
                    this.$lastSel.find('.tb-dropmenu').css('display', 'inline-block');
                }
                if (this.$lastSel || old) {
                    _.defer(function () { me.trigger('selchanged', me.$lastSel, old) });
                }
            },
            selectByModel:function(model){
                var elem = this.$el.find('tr[data-id="' + model.cid + '"]');
                return this.selectItem(elem);
            },
            itemselected: function (e) {
                var current = $(e.currentTarget);
                if (this.$lastSel && this.$lastSel[0] == current[0]) {
                    return;
                }
                this.selectItem(current);
            },
            onreset:function(){
                this.render();
                this.trigger("dataChange");
            },
            onadd: function (model) {
                this.addModel(model);
                this.trigger("dataChange");
            },
            addModel: function (model) {
                var newEle = $(_.template(this.itemTpl, { data: model.toJSON(), id: model.cid }));
                newEle.prependTo(this.$el.find('tbody'));
                if (!this.$lastSel || this.$lastSel.length < 1) {
                    this.selectItem(newEle);
                }
            },
            onupdate: function (model) {
                var elem = this.$el.find('tr[data-id="' + model.cid + '"]');
                var issel = elem.hasClass('item-sel');
                elem.replaceWith(_.template(this.itemTpl, { data: model.toJSON(), id: model.cid }));
                if (issel) {
                    this.$lastSel = this.$el.find('tr[data-id="' + model.cid + '"]').addClass('item-sel');
                }

                this.trigger("dataChange");
            },
            onremove: function (model) {
                var elem = this.$el.find('tr[data-id="' + model.cid + '"]');
                if( elem.length > 0){
                    if (this.$lastSel && this.$lastSel.length > 0 && this.$lastSel[0] == elem[0]) {
                        this.selectItem(null);
                    }
                    elem.remove();
                }

                this.trigger("dataChange");
            },
            getSelModel: function () {
                return this.getModelByEl(this.$lastSel);
            },
            getModelByEl: function ($elem) {
                if ($elem && $elem.length > 0) {
                    var cid = $elem.getDataId();
                    return cid ? this.collection.get($elem.getDataId()) : null;
                }
                return null;
            }
        });
        return App.Views.DataTable;
    });