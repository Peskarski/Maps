import React, { useState } from 'react';
import { GoogleMap } from './components/GoogleMap';
import { ItemsList } from './components/ItemsList';
import { Layout } from 'antd';
import styles from './App.module.css';
import { ListItem } from './components/ItemsList/types';

const title = 'Maps';

const App: React.FC = () => {
  const { Header, Sider, Content } = Layout;

  const [list, setList] = useState<ListItem[]>([]);

  const setListOnBoundsChanged = (markers: ListItem[]) => {
    setList(markers);
  };

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h1>{title}</h1>
      </Header>
      <Content className={styles.content}>
        <GoogleMap
          center={{ lat: 53.893009, lng: 27.567444 }}
          zoom={5}
          setListOnBoundsChanged={setListOnBoundsChanged}
        />
        <Sider width="25%" className={styles.sider}>
          <ItemsList list={list} />
        </Sider>
      </Content>
    </Layout>
  );
};

export default App;
