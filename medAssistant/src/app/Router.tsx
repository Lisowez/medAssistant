import { createBrowserRouter } from "react-router-dom";
import StartPage from "../pages/StartPage/StartPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { FirstTestPage } from "../pages/FirstTestPage/FirstTestPage";
import { AppLayout } from "./AppLayout";

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
    children: [{ path: "firstTest", element: <FirstTestPage /> }],
  },
]);

export default AppRouter;
