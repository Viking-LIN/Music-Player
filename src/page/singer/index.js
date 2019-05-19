import React,{Component}  from 'react'
import { connect } from 'react-redux';
import { getHotSingerData } from '../../api'
import { hotSingerDataAction } from '../../redux/action/singer';
import SingerItem from '../../components/singeritem'
import './singer.css'
class Singer extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
 
        //获取热门歌手数据
        getHotSingerData().then( (res)=>{
          try{
            if(res.data.code === 200) {
              this.props.hotSingerDataFunc(res.data)
            }
            this.setState({
                list:Array.from(this.props.hotSingerData.artists)
            })
          }catch(err){
            console.log("错误为:"+err)
          } 
           } )

      }

    render (){
        return(
            <div className="Singer" >
            <h1 >Singer</h1>
            <ul className="SingerContain">
            {this.state.list.map((singer)=><SingerItem singer={singer} key={singer.id}/>)}
            </ul>
              
        </div>
        )
    }
        
}


const mapStateToProps = (state,ownProps)=>{
    return {
        hotSingerData:state.hotSingerDataReducer.data||{},    
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        hotSingerDataFunc:
        (data)=>{
            dispatch(hotSingerDataAction(data))
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Singer)