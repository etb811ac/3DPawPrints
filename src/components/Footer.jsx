import './footer.scss';
import logo from '../assets/navigation/logo.png'

//social 61314828
import whatsapLogo from '../assets/global/whatsapp-logo.png';
import tiktokLogo from '../assets/global/tiktok-logo.png';
import instaLogo from '../assets/global/insta-logo.png'


const Footer = () => {

    

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="rights">&copy; 3D Paw Prints {year} | Derechos Reservados</div>
            <div className="social">
                <a href="http://wa.me/50661314828" target='_blank' rel="noreferrer"><img src={whatsapLogo} alt="" /></a>
                <a href="https://www.instagram.com/3dpawprintscr" target='_blank' rel="noreferrer"><img src={instaLogo} alt="" /></a>
                <a href="https://www.tiktok.com/@3dpawprints?_t=8cySvHk0c1m&_r=1" target='_blank' rel="noreferrer"><img src={tiktokLogo} alt="" /></a>
            </div>
        </div>

    )
};

export default Footer;