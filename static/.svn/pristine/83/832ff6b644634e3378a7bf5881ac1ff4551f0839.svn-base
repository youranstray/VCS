/**
 * Created by Adams.Shen on 2016/2/26.
 */
define(['jquery', 'nicescroll'], function($) {
    var LocalMonitoringStyle = App.Widgets.LocalMonitoringStyle = function(el, options) {
        this.$el = el;
        this.options = options;
        this.orientation = this.options.orientation;
        this.numbers = this.options.numbers;

        this.build();
    };

    LocalMonitoringStyle.prototype = {
        constructor: LocalMonitoringStyle,

        build: function() {
            var $monitoringCellParent = $('<div></div>');
            for(var i = 0; i < this.numbers; i++) {
                var $monitoringCell = $('<div id="monitoringCell' + (i + 1) + '" class="monitoringCell"></div>');
                var $orientationCell = $('<i class="fa fa-arrow-circle-o-up"></i>' +
                    '<i class="fa fa-arrow-circle-o-right"></i>' +
                    '<i class="fa fa-arrow-circle-o-left"></i>' +
                    '<i class="fa fa-arrow-circle-o-down"></i>' +
                    '<i class="fa fa-arrows-alt"></i>' +
                    '<i class="fa fa-close"></i>' +
                    '<i class="fa fa-sun-o"></i>' +
                    '<i class="fa fa-money"></i>' +
                    '<i class="fa fa-arrows"></i>');
                var $videoCell = $('<div class="videoCell"></div>' +
                    '<div class="videoTools"></div>');
                $monitoringCell.append($orientationCell);
                $monitoringCell.append($videoCell);
                $monitoringCell.appendTo($monitoringCellParent);
                $monitoringCellParent.appendTo(this.$el);

                if(this.orientation == 'horizontal') {
                    $monitoringCell.css({
                        'width': this.$el.outerWidth() / 4,
                        'height': this.$el.outerHeight(),
                        'position': 'relative',
                        'border': '1px solid #A9A9A9',
                        'float': 'left'
                    });
                }else if(this.orientation == 'vertical'){
                    $monitoringCell.css({
                        'width': this.$el.innerWidth(),
                        'height': (this.$el.innerHeight() - 10)/2,
                        'position': 'relative',
                        'border': '1px solid #A9A9A9',
                        'margin-bottom': '10px'
                    });
                }

                $monitoringCell.find('.videoCell').css({
                    'height': '60%',
                    'width': '70%',
                    'margin': '12% auto',
                    'border': '1px solid #A9A9A9'
                });
                $monitoringCell.find('.videoTools').css({
                    'height': $monitoringCell.outerHeight() - $monitoringCell.find('.videoCell').outerHeight(true) - parseInt($monitoringCell.css("border-top-width")),
                    'background-color': '#A9A9A9'
                });
                $monitoringCell.find('i').css({
                    'position': 'absolute',
                    'font-size': $monitoringCell.find('.videoTools').height() - 8 + 'px',
                    'cursor': 'pointer'
                });
                $monitoringCell.find('.fa-arrow-circle-o-up').css({
                    'left': ($monitoringCell.outerWidth() - $monitoringCell.find('.fa-arrow-circle-o-up').outerWidth())/2,
                    'top': (parseInt($monitoringCell.find('.videoCell').css("margin-top")) - $monitoringCell.find('.fa-arrow-circle-o-up').outerHeight())/2
                });
                $monitoringCell.find('.fa-arrow-circle-o-right').css({
                    'right': (($monitoringCell.outerWidth() - $monitoringCell.find('.videoCell').outerWidth())/2 - $monitoringCell.find('.fa-arrow-circle-o-right').outerWidth())/2,
                    'top': ($monitoringCell.find('.videoCell').outerHeight(true) - $monitoringCell.find('.fa-arrow-circle-o-right').outerHeight())/2
                });
                $monitoringCell.find('.fa-arrow-circle-o-left').css({
                    'left': (($monitoringCell.outerWidth() - $monitoringCell.find('.videoCell').outerWidth())/2 - $monitoringCell.find('.fa-arrow-circle-o-left').outerWidth())/2,
                    'top': ($monitoringCell.find('.videoCell').outerHeight(true) - $monitoringCell.find('.fa-arrow-circle-o-left').outerHeight())/2
                });
                $monitoringCell.find('.fa-arrow-circle-o-down').css({
                    'left': ($monitoringCell.outerWidth() - $monitoringCell.find('.fa-arrow-circle-o-down').outerWidth())/2,
                    'bottom': (parseInt($monitoringCell.find('.videoCell').css("margin-bottom")) - $monitoringCell.find('.fa-arrow-circle-o-down').outerHeight())/2 + $monitoringCell.find('.videoTools').height()
                });
                $monitoringCell.find('.fa-close').css({
                    'right': '10px',
                    'top': (parseInt($monitoringCell.find('.videoCell').css("margin-top")) - $monitoringCell.find('.fa-arrow-circle-o-up').outerHeight())/2,
                });
                $monitoringCell.find('.fa-arrows-alt').css({
                    'right': 20 + $monitoringCell.find('.fa-close').outerWidth(),
                    'top': (parseInt($monitoringCell.find('.videoCell').css("margin-top")) - $monitoringCell.find('.fa-arrow-circle-o-up').outerHeight())/2
                });
                $monitoringCell.find('.fa-money').css({
                    'left': ($monitoringCell.outerWidth() - $monitoringCell.find('.fa-money').outerWidth())/2,
                    'bottom': ($monitoringCell.find('.videoTools').outerHeight() - $monitoringCell.find('.fa-money').outerHeight())/2
                });
                $monitoringCell.find('.fa-sun-o').css({
                    'left': $monitoringCell.find('.fa-money').position().left - 60,
                    'bottom': ($monitoringCell.find('.videoTools').outerHeight() - $monitoringCell.find('.fa-sun-o').outerHeight())/2
                });
                $monitoringCell.find('.fa-arrows').css({
                    'left': $monitoringCell.find('.fa-money').position().left + 60,
                    'bottom': ($monitoringCell.find('.videoTools').outerHeight() - $monitoringCell.find('.fa-arrows').outerHeight())/2
                });
            }

            if(this.orientation == 'horizontal') {
                if(this.numbers < 4 && this.numbers > 0) {
                    for(var j = 0; j < 4 - this.numbers; j++) {
                        var $monitoringCell = $('<div class="monitoringBlankCell"></div>');
                        $monitoringCell.appendTo($monitoringCellParent);
                        $monitoringCellParent.appendTo(this.$el);

                        $monitoringCell.css({
                            'width': this.$el.outerWidth() / 4,
                            'height': this.$el.outerHeight(),
                            'position': 'relative',
                            'border': '1px solid #A9A9A9',
                            'float': 'left'
                        });
                    }

                    $monitoringCellParent.css({
                        'width': $monitoringCell.outerWidth() * 4,
                        'float': 'left'
                    });
                }else if(this.numbers >= 4){
                    $monitoringCellParent.css({
                        'width': $monitoringCell.outerWidth() * this.numbers,
                        'float': 'left'
                    });
                }
            }else if(this.orientation == 'vertical') {
                if(this.numbers < 2 && this.numbers > 0) {
                    for(var j = 0; j < 2 - this.numbers; j++) {
                        var $monitoringCell = $('<div class="monitoringBlankCell"></div>');
                        $monitoringCell.appendTo($monitoringCellParent);
                        $monitoringCellParent.appendTo(this.$el);

                        $monitoringCell.css({
                            'width': this.$el.innerWidth(),
                            'height': (this.$el.innerHeight() - 10)/2,
                            'position': 'relative',
                            'border': '1px solid #A9A9A9',
                            'margin-bottom': '10px'
                        });
                    }
                    $monitoringCellParent.css({
                        'height': $monitoringCell.outerHeight() * 2 + parseInt($monitoringCell.css('margin-bottom'))*(2 - 1),
                        'width': this.$el.innerWidth()
                    });
                    $monitoringCell.last().css('margin-bottom', '0px');
                }else if(this.numbers >= 2) {
                    $monitoringCellParent.css({
                        'height': $monitoringCell.outerHeight() * this.numbers + parseInt($monitoringCell.css('margin-bottom'))*(this.numbers - 1),
                        'width': this.$el.innerWidth()
                    });
                    $monitoringCell.last().css('margin-bottom', '0px');
                }
            }

            this.$el.niceScroll({
                cursorborder: "0",
                cursorcolor: "#474747",
                cursorborderradius: 3,
                bouncescroll: true
            });

            var me = this;
            this.$el.find('.fa-close').click(function() {
                $(this).parent().find('.videoCell').empty();
                //$(this).parent().find('.videoCell').removeData();
            });
        },
        rebuild: function(options) {
            this.options = options || this.options;
            this.orientation = this.options.orientation;
            this.numbers = this.options.numbers;

            this.$el.empty();
            this.build();
        }
    };

    $.fn.localMonitoringStyle = function(options) {
        var localMonitoringStyle = $(this).data('localMonitoringStyle');
        if(localMonitoringStyle) {
            localMonitoringStyle.rebuild(options);
        }else {
            $(this).data('localMonitoringStyle', new LocalMonitoringStyle($(this), options));
        }
        return this;
    };

    return App.Widgets.LocalMonitoringStyle;
});