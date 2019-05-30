import React from "react";
import { hydrate, render } from "react-dom";
import Home from "../pages/containers/home";
// import Playlist from './src/playlist/components/playlist';
//import data from "../api.json";
//import normalized from "../schemas";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";

//console.log(normalized);
// const initialState = {
//   loading: false,
//   data: {
//     //...data
//     entities: normalized.entities,
//     categories: normalized.result.categories,
//     searchVideos: [] //Esto lo metio dentro de data para tener un unico reducer para data
//   },
//   modal: {
//     visibility: false,
//     mediaId: -1
//   }
// };
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, {}, enhancer);

const homeContainer = document.getElementById("home-container");

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
hydrate(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
