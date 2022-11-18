import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import Cart from './pages/Cart';
// import FullPizza from './pages/FullPizza';
// import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';

const Cart = React.lazy(() => import('./pages/Cart'))
const FullPizza = React.lazy(() => import('./pages/FullPizza'))
const Home = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={
            <React.Suspense fallback={<h1>Loadingggggggg..........</h1>}>
              <Cart />
            </React.Suspense>} 
            />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
