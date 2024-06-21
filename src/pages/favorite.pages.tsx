import Movie from "../components/movies.component";
import { Content } from "../layout/content.layout";

const FavoritePage = () => {
  return (
    <Content>
      <Movie
        data={[]}
        title="Your Favorite Movies"
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        fontSize="lg"
        rows={2}
      />
    </Content>
  );
};

export default FavoritePage;
