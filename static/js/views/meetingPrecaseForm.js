//预案表单管理
/*
*author:liyouran
*createtime:20160226
*/
define([
	'views/configform',
	'text!templates/meetingprecase-form.html',
	'views/advanceSetForm',
	'views/membersForm'
	], function (ConfigForm, mpFormTpl, AdvanceSetForm, MembersForm) {
		App.Views.MeetingPrecaseForm = ConfigForm.extend({
			events: {
				'click .submit': 'onSubmited',
				'click .advancedSet': 'onAdvancedSetted',
				'click .mcuCascade': 'onMcuCascade',
				'click .chairman': 'addChairman',
				'click .members': 'addMembers',
				'click .deleteMember': 'deleteMembers',
				'click .topmost': 'onTopmost',
				'click .bottommost': 'onBottommost',
				'click .rise': 'onRise',
				'click .drop': 'onDrop'
			},
			initialize: function (options) {
				ConfigForm.prototype.initialize.apply(this, arguments);
				_.bindAll(this, 'onSubmited', 'onAdvancedSetted', 'onMcuCascade', 'addChairman', 'addMembers', 'deleteMembers', 'onTopmost', 'onBottommost', 'onRise', 'onDrop');
				this.$el.html(mpFormTpl);
				this.advanceSetForm = new AdvanceSetForm({el: '', autoValid: true}); //会议高级设置
				this.chairmanForm = new MembersForm({}); //调度席
				this.membersForm = new MembersForm({}); //调度成员
				
			},
			render: function (options) {
			},
			onAdvancedSetted: function (e) { //会议高级设置
			},
			onMcuCascade: function (e) { //mcu级联与回传
			},
			addChairman: function (e) { //添加调度席
			},
			addMembers: function (e) { //添加调度员
			},
			deleteMembers: function (e) { //删除调度员
			},
			onTopmost: function (e) { //调度成员置顶
			},
			onBottommost: function (e) { //调度成员置底
			},
			onRise: function (e) { //提升
			},
			onDrop: function (e) { //下降
			},
			onSubmited: function (e) { //保存预案
			},
		});
		
		return App.Views.MeetingPrecaseForm;
	});