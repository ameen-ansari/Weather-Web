import React, { useState } from "react";
import Button from "../Button/Button";
import style from "../../Styles/Form/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateQData } from "../../Store/Reducers";
import axios from "axios";

function Form() {
  let dispatch = useDispatch();
  let store = useSelector((store) => store.reducers.searchQ);
  const [userInput, setUserInput] = useState({
    country: "",
  });
  let inputH = (e) => {
    let inputs = { [e.target.name]: e.target.value };
    setUserInput({ ...userInput, ...inputs });
  };
  let Submit = async () => {
    dispatch(updateQData(userInput));
    let data = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${userInput.country}&appid=73e6239d34fb2189a11ecddcd2f211e5`
    );
    console.log(data);
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
