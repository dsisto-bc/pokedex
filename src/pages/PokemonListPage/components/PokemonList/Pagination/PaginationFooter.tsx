import React, { useCallback, useState } from "react";
import { PaginationProps } from "./Types";

import "./styles.scss";

const PaginationFooter = ({ setPokemonPageIndex, pokemonPageListLength, pokemonPageIndex }) => {
	const [manualPageDirection, setManualPageDirection] = useState<number | string>("");
	const [DirectionerrorMessage, setDirectionErrorMessage] = useState<string>("");

	const handleGoToPage = useCallback(
		(e) => {
			e.preventDefault();
			if (manualPageDirection) {
				const pageToGo = Number(manualPageDirection) - 1;
				if ((pageToGo || pageToGo === 0) && pageToGo <= pokemonPageListLength && pageToGo >= 0) {
					setPokemonPageIndex(pageToGo);
					setDirectionErrorMessage("");
				} else {
					pageToGo ? setDirectionErrorMessage("there's no such page") : setDirectionErrorMessage("");
				}
			}
		},
		[setPokemonPageIndex, setDirectionErrorMessage, manualPageDirection, pokemonPageListLength]
	);

	const handlePreviousPage = useCallback(
		(e) => {
			e.preventDefault();
			pokemonPageIndex > 0 && setPokemonPageIndex(pokemonPageIndex - 1);
		},
		[pokemonPageIndex, setPokemonPageIndex]
	);

	const handleNextPage = useCallback(
		(e) => {
			e.preventDefault();
			pokemonPageIndex <= pokemonPageListLength && setPokemonPageIndex(pokemonPageIndex + 1);
		},
		[pokemonPageIndex, setPokemonPageIndex]
	);

	return (
		<>
			<div className='pagination-container'>
				<p className='page-monitor'>
					page {pokemonPageIndex + 1} of {pokemonPageListLength}
				</p>
				<div className='pagination-controls'>
					<button disabled={pokemonPageIndex <= 0} onClick={handlePreviousPage} className='basic-button pagination-button'>
						Back
					</button>
					<div className='manual-pagination'>
						<input
							value={manualPageDirection || ""}
							onChange={(e) => setManualPageDirection(Number(e.target.value))}
							type='number'
							className='basic-input pagination-input'
						/>
						<div className='go-to-button-container'>
							<button className='basic-button go-to-button' onClick={handleGoToPage}>
								go
							</button>
						</div>
					</div>
					<button
						disabled={pokemonPageIndex >= pokemonPageListLength - 1}
						onClick={handleNextPage}
						className='pagination-button basic-button'
					>
						Next
					</button>
				</div>
				{DirectionerrorMessage && <p className='error-message'>{DirectionerrorMessage}</p>}
			</div>
		</>
	);
};

export default PaginationFooter;
