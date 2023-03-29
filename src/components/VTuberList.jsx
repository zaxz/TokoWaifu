import Card from "./Card";

const VTuberList = () => {
  return (
    <div className="mt-5 mx-auto gap-5 justify-center container flex flex-wrap">
      <Card waifu={"Moona Hoshinova"} charFrom={"Hololive ID"} img={"/vtuber/moona.png"}/>
      <Card waifu={"Kobo Kanaeru"} charFrom={"Hololive ID"} img={"/vtuber/kobo.png"}/>
      <Card waifu={"Shirakami Fubuki"} charFrom={"Hololive JP"} img={"/vtuber/fubuki.png"}/>
      <Card waifu={"Gawr Gura"} charFrom={"Hololive EN"} img={"/vtuber/gura.png"}/>
      <Card waifu={"Alia Adelia"} charFrom={"MAHA 5"} img={"/vtuber/alia.jpeg"}/>
      <Card waifu={"Airani Iofifteen"} charFrom={"Hololive ID"} img={"/vtuber/airani.png"}/>
      <Card waifu={"Usada Pekora"} charFrom={"Hololive JP"} img={"/vtuber/usada.png"}/>
      <Card waifu={"Mythia Bathford"} charFrom={"Independen VTuber"} img={"/vtuber/mythia.jpeg"}/>
      <Card waifu={"Kureiji Ollie"} charFrom={"Hololive ID"} img={"/vtuber/ollie.png"}/>
      <Card waifu={"Nekomata Okayu"} charFrom={"Hololive JP"} img={"/vtuber/nekomata.png"}/>
    </div>
  )
}

export default VTuberList;