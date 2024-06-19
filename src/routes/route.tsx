import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Favorite from "../pages/favorite";
import Watchlist from "../pages/watchlist";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "watchlist",
        element: <Watchlist />,
      },
    ],
  },
]);
