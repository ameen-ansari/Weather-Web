import React, { Component } from "react";
import Slider from "react-slick";
import style from "../../Styles/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../Images/IMG (2).png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 800, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    let arr = [img , img , img , img , img];
    return (
      <div className={style.parent}>
        <Slider {...settings}>
          {arr.map((image, i) => {
            return (
              <div key={i} className={style.card}>
                <img className={style.img} alt="img" src={image} />
                <p><span>Pakistan</span>123C</p>
                <p><span>Temp</span> 122C</p>
                <p><span>Sunny</span></p>
                <div>
                  {/* <img src={tc} alt="" /> */}
                  {/* <img src={tc2} alt="" /> */}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
