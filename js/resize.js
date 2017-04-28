
resize();
window.onresize=function(){
    resize();
};
function resize(){
    var screenX=document.documentElement.clientWidth;
    var oHtml=document.documentElement;
    oHtml.style.fontSize=screenX/25+"px";
}

