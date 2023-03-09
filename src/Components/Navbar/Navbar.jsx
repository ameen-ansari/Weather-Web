import React from "react";
import style from "../../Styles/Navbar/Navbar.module.css";
import Button from "../Button/Button";
function Navbar() {
  return (
    <div className={style.P}>
      <div>Dark Weather</div>
      <div>
        <p>Home</p>
        <p>Contact US</p>
      </div>
      <div>
        <Button
          bgC="linear-gradient(108.5deg, #3A5E72 4.95%, #5C93B1 132.43%)"
          value="Sign up"
          color='white'
        />
      </div>
    </div>
  );
}

export default Navbar;
