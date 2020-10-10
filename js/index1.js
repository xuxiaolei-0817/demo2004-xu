//轮播图
define(['jquery'],function($) {
    function body() {
        $(function(){
            var aBtns = $('#banner').find('ol li');
            var oul = $('#banner').find('ul');
            var iNow = 0; 
            var timer = null;
            $('#banner').mouseenter(function(){
                clearInterval(timer);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            });

            $('#banner').mouseleave(function(){
                //轮播
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },2000);
            });
            aBtns.click(function(){
                iNow = $(this).index();
                tab();
            });
            //轮播
            timer = setInterval(function(){
                iNow++;
                tab();
            },2000);
            function tab(){
                aBtns.removeClass('active').eq(iNow).addClass('active');

                if(iNow == aBtns.size()){
                    aBtns.eq(0).addClass('active');
                }
                oul.animate({
                    left: iNow * - 1263,
                },
                    300,
                    function(){
                        //判断是否是最后一张图片
                        if(iNow === aBtns.size()){
                            iNow = 0;
                            oul.css('left',0);
                        }else if(iNow == 0){
                            iNow = aBtns.size() - 1;
                            oul.css('left',iNow * - 1263)
                        }
                    }
                )
            }
        })
        // 导航js
        $(function(){
            $('#two').mouseenter(function(){
                $('#show').css('display','block');
            }).mouseleave(function(){
                $('#show').css('display','none');
            })
        })

       $(function(){
           $('#three').mouseenter(function(){
               $('#hide').css('display','block');
           }).mouseleave(function(){
               $('#hide').css('display','none');
           })
       })
       
    }
    return {
            body: body
          }
})


















                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

           
