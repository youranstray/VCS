/**
 * Created by Adams.Shen on 2016/2/24.
 */
define(['jquery', 'nicescroll'], function($) {
    var TextFuzzySearch = App.Widgets.TextFuzzySearch = function(el, searchSet) {
        this.$el = el;
        this.searchSet = searchSet;
        //this.$el.wrap('<div class="fuzzySearch"></div>');
        this.$el.wrap('<div></div>');
        this.currentMarginBottom = this.$el.css('margin-bottom');

        this.$el.parent().prepend($('<i class="fa fa-cog"></i>'));
        this.$el.css({
            'padding-left': '10px'
        });
        this.$el.parent().css({
            'position': 'relative',
            //'display': 'inline'
            'display': 'table-cell'
        });
        this.$el.parent().find('i').css({
            'position': 'absolute',
            'left': this.$el.position().left + this.$el.outerWidth() - this.$el.outerHeight() - 10,
            'line-height': this.$el.outerHeight() + 'px',
            'font-size': this.$el.outerHeight() - 10 + 'px',
            'cursor': 'pointer',
            'z-index': '999'
        });

        var me = this;
        var width = me.$el.outerWidth();
        var height = me.$el.outerHeight();
        //this.searchContent = $(this.$el.children().get(0)).val().trim();

        this.$el.on('keydown keyup focus', function(e) {
            me.$el.next().remove();
            me.searchContent = me.$el.val().trim();

            if(me.searchContent != '') {
                //me.$searchCellParent = $('<ul class="searchCellParent"></ul>');
                me.$searchCellParent = $('<ul></ul>');
                var searchCellLength = me.searchSet.length;
                me.isExist = false;

                for (var i = 0; i < searchCellLength; i++) {
                    if (me.searchSet[i].indexOf(me.searchContent) >= 0) {
                        me.isExist = true;
                        //var $searchCell = $('<li class="searchCell">' + me.searchSet[i] + '</li>');
                        var $searchCell = $('<li>' + me.searchSet[i] + '</li>');
                        $searchCell.css({
                            'height': '30px',
                            'cursor': 'pointer'
                        });

                        $searchCell.click(function() {
                            var $cellContent = me.searchSet[i];
                            me.$el.val($(this).text());
                            me.$searchCellParent.css('display', 'none');
                            me.$el.css({
                                'margin-bottom': me.currentMarginBottom
                            });
                        });

                        var currentColor = $searchCell.css('background-color');
                        $searchCell.hover(function() {
                            $(this).css({
                                'background-color': '#A9A9A9'
                            });
                        },function() {
                            $(this).css({
                                'background-color': currentColor
                            });
                        });

                        $searchCell.appendTo(me.$searchCellParent);
                    }
                }
                me.$searchCellParent.css({
                    'position': 'absolute',
                    'width': me.$el.outerWidth(),
                    //'top': me.$el.height() - parseInt(me.$el.css("border-left-width")),
                    'top': me.$el.outerHeight(),
                    'left': me.$el.position().left,
                    'padding': '10px 10px 10px',
                    'borderLeft': '1px solid #A9A9A9',
                    'borderRight': '1px solid #A9A9A9',
                    'borderBottom': '1px solid #A9A9A9',
                    'overflow-y': 'auto',
                    'height': '185px'
                });

                if(me.isExist) {
                    me.$searchCellParent.appendTo(me.$el.parent());
                    me.$searchCellParent.niceScroll({
                        cursorcolor: "#474747",
                        cursorborderradius: 3,
                        bouncescroll: true,
                        cursorborder: "0"
                    });
                    me.$el.css({
                        'margin-bottom': me.$searchCellParent.outerHeight() + 'px'
                    });
                    if(e.which == 13) {
                        me.$el.val(me.$searchCellParent.children().first().text());
                        me.$searchCellParent.css({
                            'display': 'none'
                        });
                        me.$el.css({
                            'margin-bottom': me.currentMarginBottom
                        });
                    }
                }else {
                    me.$el.css({
                        'margin-bottom': me.currentMarginBottom
                    });
                }
            }else {
                me.$el.css({
                    'margin-bottom': me.currentMarginBottom
                });
            }
        });

        /*this.$el.on('blur', function() {
            if(me.isExist) {
                me.$searchCellParent.css('display', 'none');
            }
        });*/
    };

    TextFuzzySearch.prototype = {
        constructor: TextFuzzySearch,
        rebuild: function(searchSet) {
            this.searchSet = searchSet || this.searchSet;
        }
    };

    $.fn.textFuzzySearch = function(searchSet) {
        var textFuzzySearch = $(this).data('textFuzzySearch');
        if(textFuzzySearch) {
            textFuzzySearch.rebuild(searchSet);
        }else {
            $(this).data('textFuzzySearch', new TextFuzzySearch($(this), searchSet));
        }

        return this;
    };

    return App.Widgets.TextFuzzySearch;
});