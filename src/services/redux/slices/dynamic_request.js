import { createSelector, createSlice } from "@reduxjs/toolkit";
import { mutate_request, query_request } from "@src/services/apollo/api_service";

const initialState = {
  data: {},
  loading: false,
};

const slice = createSlice({
  name: "dynamic_request",
  initialState,
  reducers: {
    _initiate_dynamic_request: (state, { payload: { keys } }) => {
      keys.map((item) => {
        if (item.key === "reload") {
          if (item.loading) {
            state.loading = true;
          }
        } else if (item.appending) {
          if (item.loading) {
            if (state.data[item.key]) {
              state.data[item.key].loading = item.loading;
            } else {
              state.data[item.key] = {
                loading: item.loading,
              };
            }
          }
        } else if (item.loading) {
          if (item.variant) {
            state.data[`${item.key}-${item.variant}`] = {
              loading: item.loading ? item.loading : true,
            };
          } else {
            state.data[item.key] = {
              loading: item.loading ? item.loading : true,
            };
          }
        }
      });
    },
    _dynamic_request_response: (state, { payload: { keys, data } }) => {
      Object.keys(data).forEach(function (key) {
        let _key = keys?.find((x) => x.key === key);
        let item = data[key];
        let item_json = {};

        Object.keys(item).forEach(function (item_key) {
          if (_key?.append_keys?.indexOf(item_key) > -1) {
            if (!item_json[item_key]) {
              item_json[item_key] = [];
            }
            item_json[item_key] = item_json[item_key].concat(item[item_key]);
          } else {
            item_json[item_key] = item[item_key];
          }
        });
        if (_key.variant) {
          state.data[`${_key.key}-${_key.variant}`] = {
            loading: false,
            ...item_json,
          };
        } else {
          state.data[key] = {
            loading: false,
            ...item_json,
          };
        }
      });
      state.loading = false;
    },
    _dynamic_request_failure: (state, { payload: { keys, error } }) => {
      keys.map((item) => {
        state.data[item.key] = {
          loading: false,
          status: "failure",
          error: error,
        };
      });
      state.loading = false;
    },
    _set_state: (state, { payload: { key, value } }) => {
      state.data[key] = value;
    },
    _clear_state: (state, { payload: { key } }) => {
      state.data[key] = null;
    },
    _remove_state: (state, { payload: { key } }) => {
      let data = state.data;
      data = JSON.parse(JSON.stringify(data));
      delete data[key];
      state.data = data;
    },
  },
});

const {
  _initiate_dynamic_request,
  _dynamic_request_response,
  _dynamic_request_failure,
  _set_state,
  _clear_state,
  _remove_state,
} = slice.actions;

export const dynamic_request_selector = (state) => state.dynamic_request;

export const dynamic_request_reducer = slice.reducer;

export const _get_dynamic_request = (state) => state.dynamic_request?.data;

export const _dynamic_request_selector = createSelector(
  [_get_dynamic_request, (state, key) => key],
  (data, key) => data?.[key]
);

export function dynamic_request(keys, query, variables, type) {
  return async (dispatch) => {
    dispatch(_initiate_dynamic_request({ keys }));
    try {
      let request = query_request;
      if (type === "M") {
        request = mutate_request;
      }
      const response = await request(query, variables, dispatch);
      if (response.req_error) {
        dispatch(_dynamic_request_failure({ keys, error: response.req_error.message }));
      } else if (response === "Not authorized") {
        dispatch(_dynamic_request_failure({ keys, error: response }));
      } else {
        dispatch(_dynamic_request_response({ keys, data: response?.data }));
      }
    } catch (error) {
      dispatch(_dynamic_request_failure({ keys, error }));
    }
  };
}

export function dynamic_set(key, value) {
  return async (dispatch) => {
    dispatch(_set_state({ key, value }));
  };
}

export function dynamic_clear(key) {
  return async (dispatch) => {
    dispatch(_clear_state({ key }));
  };
}

export function dynamic_remove(key) {
  return async (dispatch) => {
    dispatch(_remove_state({ key }));
  };
}
