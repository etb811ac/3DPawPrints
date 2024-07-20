import './home.scss';
import TopBar from '../components/TopBar';
import HomeSlider from '../components/HomeSlider';
import HomeNavigation from "../components/HomeNavigation"

const Home = ({products}) => {
    return(
        <div className="page-container home-container">
            <TopBar products={products}></TopBar>
            <HomeSlider></HomeSlider>
            <HomeNavigation></HomeNavigation>
        </div>
    )
  };
  
  export default Home;