import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import getPokemonByName from "../../api/getPokemonByName";
import PokemonAbilitiesSection from "./components/PokemonAbilitiesSection";
import PokemonDescriptionSection from "./components/PokemonDescriptionSection";
import PokemonTypesSection from "./components/PokemonTypesSection";

const PokemonDetailPage = () => {
	const { pokemonName } = useParams();
	const navigate = useNavigate();
	const [pokemonDetails, setPokemonDetails] = useState();

	useEffect(() => {
		getPokemonByName(pokemonName).then((pokemonData) => {
			!!pokemonData ? setPokemonDetails(pokemonData) : navigate("/404");
			console.log("pokemonDetails", pokemonData);
		});
	}, []);

	return (
		!!pokemonDetails && (
			<main>
				<PokemonDescriptionSection {...pokemonDetails} />
				<PokemonAbilitiesSection abilities={pokemonDetails.abilities} />
				<PokemonTypesSection types={pokemonDetails.types} />
				<Link className='basic-button' to='/'>
					Go back
				</Link>
			</main>
		)
	);
};

export default PokemonDetailPage;
