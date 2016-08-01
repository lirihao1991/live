(function(window, $, undefined){

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    window.Carousel = Carousel;


    function Carousel(ele, option){
        return new Factory(ele, option);
    }

    function Factory(ele, option){
        this.$target = $('.carousel-containner');
        this.$containner = ele;
        this.start = false;
        this.init();
    }
    
    Factory.prototype.init = function(){
        this.clientWidth = $(document).width();

        // 如果在动画中 不让直行touchstart

        this.$target.find(".z2-first .icon-1")[0].addEventListener("webkitAnimationStart", function(){ //动画开始时事件 
                window.onAnimate = true;
            }.bind(this), false);

        this.$target.find(".z2-first .icon-4")[0].addEventListener("webkitAnimationEnd", function(){ //动画开始时事件 
                window.onAnimate = false;
            }.bind(this), false); 
        this.$target.find(".z2-second .icon-1")[0].addEventListener("webkitAnimationStart", function(){ //动画开始时事件 
                window.onAnimate = true;
            }.bind(this), false);

        this.$target.find(".z2-second .icon-5")[0].addEventListener("webkitAnimationEnd", function(){ //动画开始时事件 
                window.onAnimate = false;
            }.bind(this), false);
        this.$target.find(".z2-first .icon-1")[0].addEventListener("animationStart", function(){ //动画开始时事件 
                window.onAnimate = true;
            }.bind(this), false);

        this.$target.find(".z2-first .icon-4")[0].addEventListener("animationEnd", function(){ //动画开始时事件 
                window.onAnimate = false;
            }.bind(this), false); 
        this.$target.find(".z2-second .icon-1")[0].addEventListener("animationStart", function(){ //动画开始时事件 
                window.onAnimate = true;
            }.bind(this), false);

        this.$target.find(".z2-second .icon-5")[0].addEventListener("animationEnd", function(){ //动画开始时事件 
                window.onAnimate = false;
            }.bind(this), false); 


        this.$containner.on('touchstart', function(e){
            clearTimeout(this.auto);
            this.left = $('.carousel-containner').offset().left;
            this.startTimeStamp = Date.parse(new Date());
            this.mouseXstart = e.changedTouches[0].clientX;

            if (window.onAnimate) return;
            this.start = true;

        }.bind(this));

        this.$containner.on('touchmove', function(e){
            if (!this.start) return;

            var shift = e.changedTouches[0].clientX - this.mouseXstart;
            this.$target.css('left', (this.left + shift) + "px");
        }.bind(this));

        this.$containner.on('touchend', function(e){
            if (!this.start) return;
            this.start = false;
            var target = this.$target[0],
                mouseXstart = this.mouseXstart,
                clientWidth = this.clientWidth,
                initialLeft = this.left;

            function reset(){
                if(e.changedTouches[0].clientX - mouseXstart < 0)
                {
                    target.style.left = parseInt(target.style.left.replace('px', '')) + 65 + 'px';
                }
                else
                {
                    target.style.left = parseInt(target.style.left.replace('px', '')) - 65 + 'px';
                }
            }

            function switchPage(){
                if(e.changedTouches[0].clientX - mouseXstart < 0)
                    {
                        target.style.left = parseInt(target.style.left.replace('px', '')) - 65 + 'px';
                    }
                    else{
                        target.style.left = parseInt(target.style.left.replace('px', '')) + 65 + 'px';
                    }
                }

                if (Date.parse(new Date())-this.startTimeStamp >= 200 && Math.abs(e.changedTouches[0].clientX - this.mouseXstart) < this.clientWidth/1.5){
                    (function animloop(){
                        reset();
                        if(e.changedTouches[0].clientX - mouseXstart < 0)
                        {
                            if (parseInt(target.style.left.replace('px', '')) <= initialLeft-65)
                                {
                                   requestAnimFrame(animloop, target);
                                }
                                else{
                                    target.style.left = initialLeft + "px";
                                }
                        }
                        else{
                            if (parseInt(target.style.left.replace('px', '')) >= initialLeft+65)
                                {
                                   requestAnimFrame(animloop, target);
                                }
                                else{
                                    target.style.left = initialLeft + "px";
                                }
                        }
                    })();
                }
                else{
                     (function animloop2(){
                        switchPage();

                        if(e.changedTouches[0].clientX - mouseXstart < 0)
                        {
                            if (parseInt(target.style.left.replace('px', '')) >= 0-clientWidth+65 || (parseInt(target.style.left.replace('px', '')) <= 2*clientWidth && parseInt(target.style.left.replace('px', '')) >= 3*clientWidth+65))
                            {
                               requestAnimFrame(animloop2, target);
                            }
                            else{
                                if ($('.z2-first').hasClass('anm')){
                                    target.style.left = -(clientWidth*2) + "px";
                                    $('.z2-first').removeClass('anm');
                                    $('.z2-second').addClass('anm');
                                    $('.switch-btn-containner div').removeClass('active');
                                    $('.switch-btn-containner div:eq(1)').addClass('active');
                                }
                                else{
                                    target.style.left = "0px";
                                    $('.z2-first').addClass('anm');
                                    $('.z2-second').removeClass('anm');
                                    $('.switch-btn-containner div').removeClass('active');
                                    $('.switch-btn-containner div:eq(0)').addClass('active');
                                }
                            }
                        }
                        else{
                            if (parseInt(target.style.left.replace('px', '')) <= clientWidth-65 && parseInt(target.style.left.replace('px', '')) > 0 || (parseInt(target.style.left.replace('px', '')) >= -2*clientWidth && parseInt(target.style.left.replace('px', '')) <= -clientWidth-65)){
                                requestAnimFrame(animloop2, target);
                            }
                            else
                            {
                                if ($('.z2-first').hasClass('anm')){
                                        target.style.left = -(clientWidth*2) + "px";
                                        $('.z2-first').removeClass('anm');
                                        $('.z2-second').addClass('anm');
                                        $('.switch-btn-containner div').removeClass('active');
                                        $('.switch-btn-containner div:eq(1)').addClass('active');
                                    }
                                else{
                                        target.style.left = "0px";
                                        $('.z2-first').addClass('anm');
                                        $('.z2-second').removeClass('anm');
                                        $('.switch-btn-containner div').removeClass('active');
                                        $('.switch-btn-containner div:eq(0)').addClass('active');
                                    }
                            }
                        }
                    })();
                }
                this.auto = setTimeout(this.roll, 4000);
        }.bind(this));
        
        this.roll = function(){
            if(($('.z2-first').hasClass('anm'))){
                this.$target.css("left", -this.clientWidth*2+"px");
                $('.z2-first').removeClass('anm');
                $('.z2-second').addClass('anm');
                $('.switch-btn-containner div').removeClass('active');
                $('.switch-btn-containner div:eq(1)').addClass('active');
            }
            else{
                this.$target.css("left", "0px")
                $('.z2-first').addClass('anm');
                $('.z2-second').removeClass('anm');
                $('.switch-btn-containner div').removeClass('active');
                $('.switch-btn-containner div:eq(0)').addClass('active');
            }
            this.auto = setTimeout(this.roll, 2500);
        }.bind(this);

        this.auto = setTimeout(this.roll, 2500);
    }
})(window, $, undefined)
