import React from 'react';
import { Routes, Route } from 'react-router';
import Header from './Components/Header/Header';
import Popup from './Components/Popup/Popup';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';

function App() {
  return (
    <>
      {/* <Popup items={[]} /> */}
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/month-statistics' element={<MonthStatistics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
