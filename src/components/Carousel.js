import './carousel.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Carousel = ({photos}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false

    };

    const slides = photos.map((photo, index) => 
        <div className="slide" key={index}>
            <img src={require(`../${photo.src}`)} alt="" />
        </div>
    )

    return (
        <div className="carousel-container">
            <Slider {...settings}>

                {slides}

            </Slider>
        </div>
    )
};

export default Carousel;