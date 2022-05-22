import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../../../../Types";
import { Stats } from "../../../PokemonDetailPage/DetailSections";
import "./styles.scss";

const PokemonListItem = (pokemon: Pokemon) => {
	const {
		profile: { image, pokemonName },
		types,
		stats,
	} = pokemon;

	return (
		<Link to={`/${pokemonName}`} className='pokemon-list-item'>
			<div className='pokemon-container'>
				<h2 className='pokemon-name'>{pokemonName}</h2>
				<img className='pokemon-image' src={image} alt={`${pokemon}'s picture`} />
			</div>
			<div className='pokemon-stats'>
				<Stats stats={stats} />
			</div>
			<div className='type-container'>
				{types.map((type) => (
					<p key={type} className={`type type-color--${type}`}>
						{type}
					</p>
				))}
			</div>
		</Link>
	);
};

export default PokemonListItem;
