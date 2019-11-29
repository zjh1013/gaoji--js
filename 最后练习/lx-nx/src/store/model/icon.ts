import axiox from "axios";
export default {
  namespace: "icon",
  state: {
    datas: []
  },
  reducers: {
    upiconlist(state: any, data: any) {
      let { payload } = data;
      return {
        datas: payload
      };
    }
  },
  effects: {
    *geticonlist(action: any, effect: any) {
      let icons = yield effect.call(() => {
        return axiox.get("/geticonlist");
      });
      yield effect.put({ type: "upiconlist", payload: icons.data.result });
    }
  }
};
