import React, { useState } from "react";
import { PaginationProps } from "./Types";

import "./styles.scss";

const Pagination = ({
	setPokemonPageIndex,
	pokemonPageListLength,
	pokemonPageIndex,
}) => {
	const [manualPage, setManualPage] = useState<number | string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");

	const handleGoToPage = (e) => {
		e.preventDefault();
		const pageToGo = Number(manualPage) - 1;
		if (
			(pageToGo || pageToGo === 0) &&
			pageToGo <= pokemonPageListLength &&
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
		pokemonPageIndex <= pokemonPageListLength &&
			setPokemonPageIndex(pokemonPageIndex + 1);
	};

	return (
		<div className='pagination-container'>
			<p className='page-monitor'>
				page {pokemonPageIndex + 1} of {pokemonPageListLength}
			</p>
			<div className='pagination-controls'>
				<button
					disabled={pokemonPageIndex <= 0}
					onClick={handlePreviousPage}
					className='basic-button pagination-button'
				>
					Previous page
				</button>
				<div className='manual-pagination'>
					<input
						value={manualPage || ""}
						onChange={(e) => setManualPage(Number(e.target.value))}
						type='number'
						className='basic-input pagination-input'
					/>
					<button className=' basic-button' onClick={handleGoToPage}>
						go to page
					</button>
					<p className='error-message'>{errorMessage}</p>
				</div>
				<button
					disabled={pokemonPageIndex >= pokemonPageListLength - 1}
					onClick={handleNextPage}
					className='pagination-button basic-button'
				>
					Next page
				</button>
			</div>
		</div>
	);
};

export default Pagination;
