import { getshoplist } from "../../app/app";
export default {
  namespace: "shop",
  state: {
    datas: []
  },
  reducers: {
    updatashoplist(state: any, data: any) {
      let { payload } = data; //从data里面结构出来payload
      return { ...state, datas: payload }; //返回一个新的state
    }
  },
  effects: {
    *getshoplist(action: any, effect: any) {
      // console.log(111);
      let lister = yield effect.call(getshoplist);
      yield effect.put({ type: "updatashoplist", payload: lister.data });
    }
  }
};
