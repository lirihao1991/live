(function(window, $, undefined){
    window.Modal = Modal;

    var modalContainerTPL =  "<div class='modal-containner-shadow'>"+
                                "<div class='modal-content-containner'>"+
                                    "<div class='modal-header'>"+
                                    "</div>"+
                                    "<div class='close-btn'><span>＋</span></div>"+
                                    "<div class='modal-body'></div>"+
                                "</div>"+
                             "</div>"

    function Modal(option){
        return new ModalFactory(option);
    }

    function ModalFactory(option){
        this.option = option ? option : {};
        this.init();
    }

    ModalFactory.prototype.init = function(){
        if ($('.modal-containner-shadow').length){
            $('.modal-containner-shadow').show();
            return;
        };
        this.buildConstructor();
        this.position();
        this.bindEvent();
        //this.show();
    }

    ModalFactory.prototype.buildConstructor = function(){
        $('body').append($(modalContainerTPL));
        this.$containner = $('.modal-content-containner');
        // set title、content、width
        this.option.title ? this.$containner.find(".modal-header").html(this.option.title) : "";
        this.option.body ? this.$containner.find(".modal-body").html($(this.option.body)) : "";
        this.option.width ? this.$containner.css("width", this.option.width) : "";

        if($.isFunction(this.option.shown)){
            this.option.shown.call(this);
        }
    }

    ModalFactory.prototype.position = function(){
        this.$containner.css('marginTop', ($(window).height()/2 - (this.$containner.height()/2))+"px")
    }

    ModalFactory.prototype.bindEvent = function(){
        window.touch.on('.modal-containner-shadow, .close-btn', 'tap', function(e){
            if ($(e.target).hasClass('modal-containner-shadow') || $(e.target).parent().hasClass('close-btn')){
                $('.modal-containner-shadow').hide();
            }
        })
    }
})(window, $, undefined)


