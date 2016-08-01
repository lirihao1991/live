~(function(){
    var userName = $('.user-info p span')[0].innerHTML;
    var iosPaymentHTML = "<div class='pay-containner ios'>"+
                            "<div class='pay-account'>"+
                                "<span class='account-title'>开通账号:</span>"+
                                "<span class='account-icon'></span>"+
                                "<span class='account-value'>" + userName + "</span>"+
                                "<span class='account-id'>(" + userId + ")</span>"+
                            "</div>"+
                            "<div class='pay-list-containner ios'>"+
                                "<div class='pay-list'>"+
                                    "<span class='time'>1个月</span>"+
                                    "<div class='money-containner'><span class='money'>30</span><span class='yuan'>元</span></div>"+
                                "</div>"+
                            "</div>"+
                            "<div class='pay-ins'>"+
                                "<div class='pay-ins-head'>"+
                                    "<div class='line'></div>"+
                                    "<div class='diamond'></div>"+
                                    "<span class='title'>会员特权</span>"+
                                    "<div class='diamond'></div>"+
                                    "<div class='line'></div>"+
                                "</div>"+
                                "<div class='pay-ins-content'>"+
                                    "<ul class='left'>"+
                                        "<li><span>1.每天领取随机礼券</span></li>"+
                                        "<li><span>3.特殊身份标识</span>"+
                                        "<li><span>5.评论彩色字体</span>"+
                                        "<li><span>7.会员专属名牌</span></li>"+
                                    "</ul>"+
                                    "<ul class='right'>"+
                                        "<li>2.直播间内隐身查看</span></li>"+
                                        "<li>4.会员专属礼物</span></li>"+
                                        "<li>6.入场头像靠前</span></li>"+
                                    "</ul>"+
                                "</div>"+
                                "<div class='pay-button'>"+
                                    "<a id='pay-btn'>立即支付<span>30</span>元</a>"+
                                "</div>"+
                            "</div>"+
                         "</div>";

    var androidPaymentHTML =  "<div class='pay-containner ios'>"+
                            "<div class='pay-account'>"+
                                "<span class='account-title'>开通账号:</span>"+
                                "<span class='account-icon'></span>"+
                                "<span class='account-value'>" + userName + "</span>"+
                                "<span class='account-id'>(" + userId + ")</span>"+
                            "</div>"+
                            "<div class='pay-list-containner'>"+
                            "</div>"+
                            "<p class='payWay-title'> 选择支付方式</p>"+
                            "<div class='payWay-content'>"+
                                "<div class='wechat'><img class='wechat-icon' src='http://a.xnimg.cn/wap/mobile/livevip/dist/imgs/wechat-icon.png'/><span>微信支付</span></div>"+
                                "<div class='alipay'><img src='http://a.xnimg.cn/wap/mobile/livevip/dist/imgs/alipay-icon.png'/></div>"+
                            "</div>"+
                            "<div class='pay-button'>"+
                                "<a id='pay-btn'>立即支付<span>30</span>元</a>"+
                            "</div>"+
                         "</div>";

    swicthVip(vipInfo.vipType);

    // 绑定开通按钮
    if(viewType == "1" && vipInfo.vipType == "1" && vipInfo.endTime - Date.parse(new Date()) > 10080000){
        $('#click').attr('style', 'background:#f2f2f2');
    }
    else{
        touch.on('#click', 'tap', function(){
            var render = viewType == 0 ? androidPaymentHTML : iosPaymentHTML;
            new Modal({title: "开通直播会员", width: "7.46rem", body: render, shown: modalShwonForAndroid});
        })
    }



   function modalShwonForAndroid(){
        $.getJSON('/vip/getProductList?userId='+userId+"&productType="+viewType , function(data){
            if(viewType == 0)
            {
                $('.pay-list-containner').html($(getProductListHTML(data)));
                $('.pay-list-containner').css('height', 'initial');
                $('#pay-btn').on('click', function(e){
                    e.stopPropogation;
                    var productId = $('.month-list.active').data('id'),
                    payType = $('.payWay-content .active').hasClass('wechat') ? "2" : "1";
                    window.location.href = "renrenaction://liveRoomVipRecharge?productId="+productId+"&productCount=1&payType="+payType;
                })
            }

            if(viewType != 0){
                $('.pay-list').attr({'data-id':data[0].id, 'data-appid':data[0].appstoreProductId});
                $('#pay-btn').on('click', function(e){
                    e.stopPropogation;
                    var productId = $('.pay-list').data('id'),
                        appId = $('.pay-list').data('appid');
                    payType = 3;
                    window.location.href = "renrenaction://liveRoomVipRecharge?productId="+productId+"&productCount=1&payType="+payType+"&appstoreProductId="+appId;
                })
            }

            if (vipInfo.vipType == 1){
                $('.account-icon').attr('style', 'background-color:#af67e6');
            }

            $($('.month-list')[0]).addClass('active');
            $('.wechat').addClass('active');

            touch.on('.month-list', 'tap doubletap', function(e){
                $('.month-list').removeClass('active');
                $(e.target).parent().addClass('active');
                $('#pay-btn span').html($(e.target).parent().find('.money').html().match(/\d+/)[0]);
            })

            touch.on('.month-diy .switch', 'tap doubletap', function(e){
                var $this = $(e.target);
                $this.hasClass('active') ? $this.removeClass('active') : $this.addClass('active');
            })

            touch.on('.alipay,.wechat', 'tap doubletap', function(e){
                var $this = $(e.target);
                $('.alipay,.wechat').removeClass('active');

                if ($this.hasClass('wechat')){
                    $this.addClass('active');
                }
                else{
                    $this.parent().addClass('active');
                }
            })
        })
   }

   // 选择vip状态
   function swicthVip(type){
        switch(type){
            case 0:
                turnToFirst();
                break;
            case 1:
                turnToVip();
                break;
            case 2:
                turnToMaturity();
                break;
        }
   }

   function turnToVip(){
        $('.vip-info').html(formatDate(new Date(vipInfo.endTime), "yyyy-MM-dd") + " 到期");
        $('#click').html("续费");
        $('.banner').remove();
        $('.gap').css('height','initial').addClass('width-calemdar');
        new Calemdar();
        $.getJSON('/vip/getCouponRecord?userId=' + userId, function(data){
            for (var i = 0; i<data.length; i++){
                var openday = new Date(data[i].give_time).getDate();
                $('.calemdar-body li:contains(' + openday + ')').addClass('open');
            }
        })
   }

   function turnToFirst(){
        $('#click').html("开通会员");
        $('.vip-info').html("立即点亮直播会员标识");
        $('.vip-icon').css('backgroundPosition', '-17.4rem -0.94rem');
        $('.banner img').css('visibility', 'visible');
        $('.switch-btn-containner div:eq(0)').addClass("active");
        window.onload = function(){
            $("z2-first").addClass("anm");
            new Carousel($('.banner'), {});
        }
   }

   function turnToMaturity(){
        $('#click').html("激活");
        $('.vip-info').html("直播会员已到期");
        $('.vip-icon').css('backgroundPosition', '-17.4rem -0.94rem');
        $('.banner img').css('visibility', 'visible');
        $('.switch-btn-containner div:eq(0)').addClass("active");
        window.onload = function(){
            $("z2-first").addClass("anm");
            new Carousel($('.banner'), {});
        }
   }


   function Calemdar(){
        var calemdar = "<div class='calemdar-containner'>"+
                            "<p class='calemdar-header'></p>"+
                            "<div class='calemdar-body'>"+
                                "<ul class='weak'>"+
                                    "<li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>"+
                                "</ul>"+
                            "</div>"+
                        "</div>",
            nowDate, fullDays, firstDay, calemdarBodyHtml = "", saturday, sunDay;
        $('.gap').html(calemdar);

        nowDate = new Date();

        $('.gap .calemdar-header').html((nowDate.getMonth()+1)+"月");
        fullDays = new Date(nowDate.getFullYear(), nowDate.getMonth()+1, 0).getDate();
        firstDay = nowDate.setDate(1);
        firstDay = new Date(firstDay).getDay();

        // 构建日历第一行
        calemdarBodyHtml += "<ul>";

        for (var i = 0; i<=6; i++){
            if (i < firstDay){
                calemdarBodyHtml += "<li></li>"
            }
            else if (i >= firstDay){

                if ((i-firstDay+1) < (new Date().getDate()))
                {
                    calemdarBodyHtml += "<li class='paste'>" + (i-firstDay+1) + "</li>";
                }
                else{
                    calemdarBodyHtml += "<li>" + (i-firstDay+1) + "</li>";
                }
            }
        }

        calemdarBodyHtml += "</ul>";

        // 构建日历剩下的行

        for(var i = 7; i < fullDays + firstDay ; i++){

            if (i%7==0){
                calemdarBodyHtml += "<ul>";
            }

            if ((i-firstDay+1) < (new Date().getDate()))
            {
                calemdarBodyHtml += "<li class='paste'>" + (i-firstDay+1) + "</li>";
            }
            else{
                calemdarBodyHtml += "<li>" + (i-firstDay+1) + "</li>";
            }

            if (i%7==6){
                calemdarBodyHtml += "</ul>";
            }
        }

        $('.calemdar-body .weak').after($(calemdarBodyHtml));
        $('.calemdar-body ul').each(function(i, e){
            $(e).find('li:first-child , li:last-child').css('color', '#c8c8c8');
        })
   }

   function getProductListHTML(productList){
        var productListHTML =  "<div class='pay-list-android'>";
        for (var i = 0; i<productList.length ;i++){
            productListHTML += "<div class='month-list' data-id=" + productList[i].id + ">"+
                    "<p class='money'>" + parseInt(productList[i].unitPrice) + "元</p>"+
                    "<p class='month'>" + productList[i].monthCount + "个月</p>"+
            "</div>";
        }
        productListHTML+= "</div>";
    return productListHTML;
   }
})();