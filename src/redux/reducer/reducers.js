import  {combineReducers} from 'redux'
import {commendTagsContentReducer} from './playlist'
import {hotSingerDataReducer} from './singer'
import {songListDataReducer} from './songlist'
import {isPlayingReducer} from './isplaying'

const reducers = combineReducers({
    commendTagsContentReducer,
    hotSingerDataReducer,
    songListDataReducer,
    isPlayingReducer})
 export default reducers