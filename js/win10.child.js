/**
 * Created by Yuri2 on 2017/7/31.
 */
//此处代码适合在子页面使用
window.Win10_parent=parent.Win10; //获取父级Win10对象的句柄
window.Win10_child={
    close:function () {
        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        Win10_parent._closeWin(index);
    },
    newMsg: function (title, content,handle_click){
        Win10_parent.newMsg(title, content,handle_click)
    },
    openUrl: function (url, title,max){
        var click_lock_name=Math.random();
        Win10_parent._iframe_click_lock_children[click_lock_name]=true;
        var index=Win10_parent.openUrl(url, title,max);
        setTimeout(function () {
            delete Win10_parent._iframe_click_lock_children[click_lock_name];
        },1000);
        return index;
    }
};

