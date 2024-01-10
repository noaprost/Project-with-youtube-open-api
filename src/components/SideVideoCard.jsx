import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function SideVideoCard({ video, keyword }) {
  const formattedDate = moment(video.snippet.publishedAt).fromNow();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${keyword ? keyword : ""}/${video.id}`, {
      state: { video },
    });
  };
  return (
    <div className="flex items-center w-full" onClick={handleClick}>
      <img
        className="w-40 h-25 rounded-3xl mr-5"
        src={video.snippet.thumbnails.high.url}
      />
      <article>
        <p className="text-white break-word text-sm font-semibold">
          {video.snippet.title}
        </p>
        <p className="text-gray-500 text-xs">{video.snippet.channelTitle}</p>
        <p className="text-gray-500 text-xs ">{formattedDate}</p>
      </article>
    </div>
  );
}
