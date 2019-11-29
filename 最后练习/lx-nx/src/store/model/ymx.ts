import axios from "axios";
export default {
  namespace: "ymx",
  state: {
    ymxzuo: [], //左边的数据
    ymxyou: [] //右边的数据
  },
  reducers: {
    upymxzuo(state: any, data: any) {
      let { payload } = data;
      state.ymxzuo = payload;
      return {
        ...state
      };
    },
    upymxyou(state: any, data: any) {
      let { payload } = data;
      state.ymxyou = payload;
      return {
        ...state
      };
    }
  },
  effects: {
    *getymxzuo(action: any, effect: any) {
      const zuo = yield effect.call(() => {
        return axios.get("/getymxzuo");
      });
      yield effect.put({ type: "upymxzuo", payload: zuo.data.result });
    },

    *getymxyou(action: any, effect: any) {
      const you = yield effect.call(() => {
        return axios.get("/getymxyou");
      });
      yield effect.put({ type: "upymxyou", payload: you.data.result });
    },

    *addcount(action: any, effect: any) {
      console.log(action.obj.count);
      console.log(action.obj.id);
      ++action.obj.count;
      const count = yield effect.call(() => {
        return axios.post("/upcount", {
          count: action.obj.count,
          id: action.obj.id
        });
      });
      const you = yield effect.call(() => {
        return axios.get("/getymxyou");
      });
      yield effect.put({ type: "upymxyou", payload: you.data.result });
    }
  }
};
