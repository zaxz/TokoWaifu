import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import BtnSwitch from './components/BtnSwitch'
import AnimeList from './components/AnimeList'
import AllList from './components/AllList'
import VTuberList from './components/VTuberList'
import Footer from './components/Footer'

function App() {
  const [isAll, setAll] = useState(true);
  const [isAnime, setAnime] = useState(false);
  const [isVtuber, setVtuber] = useState(false);
  
  const toggleAnime = () => {
    setAll(false);
    setAnime(true);
    setVtuber(false);
  }
  const toggleVtuber = () => {
    setAll(false);
    setAnime(false);
    setVtuber(true);
  }
  const toggleAll = () => {
    setAll(true);
    setAnime(false);
    setVtuber(false);
  }
  return (
    <div>
      <Navbar />
      <div className="">
      <Header />
      <BtnSwitch toggleAll={toggleAll} toggleAnime={toggleAnime} toggleVtuber={toggleVtuber}/>
      {isAll && <AllList/>}
      {isAnime && <AnimeList />}
      {isVtuber && <VTuberList />}
      <Footer />
      </div>
    </div>
    );
};

export default App;
