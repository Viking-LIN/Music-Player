import React ,{Component} from 'react'
import './footer.css'
import FooterPlayer from '../../components/footerplayer'

class Footer extends Component{
  
    render(){
        return(
            <div className="Footer">
                <FooterPlayer />
            </div>
            
        )
    }
}
export default Footer;