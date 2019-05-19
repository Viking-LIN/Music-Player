import React,{Component}  from 'react'
import {getHotCommendTagsContent} from '../../api'
import SongSheet from '../../components/songsheet'
import './discover.css'

class Discover extends Component{
    constructor(props){
        super(props)
        this.state={
            playlists:[]
        }
    }
    componentDidMount(){
        getHotCommendTagsContent().then( (res)=>{
            console.log(res)
                if(res.data.code ===200){
                   this.setState({
                    playlists:res.data.playlists
                   })
                } 
            }
        )
    }

    render(){
        return (
            <div className="Discover">
                <ul className="listContainer">
                    {this.state.playlists.map((playlist)=><SongSheet key={playlist.id} playlist={playlist}/>)}
                </ul>
                
            </div>
        )
    }
  
}
export default Discover;