import React from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const formattedDate = moment(video.snippet.publishedAt).fromNow();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`);
  };
  return (
    <div className="w-72 m-1 bg-black" onClick={handleClick}>
      <img
        src={video.snippet.thumbnails.medium.url}
        className="rounded-xl my-2"
      />
      <p className="break-normal text-white">{video.snippet.title}</p>
      <p className="text-gray-500 text-sm">{video.snippet.channelTitle}</p>
      <p className="text-gray-500 text-sm ">{formattedDate}</p>
    </div>
  );
}
