import {combineReducers, createStore} from 'redux';
import reducer from './reducer'
import posts from './posts'

const rootReducer = combineReducers({
    reducer,
    posts
})

export default createStore(rootReducer)