import axios from "axios";
export default {
  namespace: "shop",
  state: {
    shoplist: [],
    shopcar: [],
    totalprice: 0,
    totalcount: 0
  },
  reducers: {
    newpriceandcount(state: any, data: any) {
      let newPrice = 0;
      let newCount = 0;
      state.shopcar.reduce((prev: any, next: any) => {
        newPrice += prev.count * prev.price;
        newCount += prev.count;
        return prev;
      }, 0);
      state.totalprice = newPrice;
      state.totalcount = newCount;
      return {
        ...state
      };
    },
    upshoplist(state: any, data: any) {
      state.shoplist = data.payload;
      return {
        ...state
      };
    },
    add(state: any, data: any) {
      state.shoplist.forEach((item: any) => {
        if (item.id == data.id) {
          item.count++;
          const index = state.shopcar.findIndex(
            (item1: any) => item1.id == item.id
          );
          if (index == -1) {
            state.shopcar.push(item);
          }
        }
      });
      let newPrice = 0;
      let newCount = 0;
      state.shopcar.reduce((prev: any, next: any) => {
        newPrice += next.count * next.price;
        newCount += next.count * 1;
        return next.count * next.price;
      }, 0);
      state.totalprice = newPrice;
      state.totalcount = newCount;
      return {
        ...state
      };
    },
    sub(state: any, data: any) {
      state.shoplist.forEach((item: any) => {
        if (item.id == data.id) {
          item.count--;
          const index = state.shopcar.findIndex(
            (item1: any) => item1.id == item.id
          );
          if (index == -1) {
            state.shopcar.push(item);
          }
        }
      });
      let newPrice = 0;
      let newCount = 0;
      state.shopcar.reduce((prev: any, next: any) => {
        newPrice += next.count * next.price;
        newCount += next.count * 1;

        return next.count * next.price;
      }, 0);
      state.totalprice = newPrice;
      state.totalcount = newCount;
      return {
        ...state
      };
    }
  },

  effects: {
    *getshoplist(action: any, effect: any) {
      const shoplist = yield effect.call(() => {
        return axios.get("/shoplist");
      });
      yield effect.put({ type: "upshoplist", payload: shoplist.data.result });
    }
  }
};
