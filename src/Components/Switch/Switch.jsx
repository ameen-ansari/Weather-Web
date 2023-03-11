import style from "./Switch.module.css";
import useSwitch from "../../Hooks/useSwitch";

function Switch() {
  const { handleChange } = useSwitch();

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
