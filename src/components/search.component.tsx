import styles from "./search.module.css";
import SearchIcon from "../assets/icons/search.svg?react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = ({ style }: { style: React.CSSProperties }) => {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [, setSearchParams] = useSearchParams();

  const delay = 500;
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchParams({ search: debouncedSearch });
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <div className={styles.search_container}>
      <SearchIcon />
      <input
        style={style}
        className={styles.search}
        value={debouncedSearch}
        onChange={(e) => setDebouncedSearch(e.target.value)}
        placeholder="Search Movie ..."
      />
    </div>
  );
};

export default Search;
