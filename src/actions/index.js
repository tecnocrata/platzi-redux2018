import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_VIDEO,
  LOADING_REQUEST
} from "../action-types";
export function openModal(id) {
  //return { type: "OPEN_MODAL", payload: { mediaId: id } };
  return { type: OPEN_MODAL, payload: { mediaId: id } };
}

export function closeModal() {
  //return { type: "CLOSE_MODAL" };
  return { type: CLOSE_MODAL };
}

export function searchVideo(searchText) {
  // return {
  //   type: "SEARCH_VIDEO",
  //   payload: {
  //     query: searchText
  //   }
  // };
  return {
    type: SEARCH_VIDEO,
    payload: {
      query: searchText
    }
  };
}

export function searchAsyncVideo(searchText) {
  //simulando el uso de:
  //fetch
  //axios
  return function(dispatch) {
    dispatch(LoadingRequest(true));
    setTimeout(() => {
      dispatch(searchVideo(searchText));
      dispatch(LoadingRequest(false));
    }, 5000);
  };
}

export function LoadingRequest(flag) {
  return {
    type: LOADING_REQUEST,
    payload: {
      loading: flag
    }
  };
}

export function addSong(title) {
  return {
    type: "ADD_SONG",
    payload: { title }
  };
}

//export default { openModal, closeModal, searchVideo };
