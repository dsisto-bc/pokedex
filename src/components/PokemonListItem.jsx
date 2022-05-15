import React from "react";

const PokemonListItem = (pokemon) => {
	const { image, name, types } = pokemon;

	return (
		<div>
			<img src={image} />
			<h2>{name}</h2>
			<div>
				{types.map((type) => (
					<span>{type}</span>
				))}
			</div>
		</div>
	);
};

export default PokemonListItem;
