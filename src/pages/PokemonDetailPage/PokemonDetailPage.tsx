import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import getPokemonByName from "../../api/getPokemonByName";
import PokemonSkillsSection from "./DetailSections/PokemonSkillsSection";
import PokemoAttributessSecton from "./DetailSections/PokemonAttributesSection";
import PokemonProfileSecton from "./DetailSections/PokemonProfileSection";
import PokemonStatsSecton from "./DetailSections/PokemonStatsSection";
import PokemonTypesSecton from "./DetailSections/PokemonTypesSection";

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
				<PokemonProfileSecton profile={pokemonDetails.profile} />
				<div className='basic-info'>
					<PokemonTypesSecton types={pokemonDetails.types} />
					<PokemoAttributessSecton attributes={pokemonDetails.attributes} />
				</div>
				<PokemonStatsSecton stats={pokemonDetails.stats} />
				<div className='skill-container'>
					<PokemonSkillsSection skills={pokemonDetails.abilities} skillName='abilities' />
					<PokemonSkillsSection skills={pokemonDetails.moves} skillName='moves' />
				</div>
				<Link className='basic-button go-back-button' to='/'>
					Go back
				</Link>
			</main>
		)
	);
};

export default PokemonDetailPage;
