import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useYoutubeAPI } from "../context/YoutubeAPIContext";
import { useQuery } from "@tanstack/react-query";
import SideVideoCard from "../components/SideVideoCard";
import { v4 as uuidv4 } from "uuid";
import VideoPlayer from "../components/VideoPlayer";
import ChannelInfo from "../components/ChannelInfo";

export default function VideoDetail() {
  const { keyword, videoId } = useParams();
  const { youtube } = useYoutubeAPI();
  const {
    state: { video },
  } = useLocation();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });

  return (
    <>
      {isLoading && <p className="text-center text-white">Loading ... </p>}
      {error && <p className="text-red-800">{JSON.stringify(error)}</p>}
      <div className="bg-gray-950 flex flex-row flex-wrap mt-6 mx-10">
        <div key={video.id} className="w-128 mx-20">
          <VideoPlayer videoId={videoId} />
          <p className="text-white break-word text-sm font-semibold">
            {video.snippet.title}
          </p>
          <ChannelInfo
            id={video.snippet.channelId}
            name={video.snippet.channelTitle}
          />
          <span className="text-white break-all text-sm">
            {video.snippet.description}
          </span>
        </div>
        <section className="w-96">
          {videos &&
            videos.map((targetVideo) => {
              if (video.snippet.channelId === targetVideo.snippet.channelId) {
                if (targetVideo.id !== videoId) {
                  return (
                    <SideVideoCard
                      key={uuidv4()}
                      video={targetVideo}
                      keyword={keyword}
                    />
                  );
                }
              }
            })}
        </section>
      </div>
    </>
  );
}
