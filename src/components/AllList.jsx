import Card from "./Card";

const AllList = () => {
  return (
    <div className="mt-5 mx-auto gap-5 justify-center container flex flex-wrap">
      <Card waifu={"Mythia Bathford"} charFrom={"Independen VTuber"} img={"/vtuber/mythia.jpeg"}/>
      <Card waifu={"Mikasa Ackerman"} charFrom={"Shingeki no Kyojin"} img={"/anime/mikasa.jpeg"}/>
      <Card waifu={"Siesta"} charFrom={"Tante wa Mou, Shindeiru"} img={"/anime/siesta.jpeg"}/>
      <Card waifu={"Gawr Gura"} charFrom={"Hololive EN"} img={"/vtuber/gura.png"}/>
      <Card waifu={"Zero Two"} charFrom={"Darling in the Franxx"} img={"/anime/zerotwo.jpeg"}/>
      <Card waifu={"Airani Iofifteen"} charFrom={"Hololive ID"} img={"/vtuber/airani.png"}/>
      <Card waifu={"Mai Sakurajima"} charFrom={"Seishun Buta Yarou"} img={"/anime/bunny.jpeg"}/>
      <Card waifu={"Shirakami Fubuki"} charFrom={"Hololive JP"} img={"/vtuber/fubuki.png"}/>
      <Card waifu={"Sakura Matou"} charFrom={"Fate/stay night"} img={"/anime/sakura.jpeg"}/>
      <Card waifu={"Rem"} charFrom={"Re:Zero"} img={"/anime/rem.jpeg"}/>
      <Card waifu={"Moona Hoshinova"} charFrom={"Hololive ID"} img={"/vtuber/moona.png"}/>
      <Card waifu={"Aoi Moyamori"} charFrom={"Shirobako"} img={"/anime/aoi.jpeg"}/>
      <Card waifu={"Megumi Kato"} charFrom={"Saenai Heroine no Sodatekata"} img={"/anime/megumi.jpeg"}/>
      <Card waifu={"Nekomata Okayu"} charFrom={"Hololive JP"} img={"/vtuber/nekomata.png"}/>
      <Card waifu={"Alia Adelia"} charFrom={"MAHA 5"} img={"/vtuber/alia.jpeg"}/>
      <Card waifu={"Yuuki Asuna"} charFrom={"Sword Art Online"} img={"/anime/asuna.jpeg"}/>
      <Card waifu={"Kobo Kanaeru"} charFrom={"Hololive ID"} img={"/vtuber/kobo.png"}/>
      <Card waifu={"Kureiji Ollie"} charFrom={"Hololive ID"} img={"/vtuber/ollie.png"}/>
      <Card waifu={"Kaori Miyazono"} charFrom={"Shigatsu wa Kimi no Uso"} img={"/anime/kaori.jpeg"}/>
      <Card waifu={"Usada Pekora"} charFrom={"Hololive JP"} img={"/vtuber/usada.png"}/>
    </div>
  )
}

export default AllList;