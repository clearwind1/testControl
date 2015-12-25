/**
 * Created by pior on 15/12/22.
 */
var showlogo = (function (_super) {
    __extends(showlogo, _super);
    function showlogo() {
        _super.call(this);
    }
    var __egretProto__ = showlogo.prototype;
    __egretProto__.showlogo = function () {
        var getres = new GameUtil.GetResByany("bgImage");
        this.addChild(getres);
        getres.x = egret.MainContext.instance.stage.stageWidth / 2;
        getres.y = egret.MainContext.instance.stage.stageHeight / 2;
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
