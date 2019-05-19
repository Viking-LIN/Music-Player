import axios from 'axios';
const baseURL = "http://localhost:3000";

//获取轮播图API
export const getIndexBanner = ()=>{
    const url = `${baseURL}/banner`;
    return axios.get( url,{ withCredentials: true } )
}
//获取热门推荐标签中的内容
export const getHotCommendTagsContent = (arr,limit,offset,string)=>{
    if(!arr) {
        return axios.get(`${baseURL}/top/playlist?order=${string}&limit=10`,{ withCredentials: true });
    }
    let str = "";

    arr.forEach( (item,index)=>{
        str += `${item}&`
    } )
    str = str.slice(0,str.length-1);
    
    const url = `${baseURL}/top/playlist?${str}&limit=${limit}&offset=${offset}`;
    return axios.get(url,{ withCredentials: true });
}
//获取热门歌手
export const getHotSingerData = ()=>{
    const url = `${baseURL}/top/artists?limit=20`;
    return axios.get(url,{ withCredentials: true });
}
//请求歌单数据
export const getPlaylistData = (id)=>{
    const url = `${baseURL}/playlist/detail?id=${id}`;
    return axios.get(url,{ withCredentials: true });
}
//歌曲的播放数据
export const getSongUrlData = (id)=>{
    const url = `${baseURL}/song/url?id=${id}`;
    return axios.get(url,{ withCredentials: true })
}
//获取单曲详细数据
export const getSongData = (id)=>{
    const url =`${baseURL}/song/detail?ids=${id}`;
    return axios.get(url,{ withCredentials: true });
}