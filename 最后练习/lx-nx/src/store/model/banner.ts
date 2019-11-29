import axiox from "axios";
export default {
  namespace: "banner",
  state: {
    datas: []
  },
  reducers: {
    upbannerlist(state: any, data: any) {
      let { payload } = data;
      return {
        datas: payload
      };
    }
  },
  effects: {
    *getbannerlist(action: any, effect: any) {
      let banners = yield effect.call(() => {
        return axiox.get("/getbannerlist");
      });
      yield effect.put({ type: "upbannerlist", payload: banners.data.result });
    }
  }
};
