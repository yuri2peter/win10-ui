## WIN10-UI

Win10-ui是一款win10风格的后台UI，让您轻松搭建一个别具一格的后台界面。

 | [官网](http://win10ui.yuri2.cn/) 
 | [demo](http://win10ui.yuri2.cn/src/demo.php) 
 | [github](https://github.com/yuri2peter/win10-ui)
 | [下载](https://github.com/yuri2peter/win10-ui/archive/master.zip)
 | [点击链接加入群【Win10-UI官方交流群】](https://jq.qq.com/?_wv=1027&k=4Er0u8i)

## 版本

v1.1.170805

>v1.1上线啦，涉及到API级别的修改，v1.0的小伙伴们请仔细阅读文档和DEMO平稳过渡

## 预览
 ![1](http://ojp71nnay.bkt.clouddn.com/win10-uiwin10-ui-5.png-IMG_800_400)
 
 ![1](http://ojp71nnay.bkt.clouddn.com/win10-uiwin10-ui-1.png-IMG_800_400)
 
 ![4](http://ojp71nnay.bkt.clouddn.com/win10-uiwin10-ui-4.png-IMG_800_400)


## 特性

* Win10的动态磁贴，可定义方块大小，添加随机动画
* 桌面图标自动排序
* 任务栏结合iframe子窗口，与windows一致的窗口管理体验
* 开始菜单+消息提示中心，满足后台UI的设计需求
* 极少的API，大部分功能可用html元素定义完成
* 响应式兼容，在手机浏览器也有不错的观感
* 目前只保证对主流现代浏览器的兼容性支持

## 前置组件

* layer(v3.0.3)
* animated.css
* jquery(v2.2.4)
* font-awesome

## 快速入门

#### 如何自定义桌面图标？

```html
<div id="win10-shortcuts">
     <div class="shortcut" onclick="//do something...">
           <img src="图片地址" class="icon" />
           <div class="title">图标底部文字</div>
     </div>
     <div class="shortcut" onclick="//do something...">
           <div class="icon">自定义任意html内容</div>
           <div class="title">图标底部文字</div>
     </div>
</div>
```
> 图标应设置为图片或自定义html填充div

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

* setBgUrl(bgs) 设置背景图片 ``Win10.setBgUrl({main:'宽屏壁纸url',mobile:'竖屏壁纸url',})``
* openUrl(url,title,areaAndOffset) ** 打开一个子窗口,参数列表：url,标题，[区域,尺寸]\(同layer的area和offset的设置格式，也可以传入'max'强制最大化\)
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
* newMsg(title, content,handle_click) 发送一个消息提醒，handle_click是点击回调
* isSmallScreen() 如果屏幕宽度小于768px返回true，否则返回false
* setAnimated(animated_classes,animated_liveness) 用css的类来设置磁贴动画。animated_liveness设置动画的触发概率(0~1)。animated_classes中存放css class数组，如``['class1','class2','class3-1 class3-2']``。磁贴将随机选择一个动画来播放（最多3秒）。
* exit() 关闭整个页面（有确认提示）
* aboutUs() 关于信息
* lang(cn,en) 简单的双语支持，如果是中文环境返回cn，否则返回en
* getLayeroByIndex(index) 根据openUrl返回的索引，返回窗体的jq对象
* hideWins() 最小化所有窗口
* setContextMenu(jq_dom, menu) 右键菜单配置（详见进阶篇）

## 进阶篇

>推荐仔细查看demo的代码，很多用法都有所提及

#### icon辅助类

本着极简的设计风格，所有图标相关的辅助类都设置为'icon'
```html
<div class="shortcut">
     <img class="icon" src="./img/icon/win10.png"/>
     <div class="title">Win10-UI官网</div>
</div>
```
>在桌面图标中，设置img.icon声明该图片是一个图标

```html
<div class="shortcut">
     <i class="fa fa-camera-retro icon"></i>
     <div class="title">Win10-UI官网</div>
</div>
```
>在桌面图标中，用.icon声明一个字体图标（以font awesome为例）

```html
Win10.openUrl("http://win10ui.yuri2.cn","<img class=\"icon\" src=\"./img/icon/win10.png\"/>Win10-UI官网");
Win10.openUrl("http://win10ui.yuri2.cn","<i class=\"fa fa-camera-retro icon\"></i>字体图标");
```
>没错！你也可以在openUrl函数的title参数中插入图片图标或者字体图标！

```html
<div class="item"><i class=" icon fa fa-wrench fa-fw"></i><span>API测试</span></div>
<div class="item"><img class="icon" src="./img/icon/doc.png"><span>文档图片图标</span></div>
```
>在开始菜单项中，使用icon一样可以定义图片图标和字体图标

#### 小磁贴设计

* 小磁贴的尺寸固定位44px/格，方便开发者设计自己想要的样式
* 灵活使用setAnimated函数
* 自定义一些hover的动画能起到很好的效果哦
* vue等前端神器的支持

#### 父子页沟通

* 要使用子页工具集，请先引入win10.child.js
* 自由的使用Win10_child对象吧，目前包含close、newMsg函数；也可以使用Win10对象，将指向父页的Win10对象。
* 父页打开子窗口的函数openUrl会返回ifram的索引index，使用getLayeroByIndex(index)获得子窗口对象,然后就可以方便的控制子窗口的行为了。

#### 颜色预定义

各种颜色 具体效果见 https://www.kancloud.cn/qq85569256/xzui/350010
* .black-green{background:#009688}
* .green{background:#5FB878}
* .black{background:#393D49}
* .blue{background:#1E9FFF}
* .orange{background:#F7B824}
* .red{background:#FF5722}
* .dark{background:#2F4056}

#### 右键菜单配置

Win10.setContextMenu(jq_dom, menu) 可接管系统默认的右键菜单。
其中jq_dom是jq对象或选择器字符串,menu是菜单配置项(true表示禁言默认菜单,null表示恢复默认菜单,[数组]表示自定义菜单)
~~~js
//典型用法(桌面菜单)
Win10.setContextMenu('#win10>.desktop',[
   '菜单标题', //单字符串，不带回调
   ['进入全屏',function () {Win10.enableFullScreen()}], //菜单项+点击回调
   ['退出全屏',function () {Win10.disableFullScreen()}],
   '|', //分隔符
   ['关于',function () {Win10.aboutUs()}],
]);

//设置menu为true会起到禁用系统默认菜单的作用
Win10.setContextMenu('#win10',true);
~~~
> 点击回调函数可以声明一个参数e,将传入点击事件的对象。特别的，e.data是触发右键菜单的对象。


## 未来开发计划

* 可拖拽磁贴
* 多主题切换
* 主题生成器
* 日历、音乐播放器等小组件
* 右键菜单功能加强

## 联系作者

联系邮箱：yuri2peter@qq.com

欢迎关注尤里2号的博客:[https://yuri2.cn](https://yuri2.cn)

## 写在最后

#### 2017/7/31

* 本来只是想做一个UI给自己的php框架后台使用，没想到一干起来就完全停不下来呢~
* 刚上线就有很多小伙伴表示了支持，在此尤里衷心的跟大家说一句：谢谢！
* 由于是刚开始，会有很多新点子，版本迭代会比较快，对于更新强迫症的小伙伴可能会不太友好，这种情况很快就会有所改观（为偷懒做铺垫）。
* 如果你用Win10-UI做了自己的网站，欢迎联系我投稿展示。
* 对于项目的发展有着重大贡献的小伙伴我会记录在contributor.md文件中。啥叫贡献？好的建议，重大bug，推广等等。
* 如果有一些贼蠢的错误请见谅，空闲时间一个人维护一个项目还是蛮蛋疼的（写于23:42的一句话）。
* ** 如果你喜欢我的项目不妨点一个赞，如果不嫌累的话最好在官网、开源中国和github都点点赞（捂脸）！**

-----------------------------------------------------------

## 更新日志

* 2017/8/07 [修复]修复了在小屏幕下打开自定义网页不会全屏的bug
* 2017/8/05 [增强]openUrl函数现在第三个参数可以自定义窗口的打开大小和位置了！
* 2017/8/05 [微调]win10.child.js增加了常用函数openUrl,父级对象句柄由Win10改名为Win10_parent;增加了一个紫色的css;优化内存释放
* 2017/8/02 [增强]右键菜单
* 2017/7/31 [增强]iframe子页js工具集
* 2017/7/31 [精简]去除了登录相关的API，登录页现在作为独立模板存在
* 2017/7/31 [增强]优化任务栏和子窗口图标的表现，设立图标辅助类icon；背景图片惰性加载（需要用api设置图片的url）；newMsg函数现在可以传入第三个参数设置点击的回调
* 2017/7/28 [协议]修改开源协议为SATA
* 2017/7/28 [修复]修正子窗口自动置顶有时失效的bug
* 2017/7/28 [优化]任务栏标题文字改为左对齐；添加img辅助类"win10-btn-icon"服务于任务栏小图标
* 2017/7/27 [增强]openUrl现在可以传入第三个参数max为true，强制以最大化打开网页
* 2017/7/26 [优化]点击子窗口的任意位置都会激活子窗口（不同于之前只有点击标题有效）
* 2017/7/25 [优化]现在子窗口全屏不会超出底部了；微调菜单的默认高度，看起来舒服一点；在时间刷新前和图标渲染前先行隐藏，防止影响观感（感谢@typ1758提供的建议）
* 2017/7/24 [修复]修复了笔误引起的自动激活最上层子窗口失效
* 2017/7/24 [优化]去除了窄屏幕切换菜单时偶尔产生的闪烁；微调桌面图标样式，变得更加紧凑
* 2017/7/21 [增强]简单的中英双语支持。对话框样式微调；磁贴固定宽度为44px/格(固定的尺寸比较好布局)
* 2017/7/20 [修复]jq3.1有bug(真是坑爹)，换为jq2.2.4
* 2017/7/19 [增强]全局默认不允许鼠标选择文字；优化url打开函数，自动补全http协议头