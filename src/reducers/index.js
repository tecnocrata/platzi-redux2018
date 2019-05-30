import DataReducer from "./dataReducer";
import ModalReducer from "./modalReducer";

import { combineReducers } from "redux";

//Aunque estamos combinando reducers, TAMBIEN estamos creando espacios separados de datos dentro del State
//Por eso el espacio de nombres seran data y modal
const rootReducer = combineReducers({ data: DataReducer, modal: ModalReducer });

export default rootReducer;
