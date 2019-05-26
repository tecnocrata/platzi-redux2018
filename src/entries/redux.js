import { createStore } from "redux";
const $form = document.getElementById("form");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData($form);
  const title = data.get("title");
  console.log(title);
}

const reducer = state => {
  return state;
};
const initialState = [
  {
    title: "Despacito"
  },
  {
    title: "Fast"
  },
  {
    title: "One more time"
  }
];
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, initialState, enhancer);
