const formatPokemon = (apiResponse) => {
	const formattedPokemon = {
		name: apiResponse.name,
		image: apiResponse.sprites.front_default,
		height: apiResponse.height,
		weight: apiResponse.weight,
		types: apiResponse.types.map((typeObj) => typeObj.type.name),
		stats: apiResponse.stats.reduce(
			(prevStats, apiStat) => ({
				...prevStats,
				[apiStat.stat.name]: apiStat.base_stat,
			}),
			{ [apiResponse.stats[0].stat.name]: apiResponse.stats[0].base_stat }
		),
		moves: apiResponse.moves.map((apiMove) => apiMove.move.name),
		abilities: apiResponse.abilities.map(
			(apiAbility) => apiAbility.ability.name
		),
	};

	return formattedPokemon;
};

export default formatPokemon;
