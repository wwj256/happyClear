var PropView = (function (_super) {
    __extends(PropView, _super);
    function PropView(type) {
        _super.call(this);
        this._type = -1; //道具类型
        this.id = -1;
        this._num = 0; //数量
        this._type = type;
        this.init();
    }
    var d = __define,c=PropView,p=c.prototype;
    d(p, "proptype"
        ,function () {
            return this._type;
        }
    );
    p.init = function () {
        this.createView();
        this.createNumText();
        this.addChild(this._view_active);
        this.addChild(this._view_box);
        this.addChild(this._numText);
        this.setActivateState(true);
    };
    p.createNumText = function () {
        this._numText = new egret.BitmapText();
        this._numText.font = RES.getRes("number_fnt");
        this._numText.x = this._view_active.width - 31;
    };
    p.createView = function () {
        var _interval = 15;
        var _width = (GameData.stageW - _interval * 6) / 5;
        if (!this._view_active) {
            this._view_active = new egret.Bitmap();
            this._view_active.texture = RES.getRes(this.getActivateTexture(this._type));
            this._view_active.width = this._view_active.height = _width;
        }
        if (!this._view_box) {
            this._view_box = new egret.Bitmap();
            this._view_box.texture = RES.getRes("propbox_png");
            this._view_box.width = this._view_box.height = this._view_active.width + 10;
            this._view_box.x = -5;
            this._view_box.y = -5;
        }
    };
    d(p, "num"
        ,function () {
            return this._num;
        }
        ,function (val) {
            this._num = val;
            this._numText.text = val.toString();
            if (val <= 0) {
                this.setActivateState(false);
            }
            else {
                this.setActivateState(true);
            }
        }
    );
    p.getFocusTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "tongseactive_png";
                break;
            case 1:
                textureName = "zhadanactive_png";
                break;
            case 2:
                textureName = "zhenghangactive_png";
                break;
            case 3:
                textureName = "zhenglieactive_png";
                break;
            case 4:
                textureName = "chanziactive_png";
                break;
        }
        return textureName;
    };
    p.getActivateTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "tongse_png";
                break;
            case 1:
                textureName = "zhadan_png";
                break;
            case 2:
                textureName = "zhenghang_png";
                break;
            case 3:
                textureName = "zhenglie_png";
                break;
            case 4:
                textureName = "chanzi_png";
                break;
        }
        return textureName;
    };
    p.getDisableTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "tongsedisable_png";
                break;
            case 1:
                textureName = "zhadandisable_png";
                break;
            case 2:
                textureName = "zhenghangdisable_png";
                break;
            case 3:
                textureName = "zhengliedisable_png";
                break;
            case 4:
                textureName = "chanzidisable_png";
                break;
        }
        return textureName;
    };
    p.setActivateState = function (val) {
        this.touchEnabled = val;
        if (val) {
            this._view_active.texture = RES.getRes(this.getActivateTexture(this._type));
            this._numText.font = RES.getRes("number_fnt");
        }
        else {
            this._view_active.texture = RES.getRes(this.getDisableTexture(this._type));
            this._numText.font = RES.getRes("numberdisable_fnt");
        }
    };
    p.setFocus = function (val) {
        if (val) {
            this._view_active.texture = RES.getRes(this.getFocusTexture(this._type));
        }
        else {
            if (this._num > 0) {
                this._view_active.texture = RES.getRes(this.getActivateTexture(this._type));
            }
            else {
                this._view_active.texture = RES.getRes(this.getDisableTexture(this._type));
            }
        }
    };
    return PropView;
}(egret.Sprite));
egret.registerClass(PropView,'PropView');
//# sourceMappingURL=PropView.js.map