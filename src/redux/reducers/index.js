// this to group our reducers and stuff, it will compose our reducers together
import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses: courses // again can use short hand syntax
});

export default rootReducer;