import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import getPokemonByName from "../../api/getPokemonByName";

const PokemonDetailPage = () => {
	const { pokemonName } = useParams();
	const navigate = useNavigate();
	const [pokemonDetails, setPokemonDetails] = useState({});

	useEffect(() => {
		getPokemonByName(pokemonName).then((pokemonData) => {
			!!pokemonData ? setPokemonDetails(pokemonData) : navigate("/404");
		});
	}, []);

	return (
		<main>
			<h1>This is the details page for {pokemonName}</h1>
			<Link to='/'>Go back</Link>
		</main>
	);
};

export default PokemonDetailPage;
