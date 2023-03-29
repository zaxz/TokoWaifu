import React from 'react';

const BtnSwitch = (props) => {
  return (
    <div className="flex justify-center gap-3">
      <button onClick={props.toggleAll}>
        <div className="rounded-2xl py-2 px-4 text-white w-28 bg-[#f70066] hover:scale-95 transition">
          All
        </div>
      </button>
      <button onClick={props.toggleAnime}>
        <div className="rounded-2xl py-2 px-4 text-white w-28 bg-[#f70066]">
          Anime
        </div>
      </button>
      <button onClick={props.toggleVtuber}>
        <div className="rounded-2xl py-2 px-4 text-white w-28 bg-[#f70066]">
          VTuber
        </div>
      </button>
    </div>
  )
}

export default BtnSwitch;