import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Switch.module.css";
import { checker, updateForecast } from "../../Store/Reducers";
import axios from "axios";

function Switch() {
  let store = useSelector((store)=>store.reducers.searchQ)
  let dispatch = useDispatch();
  const handleChange = async (event) => {
    if (event.target.checked) {
      dispatch(checker(true));
      let data = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${store}&units=metric&appid=73e6239d34fb2189a11ecddcd2f211e5`
      );
      dispatch(updateForecast(data.data));
    } else {
      dispatch(checker(false));
      let data = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${store}&units=imperial&appid=73e6239d34fb2189a11ecddcd2f211e5`
      );
      dispatch(updateForecast(data.data));
    }
  };

  return (
    <div className={style.P}>
      <span>f</span>
      <label className={style.switch}>
        <input type="checkbox" onChange={handleChange} />
        <span className={`${style.slider} ${style.round}`}></span>
      </label>
      <span>c</span>
    </div>
  );
}

export default Switch;
