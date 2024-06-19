import Movie from "../components/movie.component";
import { Content } from "../layout/content.layout";

const Watchlist = () => {
  return (
    <Content>
      <Movie
        title="Your Watchlist"
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        fontSize="lg"
        rows={2}
      />
    </Content>
  );
};

export default Watchlist;
