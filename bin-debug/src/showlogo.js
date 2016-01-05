/**
 * Created by pior on 15/12/22.
 */
var showlogo = (function (_super) {
    __extends(showlogo, _super);
    function showlogo() {
        _super.call(this);
        this.init();
    }
    var __egretProto__ = showlogo.prototype;
    __egretProto__.init = function () {
        this.logo = new GameUtil.GetResByany("logo_png");
        this.logo.x = egret.MainContext.instance.stage.stageWidth / 2;
        this.logo.y = egret.MainContext.instance.stage.stageHeight / 2;
        this.logoloading = new GameUtil.GetResByany("logoloading_png");
        this.logoloading.x = egret.MainContext.instance.stage.stageWidth / 2;
        this.logoloading.y = egret.MainContext.instance.stage.stageHeight / 2;
    };
    __egretProto__.showlogo = function () {
        this.addChild(this.logo);
        this.addChild(this.logoloading);
        this.intervalkey = egret.setInterval(this.showmove, this, 50);
    };
    __egretProto__.showmove = function () {
        var rot = this.logoloading.rotation;
        rot += 5;
        this.logoloading.rotation = rot;
        console.log("rot=======", this.logoloading.rotation);
    };
    __egretProto__.clearInterval = function () {
        egret.clearInterval(this.intervalkey);
    };
    showlogo.getInstance = function () {
        if (this.instance == null) {
            this.instance = new showlogo();
        }
        return this.instance;
    };
    showlogo.instance = null;
    return showlogo;
})(egret.DisplayObjectContainer);
showlogo.prototype.__class__ = "showlogo";
