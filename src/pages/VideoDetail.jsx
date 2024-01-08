import React from "react";
import { useParams } from "react-router-dom";
import { useYoutubeAPI } from "../context/YoutubeAPIContext";
import { useQuery } from "@tanstack/react-query";

export default function VideoDetail() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeAPI();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: () => youtube.search(),
  });

  return (
    <div className="bg-gray-950 flex flex-row flex-wrap">
      {isLoading && <p className="text-center">Loading ... </p>}
      {error && <p className="text-red-800">{JSON.stringify(error)}</p>}
      <div className="w-2/3">
        {videos &&
          videos.map((video) => {
            if (video.id === videoId) {
              return (
                <div key={video.id}>
                  <img
                    src={video.snippet.thumbnails.standard.url}
                    className="rounded-xl my-2"
                  />
                  <p className="text-white">{video.snippet.title}</p>
                  <p className="text-white break-all text-sm">
                    {video.snippet.description}
                  </p>
                </div>
              );
            }
          })}
      </div>
      <div>
        <p className="m-5 text-white">카드</p>
        <p className="m-5 text-white">카드</p>
        <p className="m-5 text-white">카드</p>
        <p className="m-5 text-white">카드</p>
      </div>
    </div>
  );
}
