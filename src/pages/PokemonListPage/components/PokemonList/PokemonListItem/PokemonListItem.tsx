import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../../../../../Types";
import { Stats } from "../../../../PokemonDetailPage/DetailSections";
import "./styles.scss";

const PokemonListItem = (pokemon: Pokemon) => {
	const {
		profile: { image, pokemonName },
		types,
		stats,
	} = pokemon;

	return (
		<Link to={`/${pokemonName}`} className='pokemon-list-item'>
			<div>
				<div className='pokemon-profile'>
					<h2 className='pokemon-name'>{pokemonName}</h2>
					<img className={`pokemon-image type-color--${types[0]}`} src={image} alt={`${pokemon}'s picture`} />
				</div>
				<div className='type-container'>
					{types.map((type) => (
						<button key={type} className={`basic-button type-color--${type}`}>
							{type}
						</button>
					))}
				</div>
			</div>
			<div className='pokemon-stats-container'>
				<Stats stats={stats} />
			</div>
		</Link>
	);
};

export default PokemonListItem;
