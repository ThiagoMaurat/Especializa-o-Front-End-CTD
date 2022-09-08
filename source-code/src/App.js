
import "./styles.css";
import Rede from "./componentes/Network";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Rick and Morty</h1>
        <Rede />
      </div>
    </QueryClientProvider>
  );
}
