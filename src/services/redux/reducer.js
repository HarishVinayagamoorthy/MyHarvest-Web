import { combineReducers } from "redux";
import { dynamic_request_reducer } from "./slices";

export const root_reducer = combineReducers({
  dynamic_request: dynamic_request_reducer,
});
