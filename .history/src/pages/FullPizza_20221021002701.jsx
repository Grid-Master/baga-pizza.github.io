import React from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const params = useParams();

  console.log(params);

  return (
    <div className="container">
      <img src="" />
      <h2>pizza</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt ex fuga quasi neque
        dolorem omnis soluta ducimus, possimus nihil facilis enim fugit adipisci! Ipsum quisquam
        perferendis deserunt earum laudantium.
      </p>
      <p>150 rub</p>
    </div>
  );
};

export default FullPizza;
