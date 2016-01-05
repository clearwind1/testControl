/**
 * Created by pior on 16/1/4.
 */

class RechargePanel extends GameUtil.BassPanel
{

    private offY: number = -30;

    private CurselectTag: number = 0;
    private selectTagBM: egret.Bitmap;

    private recgeconscl: GameUtil.ScrollView;
    private CurselectCoastTag: number = 0;
    private curselectCoastBM: egret.Bitmap;
    private cursCoastBMOffY: number = 0;
    private curCoast: number;

    private CurselectBankTag: number = 0;
    private curselectBankBM: egret.Bitmap;

    private CurselectCardTag: number = 0;
    private curselectCardBM: egret.Bitmap;

    private inputcoastTF: GameInputTF;
    private tiptext: egret.TextField;

    private rechargecardNumInputF: GameUtil.InputTextFiled;
    private rechargecardPswInputF: GameUtil.InputTextFiled;

    public constructor()
    {
        super()
    }
    public init()
    {
        this.touchEnabled = true;
        this.showPanel();
    }

    private showPanel()
    {
        var bg: egret.Bitmap = GameUtil.createBitmapByName("bgFrame_jpg");
        bg.anchorX = bg.anchorY = 0;
        this.addChild(bg);

        var titletext: egret.TextField = GameUtil.createTextField(this.mStageW/2,130+this.offY,60);
        titletext.text = "充值盛米";
        this.addChild(titletext);

        //返回按钮
        var exitbtn: GameUtil.Menu = new GameUtil.Menu(this,"","",this.exit);
        exitbtn.setScaleMode();
        exitbtn.addButtonText("<返回",0,35);
        exitbtn.getBtnText().size = 50;
        exitbtn.x = 135;
        exitbtn.y = 130+this.offY;
        this.addChild(exitbtn);

        //交易明细按钮
        var exitbtn: GameUtil.Menu = new GameUtil.Menu(this,"","",this.exit);
        exitbtn.setScaleMode();
        exitbtn.addButtonText("交易明细",0,35);
        exitbtn.getBtnText().size = 50;
        exitbtn.x = 1060;
        exitbtn.y = 130+this.offY;
        this.addChild(exitbtn);

        //底灰
        var bgcover: egret.Shape = GameUtil.createRect(0,220+this.offY,1080,1980,1,0xe9e9e9);
        this.addChild(bgcover);

        //选择充值方式
        var chosetext: egret.TextField = GameUtil.createTextField(180,300+this.offY,40);
        chosetext.text = "选择充值方式";
        chosetext.textColor = 0x000000;
        this.addChild(chosetext);

        //四个充值按钮
        var rcardbmp:string[] = ['zhifubaobtn_png','UnionPaybtn_png','messagepaybtn_png','rechargecarbtn_png'];
        var rcardtext:string[] = ['支付宝','网银','短信','充值卡'];
        for(var i:number = 0;i < 4;i++){
            var rechargecarbtn: GameUtil.Menu = new GameUtil.Menu(this,rcardbmp[i],rcardbmp[i],this.selectRechargeMode,[i]);
            rechargecarbtn.addButtonText(rcardtext[i],0,82);
            rechargecarbtn.getBtnText().textColor = 0x000000;
            rechargecarbtn.getBtnText().size = 30;
            rechargecarbtn.x = 145 + 260*i;
            rechargecarbtn.y = 440+this.offY;
            this.addChild(rechargecarbtn);
        }

        //提示文字
        this.tiptext = GameUtil.createTextField(this.mStageW/2,500+160+192*6+this.offY,40);
        this.tiptext.textFlow = <Array<egret.ITextElement>>[
            {text: "本次充值得",style:{"textColor": 0x000000}},
            {text:""+500*10,style:{"textColor":0xfa4545}},
            {text:"盛米",style:{"textColor": 0x000000}}
        ];
        this.addChild(this.tiptext);

        //选择方式图（蓝条）
        this.selectTagBM = GameUtil.createBitmapByName("selectTag_png");
        this.addChild(this.selectTagBM);
        this.selectTagBM.x = 145 + 260*this.CurselectTag;
        this.selectTagBM.y = 530+this.offY;

        //内容框（滚动）
        this.recgeconscl = new GameUtil.ScrollView(1080,1240);
        this.recgeconscl.y = 550+this.offY;
        this.addChild(this.recgeconscl);

        //当前选择金额图（钩）
        this.curselectCoastBM = GameUtil.createBitmapByName("choseTag_png");

        //当前选择银行图（钩）
        this.curselectBankBM = GameUtil.createBitmapByName("choseTag_png");

        //当前选择充值卡图（钩）
        this.curselectCardBM = GameUtil.createBitmapByName("choseTag_png");

        //输入框
        this.inputcoastTF = new GameInputTF();
        this.inputcoastTF.init(this,this.selectChargeCoast);
        this.inputcoastTF.type = egret.TextFieldType.INPUT;
        this.inputcoastTF.size = 50;
        this.inputcoastTF.textAlign = egret.HorizontalAlign.LEFT;
        this.inputcoastTF.anchorY = 0.5;
        this.inputcoastTF.textColor = 0x000000;
        this.inputcoastTF.setBaseText('手动输入金额',0.3);
        this.inputcoastTF.setBaseTextSize(50,50);

        //选择充值方式
        this.selectRechargeMode(0);

        //确定按钮
        var surerechbtn: GameUtil.Menu = new GameUtil.Menu(this,'rechargegreenframe_png','rechargegreenframe_png',this.surerecharge);
        surerechbtn.setScaleMode();
        surerechbtn.addButtonText('立即充值',0,0);
        surerechbtn.getBtnText().size = 60;
        surerechbtn.x = this.mStageW/2;
        surerechbtn.y = 1875;
        this.addChild(surerechbtn);

    }

