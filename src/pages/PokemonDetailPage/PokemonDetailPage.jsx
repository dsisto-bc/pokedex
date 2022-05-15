import React from "react";
import { useParams, Link } from "react-router-dom";

const PokemonDetailPage = () => {
	const { pokemonName } = useParams();

	return (
		<main>
			<h1>This is the details page for {pokemonName}</h1>
			<Link to='/'>Go back</Link>
		</main>
	);
};

export default PokemonDetailPage;
