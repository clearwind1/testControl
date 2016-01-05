/**
 * Created by pior on 15/12/31.
 */
var ResetPasswordPanel = (function (_super) {
    __extends(ResetPasswordPanel, _super);
    function ResetPasswordPanel() {
        _super.call(this);
    }
    var __egretProto__ = ResetPasswordPanel.prototype;
    __egretProto__.init = function () {
        this.coverBg = GameUtil.createRect(0, 0, 1080, 1980, 0);
        this.addChild(this.coverBg);
        this.touchEnabled = true;
        this.showpanel();
    };
    __egretProto__.showpanel = function () {
        var bg = GameUtil.createBitmapByName("floatFrame_png");
        bg.x = this.mStageW / 2;
        bg.y = this.mStageH / 2;
        this.addChild(bg);
        var titletext = GameUtil.createTextField(this.mStageW / 2, 695, 60);
        titletext.text = "盛迅游戏";
        this.addChild(titletext);
        var text = ['手机号', '验证码', '新密码'];
        var inputframe = [this.inputphoneframe, this.inputcodeframe, this.inputnewpswframe];
        var inputbasetest = ['填写11位手机号码', '手机获取的验证码', '登录时使用的密码,可填入大小写字母或数字'];
        for (var i = 0; i < 3; i++) {
            var inputframepic = GameUtil.createBitmapByName("inputframe_png");
            inputframepic.anchorX = 0;
            if (i == 1) {
                inputframepic.scaleX = 0.6;
            }
            inputframepic.x = 145;
            inputframepic.y = 860 + 120 * i;
            this.addChild(inputframepic);
            var nametext = GameUtil.createTextField(165, 860 + 120 * i, 40, 0, 0.5, egret.HorizontalAlign.LEFT);
            nametext.text = text[i];
            nametext.textColor = 0x3bafda;
            this.addChild(nametext);
            var len = 580;
            var maxchars = 100;
            if (i == 1) {
                maxchars = 6;
                len = 290;
            }
            inputframe[i] = GameUtil.createInputText(335, 860 + 120 * i, 40, len, 70, 100);
            inputframe[i].maxChars = maxchars;
            inputframe[i].anchorY = 0.5;
            inputframe[i].textColor = 0x000000;
            inputframe[i].setBaseText(inputbasetest[i], 0.3);
            inputframe[i].setBaseTextSize(30, 40);
            this.addChild(inputframe[i]);
        }
        //获取验证码按钮
        var getcodebtn = new GameUtil.Menu(this, "blueframe_png", "blueframe_png", this.getcode);
        getcodebtn.setScaleMode();
        getcodebtn.addButtonText("获取验证码", -55);
        getcodebtn.getBtnText().size = 30;
        getcodebtn.setBtnScale(0.7, 1);
        getcodebtn.x = 815;
        getcodebtn.y = 980;
        this.addChild(getcodebtn);
        //立刻修改按钮
        var surebtn = new GameUtil.Menu(this, "blueframe_png", "blueframe_png", this.sureChange);
        surebtn.setScaleMode();
        surebtn.addButtonText("立刻修改");
        surebtn.getBtnText().size = 40;
        surebtn.x = this.mStageW / 2;
        surebtn.y = 1220;
        this.addChild(surebtn);
        //返回按钮
        var exitbtn = new GameUtil.Menu(this, "", "", this.exit);
        exitbtn.setScaleMode();
        exitbtn.addButtonText("<", 0, 35);
        exitbtn.getBtnText().size = 70;
        exitbtn.x = 115;
        exitbtn.y = 695;
        this.addChild(exitbtn);
    };
    __egretProto__.getcode = function () {
    };
    __egretProto__.sureChange = function () {
    };
    __egretProto__.exit = function () {
        this.parent.removeChild(this);
    };
    return ResetPasswordPanel;
})(GameUtil.BassPanel);
ResetPasswordPanel.prototype.__class__ = "ResetPasswordPanel";
