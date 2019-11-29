import axios from "axios";
export default {
  namespace: "banner",
  state: {
    bannerdata: []
  },
  reducers: {
    upbannerlist(state: any, data: any) {
      const { payload } = data;
      console.log(payload);
      return {
        ...state,
        bannerdata: payload
      };
    }
  },
  effects: {
    *getbannerlist(action: any, effect: any) {
      const banner = yield effect.call(() => {
        return axios.get("/getbannerlist");
      });
      yield effect.put({ type: "upbannerlist", payload: banner.data.result });
    }
  }
};
