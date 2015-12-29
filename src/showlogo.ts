/**
 * Created by pior on 15/12/22.
 */
class showlogo extends egret.DisplayObjectContainer
{

    private logoloading: GameUtil.GetResByany;
    private logo: GameUtil.GetResByany;
    private intervalkey: number;

    public constructor()
    {
        super();
        this.init();
    }

    private init():void
    {
        this.logo = new GameUtil.GetResByany("logo_png");
        this.logo.x = egret.MainContext.instance.stage.stageWidth/2;
        this.logo.y = egret.MainContext.instance.stage.stageHeight/2;

        this.logoloading = new GameUtil.GetResByany("logoloading_png");
        this.logoloading.x = egret.MainContext.instance.stage.stageWidth/2;
        this.logoloading.y = egret.MainContext.instance.stage.stageHeight/2;
    }

    public showlogo():void
    {
        this.addChild(this.logo);
        this.addChild(this.logoloading);
        this.intervalkey = egret.setInterval(this.showmove,this,50);
    }

    private showmove():void
    {
        var rot: number = this.logoloading.rotation;
        rot += 5;
        this.logoloading.rotation = rot;

        console.log("rot=======",this.logoloading.rotation);

    }
    public clearInterval():void
    {
        egret.clearInterval(this.intervalkey);
    }

    private static instance: showlogo = null;
    public static getInstance(): showlogo
    {
        if(this.instance == null){
            this.instance = new showlogo();
        }

        return this.instance;
    }

}