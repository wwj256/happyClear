/**
 * 游戏事件驱动器
 */
var GameEventDispatcher = (function (_super) {
    __extends(GameEventDispatcher, _super);
    function GameEventDispatcher() {
        _super.call(this);
    }
    var d = __define,c=GameEventDispatcher,p=c.prototype;
    d(GameEventDispatcher, "instance"
        ,function () {
            return this._instance ? this._instance : this._instance = new GameEventDispatcher();
        }
    );
    return GameEventDispatcher;
}(egret.EventDispatcher));
egret.registerClass(GameEventDispatcher,'GameEventDispatcher');
//# sourceMappingURL=GameEventDispatcher.js.map