import Movie from "../components/movie.component";
import { Content } from "../layout/content.layout";

const HomePage = () => {
  return (
    <Content>
      <Movie title="Now Playing" fontSize="lg" draggable />
      <Movie
        title="Top Rated"
        style={{ marginTop: "5rem" }}
        fontSize="lg"
        rows={2}
      />
    </Content>
  );
};

export default HomePage;
