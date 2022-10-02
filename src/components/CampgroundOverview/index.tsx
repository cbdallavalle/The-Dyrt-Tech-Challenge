import React, { useEffect, useState, useCallback } from 'react';
import { Campground } from '../../data/searchResults';
import { capitalizeEveryWord } from '../../utils/stringFormatter';

import styles from './CampgroundOverview.module.scss';

type CampgroundOverviewProps = {
  selectedCampgroundId: number | null
}

type CampgroundResponse = {
  data: Campground
}

const CampgroundOverview = ({ selectedCampgroundId }:CampgroundOverviewProps) => {
  const [campground, setCampground] = useState<Campground | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(():void => {
    if (selectedCampgroundId) {
      fetchCampgroundDetails(selectedCampgroundId);
    }
  }, [selectedCampgroundId]);

  const fetchCampgroundDetails = useCallback(async (id: number): Promise<void> => {
    try {
      setError('');
      setLoading(true);
      const response: Response = await fetch(`https://thedyrt.com/api/v5/campgrounds/${id}`);
      const campgroundDetails: CampgroundResponse = await response.json();
      setCampground(campgroundDetails?.data);
      setTimeout(() => setLoading(false), 200);
    }
    catch (error: any) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }, [selectedCampgroundId]);

  const permanentlyClosed = campground?.attributes['permanently-closed'];
  const locationInformation = campground?.attributes.address ?? `${campground?.attributes.latitude}, ${campground?.attributes.longitude}`;
  const accessTypes: Array<string> | [] = campground?.attributes['access-types'] ?? [];
  const accommodationTypes: Array<string> | [] = campground?.attributes['accommodation-types'] ?? [];
  const campgroundImage = campground?.attributes["photo-url"];
  const phoneNumber = campground?.attributes["phone-number"];

  const loadingState = <div className={styles['overview__information']}><p>Loading...</p></div>
  const errorState = <div className={styles['overview__information']}><p >Encounted an Error: {error}</p></div>
  const emptyState = (
    <div className={styles['overview__information']}>
      <p>Select a campground to view details.</p>
    </div>
  )

  return (
    <div className={styles['overview']}>
      <section className={styles['overview__content']}>
      { loading && loadingState}
      { error && errorState}
      { !loading && !error && !campground && emptyState}
      { !loading && !error && campground &&
        <>
          <div className={styles['overview__information']}>
            <h2 className={styles['overview__header']}>
              {campground?.attributes.name}
            </h2>
            {permanentlyClosed && <p className={styles['overview--warning-text']}>Permanently Closed</p>}
            <div className={styles['overview__info-box']}>
              <h3>Location:</h3>
              <p>{locationInformation}</p>
            </div>
            <div className={styles['overview__info-box']}>
              <h3>Phone number:</h3>
              <p>{phoneNumber || 'Information not available'}</p>
            </div>
            <div className={styles['overview__info-box']}>
              <h3>Access Types:</h3>
              <p>{accessTypes.map(type => capitalizeEveryWord(type  )).join(', ')}</p>
            </div>
            <div className={styles['overview__info-box']}>
              <h3>Accommodation Types:</h3>
              <p>{accommodationTypes.map(type => capitalizeEveryWord(type)).join(', ')}</p>
            </div>
            {!permanentlyClosed &&
              <div className={`${styles['overview__info-box']} ${styles['overview__info-box--horizontal']}`}>
                <h3>Site count:</h3>
                <p>{campground?.attributes['number-of-sites'] || 'Information not available'}</p>
              </div>
            }
          </div>
          <div className={styles['overview__sidebar']}>
            {campgroundImage && <img src={campgroundImage} alt='Image of campground' />}
          </div>
        </>
      }
      </section>
    </div>
  );
};

export default CampgroundOverview;