import React  from 'react'
import './main.css'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Discover from '../../page/discover'
import TopList from '../../page/toplist'
import PlayList from '../../page/playlist'
import Singer from '../../page/singer'
import SongList from '../../page/songlist'
import SongDetail from '../../page/songdetail'
const Main=()=>{
    return (
        <div className="Main">
            <h1 >Main</h1>
            <Switch>
                <Route exact path='/' component={Discover} />
                <Route path='/toplist' component={TopList}/>
                <Route path='/playlist' component={PlayList}/>
                <Route path='/singer' component={Singer}/>
                <Route path='/songlist' component={SongList}/>
                <Route path='/songdetail' component={SongDetail}/>
            </Switch>
        </div>
    )
}
export default Main;