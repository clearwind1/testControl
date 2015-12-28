/**
 * Created by pior on 15/12/28.
 */
var LoginPanel = (function (_super) {
    __extends(LoginPanel, _super);
    function LoginPanel() {
        _super.call(this);
    }
    var __egretProto__ = LoginPanel.prototype;
    __egretProto__.init = function () {
        this.showlogin();
    };
    __egretProto__.showlogin = function () {
        var bg = GameUtil.createBitmapByName("floatFrame_png");
        bg.x = this.mStageW / 2;
        bg.y = this.mStageH / 2;
        this.addChild(bg);
        var logintext = GameUtil.createTextField(this.mStageW / 2, 695, 60);
        logintext.text = "盛迅游戏账号登录";
        this.addChild(logintext);
        var nameinputframe = GameUtil.createBitmapByName("inputframe_png");
        nameinputframe.x = this.mStageW / 2;
        nameinputframe.y = 860;
        this.addChild(nameinputframe);
        var nametext = GameUtil.createTextField(165, 860, 40, 0, 0.5, egret.HorizontalAlign.LEFT);
        nametext.text = "账号";
        nametext.textColor = 0x3bafda;
        this.addChild(nametext);
        this.inputname = GameUtil.createInputText(265, 860, 40, 640, 70, 100);
        this.inputname.anchorY = 0.5;
        this.inputname.textColor = 0x000000;
        this.addChild(this.inputname);
        var pswinputframe = GameUtil.createBitmapByName("inputframe_png");
        pswinputframe.anchorX = 0;
        pswinputframe.scaleX = 0.6;
        pswinputframe.x = 145;
        pswinputframe.y = 980;
        this.addChild(pswinputframe);
        var pswtext = GameUtil.createTextField(165, 980, 40, 0, 0.5, egret.HorizontalAlign.LEFT);
        pswtext.text = "密码";
        pswtext.textColor = 0x3bafda;
        this.addChild(pswtext);
        this.inputpsw = GameUtil.createInputText(265, 980, 40, 350, 70, 100);
        this.inputpsw.anchorY = 0.5;
        this.inputpsw.textColor = 0x000000;
        this.inputpsw.displayAsPassword = true;
        this.addChild(this.inputpsw);
        //登录按钮
        var loginbtn = new GameUtil.Menu(this, "blueframe_png", "blueframe_png", this.login);
        loginbtn.setScaleMode();
        loginbtn.addButtonText("登  录");
        loginbtn.getBtnText().size = 40;
        loginbtn.x = 765;
        loginbtn.y = 1125;
        this.addChild(loginbtn);
    };
    __egretProto__.login = function () {
        window['JavaScriptInterface'].showToast("fsdafdsa");
    };
    return LoginPanel;
})(GameUtil.BassPanel);
LoginPanel.prototype.__class__ = "LoginPanel";
