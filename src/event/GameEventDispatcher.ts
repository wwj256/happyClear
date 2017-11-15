/**
 * 游戏事件驱动器
 */
class GameEventDispatcher extends egret.EventDispatcher {
	private static _instance:GameEventDispatcher;
	public constructor() {
		super();
	}

	
	public static get instance() : GameEventDispatcher {
		return this._instance ? this._instance : this._instance = new GameEventDispatcher();
	}
	

}