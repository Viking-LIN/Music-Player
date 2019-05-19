import {createStore,applyMiddleware} from 'redux'
import reducers from '../reducer/reducers'
import thunk from 'redux-thunk'
//创建store
const store = createStore(reducers, applyMiddleware(thunk));

export default store
