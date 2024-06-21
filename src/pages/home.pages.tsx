import { useLoaderData } from "react-router-dom";
import Movie from "../components/movies.component";
import { Content } from "../layout/content.layout";
import {
  Movie as MovieType,
  NowPlayingResponse,
  TopRatedResponse,
} from "../types";
import { Suspense } from "react";
import Loading from "../layout/loading.layout";

type HomeLoaderResponse = {
  nowPlaying: NowPlayingResponse;
  topRated: TopRatedResponse;
};

const HomePage = () => {
  const data = useLoaderData() as HomeLoaderResponse;

  const limit = (limitCount: number, data: Array<MovieType>) =>
    data.slice(0, limitCount);

  return (
    <Suspense fallback={<Loading />}>
      <Content>
        <Movie
          data={data?.nowPlaying.results || []}
          title="Now Playing"
          fontSize="lg"
          scrollable
        />
        <Movie
          data={limit(12, data?.topRated.results) || []}
          title="Top Rated"
          style={{ marginTop: "5rem" }}
          fontSize="lg"
          rows={2}
        />
      </Content>
    </Suspense>
  );
};

export default HomePage;
