/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import SearchIcon from '../assets/icons/search.svg?react';
import styles from './search.module.css';

const Search = ({ isVisible }: { isVisible: boolean }) => {
  const [, setSearchParams] = useSearchParams();
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const delay = 650;
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchParams({ search: debouncedSearch });
      if (!debouncedSearch) {
        navigate(location.pathname, { replace: true });
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.search_container}>
      <SearchIcon />
      <input
        className={styles.search}
        value={debouncedSearch}
        onChange={(e) => setDebouncedSearch(e.target.value)}
        placeholder="Search Movie ..."
      />
    </div>
  );
};

export default Search;
