import React from 'react';
import { Popover } from 'antd';
import { MarkerType } from './types';
import styles from './Marker.module.css';

export const Marker: React.FC<MarkerType> = ({ avatar, text, isActive }) => {
  return (
    <div>
      <Popover content={text} trigger="click">
        <img src={avatar} alt="avatar" className={isActive ? styles.activeMarker : styles.marker} />
      </Popover>
    </div>
  );
};
