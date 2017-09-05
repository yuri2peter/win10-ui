/**
 * WIN10-UI v1.1.2.2 桌面舞台支持补丁
 * WIN10-UI v1.1.2.2之后的版本不需要此补丁
 * @usage 直接引用即可（需要jquery）
 * @author Yuri2
 */

$(function () {
   if($("#win10-desktop-scene").length<1) {
       $("#win10-shortcuts").css({
           position: 'absolute',
           left: 0,
           top: 0,
           'z-index': 100,
       });
       $("#win10 .desktop").append("<div id='win10-desktop-scene' style='width: 100%;height: calc(100% - 40px);position: absolute;left: 0;top: 0; z-index: 0;background-color: transparent;'></div>")
   }
});