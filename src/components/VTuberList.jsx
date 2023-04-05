import Card from "./Card";
import {vtuber} from "../data";
const data = vtuber;
const shuffledData = data.sort(() => Math.random() - 0.5);

const VTuberList = () => {
  return (
    <>
    <div className="mt-5 mx-auto gap-5 justify-center container flex flex-wrap">
    {shuffledData.map((data) => (
      <Card key={data.id} product={data} waifu={data.name} charFrom={data.from} img={data.img} />
      ))}
    </div>
    </>
  )
}

export default VTuberList;