import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Checkbox } from 'antd';
import { MapInterface, Bounds } from './types';
import { Marker } from './Marker';
import styles from './GoogleMap.module.css';
import robots from '../../MOCK_DATA.json';
import markerImg from './Marker/pics/Marker.png';
import { isPointInsideBounds } from './utils';

const textOnCheckbox = 'Apply filter on bounds change';

export const GoogleMap: React.FC<MapInterface> = ({
  center,
  zoom,
  markers,
  currentPosition,
  setListOnBoundsChanged,
}) => {
  const [isFilterOnBoundsChangeEnabled, setIsFilterOnBoundsChangeEnabled] = useState(true);

  const handleBoundsChange = ({ bounds }: { bounds: Bounds }) => {
    if (isFilterOnBoundsChangeEnabled) {
      const markersOnMap = robots.filter(({ lat, lng }) => isPointInsideBounds({ lat, lng }, bounds));
      setListOnBoundsChanged(markersOnMap);
    }
  };

  return (
    <div className={styles.map}>
      <Checkbox
        checked={isFilterOnBoundsChangeEnabled}
        onChange={(e) => {
          setIsFilterOnBoundsChangeEnabled(e.target.checked);
        }}
      >
        {textOnCheckbox}
      </Checkbox>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
        onChange={handleBoundsChange}
      >
        {currentPosition && <Marker lat={currentPosition.lat} lng={currentPosition.lng} avatar={markerImg} />}
        {markers.map(({ id, lat, lng, avatar }) => (
          <Marker lat={lat} lng={lng} key={id} avatar={avatar} />
        ))}
      </GoogleMapReact>
    </div>
  );
};
