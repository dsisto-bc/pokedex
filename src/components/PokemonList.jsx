import React, { useEffect, useState } from "react";
import getPagePokemonsByUrl from "../api/getPagePokemonsByUrl";
import PokemonListItem from "./PokemonListItem";
import getPokemonUrls from "../api/getPokemonUrls";

const PokemonList = () => {
	const [pokemonPageList, setPokemonPageList] = useState([]);
	const [pokemonPage, setPokemonPage] = useState([]);
	const [pokemonPageIndex, setPokemonPageIndex] = useState(0);

	useEffect(() => {
		// Getting all pokemons urls first, already paginated
		getPokemonUrls().then((urls) => {
			setPokemonPageList(urls);
			console.log("setPokemonPageList", urls);
		});
	}, []);

	useEffect(() => {
		// As soon as all pokemons are loaded, we get detailed info for current page
		getPagePokemonsByUrl(pokemonPageList[pokemonPageIndex]).then(
			(pokemons) => {
				setPokemonPage(pokemons);
				console.log("setPokemonPage", pokemons);
			}
		);
	}, [pokemonPageList]);

	return (
		<div>
			page {pokemonPageIndex}
			{pokemonPage?.map((pokemon) => (
				<PokemonListItem key={pokemon.name} {...pokemon} />
			))}
		</div>
	);
};

export default PokemonList;
