var LevelGameDataParse = (function () {
    function LevelGameDataParse() {
    }
    var d = __define,c=LevelGameDataParse,p=c.prototype;
    /**
     * 针对当前关卡JSON数据，进行解析
     */
    LevelGameDataParse.parseLevelGameData = function (val) {
        GameData.stepNum = val.step;
        GameData.levelStepNum = val.step;
        GameData.elementTypes = val.element;
        GameData.levelBackgroundImageName = val.levelbgimg;
        LevelGameDataParse.parseLevelReq(val.levelreq);
    };
    /**
     *解析过关条件数据
     */
    LevelGameDataParse.parseLevelReq = function (val) {
        GameData.levelReq.openChange();
        var len = val.length;
        for (var i = 0; i < len; i++) {
            GameData.levelReq.addElements(val[i].type, val[i].num);
        }
    };
    return LevelGameDataParse;
}());
egret.registerClass(LevelGameDataParse,'LevelGameDataParse');
//# sourceMappingURL=LevelGameDataParse.js.map