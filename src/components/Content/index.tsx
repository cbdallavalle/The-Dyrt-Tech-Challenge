import React, { useState } from 'react';
import CampgroundOverview from '../CampgroundOverview';
import {Result} from '../../data/searchResults'
import { Sidebar } from '../Sidebar';

import styles from './Content.module.scss';

const Content = () => {
  const [selectedCampgroundId, setSelectedCampgroundId] = useState<number | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [query, setQuery] = useState<string>('');

  return (
    <div className={styles['content']}>
      <Sidebar
        setSelectedCampgroundId={setSelectedCampgroundId}
        results={results}
        setResults={setResults}
        query={query}
        setQuery={setQuery}
      />
      <CampgroundOverview selectedCampgroundId={selectedCampgroundId} />
    </div>
  );
};

export default Content;
