import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/sass/styles.sass";
import Cardapio from "./pages/cardapio/Cardapio";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Cardapio />
    </QueryClientProvider>
  </React.StrictMode>
);
