import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeAPIContext = createContext();

export function YoutubeAPIProvider({ children }) {
  const client = new YoutubeClient();
  const youtube = new Youtube(client);
  return (
    <YoutubeAPIContext.Provider value={{ youtube }}>
      {children}
    </YoutubeAPIContext.Provider>
  );
}

export function useYoutubeAPI() {
  return useContext(YoutubeAPIContext);
}
