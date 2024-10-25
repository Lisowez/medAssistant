import { useNavigate } from "react-router-dom";
import style from "./MainPage.module.css";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <button
        onClick={() => {
          navigate("../bot");
        }}
        className={style.btn}
        style={{ backgroundColor: "green" }}
      >
        С ЧЕГО НАЧАТЬ ИССЛЕДОВАНИЕ
      </button>
      <button
        onClick={() => {
          navigate("../research");
        }}
        className={style.btn}
        style={{ backgroundColor: "blue" }}
      >
        ЗАПИСАТЬСЯ НА ИССЛЕДОВАНИЕ
      </button>
      <button
        onClick={() => {
          navigate("../doctor");
        }}
        className={style.btn}
        style={{ backgroundColor: "blue" }}
      >
        ЗАПИСАТЬСЯ К ВРАЧУ
      </button>
      <button
        onClick={() => {
          navigate("../plan");
        }}
        className={style.btn}
        style={{ backgroundColor: "green" }}
      >
        МОЙ ПЛАН И НАЗНАЧЕНИЯ
      </button>
      <button
        onClick={() => {
          navigate("../sos");
        }}
        className={style.btn}
        style={{ backgroundColor: "red", height: "60px" }}
      >
        У МЕНЯ ЭКСТРЕННАЯ <br />
        СИТУАЦИЯ !
      </button>
    </div>
  );
};

export default MainPage;
