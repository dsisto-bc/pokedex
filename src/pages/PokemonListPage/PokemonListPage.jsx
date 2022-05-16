import React from "react";
import PokemonList from "./components/PokemonList";

const PokemonListPage = () => {
	return (
		<main>
			<h1>Welcome, Pokemon Master!</h1>
			<p>What Pokemon are you looking for?</p>
			<PokemonList />
		</main>
	);
};

export default PokemonListPage;
