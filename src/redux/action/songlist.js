export const songlistDataAction =(data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"SONGLIST_DATA",
            data
                })
    }
}