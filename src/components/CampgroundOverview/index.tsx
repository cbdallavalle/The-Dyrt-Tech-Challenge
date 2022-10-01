import React, { useEffect, useState, useCallback } from 'react';
import {Campground, campgroundDetail} from '../../data/searchResults';
import { capitalizeEveryWord } from '../../utils/stringFormatter';
import pin from '../../assets/pin.png'

import styles from './CampgroundOverview.module.scss';

type CampgroundOverviewProps = {
  selectedCampgroundId: number | null
}

type CampgroundResponse = {
  data: Campground
}

const CampgroundOverview = ({ selectedCampgroundId }:CampgroundOverviewProps) => {
  const [campground, setCampground] = useState<Campground | null>(campgroundDetail)

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

  const permanentlyClosed = campground?.attributes['permanently-closed']
  const locationInformation = campground?.attributes.address ?? `${campground?.attributes.latitude}, ${campground?.attributes.longitude}`
  const accessTypes: Array<string> | [] = campground?.attributes['access-types'] ?? []
  const accommodationTypes: Array<string> | [] = campground?.attributes['accommodation-types'] ?? []

  return (
    <div className={styles['overview']}>
      <section className={styles['overview__content']}>
          <h2 className={styles['overview__header']}>
            {campground?.attributes.name}
          </h2>
          <div className={styles['overview--location-box']}>
              <img src={pin} alt='Pin icon' />
              <p>{locationInformation}</p>
          </div>
        {true && <p className={styles['overview--warning-text']}>Permanently Closed</p>}
        <article className={styles['overview__article']}>
          <h3>General Information</h3>
          <div className={styles['overview--long-box']}>
            <div className={styles['overview--short-box']}>
              <h4>Access Types</h4>
              {accessTypes.map(type => <p key={type}>{capitalizeEveryWord(type)}</p>)}
            </div>
            <div className={styles['overview--short-box']}>
              <h4>Accommodations</h4>
              {accommodationTypes.map(type => <p key={type}>{capitalizeEveryWord(type)}</p>)}
            </div>
            <div className={styles['overview--short-box']}>
              <h4>Number of Sites</h4>
              <p>{campground?.attributes['number-of-sites'] || 'N/A'}</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CampgroundOverview;
