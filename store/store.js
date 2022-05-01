import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]
// const enhancer = composeEnhancers(
// 	// other store enhancers if any
// );


const store = (initialState) => {
	return createStore(rootReducer, initialState, applyMiddleware(...middleware));
};
export default store;
