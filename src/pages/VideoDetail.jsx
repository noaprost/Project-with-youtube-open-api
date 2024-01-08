import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  return (
    <>
      <p className="text-white">{videoId}</p>
    </>
  );
}
