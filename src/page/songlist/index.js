import React,{Component}  from 'react'
import { connect } from 'react-redux';
import {getPlaylistData} from '../../api'
import {songListDataReducer} from '../../redux/reducer/reducers'
import {songlistDataAction} from '../../redux/action/songlist'
import SongItem from '../../components/songitem'

class SongList extends Component{
    constructor(props){
        super(props)
    }
    componentWillUpdate(){
        console.log("------update------------")
    }
    componentDidMount(){

        //获取playlistURL中的数据
         var params =this.props.location.search.split('&');
         var res = params[0].split('=')[1]
         var id = params[1].split('=')[1]
        if(res==="songsheet"){
            getPlaylistData(id).then( (res)=>{
                try{
                  if(res.data.code === 200) {
                    this.props.songlistDataFunc(res.data);
                    console.log(this.props.songlistData.playlist)
                  }
                }catch(err){
                  console.log('错误为:'+err)
                }
              } )
        }
       
    }
    render(){
        return (
            this.props.songlistData&& this.props.songlistData.playlist ?
            <div >
                <h1 >{this.props.songlistData.playlist.name}</h1>
                <img src={this.props.songlistData.playlist.coverImgUrl} height="200px" width="200px"></img>
                <div>
                    {this.props.songlistData.playlist.tracks.map((song)=><SongItem key={song.id} song={song}/>)}
                </div>
            </div>
            :<div><h1>songlist</h1></div>
        )
    }
   
  
}
const mapStateToProps = (state,ownProps)=>{
    return {
        songlistData:state.songListDataReducer.data||{}

    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        songlistDataFunc:(data)=>{
            dispatch(songlistDataAction(data))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(SongList);    