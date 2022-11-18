import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onPageChange: any
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => onPageChange(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default Pagination;
