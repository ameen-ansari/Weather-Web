import React, { Component } from "react";
import Slider from "react-slick";
import style from "../../Styles/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../Images/IMG (2).png";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={style.parent}>
        <Slider {...settings}>
          {this.props.data.list?.map((forecast, i) => {
            return (
              <div key={i} className={style.card}>
                <p>{forecast.dt_txt}</p>
                <img className={style.img} alt="img" src={img} />
                <p>
                  <span>{this.props.data.city.name}, {this.props.data.city.country}</span>
                </p>
                <p>
                  <span>Temp</span> {forecast.main.temp_max}
                </p>
                <p>
                  <span>{forecast.weather[0].description}</span>
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
