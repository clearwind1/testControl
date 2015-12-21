/**
 * Created by pior on 15/9/29.
 * 封装egret Http类
 */
var GameUtil;
(function (GameUtil) {
    var Http = (function () {
        function Http(reqMethod, dataFormat) {
            if (reqMethod === void 0) { reqMethod = egret.URLRequestMethod.POST; }
            if (dataFormat === void 0) { dataFormat = egret.URLLoaderDataFormat.TEXT; }
            this.init(reqMethod, dataFormat);
        }
        var __egretProto__ = Http.prototype;
        __egretProto__.init = function (reqMethod, dataFormat) {
            if (reqMethod === void 0) { reqMethod = egret.URLRequestMethod.POST; }
            if (dataFormat === void 0) { dataFormat = egret.URLLoaderDataFormat.TEXT; }
            this.urlLoader = new egret.URLLoader();
            this.urlLoader.dataFormat = dataFormat;
            this.urlLoader.addEventListener(egret.Event.COMPLETE, this.loaded, this);
            this.urlRequest = new egret.URLRequest();
            this.urlRequest.method = reqMethod;
        };
        __egretProto__.loaded = function (event) {
            this.urlLoader.removeEventListener(egret.Event.COMPLETE, this.loaded, this);
            this.thisObj.removeChild(this.coverBg);
            var data = JSON.parse(this.urlLoader.data);
            if (this.onLoader != null) {
                this.onLoader.apply(this.thisObj, [data]);
            }
            //console.log("GameUtil.WaitServerPanel=========",GameUtil.WaitServerPanel.getInstace());
            //this.thisObj.removeChild(GameUtil.WaitServerPanel.getInstace());
        };
        __egretProto__.send = function (param, file, loaded, thisObj, url) {
            if (loaded === void 0) { loaded = null; }
            if (thisObj === void 0) { thisObj = null; }
            if (url === void 0) { url = GameUtil.GameConfig.IP; }
            this.urlRequest.url = "Http://" + url + file;
            this.onLoader = loaded;
            this.thisObj = thisObj;
            //console.log("paramJson==========",GameUtil.objectToString(param));
            var urlVariables = new egret.URLVariables(GameUtil.objectToString(param));
            this.urlRequest.data = urlVariables;
            this.urlLoader.addEventListener(egret.Event.COMPLETE, this.loaded, this);
            this.urlLoader.load(this.urlRequest);
            this.coverBg = GameUtil.createRect(0, 0, 480, 800, 0.5);
            this.thisObj.addChild(this.coverBg);
            this.coverBg.touchEnabled = true;
            //console.log("GameUtil.WaitServerPanel.getInstace()=========",GameUtil.WaitServerPanel.getInstace());
            //this.thisObj.addChild(GameUtil.WaitServerPanel.getInstace());
        };
        __egretProto__.setReqMethod = function (reqMethod) {
            this.urlRequest.method = reqMethod;
        };
        Http.getinstance = function (reqMethod, dataFormat) {
            if (reqMethod === void 0) { reqMethod = egret.URLRequestMethod.POST; }
            if (dataFormat === void 0) { dataFormat = egret.URLLoaderDataFormat.TEXT; }
            if (null == Http._instance) {
                Http._instance = new Http(reqMethod, dataFormat);
            }
            return Http._instance;
        };
        return Http;
    })();
    GameUtil.Http = Http;
    Http.prototype.__class__ = "GameUtil.Http";
})(GameUtil || (GameUtil = {}));
