import React,{Component} from 'react'
import {connect} from 'react-redux'


class FooterPlayer extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'我的音乐播放器',
            url:''
        }
    }
 
    render(){
        return(
            this.props.getIsplaying.url?
            <div>
                <div className="footplay-title">{this.props.getIsplaying.detail.name}</div>
                <audio src={this.props.getIsplaying.url} controls="controls"></audio>
            </div>
            :<div>
            <div className="footplay-title">{this.state.name}</div>
            <audio src={this.state.url} controls="controls"></audio>
        </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        getIsplaying:state.isPlayingReducer.data||{}
    }
}
export default connect(mapStateToProps)(FooterPlayer)