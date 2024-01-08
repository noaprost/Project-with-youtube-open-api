import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

export const YoutubeAPIContext = createContext();

export function YoutubeAPIProvider({ children }) {
  const youtube = new FakeYoutube();
  return (
    <YoutubeAPIContext.Provider value={{ youtube }}>
      {children}
    </YoutubeAPIContext.Provider>
  );
}

export function useYoutubeAPI() {
  return useContext(YoutubeAPIContext);
}
