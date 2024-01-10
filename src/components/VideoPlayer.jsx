import React from "react";

export default function VideoPlayer({ videoId }) {
  return (
    <section className="mb-5">
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        className=" border-none"
      />
    </section>
  );
}
