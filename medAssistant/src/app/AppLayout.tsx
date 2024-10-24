import { Outlet } from "react-router-dom";
import img from "../img/start_img.jpg";

export const AppLayout = () => {
  return (
    <>
      {" "}
      <header style={{ display: "flex", justifyContent: "right" }}>
        <img src={img} alt='logo' style={{ width: "20px" }} />
      </header>
      ;
      <Outlet />;
    </>
  );
};
