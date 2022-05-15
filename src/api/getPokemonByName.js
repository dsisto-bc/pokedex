import formatPokemon from "./formatPokemon";

const getPokemonByName = async (pokemon) => {
	try {
		let pokemonEntry = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemon}`
		);
		pokemonEntry = await pokemonEntry.json();
		const pokemonData = formatPokemon(pokemonEntry);
		return pokemonData;
	} catch (error) {
		console.error(
			"There was an error getting the pokemon requested",
			error
		);
		return [];
	}
};
export default getPokemonByName;
