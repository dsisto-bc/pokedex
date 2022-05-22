import React, { useEffect, useState } from "react";
import getPagePokemonsByUrl from "../../../../api/getPagePokemonsByUrl";
import PokemonListItem from "../PokemonListItem/PokemonListItem";
import getPokemonUrls from "../../../../api/getPokemonUrls";
import { Pokemon } from "../../../../Types";

import "./pokemonList.scss";

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

	const handleGoToPage = (e) => {
		e.preventDefault();
		const pageToGo = Number(manualPage) - 1;
		if (
			(pageToGo || pageToGo === 0) &&
			pageToGo <= pokemonPageList.length &&
			pageToGo >= 0
		) {
			setPokemonPageIndex(pageToGo);
			setManualPage("");
			setErrorMessage("");
		} else {
			pageToGo
				? setErrorMessage("there's no such page")
				: setErrorMessage("");
		}
	};

	const handlePreviousPage = (e) => {
		e.preventDefault();
		pokemonPageIndex > 0 && setPokemonPageIndex(pokemonPageIndex - 1);
	};

	const handleNextPage = (e) => {
		e.preventDefault();
		pokemonPageIndex <= pokemonPageList.length &&
			setPokemonPageIndex(pokemonPageIndex + 1);
	};

	return (
		<section className='pokemon-list'>
			<div className='pagination-container'>
				<div className='manual-pagination'>
					<input
						value={manualPage || ""}
						onChange={(e) => setManualPage(Number(e.target.value))}
						type='number'
					/>
					<button onClick={handleGoToPage}>go to page</button>
					<p>{errorMessage}</p>
				</div>
				<div className='pagination-controls'>
					<button
						disabled={pokemonPageIndex <= 0}
						onClick={handlePreviousPage}
					>
						Previous page
					</button>
					<p>
						page {pokemonPageIndex + 1} of {pokemonPageList.length}
					</p>
					<button
						disabled={
							pokemonPageIndex >= pokemonPageList.length - 1
						}
						onClick={handleNextPage}
					>
						Next page
					</button>
				</div>
			</div>
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
