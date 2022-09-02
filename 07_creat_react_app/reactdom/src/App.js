import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product from './Product';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/product/:productId' element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
