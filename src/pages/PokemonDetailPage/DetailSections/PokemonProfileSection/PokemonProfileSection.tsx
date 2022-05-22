import React from "react";
import { ProfileProps } from "./Types";

import "./PokemonProfileSection.scss";

const PokemonDescriptionSection = ({
	profile: { pokemonName, image },
}: ProfileProps) => (
	<section className='description'>
		<div className='profile'>
			<img className='picture' src={image} alt={`pokemon picture`} />
			<h1 className='name'>{pokemonName}</h1>
		</div>
	</section>
);

export default PokemonDescriptionSection;
