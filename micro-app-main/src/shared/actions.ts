// 注册一个MicroAppStateActions 用于通讯
import {initGlobalState,MicroAppStateActions} from "qiankun"

const initStates = {};
const actions: MicroAppStateActions = initGlobalState(initGlobalState)
export default  actions
