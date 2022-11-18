import React from 'react';

import styles from './Search.module.scss';

const Search = () => {
  return (
    <div>
      <input className={styles.root} placeholder="Поиск пиццы ..." />;
    </div>
  );
};

export default Search;
