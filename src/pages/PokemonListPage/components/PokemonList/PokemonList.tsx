import React, { useEffect, useState } from "react";
import getPagePokemonsByUrl from "../../../../api/getPagePokemonsByUrl";
import PokemonListItem from "./PokemonListItem";
import getPokemonUrls from "../../../../api/getPokemonUrls";
import { Pokemon } from "../../../../Types";
import PaginationHeader from "./Pagination/PaginationHeader";
import PaginationFooter from "./Pagination/PaginationFooter";

import "./styles.scss";

const PokemonList = () => {
	const [pokemonPageList, setPokemonPageList] = useState<string[]>([]);
	const [pokemonPage, setPokemonPage] = useState<Pokemon[]>([]);
	const [pokemonPageIndex, setPokemonPageIndex] = useState<number>(0);
	const [pokemonPerPage, setPokemonPerPage] = useState<number>(15);

	useEffect(() => {
		// Getting all pokemons urls first, already paginated
		getPokemonUrls().then((urls) => {
			setPokemonPageList(urls);
		});
	}, []);

	useEffect(() => {
		// As soon as all pokemons are loaded, detailed pokemon data for current page's pokemon is defined to load the list
		getPagePokemonsByUrl(pokemonPageList[pokemonPageIndex], pokemonPerPage).then((pokemons) => {
			setPokemonPage(pokemons);
		});
	}, [pokemonPageList, pokemonPageIndex, pokemonPerPage, setPokemonPage]);

	return (
		<section className='pokemon-list'>
			<PaginationHeader setPokemonPerPage={setPokemonPerPage} pokemonPerPage={pokemonPerPage} />
			<div className='pokemon-container'>
				{pokemonPage?.map((pokemon) => (
					<PokemonListItem key={pokemon.profile.pokemonName} {...pokemon} />
				))}
			</div>
			<PaginationFooter
				setPokemonPageIndex={setPokemonPageIndex}
				pokemonPageListLength={pokemonPageList.length}
				pokemonPageIndex={pokemonPageIndex}
			/>
		</section>
	);
};

export default PokemonList;
