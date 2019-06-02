import { OPEN_MODAL, CLOSE_MODAL, SEARCH_VIDEO } from "../action-types";
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

export function searchAsynVideo(searchText) {
  //simulando el uso de:
  //fetch
  //axios
  return function(dispatch) {
    setTimeout(() => {
      dispatch(searchVideo(searchText));
    }, 5000);
  };
}

export function addSong(title) {
  return {
    type: "ADD_SONG",
    payload: { title }
  };
}

//export default { openModal, closeModal, searchVideo };
