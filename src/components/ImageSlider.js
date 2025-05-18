import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ( {imageInfo}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
    }

    const images = imageInfo[0].images;
    const titles = imageInfo[0].imageTitles;

  return (
    <div className="imageSlider">
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="imageSliderWrapper">
                    <p>{titles[index]}</p>
                    <img src={image} alt={`Slide ${index}`}/>
                </div>
            ))}

        </Slider>
    </div>
  )
}

export default ImageSlider