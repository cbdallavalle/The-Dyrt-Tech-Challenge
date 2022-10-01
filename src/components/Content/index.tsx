import React, { useState } from 'react';
import CampgroundOverview from '../CampgroundOverview';
import {Result} from '../../data/searchResults'
import { Sidebar } from '../Sidebar';

import styles from './Content.module.scss';

const Content = () => {
  const [selectedCampgroundId, setSelectedCampgroundId] = useState<number | null>(null);

  return (
    <div className={styles['content']}>
      <Sidebar
        setSelectedCampgroundId={setSelectedCampgroundId}
      />
      <CampgroundOverview selectedCampgroundId={selectedCampgroundId} />
    </div>
  );
};

export default Content;
