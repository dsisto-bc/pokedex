import React from "react";
import { ProfileProps } from "./Types";

import "./styles.scss";

const PokemonDescriptionSection = ({ profile: { pokemonName, image, mainType } }: ProfileProps) => (
	<section className={`profile type-color--${mainType}`}>
		<h1 className='name'>{pokemonName}</h1>
		<img className='picture' src={image} alt={`pokemon picture`} />
	</section>
);

export default PokemonDescriptionSection;
