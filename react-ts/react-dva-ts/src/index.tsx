import dva from "dva";
import RoterView from "./router/index";
// import {createModle} from ''//这个是仓库 暂且先不用管它
const cbh = require("history").createBrowserHistory;
const app = dva({
  history: cbh()
});
// createModle(app);//使用仓库
app.router(RoterView);
app.start("#root");
