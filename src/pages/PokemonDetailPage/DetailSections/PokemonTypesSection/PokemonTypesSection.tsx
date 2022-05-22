import React from "react";
import { TypesProps } from "./Types";

const PokemonTypesSection = ({ types }: TypesProps) => (
	<section>
		<h2>Types</h2>
		{types.map((type) => (
			<p key={type}>{type}</p>
		))}
	</section>
);

export default PokemonTypesSection;
