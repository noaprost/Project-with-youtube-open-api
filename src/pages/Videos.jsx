import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeAPI } from "../context/YoutubeAPIContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeAPI();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });

  return (
    <div className="bg-gray-950">
      {isLoading && <p className="text-center text-white">Loading ... </p>}
      {error && <p className="text-red-800">{JSON.stringify(error)}</p>}
      {videos && (
        <ul className="flex flex-wrap justify-evenly">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} keyword={keyword} />
          ))}
        </ul>
      )}
    </div>
  );
}
