import React, {Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import Cart from './pages/Cart';
// import FullPizza from './pages/FullPizza';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import './scss/app.scss';

const Cart = React.lazy(() => import(/*webpackChunkName: "Cart"*/'./pages/Cart'))
const FullPizza = React.lazy(() => import(/*webpackChunkName: "FullPizza"*/'./pages/FullPizza'))
const NotFound = React.lazy(() => import(/*webpackChunkName: "NotFound"*/'./pages/NotFound'))

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element = {
            <Suspense fallback={<h1>Загрузка корзины...</h1>}>
              <Cart />
            </Suspense>
              } 
            />
            <Route path="/pizza/:id" element={
            <Suspense fallback={<h1>Загрузка пицц...</h1>}>
              <FullPizza />
            </Suspense>} />
            <Route path="*" element={
            <Suspense fallback={<h1>Загрузка...</h1>}>
              <NotFound />
            </Suspense>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
