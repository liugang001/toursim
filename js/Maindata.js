(function(){
    //构造函数-----------------------------
    function GetData(){}
    //原型链条----------------------
    GetData.prototype={
        init:function(){
             this.ajaxData();
             this.bannerPlay();
        },
        //数据加载----------------------------------------------------------------------
        ajaxData:function(){
            $.ajax({
                type:"get",
                url:"data/data.json",
                dataType:"json",
                success:function(data){
                    var myData=data.data;
                    var content="";
                    for(var i=0;i<myData.length;i++){
                        content+='<li>'+
                        '<img src="images/'+myData[i].imgsrc+'" alt=""/>'+
                        '<div class="top_info clearfix">'+
                        '<h4>'+myData[i].name+'</h4>'+
                        '<p>￥<span>'+myData[i].price+'</span>起</p>'+
                        '</div>'+
                        '<div class="bot_info">'+
                        '<a href="javascript:;" class="place">'+myData[i].place+'</a><br>'+
                        '<a href="javascript:;" class="joiner">'+myData[i].people+'人参加</a>'+
                        '<a href="javascript:;" class="tise">100%好评</a>'+
                        '<a href="javascript:;" class="num">'+myData[i].critse+'条评论</a>'+
                        '<a href="javascript:;" class="share">分享</a>'+
                        '</div>'+
                        '</li>'
                    }
                    $(".main ul").append(content);

                },
                error:function(){
                    console.log("数据未获取成功...................");
                }
            })
        },
        //图片轮播-----------------------------------------------------------------
        bannerPlay:function(){
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        }
    };
    window.GetData=new GetData();
})();
