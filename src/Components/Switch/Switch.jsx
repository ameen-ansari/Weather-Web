import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Switch.module.css";
import { getForecastData, tempInCChecker } from "../../Store/Reducers";

function Switch() {
  let searchQ = useSelector((store) => store.reducers.searchQ);
  let dispatch = useDispatch();
  const handleChange = async (e) => {
    if (e.target.checked) {
      dispatch(tempInCChecker(false));
      dispatch(getForecastData({ userInput: searchQ, unit: "imperial" }));
    } else {
      dispatch(tempInCChecker(true));
      dispatch(getForecastData({ userInput: searchQ, unit: "metric" }));
    }
  };

  return (
    <div className={style.P}>
      <span>°C</span>
      <label className={style.switch}>
        <input type="checkbox" onChange={handleChange} />
        <span className={`${style.slider} ${style.round}`}></span>
      </label>
      <span>°F</span>
    </div>
  );
}

export default Switch;
