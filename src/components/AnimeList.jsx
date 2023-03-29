import React from 'react';
import Card from "./Card";

const AnimeList = () => {
  return (
    <div className="mt-5 mx-auto gap-5 justify-center container flex flex-wrap">
      <Card waifu={"Siesta"} charFrom={"Tante wa Mou, Shindeiru"} img={"/anime/siesta.jpeg"}/>
      <Card waifu={"Kaori Miyazono"} charFrom={"Shigatsu wa Kimi no Uso"} img={"/anime/kaori.jpeg"}/>
      <Card waifu={"Zero Two"} charFrom={"Darling in the Franxx"} img={"/anime/zerotwo.jpeg"}/>
      <Card waifu={"Mikasa Ackerman"} charFrom={"Shingeki no Kyojin"} img={"/anime/mikasa.jpeg"}/>
      <Card waifu={"Mai Sakurajima"} charFrom={"Seishun Buta Yarou"} img={"/anime/bunny.jpeg"}/>
      <Card waifu={"Sakura Matou"} charFrom={"Fate/stay night"} img={"/anime/sakura.jpeg"}/>
      <Card waifu={"Rem"} charFrom={"Re:Zero"} img={"/anime/rem.jpeg"}/>
      <Card waifu={"Aoi Moyamori"} charFrom={"Shirobako"} img={"/anime/aoi.jpeg"}/>
      <Card waifu={"Megumi Kato"} charFrom={"Saenai Heroine no Sodatekata"} img={"/anime/megumi.jpeg"}/>
      <Card waifu={"Yuuki Asuna"} charFrom={"Sword Art Online"} img={"/anime/asuna.jpeg"}/>
    </div>
  )
}

export default AnimeList;