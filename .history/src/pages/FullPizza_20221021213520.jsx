import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://6343125dba4478d47847e536.mockapi.io/Items/' + id);
        setPizza(data);
      } catch (err) {
        alert('error', err);
      }
    }

    fetchPizza();
  }, []);

  return (
    <div className="container">
      <img src={pizza.imageUrsl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <p>{pizza.price}</p>
    </div>
  );
};

export default FullPizza;
