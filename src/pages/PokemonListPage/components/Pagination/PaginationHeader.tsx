import React from "react";
import { PaginationHeaderProps } from "./Types";

const PaginationHeader = ({ setPokemonPerPage, pokemonPerPage }: PaginationHeaderProps) => {
	const pokemonPerPageOptions = [5, 15, 30];

	const handlePageLengthChange = (pokemonsToShow) => {
		setPokemonPerPage(pokemonsToShow);
	};

	return (
		<div className='pokemon-per-page'>
			show
			{pokemonPerPageOptions.map((pokemonsToShow) => (
				<button
					key={pokemonsToShow}
					onClick={() => handlePageLengthChange(pokemonsToShow)}
					className={`basic-button page-length-button${(pokemonPerPage === pokemonsToShow && "--checked") || ""}`}
				>
					{pokemonsToShow}
				</button>
			))}
			per page
		</div>
	);
};

export default PaginationHeader;
