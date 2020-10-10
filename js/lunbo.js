<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>JQuery轮播图</title>
    <style>
        *{
            padding:0;
            margin:0;
        }
        .container{
            width:600px;
            height:400px;
            overflow: hidden;
            position:relative;
            margin:0 auto;
        }
        .list{
            width:3000px;
            height:400px;
            position:absolute;

        }
        .list>img{
            float:left;
            width:600px;
            height:400px;
        }
        .pointer{
            position:absolute;
            width:100px;
            bottom:20px;
            left:250px;
        }
        .pointer>span{
            cursor:pointer;
            display:inline-block;
            width:10px;
            height:10px;
            background: #7b7d80;
            border-radius:50%;
            border:1px solid #fff;
        }
        .pointer .on{
            background: #28a4c9;
        }
        .arrow{
            position:absolute;
            text-decoration:none;
            width:40px;
            height:40px;
            background: #727d8f;
            color:#fff;
            font-weight: bold;
            line-height:40px;
            text-align:center;
            top:180px;
            display:none;
        }
        .arrow:hover{
            background: #0f0f0f;
        }
        .left{
          left:0;
        }
        .right{
            right:0;
        }
        .container:hover .arrow{
            display:block;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="list" style="left:0px;">
            <!--<img src="../static/image/photo1.jpg" alt="5"/>-->
            <img src="lun1.png" alt="1"/>
            <img src="lun2.jpg" alt="2"/>
            <img src="lun2.jpg" alt="3"/>
            <img src="lun3.jpg" alt="4"/>
            <img src="lun1.png" alt="5"/>
            <!--<img src="../static/image/banner.jpg" alt="1"/>-->
        </div>
        <div class="pointer">
            <span index="1" class="on"></span>
            <span index="2"></span>
            <span index="3"></span>
            <span index="4"></span>
            <span index="5"></span>
        </div>
        <a href="#" class="arrow left">&gt;</a>
        <a href="#" class="arrow right">&lt;</a>
    </div>

    <script src="../static/js/jquery-3.2.1.min.js"></script>
    <script>
        var imgCount = 5;
        var index = 1;
        var intervalId;
        var buttonSpan = $('.pointer')[0].children;//htmlCollection 集合
        //自动轮播功能 使用定时器
        autoNextPage();
        function autoNextPage(){
            intervalId = setInterval(function(){
                nextPage(true);
            },3000);
        }
        //当鼠标移入 停止轮播
        $('.container').mouseover(function(){
            console.log('hah');
            clearInterval(intervalId);
        });
        // 当鼠标移出，开始轮播
        $('.container').mouseout(function(){
            autoNextPage();
        });
        //点击下一页 上一页的功能
        $('.left').click(function(){
            nextPage(true);
        });
        $('.right').click(function(){
            nextPage(false);
        });
        //小圆点的相应功能  事件委托
        clickButtons();
        function clickButtons(){
            var length = buttonSpan.length;
            for(var i=0;i<length;i++){
                buttonSpan[i].onclick = function(){
                    $(buttonSpan[index-1]).removeClass('on');
                    if($(this).attr('index')==1){
                        index = 5;
                    }else{
                        index = $(this).attr('index')-1;
                    }
                    nextPage(true);

                };
            }
        }
        function nextPage(next){
            var targetLeft = 0;
            //当前的圆点去掉on样式
            $(buttonSpan[index-1]).removeClass('on');
            if(next){//往后走
                if(index == 5){//到最后一张，直接跳到第一张
                    targetLeft = 0;
                    index = 1;
                }else{
                    index++;
                    targetLeft = -600*(index-1);
                }

            }else{//往前走
                if(index == 1){//在第一张，直接跳到第五张
                    index = 5;
                    targetLeft = -600*(imgCount-1);
                }else{
                    index--;
                    targetLeft = -600*(index-1);
                }

            }
            $('.list').animate({left:targetLeft+'px'});
            //更新后的圆点加上样式
            $(buttonSpan[index-1]).addClass('on');


        }


    </script>
</body>

