import React from "react";

function Button(props) {
  let style = {
    border: 0,
    borderRadius: 6,
    padding: "0.6rem 1rem",
    background: props.bgC,
    color: props.color,
    fontWeight: 700,
    fontFamily: "Poppins",
  };
  return <button onClick={props?.Func} style={style}>{props.value}</button>;
}

export default Button;
