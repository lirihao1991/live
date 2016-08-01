<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<c:set var="baseUrl" value="http://s.xnimg.cn" ></c:set>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>直播会员帮助</title>
    <script src="${baseUrl}/a85746/wap/mobile/livevip/dist/js/libs.js"></script>
    <link rel="stylesheet" href="${baseUrl}/a85769/wap/mobile/livevip/dist/css/faq.css"/>
</head>
<body>
    <div class="intro-containner">
        <p>感谢您选择使用由北京千橡网景科技发展有限公司（下称“人人网”）提供的人人直播会员服务。为了您可以更好地使用人人直播会员服务，<span class="ios"></span>在成为人人直播会员前请认真阅读直播会员帮助。</p>
    </div>
    <div class="body-containner">
        <h3>1. 人人直播会员都有哪些权益？</h3>
        <p>人人直播会员共包含免费会员礼券，隐身查看，直播会员特殊标识，会员专属礼物，评论彩色，直播间入场头像靠前，彩色名牌等几大特权，让你玩转直播，彰显不一样的自己，后续会不断推出更多的功能。</p>
        <h3>2. 免费领取的礼券怎么用？</h3>
        <p>会员每天登录客户端即可领取免费礼券，领取成功后即可在直播间内赠送给喜欢的主播，会员礼券有效期为7天，详情可参见礼券使用帮助。</p>
        <h3>3. 如何开通和续费？</h3>
        <p>可以在安卓和苹果手机端进行付费开通，目前仅支持移动端开通，或参加线上人人官方活动获得免费会员资格，陆续会推出网页端开通直播会员。购买会员成功后，可进行再次续费。</p>
        <h3>4. 付款后为什么没能开通直播会员？</h3>
        <p>付款后暂未开通的情况可能是多种原因造成的，您可以耐心等待24小时，如仍旧未能开通成功，可联系人人微信客服：人人直播服务号 进行反馈，客服人员会进行相关处理。</p>
        <h3>5. 注意事项：</h3>
        <p>（一）直播会员开通后，不支持退款。<br>（二）人人直播有权变动会员价格，但价格变动仅真对新开通或续费
      会员，并不会改变现有会员的会员价格。<br>（三）如有其他问题，请联系人人微信客服：人人直播服务号（renrenlive）</p>
    </div>
</body>
<script>
    if(navigator.userAgent && navigator.userAgent.indexOf('iPhone') >0){
        $('.ios').html('该功能与苹果公司无关。');
    };
</script>
</html> 