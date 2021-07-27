import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapInterface } from './types';
import { Marker } from './Marker';
import styles from './GoogleMap.module.css';
import robots from '../../MOCK_DATA.json';

export const GoogleMap: React.FC<MapInterface> = ({ center, zoom, markers, setListOnBoundsChanged }) => {
  const handleApiLoaded = (map: any) => {
    map.addListener('bounds_changed', () => {
      const markersOnMap = robots.filter(({ lat, lng }) => map.getBounds().contains({ lat, lng }));
      setListOnBoundsChanged(markersOnMap);
    });
  };

  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
      >
        {markers.map(({ id, lat, lng, avatar }) => (
          <Marker lat={lat} lng={lng} key={id} avatar={avatar} />
        ))}
      </GoogleMapReact>
    </div>
  );
};
