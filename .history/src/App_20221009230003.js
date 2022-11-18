import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import { useEffect, useState } from 'react';
import './scss/app.scss';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
