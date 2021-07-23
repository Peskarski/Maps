import React from 'react';
import { List, Avatar } from 'antd';
import items from '../../MOCK_DATA.json';
import styles from './ItemsList.module.css';

const header = 'Robots';

export const ItemsList: React.FC = () => {
  return (
    <List
      className={styles.list}
      header={<h2>{header}</h2>}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta avatar={<Avatar src={item.avatar} />} />
          <p>{`${item.first_name} ${item.last_name}`}</p>
        </List.Item>
      )}
    />
  );
};
