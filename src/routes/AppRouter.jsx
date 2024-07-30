import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "../components/molecules/header/Navigation"; 
import { HomePage } from "../components/pages/home/HomePage";
import { PokemonPage } from "../components/pages/detail/PokemonPage";
import { SearchPage } from "../components/pages/search/SearchPage";

/* Routes Pages */
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

