/**
 * Created by Adams.Shen on 2016/2/23.
 */
define(['jquery', 'nicescroll'], function($) {
    var DisplayStyleBar = App.Widgets.DisplayStyleBar = function(el, rows, columns) {
        this.build(el, rows, columns);
    };

    DisplayStyleBar.prototype = {
        constructor: DisplayStyleBar,

        build: function(el, rows, columns) {
            this.$el = el;
            this.rows = rows;
            this.columns = columns;
            this.numbers = rows*columns;
            var me = this;
            var rowHeight;
            var columnWidth;
            var rowReal;
            var columnReal;
            var columnsWidth;

            if(rows == 1) {
                if(columns == 1) {
                    rowHeight = this.$el.height() / this.rows;
                    columnWidth = this.$el.width() / this.columns;
                    rowReal = this.columns;
                }else if(columns == 2){
                    rowHeight = this.$el.height() / 2;
                    columnWidth = this.$el.width() / this.columns;
                    rowReal = this.columns;
                }else if(columns == 3) {
                    rowHeight = this.$el.height() / 3;
                    columnWidth = this.$el.width() / this.columns;
                    rowReal = this.columns;
                }else {
                    rowHeight = this.$el.height() / 3;
                    columnWidth = this.$el.width() / 3;
                    rowReal = 3;
                }
                columnReal = this.columns;
            }else if(rows == 2) {
                if(columns == 1) {
                    rowHeight = this.$el.height() / this.rows;
                    columnWidth = this.$el.width() / 2;
                    rowReal = 2;
                    columnReal = 2;
                }else if(columns == 2){
                    rowHeight = this.$el.height() / this.rows;
                    columnWidth = this.$el.width() / this.columns;
                    rowReal = 2;
                    columnReal = this.columns;
                }else if(columns == 3) {
                    rowHeight = this.$el.height() / 3;
                    columnWidth = this.$el.width() / 3;
                    rowReal = 3;
                    columnReal = this.columns;
                }else {
                    rowHeight = this.$el.height() / 3;
                    columnWidth = this.$el.width() / 3;
                    rowReal = 3;
                    columnReal = this.columns;
                }
            }else if(rows >= 3) {
                rowHeight = this.$el.height() / 3;
                columnWidth = this.$el.width() / 3;
                rowReal = this.rows;
                if(columns < 3) {
                    columnReal = 3;
                }else {
                    columnReal = this.columns;
                }
            }

            for(var i = 1; i <= rowReal; i++) {
                this.$cellParent = $('<div></div>');
                if (i <= this.rows) {
                    for (var j = 1; j <= columnReal; j++) {
                        if(j <= this.columns) {
                            this.$cell = $('<div class="displayStyle"></div>');
                            this.$cell.css({
                                'height': rowHeight,
                                'width': columnWidth,
                                'float': 'left',
                                'backgroundColor': '#eaf1f1',
                                'border': '1px solid #000'
                            });
                        }else {
                            this.$cell = $('<div></div>');
                            this.$cell.css({
                                'height': rowHeight,
                                'width': columnWidth,
                                'float': 'left',
                                'backgroundColor': '#f4f8ff',
                                'border': '1px solid #000'
                            });
                        }
                        this.$cell.appendTo(this.$cellParent);
                    }
                }else {
                    for (var j = 1; j <= this.columns; j++) {
                        this.$cell = $('<div></div>');
                        this.$cell.css({
                            'height': rowHeight,
                            'width': columnWidth,
                            'float': 'left',
                            'backgroundColor': '#f4f8ff',
                            'border': '1px solid #000'
                        });
                        this.$cell.appendTo(this.$cellParent);
                    }
                }

                columnsWidth = columnWidth*columnReal;
                this.$cellParent.css('width', columnsWidth);
                this.$cellParent.css('float', 'left');
                this.$el.niceScroll({
                    cursorborder: "0",
                    cursorcolor: "#474747",
                    cursorborderradius: 3,
                    bouncescroll: true
                });

                this.$cellParent.appendTo(this.$el);
            }
        },

        rebuild: function(rows, columns) {
            this.$el.empty();
            this.build(this.$el, rows, columns);
        }
    };

    $.fn.displayStyleBar = function(rows, columns) {
        var displayStyleBar = $(this).data('displayStyleBar');

        if(displayStyleBar) {
            displayStyleBar.rebuild(rows, columns);
        }else {
            $(this).data('displayStyleBar', new DisplayStyleBar($(this), rows, columns));
        }

        return this;
    };

    return App.Widgets.DisplayStyleBar;
});