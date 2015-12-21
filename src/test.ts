/**
 * Created by pior on 15/12/10.
 */

class testGame{
    public getnumber():number{
        return Math.random();
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