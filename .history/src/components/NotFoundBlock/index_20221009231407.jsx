import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <h1 className={styles}>
      <span>:(</span>
      <br />
      Ничего не найдено
    </h1>
  );
};

export default NotFoundBlock;
