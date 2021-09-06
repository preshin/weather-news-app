import { combineReducers } from "redux";
import newsListReducer from "./newsListReducer";

const appReducer = combineReducers({
  newsData: newsListReducer,
});

export default appReducer;
