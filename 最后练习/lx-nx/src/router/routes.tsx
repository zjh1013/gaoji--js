import Home from "../containers/home/index";
import List from "../containers/home/list";
import Detail from "../containers/detail/detail";
import Shopcar from "../containers/shop/shopcar";
import Shoplists from "../containers/shop/shoplists";
import Yamaxun from "../containers/yamaxun/yamaxun";
import Quanbu from "../containers/quanbu/quanbu";

export default [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/list",
    name: "list",
    component: List
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/shopcar",
    name: "shopcar",
    component: Shopcar
  },
  {
    path: "/shoplists",
    name: "shoplists",
    component: Shoplists
  },
  {
    path: "/yamaxun",
    name: "yamaxun",
    component: Yamaxun
  },
  {
    path: "/quanbu",
    name: "quanbu",
    component: Quanbu
  }
];
