import React, { useState } from "react";
import Button from "../Button/Button";
import style from "../../Styles/Form/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getForecastData,
  updateForecast,
  updateQData,
} from "../../Store/Reducers";
import axios from "axios";

function Form() {
  const [unit, setUnit] = useState("metric");
  let dispatch = useDispatch();
  let store = useSelector((store) => store.reducers);
  // let store = useSelector((store) => store.reducers);
  const [userInput, setUserInput] = useState({
    country: 'Pakistan',
    city: 'Faisalabad'
  });
  let inputH = (e) => {
    let inputs = { [e.target.name]: e.target.value };
    setUserInput({
      ...userInput,
      ...inputs,
    });
  };
  let Submit = async () => {
    dispatch(updateQData(userInput));
    if (store.tempInC) {
      dispatch(getForecastData({userInput:userInput ,unit:'metric'}));
    } else {
      dispatch(getForecastData({userInput:userInput ,unit: 'imperial'}));
    }
  };
  return (
    <div className={style.P1}>
      <div className={style.P2}>
        <input
          onChange={inputH}
          value={userInput.country}
          placeholder="Country Name"
          type="text"
          name="country"
        />
        <input
          onChange={inputH}
          value={userInput.city}
          placeholder="City Name"
          type="text"
          name="city"
        />
        <Button
          bgC="linear-gradient(108.5deg, #3A5E72 4.95%, #5C93B1 132.43%)"
          value="Search"
          color="white"
          Func={Submit}
        />
      </div>
    </div>
  );
}

export default Form;
