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

  const gotPositionSuccessfully = (pos: any) => {
    const { latitude, longitude } = pos.coords;
    setCurrentPosition({ lat: latitude, lng: longitude });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(gotPositionSuccessfully);
  }, []);

  const setListOnBoundsChanged = (markers: ListItem[]) => {
    setList(markers);
  };

  const setMarkersOnListChange = (robots: ListItem[]) => {
    setMarkers(robots);
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
          />
        </Content>
        <Sider width="25%" className={styles.sider} theme="light">
          <ItemsList list={list} setMarkersOnListChange={setMarkersOnListChange} currentPosition={currentPosition} />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
