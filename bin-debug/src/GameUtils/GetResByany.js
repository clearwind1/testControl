/**
 * Created by pior on 15/12/22.
 */
var GameUtil;
(function (GameUtil) {
    var GetResByany = (function (_super) {
        __extends(GetResByany, _super);
        function GetResByany(url, imgwidth, imgheight) {
            if (imgwidth === void 0) { imgwidth = 0; }
            if (imgheight === void 0) { imgheight = 0; }
            _super.call(this);
            this.imgUrl = url;
            this.imgwidth = imgwidth;
            this.imgheight = imgheight;
            this.init();
        }
        var __egretProto__ = GetResByany.prototype;
        __egretProto__.init = function () {
            RES.getResAsync(this.imgUrl, this.comp, this);
        };
        __egretProto__.comp = function (data) {
            this.imag = new egret.Bitmap();
            this.imag.texture = data;
            this.imag.anchorX = this.imag.anchorY = 0.5;
            this.addChild(this.imag);
            if (this.imgwidth != 0) {
                this.imag.width = this.imgwidth;
            }
            if (this.imgheight != 0) {
                this.imag.height = this.imgheight;
            }
        };
        return GetResByany;
    })(egret.DisplayObjectContainer);
    GameUtil.GetResByany = GetResByany;
    GetResByany.prototype.__class__ = "GameUtil.GetResByany";
})(GameUtil || (GameUtil = {}));
