import React, { useEffect, useState } from "react";
import getPagePokemonsByUrl from "../../api/getPagePokemonsByUrl";
import PokemonListItem from "../PokemonListItem";
import getPokemonUrls from "../../api/getPokemonUrls";

const PokemonList = () => {
	const [pokemonPageList, setPokemonPageList] = useState([]);
	const [pokemonPage, setPokemonPage] = useState([]);
	const [pokemonPageIndex, setPokemonPageIndex] = useState(1);

	useEffect(() => {
		// Getting all pokemons urls first, already paginated
		getPokemonUrls().then((urls) => {
			setPokemonPageList(urls);
		});
	}, []);

	useEffect(() => {
		// As soon as all pokemons are loaded, detailed pokemon data for current page's pokemon is defined to load the list
		getPagePokemonsByUrl(pokemonPageList[pokemonPageIndex]).then(
			(pokemons) => {
				setPokemonPage(pokemons);
			}
		);
	}, [pokemonPageList]);

	return (
		<section className='pokemon-list'>
			<h1>Welcome, Pokemon Master!</h1>
			<div>
				page {pokemonPageIndex} of {pokemonPageList.length}
			</div>
			{pokemonPage?.map((pokemon) => (
				<PokemonListItem key={pokemon.name} {...pokemon} />
			))}
		</section>
	);
};

export default PokemonList;
