import React, { useCallback, useEffect, useState } from 'react';
import { Result } from '../../data/searchResults';
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

  useEffect(():void => {
    fetchSearchResults(debouncedSearchQuery)
  }, [debouncedSearchQuery])

  const fetchSearchResults = useCallback(async (query: string): Promise<void> => {
    try {
      setLoading(true);
      const response: Response = await fetch(`https://staging.thedyrt.com/api/v5/autocomplete/campgrounds?q=${query}`);
      const foundCampsites: Result[] = await response.json();
      setResults(foundCampsites);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }, [])

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
            onMouseEnter={() => log('search-dropdown-enter', results)}
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
