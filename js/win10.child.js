/**
 * Created by Yuri2 on 2017/7/31.
 */
//此处代码适合在子页面使用
var Win10=parent.Win10; //获取父级Win10对象的句柄
var Win10_child={
    close:function () {
        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭
    },
    newMsg: function (title, content,handle_click){
        Win10.newMsg(title, content,handle_click)
    }
};

