import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import ErrorPage from "../pages/error.pages";
import FavoritePage from "../pages/favorite.pages";
import HomePage from "../pages/home.pages";
import NotFoundPage from "../pages/notfound.pages";
import WatchlistPage from "../pages/watchlist.pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "movies",
        element: <HomePage />,
      },
      {
        path: "favorite",
        element: <FavoritePage />,
      },
      {
        path: "watchlist",
        element: <WatchlistPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
