class GameOverPanel extends egret.Sprite
{
    public constructor()
    {
        super();
    }

    private _view:egret.Bitmap;
    private _contineBtn:egret.Bitmap;
    private _resetGameBtn:egret.Bitmap;
    private _isSuccess:boolean = false;
    public show(isSuccess:boolean)
    {
        this._isSuccess = isSuccess;
        
        this._view = new egret.Bitmap();
        this._view.texture = RES.getRes("level_0002_background_png");
        this._view.width = GameData.stageW;
        this._view.height = GameData.stageH;    
        this.addChild(this._view);
        this.touchEnabled = true;
        this.scaleX = 0.1;
        this.scaleY = 0.1;
        egret.Tween.get(this).to({scaleX:1,scaleY:1},700,egret.Ease.bounceOut).call(this.playStarAni,this);
        // this.playStarAni();
        
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.continueTouchEvent, this);
    }

    private continueTouchEvent(e:egret.TouchEvent){
        let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.ContineGame_CLICK);
        GameEventDispatcher.instance.dispatchEvent(evt);
    }

    private resetGameBtnTouchEvent(e:egret.TouchEvent){
        let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.ResetGame_CLICK);
        GameEventDispatcher.instance.dispatchEvent(evt);
    }
    private playStarAni()
    {/*
        var gameover:egret.Bitmap = new egret.Bitmap();
        gameover.texture = RES.getRes("gameovertitle_png");
        gameover.width = this._view.width/2;
        gameover.height = 60;
        gameover.x = this._view.x + (this._view.width-gameover.width)/2;
        gameover.y = this._view.y - 10;
        gameover.scaleX=0;
        gameover.scaleY = 0;
        this.addChild(gameover);
        egret.Tween.get(gameover).to({scaleX:1,scaleY:1},700,egret.Ease.bounceOut);
*/
        console.log("播放失败动画");
        if(this._isSuccess)
        {
            //成功动画
            let success:egret.Bitmap = new egret.Bitmap();
            success.texture = RES.getRes("success_png");
            success.width = (this._view.width-50)/3;
            success.height = success.width;
            success.x = (GameData.stageW-success.width*2)/3 +this._view.x;
            success.y = 150+this._view.y;
            success.scaleX = 1.5;
            success.scaleY = 1.5;
            success.alpha = 0;
            this.addChild(success);
            egret.Tween.get(success).to({scaleX:1,scaleY:1,alpha:1},700,egret.Ease.circIn)       
        }
        else
        {
            //失败动画
            let fail:egret.Bitmap = new egret.Bitmap();
            fail.texture = RES.getRes("fail_png");
            fail.width = (this._view.width-50)/3;
            fail.height = fail.width;
            fail.x = (GameData.stageW-fail.width*2)/3 +this._view.x;
            fail.y = 150+this._view.y;
            fail.scaleX = 1.5;
            fail.scaleY = 1.5;
            fail.alpha = 0;
            this.addChild(fail);
            // egret.Tween.get(fail).to({scaleX:1,scaleY:1,alpha:1},700,egret.Ease.circIn).call(this.continueGame,this);
            egret.Tween.get(fail).to({scaleX:1,scaleY:1,alpha:1},700,egret.Ease.circIn);
            this._contineBtn = new egret.Bitmap();
            this._contineBtn.texture = RES.getRes("zhadan_png");
            this._contineBtn.x = 20;
            this._contineBtn.y = GameData.stageH - this._contineBtn.height - 20;
            this.addChild(this._contineBtn);
            this._contineBtn.touchEnabled = true;
            this._contineBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.continueTouchEvent,this)
        }        
        this._resetGameBtn = new egret.Bitmap();
        this._resetGameBtn.texture = RES.getRes("zhenglie_png");
        this._resetGameBtn.x = GameData.stageW - this._resetGameBtn.width - 20;
        this._resetGameBtn.y = GameData.stageH - this._resetGameBtn.height - 20;
        this._resetGameBtn.touchEnabled = true;
        this.addChild(this._resetGameBtn);
        this._resetGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.resetGameBtnTouchBeginEvent,this);
        this._resetGameBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.resetGameBtnTouchEvent,this);
    }

    	//设置选中状态的焦点样式
    private resetGameBtnTouchBeginEvent(evt:TouchEvent){
        this._resetGameBtn.texture = RES.getRes("zhenglieactive_png");
    }

}