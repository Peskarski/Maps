import React from 'react';
import { GoogleMap } from './components/GoogleMap';

const title = 'Maps';

const App: React.FC = () => {
  return (
    <div>
      <h1>{title}</h1>
      <GoogleMap center={{ lat: 53.893009, lng: 27.567444 }} zoom={8} />
    </div>
  );
};

export default App;
