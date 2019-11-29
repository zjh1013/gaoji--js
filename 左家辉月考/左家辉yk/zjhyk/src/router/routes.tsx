import Home from "../containers/home/index";
import Detail from "../containers/detail/detail";
import Dingdan from "../containers/dingdan/dingdan";
import Dizhi from "../containers/dizhi/dizhi";

export default [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/dingdan",
    name: "dingdan",
    component: Dingdan
  },
  {
    path: "/dizhi",
    name: "dizhi",
    component: Dizhi
  }
];
