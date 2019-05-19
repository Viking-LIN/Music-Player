import React,{Component} from 'react'
import './singer.scss'

class SingerItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            singer:{}
        }
    } 
    componentDidMount(){
        this.updateSize();
    }
    updateSize=()=>{
        var containers = document.getElementsByClassName('singeritem')
        for(let container of containers){
            var w = container.offsetWidth;
            container.style.height = w+'px';
        }

    }
    render(){
        return(
            this.props.singer?
            (<div className="singeritem" >

                <div className="imgContainer">
                    <img height="200px" width="200px" src={this.props.singer.picUrl}></img>
                </div>
                <div className="title">{this.props.singer.name}</div>
            </div>
            ):
            null
            )
    }
}
export default SingerItem 