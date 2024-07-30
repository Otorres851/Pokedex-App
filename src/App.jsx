import { PokemonProvider } from "./context/PokemonProvider";
import { AppRouter } from "./routes/AppRouter";

/* App Render */
function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
    
}

export default App
