<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<c:set var="baseUrl" value="http://s.xnimg.cn/a85746/wap/mobile/livevip" ></c:set>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="${baseUrl}/dist/js/libs.js"></script>
    <link rel="stylesheet" href="http://s.xnimg.cn/a85769/wap/mobile/livevip/dist/css/other.css"/>
</head>
<body>
    <div class="body-containner">
         <div class="gap"></div>
         <div class="containner-title">
             功能介绍
         </div>
        <div class="body-text-containner">
            <div class="body-text"></div>
        </div>
        <div class="body-img-containner">
            <img src="" alt="">
        </div>
    </div>
</body>
<script>
    var baseUrl = "http://a.xnimg.cn/wap/mobile/livevip",
        othersMap = {
            freegifts: {title: "免费礼券", content: "会员每天可领取免费礼券，领满20天还有超级大礼包赠送哟!", imgsrc: baseUrl + "/dist/imgs/freegifts.jpg"},
            colorname: {title: "个性名牌", content:"直播会员拥有特殊的会员名牌万众瞩目给独一无二的你", imgsrc: baseUrl + "/dist/imgs/colorname.jpg"},
            headbehand: {title: "入场头像靠前", content: "直播间内排行靠前，一眼就能看到你！", imgsrc: baseUrl + "/dist/imgs/headbehand.jpg"},
            vipgifts: {title: "直播会员专属礼物", content: "观看直播时，送出专属会员礼物，尊贵无与伦比！", imgsrc: baseUrl + "/dist/imgs/vipgifts.jpg"},
            viplogo: {title: "会员标识", content: "会员专属标识，让你在茫茫人海中脱颖而出！", imgsrc: baseUrl + "/dist/imgs/viplogo.png"}
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        var key = window.location.hash.replace("#", "");

        $('.body-text').html(othersMap[key].content);
        $('.body-img-containner img').attr("src", othersMap[key].imgsrc);
        document.title =  othersMap[key].title;
    });
</script>
</html>