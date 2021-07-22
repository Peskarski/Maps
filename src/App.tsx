import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  version: 'weekly',
});

let map: google.maps.Map;

loader.load().then(() => {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

const App: React.FC = () => {
  return (
    <div>
      <h1>Maps</h1>
    </div>
  );
};

export default App;
