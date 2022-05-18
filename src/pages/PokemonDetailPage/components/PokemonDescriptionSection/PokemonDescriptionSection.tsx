import React from "react";
import { DescriptionProps } from "./Types";

import "./PokemonDescriptionSection.scss";
import PokemonStats from "../PokemonStatsSection/PokemonStatsSection";

const PokemonDescriptionSection = ({
	name,
	height,
	weight,
	image,
}: DescriptionProps) => {
	return (
		<section className='description'>
			<div>
				<img className='picture' src={image} alt={`pokemon picture`} />
				<h1>{name}</h1>
			</div>
			<div>
				<p>Height: {height / 10}kg</p>
				<p>Weight: {weight / 10}kg</p>
			</div>
		</section>
	);
};

export default PokemonDescriptionSection;
