require("flexible");
require("zepto");
require("./uicomponent/modal");
require("./uicomponent/carousel")
window.touch = require("./uicomponent/touch");
window.formatDate = require("./uicomponent/formatData");


window.getParams = function() {
  var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}