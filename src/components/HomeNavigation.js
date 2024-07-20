import { useState } from 'react';
import './homeNavigation.scss'
import { Link } from "react-router-dom";

import whoWeAre from '../assets/global/who-we-are.jpg'
import pla from '../assets/global/pla.jpg'


const HomeNavigation = () => {
    const [showAlert, setShowAlert] = useState(false)
    const [showWhoWeAre, setShowWhoWeAre] = useState (false)
    const [showPLA, setShowPLA] = useState(false)
    return(
        <div className="home-nav-container">
            
            <Link className="link link-plaquitas" to="/plaquitas"> Plaquitas </Link>
            <Link className="link link-macetitas" to="/macetitas"> Macetitas </Link>
            <Link className="link link-modelos" to="/figuritas"> Figuritas </Link>
            <Link className="link link-flips" to="/flips"> Flips </Link>
            <Link className="link link-who-we-are" onClick={() => {setShowAlert(true); setShowWhoWeAre(true)}}> ¿Quiénes somos? </Link>
            <Link className="link link-pla" onClick={() => {setShowAlert(true); setShowPLA(true)}}> ¿Qué es PLA? </Link>
        
        
            <div className={showAlert ? ("pop-up alert-popup show") : ("pop-up alert-popup")}>
                <div className="popup-container alert-container">
                    <img className={showWhoWeAre ? ('show') : ('')} src={whoWeAre} alt=''></img> 

                    <img className={showPLA ? ('show') : ('')} src={pla} alt=''></img>

                    <button onClick={() => {setShowAlert(false); setShowPLA(false); setShowWhoWeAre(false)} }>Cerrar</button>
                </div>
            </div>

        
        </div>

        
    )
  };
  
  export default HomeNavigation;