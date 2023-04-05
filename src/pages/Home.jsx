import React, { useState } from 'react';
import BtnSwitch from '../components/BtnSwitch'
import AnimeList from '../components/AnimeList'
import AllList from '../components/AllList'
import Header from '../components/Header'
import VTuberList from '../components/VTuberList'

const Home = () => {
  const [isAll, setAll] = useState(true);
  const [isAnime, setAnime] = useState(false);
  const [isVtuber, setVtuber] = useState(false);
  
  const toggleVtuber = () => {
    setAll(false);
    setAnime(false);
    setVtuber(true);
  }
  const toggleAnime = () => {
    setAll(false);
    setAnime(true);
    setVtuber(false);
  }
  const toggleAll = () => {
    setAll(true);
    setAnime(false);
    setVtuber(false);
  }
  return (
  <>
  <Header />
    <BtnSwitch toggleAll={toggleAll} toggleVtuber={toggleVtuber} toggleAnime={toggleAnime} />
    {isAll && <AllList />}
    {isAnime && <AnimeList />}
    {isVtuber && <VTuberList />}
  </>
  )
}

export default Home;