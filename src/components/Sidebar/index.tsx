import React, { useCallback, useEffect, useState } from 'react';
import searchResults, {Result} from '../../data/searchResults';
import { log } from '../../utils/logToAnalytics';
import useDebounce from '../../services/debounce';

import styles from './Sidebar.module.scss';

type SidebarProps = {
  setSelectedCampgroundId: Function
}

export const Sidebar = ({
  setSelectedCampgroundId
}: SidebarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [results, setResults] = useState<Result[]>([]);
  const [query, setQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounce<string>(query)

  useEffect(() => {
    searchQuery(debouncedSearchQuery)
  }, [debouncedSearchQuery])

  const searchQuery = useCallback((query: string) => {
    setLoading(true);
    setResults(
      searchResults.filter((result) => result.name.includes(query))
    );
    setLoading(false);
  }, [])

  const logToAnalytics = useCallback(() => {
    log('search-dropdown-enter', results);
  }, []);

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__content']}>
        <div className={styles['search']}>
          <div className={styles['search__input-container']}>
            <input
              className={styles['search__input']}
              value={query}
              placeholder="Where would you like to camp?"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </div>

          <div
            className={`${styles['search__dropdown']} ${
              showMenu ? styles['search__dropdown--active'] : undefined
            }`}
            onMouseEnter={logToAnalytics}
          >
            {loading ? (
              <p>Loading ...</p>
            ) : (
              results.map((result, index) => (
                <div
                  key={index}
                  className={styles['search__dropdown__item']}
                  onClick={() => {
                    setSelectedCampgroundId(result.id);
                  }}
                >
                  <p>{result.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
