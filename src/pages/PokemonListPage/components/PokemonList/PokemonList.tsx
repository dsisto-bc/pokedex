import React, { useEffect, useState } from "react";
import getPagePokemonsByUrl from "../../../../api/getPagePokemonsByUrl";
import PokemonListItem from "../PokemonListItem/PokemonListItem";
import getPokemonUrls from "../../../../api/getPokemonUrls";
import { Pokemon } from "../../../../Types";
import Pagination from "./Pagination";

import "./styles.scss";

const PokemonList = () => {
	const [pokemonPageList, setPokemonPageList] = useState<string[]>([]);
	const [pokemonPage, setPokemonPage] = useState<Pokemon[]>([]);
	const [pokemonPageIndex, setPokemonPageIndex] = useState<number>(0);
	const [manualPage, setManualPage] = useState<number | string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");

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
	}, [pokemonPageList, pokemonPageIndex]);

	return (
		<section className='pokemon-list'>
			<Pagination
				setPokemonPageIndex={setPokemonPageIndex}
				pokemonPageListLength={pokemonPageList.length}
				pokemonPageIndex={pokemonPageIndex}
			/>
			<div>
				{pokemonPage?.map((pokemon) => (
					<PokemonListItem
						key={pokemon.profile.pokemonName}
						{...pokemon}
					/>
				))}
			</div>
		</section>
	);
};

export default PokemonList;
