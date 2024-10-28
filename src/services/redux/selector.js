import { useSelector as _useSelector } from "react-redux";
import { _dynamic_request_selector } from "./slices";

export function useDynamicSelector(key) {
  const _data = _useSelector((state) => _dynamic_request_selector(state, key));
  return _data || {};
}
