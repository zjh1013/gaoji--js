import axios from "axios";
import { getLeft } from "../../api/index";
export default {
  namespace: "food",
  state: {
    datazuo: [],
    datayou: [],
    youcar: [],
    totalprice: 0
  },
  reducers: {
    upzuo(state: any, data: any) {
      state.datazuo = data.payload;
      console.log(state);
      return {
        ...state
      };
    },
    upyou(state: any, data: any) {
      state.datayou = data.payload;
      return {
        ...state
      };
    },
    add(state: any, data: any) {
      state.datayou.forEach((item: any, index: number) => {
        if (item.id === data.id) {
          item.count++;
          let index = state.youcar.findIndex(
            (item1: any) => item1.id === item.id
          );
          if (index == -1) {
            state.youcar.push(item);
          }
        }
      });
      let newprice = 0;
      state.youcar.reduce((prev: any, next: any) => {
        newprice += next.qian * next.count;
        return next;
      }, 0);
      state.totalprice = newprice;
      return {
        ...state
      };
    },
    sub(state: any, data: any) {
      state.datayou.forEach((item: any, index: number) => {
        if (item.id === data.id) {
          item.count--;
          let index = state.youcar.findIndex(
            (item1: any) => item1.id === item.id
          );
          if (index == -1) {
            state.youcar.push(item);
          }
        }
      });
      let newprice = 0;
      state.youcar.reduce((prev: any, next: any) => {
        newprice += next.qian * next.count;
        return next;
      }, 0);
      state.totalprice = newprice;
      return {
        ...state
      };
    }
  },
  effects: {
    *getzuos(action: any, effect: any) {
      const zuo = yield effect.call(getLeft);
      yield effect.put({ type: "upzuo", payload: zuo.data.result });
    },
    *getyous(action: any, effect: any) {
      const you = yield effect.call(() => {
        return axios.get("/getyou");
      });
      yield effect.put({ type: "upyou", payload: you.data.result });
    }
  }
};
