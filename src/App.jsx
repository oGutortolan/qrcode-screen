import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QrCode from './components/QrCode';

function App() {
  return (
    <Router>
      {/* <div className='App'>
        <Link to='/'>Home</Link>
      </div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:qrCode' element={<QrCode />} />
        {/* <Route path='*' component={Error} /> */}
      </Routes>
    </Router>
  );
}

export default App