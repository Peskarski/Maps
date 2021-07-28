import React, { useState, useEffect } from 'react';
import GoogleMapReact, { fitBounds } from 'google-map-react';
import { Checkbox } from 'antd';
import { MapInterface, Bounds } from './types';
import { Marker } from './Marker';
import styles from './GoogleMap.module.css';
import robots from '../../MOCK_DATA.json';
import markerImg from './Marker/pics/Marker.png';
import { isPointInsideBounds, getCoordinatesForFitBounds } from './utils';

const textOnCheckbox = 'Apply filter on bounds change';
const DEFAULT_CENTER = { lat: 53.893009, lng: 27.567444 };
const DEFAULT_ZOOM = 4;
const DEFAULT_SIZE = { width: 1315, height: 800 };

export const GoogleMap: React.FC<MapInterface> = ({ markers, currentPosition, setListOnBoundsChanged }) => {
  const [isFilterOnBoundsChangeEnabled, setIsFilterOnBoundsChangeEnabled] = useState(true);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [center, setCenter] = useState(DEFAULT_CENTER);

  const handleBoundsChange = ({ bounds, zoom }: { bounds: Bounds; zoom: number }) => {
    setZoom(zoom);
    if (isFilterOnBoundsChangeEnabled) {
      const markersOnMap = robots.filter(({ lat, lng }) => isPointInsideBounds({ lat, lng }, bounds));
      setListOnBoundsChanged(markersOnMap);
    }
  };

  useEffect(() => {
    if (!isFilterOnBoundsChangeEnabled) {
      const bounds = getCoordinatesForFitBounds(markers);
      const { zoom, center } = fitBounds(bounds, DEFAULT_SIZE);
      setZoom(zoom);
      setCenter(center);
    }
  }, [markers, isFilterOnBoundsChangeEnabled]);

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
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={5}
        zoom={zoom}
        center={center}
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
