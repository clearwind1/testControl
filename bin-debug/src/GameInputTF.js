/**
 * Created by pior on 16/1/5.
 */
var GameInputTF = (function (_super) {
    __extends(GameInputTF, _super);
    function GameInputTF() {
        _super.call(this);
        this.addEventListener(egret.FocusEvent.FOCUS_IN, this.onFocusIn, this);
        this.addEventListener(egret.FocusEvent.FOCUS_OUT, this.onFocusOut, this);
    }
    var __egretProto__ = GameInputTF.prototype;
    __egretProto__.init = function (obj, fun) {
        this.thisObj = obj;
        this.objfun = fun;
        this.baseText = "";
    };
    __egretProto__.setBaseText = function (basetext, alpha) {
        this.baseText = basetext;
        this.baseTextAlpha = alpha;
        this.text = this.baseText;
        this.alpha = this.baseTextAlpha;
    };
    __egretProto__.setBaseTextSize = function (size, sourcesize) {
        this.basetextsize = size;
        this.sourcesize = sourcesize;
        this.size = this.basetextsize;
    };
    __egretProto__.setSourceSt = function () {
        this.text = this.baseText;
        this.alpha = this.baseTextAlpha;
        this.size = this.basetextsize;
    };
    __egretProto__.onFocusIn = function (event) {
        //console.log("focusein");
        if (this.text == this.baseText) {
            this.text = "";
            this.size = this.sourcesize;
            this.alpha = 1;
        }
    };
    __egretProto__.onFocusOut = function (event) {
        //console.log("focuseout");
        if (this.text == "") {
            this.text = this.baseText;
            this.alpha = this.baseTextAlpha;
            this.size = this.basetextsize;
        }
        else {
            //console.log("numtext====",Number(this.text).toString());
            if (Number(this.text).toString() == 'NaN') {
                this.text = this.baseText;
                this.alpha = this.baseTextAlpha;
                this.size = this.basetextsize;
                this.thisObj.updataCoast(null);
            }
            else {
                this.thisObj.updataCoast(Number(this.text));
                this.text = "￥" + this.text + "元";
            }
        }
    };
    return GameInputTF;
})(egret.TextField);
GameInputTF.prototype.__class__ = "GameInputTF";
