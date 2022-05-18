import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import getPokemonByName from "../../api/getPokemonByName";
import PokemonAbilitiesSection from "./components/PokemonAbilitiesSection";
import PokemonDescriptionSection from "./components/PokemonDescriptionSection";
import PokemonStatsSection from "./components/PokemonStatsSection/PokemonStatsSection";
import PokemonTypesSection from "./components/PokemonTypesSection";

import { Pokemon } from "../../Types";
import "./PokemonDetailPage.scss";

const PokemonDetailPage = () => {
	const { pokemonName } = useParams();
	const navigate = useNavigate();
	const [pokemonDetails, setPokemonDetails] = useState<Pokemon | undefined>();

	useEffect(() => {
		getPokemonByName(pokemonName).then((pokemonData) => {
			!!pokemonData ? setPokemonDetails(pokemonData) : navigate("/404");
			console.log("pokemonDetails", pokemonData);
		});
	}, []);

	return (
		!!pokemonDetails && (
			<main className='pokemon-details'>
				<PokemonDescriptionSection {...pokemonDetails} />
				<PokemonAbilitiesSection abilities={pokemonDetails.abilities} />
				<PokemonTypesSection types={pokemonDetails.types} />
				<PokemonStatsSection stats={pokemonDetails.stats} />
				<Link className='basic-button' to='/'>
					Go back
				</Link>
			</main>
		)
	);
};

export default PokemonDetailPage;
