/**
 * 基于 vue 的模块化定义
 *
 * 内容中如果定义了一些原本没有的内容，我会使用 _ibas 后缀进行标记
 * 例如： win10_hide_task_ibas
 * */

/**
 * 前缀、用于和其他使用 vue 定义的模块混合使用时的标志，默认将加到所有的模板之前
 * 例如，主模块当前为 win10
 * <win10></win10>
 * 如果 prefix = "w10_"
 * 则主模块变成 w10_win10
 * <w10_win10></w10_win10>
 * */
var prefix = "";

Vue.use(Vuex);

var win10_store = new Vuex.Store({
    state: {
        //屏幕上的功能图标
        shortcuts : [{
            //主键
            id : "shortcut_" + (new Date()).getTime(),
            //点击事件
            click : function () {
                console.log(new Date());
            },
            //显示的图标
            img : "./img/icon/win10.png",
            //显示的标题
            title : "主图标"
        }],
        //左下角的图标
        bottomLeftIcon : [{
            //显示的图标，fa 图标库中的一个图标
            icon : "fa fa-comment-o",
            //id
            id : "bottom" + (new Date()).getTime(),
            //点击事件(必须)
            click : function () {
                console.log(new Date());
            }
        }],
        //右下角的隐藏图标
        htask : [
            {
                //显示的图标，fa 图标库中的一个图标
                icon : "fa fa-chevron-up",
                //点击事件(必须)
                click : function () {
                    console.log(new Date());
                }
            }
        ],
        //程序图标
        menuIcon : [
            {
                icon : "red icon fa fa-wrench fa-fw",
                title : "1111111",
                child : [{
                    title : "1-11111",
                    click : function () {
                        console.log("1-111");
                    },
                    icon : "red icon fa fa-wrench fa-fw"
                }]
            },
            {
                icon : "blue icon fa fa-wrench fa-fw",
                title : "2222222222",
                child : null,
                click : function () {
                    console.log("222222222222");
                }
            }
        ],
        //磁贴
        margent : [
            {
                title : "test",
                margents : [
                    {
                        click : function () {
                            console.log("margent-test-1");
                        },
                        loc : "1,1",
                        size : "2,2",
                        html : '<div class="content"><img style="display: inline-block;border-radius: 4px" width="88px" src="http://q2.qlogo.cn/headimg_dl?bs=824831811&dst_uin=824831811&src_uin=824831811&fid=824831811&spec=100&url_enc=0&referer=bu_interface&term_type=PC"/></div>'
                    },
                    {
                        click : function () {
                            console.log("margent-test-1");
                        },
                        loc : "3,3",
                        size : "2,2",
                        html : '<div class="content"><img style="display: inline-block;border-radius: 4px" width="88px" src="http://q2.qlogo.cn/headimg_dl?bs=824831811&dst_uin=824831811&src_uin=824831811&fid=824831811&spec=100&url_enc=0&referer=bu_interface&term_type=PC"/></div>'
                    },
                    {
                        click : function () {
                            console.log("margent-test-1");
                        },
                        loc : "5,1",
                        size : "2,2",
                        html : '<div class="content"><img style="display: inline-block;border-radius: 4px" width="88px" src="http://q2.qlogo.cn/headimg_dl?bs=824831811&dst_uin=824831811&src_uin=824831811&fid=824831811&spec=100&url_enc=0&referer=bu_interface&term_type=PC"/></div>'
                    }
                ]
            }
        ],
        //语言
        lang : {
            cur : "zh-cn",
            "default" : "zh-cn",
            "zh-cn" : {
                messageCenter : "消息中心",
                clearAll : "全部清除"
            },
            "en" : {
                messageCenter : "Messages",
                clearAll : "clear"
            }
        }
    },
    mutations: {
    }
});

//例外的计算方法
var extMethod = {
    //通过获取到隐藏任务栏任务数量，计算任务栏的大小
    hideTaskSize : function (len) {
        var m = parseInt(Math.sqrt(len));
        if (!len) {
            return 0;
        } else if (m * m >= len) {
            return [m,m];
        } else if ((m * m + m) >= len) {
            return [m,m + 1];
        } else {
            return [m + 1,m + 1];
        }
    }
};

