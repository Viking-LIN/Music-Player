import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'

class SongItem extends Component{
    constructor(props){
        super(props)
    }
    dumpArtists=(id)=>{
        this.props.history.replace(`/songdetail?id=${id}`)
    }
    
    render(){
        return(
            this.props.song?
            <div  onClick={()=>this.dumpArtists(this.props.song.id)}>
                <div  >
                        <h3 >{this.props.song.name}</h3>
                    </div>
            </div>
            :null
            )
    }
}
export default withRouter(SongItem) 