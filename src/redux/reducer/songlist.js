export const songListDataReducer = (state={},action)=>{
    switch(action.type){
        case "SONGLIST_DATA":
            return {
                ...state,
                data:action.data
            }
        break;
        default :
            return state    
        
    }
}