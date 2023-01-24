import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

//Store recibe como parametros (reducer, middleware(para hacer acciones asincronas))
  
  export default store;