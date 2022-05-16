import React from "react";
import { Link } from "react-router-dom";
import "./pokemonListItem.scss";

const PokemonListItem = (pokemon) => {
	const { image, name, types } = pokemon;

	return (
		<Link to={`/${name}`} className='pokemon-list-item'>
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
		</Link>
	);
};

export default PokemonListItem;
