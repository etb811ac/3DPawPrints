import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './homeSlider.scss'

import Slider from "react-slick";

//assets
import image1 from '../assets/home-slider/1.png'
import image2 from '../assets/home-slider/2.png'
import image3 from '../assets/home-slider/3.png'
import image4 from '../assets/home-slider/4.png'
import image5 from '../assets/home-slider/5.png'

const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true

    };
    return (
        <Slider {...settings}>
            <div className="slide">
                <div className="slide-container">
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="slide">
                <div className="slide-container">
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className="slide">
                <div className="slide-container">
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className="slide">
                <div className="slide-container">
                    <img src={image4} alt="" />
                </div>
            </div>
            <div className="slide">
                <div className="slide-container">
                    <img src={image5} alt="" />
                </div>
            </div>
           

        </Slider>
    );
};

export default HomeSlider;