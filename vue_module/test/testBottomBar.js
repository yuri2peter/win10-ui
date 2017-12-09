var test = {
    "加隐藏任务" : function() {
        win10_store.state.htask.push(
            {
                //显示的图标，fa 图标库中的一个图标
                icon : "fa fa-chevron-up",
                //点击事件(必须)
                click : function () {
                    console.log(new Date());
                }
            });
    },
    "减隐藏任务" : function() {
        win10_store.state.htask.pop();
    },
    "加快捷方式" : function() {
        win10_store.state.bottomLeftIcon.push({
            //显示的图标，fa 图标库中的一个图标
            icon : "fa fa-comment-o",
            //id
            id : "bottom" + (new Date()).getTime(),
            //点击事件(必须)
            click : function () {
                console.log(new Date());
            }
        })
    },
    "减快捷方式" : function() {
        win10_store.state.bottomLeftIcon.pop();
    }
};

function testAction(act) {
    switch (act) {
        case 1:
            test["加快捷方式"]();
            break;
        case 2:
            test["减快捷方式"]();
            break;
        case 3:
            test["加隐藏任务"]();
            break;
        case 4:
            test["减隐藏任务"]();
            break;
    }
};

testAction(1);
testAction(2);
////////////////////
testAction(3);
testAction(4);
////////////////////
testAction(1);
testAction(3);
testAction(2);
testAction(4);
////////////////////
testAction(1);
testAction(3);
testAction(4);
testAction(2);