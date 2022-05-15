import React from "react";
import "./pokemonListItem.scss";

const PokemonListItem = (pokemon) => {
	const { image, name, types } = pokemon;

	return (
		<div className='pokemon-list-item'>
			<div className='pokemon-container'>
				<h2 className='pokemon-name'>{name}</h2>
				<img
					className='pokemon-image'
					src={image}
					alt={`${pokemon}'s picture`}
				/>
			</div>
			<div className='type-container'>
				{types.map((type) => (
					<p key={type} className={`type type--${type}`}>
						{type}
					</p>
				))}
			</div>
		</div>
	);
};

export default PokemonListItem;
