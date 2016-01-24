///<reference path="../libs/require.js" />
///<reference path="../libs/jQuery/jquery1.9.js" />
///<reference path="../libs/bootstrap/bootstrap-modal.js" />
///<reference path="../libs/underscore.js" />

define(['jquery'], function ($) {
    var el_html = "<div id='msgTip' ><div class='msgCthandler'><span>隐藏</span></div><ul></ul></div>";
    var MessageTip = App.Widgets.MessageTip = function (options) {
        var me = this;
        this.itemTpl = "<li class='message' data-id=<%=index%>><span><%=msg%></span><div class='btns'><% if(type=='confirm'){%><div class='btn accept'>同意</div><div class='btn denied'>拒绝</div><%}%></div></li>";
        this.$el = $('#msgTip');
        this.keyindex = 0;
        this.messages = {};
        this.livetimers = {};
        if (this.$el.length < 1) {
            this.$el = $(el_html).appendTo(document.body).hide();
        }
        this.$el.find('.msgCthandler').on('click', function (e) {
            var $handler = $(e.currentTarget);
            if (me.$el.hasClass('collapsed')) {
                me.popup();
            }
            else {
                me.pullback();
            }
        });
        return this;
    }

    MessageTip.prototype = {
        constructor: MessageTip,
        add: function (msg, type, callback, timeout, scope, id) {
            var me = this;
            var index = this.keyindex;
            if (id) {
                if (me.$el.find('li[data-id=' + id + ']').length > 0) {
                    return id;
                }
                index = id;
            }
            var ul = this.$el.find('ul');
            var $li = $(_.template(this.itemTpl, {
                msg: msg,
                type: type,
                index: index
            })).appendTo(ul);
            //backup message
            this.messages[index] = { 'msg': msg, 'type': type, 'callback': callback, 'timeout': timeout, 'scope': scope, '$el': $li };
            if (type !== 'confirm') {
                timeout = timeout || 1000;
            }
            var timer = null;
            if (timeout && timeout > 0) {
                timer = setTimeout(function () {
                    if (me.exist(index)) {
                        if (callback) {
                            callback.call(scope || this, null);
                        }
                        me.remove(index);
                    }
                }, timeout);
                this.livetimers[index] = timer;
            }
            $li.on('click', '.btn', function (e) {
                if (callback) {
                    callback.call(scope || this, $(e.target).hasClass('accept'));
                }
                me.remove(index);
            });
            this.keyindex++;
            this.$el.show();
            return index;
        },
        get: function (itemId) {
            return this.messages[itemId];
        },
        exist: function (itemId) {
            return this.$el.find('li[data-id=' + itemId + ']').length > 0;
        },
        find: function (reg) {
            var result = [];
            _.each(this.$el.find('li[data-id]'), function (el) {
                var dataId = $(el).attr('data-id');
                if (dataId.match(reg)) {
                    result.push(dataId);
                }
            }, this);
            return result;
        },
        remove: function (itemIds) {
            if (itemIds != null && itemIds != undefined) {
                if (_.isArray(itemIds)) {
                    _.each(itemIds, function (itemId) {
                        this.remove(itemId);
                    }, this);
                } else {
                    var itemId = itemIds;
                    this.$el.find('li[data-id=' + itemId + ']').remove();
                    if (this.$el.find('li').length < 1) {
                        this.$el.hide();
                    }
                    this.messages[itemId] = undefined;
                    var timer = this.livetimers[itemId];
                    if (timer) {
                        clearTimeout(timer);
                    }
                }
            }
        },
        popup: function () {
            this.$el.find('.msgCthandler span').text('隐藏');
            this.$el.removeClass('collapsed');
        },
        pullback: function () {
            this.$el.find('.msgCthandler span').text('显示');
            this.$el.addClass('collapsed');
        }
    };

    return MessageTip;
});
















