import React from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
      <button >
      <Link to={`/products/${props.product.id}`}>
        <div className=" h-72 hover:bg-slate-200 transition duration-100 hover:scale-95 w-44 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="w-44 h-44 flex">
            <img src={props.img}
              className="object-contain rounded-b-xl">
            </img>
          </div>
          <div className="text-left m-3 leading-tight">
            <p>{props.waifu}</p>
            <div className="font-bold text-sm">
              Rp999.999.999
            </div>
            <p className=" text-slate-500">{props.charFrom}</p>
          </div>
        </div>
    </Link>
    </button>
  )
}

export default Card;