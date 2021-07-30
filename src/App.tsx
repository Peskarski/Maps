import React, { useState, useEffect } from 'react';
import { GoogleMap } from './components/GoogleMap';
import { ItemsList } from './components/ItemsList';
import { Layout } from 'antd';
import styles from './App.module.css';
import { ListItem } from './components/ItemsList/types';
import { Coordinates } from './components/GoogleMap/types';
import 'antd/dist/antd.css';

const title = 'Maps';

const App: React.FC = () => {
  const { Header, Sider, Content } = Layout;

  const [list, setList] = useState<ListItem[]>([]);
  const [markers, setMarkers] = useState<ListItem[]>([]);
  const [currentPosition, setCurrentPosition] = useState<Coordinates | null>(null);
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const gotGetUserPosition = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;
    setCurrentPosition({ lat: latitude, lng: longitude });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(gotGetUserPosition);
  }, []);

  const setListOnBoundsChanged = (markers: ListItem[]) => {
    setList(markers);
  };

  const setMarkersOnListChange = (robots: ListItem[]) => {
    setMarkers(robots);
  };

  const setActiveMarkerOnListItemHover = (item: ListItem | null) => {
    if (item) {
      setActiveMarker(item.id);
    } else {
      setActiveMarker(null);
    }
  };

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <Content>
          <GoogleMap
            setListOnBoundsChanged={setListOnBoundsChanged}
            markers={markers}
            currentPosition={currentPosition}
            activeMarker={activeMarker}
          />
        </Content>
        <Sider width="25%" className={styles.sider} theme="light">
          <ItemsList
            list={list}
            setMarkersOnListChange={setMarkersOnListChange}
            currentPosition={currentPosition}
            setActiveMarkerOnHover={setActiveMarkerOnListItemHover}
          />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
