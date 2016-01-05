/**
 * Created by pior on 16/1/5.
 */

class GameInputTF extends egret.TextField
{
    private baseText: string;
    private baseTextAlpha: number;
    private basetextsize: number;
    private sourcesize: number;

    private thisObj: any;
    private objfun: Function;

    public constructor()
    {
        super();

        this.addEventListener(egret.FocusEvent.FOCUS_IN, this.onFocusIn, this);
        this.addEventListener(egret.FocusEvent.FOCUS_OUT,this.onFocusOut,this);
    }

    public init(obj,fun)
    {
        this.thisObj = obj;
        this.objfun = fun;
        this.baseText = "";
    }

    public setBaseText(basetext:string,alpha:number)
    {
        this.baseText = basetext;
        this.baseTextAlpha = alpha;
        this.text = this.baseText;
        this.alpha = this.baseTextAlpha;
    }

    public setBaseTextSize(size:number,sourcesize:number)
    {
        this.basetextsize = size;
        this.sourcesize = sourcesize;
        this.size = this.basetextsize;
    }

    public setSourceSt():void
    {
        this.text = this.baseText;
        this.alpha = this.baseTextAlpha;
        this.size = this.basetextsize;
    }

    private onFocusIn(event:egret.FocusEvent):void
    {
        //console.log("focusein");
        if(this.text == this.baseText)
        {
            this.text = "";
            this.size = this.sourcesize;
            this.alpha = 1;
        }
    }

    private onFocusOut(event:egret.FocusEvent):void
    {
        //console.log("focuseout");
        if(this.text == "")
        {
            this.text = this.baseText;
            this.alpha = this.baseTextAlpha;
            this.size = this.basetextsize;
        }
        else
        {
            //console.log("numtext====",Number(this.text).toString());
            if(Number(this.text).toString() == 'NaN'){
                this.text = this.baseText;
                this.alpha = this.baseTextAlpha;
                this.size = this.basetextsize;

                this.thisObj.updataCoast(null);
            }
            else
            {
                this.thisObj.updataCoast(Number(this.text));

                this.text = "￥" + this.text + "元";

            }
        }
    }
}