/**
 * Created by Adams.Shen on 2016/2/19.
 */
define(['jquery'], function($) {
    var HideShowBar = App.Widgets.HideShowBar = function(target) {
        this.target = target;
        this.width = target.css('width');
        this.borderWidth = target.css('borderWidth');
        this.padding = target.css('padding');
        this.nextWidth = target.next().css('width');
        this.$el = $('.hideShowWidget');
        var me = this;
        if(this.$el.length < 1) {
            this.$el = $('<div class="hideShowWidget"></div>');
            this.$el.appendTo(this.target);
        }

        this.$el.click(function() {
            if(me.target.width() > 0) {
                me.target.animate({
                    width: '0px',
                    padding: '0px',
                    borderWidth: '0px'
                }, 10);
                me.target.next().css('width', '100%');
                me.$el.addClass('change');
            }else {
                me.target.animate({
                    width: me.width,
                    padding: me.padding,
                    borderWidth: me.borderWidth
                }, 10);
                me.target.next().css('width', me.nextWidth);
                me.$el.removeClass('change');
            }
        });
    };

    HideShowBar.prototype = {
        constructor: HideShowBar
    };

    $.fn.hideShowBar = function () {
        var hideShowBar = $(this).data('hideShowBar');
        if (hideShowBar) {

        } else {
            var hsb = new HideShowBar($(this));
            $(this).data('hideShowBar', hsb);
        }
        return this;
    };

    return App.Widgets.HideShowBar;
})