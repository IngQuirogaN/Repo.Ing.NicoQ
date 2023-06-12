import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'



import '../../styles/Header.css';


const Header = (props) => {
    return (
        <header>
            <div className="logo">
                <img id="logo" src="logo2.png" alt="Cortiana"></img>
            </div>
            <div className="div_header">
                <ul>
                    <li><a href="https://www.facebook.com/cortianahnossrl"><FontAwesomeIcon icon={faFacebook} style={{width: 40+"px",scale: 200+"%"}} /></a></li>
                    <li><a href="https://www.instagram.com/cortianahnossrl/"><FontAwesomeIcon icon={faInstagram}style={{width: 40+"px",scale: 200+"%"}}/></a></li>
                    <li><a href="https://wa.me/541153773877"><FontAwesomeIcon icon={faWhatsapp}style={{width: 40+"px",scale: 200+"%"}}/></a></li>

                </ul>
            </div>
        </header>
    )


}
export default Header;