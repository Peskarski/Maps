import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapType } from './types';
import { Marker } from './Marker';
import locations from '../../MOCK_DATA.json';

export const GoogleMap: React.FC<MapType> = ({ center, zoom }) => {
  return (
    <div style={{ height: '800px', width: '60%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {locations.map(({ id, lat, lng }) => (
          <Marker lat={lat} lng={lng} key={id} />
        ))}
      </GoogleMapReact>
    </div>
  );
};
