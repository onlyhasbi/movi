import Layout from '../layout';
import DetailPage from '../pages/detail.pages';
import ErrorPage from '../pages/error.pages';
import FavoritePage from '../pages/favorite.pages';
import HomePage from '../pages/home.pages';
import NotFoundPage from '../pages/notfound.pages';
import WatchlistPage from '../pages/watchlist.pages';
import Protected from '../layout/protected.layout';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { getRequest } from '../services';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => {
          return redirect('/movies');
        }
      },
      {
        path: 'movies',
        loader: async () => {
          return {
            nowPlaying: await getRequest({ key: 'now_playing' }).then((res) => res.json()),
            topRated: await getRequest({ key: 'top_rated' }).then((res) => res.json())
          };
        },
        element: <HomePage />
      },
      {
        path: 'movies/:movieId',
        loader: async ({ params }) => {
          return {
            recommendations: await getRequest({
              key: 'recommendations',
              idParams: params.movieId
            }).then((res) => res.json()),
            movie: await getRequest({
              key: 'detail',
              idParams: params.movieId
            }).then((res) => res.json())
          };
        },
        element: <DetailPage />
      },
      {
        path: 'favorite',
        element: (
          <Protected>
            <FavoritePage />
          </Protected>
        )
      },
      {
        path: 'watchlist',
        element: (
          <Protected>
            <WatchlistPage />
          </Protected>
        )
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
