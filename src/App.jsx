import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import AnimeList from './components/AnimeList'
import AllList from './components/AnimeList'
import VTuberList from './components/AnimeList'
import Footer from './components/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/products/:id" element={<Detail />}/>
          </Routes>
        </Router>
      <Footer />
    </>
    );
};

export default App;