    private selectRechargeMode(type:any):void
    {
        console.log("rechargetype=====",type);
        this.CurselectTag = type;
        this.selectTagBM.x = 145 + 260*this.CurselectTag;

        this.recgeconscl.clearItem();

        this.recgeconscl.setScorllTop(0);

        var recgeCont: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        if(type == 0){

            //选择充值金额
            var scoast: number[] = [500,300,200,100,50];
            this.chosecoastcont(recgeCont,0,true,scoast);

            this.selectChargeCoast(500,0);

        }
        else if(type == 1){

            //选择银行
            var selbanktext: egret.TextField = GameUtil.createTextField(60,20,40,0,0.5,egret.HorizontalAlign.LEFT);
            selbanktext.text = "选择银行";
            selbanktext.textColor = 0x000000;
            recgeCont.addChild(selbanktext);

            var banksclv = new GameUtil.ScrollView(1080,400);
            banksclv.y = 30;
            recgeCont.addChild(banksclv);

            var bankName: string[] = ['招商银行','建设银行'];
            for(var i:number = 0;i < 2;i++){
                var selbanktbtn: GameUtil.Menu = new GameUtil.Menu(this,'rechargeframe_png','rechargeframe_png',this.selectBank,[i]);
                selbanktbtn.addButtonText(bankName[i],-450,0);
                selbanktbtn.getBtnText().textColor = 0x000000;
                selbanktbtn.getBtnText().anchorX = 0;
                selbanktbtn.getBtnText().textAlign = egret.HorizontalAlign.LEFT;
                selbanktbtn.getBtnText().size = 50;
                selbanktbtn.x = this.mStageW/2;
                selbanktbtn.y = 160 + 192*i;
                banksclv.addChild(selbanktbtn);
            }

            banksclv.addChild(this.curselectBankBM);
            this.curselectBankBM.x = 910;

            //选择充值金额
            var scoast: number[] = [100,50];
            this.chosecoastcont(recgeCont,192*3,true,scoast);

            this.selectChargeCoast(100,0);
            this.selectBank(0);

        }
        else if(type == 2){

            //选择充值金额
            var scoast: number[] = [8,6,4,2];
            this.chosecoastcont(recgeCont,0,false,scoast);

            this.selectChargeCoast(8,0);
        }
        else
        {
            //选择充值卡
            var selcardtext: egret.TextField = GameUtil.createTextField(60,20,40,0,0.5,egret.HorizontalAlign.LEFT);
            selcardtext.text = "选择充值卡";
            selcardtext.textColor = 0x000000;
            recgeCont.addChild(selcardtext);

            var scardname: string[] = ['骏网一卡通','征途一卡通'];
            for(var i:number = 0;i < 2;i++){
                var selrgcardbtn: GameUtil.Menu = new GameUtil.Menu(this,'rechargeframe_png','rechargeframe_png',this.selectRCard,[i]);
                selrgcardbtn.addButtonText(scardname[i],-450,0);
                selrgcardbtn.getBtnText().textColor = 0x000000;
                selrgcardbtn.getBtnText().anchorX = 0;
                selrgcardbtn.getBtnText().textAlign = egret.HorizontalAlign.LEFT;
                selrgcardbtn.getBtnText().size = 50;
                selrgcardbtn.x = this.mStageW/2;
                selrgcardbtn.y = 160 + 192*i;
                recgeCont.addChild(selrgcardbtn);
            }

            recgeCont.addChild(this.curselectCardBM);
            this.curselectCardBM.x = 910;

            //选择充值金额
            var scoast: number[] = [500,300];
            this.chosecoastcont(recgeCont,192*3,false,scoast);

            this.selectChargeCoast(500,0);
            this.selectRCard(0);

            //输入充值卡卡号及密码
            var cdtext: string[] =['请输入充值卡卡号','请输入充值卡密码'];
            var cdinput: GameUtil.InputTextFiled[] = [this.rechargecardNumInputF,this.rechargecardPswInputF];
            for(var i: number = 0;i < 2;i++){
                var cardtext: egret.TextField = GameUtil.createTextField(60,1120+114*(i*2),40,0,0.5,egret.HorizontalAlign.LEFT);
                cardtext.text = cdtext[i];
                cardtext.textColor = 0x000000;
                recgeCont.addChild(cardtext);

                var inputframe: egret.Bitmap = GameUtil.createBitmapByName("rechargeframe_png");
                inputframe.x = this.mStageW/2;
                inputframe.y = 1120+114*(1+i*2);
                inputframe.scaleY = 0.6;
                recgeCont.addChild(inputframe);

                cdinput[i] = GameUtil.createInputText(90,+1120+114*(1+i*2),50,900,108);
                cdinput[i].anchorY = 0.5;
                cdinput[i].textColor = 0x000000;
                cdinput[i].setBaseTextSize(50,50);
                recgeCont.addChild(cdinput[i]);

                if(i == 1){
                    cdinput[i].displayAsPassword = true;
                }
            }

            //警告提示
            var warntipCoverImg: egret.Shape = GameUtil.createRect(this.mStageW/2,1640,968,130,1,0xc1c1c1);
            warntipCoverImg.anchorX = warntipCoverImg.anchorY = 0.5;
            recgeCont.addChild(warntipCoverImg);
            var warntextt: string[] = ['由于充值卡的不同,充值盛米的比例可能不同','请使用与充值金额相对应的充值卡充值,以免造成意外损失'];
            for(var i:number=0;i < 2;i++){
                var warntipimg: egret.Bitmap = GameUtil.createBitmapByName("warnImg_png");
                warntipimg.x = 120;
                warntipimg.y = 1610+65*i;
                recgeCont.addChild(warntipimg);

                var warntext: egret.TextField = GameUtil.createTextField(160,1610+65*i,30,0,0.5,egret.HorizontalAlign.LEFT);
                warntext.text = warntextt[i];
                recgeCont.addChild(warntext);
            }

        }

        this.recgeconscl.putItem(recgeCont);

    }

