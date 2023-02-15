import React from "react";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import RandomNews from "./components/RandomNews";
const queryClient = new QueryClient({});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RandomNews />
      </QueryClientProvider>
    </div>
  );
}

export default App;
