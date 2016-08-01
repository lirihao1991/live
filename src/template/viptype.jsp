<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<c:set var="baseUrl" value="http://s.xnimg.cn/a85746" ></c:set>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no" />
    <title>开通直播会员</title>
    <script src="${baseUrl}/wap/mobile/livevip/dist/js/libs.js"></script>
    <link rel="stylesheet" href="http://s.xnimg.cn/a85769/wap/mobile/livevip/dist/css/viptype.css"/>
</head>
<body>
    <div class="userInfo-containner">
        <div class="user-avt"><img src='${userHeadUrl}'/></div>
        <div class="user-info">
            <p><span class="user-name">${userName}</span><span class="vip-icon"></span></p>
            <p class="vip-info"></p>
        </div>
        <div id="click"></div>
    </div>  
    <div class="banner">
        <div class='carousel-containner'>
            <div class="z2-first">
                <div class="people-img"></div>
                <div class="icon icon-1"></div>
                <div class="icon icon-2"></div>
                <div class="icon icon-3"></div>
                <div class="icon icon-4"></div>
                <p>直播会员 <span>·</span>会员礼券</p>
            </div>
            <div class="z2-second">
                <div class="people-img"></div>
                <div class="icon icon-1"><div class="hack"><div class="icon-inner"></div><div class="icon icon-1-shadow"></div></div></div>
                <div class="icon icon-2"><div class="hack"><div class="icon icon-2-shadow"></div><div class="icon-inner"></div></div></div>
                <div class="icon icon-3"><div class="hack"><div class="icon icon-3-shadow"></div><div class="icon-inner"></div></div></div>
                <div class="icon icon-4"><div class="hack"><div class="icon icon-4-shadow"></div><div class="icon-inner"></div></div></div>
                <div class="icon icon-5"><div class="hack"><div class="icon icon-5-shadow"></div><div class="icon-inner"></div></div></div>
                <p>直播会员 <span>·</span>虚拟特权</p>
            </div>
        </div>
        <div class="switch-btn-containner">
            <div></div><div></div>
        </div>
        <div class="banner-text">
            
        </div>
    </div>
    <div class="gap">
    </div>
    <p class="vipInfo-title">
        直播会员特权
    </p>
    <div class="vipInfo-list-containner">
        <ul class="vipInfo-list">
            <li><div class="item-containner"><a href = "/vip/getOtherInfo#freegifts" class="img-containner gift"></a><p>免费礼券</p></div></li>
            <li><div class="item-containner"><a href="/vip/getVipInvisibleInfo#vipType=${vipInfo.vipType}" class="img-containner invisible"></a><p>隐身查看</p></div></li>
            <li><div class="item-containner"><a href = "/vip/getOtherInfo#viplogo" class="img-containner vip"></a><p>会员标识</p></div></li>
            <li><div class="item-containner"><a href = "/vip/getOtherInfo#vipgifts" class="img-containner gifts"></a><p>专属礼物</p></div></li>
        </ul>
         <ul class="vipInfo-list">
            <li><div class="item-containner"><a href="/vip/getVipCommentColorInfo#vipType=${vipInfo.vipType}" class="img-containner comment"></a><p>评论彩色字体</p></div></li>
            <li><div class="item-containner"><a href = "/vip/getOtherInfo#headbehand" class="img-containner atv"></a><p>头像前排</p></div></li>
            <li><div class="item-containner"><a href = "/vip/getOtherInfo#colorname" class="img-containner color-name"></a><p>彩色名牌</p></div></li>
        </ul>
    </div>
</body>
    <script>
        var vipInfo = ${vipInfoJson},
            userId = getParams().userId,
            viewType = getParams().viewtype;
    </script>
    <script src="http://s.xnimg.cn/a85754/wap/mobile/livevip/dist/js/index.js"></script>
</html>