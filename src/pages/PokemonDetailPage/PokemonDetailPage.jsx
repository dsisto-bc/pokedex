import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import getPokemonByName from "../../api/getPokemonByName";
import PokemonDescriptionSection from "./components/PokemonDescriptionSection";

const PokemonDetailPage = () => {
	const { pokemonName } = useParams();
	const navigate = useNavigate();
	const [pokemonDetails, setPokemonDetails] = useState({});

	useEffect(() => {
		getPokemonByName(pokemonName).then((pokemonData) => {
			!!pokemonData ? setPokemonDetails(pokemonData) : navigate("/404");
			console.log("pokemonDetails", pokemonData);
		});
	}, []);

	return (
		pokemonDetails && (
			<main>
				<PokemonDescriptionSection {...pokemonDetails} />
				<Link to='/'>Go back</Link>
			</main>
		)
	);
};

export default PokemonDetailPage;
