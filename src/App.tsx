import React from 'react';
import { GoogleMap } from './components/GoogleMap';
import { Layout } from 'antd';
import styles from './App.module.css';

const title = 'Maps';
const { Header, Sider, Content } = Layout;

console.log(styles);

const App: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h1>{title}</h1>
      </Header>
      <Content className={styles.content}>
        <GoogleMap center={{ lat: 53.893009, lng: 27.567444 }} zoom={8} />
        <Sider width="25%" className={styles.sider}>
          <h2>People</h2>
        </Sider>
      </Content>
    </Layout>
  );
};

export default App;
