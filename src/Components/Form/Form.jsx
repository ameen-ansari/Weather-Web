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
