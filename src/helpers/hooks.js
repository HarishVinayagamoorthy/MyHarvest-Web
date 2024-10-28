import { useDispatch } from "react-redux";
import { dynamic_request } from "@src/services/redux";

const useAPIRequest = (key, query) => {
  const dispatch = useDispatch();

  const handle_api_request = (variables, loading = false) => {
    let _key = [{ key, loading }];
    dispatch(dynamic_request(_key, query, variables));
  };
  return handle_api_request;
};

export { useAPIRequest as useAPIRequest };
