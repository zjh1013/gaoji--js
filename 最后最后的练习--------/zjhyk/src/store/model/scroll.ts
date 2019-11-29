import axios from "axios";
export default {
  namespace: "scroll",
  state: {
    zuolist: [],
    youlist: [],
    youcar: [],
    totalprice: 0,
    totalcount: 0
  },
  reducers: {
    upzuolist(state: any, data: any) {
      let { payload } = data;
      state.zuolist = payload;
      return {
        ...state
      };
    },
    upyoulist(state: any, data: any) {
      let { payload } = data;
      state.youlist = payload;
      return {
        ...state
      };
    },
    add(state: any, data: any) {
      state.youlist.forEach((item: any) => {
        if (item.id == data.id) {
          item.count++;
          let index = state.youcar.findIndex(
            (item1: any) => item1.id == item.id
          );
          if (index == -1) {
            state.youcar.push(item);
          }
        }
      });
      let newPrice = 0;
      let newCount = 0;
      state.youcar.reduce((prev: any, next: any) => {
        newPrice += next.count * next.qian;
        newCount += next.count;
        return next;
      }, 0);
      state.totalprice = newPrice;
      state.totalcount = newCount;
      return {
        ...state
      };
    },

    sub(state: any, data: any) {
      state.youlist.forEach((item: any) => {
        if (item.id == data.id) {
          item.count--;
          let index = state.youcar.findIndex(
            (item1: any) => item1.id == item.id
          );
          if (index == -1) {
            state.youcar.push(item);
          }
        }
      });
      let newPrice = 0;
      let newCount = 0;
      state.youcar.reduce((prev: any, next: any) => {
        newPrice += next.count * next.qian;
        newCount += next.count;
        return next;
      }, 0);
      state.totalprice = newPrice;
      state.totalcount = newCount;
      return {
        ...state
      };
    }
  },
  effects: {
    *getzuolist(action: any, effect: any) {
      const zuo = yield effect.call(() => {
        return axios.get("/getzuo");
      });
      yield effect.put({ type: "upzuolist", payload: zuo.data.result });
    },
    *getyoulist(action: any, effect: any) {
      const you = yield effect.call(() => {
        return axios.get("/getyou");
      });
      yield effect.put({ type: "upyoulist", payload: you.data.result });
    }
  }
};
