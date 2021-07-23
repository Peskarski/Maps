import React from 'react';
import { DownCircleFilled } from '@ant-design/icons';
import { MarkerType } from '../types';
import styles from './Marker.module.css';

export const Marker: React.FC<MarkerType> = () => <DownCircleFilled className={styles.marker} />;
