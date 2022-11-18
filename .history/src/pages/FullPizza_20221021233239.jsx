import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://6343125dba4478d47847e536.mockapi.io/Items/' + id);
        setPizza(data);
      } catch (err) {
        alert('error', err);
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <h1>Загрузка</h1>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <p>{pizza.price}</p>
    </div>
  );
};

export default FullPizza;
