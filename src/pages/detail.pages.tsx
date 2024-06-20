import { useParams } from "react-router-dom";
import Cover from "../components/cover.component";
import Movie from "../components/movies.component";

const DetailPage = () => {
  const { movieId } = useParams();

  const payload = {
    id: movieId,
    photo: "",
    background: "",
    title: "Oppenheimer",
    date: "07/19/2023",
    score: 82,
    watchlist: false,
    favorite: true,
    category: ["Drama", "History"],
    duration: "3h 1m",
    description: "The world forever changes.",
    overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
  };

  return (
    <>
      <Cover {...payload} />
      <Movie
        style={{ marginTop: "5rem", paddingBottom: "5rem" }}
        className="container"
        title="Recommendations"
        fontSize="md"
        draggable
      />
    </>
  );
};

export default DetailPage;
