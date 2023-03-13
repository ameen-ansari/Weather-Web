import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.rotator}>
      <div className={style.rotatorCircle}></div>
      <div className={style.rotatorCircle}></div>
      <div className={style.rotatorCircle}></div>
    </div>
  );
};

export default Loader;
