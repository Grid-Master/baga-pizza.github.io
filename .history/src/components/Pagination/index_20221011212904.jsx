import React from 'react';

const Pagination = () => {
  return (
    <div>
      <ReactPaginate
        className=""
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => console.log(e)}
        pageRangeDisplayed={8}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