    //选择充值金额
    private chosecoastcont(recgeCont:any,offy:number,isinput:boolean,scoast:number[]):void
    {
        this.cursCoastBMOffY = offy;

        var selrcgcoast: egret.TextField = GameUtil.createTextField(60,20+offy,40,0,0.5,egret.HorizontalAlign.LEFT);
        selrcgcoast.text = "选择充值的金额";
        selrcgcoast.textColor = 0x000000;
        recgeCont.addChild(selrcgcoast);

        for(var i:number = 0;i < scoast.length;i++){
            var rechargecoastbtn: GameUtil.Menu = new GameUtil.Menu(this,'rechargeframe_png','rechargeframe_png',this.selectChargeCoast,[scoast[i],i]);
            rechargecoastbtn.addButtonText("￥"+scoast[i]+"元",-450,0);
            rechargecoastbtn.getBtnText().textColor = 0x000000;
            rechargecoastbtn.getBtnText().anchorX = 0;
            rechargecoastbtn.getBtnText().textAlign = egret.HorizontalAlign.LEFT;
            rechargecoastbtn.getBtnText().size = 50;
            rechargecoastbtn.x = this.mStageW/2;
            rechargecoastbtn.y = 160 + 192*i + offy;
            recgeCont.addChild(rechargecoastbtn);
        }

        if(isinput){
            //手动输入金额
            var inputframe: egret.Bitmap = GameUtil.createBitmapByName("rechargeframe_png");
            inputframe.x = this.mStageW/2;
            inputframe.y = 160+192*5;
            recgeCont.addChild(inputframe);


            this.inputcoastTF.x = 90;
            this.inputcoastTF.y = 160+192*5;
            this.inputcoastTF.width = 900;
            this.inputcoastTF.height = 180;
            recgeCont.addChild(this.inputcoastTF);
        }

        recgeCont.addChild(this.curselectCoastBM);
        this.curselectCoastBM.x = 910;

    }

    //玩家选择充值金额
    private selectChargeCoast(coast:any,tag?:any):void
    {
        console.log("selectChargeCoast======",coast);
        this.curCoast = coast;
        this.CurselectCoastTag = tag;
        this.curselectCoastBM.y = 160 + 192*this.CurselectCoastTag + this.cursCoastBMOffY;

        this.updataCoast(coast);
    }

    //更新所要充值金额
    public updataCoast(coast:any)
    {
        if(coast == null){
            coast = this.curCoast;
        }
        this.tiptext.textFlow = <Array<egret.ITextElement>>[
            {text: "本次充值得",style:{"textColor": 0x000000}},
            {text:""+coast*10,style:{"textColor":0xfa4545}},
            {text:"盛米",style:{"textColor": 0x000000}}
        ];
    }

    //选择银行
    private selectBank(tag:any):void
    {
        console.log("banktag=====",tag);
        this.CurselectBankTag = tag;
        this.curselectBankBM.y = 160 + 192*this.CurselectBankTag;
    }

    //选择充值卡
    private selectRCard(tag:any):void
    {
        console.log("cardtag=====",tag);
        this.CurselectCardTag = tag;
        this.curselectCardBM.y = 160 + 192*this.CurselectCardTag;
    }

    //立即充值（确认充值）
    private surerecharge():void
    {

    }

    //退出
    private exit():void
    {
        this.parent.removeChild(this);
    }
}