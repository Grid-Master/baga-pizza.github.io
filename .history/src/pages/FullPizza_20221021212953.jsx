import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      axios.get('https://6343125dba4478d47847e536.mockapi.io/Items');
    }
  }, []);

  return (
    <div className="container">
      <img src="" />
      <h2>pizza</h2>
      <h2>{id}</h2>
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
