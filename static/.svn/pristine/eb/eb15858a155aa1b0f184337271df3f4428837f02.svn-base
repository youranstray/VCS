// Custom checkbox
function initialize(checkBox) {
    var checkBoxChecked = "checked";
    var checkBoxDisabled = "disabled";
	var $checkbox = $(checkBox);
	var parent = $checkbox.parent();
	parent.removeClass(checkBoxChecked).removeClass(checkBoxDisabled);
	if($checkbox.is(':checked')){
		parent.addClass(checkBoxChecked);
	}
	if($checkbox.is(':disabled')){
		parent.addClass(checkBoxDisabled);
	}
};
function update(checkbox,params){
	var $checkbox = $(checkbox);
	if(params){
		var ct = $checkbox.parent('.checkboxCt');
		if( params.hasOwnProperty('disabled')){
			$checkbox.attr('disabled',params.disabled);
			params.disabled ? ct.addClass('disabled') : ct.removeClass('disabled');
		}else if(params.hasOwnProperty('checked')){
			$checkbox.attr('checked',params.checked);
			params.checked ? ct.addClass('checked') : ct.removeClass('checked');
		}
	}
}

$.fn.checkbox = function (options) {
		this.each(function () {
			var checkbox = $(this);
			if(!checkbox.data('checkbox')){
				checkbox.data('checkbox',true);
				checkbox.hide().wrap("<div class='checkboxCt'></div>").before("<div class='icon'></div><span>"+checkbox.attr('title')+"</span>");
				checkbox.change(function(){
					update(this,{'checked':checkbox.is(':checked')});
				});
				checkbox.parent('.checkboxCt').click(function(){
					var checkboxCt = $(this);
					checkboxCt.find('input').trigger("click");
				});
				initialize(checkbox);
			}
			update(checkbox,options);
		});
		
 };
$(document).ready(function(){
    $("input.checkbox[type='checkbox']").checkbox();
});

