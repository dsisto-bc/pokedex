import { Stat } from "../pages/PokemonDetailPage/DetailSections/PokemonStatsSection/Types";
import { Pokemon } from "../Types";

const formatPokemon = (apiResponse): Pokemon => {
	const formattedPokemon = {
		profile: {
			pokemonName: apiResponse.name as string,
			image: apiResponse.sprites.front_default as string,
		},
		attributes: [{ height: apiResponse.height as number }, { weight: apiResponse.weight as number }],
		types: apiResponse.types.map((typeObj) => typeObj.type.name) as string[],
		stats: apiResponse.stats.reduce(
			(prevStats, apiStat) => ({
				...prevStats,
				[apiStat.stat.name]: apiStat.base_stat,
			}),
			{
				[apiResponse.stats[0].stat.name]: apiResponse.stats[0].base_stat,
			}
		) as Stat[],
		moves: apiResponse.moves.map((apiMove) => apiMove.move.name) as string[],
		abilities: apiResponse.abilities.map((apiAbility) => apiAbility.ability.name) as string[],
	};

	return formattedPokemon;
};

export default formatPokemon;
