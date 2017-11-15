var LevelElementView = (function (_super) {
    __extends(LevelElementView, _super);
    function LevelElementView() {
        _super.call(this);
        this.eltype = ""; //代表元素类型
        this.init();
    }
    var d = __define,c=LevelElementView,p=c.prototype;
    d(p, "num"
        ,function () {
            return Number(this.bittext.text);
        }
        ,function (val) {
            if (val <= 0) {
                if (!this.checkmarkbit) {
                    this.checkmarkbit = new egret.Bitmap();
                    this.checkmarkbit.texture = RES.getRes("checkmark_png");
                    this.checkmarkbit.x = (this.bitmap.width - this.checkmarkbit.width) / 2;
                    this.checkmarkbit.y = this.bitmap.height + this.bitmap.y - this.checkmarkbit.height / 2;
                    this.addChild(this.checkmarkbit);
                    this.bittext.visible = false;
                }
                else {
                    this.checkmarkbit.visible = true;
                }
                this.setTexture("e" + this.eltype + "foucs_png");
            }
            else {
                if (this.checkmarkbit) {
                    this.checkmarkbit.visible = false;
                }
                this.bittext.visible = true;
                this.bittext.text = val.toString();
                this.setTexture("e" + this.eltype + "_png");
            }
        }
    );
    p.init = function () {
        this.touchChildren = false;
        if (!this.bitmap) {
            this.bitmap = new egret.Bitmap();
        }
        var bitWidth = (GameData.stageW - 40) / GameData.MaxColumn;
        this.bitmap.width = bitWidth;
        this.bitmap.height = bitWidth;
        this.addChild(this.bitmap);
        this.bittext = new egret.BitmapText();
        this.bittext.font = RES.getRes("number_fnt");
        this.bittext.text = "0";
        this.bittext.x = (bitWidth - this.bittext.width) / 2;
        this.bittext.y = this.bitmap.height + this.bitmap.y - this.bittext.height / 2;
        //console.log(this.bittext.height  );
        this.addChild(this.bittext);
    };
    p.setTexture = function (val) {
        this.bitmap.texture = RES.getRes(val);
    };
    return LevelElementView;
}(egret.Sprite));
egret.registerClass(LevelElementView,'LevelElementView');
//# sourceMappingURL=LevelElementView.js.map