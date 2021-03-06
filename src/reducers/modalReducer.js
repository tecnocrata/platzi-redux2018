import { fromJS } from "immutable";
import { OPEN_MODAL, CLOSE_MODAL } from "../action-types";

const initialState = fromJS({
  visibility: false,
  mediaId: -1
});
const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //case "OPEN_MODAL":
    case OPEN_MODAL:
      return state.set("mediaId", payload.mediaId).set("visibility", true);
    //return state.merge({ mediaId: payload.mediaId, visibility: true });
    //case "CLOSE_MODAL":
    case CLOSE_MODAL:
      return state.set("visibility", false);
    default:
      return state;
  }
};

export default modalReducer;
