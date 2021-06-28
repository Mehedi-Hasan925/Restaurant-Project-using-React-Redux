import {createStore} from 'redux'
import {reducer} from './reducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';

const myStore=createStore(reducer,applyMiddleware(thunk));

export default myStore;