import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
