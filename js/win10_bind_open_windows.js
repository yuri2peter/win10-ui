/**
 * win10_bind_open_windows 子窗口事件自动绑定插件
 * @author:vG
 * @修订:Yuri2
 * @version:2.0
 * 说明: 所有#win10下的元素加入类win10-open-window即可自动绑定openUrl函数，无须用onclick手动绑定
 */

/*
 * 标签属性说明
 * data-title:窗口标题
 * data-url:窗口url地址
 * data-icon-image:图片图标的url
 * data-icon-font:字体图标名 如star
 * data-icon-bg:图标背景色 black-green,green,black,blue,orange,red,dark,purple
 * data-area-offset:窗口 [区域,偏移]
 *
 * 特别的，如果子节点有icon和title的css类，可以自动识别为图标和标题，无须设置data-title和data-icon-image(font)
 *
 */
/**
 * 完整写法
    <div class="shortcut win10-open-window"
        data-url="http://www.baidu.com"
        data-title="我是百度"
        data-icon-image="https://www.baidu.com/img/bd_logo1.png"
        data-icon-font="star"
        data-icon-bg="red"
        data-area-offset="30px,20px">
        <i class="icon fa fa-fw fa-user-circle blue" ></i>
        <div class="title">百度</div>
    </div>

 * 简洁写法(推荐)
    <div class="shortcut win10-open-window" data-url="www.baidu.com" >
        <i class="icon fa fa-fw fa-user-circle blue" ></i>
        <div class="title">百度</div>
    </div>

 *
 */

$(function(){
    // 注册事件委派 打开url窗口
    $('#win10').on('click', '.win10-open-window', function() {
        //>> 获取当前点击的对象
        $this = $(this);
        //>> 判断url地址是否为空 如果为空 不予处理
        if($this.data('url') !== "") {
            //>> 获取弹窗标题
            var title = $this.data('title'),
                areaAndOffset;
            //>> 判断是否有标题图片
            var bg=$this.data('icon-bg')?$this.data('icon-bg'):'';
            if($this.data('icon-image')) {
                //>> 加入到标题中
                title = '<img class="icon '+bg+'" src="' + $this.data('icon-image') + '"/>' + title;
            }
            if($this.data('icon-font')) {
                //>> 加入到标题中
                title = '<i class="fa fa-fw fa-'+$this.data('icon-font')+' icon '+bg+'"></i>' + title;
            }
            if(!title && $this.children('.icon').length===1 && $this.children('.title').length===1){
                title = $this.children('.icon').prop("outerHTML")+$this.children('.title').html();
            }
            //>> 判断是否需要 设置 区域宽度高度
            if($this.data('area-offset')) {
                areaAndOffset = $this.data('area-offset');
                //>> 判断是否有分隔符
                if(areaAndOffset.indexOf(',')){
                    areaAndOffset = eval(areaAndOffset);
                }
            }
            //>> 调用win10打开url方法
            Win10.openUrl($this.data('url'), title, areaAndOffset);
        }
    })

});