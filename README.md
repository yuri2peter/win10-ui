## WIN10-UI

Win10-UI是一款win10风格的后台UI，让您轻松搭建一个别具一格的后台界面。

 | [官网](http://win10ui.yuri2.cn/) 
 | [demo](http://win10ui.yuri2.cn/src/demo.php) 
 | [github](https://github.com/yuri2peter/win10-ui)
 | [下载](https://github.com/yuri2peter/win10-ui/archive/master.zip)
 | [点击链接加入群【Win10-UI官方交流群】](https://jq.qq.com/?_wv=1027&k=5fAsios)

## 版本

v1.1.2.4

> 该版本修正了两个烦心的小bug。对于1.1.2.3版本的老用户，替换该版本的win10.js文件即可。


## 预览

 ![1](http://win10ui.yuri2.cn/src/img/preview/win10-preview.gif)
 
 ![1](http://win10ui.yuri2.cn/src/img/preview/win10-preview-mobile.gif)
 

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
* openUrl(url,title,areaAndOffset) ** 打开一个子窗口,参数列表：url,标题，[尺寸，区域]\(同layer的area和offset的设置格式，也可以传入'max'强制最大化，例如``[['30%','30%'],['50px','50px']]``\)
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
* getDesktopScene() 返回桌面舞台的jq对象（用于高级用户diy壁纸）

## 进阶篇

>推荐仔细查看demo的代码，很多用法都有所提及

#### 设计思路

* Win10-UI应当作为你网站模块的主入口，而具体功能页面适合用子窗口的形式打开。子窗口是以iframe实现的，减少了js、css冲突，保证了独立性。同时父子页之间也可以通过Win10_child.js的API进行沟通
* 桌面图标适用于最常用的操作，菜单适用于构建所有操作的清单（这里的操作不限于打开子窗口）
* 小磁贴视觉冲击力强，除了可以做出醒目的按钮，也可以用作信息展板，甚至于在磁贴的方块空间内构建复杂的应用（如音乐播放器）

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

#### 小磁贴辅助类

你可以放置两个content，并赋予detail和cover的辅助类，将得到炫酷的封面切换主体的动画效果。

~~~html
<div loc="1,1" size="6,3" class="block">
   <div class="content red detail" >
       我是主体
   </div>
   <div class="content red cover">
       我是封面
   </div>
</div>
~~~

#### 父子页沟通

* 要使用子页工具集，请先引入win10.child.js
* 自由的使用Win10_child对象吧，目前包含close、newMsg、openUrl函数；也可以使用Win10_parent对象，将指向父页的Win10对象。
* 父页打开子窗口的函数openUrl会返回索引index，使用getLayeroByIndex(index)获得子窗口对象,然后就可以方便的控制子窗口的行为了。

#### 颜色预定义

各种颜色 具体效果见 https://www.kancloud.cn/qq85569256/xzui/350010
* black-green{background:#009688}
* green{background:#5FB878}
* black{background:#393D49}
* blue{background:#1E9FFF}
* orange{background:#F7B824}
* red{background:#FF5722}
* dark{background:#2F4056}

#### 右键菜单配置

Win10.setContextMenu(jq_dom, menu) 可接管系统默认的右键菜单。
其中jq_dom是jq对象或选择器字符串,menu是菜单配置项(true表示禁用默认菜单,null表示恢复默认菜单,[数组]表示自定义菜单)
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

#### 桌面舞台

为了让广大开发者能更自由的定义自己的桌面，Win10-UI自v1.1.2.3版本起加入桌面舞台。
桌面舞台是一个`id`为`win10-desktop-scene`的div，位于`#win10>.desktop`下。桌面舞台预定义了css，使其浮动于桌面图标的下方。
借助此特性，你甚至可以发挥想象力，制作出动态壁纸。
> 使用`getDesktopScene`函数可以快捷获取桌面舞台的jq对象。
> v1.1.2.3之前的版本，如果想要临时体验桌面舞台的支持特性，可以去官方群下载补丁`win10_desktop_scene_support.js`。

#### 子窗口事件自动绑定

所有#win10下的元素加入类win10-open-window即可自动绑定openUrl函数，无须用onclick手动绑定
> v1.1.2.3之前的版本，如果想要临时体验桌面子窗口事件自动绑定支持特性，可以去官方群下载插件`win10_bind_open_windows.js`。

 * 标签属性说明
 * data-title:窗口标题
 * data-url:窗口url地址
 * data-icon-image:图片图标的url
 * data-icon-font:字体图标名 如star
 * data-icon-bg:图标背景色 black-green,green,black,blue,orange,red,dark,purple
 * data-area-offset:窗口 [区域,偏移]
 *
 * 特别的，如果子节点有icon和title的css类，可以自动识别为图标和标题，无须设置data-title和data-icon-image(font)

~~~html
<div class="shortcut win10-open-window"
        data-url="http://www.baidu.com"
        data-title="我是百度"
        data-icon-image="https://www.baidu.com/img/bd_logo1.png"
        data-icon-font="star"
        data-icon-bg="red"
        data-area-offset="[['300px', '380px'],'rt']">
        <i class="icon fa fa-fw fa-user-circle blue" ></i>
        <div class="title">百度</div>
</div>
~~~
> 这是所有可选项都用上的完整写法。

~~~html
<div class="shortcut win10-open-window" data-url="www.baidu.com" >
        <i class="icon fa fa-fw fa-user-circle blue" ></i>
        <div class="title">百度</div>
</div>
~~~
> 这是推荐的简洁写法，可以满足大部分场景的需要。

## 未来开发计划

* 可拖拽磁贴
* 多主题切换
* 主题生成器
* 日历、音乐播放器等小组件

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

## TODO

 * 关闭回调
 * 取消iframe读取时的菊花图标
 * 多壁纸切换API


## 更新日志

### v1.1.2.4

* 2017/11/14 [修复]修复手机端浏览器输入法导致窗口高度异常的问题
* 2017/09/24 [修复]开始菜单箭头的小bug

### v1.1.2.3

* 2017/9/13 [修复]修复手机端修改链接键盘影响窗口高度的问题
* 2017/9/12 [增强]子窗口事件自动绑定（详情见进阶篇）
* 2017/9/12 [修复]修复了切换全屏下最大化窗口造成的子窗口高度溢出问题
* 2017/9/6  [增强]添加了一个辅助函数`getDesktopScene`返回桌面舞台对象;现在onReady函数可以被多次调用了，将按顺序执行(真实执行顺序是在DOM结构基本确定之后)
* 2017/9/5  [增强]增加了一层div桌面舞台，专门提供给高级桌面背景插件或自定义
* 2017/9/1  [修复]修复一处颜色的笔误（蓝色写成了黑色）

### v1.1.2.2
* 2017/8/31 [优化]菜单项打开机制改为手风琴式
* 2017/8/31 [修复]修正菜单脚手架工具的一处笔误（导致菜单项样式异常）
* 2017/8/29 [优化]一些a标签按钮不会导致地址栏变动了(小技巧：#改成javascript:void(0))
* 2017/8/22 [增强]为Ctrl+方向键设立了快捷键，快捷打开菜单/消息，显示/隐藏窗口
* 2017/8/22 [优化]提高消息图标闪烁的频率;修复了IE11的全屏功能

### v1.1.2.1

* 2017/9/12 [增强]将win10_bind_open_windows插件整合进了主框架，具体使用方法见“进阶篇”
* 2017/8/21 [优化]减小了子窗口按钮的宽度;手机屏幕openUrl打开的子窗口现在默认最大化了;消息提醒图标改为闪烁（感谢'Mr天明'的建议）
* 2017/8/18 [增强]预定义了磁贴.content.cover和.content.detail类，让其拥有鼠标经过的翻页动画
* 2017/8/15 [优化]提高了通用背景色css的优先级；优化菜单图标大小与位置；三种代码脚手架(懒人必备)
* 2017/8/07 [修复]修复了在小屏幕下打开自定义网页不会全屏的bug

### 更早的版本

* 2017/8/05 [增强]openUrl函数现在第三个参数可以自定义窗口的打开大小和位置了
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