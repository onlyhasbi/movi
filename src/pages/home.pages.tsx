import { useLoaderData } from "react-router-dom";
import Movie from "../components/movies.component";
import { Content } from "../layout/content.layout";
import {
  Movie as MovieType,
  NowPlayingResponse,
  TopRatedResponse,
} from "../types";

type HomeLoaderResponse = {
  nowPlaying: NowPlayingResponse;
  topRated: TopRatedResponse;
};

const HomePage = () => {
  const { nowPlaying, topRated } = useLoaderData() as HomeLoaderResponse;

  const limit = (limitCount: number, data: Array<MovieType>) =>
    data.slice(0, limitCount);

  return (
    <Content>
      <Movie
        data={nowPlaying?.results || []}
        title="Now Playing"
        fontSize="lg"
        scrollable
      />
      <Movie
        data={limit(12, topRated?.results) || []}
        title="Top Rated"
        style={{ marginTop: "5rem" }}
        fontSize="lg"
        rows={2}
      />
    </Content>
  );
};

export default HomePage;
