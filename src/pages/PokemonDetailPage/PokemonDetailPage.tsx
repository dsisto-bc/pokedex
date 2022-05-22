import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import getPokemonByName from "../../api/getPokemonByName";
import { Profile, Types, Attributes, Stats, Abilities } from "./DetailSections";

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
				<Profile profile={pokemonDetails.profile} />
				<Abilities abilities={pokemonDetails.abilities} />
				<Types types={pokemonDetails.types} />
				<Stats stats={pokemonDetails.stats} />
				<Attributes attributes={pokemonDetails.attributes} />
				<Link className='basic-button' to='/'>
					Go back
				</Link>
			</main>
		)
	);
};

export default PokemonDetailPage;
