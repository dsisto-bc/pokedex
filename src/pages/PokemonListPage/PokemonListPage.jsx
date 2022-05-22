import React from "react";
import PokemonList from "./components/PokemonList";

const PokemonListPage = () => {
	return (
		<main className='main-page'>
			<header className='main-introduction'>
				<h1>Welcome, Pokemon Master!</h1>
				<p>What Pokemon are you looking for?</p>
			</header>
			<PokemonList />
		</main>
	);
};

export default PokemonListPage;
