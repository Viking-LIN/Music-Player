
export const setIsPlayingAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"SET_ISPLAYING",
            data
        })
    }
}