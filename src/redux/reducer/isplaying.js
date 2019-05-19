export const isPlayingReducer = (state={},action)=>{

    switch(action.type){
        case "SET_ISPLAYING":
        return {
            ...state,
            data:action.data
        }
        break;
        default :
        return state
    }

}
