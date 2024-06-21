import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import DetailPage from "../pages/detail.pages";
import ErrorPage from "../pages/error.pages";
import FavoritePage from "../pages/favorite.pages";
import HomePage from "../pages/home.pages";
import NotFoundPage from "../pages/notfound.pages";
import WatchlistPage from "../pages/watchlist.pages";
import { getRequest } from "../services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "movies",
        loader: async () => {
          return {
            nowPlaying: await getRequest({ key: "now_playing" }).then((res) =>
              res.json()
            ),
            topRated: await getRequest({ key: "top_rated" }).then((res) =>
              res.json()
            ),
          };
        },
        element: <HomePage />,
      },
      {
        path: "movies/:movieId",
        loader: async ({ params }) => {
          return {
            recommendations: await getRequest({
              key: "recommendations",
              id_params: params.movieId,
            }).then((res) => res.json()),
            movie: await getRequest({
              key: "detail",
              id_params: params.movieId,
            }).then((res) => res.json()),
          };
        },
        element: <DetailPage />,
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
