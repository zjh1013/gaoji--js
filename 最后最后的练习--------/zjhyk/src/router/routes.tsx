import Home from "../containers/home/index";
import Shoplist from "../containers/shop/shoplist";
import Shopcar from "../containers/shop/shopcar";
import Better from "../containers/scroll/better";
import Bettercar from "../containers/scroll/bettercar";
export default [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/shoplist",
    name: "shoplist",
    component: Shoplist
  },
  {
    path: "/shopcar",
    name: "shopcar",
    component: Shopcar
  },
  {
    path: "/better",
    name: "better",
    component: Better
  },
  {
    path: "/bettercar",
    name: "bettercar",
    component: Bettercar
  }
];
