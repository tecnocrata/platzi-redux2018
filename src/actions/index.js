export function openModal(id) {
  return { type: "OPEN_MODAL", payload: { mediaId: id } };
}

export function closeModal() {
  return { type: "CLOSE_MODAL" };
}

export function searchVideo(searchText) {
  return {
    type: "SEARCH_VIDEO",
    payload: {
      query: searchText
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
