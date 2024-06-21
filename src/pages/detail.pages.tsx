import Movie from "../components/movies.component";
import Cover from "../components/cover.component";
import { useLoaderData } from "react-router-dom";
import { MovieDetail, RecommendationsResponse } from "../types";

type DetailLoaderResponse = {
  movie: MovieDetail;
  recommendations: RecommendationsResponse;
};

const DetailPage = () => {
  const { movie, recommendations } = useLoaderData() as DetailLoaderResponse;

  console.log({ movie, recommendations });

  return (
    <>
      <Cover {...movie}/>
      <Movie
        data={recommendations?.results || []}
        style={{ marginTop: "5rem", paddingBottom: "5rem" }}
        className="container"
        title="Recommendations"
        fontSize="md"
        scrollable
      />
    </>
  );
};

export default DetailPage;
