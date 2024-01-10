import React from "react";

export default function ChannelInfo({ id, name }) {
  return (
    <div className="flex items-center my-5">
      <div className="bg-red-700 text-white w-8 h-8 rounded-3xl mr-3">
        <p className="text-center pt-0.5">{name[0]}</p>
      </div>
      <p className="text-white text-sm">{name}</p>
    </div>
  );
}
