/**
 * Created by pior on 15/12/28.
 */
class LoginPanel extends GameUtil.BassPanel
{
    private inputname: GameUtil.InputTextFiled;
    private inputpsw: GameUtil.InputTextFiled;

    public constructor()
    {
        super();
    }
    public init()
    {
        this.showlogin();
    }

    private showlogin()
    {

        //底灰
        //var bgcover: egret.Shape = GameUtil.createRect(0,0,1080,1980,1,0xe9e9e9);
        //this.addChild(bgcover);

        var bg: egret.Bitmap = GameUtil.createBitmapByName("floatFrame_png");
        bg.x = this.mStageW/2;
        bg.y = this.mStageH/2;
        this.addChild(bg);

        var logintext: egret.TextField = GameUtil.createTextField(this.mStageW/2,695,60);
        logintext.text = "盛迅游戏账号登录";
        this.addChild(logintext);

        var nameinputframe: egret.Bitmap = GameUtil.createBitmapByName("inputframe_png");
        nameinputframe.x = this.mStageW/2;
        nameinputframe.y = 860;
        this.addChild(nameinputframe);

        var nametext: egret.TextField = GameUtil.createTextField(165,860,40,0,0.5,egret.HorizontalAlign.LEFT);
        nametext.text = "账号";
        nametext.textColor = 0x3bafda;
        this.addChild(nametext);

        this.inputname = GameUtil.createInputText(295,860,40,610,70,100);
        this.inputname.anchorY = 0.5;
        this.inputname.textColor = 0x000000;
        this.inputname.setBaseText("手机/用户名/邮箱",0.3);
        this.inputname.setBaseTextSize(30,40);
        this.addChild(this.inputname);

        var pswinputframe: egret.Bitmap = GameUtil.createBitmapByName("inputframe_png");
        pswinputframe.anchorX = 0;
        pswinputframe.scaleX = 0.6;
        pswinputframe.x = 145;
        pswinputframe.y = 980;
        this.addChild(pswinputframe);

        var pswtext: egret.TextField = GameUtil.createTextField(165,980,40,0,0.5,egret.HorizontalAlign.LEFT);
        pswtext.text = "密码";
        pswtext.textColor = 0x3bafda;
        this.addChild(pswtext);

        this.inputpsw = GameUtil.createInputText(295,980,40,310,70,100);
        this.inputpsw.anchorY = 0.5;
        this.inputpsw.textColor = 0x000000;
        this.inputpsw.setBaseTextSize(40,40);
        this.inputpsw.displayAsPassword = true;
        this.addChild(this.inputpsw);

        //忘记密码按钮
        var fpswbtn: GameUtil.Menu = new GameUtil.Menu(this,"blueframe_png","blueframe_png",this.forgetpsw);
        fpswbtn.setScaleMode(0.9);
        fpswbtn.addButtonText("忘记密码",-55);
        fpswbtn.getBtnText().size = 40;
        fpswbtn.setBtnScale(0.7,1);
        fpswbtn.x = 815;
        fpswbtn.y = 980;
        this.addChild(fpswbtn);

        //登录按钮
        var loginbtn: GameUtil.Menu = new GameUtil.Menu(this,"blueframe_png","blueframe_png",this.login);
        loginbtn.setScaleMode();
        loginbtn.addButtonText("登  录");
        loginbtn.getBtnText().size = 40;
        loginbtn.x = 765;
        loginbtn.y = 1125;
        this.addChild(loginbtn);

        //注册按钮
        var regbtn: GameUtil.Menu = new GameUtil.Menu(this,"greenframe_png","greenframe_png",this.register);
        regbtn.setScaleMode();
        regbtn.addButtonText("立即注册");
        regbtn.getBtnText().size = 40;
        regbtn.x = 315;
        regbtn.y = 1125;
        this.addChild(regbtn);

    }

    private login():void
    {
        //window['JavaScriptInterface'].showToast("fsdafdsa");
        GameUtil.GameScene.runscene(new UserPagePanel());
        //this.addChild(new UserPagePanel());
    }

    private forgetpsw():void
    {
        this.addChild(new ResetPasswordPanel());
    }

    private register():void
    {
        this.addChild(new RegisterPanel());
    }

}