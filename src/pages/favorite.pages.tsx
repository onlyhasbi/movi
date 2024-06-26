import Empty from '../components/empty.component';
import Movie from '../components/movies.component';
import { Content } from '../layout/content.layout';
import { useMovieStore } from '../store';

const FavoritePage = () => {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <Content>
      <Movie
        data={favorites}
        title="Your Favorite Movies"
        empty={<Empty title="favorite" />}
        style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        fontSize="lg"
        rows
      />
    </Content>
  );
};

export default FavoritePage;
