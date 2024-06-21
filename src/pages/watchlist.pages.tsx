import Movie from "../components/movies.component";
import { Content } from "../layout/content.layout";
import { useMovieStore } from "../store";

const WatchlistPage = () => {
  const watchlist = useMovieStore((state) => state.watchlist);

  return (
    <Content>
      <Movie
        data={watchlist}
        title="Your Watchlist"
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        fontSize="lg"
        rows
      />
    </Content>
  );
};

export default WatchlistPage;
