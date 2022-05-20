//全局变量，触摸开始位置
var startX = 0, startY = 0;

//touchstart事件
function touchSatrtFunc(evt){
    try {
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等

        var touch = evt.touches[0]; //获取第一个触点
        var x = Number(touch.pageX); //页面触点X坐标
        var y = Number(touch.pageY); //页面触点Y坐标
        //记录触点初始位置
        startX = x;
        startY = y;

        var text = 'TouchStart事件触发：（' + x + ', ' + y + '）';
        console.log(text);
    }
    catch (e) {
        alert('touchSatrtFunc：' + e.message);
    }
}

//touchend事件
function touchEndFunc(evt){
    try {
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
        nChangX = evt.changedTouches[0].pageX;
        nChangY = evt.changedTouches[0].pageY;
        if(nChangX - startX > 10){
            slideButton("left");
        }else if(nChangX - startX < -10){
            slideButton("right");
        }
    }
    catch (e) {
        alert('touchEndFunc：' + e.message);
    }
}

//touchmove事件，这个事件无法获取坐标
function touchMoveFunc(evt){
    try {
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
        var touch = evt.touches[0]; //获取第一个触点
        var x = Number(touch.pageX); //页面触点X坐标
        var y = Number(touch.pageY); //页面触点Y坐标
        var text = 'TouchMove事件触发：（' + x + ', ' + y + '）';

        //判断滑动方向
        if (x - startX != 0) {
            text += '<br/>左右滑动';
        }
        if (y - startY != 0) {
            text += '<br/>上下滑动';
        }

        console.log(text);
    }
    catch (e) {
        alert('touchMoveFunc：' + e.message);
    }
}

//绑定事件
function bindEvent(obj){
    if(obj){
        obj.addEventListener('touchstart', touchSatrtFunc1, false);
        obj.addEventListener('touchmove', touchMoveFunc1, false);
        obj.addEventListener('touchend', touchEndFunc1, false);
    }
//  document.addEventListener('touchstart', touchSatrtFunc, false);
//  document.addEventListener('touchmove', touchMoveFunc, false);
//  document.addEventListener('touchend', touchEndFunc, false);
}

window.onload=function(){
    bindEvent(document.getElementById('box'));
}


//判断是否支持触摸事件
function isTouchDevice(){


    try {
        document.createEvent("TouchEvent");
        console.log("支持TouchEvent事件！" + navigator.appVersion);
        bindEvent(); //绑定事件
    }
    catch (e) {
        alert(navigator.appVersion + "不支持TouchEvent事件！" + e.message);
    }
}

isTouchDevice();