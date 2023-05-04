import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product from './Product';

const App = () => {
   return (
      <div className='App'>
            <Header />
            <Routes>
               <Route path="/" element={<Main />}></Route>
                <Route path="/product*" element={<Product />}></Route>
            </Routes>
      </div>
   );
};

export default App;