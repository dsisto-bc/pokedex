import React from "react";
import { AbilityProps } from "./Types";

const PokemonAbilitiesSection = ({ abilities }: AbilityProps) => (
	<section>
		<h2>Abilities</h2>
		{abilities.map((ability) => (
			<p key={ability}>{ability}</p>
		))}
	</section>
);

export default PokemonAbilitiesSection;
