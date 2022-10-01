import React, { useCallback, useEffect, useState } from 'react';
import searchResults, {Result} from '../../data/searchResults';
import { log } from '../../utils/logToAnalytics';

import styles from './Sidebar.module.scss';

type SidebarProps = {
  setSelectedCampgroundId: Function
}
asdf
export const Sidebar = ({
  setSelectedCampgroundId
}: SidebarProps) => {
  const [results, setResults] = useState<Result[]>([]);
  const [query, setQuery] = useState<string>('');

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    if (result) {
      setSelectedCampgroundId(result.id);
    }
  }, [result]);

  useEffect(() => {
    if (query) {
      /*
        TODO load results from https://staging.thedyrt.com/api/v5/autocomplete/campgrounds with
        the query parameter `q`
      */
      setLoading(true);

      setTimeout(() => {
        setResults(
          searchResults.filter((result) => result.name.includes(query))
        );
        setLoading(false);
      }, 500);
    }
  }, [query]);

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
              placeholder="Where would you like to camp?"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
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
                    setResult(result);
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
