import React from 'react';
import { Link } from "react-router-dom";

const BtnSwitch = (props) => {
  return (
    <div className="flex justify-center gap-3">
      <button onClick={props.toggleAll}>
        <div className="rounded-2xl py-2 px-4 text-white w-28 bg-[#f70066] hover:scale-95 transition">
          All
        </div>
      </button>
      <button onClick={props.toggleAnime}>
        <div className="rounded-2xl py-2 px-4 text-white w-28 bg-[#f70066] hover:scale-95 transition">
          Anime
        </div>
      </button>
      <button onClick={props.toggleVtuber}>
        <div className="rounded-2xl py-2 px-4 text-white w-28 bg-[#f70066] hover:scale-95 transition">
          VTuber
        </div>
      </button>
    </div>
  )
}

export default BtnSwitch;