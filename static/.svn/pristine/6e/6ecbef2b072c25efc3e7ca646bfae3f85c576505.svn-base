define(['backbone',
		'paginator'],
    function (Backbone) {	
        var PagingBar = App.Widgets.PagingBar = function (options) {
            var me = this;
            var $paginator = this.$el = options.el;
			this.options = options;
            var obj = $paginator.data('paginator');
            if (obj) {
                return obj;
            } else {
                $paginator.data('paginator', me);
            }
			this.paginate();
        };
        PagingBar.prototype = {
            constructor: PagingBar,
            paginate : function (options) {
				var opts = $.extend(this.options, options);
				var me = this;
				opts.pagesize = opts.pagesize || 30;
				opts.total = opts.total || 1;
				opts.current = opts.current || 1;
				this.options  = opts;
				var tag = opts.total%opts.pagesize > 0 ? 1 : 0;
				this.$el.bootstrapPaginator({
						currentPage: opts.currentpage,
						bootstrapMajorVersion:3,
						totalPages: opts.total/opts.pagesize+tag,
						onPageChanged: function(e,oldPage,newPage){
							me.options.current = newPage;
							if(me.extraParam) me.extraParam.start = undefined;
							me.update(null,me.extraParam);
						}
				});
				this.update();
			},
			update:function(collection,extraParam){
				this.collection = collection || this.collection;
				this.extraParam = extraParam;
				if(this.collection){
					var me = this;
					var param = {'reset':true};
					param.data = {'start':(me.options.current-1)*me.options.pagesize,'limit':me.options.pagesize};
					$.extend(param.data,extraParam);
					param.success = function (collection,resp){
						var start = param.data.start;
						if(!collection.models.length && start!= 0 && resp.total != 0){
							start = start - me.options.pagesize;
							start < 0 && (start = 0);
							param.data.start = start;
							collection.fetch(param);
							return;
						}
						if(resp.total || resp.total == 0){
							if(resp.total == 0){
								me.$el.hide();
							}else{
								me.$el.show();
							}
							me.options.total = resp.total || 1;
							var tag = me.options.total%me.options.pagesize > 0 ? 1 : 0;
							var totalPages = Math.floor(me.options.total / me.options.pagesize)+tag;
							me.options.current = Math.floor(start/me.options.pagesize) + 1;
							me.$el.bootstrapPaginator({totalPages:totalPages,currentPage:me.options.current});
						}
					}
					me.collection.fetch(param);
				}
			}
		}
        return App.Widgets.PagingBar;
    });
