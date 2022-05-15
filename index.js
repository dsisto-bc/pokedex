import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonListPage from "./src/pages/PokemonListPage";
import PageNotFound from "./src/pages/PageNotFound/PageNotFound";
import PokemonDetailPage from "./src/pages/PokemonDetailPage/PokemonDetailPage";

const root = createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<Routes>
			<Route path='' element={<PokemonListPage />} />
			<Route path=':pokemonName' element={<PokemonDetailPage />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	</BrowserRouter>
);
