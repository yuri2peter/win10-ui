## WIN10-UI

Win10-ui是一款win10风格的后台UI，让你轻松搭建一个别具一格的后台界面。

 | [官网](http://win10ui.yuri2.cn/) 
 | [demo](http://win10ui.yuri2.cn/src/demo.html) 
 | [github](https://github.com/yuri2peter/win10-ui)
 | [下载](https://github.com/yuri2peter/win10-ui/archive/master.zip)

## 预览
 ![1](http://ojp71nnay.bkt.clouddn.com/win10-uiwin10-ui-5.png)
 
 ![1](http://ojp71nnay.bkt.clouddn.com/win10-uiwin10-ui-1.png)
 
 ![4](http://ojp71nnay.bkt.clouddn.com/win10-uiwin10-ui-4.png)


## 特性

* Win10的动态磁贴，可定义方块大小，添加随机动画
* 桌面图标自动排序
* 任务栏结合iframe子窗口，与windows一致的窗口管理体验
* 开始菜单+消息提示中心，满足后台UI的设计需求
* 极少的API，大部分功能可用html元素定义完成
* 响应式兼容，在手机浏览器也有不错的观感
* 目前只保证对主流现代浏览器的兼容性支持

## 前置组件

* layer
* animated.css
* jquery
* font-awesome

## 使用说明

#### 如何自定义桌面图标？

```html
<div id="win10-shortcuts">
     <div class="shortcut" onclick="//do something...">
           <div class="icon"><img src="图片地址"/></div>
           <div class="title">图标底部文字</div>
     </div>
</div>
```
> 图标并不一定要求提供图片图标。图标的图片默认是填充整个div的（100%）。

#### 如何自定义开始菜单列表?

```html
<div class="list win10-menu-hidden animated animated-slideOutLeft">
     <div class="item">一级菜单</div>
     <div class="item">一级菜单</div>
     <div class="sub-item">二级菜单</div>
     <div class="sub-item">二级菜单</div>
     <div class="sub-item">二级菜单</div>
     <div class="item">一级菜单</div>
     <div class="item">一级菜单</div>
</div>
```
>一级菜单添加类item，二级添加sub-item。不需要用一级菜单“包裹”二级菜单，将自动识别二级菜单的归属，请注意排序。
>特别的，你可以为item(sub-item)的子项添加类"icon",将获得默认的图标样式，如下——
```html
<div class="item">
    <span class=" icon fa fa-wrench fa-fw"></span>
    <span>菜单项</span>
</div>
```

#### 如何自定义开始菜单磁贴?

```html
<div class="blocks">
    <div class="menu_group">
        <div class="title">磁贴组标题1</div>
        <div loc="1,1" size="1,1" class="block">
            <div class="content">磁贴1</div>
        </div>
        <div loc="2,1" size="1,1" class="block">
            <div class="content">磁贴2</div>
        </div>
    </div>
    <div class="menu_group">
        <div class="title">磁贴组标题2</div>
        <div loc="1,1" size="2,2" class="block">
            <div class="content">磁贴3</div>
        </div>
    </div>
</div>
```
> 磁贴区域被分成若干小格，每一行最多6格。loc='x,y'中的x表示横坐标，y表示纵坐标（以左上方为1,1点）。size='w,h'中的w和h表示格子的宽度和高度（以格为单位）。

## API
* 调用：Win10-ui的api应当在其初始化之后被调用
```html
<script>
    Win10.onReady(function () {
        //Win10-ui初始化完成后将执行此处代码
    });
</script>
```

> 所有方法都需要加``Win10.``前缀。

* **openUrl(url,title) 打开一个子窗口**
* onReady(handle) win10-ui初始化完毕后的回调
* menuOpen() 开始菜单打开
* menuClose() 开始菜单关闭
* menuToggle() 开始菜单打开/关闭
* commandCenterOpen() 信息中心打开
* commandCenterClose() 信息中心关闭
* commandCenterToggle() 信息中心打开/关闭
* renderShortcuts() 重新渲染桌面图标(可用与动态添加或删除了桌面图标之后)
* renderMenuBlocks() 重新渲染磁贴(可用与动态添加或删除了磁贴之后)
* buildList() 重新预处理菜单列表(可用与动态添加或删除了菜单项之后)
* newMsg(title, content) 发送一个消息提醒
* isSmallScreen() 如果屏幕宽度小于768px返回true，否则返回false
* setBackgroundImg(img_url) 指定桌面背景图片
* setLoginImg(img_url) 指定登录界面背景图片
* setAnimated(animated_classes,animated_liveness) 用css的类来设置磁贴动画。animated_liveness设置动画的触发概率(0~1)。animated_classes中存放css class数组，如``['class1','class2','class3-1 class3-2']``。磁贴将随机选择一个动画来播放（最多3秒）。
* exit() 立即关闭整个页面
* login() 隐藏登录界面
* logout() 显示登录界面

## 未来开发计划

* 多语言支持
* 可拖拽磁贴
* 多主题切换
* 日历、音乐播放器等小组件
* 右键菜单功能加强

## 联系作者

联系邮箱：yuri2peter@qq.com

欢迎关注尤里2号的博客:[https://yuri2.cn](https://yuri2.cn)

-----------------------------------------------------------

## 更新日志

* 2017/7/24 [优化]去除了窄屏幕切换菜单时偶尔产生的闪烁
* 2017/7/21 [增强]简单的中英双语支持。对话框样式微调。磁贴固定宽度为44px/格(固定的尺寸比较好布局)。
* 2017/7/20 [修复]jq3.1有bug(真实坑爹)，换为jq2.2.4
* 2017/7/19 [增强]全局默认不允许鼠标选择文字；优化url打开函数，自动补全http协议头