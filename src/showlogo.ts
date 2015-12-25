/**
 * Created by pior on 15/12/22.
 */
class showlogo extends egret.DisplayObjectContainer
{

    public constructor()
    {
        super();
    }

    public showlogo():void
    {
        var getres: GameUtil.GetResByany = new GameUtil.GetResByany("bgImage");
        this.addChild(getres);
        getres.x = egret.MainContext.instance.stage.stageWidth/2;
        getres.y = egret.MainContext.instance.stage.stageHeight/2;
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