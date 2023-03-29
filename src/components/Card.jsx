import React from 'react';

const Card = (props) => {
  return (
      <button >
        <div className=" h-72 hover:bg-slate-200 transition duration-100 hover:scale-95 w-44 bg-slate-100 rounded-lg overflow-hidden shadow-lg">
          <div className="w-44 h-44 flex">
            <img src={props.img}
              className="object-contain">
            </img>
          </div>
          <div className="text-left m-3 leading-tight">
            <p>{props.waifu}</p>
            <div className="font-bold text-sm">
              Rp.999.999.999
            </div>
            <p className=" text-slate-500">{props.charFrom}</p>
          </div>
        </div>
    </button>
  )
}

export default Card;