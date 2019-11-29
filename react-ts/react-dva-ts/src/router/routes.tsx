import Home from "../containers/home/index";
import Shoplist from "../containers/home/shoplist";
import Lx from "../containers/lx/lx";

export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: []
  },
  {
    path: "/shoplist",
    name: "shoplist",
    component: Shoplist,
    children: []
  },
  {
    path: "/lx",
    name: "lx",
    component: Lx,
    children: []
  }
];
