import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import { Pagination } from 'antd';
import styles from './ItemsList.module.css';
import { ListInterface, ListItem } from './types';

const header = 'Robots';
const DEFAULT_CURRENT_PAGE = 1;
const ITEMS_PER_PAGE = 10;

export const ItemsList: React.FC<ListInterface> = ({ list, setMarkersOnListChange }) => {
  const [renderedList, setRenderedList] = useState<ListItem[]>([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);

  const changeMarkersAfterListChanged = () => {
    const listPart = list.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    setRenderedList(listPart);
    setMarkersOnListChange(listPart);
  };

  useEffect(() => {
    changeMarkersAfterListChanged();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(DEFAULT_CURRENT_PAGE);
    changeMarkersAfterListChanged();
  }, [list]);

  const handlePaginationChange = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div>
      <h2>{header}</h2>
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={list.length}
        onChange={handlePaginationChange}
        pageSize={10}
        showSizeChanger={false}
      />
      <List
        className={styles.list}
        itemLayout="horizontal"
        dataSource={renderedList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta avatar={<Avatar src={item.avatar} />} />
            <p> {`${item.first_name} ${item.last_name}`}</p>
          </List.Item>
        )}
      />
    </div>
  );
};
