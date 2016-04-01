/**
 * Created by Adams.Shen on 2016/1/18.
 */

define(['backbone'], function(Backbone) {
    App.Models.Matrix = Backbone.Model.extend({
        defaults: {
            id: null,
            matrixInputSetsVO: [],
            matrixOutputsVO: []
        },
        urlRoot: '',   //向后端保存矩阵配置信息的url
        parse: function(data, options) {
            var record;
            if (data.hasOwnProperty('success') && data.hasOwnProperty('msg')) {
                //当服务端返回false时,data应该为原数据
                if (data.success == false && !data.data) {
                    record = this.attributes;
                }
                else {
                    record = data.data;
                }
            }
            else {
                record = data;
            }
            if (record) {
                //custom parse
            }
            return record;
        },
        validate: function(attrs, options) {
            var matrixName = attrs.matrixName;
            var matrixIp = attrs.matrixIp;
            var inputNum = attrs.inputNum;
            //var inputNo = attrs.matrixInputVO.inputNo;
            var outputNum = attrs.outputNum;
            //var outputNo = attrs.matrixOutputVO.outputNo;
            var matrixCompany = attrs.matrixCompany;
            //var matrixType = attrs.matrixType;
            var comment = attrs.comment;
            //var status = attrs.status;
            //var createTime = attrs.createTime;

            //var unitName = attrs.unitVO.unitName;

            if(!matrixName || !matrixName.trim()) {
                return '矩阵名称为必填项';
            }else if(matrixName.length > 32) {
                return '矩阵名称最大字符为32个字符';
            }

            if(!matrixIp || !matrixIp.trim()) {
                return '矩阵ip为必填项';
            }else if(!/^([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/.test(matrixIp)) {
                return '无效的ip地址';
            }

            if (!inputNum || !inputNum.trim()) {
                return '矩阵输入接口数为必填项';
            }else if(!/^\d+$/.test(parseInt(inputNum))) {
                return '矩阵输入接口数只能是数字';
            }else if(parseInt(inputNum) < 1 || parseInt(inputNum) > 1000) {
                return '矩阵输入接口数取值范围是1~1000';
            }

            if (!outputNum || !outputNum.trim()) {
                return '矩阵输出接口数为必填项';
            }else if(!/^\d+$/.test(parseInt(outputNum))) {
                return '矩阵输出接口数只能是数字';
            }else if(parseInt(outputNum) < 1 || parseInt(outputNum) > 1000) {
                return '矩阵输出接口数取值范围是1~1000';
            }

            if (!matrixCompany || !matrixCompany.trim()) {
                return '矩阵厂商为必选项';
            }

            /*if(matrixType !== undefined) {
                if (!matrixType || !matrixType.trim()) {
                    return '矩阵类型为必填项';
                }
            }*/

            if (comment && comment.length > 120) {
                return '备注最大长度为120个字符';
            }

            /*if(unitName !== undefined) {
                if(!unitName || !unitName.trim()) {
                    return '所属单位为必选项';
                }
            }*/

            for(var i = 0; i < attrs.matrixInputSetsVO.length; i++) {
                if(!attrs.matrixInputSetsVO[i].inputName || !attrs.matrixInputSetsVO[i].inputName.trim()) {
                    return '矩阵输入接口名称为必填项';
                }else if(attrs.matrixInputSetsVO[i].inputName.length > 16) {
                    return '矩阵输入接口名称最大长度为16个字符';
                }
            }

            for(var j = 0; j < attrs.matrixOutputsVO.length; j++) {
                if(!attrs.matrixOutputsVO[j].outputName || !attrs.matrixOutputsVO[j].outputName.trim()) {
                    return '矩阵输出接口名称为必填项';
                }else if(attrs.matrixOutputsVO[j].outputName.length > 16) {
                    return '矩阵输出接口名称最大长度为16个字符';
                }
            }

            /*if(createTime !== undefined) {
                if (createTime || !createTime.trim()) {
                    return '矩阵创建时间为必填项';
                }
            }*/

            /*if(status !== undefined) {
                if (status || !status.trim()) {
                    return '矩阵状态为必填项';
                }
            }*/
        }
    });

    return App.Models.Matrix;
});