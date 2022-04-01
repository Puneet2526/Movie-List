import './nav.css'
import home from './images/home.png'
import about  from './images/about.png'
import add from './images/add.png'
import { Link } from 'react-router-dom'
const Navbar  = () => {
    return ( 
        <div className="nav">
            <div className="logo">
                <h2 style={{color:"blue"}}>SeriesCenter</h2>
            </div>

            <div className="navlinks">
               <ul type="none">
                    <li><Link to="/"><img src={home} alt="" /></Link></li>
                    <li><Link to="/about"><img src={about} alt="" /></Link></li>
                    <li><Link to="/add"><img src={add} alt="" /></Link></li>
                    <li><Link to="/favourites"><img src={add} alt="" /></Link></li>
                 </ul>

            </div>    
        </div>
     );
}
 
export default Navbar ;