import React from "react";
import { TypesProps } from "./Types";
import "./styles";

const PokemonTypesSection = ({ types }: TypesProps) => (
	<section className='types-section'>
		<h2 className='title'>Types</h2>
		{types.map((type) => (
			<button className={`basic-button type type-color--${type}`} key={type}>
				{type}
			</button>
		))}
	</section>
);

export default PokemonTypesSection;
