import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import { Pagination } from 'antd';
import styles from './ItemsList.module.css';
import { ListInterface, ListItem } from './types';
import { getDistanceFromLatLonInKm } from './utils';

const header = 'Robots';
const DEFAULT_CURRENT_PAGE = 1;
const ITEMS_PER_PAGE = 10;

export const ItemsList: React.FC<ListInterface> = ({
  list,
  currentPosition,
  setMarkersOnListChange,
  setActiveMarkerOnHover,
}) => {
  const [renderedList, setRenderedList] = useState<ListItem[]>([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);

  const changeMarkersAfterListChanged = () => {
    const listPart = list.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const listPartWithDistances = listPart.map((item) => {
      return currentPosition
        ? {
            ...item,
            distance: getDistanceFromLatLonInKm(item.lat, item.lng, currentPosition.lat, currentPosition.lng),
          }
        : item;
    });
    setRenderedList(listPartWithDistances);
    setMarkersOnListChange(listPartWithDistances);
  };

  useEffect(() => {
    changeMarkersAfterListChanged();
  }, [currentPage, currentPosition]);

  useEffect(() => {
    setCurrentPage(DEFAULT_CURRENT_PAGE);
    changeMarkersAfterListChanged();
  }, [list]);

  return (
    <div>
      <h2>{header}</h2>
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={list.length}
        onChange={(currentPage) => setCurrentPage(currentPage)}
        pageSize={10}
        showSizeChanger={false}
      />
      <List
        className={styles.list}
        itemLayout="horizontal"
        dataSource={renderedList}
        renderItem={(item) => (
          <List.Item onMouseOver={() => setActiveMarkerOnHover(item)} onMouseLeave={() => setActiveMarkerOnHover(null)}>
            <List.Item.Meta avatar={<Avatar src={item.avatar} />} />
            <div className={styles.info}>
              <div className={styles.name}>
                <p> {`${item.first_name} ${item.last_name}`}</p>
              </div>
              {currentPosition && (
                <div>
                  <p>{`${item.distance} km`}</p>
                </div>
              )}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
