import React, { Component } from "react";
import Slider from "react-slick";
import style from "../../Styles/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../Images/IMG (2).png";
import clearSky from "../../Images/e229d5ea3919cdb4e82862e867f010ae--license-plates-free-stock-photo.jpg";
import overcastC from "../../Images/clody.jpg";
import brokenC from "../../Images/broken.jpg";
import SClouds from "../../Images/SClouds.jpg";
import fCloudes from "../../Images/FCloudes.jpg";
import snow from "../../Images/snow.jpg";
import rain from "../../Images/rain.jpg";

export default class SimpleSlider extends Component {
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
          {this.props.data.forecast.list?.map((forecast, i) => {
            return (
              <div key={i} className={style.card}>
                <p>{forecast.dt_txt}</p>
                {forecast.weather[0].description == "clear sky" ? (
                  <img className={style.img} alt="img" src={clearSky} />
                ) : forecast.weather[0].description == "overcast clouds" ? (
                  <img className={style.img} alt="img" src={overcastC} />
                ) : forecast.weather[0].description == "broken clouds" ? (
                  <img className={style.img} alt="img" src={brokenC} />
                ) : forecast.weather[0].description == "scattered clouds" ? (
                  <img className={style.img} alt="img" src={SClouds} />
                ) : forecast.weather[0].description == "few clouds" ? (
                  <img className={style.img} alt="img" src={fCloudes} />
                ) : forecast.weather[0].description.includes("rain") ? (
                  <img className={style.img} alt="img" src={rain} />
                ) : forecast.weather[0].description.includes("snow") ? (
                  <img className={style.img} alt="img" src={snow} />
                ) : (
                  <img className={style.img} alt="img" src={img} />
                )}

                <p>
                  <span>
                    {this.props.data.searchQ.country}{" , "}
                    {this.props.data.searchQ.city}
                  </span>
                </p>
                <p>
                  <span>Temp</span> {forecast.main.temp_max}{" "}
                  {this.props.data.tempInC ? "°C" : "°F"}
                </p>
                <p>
                  <span>{forecast.weather[0].description}</span>
                </p>
              </div>
            );
          })}
        </Slider>
        {this.props.data?.forecast.message !== 0 ? (
          <h2 style={{ color: "white", textAlign: "center" }}>
            {this.props.data?.forecast.message}
          </h2>
        ) : null}
      </div>
    );
  }
}
