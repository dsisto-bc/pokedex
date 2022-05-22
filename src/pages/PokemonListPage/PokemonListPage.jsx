import React from "react";
import PokemonList from "./components/PokemonList";
import "./styles.scss";

const PokemonListPage = () => {
	return (
		<main className='main-page'>
			<header className='main-introduction'>
				<h1 className='title'>Welcome, Pokemon Master!</h1>
				<p className='subtitle'>What Pokemon are you looking for?</p>
			</header>
			<PokemonList />
		</main>
	);
};

export default PokemonListPage;
