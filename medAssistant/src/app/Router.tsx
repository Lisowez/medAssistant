import { createBrowserRouter } from "react-router-dom";
import StartPage from "../pages/StartPage/StartPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { FirstTestPage } from "../pages/FirstTestPage/FirstTestPage";
import { AppLayout } from "./AppLayout/AppLayout";
import MainPage from "../pages/MainPage/MainPage";
import BotPage from "../pages/BotPage/BotPage";

const AppRouter = createBrowserRouter([
  {
    element: <StartPage />,
    path: "/",
    errorElement: <div>404</div>,
    children: [],
  },
  {
    path: "register",
    element: <RegisterPage />,
  },

  {
    path: "app",
    element: <AppLayout />,
    children: [
      { path: "firstTest", element: <FirstTestPage /> },
      { path: "main", element: <MainPage /> },
      { path: "bot", element: <BotPage /> },
      { path: "research", element: <div> research </div> },
      { path: "doctor", element: <div> doctor </div> },
      { path: "plan", element: <div> plan </div> },
      { path: "sos", element: <div> sos </div> },
    ],
  },
]);

export default AppRouter;
