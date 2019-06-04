import { fromJS } from "immutable";
import { LOADING_REQUEST } from "../action-types";

const initialState = fromJS({
  loading: false
});

const loadingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_REQUEST:
      return state.set("loading", payload.loading);
    //   case LOADING:
    //     return state.set("visibility", false);
    default:
      return state;
  }
};

export default loadingReducer;
