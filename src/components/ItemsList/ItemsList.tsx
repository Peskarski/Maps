import React from 'react';
import { List, Avatar } from 'antd';
import styles from './ItemsList.module.css';
import { ListType } from './types';

const header = 'Robots';

export const ItemsList: React.FC<ListType> = ({ list }) => {
  return (
    <List
      className={styles.list}
      header={<h2>{header}</h2>}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta avatar={<Avatar src={item.avatar} />} />
          <p>{`${item.first_name} ${item.last_name}`}</p>
        </List.Item>
      )}
    />
  );
};
