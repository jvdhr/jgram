import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import eventReducer from "../_reducers/eventReducer";
import eventFilterReducer from "../_reducers/eventFilterReducer";
import userReducer from "../_reducers/userReducer";
import authReducer from "../_reducers/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      events: eventReducer,
      users: userReducer,
      eventFilters: eventFilterReducer,
      authRedux: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