Vue.component(prefix + 'win10',{
    template :
        '<div id="win10" @click="hideAll">\
            <!-- 桌面部分 -->\
            <div class="desktop">\
                <div id="win10-shortcuts" class="shortcuts-hidden">\
                    <' + prefix + 'shortcut  v-for="(shortcut,index) in shortcuts" :key="shortcut.id" v-bind:shortcut="shortcut" v-bind:index="index">\
                    </' + prefix + 'shortcut>\
                </div>\
            </div>\
            <!-- 开始菜单 -->\
            <div id="win10-menu" class="hidden">\
                <!-- 程序菜单 -->\
                <div class="list win10-menu-hidden animated animated-slideOutLeft">\
                    <' + prefix + 'menuIcon v-for="(menu,index) in menuIcon" v-bind:menu="menu" v-bind:index="index" :key="index">\
                    </' + prefix + 'menuIcon>\
                </div>\
                <!-- 磁贴部分 -->\
                <div class="blocks">\
                    <' + prefix + 'margent v-for="(margent,index) in margent" :margent="margent" :index="index" :key="index">\
                    </' + prefix + 'margent>\
                </div>\
            </div>\
            <!-- 消息中心 -->\
            <div id="win10_command_center" class="hidden_right">\
                <div class="title">\
                    <h4 style="float: left">{{lang.messageCenter}} </h4>\
                    <span id="win10_btn_command_center_clean_all">{{lang.clearAll}}</span>\
                </div>\
                <div class="msgs"></div>\
            </div>\
            <!-- 任务栏 -->\
            <div id="win10_task_bar">\
                <!-- 开始按钮和默认软件 -->\
                <div id="win10_btn_group_left" class="btn_group">\
                    <!-- 开始按钮 -->\
                    <div id="win10_btn_win" class="btn"><span class="fa fa-windows"></span></div>\
                    <!-- 其他按钮 -->\
                    <' + prefix + 'bottomIcon  v-for="(icon,index) in bottomLeftIcon" :key="icon.id" v-bind:icon="icon" v-bind:index="index">\
                    </' + prefix + 'bottomIcon>\
                </div>\
                <!-- 打开软件部分 -->\
                <div id="win10_btn_group_middle" class="btn_group"></div>\
                <!-- 时间和消息 -->\
                <div id="win10_btn_group_right" class="btn_group">\
                    <!-- 显示隐藏任务 -->\
                    <div v-if="hTaskShowIcon" @click.stop="showHTaskContent" class="btn"><span class="fa fa-chevron-up"></span></div>\
                    <!-- 时间控件 -->\
                    <div class="btn" id="win10_btn_time"></div>\
                    <!-- 消息控件 -->\
                    <div class="btn" id="win10_btn_command"><span id="win10-msg-nof" class="fa fa-comment-o"></span></div>\
                    <!-- 显示桌面控件 -->\
                    <div class="btn" id="win10_btn_show_desktop"></div>\
                </div>\
            </div>\
            <!-- 隐藏的任务栏 -->\
            <div id="win10_hide_task_ibas" class="blocks" v-show="hTaskShowContent" \
                style="bottom: 41px;position: fixed;right: 120px;background: rgba(12, 12, 12, 0.4);padding: 6px;height: 60px;width: 60px;">\
                <' + prefix + 'htask v-for="(htask,index) in htask" :key="index" :htask="htask" :index="index">\
                </' + prefix + 'htask>\
            </div>\
        </div>',
    data : function () {
        return {
            //任务栏
            bottom_middle_bar : null,
            //隐藏的任务栏部分
            hidden_task : null,
            //为 false 表示没有隐藏部件
            hTaskShowContent : false,
            //为 false 时表示没有隐藏任务（并抹去图标）
            hTaskShowIcon : false,
            clickTarget : null
        }
    },
    computed : {
        margent : function () {
            return win10_store.state.margent;
        },
        menuIcon : function () {
            return win10_store.state.menuIcon;
        },
        shortcuts : function () {
            return win10_store.state.shortcuts;
        },
        bottomLeftIcon : function () {
            return win10_store.state.bottomLeftIcon;
        },
        htask : function () {
            return win10_store.state.htask;
        },
        //当前语言
        curLang : function () {
            return win10_store.state.lang.cur;
        },
        //语言
        lang : function () {
            return (win10_store.state.lang[this.curLang] || win10_store.state.lang[win10_store.state.lang["default"]]);
        }
    },
    watch : {
        shortcuts : function () {
            setTimeout(Win10.renderShortcuts);
        },
        bottomLeftIcon : function () {
            this.bottom_middle_bar[0].style.width = "calc(100% - " + (176 + this.bottomLeftIcon.length * 48 + (this.hTaskShowIcon ? 32 : 0)) + "px)";
        },
        htask : function () {
            var hidden_task_size = extMethod.hideTaskSize(this.htask.length);
            if (hidden_task_size) {
                this.hTaskShowIcon = true;
                this.hidden_task.css({
                    height : (30 * hidden_task_size[0]) + "px",
                    width : (30 * hidden_task_size[1]) + "px"
                });
                this.bottom_middle_bar[0].style.width = "calc(100% - " + (176 + this.bottomLeftIcon.length * 48 + 32) + "px)";
            } else {
                this.hTaskShowIcon = false;
                this.hTaskShowContent = false;
                this.bottom_middle_bar[0].style.width = "calc(100% - " + (176 + this.bottomLeftIcon.length * 48) + "px)";
            }
        },
        curLang : function () {
            Win10._lang = this.curLang;
        }
    },
    mounted : function () {
        this.hidden_task = $("#win10_hide_task_ibas");
        var hidden_task_size = extMethod.hideTaskSize(this.htask.length);
        if (hidden_task_size) {
            console.log(this.hidden_task);
            this.hTaskShowIcon = true;
            this.hidden_task.css({
                height : (30 * hidden_task_size[0]) + "px",
                width : (30 * hidden_task_size[1]) + "px"
            });
        } else {
            this.hTaskShowIcon = false;
            this.hTaskShowContent = false;
            //this.bottom_middle_bar[0].style.width = "calc(100% - " + (196 + this.bottomLeftIcon.length * 48) + "px)";
        }
        this.bottom_middle_bar = $("#win10_btn_group_middle");
        this.bottom_middle_bar[0].style.width = "calc(100% - " + (176 + this.bottomLeftIcon.length * 48 + (hidden_task_size ? 32 : 0)) + "px)";
    },
    methods : {
        showHTaskContent : function () {
            this.hTaskShowContent = true;
        },
        hideAll : function () {
            this.hTaskShowContent = false;
        }
    }
});

