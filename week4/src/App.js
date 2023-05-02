import './App.css';
import React from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Welcome from './component/Welcome';
import About from './component/About';
import Nav from './component/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/about" element={<About ment="About"/>}/>
        </Routes>
    </div>
  );
}

export default App;
