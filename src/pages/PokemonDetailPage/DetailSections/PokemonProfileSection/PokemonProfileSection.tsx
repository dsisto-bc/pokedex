import React from "react";
import { ProfileProps } from "./Types";

import "./styles.scss";

const PokemonDescriptionSection = ({ profile: { pokemonName, image, mainType } }: ProfileProps) => (
	<section className={` type-color--${mainType} profile`}>
		<h1 className='name'>{pokemonName}</h1>
		<img className={`picture type-color--${mainType}`} src={image} alt={`pokemon picture`} />
	</section>
);

export default PokemonDescriptionSection;
