/**
 * Created by pior on 15/12/28.
 */
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading(fun, obj, url) {
        if (url === void 0) { url = "bg.jpg"; }
        this.loadedfun = fun;
        this.thisObj = obj;
        this.imageUrl = "/resource/assets/" + url;
        _super.call(this);
    }
    var __egretProto__ = Loading.prototype;
    __egretProto__.init = function () {
        var resjson = {
            "groups": [
                {
                    "keys": "bgImage,logo_png,logoloading_png",
                    "name": "preload"
                }
            ],
            "resources": [
                {
                    "name": "bgImage",
                    "type": "image",
                    "url": "assets/bg.jpg"
                },
                {
                    "name": "logo_png",
                    "type": "image",
                    "url": "assets/logo.png"
                },
                {
                    "name": "logoloading_png",
                    "type": "image",
                    "url": "assets/logoloading.png"
                }
            ]
        };
        RES.parseConfig(resjson, "resource/");
        //RES.getResByUrl(this.imageUrl,this.onComplete,this,RES.ResourceItem.TYPE_IMAGE);
        var getres = new GameUtil.GetResByany("bgImage");
        this.addChild(getres);
        getres.x = this.mStageW / 2;
        getres.y = this.mStageH / 2;
        var logo = new GameUtil.GetResByany("logo_png");
        this.addChild(logo);
        logo.x = this.mStageW / 2;
        logo.y = this.mStageH / 2;
        RES.getResAsync("logoloading_png", this.onComplete, this);
    };
    __egretProto__.onComplete = function (event) {
        //this.y = this.mStageH - 200;
        var img = event;
        this.loadingbar = new egret.Bitmap(img);
        this.loadingbar.anchorX = this.loadingbar.anchorY = 0.5;
        this.loadingbar.x = this.mStageW / 2;
        this.loadingbar.y = this.mStageH / 2;
        this.addChild(this.loadingbar);
        //console.log("thiswidth=======",this.width);
        //egret.MainContext.instance.stage.addChild(this);
        this.loadingRes();
    };
    __egretProto__.loadingRes = function () {
        //设置加载进度界面
        //Config to load process interface
        //this.loadingView = new LoadingUI();
        //this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    __egretProto__.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    __egretProto__.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            //this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            if (GameUtil.GameConfig.bRunFPS)
                egret.Profiler.getInstance().run();
            this.loadedfun.apply(this.thisObj);
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    __egretProto__.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    __egretProto__.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            //this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
            this.setPro(event.itemsLoaded / event.itemsTotal);
        }
    };
    __egretProto__.setPro = function (persend) {
        //this.loadingbar.width = this.loadingbar.texture.textureWidth*persend;
        //console.log("this.width=====",this.width);
        var rot = this.loadingbar.rotation;
        rot += 1;
        this.loadingbar.rotation = rot;
    };
    __egretProto__.getPro = function () {
        return this.loadingbar.width / this.loadingbar.texture.textureWidth;
    };
    return Loading;
})(GameUtil.BassPanel);
Loading.prototype.__class__ = "Loading";
