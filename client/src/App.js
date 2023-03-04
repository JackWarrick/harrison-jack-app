import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Initial from './pages/initial';

function App() {
  return (
    <Router>
    <>
      <Routes>
        <Route path="/" element={<Initial />} />
      </Routes>
    </>
  </Router>
  );
}

export default App;
