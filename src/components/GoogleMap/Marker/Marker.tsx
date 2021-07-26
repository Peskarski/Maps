import React from 'react';
import { MarkerType } from './types';
import styles from './Marker.module.css';

export const Marker: React.FC<MarkerType> = ({ avatar }) => {
  return (
    <div>
      <img src={avatar} alt="avatar" className={styles.marker} />
    </div>
  );
};
