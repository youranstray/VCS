/**
 * Created by Adams.Shen on 2016/2/22.
 */
define(['jquery', 'utils', 'jqueryui'], function($) {
    var DraggableBar = App.Widgets.DraggableBar = function(el, options, callback) {
        this.$el = el;
        this.source = options.source;
        this.target = options.target;
        this.cover = options.cover;
        this.repeat = options.repeat;
        this.callback = callback;
        this.build();

    };

    DraggableBar.prototype = {
        constructors: DraggableBar,

        build: function() {
            var me = this;
            this.$el.find(this.source).draggable({
                opacity: 0.35,
                helper:"clone"
            });

            $(this.target).droppable({
                drop:function(event,ui){
                    var repeatDraggable = ui.draggable.data('repeatDraggable');
                    var existDraggable = $(this).data('existDraggable');

                    if(repeatDraggable) {
                        if(me.repeat === false) {
                            Utils.alert('repeated!', '提示框');
                        }else if(me.repeat === true){
                            if(existDraggable) {
                                if(me.cover === false) {
                                    Utils.alert('existed!', '提示框');
                                }else if(me.cover === true){
                                    existDraggable.data('repeatDraggable', null);
                                    $(this).data('existDraggable', ui.draggable);

                                    me.callback.call(this, event, ui);
                                }

                            }else {
                                $(this).data('existDraggable', ui.draggable);
                                me.callback.call(this, event, ui);
                            }
                        }
                    }else {
                        if(existDraggable) {
                            if(me.cover === false) {
                                Utils.alert('existed!', '提示框');
                            }else if(me.cover === true){
                                ui.draggable.data('repeatDraggable', 'isRepeat');
                                existDraggable.data('repeatDraggable', null);
                                $(this).data('existDraggable', ui.draggable);

                                me.callback.call(this, event, ui);
                            }

                        }else {
                            $(this).data('existDraggable', ui.draggable);
                            ui.draggable.data('repeatDraggable', 'isRepeat');

                            me.callback.call(this, event, ui);
                        }
                    }

                }
            });
        },

        rebuild: function(options, callback) {
            this.callback = callback || this.callback;
            this.source = options.source || this.source;
            this.target = options.target || this.target;
            if(options.cover === false) {
                this.cover = options.cover;
            }

            if(options.repeat === false) {
                this.repeat = options.repeat;
            }

            var draggableBar = $(this.$el).data('draggableBar');
            if(draggableBar) {
                this.build();
            }
        }
    };

    $.fn.draggableBar = function(options, callback) {
        options = options || {};
        var draggableBar = $(this).data('draggableBar');

        if(draggableBar) {
            if(options.rebuild === true) {
                draggableBar.rebuild(options, callback);
            }
        }else {
            $(this).data('draggableBar', new DraggableBar($(this), options, callback));
        }

        return this;
    };

    return App.Widgets.DraggableBar;
});