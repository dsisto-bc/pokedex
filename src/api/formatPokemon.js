const formatStats = (stats) => {
	const formattedStats = [];
	return stats.map((apiStat) =>
		formattedStats.push({
			[apiStat.stat.name]: apiStat.base_stat,
			effort: apiStat.effort,
		})
	);
};

const formatPokemon = (apiResponse) => {
	const formattedPokemon = {
		name: apiResponse.name,
		image: apiResponse.sprites.front_default,
		height: apiResponse.height,
		weight: apiResponse.weight,
		types: apiResponse.types.map((typeObj) => typeObj.type.name),
		stats: formatStats(apiResponse.stats),
		moves: apiResponse.moves.map((apiMove) => apiMove.name),
		abilities: apiResponse.abilities.map((apiAbility) => apiAbility.name),
	};
	return formattedPokemon;
};

export default formatPokemon;
