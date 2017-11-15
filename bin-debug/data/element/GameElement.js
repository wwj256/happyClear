var GameElement = (function (_super) {
    __extends(GameElement, _super);
    function GameElement() {
        _super.apply(this, arguments);
        //游戏元素，用于标记当前舞台种出现的元素数据
        this.id = 0; //唯一ID，代表当前舞台上得元素,这个ID要和view中得元素ID对应
        this.location = 0; //位置坐标，使用0-64来进行记录
    }
    var d = __define,c=GameElement,p=c.prototype;
    return GameElement;
}(BaseElement));
egret.registerClass(GameElement,'GameElement');
//# sourceMappingURL=GameElement.js.map