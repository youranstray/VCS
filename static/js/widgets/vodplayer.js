///<reference path="../libs/require.js" />
///<reference path="../libs/jQuery/jquery1.9.js" />
///<reference path="../libs/bootstrap/bootstrap-modal.js" />
///<reference path="../libs/underscore.js" />

define(['jquery','widgets/sliderbar','utils'], function ($) {
    var VodPlayer = App.Widgets.VodPlayer = function (options) {
        var me = this;
		this.info = this.src = '';
		$.extend(this,options);
		var ocxHtml ;
		if(Utils.isIE){
			ocxHtml = '<object classid="clsid:253C133E-7757-4781-AF3B-7D1A240C406A" class="vodplayer" width="100%" height="100%" codebase="'+RESOUCE_STATIC_URL+'/RtspPlayer.cab#V1,0,0,2"><param name="src" value="'+this.src+'"/></object>';
		}else{
			ocxHtml = '<embed class="vodplayer" src="'+this.src+'" width="100%" height="100%" type="application/mozilla-npruntime-rtspplayer-plugin"></embed>';
		}
		var bbar = '<div class="infobar"><div class="playbtn"></div><span class="infotext">'+this.info +'</span><span class="error"></span><div class="sliderbar"></div><div class="fullscreen"></div></div>';
		ocxHtml = '<div class="ctrlWrap">'+ocxHtml+'</div>'+bbar;
		this.$el = this.$el || (this.el && $(this.el));
		this.$el.addClass('vodplayerCt');
		this.$el.append(ocxHtml);
		this.status = 2;
		this.duration = 0;
		this.afterRender();
        return this;
    }

    VodPlayer.prototype = {
        constructor: VodPlayer,
        onVodErros:function(error){
			this.displayError(error);
		},
		onStepChange:function(current,total){
			this.slider.sliderbar('setValue',current/total*100,true);
			this.duration = total;
		},
		onStatusChange:function(status){
			switch(status){
				case 1:{//播放
					this.$el.addClass('playing');
					this.displayError('');
					this.slider.sliderbar('readonly',true);
				}
				break;
				case 2:{//停止
					this.$el.removeClass('playing');
					this.slider.sliderbar('setValue',0,true);
					this.slider.sliderbar('readonly',false);
				}
				break;
				case 3:{//暂停
					this.$el.removeClass('playing');
					this.slider.sliderbar('readonly',true);
				}
				break;
			}
			this.status = status;
		},
		getCtrl:function(){
			var domEl = this.$el.find('.vodplayer');
			return domEl.length && typeof(domEl[0].IsPlaying) !== "undefined" && domEl[0];
		},
		source:function(src){
			if(!this.playerctrl) return false;
			return this.playerctrl.src = src;
		},
		play:function(){
			if(!this.playerctrl) return false;
			return this.playerctrl.StartPlay();
		},
		stop:function(){
			if(!this.playerctrl) return false;
			return this.playerctrl.StopPlay();
		},
		pause:function(){
			if(!this.playerctrl) return false;
			return this.playerctrl.PausePlay();
		},
		resume:function(){
			if(!this.playerctrl) return false;
			return this.playerctrl.ResumePlay();
		},
		drop:function(npt){
			if(!this.playerctrl) return false;
			return this.playerctrl.DropPlay(npt);
		},
		setVodInfo:function(text){
			this.$el.find('.infobar span.infotext').html(text);
		},
		displayError:function(text){
			this.$el.find('.infobar span.error').html(text||'');
		},
		fullscreen:function(){
			if(!this.playerctrl) return false;
			return this.playerctrl.FullScreen();
		},
		onPlayClicked:function(){
			if(this.status == 1){
				this.pause();
			}else if(this.status == 2){
				this.play();
			}else{
				this.resume();
			}
		},
		onSliderChanged:function(slider, newValue, thumb, eOpts){
			if(this.status == 1){
				this.drop(parseInt(this.duration*newValue/100));
			}
		},
		afterRender:function(){
			this.slider = this.$el.find('.infobar .sliderbar').sliderbar({'onchange':$.proxy(this.onSliderChanged,this)});
			this.playerctrl = this.getCtrl();
			if(this.playerctrl){
				this.$el.find('.infobar .fullscreen').on('click',$.proxy(this.fullscreen,this));
				this.$el.find('.infobar .playbtn').on('click',$.proxy(this.onPlayClicked,this));
				var me = this;
				if(navigator.userAgent.indexOf("IE")>0){
					//IE
					this.playerctrl.attachEvent("Errors", function(e){me.onVodErros(e);});
					this.playerctrl.attachEvent("StepChange", function(current,total){me.onStepChange(current,total);});
					this.playerctrl.attachEvent("StatusChange", function(status){me.onStatusChange(status);});
				}else{
					//非IE
					this.playerctrl.addEventListener("Errors", function(e){ me.onVodErros(e);},true);
					this.playerctrl.addEventListener("StepChange", function(current,total){ me.onStepChange(current,total);},true);
					this.playerctrl.addEventListener("StatusChange", function(status){ me.onStatusChange(status);},true);
				}
			}
		}
    };

    return VodPlayer;
});
