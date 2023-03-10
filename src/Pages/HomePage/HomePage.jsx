import React from "react";
import style from "../../Styles/HomePage/HomePage.module.css";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/Navbar/Navbar";
import SimpleSlider from "../../Components/Slider/Slider";
import Switch from "../../Components/Switch/Switch";
import { useSelector } from "react-redux";

function HomePage() {
  let store = useSelector((store) => store.reducers.forecast);

  return (
    <div className={style.P}>
      <Navbar />
      <p>
        Seeing the weather of the whole world with
        <span> Dark Weather!</span>
      </p>
      <Switch />
      <Form />
      <SimpleSlider data={store} />
    </div>
  );
}

export default HomePage;