Vue.component(prefix + "shortcut",{
    template :
        '<div class="shortcut" :index="index" @click="shortcut.click">\
            <img class="icon" :src="shortcut.img"/>\
            <div class="title">{{shortcut.title}}</div>\
        </div>',
    props : ['shortcut','index']
});

Vue.component(prefix + "bottomIcon",{
    template :
        '<div class="btn" :index="index" :id="icon.id" @click="icon.click">\
            <span :class="icon.icon"></span>\
        </div>',
    props : ['icon','index']
});

Vue.component(prefix + "menuIcon",{
    template :
        '<div v-if="menu.child" :index="index">\
            <div class="item">\
                <i :class="menu.icon"></i><span>{{menu.title}}</span>\
            </div>\
            <div v-for="(menu_,index) in menu.child" class="sub-item" @click="menu_.click">\
                <i :class="menu_.icon"></i>{{menu_.title}}\
            </div>\
        </div>\
        <div v-else :index="index">\
            <div class="item" @click="menu.click">\
                <i :class="menu.icon"></i><span>{{menu.title}}</span>\
            </div>\
        </div>',
    props : ['menu','index']
});

Vue.component(prefix + "margent",{
    template :
        '<div class="menu_group" :index="index">\
            <div class="title">{{margent.title}}</div>\
            <div v-for="(margent_,index_) in margent.margents" :key="index_" \
                @click="margent_.click"\
                :loc="margent_.loc" \
                :size="margent_.size" class="block" v-html="margent_.html"></div>\
        </div>',
    props : ['margent','index']
});

Vue.component(prefix + "htask",{
    template :
        '<div :index="index" id="" class="btn" style="width: 30px;height: 30px;text-align: center;float: left;" @click="htask.click">\
            <span :class="htask.icon" style="font-size: 25px;"></span>\
        </div>',
    props : ['index','htask']
});

