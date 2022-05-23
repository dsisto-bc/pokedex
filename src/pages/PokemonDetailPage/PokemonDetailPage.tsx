import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import getPokemonByName from "../../api/getPokemonByName";
import { Profile, Types, Attributes, Stats, Abilities } from "./DetailSections";

import { Pokemon } from "../../Types";
import "./styles.scss";

const PokemonDetailPage = () => {
	const { pokemonName } = useParams();
	const navigate = useNavigate();
	const [pokemonDetails, setPokemonDetails] = useState<Pokemon | undefined>();

	useEffect(() => {
		getPokemonByName(pokemonName).then((pokemonData) => {
			!!pokemonData ? setPokemonDetails(pokemonData) : navigate("/404");
		});
	}, []);

	return (
		!!pokemonDetails && (
			<main className='pokemon-details'>
				<Profile profile={{ ...pokemonDetails.profile, mainType: pokemonDetails.types[0] }} />
				<div className='basic-info'>
					<Types types={pokemonDetails.types} />
					<Attributes attributes={pokemonDetails.attributes} />
				</div>
				<Stats stats={pokemonDetails.stats} />
				<Abilities abilities={pokemonDetails.abilities} />
				<Link className='basic-button' to='/'>
					Go back
				</Link>
			</main>
		)
	);
};

export default PokemonDetailPage;
