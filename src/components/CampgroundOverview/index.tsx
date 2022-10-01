import React, { useEffect, useState, useCallback } from 'react';
import {Campground} from '../../data/searchResults';

import styles from './CampgroundOverview.module.scss';

type CampgroundOverviewProps = {
  selectedCampgroundId: number | null
}

type CampgroundResponse = {
  data: Campground
}

const CampgroundOverview = ({ selectedCampgroundId }:CampgroundOverviewProps) => {
  const [campground, setCampground] = useState<Campground | null>(null)

  useEffect(():void => {
    if (selectedCampgroundId) {
      fetchCampgroundDetails(selectedCampgroundId)
    }
  }, [selectedCampgroundId])

  const fetchCampgroundDetails = useCallback(async (id: number): Promise<void> => {
    try {
      const response: Response = await fetch(`https://thedyrt.com/api/v5/campgrounds/${id}`);
      const campgroundDetails: CampgroundResponse = await response.json();
      setCampground(campgroundDetails?.data)
    }
    catch (error) {
      console.log(error)
    }
  }, [selectedCampgroundId])

  return (
    <div className={styles['overview']}>
      <div className={styles['overview__content']}>
        <h2>{`Display Content About ${campground?.attributes.name}`}</h2>
      </div>
    </div>
  );
};

export default CampgroundOverview;
