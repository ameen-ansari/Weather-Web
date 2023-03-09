import React from "react";
import style from "../../Styles/HomePage/HomePage.module.css";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/Navbar/Navbar";
import SimpleSlider from "../../Components/Slider/Slider";

function HomePage() {
  return (
    <div className={style.P}>
      <Navbar />
      <p>
        Seeing the weather of the whole world with
        <span> Dark Weather!</span>
      </p>
      <Form />
      <SimpleSlider />
    </div>
  );
}

export default HomePage;
