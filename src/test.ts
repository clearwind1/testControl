/**
 * Created by pior on 15/12/10.
 */

class testGame
{
    public getnumber():number{

        showlogo.getInstance().showlogo();

        return Math.random();
    }

    public showlogo():void
    {
        showlogo.getInstance().showlogo();
    }

    private static instance: testGame = null;
    public static getInstance(): testGame
    {
        if(this.instance == null){
            this.instance = new testGame();
        }

        return this.instance;
    }

}