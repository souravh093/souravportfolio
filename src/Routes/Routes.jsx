import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Works from "../Pages/Works/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/works",
        element: <Works />,
      },
    ],
  },
]);

export default router;
