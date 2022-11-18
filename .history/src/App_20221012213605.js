import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    //   <div className="App">
    //     <div className="wrapper">
    //       <Header />
    //       <div className="content">
    //         <Routes>
    //           <Route path="/" element={<Home />} />
    //           <Route path="/cart" element={<Cart />} />
    //           <Route path="*" element={<NotFound />} />
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </SearchContext.Provider>
  );
}

export default App;
