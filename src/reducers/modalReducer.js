import { fromJS } from "immutable";

const initialState = fromJS({
  visibility: false,
  mediaId: -1
});
const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_MODAL":
      return state;
    case "CLOSE_MODAL":
      return state;
    default:
      return state;
  }
};

export default modalReducer;
