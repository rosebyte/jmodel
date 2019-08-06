function Div(id, reactions) {
    var instance = null;
    var get = function () {
        if(instance == null){
            instance = $("#" + id);
        }
        return instance;
    };

    this.show = function () {
        get().css("display", "block");
        if(reactions.show != null){
            reactions.show(get());
        }
    };
    this.hide = function () {
        get().css("display", "none");
        if(reactions.hide != null){
            reactions.hide(get());
        }
    };
    this.disable = function () {
        var element = get();
        if(!element.hasClass("disabled")){
            element.addClass("disabled");
        }
        if(reactions.disable != null){
            reactions.disable(element);
        }
    };
    this.enable = function () {
        var element = get();
        if(element.hasClass("disabled")){
            element.removeClass("disabled");
        }
        if(reactions.enable != null){
            reactions.enable(element);
        }
    }
}

function Input(id, reactions) {
    var instance = null;
    var get = function () {
        if(instance == null){
            instance = $("#" + id);
            if(instance == null){
                throw "Can't find element with id '" + id + "'"
            }
        }
        return instance;
    };

    this.val = function (value) {
        if(value == null){
            return get().val()
        }
        if(reactions.before){
            value = reactions.before(value)
            if(value == null){
                return;
            }
        }
        get().val(value);
        if(reactions.after){
            reactions.after(value);
        }
    };

    this.disable = function () {
        var element = get();
        if(!element.hasClass("disabled")){
            element.addClass("disabled");
        }
        if(reactions.disable != null){
            reactions.disable(element);
        }
    };

    this.enable = function () {
        var element = get();
        if(element.hasClass("disabled")){
            element.removeClass("disabled");
        }
        if(reactions.enable != null){
            reactions.enable(element);
        }
    }
}