import React  from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'

const SideBar=()=>{
    return (
        <div className="sideBar">
            <h1 >sideBar</h1>
            <ul>
                <li><Link to='/'>Discover</Link></li>
                <li><Link to='/toplist'>Toplist</Link></li>
                <li><Link to='/playlist'>Playlist</Link></li>
                <li><Link to='/singer'>Singer</Link></li>
            </ul>
        </div>
    )
}
export default SideBar;