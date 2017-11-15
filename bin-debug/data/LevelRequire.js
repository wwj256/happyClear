var LevelRequire = (function () {
    function LevelRequire() {
        this.reqElements = new Array();
    }
    var d = __define,c=LevelRequire,p=c.prototype;
    /**
     * 过卡过关条件数量
     */
    p.getLevelReqNum = function () {
        return this.reqElements.length;
    };
    /**
     * 添加一个关卡元素，类型与数量
     */
    p.addElements = function (type, num) {
        var element = new LevelRequireElement();
        element.num = num;
        element.type = type;
        this.reqElements.push(element);
    };
    /**
     * 启动关卡条件修改
       */
    p.openChange = function () {
        this.reqElements = [];
    };
    /**
     * 减少关卡中得元素数量
     */
    p.changeReqNum = function (type, num) {
        var len = this.getLevelReqNum();
        for (var i = 0; i < len; i++) {
            if (this.reqElements[i].type == type) {
                this.reqElements[i].num -= num;
                console.log("最新数量", this.reqElements[i].num);
                return;
            }
        }
    };
    /**
     * 检测所有关卡元素是否都被删除
     */
    p.isClear = function () {
        var len = this.getLevelReqNum();
        for (var i = 0; i < len; i++) {
            if (this.reqElements[i].num > 0) {
                return false;
            }
        }
        return true;
    };
    return LevelRequire;
}());
egret.registerClass(LevelRequire,'LevelRequire');
//# sourceMappingURL=LevelRequire.js.map