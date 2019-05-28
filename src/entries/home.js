import React from "react";
import { hydrate, render } from "react-dom";
import Home from "../pages/containers/home";
// import Playlist from './src/playlist/components/playlist';
import data from "../api.json";

import { createStore } from "redux";
import { Provider } from "react-redux";
import mainReducer from "../reducers/mainReducer";

// const reducer = state => {
//   return state;
// };

const initialState = {
  loading: false,
  data: { ...data },
  searchVideos: []
};
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(mainReducer, initialState, enhancer);

const homeContainer = document.getElementById("home-container");

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
hydrate(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
