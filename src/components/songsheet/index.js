import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import './songsheet.scss'

class SongSheet extends Component{
    constructor(props){
        super(props)
    }
    dumpArtists=(id)=>{
        console.log("aaa")
        this.props.history.push(`/songlist?res=songsheet&id=${id}`)
    }
    componentDidMount(){
     this.updateSize();
     window.addEventListener('resize', () => this.updateSize());
    }
    componentWillUnmount() {
        window.removeEventListener('resize', () => this.updateSize());
      }
    updateSize=()=>{
        console.log("resize")
        var containers = document.getElementsByClassName('Songsheet')
        for(let container of containers){
            var w = container.offsetWidth;
            container.style.height = w+'px';
        }

    }
    render(){
        return(
            this.props.playlist?
            <div className="Songsheet" onClick={()=>this.dumpArtists(this.props.playlist.id)}>
                <div className="imgContainer" >
                        <img src={this.props.playlist.coverImgUrl}></img>
                    </div>
                <div className="title">{this.props.playlist.name}</div>
            </div>
              
            :null
            )
    }
}
export default withRouter(SongSheet) 