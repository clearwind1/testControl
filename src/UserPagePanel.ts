/**
 * Created by pior on 16/1/4.
 */

class UserPagePanel extends GameUtil.BassPanel
{

    private smbcount: number = 0;
    private username: string = "SooVL(461557)";
    private logintime: string = "2015-04-05 18:00";

    public constructor()
    {
        super();
    }

    public init()
    {
        this.showPanel();
    }

    private showPanel():void
    {
        var bg: egret.Bitmap = GameUtil.createBitmapByName("bgFrame_jpg");
        bg.anchorX = bg.anchorY = 0;
        this.addChild(bg);
        //var rect:egret.Rectangle = new egret.Rectangle(30,110,686,679);
        //bg.scale9Grid =rect;
        //bg.width = 1080;
        //bg.height = 1980;

        //底灰
        var bgcover: egret.Shape = GameUtil.createRect(0,190,1080,1980,1,0xe9e9e9);
        this.addChild(bgcover);

        var titletext: egret.TextField = GameUtil.createTextField(this.mStageW/2,130,60);
        titletext.text = "我的首页";
        this.addChild(titletext);

        //logo
        var logopic: egret.Bitmap = GameUtil.createBitmapByName("homepLogo_png");
        logopic.x = 210;
        logopic.y = 370;
        this.addChild(logopic);


        //用户名
        var usernametext: egret.TextField = GameUtil.createTextField(360,310,40,0,0.5,egret.HorizontalAlign.LEFT);
        usernametext.text = this.username;
        usernametext.textColor = 0x000000;
        this.addChild(usernametext);

        //余额
        var self = this;
        var smbalance: egret.TextField = GameUtil.createTextField(360,370,40,0,0.5,egret.HorizontalAlign.LEFT);
        smbalance.textFlow = <Array<egret.ITextElement>>[
            {text: "盛米余额: ", style: {"textColor": 0x000000}}
            , {text: ""+self.smbcount, style: {"textColor": 0xfa4545}}
            , {text: "盛米", style: {"textColor": 0x000000}}
            , {text: "(", style: {"textColor": 0x000000}}
            , {text: "0.0", style: {"textColor": 0xfa4545}}
            , {text: "元", style: {"textColor": 0x000000}}
            , {text: ")", style: {"textColor": 0x000000}}
        ];
        this.addChild(smbalance);

        //登录时间
        var logintimetext: egret.TextField = GameUtil.createTextField(360,430,40,0,0.5,egret.HorizontalAlign.LEFT);
        logintimetext.textFlow = <Array<egret.ITextElement>>[
            {text: "最近登录时间: ", style: {"textColor": 0x000000}}
            , {text: self.logintime, style: {"textColor": 0x3bafda}}
        ];
        this.addChild(logintimetext);

        var cutline: egret.Shape = GameUtil.createRect(0,500,1080,2,0.5,0x7e7872);
        this.addChild(cutline);

        //6个按钮
        var callfun: Function[] = [this.recharge,this.recglist,this.changepassword,this.bindphone,this.changeaccount,this.exit];
        var btname:string[] = ['rechargeBtn_png','recglistBtn_png','changepswBtn_png','bindphoneBtn_png','changeacBtn_png','returngmBtn_png'];
        var btntext:string[] = ['充值盛米','充值明细','修改密码','绑定手机','切换账号','返回游戏'];
        for(var i:number = 0;i < 6;i++){
            var btn: GameUtil.Menu = new GameUtil.Menu(this,btname[i],btname[i],callfun[i]);
            btn.setScaleMode();
            btn.addButtonText(btntext[i],0,80);
            btn.getBtnText().textColor = 0x3bafda;
            btn.getBtnText().size = 40;
            btn.x = 250 + 580*(i%2);
            btn.y = 726 + 490*Math.floor(i/2);
            this.addChild(btn);
        }

    }

    //充值
    private recharge():void
    {
        //console.log("recharge");
        this.addChild(new RechargePanel());
    }
    //充值明细
    private recglist():void
    {
        console.log("recglist");
    }
    //修改密码
    private changepassword():void
    {
        console.log("changepsw");
    }
    //绑定手机
    private bindphone():void
    {
        console.log("bindphone");
    }
    //切换账号
    private changeaccount():void
    {
        console.log("chageaccount");
        GameUtil.GameScene.runscene(new LoginPanel());
    }
    //返回游戏
    private exit():void
    {
        console.log("exit");
    }

}