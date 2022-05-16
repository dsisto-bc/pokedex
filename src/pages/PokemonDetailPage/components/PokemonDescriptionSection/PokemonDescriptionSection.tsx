import React from "react";
import { DescriptionProps } from "./Types";

const PokemonDescriptionSection = ({
	name,
	height,
	weight,
	image,
}: DescriptionProps) => {
	return (
		<section>
			<img src={image} alt={`pokemon picture`} />
			<h1>{name}</h1>
			<div>
				<p>Height: {height / 10}kg</p>
				<p>Weight: {weight / 10}kg</p>
			</div>
		</section>
	);
};

export default PokemonDescriptionSection;
