export const hotSingerDataReducer = (state={},action)=>{
    switch(action.type){
        case "HOT_SINGER_DATA":
            return {
                ...state,
                data:action.data
            }
        break;
        default :
            return state    
        
    }
}
export const singerSongsDataReducer = (state={},action)=>{
    switch(action.type){
        case "SINGER_SONGS_DATA":
            return {
                ...state,
                data:action.data
            }
            break;
            default :
                return state
    }
}

export const singerAlbumsDataReducer = (state={},action)=>{
    switch(action.type){
        case "SINGER_ALBUMS_DATA":
            return {
                ...state,
                data:action.data
            }
            break;
            default :
                return state
    }
}