import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Map } from './types';

export const GoogleMap: React.FC<Map> = ({ center, zoom }) => {
  return (
    <div style={{ height: '800px', width: '60%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};
