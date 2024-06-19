import Movie from "../components/movie.component";
import { Content } from "../layout/content.layout";

const Favorite = () => {
  return (
    <Content>
      <Movie
        title="Your Favorite Movies"
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        fontSize="lg"
        rows={2}
      />
    </Content>
  );
};

export default Favorite;
