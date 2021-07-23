import React from 'react';
import { DownCircleFilled } from '@ant-design/icons';
import { MarkerType } from '../types';

export const Marker: React.FC<MarkerType> = () => (
  <DownCircleFilled style={{ fontSize: '20px', color: 'rgb(240, 22, 149)' }} />
);
