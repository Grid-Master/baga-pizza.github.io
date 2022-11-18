import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}></ContentLoader>
  );
};

export default Skeleton;
