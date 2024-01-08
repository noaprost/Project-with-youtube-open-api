import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { YoutubeAPIProvider } from "./context/YoutubeAPIContext";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <YoutubeAPIProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </YoutubeAPIProvider>
    </div>
  );
}

export default App;
