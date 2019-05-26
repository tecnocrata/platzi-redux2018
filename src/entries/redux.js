import { createStore } from "redux";
const $form = document.getElementById("form");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData($form);
  const title = data.get("title");
  console.log(title);
  store.dispatch({
    type: "ADD_SONG",
    payload: { title }
  });
}

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SONG":
      return [...state, { title: payload.title }];
    default:
      return state;
  }
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

const render = () => {
  const $container = document.getElementById("playlist");
  $container.innerHTML = "";
  const playlist = store.getState();
  playlist.forEach(element => {
    const template = document.createElement("p");
    template.textContent = element.title;
    $container.appendChild(template);
  });
};

render();

const handleChange = () => {
  render();
};
store.subscribe(handleChange);
