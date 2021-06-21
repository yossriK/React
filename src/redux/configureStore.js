import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers';


// to add more enhancements, we will use middleware, aslo used redux dev tools for handy interacting wiht redux store
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; // this is a function that we need to execute
        // this immutable is nice as it will warn us if we accidentally mutuate redux state



export default function configureStore(initialState) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose; // add support for Redux dev tools. this name is ugly to avoid collisions// were we interact with redux store in the browser
    return createStore(
        rootReducer,
        initialState, 
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}