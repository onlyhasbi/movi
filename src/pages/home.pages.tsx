import Movie from "../components/movies.component";
import useFetch from "../hooks/useFetch";
import Loading from "../components/loading.component";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { Content } from "../layout/content.layout";
import {
  Movie as MovieType,
  NowPlayingResponse,
  SearchResponse,
  TopRatedResponse,
} from "../types";
import { useEffect } from "react";

type HomeLoaderResponse = {
  nowPlaying: NowPlayingResponse;
  topRated: TopRatedResponse;
};

const HomePage = () => {
  const { nowPlaying, topRated } = useLoaderData() as HomeLoaderResponse;
  const [params] = useSearchParams();
  const search = params.get("search");

  const limit = (limitCount: number, data: Array<MovieType>) =>
    data.slice(0, limitCount);

  const {
    data: searchData,
    isLoading,
    fetchData,
  } = useFetch<SearchResponse>({
    key: "search",
    id_params: search || "",
  });

  useEffect(() => {
    if (search) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if (search && searchData) {
    return (
      <Content>
        {isLoading ? (
          <div
            style={{
              width: "100%",
              marginTop: "20rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Loading />
          </div>
        ) : (
          <Movie
            data={limit(18, searchData?.results || [])}
            title=""
            style={{ marginTop: "5rem" }}
            fontSize="lg"
            rows
          />
        )}
      </Content>
    );
  }

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
        rows
      />
    </Content>
  );
};

export default HomePage;
