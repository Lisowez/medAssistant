import { useNavigate } from "react-router-dom";
import img from "../../img/start_img.jpg";
import style from "./StartPage.module.css";
const StartPage = () => {
  const navigate = useNavigate();
  function goNext() {
    navigate("/register");
  }

  return (
    <div className={style.container}>
      <img
        style={{ width: "100%" }}
        src={img}
        alt='start_img'
        className='start_img'
      />
      <button onClick={goNext} className={style.btn}>
        НАЧАТЬ
      </button>
    </div>
  );
};

export default StartPage;
