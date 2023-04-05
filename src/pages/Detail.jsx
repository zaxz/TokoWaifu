import {shuffledData} from '../components/AllList'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const alertCart = () => {
    alert("belom jadi, pusing bet bikin fitur keranjang elah");
  };
  let { id } = useParams();
  let product = shuffledData.find((item) => item.id === parseInt(id));

  return (
    <>
    <div className="pb-16">
      <img src={product.img} alt={product.name} 
      className="w-full"
      />
      <div className="px-5 py-3 ">
          <p className="text-2xl font-bold">Rp999.999.999</p>
          <h2 className="text-xl">{product.name}</h2>
          <h1 className="text-slate-600">{product.from}</h1>
        <div className="flex gap-2">
         <a className=" flex justify-center mt-3 h-11 w-full bg-[#f70066] text-white rounded-lg" href="https://youtu.be/4vK_1ZizVUU">
          <button >
           Beli
          </button>
          </a>
          <button onClick={alertCart} className="mt-3 h-11 w-16 bg-[#f70066] text-white rounded-lg">
            <i className="text-2xl fa-solid fa-cart-shopping"></i>
          </button>
          </div>
          <div className="divide-y divide-slate-200">
            <h1 className="text-xl py-2">Spek Waifu</h1>
            <div className="flex flex-col divide-y divide-slate-200">
              <div className="flex py-3">
                <p className="font-medium w-36">Gender</p>
                <p className="">Cewe</p>
              </div>
              <div className="flex py-3">
                <p className="font-medium w-36">Tinggi Badan</p>
                <p className="">{product.tb}</p>
              </div>
              <div className="flex py-3">
                <p className="font-medium w-36">Berat Badan</p>
                <p className="">{product.bb}</p>
              </div>
              <div className="flex py-3">
                <p className="font-medium w-36">Umur</p>
                <p className="">{product.umur}</p>
              </div>
              <div className="flex py-3">
                <p className="font-medium w-36">Ulang Tahun</p>
                <p className="">{product.ut}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Detail;