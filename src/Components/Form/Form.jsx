import React, { useState } from "react";
import Button from "../Button/Button";
import style from "../../Styles/Form/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateForecast, updateQData } from "../../Store/Reducers";
import axios from "axios";

function Form() {
  const [unit, setUnit] = useState("metric");
  let dispatch = useDispatch();
  let store = useSelector((store) => store.reducers);
  const [userInput, setUserInput] = useState("");
  let inputH = (e) => {
    setUserInput(e.target.value);
  };
  let Submit = async () => {
    if (store.tempInC == false) {
      let data = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=imperial&appid=73e6239d34fb2189a11ecddcd2f211e5`
      );
      console.log(data);
      dispatch(updateForecast(data.data));
    } else {
      let data = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&appid=73e6239d34fb2189a11ecddcd2f211e5`
        );
        console.log(data);
        dispatch(updateForecast(data.data));
    }
    dispatch(updateQData(userInput));
  };
  return (
    <div className={style.P1}>
      <div className={style.P2}>
        <input
          onChange={inputH}
          value={userInput}
          placeholder="Country Name"
          type="text"
          name="country"
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
