import Button from "../Button/Button";
import style from "../../Styles/Form/Form.module.css";
import useForm from "../../Hooks/useForm";
import { useSelector } from "react-redux";

function Form() {
  const { inputH, Submit, userInput } = useForm();
  let store = useSelector((store) => store);
  return (
    <div className={style.P1}>
      <div className={style.P2}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label
            htmlFor=""
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "300",
              letterSpacing: "0em",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
          Enter  Country Name
          </label>
          <input
            onChange={inputH}
            value={userInput.country}
            placeholder="Country Name"
            type="text"
            name="country"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "300",
              letterSpacing: "0em",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
           Enter City Name
          </label>
          <input
            onChange={inputH}
            value={userInput.city}
            placeholder="City Name"
            type="text"
            name="city"
          />
        </div>
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
