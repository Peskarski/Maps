import React, { useState } from 'react';
import { GoogleMap } from './components/GoogleMap';
import { ItemsList } from './components/ItemsList';
import { Layout } from 'antd';
import styles from './App.module.css';
import { ListItem } from './components/ItemsList/types';
import 'antd/dist/antd.css';

const title = 'Maps';

const App: React.FC = () => {
  const { Header, Sider, Content } = Layout;

  const [list, setList] = useState<ListItem[]>([]);
  const [markers, setMarkers] = useState<ListItem[]>([]);

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
            center={{ lat: 53.893009, lng: 27.567444 }}
            zoom={5}
            setListOnBoundsChanged={setListOnBoundsChanged}
            markers={markers}
          />
        </Content>
        <Sider width="25%" className={styles.sider} theme="light">
          <ItemsList list={list} setMarkersOnListChange={setMarkersOnListChange} />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
