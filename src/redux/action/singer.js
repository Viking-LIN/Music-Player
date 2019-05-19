export const hotSingerDataAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"HOT_SINGER_DATA",
            data
        })
    }
}

export const singerSongsDataAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"SINGER_SONGS_DATA",
            data,
        })
    }
}
export const singerAlbumsDataAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"SINGER_ALBUMS_DATA",
            data
        })
    }
}