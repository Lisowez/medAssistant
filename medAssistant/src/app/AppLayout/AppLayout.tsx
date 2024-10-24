import { Outlet } from "react-router-dom";
import style from "./AppLayout.module.css";
import img from "../../img/user.png";

export const AppLayout = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.user}>
          <img className={style.img} src={img} alt='user' />
        </div>
      </header>

      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
};
