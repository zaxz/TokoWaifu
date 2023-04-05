import Card from "./Card";
import {anime, vtuber} from "../data";
const data = {anime, vtuber};
const mergedData = [...anime, ...vtuber];
export const shuffledData = mergedData.sort(() => Math.random() - 0.5);

const AllList = () => {
  return (
    <div className="mt-5 mx-auto gap-5 justify-center container flex flex-wrap">
    {shuffledData.map((data, index) => (
      <Card key={index} product={data} tb={data.tb} bb={data.bb} umur={data.umur} ut={data.ut} waifu={data.name} charFrom={data.from} img={data.img} />
      ))}
    </div>
  )
}

export default AllList;