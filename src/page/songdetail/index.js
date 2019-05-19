import React,{Component} from 'react'
import {getSongUrlData,getSongData} from '../../api'
import {setIsPlayingAction} from '../../redux/action/isplaying'
import { connect } from 'react-redux';

class SongDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            songdetail:{},
            url:''
        }
    }
    componentDidMount(){
        var id =this.props.location.search.split('=')[1];
 
        getSongUrlData(id).then((res1)=>{
            try{
                if(res1.data.code === 200) { 
                    this.setState({url:res1.data.data[0].url})
                }
              }catch(err){
                console.log('错误为:'+err)
              }
        }).then(getSongData(id).then((res2)=>{
            try{
                if(res2.data.code === 200) {
                    this.setState({songdetail:res2.data.songs[0]})
                    console.log(this.state)
                    this.props.setIsPlayingFunc({detail:this.state.songdetail,url:this.state.url})
                }
              }catch(err){
                console.log('错误为:'+err)
              }
        }))}
           
    render(){
        return (
            this.state.songdetail&&this.state.url?
            <div>
                <h2>{this.state.songdetail.name}</h2>
                <audio src={this.state.url} controls="controls"></audio>
            </div>
            :<h2>loading...</h2>
        )
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        setIsPlayingFunc:
        (data)=>{
            dispatch(setIsPlayingAction(data))
        },
    }
}
export default connect(null,mapDispatchToProps)(SongDetail)